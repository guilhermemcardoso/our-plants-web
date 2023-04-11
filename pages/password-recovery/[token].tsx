import { Inter } from 'next/font/google'
import { GetServerSideProps } from 'next'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  canProceed: boolean
  token: string
}

import { ParsedUrlQuery } from 'querystring'
import Button from '@/components/button'
import Input from '@/components/input'
import Container from '@/components/container'
import TitleContainer from '@/components/title-container'
import { useState } from 'react'
import { passwordRegex } from '@/utils/constants'
import Image from 'next/image'
import MessageContainer from '@/components/message-container'

interface Params extends ParsedUrlQuery {
  token: string
}

export default function PasswordRecovery({ canProceed, token }: Props) {
  const [result, setResult] = useState<'none' | 'error' | 'success'>('none')
  const [isLoading, setIsLoading] = useState(false)
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const [errors, setErrors] = useState<{
    password: string
    repassword: string
  }>({ password: '', repassword: '' })
  const onSubmit = async () => {
    const newErrors = { password: '', repassword: '' }

    if (password.length < 8 || !password.match(passwordRegex)) {
      newErrors.password =
        'A senha deve ter no mínimo 8 caracteres e possuir ao menos um caracter minúsculo, um caracter maiúsculo e um número'
    }

    if (repassword.length < 8 || !repassword.match(passwordRegex)) {
      newErrors.repassword =
        'A senha deve ter no mínimo 8 caracteres e possuir ao menos um caracter minúsculo, um caracter maiúsculo e um número'
    }

    if (newErrors.repassword.length === 0 && password !== repassword) {
      newErrors.repassword = 'Senha e confirmação de senha precisam ser iguais'
    }

    setErrors(newErrors)

    if (newErrors.password.length > 0 || newErrors.repassword.length > 0) {
      return
    }

    try {
      setIsLoading(true)
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/password-recovery`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: token, password: password }),
      })

      const { error } = await res.json()
      if (error) {
        setResult('error')
      }

      if (!error) {
        setResult('success')
      }
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  }

  const onPasswordChange = (value: string) => {
    setPassword(value)
  }

  const onRepasswordChange = (value: string) => {
    setRepassword(value)
  }

  return (
    <Container>
      <div className="flex flex-row sm:flex-col items-center justify-center w-full">
        <Image
          src="/logo.png"
          alt="Nossas plantas logo"
          priority
          width={100}
          height={90}
          className="mb-5 w-auto h-20 sm:w-auto sm:h-24 self-center"
        />
        <TitleContainer
          title="Nossas Plantas"
          subtitle={canProceed ? 'Digite e confirme sua nova senha abaixo' : ''}
        />
      </div>
      {canProceed ? (
        <div className="flex flex-col items-center justify-center w-full">
          <Input
            label="Senha"
            name="password"
            onTextChange={onPasswordChange}
            error={errors.password}
            placeholder="Senha"
            className="mt-8"
          />
          <Input
            label="Confirmar senha"
            name="repassword"
            onTextChange={onRepasswordChange}
            error={errors.repassword}
            placeholder="Confirmar senha"
            className="mt-8"
          />
          <Button title="CONFIRMAR" onClick={onSubmit} className="mt-10" />
          {result === 'error' && (
            <MessageContainer
              type="error"
              description="Não foi possível concluir esta ação agora, tente novamente mais tarde."
              className="mt-10"
            />
          )}
          {result === 'success' && (
            <MessageContainer
              description="Senha alterada com sucesso."
              className="mt-10"
            />
          )}
        </div>
      ) : (
        <MessageContainer
          type="error"
          description="Link para recuperação de senha expirado e/ou inválido."
          className="mt-10"
        />
      )}
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { token } = context.params as Params
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/validate-password-recovery-token?token=${token}`
  )

  const { error } = await res.json()

  return { props: { canProceed: !error, token } }
}
