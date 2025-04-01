"use client"

import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect } from "react"
import ImageFallback from "./image-fallback"

interface ImageLightboxProps {
  isOpen: boolean
  onClose: () => void
  src: string
  alt: string
  onPrevious?: () => void
  onNext?: () => void
  hasPrevious?: boolean
  hasNext?: boolean
  isRtl?: boolean
}

export default function ImageLightbox({ 
  isOpen, 
  onClose, 
  src, 
  alt, 
  onPrevious, 
  onNext,
  hasPrevious = true,
  hasNext = true,
  isRtl = false
}: ImageLightboxProps) {
  // Close on escape key press and navigate with arrow keys
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      } else if (event.key === "ArrowLeft") {
        // In RTL mode, left arrow means next, in LTR mode it means previous
        isRtl ? onNext?.() : onPrevious?.()
      } else if (event.key === "ArrowRight") {
        // In RTL mode, right arrow means previous, in LTR mode it means next
        isRtl ? onPrevious?.() : onNext?.()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      // Prevent scrolling when lightbox is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      // Restore scrolling when lightbox is closed
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose, onPrevious, onNext, isRtl])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 lightbox-container"
      onClick={onClose}
    >
      <div className="relative max-w-5xl w-full max-h-[90vh] lightbox-content">
        {/* Close button */}
        <button 
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-20"
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          aria-label="Close"
        >
          <X size={24} />
        </button>
        
        {/* Previous button */}
        {onPrevious && hasPrevious && (
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-20"
            onClick={(e) => {
              e.stopPropagation()
              onPrevious()
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        
        {/* Next button */}
        {onNext && hasNext && (
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-20"
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        )}
        
        <div 
          className="relative h-full max-h-[80vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <ImageFallback
            src={src || "/placeholder.svg"}
            fallbackSrc="/placeholder.svg?height=800&width=600&text=Image+not+available"
            alt={alt}
            className="object-contain mx-auto max-h-[80vh] rounded-lg"
            width={1200}
            height={800}
          />
        </div>
      </div>
    </div>
  )
}
