"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "../../data/site-config";

function FullWidthImage({
  src,
  alt,
  maxH,
  fit,
}: {
  src: string;
  alt: string;
  maxH: string;
  fit: "cover" | "contain";
}) {
  const [error, setError] = useState(false);
  return (
    <div className={`relative w-full ${maxH} overflow-hidden`}>
      {!error ? (
        <Image
          src={src}
          alt={alt}
          fill
          onError={() => setError(true)}
          className={fit === "cover" ? "object-cover" : "object-contain"}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gray-800 text-gray-500">
          이미지 준비 중
        </div>
      )}
    </div>
  );
}

function AspectImage({
  src,
  alt,
  aspect,
}: {
  src: string;
  alt: string;
  aspect: string;
}) {
  const [error, setError] = useState(false);
  return (
    <div
      className="relative w-full overflow-hidden rounded-xl bg-gray-100"
      style={{ aspectRatio: aspect.replace("/", " / ") }}
    >
      {!error ? (
        <Image
          src={src}
          alt={alt}
          fill
          onError={() => setError(true)}
          className="object-contain"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-400">
          이미지 준비 중
        </div>
      )}
    </div>
  );
}

function UnitCard({ unit }: { unit: (typeof siteConfig.product.units)[number] }) {
  const [error, setError] = useState(false);
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
      <div
        className="flex items-center justify-between px-5 py-4 text-white"
        style={{ backgroundColor: unit.color }}
      >
        <span className="text-lg font-bold">{unit.badge}</span>
        <span className="text-sm font-medium">총 {unit.count}</span>
      </div>

      <div className="relative h-56 w-full bg-gray-50">
        {!error ? (
          <Image
            src={unit.planImage}
            alt={unit.planAlt}
            fill
            onError={() => setError(true)}
            className="object-contain"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-400">
            평면도 준비 중
          </div>
        )}
      </div>

      <div className="space-y-2 border-t border-gray-100 px-5 py-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">전용면적</span>
          <span className="font-semibold text-gray-900">{unit.exclusive}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">공급면적</span>
          <span className="font-semibold text-gray-900">{unit.supply}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">계약면적</span>
          <span className="font-semibold text-gray-900">{unit.contract}</span>
        </div>
      </div>
    </div>
  );
}

export default function ProductSection() {
  const { sitePlan, floorPlan, community, units, locationPremium, saleBenefit } =
    siteConfig.product;

  return (
    <section id="product">
      <div className="bg-white py-12 text-center md:py-16">
        <h2 className="text-2xl font-bold text-gray-900 md:text-4xl">상품안내</h2>
        <h3 className="mt-3 text-sm text-gray-500 md:text-base">
          동탄역 디에트르 퍼스티지 평면도 및 단지구성
        </h3>
      </div>

      <div className="bg-dark">
        <FullWidthImage
          src={sitePlan.image}
          alt={sitePlan.alt}
          maxH="h-[280px] md:h-[700px]"
          fit="cover"
        />
      </div>

      <div className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <h3 className="mb-8 text-center text-xl font-bold text-gray-900 md:text-2xl">
            &apos;셔세권&apos; 프리미엄 — 오르는 입지에는 이유가 있습니다
          </h3>
          <div className="space-y-6">
            <AspectImage
              src={locationPremium.newsImage}
              alt={locationPremium.newsAlt}
              aspect={locationPremium.newsAspect}
            />
            <AspectImage
              src={locationPremium.priceImage}
              alt={locationPremium.priceAlt}
              aspect={locationPremium.priceAspect}
            />
          </div>
        </div>
      </div>

      <div className="bg-navy py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <h3 className="mb-8 text-center text-xl font-bold text-gold md:text-2xl">
            분양특전 — 프리미엄 마감재·가전 무상시공
          </h3>
          <AspectImage
            src={saleBenefit.image}
            alt={saleBenefit.alt}
            aspect={saleBenefit.aspect}
          />
        </div>
      </div>

      <div className="bg-dark pb-10">
        <FullWidthImage
          src={floorPlan.image}
          alt={floorPlan.alt}
          maxH="h-[280px] md:h-[700px]"
          fit="contain"
        />
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-4 px-4 pt-6 text-sm text-white md:gap-8 md:text-base">
          <span>🔴 75㎡0A 43실</span>
          <span>🔵 84㎡0A 92실</span>
          <span>🟠 84㎡0B 188실</span>
          <span className="font-bold text-gold">총 323실</span>
        </div>
      </div>

      <div className="bg-navy py-12 text-center md:py-16">
        <h3 className="mb-8 text-xl font-bold text-gold md:text-2xl">커뮤니티시설</h3>
        <FullWidthImage
          src={community.image}
          alt={community.alt}
          maxH="h-[220px] md:h-[500px]"
          fit="cover"
        />
        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3 px-4">
          {community.facilities.map((facility) => (
            <span
              key={facility}
              className="rounded-full border border-gold px-4 py-2 text-xs text-white md:text-sm"
            >
              {facility}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h3 className="mb-10 text-center text-xl font-bold text-gray-900 md:text-2xl">
            주거용 오피스텔 평면도
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {units.map((unit) => (
              <UnitCard key={unit.badge} unit={unit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
