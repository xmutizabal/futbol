"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import VideoCarousel from "@/components/video-carousel"
import Link from "next/link"
export default function VideoLanding() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <VideoCarousel />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div
        className={`relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="max-w-3xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Futbol Analisis
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-gray-300 md:text-xl">
               Tecnología de visión artificial de vanguardia para analizar y mejorar el rendimiento del fútbol en tiempo real.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4 min-[400px]:flex-row">
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
                <Link href="/login">Comenzar</Link>
            </Button>
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
                <Link href="/detalles">¿Que es esto?</Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-white">80% y mejorando</h2>
            <p className="text-sm text-gray-300">Precisión en Tracking</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-white">Análisis</h2>
            <p className="text-sm text-gray-300">en tiempo real</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-white">Métricas</h2>
            <p className="text-sm text-gray-300">de IA análisis</p>
          </div>
        </div>
      </div>
    </div>
  )
}
