import React from 'react'

interface Props {
  title?: string
  subtitle?: string
  className?: string
}

export default function TitleContainer({ title, subtitle, className }: Props) {
  return (
    <div className={`mx-3 sm:mx-auto max-w-2xl sm:text-center ${className}`}>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        {title}
      </h2>
      <p className="mt-1 sm:mt-2 mb-5 sm:mb-0 text-md sm:text-lg text-gray-600">
        {subtitle}
      </p>
    </div>
  )
}
