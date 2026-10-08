import React, { useState } from 'react';
import { 
  HardHat, 
  Headphones, 
  Glasses, 
  Wind, 
  Hand, 
  Footprints, 
  ShieldAlert, 
  Anchor, 
  CheckCircle2, 
  Info,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { Language } from '../types/prl';
import { PPE_BODY_ZONES } from '../data/translations';

interface InteractiveWorkerPPEProps {
  language: Language;
}

export const InteractiveWorkerPPE: React.FC<InteractiveWorkerPPEProps> = ({ language }) => {
  const [selectedZoneId, setSelectedZoneId] = useState<string>('head');

  const selectedZone = PPE_BODY_ZONES.find((z) => z.id === selectedZoneId) || PPE_BODY_ZONES[0];

  const getZoneIcon = (id: string, className: string = 'w-5 h-5') => {
    switch (id) {
      case 'head': return <HardHat className={className} />;
      case 'ears': return <Headphones className={className} />;
      case 'eyes': return <Glasses className={className} />;
      case 'respiratory': return <Wind className={className} />;
      case 'hands': return <Hand className={className} />;
      case 'feet': return <Footprints className={className} />;
      case 'trunk': return <ShieldAlert className={className} />;
      case 'full_body': return <Anchor className={className} />;
      default: return <HardHat className={className} />;
    }
  };

  return (
    <div className="w-full flex flex-col gap-6">
      
      {/* Intro banner */}
      <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm md:text-base font-bold text-white">
              {language === 'ca' 
                ? 'Esquema Anatòmic Interactiu d\'EPIs (Normativa INSST & CE)' 
                : 'Esquema Anatómico Interactivo de EPIs (Normativa INSST & CE)'}
            </h3>
            <p className="text-xs text-slate-400">
              {language === 'ca'
                ? 'Fes clic sobre qualsevol zona o connector circular per inspeccionar els equips de protecció individual i el seu ús en varadors.'
                : 'Haz clic sobre cualquier zona o conector circular para inspeccionar los equipos de protección individual y su uso en varaderos.'}
            </p>
          </div>
        </div>
        <div className="text-xs font-mono text-sky-400 bg-sky-950/60 border border-sky-800/60 px-2.5 py-1 rounded-md shrink-0">
          8 {language === 'ca' ? 'Regions Corporals' : 'Regiones Corporales'}
        </div>
      </div>

      {/* Main Interactive Stage: Worker Illustration + Connecting Badges + Details Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left / Center Stage: Worker Vector & Radial Connectors (7 columns) */}
        <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-6 relative flex flex-col items-center justify-center min-h-[460px]">
          
          {/* Quick selection pill bar */}
          <div className="w-full flex flex-wrap gap-1.5 justify-center mb-4">
            {PPE_BODY_ZONES.map((zone) => {
              const isSelected = zone.id === selectedZoneId;
              return (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZoneId(zone.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30 ring-2 ring-sky-400/50'
                      : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/60'
                  }`}
                >
                  {getZoneIcon(zone.id, 'w-3.5 h-3.5')}
                  <span>{zone.name[language]}</span>
                </button>
              );
            })}
          </div>

          {/* Central Interactive Worker Vector & Connecting Points */}
          <div className="relative w-full max-w-[420px] h-[360px] flex items-center justify-center">
            
            {/* Vector Worker Graphic */}
            <svg
              viewBox="0 0 300 400"
              className="w-full h-full max-h-[360px] drop-shadow-xl"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Radial Guide Lines from Worker to peripheral connector points */}
              <g stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.45">
                {/* Head line */}
                <line x1="150" y1="50" x2="50" y2="40" />
                {/* Ears line */}
                <line x1="170" y1="85" x2="250" y2="60" />
                {/* Eyes line */}
                <line x1="150" y1="75" x2="50" y2="105" />
                {/* Respiratory line */}
                <line x1="150" y1="95" x2="250" y2="125" />
                {/* Hands line */}
                <line x1="90" y1="210" x2="50" y2="215" />
                {/* Trunk line */}
                <line x1="150" y1="165" x2="250" y2="200" />
                {/* Feet line */}
                <line x1="130" y1="360" x2="50" y2="330" />
                {/* Full Body line */}
                <line x1="170" y1="240" x2="250" y2="300" />
              </g>

              {/* Worker Body Silhouette / Stylized Vector Model */}
              {/* Boots (Yellow / Orange protective boots) */}
              <g id="boots" className="cursor-pointer" onClick={() => setSelectedZoneId('feet')}>
                <path d="M120 330 L115 375 L142 375 L145 350 L135 330 Z" fill={selectedZoneId === 'feet' ? '#38bdf8' : '#eab308'} stroke="#0f172a" strokeWidth="2" />
                <path d="M155 330 L158 350 L178 375 L185 375 L180 330 Z" fill={selectedZoneId === 'feet' ? '#38bdf8' : '#eab308'} stroke="#0f172a" strokeWidth="2" />
                {/* Boot sole treads */}
                <rect x="112" y="372" width="32" height="5" rx="1" fill="#1e293b" />
                <rect x="156" y="372" width="32" height="5" rx="1" fill="#1e293b" />
              </g>

              {/* Legs & Trousers (Safety hi-vis orange pants) */}
              <g id="trousers" className="cursor-pointer" onClick={() => setSelectedZoneId('feet')}>
                <path d="M120 220 L115 335 L143 335 L148 245 L152 245 L157 335 L185 335 L180 220 Z" fill={selectedZoneId === 'feet' ? '#0284c7' : '#ea580c'} stroke="#0f172a" strokeWidth="2" />
                {/* Reflective bands on trousers */}
                <rect x="115" y="305" width="28" height="8" fill="#f8fafc" opacity="0.9" />
                <rect x="157" y="305" width="28" height="8" fill="#f8fafc" opacity="0.9" />
              </g>

              {/* Torso & High-Vis Vest */}
              <g id="torso" className="cursor-pointer" onClick={() => setSelectedZoneId('trunk')}>
                <rect x="110" y="130" width="80" height="95" rx="8" fill={selectedZoneId === 'trunk' ? '#0284c7' : '#f97316'} stroke="#0f172a" strokeWidth="2" />
                {/* High-visibility reflective bands */}
                <rect x="110" y="170" width="80" height="12" fill="#f8fafc" opacity="0.95" />
                <rect x="130" y="130" width="10" height="85" fill="#f8fafc" opacity="0.95" />
                <rect x="160" y="130" width="10" height="85" fill="#f8fafc" opacity="0.95" />
                {/* Vest center zipper */}
                <line x1="150" y1="130" x2="150" y2="225" stroke="#334155" strokeWidth="2.5" />
              </g>

              {/* Arms & Hands (Gloves) */}
              <g id="arms-gloves" className="cursor-pointer" onClick={() => setSelectedZoneId('hands')}>
                {/* Left arm */}
                <path d="M110 135 L85 190 L95 230 L110 200 Z" fill="#334155" />
                {/* Left glove */}
                <path d="M85 205 L76 240 L96 245 L102 215 Z" fill={selectedZoneId === 'hands' ? '#38bdf8' : '#eab308'} stroke="#0f172a" strokeWidth="1.5" />
                
                {/* Right arm */}
                <path d="M190 135 L215 190 L205 230 L190 200 Z" fill="#334155" />
                {/* Right glove */}
                <path d="M215 205 L224 240 L204 245 L198 215 Z" fill={selectedZoneId === 'hands' ? '#38bdf8' : '#eab308'} stroke="#0f172a" strokeWidth="1.5" />
              </g>

              {/* Head, Face & Protective Helmet */}
              <g id="head-group">
                {/* Neck */}
                <rect x="140" y="112" width="20" height="22" fill="#fed7aa" />
                {/* Face base */}
                <ellipse cx="150" cy="88" rx="20" ry="24" fill="#fed7aa" stroke="#0f172a" strokeWidth="1.5" />
                
                {/* Ears / Ear Protection Muff */}
                <g className="cursor-pointer" onClick={() => setSelectedZoneId('ears')}>
                  <path d="M125 75 C125 45, 175 45, 175 75" fill="none" stroke={selectedZoneId === 'ears' ? '#38bdf8' : '#64748b'} strokeWidth="5" />
                  <rect x="123" y="75" width="8" height="22" rx="4" fill={selectedZoneId === 'ears' ? '#38bdf8' : '#475569'} stroke="#0f172a" strokeWidth="1.5" />
                  <rect x="169" y="75" width="8" height="22" rx="4" fill={selectedZoneId === 'ears' ? '#38bdf8' : '#475569'} stroke="#0f172a" strokeWidth="1.5" />
                </g>

                {/* Eye Goggles */}
                <g className="cursor-pointer" onClick={() => setSelectedZoneId('eyes')}>
                  <rect x="133" y="74" width="34" height="15" rx="6" fill={selectedZoneId === 'eyes' ? '#38bdf8' : '#0284c7'} opacity="0.9" stroke="#0f172a" strokeWidth="1.5" />
                  <circle cx="142" cy="81" r="3" fill="#ffffff" opacity="0.8" />
                  <circle cx="158" cy="81" r="3" fill="#ffffff" opacity="0.8" />
                  <path d="M130 81 L133 81 M167 81 L170 81" stroke="#0f172a" strokeWidth="2" />
                </g>

                {/* Respirator Mask */}
                <g className="cursor-pointer" onClick={() => setSelectedZoneId('respiratory')}>
                  <path d="M138 90 L162 90 L158 108 L142 108 Z" fill={selectedZoneId === 'respiratory' ? '#38bdf8' : '#94a3b8'} stroke="#0f172a" strokeWidth="1.5" />
                  {/* Filter cartridge */}
                  <ellipse cx="150" cy="100" rx="8" ry="6" fill="#475569" stroke="#0f172a" strokeWidth="1" />
                </g>

                {/* Safety Helmet (Yellow Hardhat) */}
                <g className="cursor-pointer" onClick={() => setSelectedZoneId('head')}>
                  <path d="M125 68 C125 35, 175 35, 175 68 Z" fill={selectedZoneId === 'head' ? '#38bdf8' : '#facc15'} stroke="#0f172a" strokeWidth="2" />
                  {/* Helmet brim */}
                  <path d="M120 68 L180 68 C180 72, 120 72, 120 68 Z" fill={selectedZoneId === 'head' ? '#0284c7' : '#eab308'} stroke="#0f172a" strokeWidth="1.5" />
                  {/* Helmet center ridge */}
                  <path d="M148 40 L152 40 L152 68 L148 68 Z" fill="#ca8a04" opacity="0.6" />
                </g>
              </g>

              {/* Safety Harness Overlay (Body straps) */}
              <g id="harness" className="cursor-pointer" onClick={() => setSelectedZoneId('full_body')} opacity={selectedZoneId === 'full_body' ? '1' : '0.4'}>
                <line x1="130" y1="130" x2="165" y2="225" stroke="#10b981" strokeWidth="3" />
                <line x1="170" y1="130" x2="135" y2="225" stroke="#10b981" strokeWidth="3" />
                <rect x="144" y="165" width="12" height="12" rx="2" fill="#047857" stroke="#ffffff" strokeWidth="1.5" />
              </g>
            </svg>

            {/* Interactive Radial Connector Nodes Overlay (Buttons positioned around the worker) */}
            
            {/* 1. Head (Top Left) */}
            <button
              onClick={() => setSelectedZoneId('head')}
              className={`absolute top-4 left-2 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                selectedZoneId === 'head'
                  ? 'bg-sky-500 text-white scale-110 shadow-lg shadow-sky-500/50 ring-4 ring-sky-400/40'
                  : 'bg-slate-800 text-sky-400 border-2 border-sky-500/40 hover:scale-105'
              }`}
              title="Cap / Cabeza"
            >
              <HardHat className="w-5 h-5" />
            </button>

            {/* 2. Ears (Top Right) */}
            <button
              onClick={() => setSelectedZoneId('ears')}
              className={`absolute top-8 right-2 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                selectedZoneId === 'ears'
                  ? 'bg-purple-500 text-white scale-110 shadow-lg shadow-purple-500/50 ring-4 ring-purple-400/40'
                  : 'bg-slate-800 text-purple-400 border-2 border-purple-500/40 hover:scale-105'
              }`}
              title="Oïda / Oído"
            >
              <Headphones className="w-5 h-5" />
            </button>

            {/* 3. Eyes & Face (Middle Left High) */}
            <button
              onClick={() => setSelectedZoneId('eyes')}
              className={`absolute top-24 left-2 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                selectedZoneId === 'eyes'
                  ? 'bg-amber-500 text-white scale-110 shadow-lg shadow-amber-500/50 ring-4 ring-amber-400/40'
                  : 'bg-slate-800 text-amber-400 border-2 border-amber-500/40 hover:scale-105'
              }`}
              title="Ulls i Cara / Ojos y Cara"
            >
              <Glasses className="w-5 h-5" />
            </button>

            {/* 4. Respiratory (Middle Right High) */}
            <button
              onClick={() => setSelectedZoneId('respiratory')}
              className={`absolute top-28 right-2 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                selectedZoneId === 'respiratory'
                  ? 'bg-teal-500 text-white scale-110 shadow-lg shadow-teal-500/50 ring-4 ring-teal-400/40'
                  : 'bg-slate-800 text-teal-400 border-2 border-teal-500/40 hover:scale-105'
              }`}
              title="Vies Respiratòries / Vías Respiratorias"
            >
              <Wind className="w-5 h-5" />
            </button>

            {/* 5. Hands & Arms (Middle Left Low) */}
            <button
              onClick={() => setSelectedZoneId('hands')}
              className={`absolute top-48 left-2 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                selectedZoneId === 'hands'
                  ? 'bg-rose-500 text-white scale-110 shadow-lg shadow-rose-500/50 ring-4 ring-rose-400/40'
                  : 'bg-slate-800 text-rose-400 border-2 border-rose-500/40 hover:scale-105'
              }`}
              title="Mans i Braços / Manos y Brazos"
            >
              <Hand className="w-5 h-5" />
            </button>

            {/* 6. Trunk (Middle Right Low) */}
            <button
              onClick={() => setSelectedZoneId('trunk')}
              className={`absolute top-48 right-2 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                selectedZoneId === 'trunk'
                  ? 'bg-orange-500 text-white scale-110 shadow-lg shadow-orange-500/50 ring-4 ring-orange-400/40'
                  : 'bg-slate-800 text-orange-400 border-2 border-orange-500/40 hover:scale-105'
              }`}
              title="Tronc i Abdomen / Tronco y Abdomen"
            >
              <ShieldAlert className="w-5 h-5" />
            </button>

            {/* 7. Feet & Legs (Bottom Left) */}
            <button
              onClick={() => setSelectedZoneId('feet')}
              className={`absolute bottom-4 left-2 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                selectedZoneId === 'feet'
                  ? 'bg-emerald-500 text-white scale-110 shadow-lg shadow-emerald-500/50 ring-4 ring-emerald-400/40'
                  : 'bg-slate-800 text-emerald-400 border-2 border-emerald-500/40 hover:scale-105'
              }`}
              title="Cames i Peus / Piernas y Pies"
            >
              <Footprints className="w-5 h-5" />
            </button>

            {/* 8. Full Body (Bottom Right) */}
            <button
              onClick={() => setSelectedZoneId('full_body')}
              className={`absolute bottom-4 right-2 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                selectedZoneId === 'full_body'
                  ? 'bg-indigo-500 text-white scale-110 shadow-lg shadow-indigo-500/50 ring-4 ring-indigo-400/40'
                  : 'bg-slate-800 text-indigo-400 border-2 border-indigo-500/40 hover:scale-105'
              }`}
              title="Tot el Cos / Todo el Cuerpo"
            >
              <Anchor className="w-5 h-5" />
            </button>

          </div>
        </div>

        {/* Right Stage: Detailed Technical & Boat Maintenance Card (5 columns) */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col justify-between min-h-[460px]">
          
          <div className="space-y-4">
            
            {/* Header of the Selected Zone */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                  {getZoneIcon(selectedZone.id, 'w-6 h-6')}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">
                    {language === 'ca' ? 'Regió Corporal' : 'Región Corporal'}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {selectedZone.name[language]}
                  </h3>
                </div>
              </div>

              <span className="text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700 px-2 py-1 rounded-md">
                {selectedZone.normative}
              </span>
            </div>

            {/* Official PPE list for this zone */}
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                {language === 'ca' ? 'Equips i Elements Certificats:' : 'Equipos y Elementos Certificados:'}
              </h4>
              <ul className="space-y-1.5">
                {selectedZone.items[language].map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-200 bg-slate-800/60 border border-slate-700/50 p-2 rounded-lg flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preventive Purpose */}
            <div className="bg-slate-800/40 border-l-4 border-sky-500 p-3 rounded-r-xl">
              <h4 className="text-xs font-semibold text-sky-300 mb-1 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-sky-400" />
                {language === 'ca' ? 'Finalitat Protectora:' : 'Finalidad Protectora:'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedZone.purpose[language]}
              </p>
            </div>

            {/* Direct Application to Boat Maintenance (Varador & Taller Naval) */}
            <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-xl">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Anchor className="w-3.5 h-3.5 text-amber-400" />
                {language === 'ca' ? 'Aplicació en Manteniment d\'Embarcacions:' : 'Aplicación en Mantenimiento de Embarcaciones:'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedZone.boatApplication[language]}
              </p>
            </div>

          </div>

          <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex justify-between items-center">
            <span>INSST - Guia Tècnica Reial Decret 773/1997</span>
            <span className="text-sky-400 font-medium">Marcatge CE Obligatori</span>
          </div>

        </div>

      </div>

    </div>
  );
};
