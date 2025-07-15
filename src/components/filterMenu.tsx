import React from "react";

const TIME_FILTERS = [
  { value: "", label: "Todas as faixas de tempo" },
  { value: "1d", label: "Hoje" },
  { value: "7d", label: "Última semana" },
  { value: "14d", label: "Últimos 14 dias" },
];

const AREA_FILTERS = [
  { value: "", label: "Todos departamentos" },
  { value: "comercial", label: "Comercial" },
  { value: "logistica", label: "Logística" },
  { value: "tecnologia", label: "Tecnologia" },
  { value: "relacionamento-com-o-cliente", label: "Relacionamento com o Cliente" },
  { value: "outras-vagas", label: "Outras Vagas" },
  { value: "null", label: "Sem departamento" },
];

type Props = {
  selected: string | null;
  onChange: (value: string | null) => void;
  area: string | null;
  setArea: (value: string | null) => void;
  city: string | null;
  setCity: (value: string | null) => void;
};

export function FilterMenu({ selected, onChange, area, setArea, city, setCity }: Props) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select
        value={selected || ""}
        onChange={e => onChange(e.target.value || null)}
        className="border rounded px-3 py-2"
      >
        {TIME_FILTERS.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <select
        value={area || ""}
        onChange={e => setArea(e.target.value)}
        className="border rounded px-3 py-2"
      >
        {AREA_FILTERS.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Filtrar por cidade"
        value={city || ""}
        onChange={e => setCity(e.target.value)}
        className="border rounded px-3 py-2"
      />
    </div>
  );
}
