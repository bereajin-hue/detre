"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "../data/site-config";

export default function HeroBanner() {
  const slides = siteConfig.hero.slides;
  const [current, setCurrent] = useState(0);
  const [errored, setErrored] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {!errored[i] ? (
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={i === 0}
              onError={() => setErrored((p) => ({ ...p, [i]: true }))}
              className="object-cover"
            />
          ) : (
            <div className="h-full w-full bg-gray-800" />
          )}
          <div className="absolute inset-0 bg-black/45" />
        </div>
      ))}

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-black text-white drop-shadow-lg md:text-6xl">
          {slides[current].title}
        </h1>
        <p className="mt-4 text-base font-medium text-white/90 drop-shadow md:text-2xl">
          {slides[current].subtitle}
        </p>
      </div>

      <div className="absolute bottom-24 right-6 z-10 flex gap-2 md:bottom-28 md:right-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`슬라이드 ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              i === current ? "w-6 bg-gold" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <a
          href="#contact"
          className="flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-navy shadow-xl transition-transform hover:scale-105 md:text-base"
        >
          📞 {siteConfig.contact.phone} 문의하기
        </a>
      </div>
    </section>
  );
}
