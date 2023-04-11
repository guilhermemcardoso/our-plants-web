import React from 'react'

interface Props {
  onClick: () => void
  title: string
  className?: string
}

export default function Button({ onClick, title, className }: Props) {
  return (
    <button
      onClick={onClick}
      className={`w-full max-w-lg rounded-md bg-emerald-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-emerald-600 ${className}`}
    >
      {title}
    </button>
  )
}
