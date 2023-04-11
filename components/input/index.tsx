import Image from 'next/image'
import React, { useState } from 'react'
import { ChangeEvent } from 'react'

interface Props {
  onTextChange: (value: string) => void
  name: string
  placeholder: string
  label: string
  error: string
  className?: string
}

export default function Input({
  onTextChange,
  name,
  placeholder,
  label,
  error,
  className,
}: Props) {
  const [show, setShow] = useState(false)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    onTextChange(event.target.value)
  }

  const onClick = () => {
    setShow(!show)
  }

  return (
    <div className={`w-full max-w-lg ${className}`}>
      <label
        htmlFor={name}
        className="text-sm font-semibold leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-1.5 relative">
        <input
          onChange={onChange}
          type={show ? 'text' : 'password'}
          name={name}
          id={name}
          placeholder={placeholder}
          className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <Image
          onClick={onClick}
          src={`/icons/eye-${show ? 'closed' : 'opened'}.svg`}
          alt="Next.js Logo"
          width={18}
          height={18}
          priority
          className="absolute top-3 right-3"
        />
        <p className="mt-1 text-xs text-red-500">{error}</p>
      </div>
    </div>
  )
}
