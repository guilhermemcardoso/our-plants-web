import Image from 'next/image'
import React from 'react'

interface Props {
  onClick: () => void
  title: string
  className?: string
  isLoading?: boolean
}

export default function Button({
  onClick,
  title,
  className,
  isLoading = false,
}: Props) {
  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      className={`w-full max-w-lg rounded-md bg-emerald-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-emerald-600 flex flex-row items-center justify-center ${className}`}
    >
      {isLoading && (
        <Image
          src="/icons/loading.svg"
          alt="Loading Icon"
          priority
          width={20}
          height={20}
          className="mr-2"
        />
      )}
      {title}
    </button>
  )
}
