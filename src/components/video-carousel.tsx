"use client"

import { useState, useEffect, useMemo } from "react"

interface Video {
  id: string
  start: number
  end?: number // Opcional, ya que si es 0 se reproduce completo
}

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const videos = useMemo(() => [
    { id: "4eo1BwSTs0I", start: 0 },
    { id: "PcHuI7RjXGg", start: 0, end: 10 },
    //{ id: "IGeawRX0tUY", start: 150, end: 164 },
  ], []) // ← Dependencia vacía para que no se regenere en cada render


  useEffect(() => {
    const video = videos[currentIndex]
    const duration = video.end ? (video.end - video.start) * 1000 : 15000 // 15s por defecto si es full

    const timer = setTimeout(() => {
        if (isTransitioning) console.log("1")
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length)
        setIsTransitioning(false)
      }, 1000) // Duración de la transición
    }, duration)

    return () => clearTimeout(timer)
  }, [currentIndex, videos])

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      {videos.map((video, index) => (
        <div
          key={video.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&start=${video.start}${
              video.end ? `&end=${video.end}` : ""
            }&loop=1&playlist=${video.id}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="h-screen w-screen object-cover"
            style={{ pointerEvents: "none" }}
          />
        </div>
      ))}
    </div>
  )
}


