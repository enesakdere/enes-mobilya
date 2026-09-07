'use client'

import { useCallback, useRef, useState } from 'react'
import Image from 'next/image'
import { MoveHorizontal } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

export function BeforeAfterSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const draggingRef = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, pct)))
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
    updateFromClientX(e.clientX)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return
    updateFromClientX(e.clientX)
  }
  const onPointerUp = () => {
    draggingRef.current = false
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPosition((p) => Math.max(0, p - 4))
    if (e.key === 'ArrowRight') setPosition((p) => Math.min(100, p + 4))
  }

  return (
    <section
      id="oncesi-sonrasi"
      className="scroll-mt-16 bg-secondary/60 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Öncesi / Sonrası"
          title="Değişimi Kendiniz Görün"
          description="Ayırıcıyı sürükleyerek eskiyen bir koltuğun yenileme sonrası nasıl bambaşka bir hale geldiğini keşfedin."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <div
            ref={containerRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            className="relative aspect-[16/10] w-full touch-none select-none overflow-hidden rounded-xl border border-border shadow-xl shadow-foreground/5"
          >
            {/* After (base layer) */}
            <Image
              src="/before-after/sonrasi.png"
              alt="Yenileme sonrası tazelenmiş koltuk"
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
            <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-gold-foreground">
              Sonrası
            </span>

            {/* Before (clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Image
                src="/before-after/oncesi.png"
                alt="Yenileme öncesi eskimiş koltuk"
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background">
                Öncesi
              </span>
            </div>

            {/* Handle */}
            <div
              className="absolute inset-y-0 z-10 w-0.5 bg-background"
              style={{ left: `${position}%` }}
            >
              <button
                type="button"
                onKeyDown={onKeyDown}
                onPointerDown={onPointerDown}
                className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-background text-foreground shadow-lg ring-1 ring-border focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Öncesi ve sonrası ayırıcısını sürükleyin"
                role="slider"
                aria-valuenow={Math.round(position)}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <MoveHorizontal className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
