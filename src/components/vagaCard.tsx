import React from "react";
import { timeAgo } from "@/utils/timeAgo";

export function VagaCard({
  title,
  city,
  uf,
  area_slug,
  slug,
  created_at
}: {
  title: string;
  city: string;
  uf: string;
  area_slug: string;
  slug: string;
  created_at: string;
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm p-6 flex flex-col gap-2 hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 font-semibold uppercase">
          {area_slug}
        </span>
        <span className="text-xs text-gray-400">{timeAgo(created_at)}</span>
      </div>
      <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>
          📍 {city}
          {uf ? `, ${uf}` : ""}
        </span>
      </div>
      <a
        href={`https://jornada.stone.com.br/times/${area_slug}/oportunidades/${slug}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Ver detalhes & candidatar-se
      </a>
    </div>
  );
}
