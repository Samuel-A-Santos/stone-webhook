"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supaBase';
import { VagaCard } from '@/components/vagaCard';
import { FilterMenu } from '@/components/filterMenu';

type Vaga = {
  id: string;
  title: string;
  city: string;
  uf: string;
  area_slug: string;
  days_since_posted: number;
  faixa_tempo: string;
  slug: string;
};

export default function Home() {
  const [vagas, setVagas] = useState<Vaga[]>([]);
  const [filter, setFilter] = useState<string | null>(null);
  const [area, setArea] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVagas = async () => {
      setLoading(true);
      let query = supabase.from('vagas').select('*').order('created_at', { ascending: false });
      if (filter) query = query.eq('faixa_tempo', filter);
      if (area) query = query.eq('area_slug', area);
      if (city) query = query.ilike('city', `%${city}%`);
      const { data, error } = await query;
      if (error) console.error(error);
      else setVagas(data || []);
      setLoading(false);
    };

    loadVagas();
  }, [filter, area, city]);

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📌 Vagas Recentes</h1>
      <FilterMenu selected={filter} onChange={setFilter} area={area} setArea={setArea} city={city} setCity={setCity} />
      {loading ? (
        <p>Carregando vagas...</p>
      ) : (
        <div className="space-y-4">
          {vagas.map(vaga => (
            <VagaCard key={vaga.id} {...vaga} />
          ))}
        </div>
      )}
    </main>
  );
}