import { Inter } from 'next/font/google'
import { GetServerSideProps } from 'next'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  confirmation: boolean
}

import { ParsedUrlQuery } from 'querystring'
import Container from '@/components/container'
import Image from 'next/image'
import TitleContainer from '@/components/title-container'
import MessageContainer from '@/components/message-container'

interface Params extends ParsedUrlQuery {
  token: string
}

export default function EmailConfirmation({ confirmation }: Props) {
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
        <TitleContainer title="Nossas Plantas" subtitle={''} />
      </div>
      {confirmation ? (
        <div className="flex flex-col items-center justify-center w-full">
          <MessageContainer
          description="Email confirmado com sucesso."
          className="mt-10"
        />
        </div>
      ) : (
        <MessageContainer
          type="error"
          description="Link para confirmação de email expirado e/ou inválido."
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
    `${process.env.NEXT_PUBLIC_API_URL}/auth/email-confirmation?token=${token}`
  )

  const { error } = await res.json()

  return { props: { confirmation: !error } }
}
