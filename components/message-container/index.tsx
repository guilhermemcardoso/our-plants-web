import Image from 'next/image'
import React from 'react'

interface Props {
  description?: string
  className?: string
  type?: 'success' | 'error'
}

export default function MessageContainer({
  description,
  className,
  type = 'success',
}: Props) {
  return (
    <div
      className={`flex flex-row items-center justify-center border-2 rounded-md p-4 ${
        type === 'error' ? 'bg-rose-100' : 'bg-emerald-100'
      } mx-3 sm:mx-auto max-w-2xl ${className}`}
    >
      <Image
        src={`/icons/${type === 'error' ? 'error' : 'check'}.svg`}
        alt="Error"
        priority
        width={20}
        height={20}
      />
      <p className="ml-2 text-md sm:text-lg text-gray-600">{description}</p>
    </div>
  )
}
