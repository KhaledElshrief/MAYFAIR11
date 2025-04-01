"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"

interface ImageFallbackProps extends ImageProps {
  fallbackSrc: string
}

export default function ImageFallback({ src, fallbackSrc, alt, ...rest }: ImageFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [error, setError] = useState(false)

  useEffect(() => {
    setImgSrc(src)
    setError(false)
  }, [src])

  return (
    <Image
      {...rest}
      src={error ? fallbackSrc : imgSrc}
      alt={alt}
      onError={() => {
        setError(true)
        setImgSrc(fallbackSrc)
      }}
    />
  )
}

