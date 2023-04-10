import { Inter } from 'next/font/google'
import { GetServerSideProps } from 'next'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  confirmation: boolean
}

import { ParsedUrlQuery } from 'querystring'

interface Params extends ParsedUrlQuery {
  token: string
}

export default function Home({ confirmation }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {confirmation ? (
        <p>Email confirmado com sucesso.</p>
      ) : (
        <p>Link para confirmação de email expirado e/ou inválido.</p>
      )}
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { token } = context.params as Params
  const res = await fetch(
    `${process.env.API_URL}/email-confirmation?token=${token}`
  )

  const { error } = await res.json()

  return { props: { confirmation: !error } }
}
