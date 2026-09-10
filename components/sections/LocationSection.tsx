"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "../../data/site-config";

export default function LocationSection() {
  const { image, alt, points, youtube } = siteConfig.location;
  const [imgError, setImgError] = useState(false);

  return (
    <section id="location" className="bg-dark py-12 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="mb-10 text-center text-2xl font-bold md:mb-16 md:text-4xl">
          입지안내
        </h2>

        <div className="relative mb-12 h-[300px] w-full overflow-hidden rounded-xl md:h-[600px]">
          {!imgError ? (
            <Image
              src={image}
              alt={alt}
              fill
              onError={() => setImgError(true)}
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-800 text-gray-500">
              위치도 이미지 준비 중
            </div>
          )}
        </div>

        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mb-16 md:grid-cols-4 md:gap-6">
          {points.map((point) => (
            <div
              key={point.text}
              className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4"
            >
              <span className="text-2xl">{point.icon}</span>
              <p className="text-sm leading-snug text-white">{point.text}</p>
            </div>
          ))}
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-xl">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${youtube.embedId}`}
            title={youtube.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
