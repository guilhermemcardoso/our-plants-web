import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Container({ children }: Props) {
  return (
    <main className="bg-zinc-100 flex min-h-screen flex-col items-center justify-start p-12">
      {children}
    </main>
  )
}
