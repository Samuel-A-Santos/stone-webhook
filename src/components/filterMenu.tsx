import React from "react";

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
        <option value="">Todas as faixas de tempo</option>
        <option value="1d">Hoje</option>
        <option value="7d">Última semana</option>
        <option value="14d">Últimos 14 dias</option>
      </select>
      <select
        value={area || ""}
        onChange={e => setArea(e.target.value)}
        className="border rounded px-3 py-2"
      >
        <option value="">Todos departamentos</option>
        <option value="comercial">Comercial</option>
        <option value="logistica">Logística</option>
        <option value="tecnologia">Tecnologia</option>
        <option value="relacionamento-com-o-cliente">Relacionamento com o Cliente</option>
        <option value="outras-vagas">Outras Vagas</option>
        <option value="null">Sem departamento</option>
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
