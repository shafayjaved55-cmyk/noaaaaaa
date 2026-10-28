"use client";

import { useState } from "react";
import Image from "next/image";
import { ImagePlus } from "lucide-react";
import type { LifePhoto } from "@/data/life-photos";

const teamDir = "/images/life/team";

/**
 * Renders one team photo slot. If the image file hasn't been added to
 * `public/images/life/team/` yet, a tidy placeholder is shown instead of a
 * broken image — so the page always looks intentional.
 */
export function TeamPhoto({ photo }: { photo: LifePhoto }) {
  const [missing, setMissing] = useState(false);

  return (
    <figure className="group relative h-full overflow-hidden rounded-3xl">
      {missing ? (
        <div className="dot-grid flex h-full min-h-[13rem] w-full flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-line bg-cream px-5 py-8 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-white text-fog">
            <ImagePlus className="h-6 w-6" />
          </span>
          <p className="text-[0.82rem] font-bold leading-snug text-ink/70">{photo.caption}</p>
          <p className="rounded-full bg-white px-3 py-1 font-mono text-[0.68rem] font-semibold text-smoke">
            {photo.file}
          </p>
        </div>
      ) : (
        <>
          <Image
            src={`${teamDir}/${photo.file}`}
            alt={photo.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            onError={() => setMissing(true)}
            className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <figcaption className="absolute bottom-4 left-4 right-4 translate-y-2 text-[0.85rem] font-semibold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {photo.caption}
          </figcaption>
        </>
      )}
    </figure>
  );
}
