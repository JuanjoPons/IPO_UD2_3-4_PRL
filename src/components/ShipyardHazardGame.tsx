import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle, 
  HelpCircle, 
  RotateCcw, 
  Sparkles, 
  Eye, 
  ShieldCheck, 
  UserCheck, 
  Wrench, 
  Volume2, 
  X,
  ArrowRight
} from 'lucide-react';
import { HazardItem, Language } from '../types/prl';
import { INITIAL_HAZARDS, UI_TEXT } from '../data/translations';

interface ShipyardHazardGameProps {
  language: Language;
}

export const ShipyardHazardGame: React.FC<ShipyardHazardGameProps> = ({ language }) => {
  const [hazards, setHazards] = useState<HazardItem[]>(INITIAL_HAZARDS);
  const [selectedHazardId, setSelectedHazardId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<'ALL' | 'EPI' | 'COLLECTIVA'>('ALL');
  const [operatorSpeech, setOperatorSpeech] = useState<string | null>(null);

  const t = UI_TEXT[language];

  const foundCount = hazards.filter((h) => h.isFound).length;
  const isComplete = foundCount === hazards.length;

  const currentSelectedHazard = hazards.find((h) => h.id === selectedHazardId);

  // Toggle or find a hazard
  const handleHazardClick = (hazardId: string) => {
    setHazards((prev) =>
      prev.map((item) => {
        if (item.id === hazardId) {
          return { ...item, isFound: true };
        }
        return item;
      })
    );
    setSelectedHazardId(hazardId);

    const item = hazards.find((h) => h.id === hazardId);
    if (item) {
      if (language === 'ca') {
        setOperatorSpeech(
          `Molt ben vist! Has equipat: "${item.equippedTitle.ca}". ${item.detailedPedagogy.ca}`
        );
      } else {
        setOperatorSpeech(
          `¡Muy bien visto! Has equipado: "${item.equippedTitle.es}". ${item.detailedPedagogy.es}`
        );
      }
    }
  };

  // Reveal all missing items in one click
  const handleRevealAll = () => {
    setHazards((prev) => prev.map((h) => ({ ...h, isFound: true })));
    setSelectedHazardId('scaffold_guardrail');
    if (language === 'ca') {
      setOperatorSpeech(
        'Excel·lent! Hem desplegat tots els 7 elements de protecció reglamentària al varador: 3 EPIs personals i 4 proteccions col·lectives!'
      );
    } else {
      setOperatorSpeech(
        '¡Excelente! Hemos desplegado los 7 elementos de protección reglamentaria en el varadero: ¡3 EPIs personales y 4 protecciones colectivas!'
      );
    }
  };

  // Reset the game
  const handleResetGame = () => {
    setHazards(INITIAL_HAZARDS.map((h) => ({ ...h, isFound: false })));
    setSelectedHazardId(null);
    if (language === 'ca') {
      setOperatorSpeech(
        'Hola! Sóc en Toni, el teu oficial de prevenció. Revisa bé el varador: alguns operaris no porten EPIs i falten proteccions col·lectives clau!'
      );
    } else {
      setOperatorSpeech(
        '¡Hola! Soy Toni, tu oficial de prevención. Revisa bien el varadero: ¡algunos operarios no llevan EPIs y faltan protecciones colectivas clave!'
      );
    }
  };

  const filteredHazards = hazards.filter((item) => {
    if (filterCategory === 'ALL') return true;
    return item.category === filterCategory;
  });

  return (
    <div className="w-full flex flex-col gap-5">
      
      {/* Top Banner: Mission & Controls */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              {language === 'ca' ? 'Joc dels 7 Errors' : 'Juego de los 7 Errores'}
            </span>
            <span className="text-xs text-slate-400">
              {language === 'ca' ? 'Varador & Manteniment Naval' : 'Varadero & Mantenimiento Naval'}
            </span>
          </div>
          <h2 className="text-lg md:text-2xl font-extrabold text-white">
            {t.gameTitle}
          </h2>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mt-1">
            {t.gameInstructions}
          </p>
        </div>

        {/* Action Buttons & Progress counter */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full md:w-auto justify-between md:justify-end">
          
          {/* Progress Indicator */}
          <div className="bg-slate-800/90 border border-slate-700 px-3.5 py-1.5 rounded-xl flex items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">{t.errorsFound}</span>
            <span className={`text-base font-extrabold font-mono ${isComplete ? 'text-emerald-400' : 'text-sky-400'}`}>
              {foundCount} / {hazards.length}
            </span>
          </div>

          {/* Reveal All Button */}
          <button
            onClick={handleRevealAll}
            className="bg-sky-600 hover:bg-sky-500 text-white text-xs px-3.5 py-2 rounded-xl font-medium transition shadow-sm flex items-center gap-1.5"
            title={t.revealAllBtn}
          >
            <Eye className="w-4 h-4" />
            <span>{t.revealAllBtn}</span>
          </button>

          {/* Reset Button */}
          <button
            onClick={handleResetGame}
            className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs p-2 rounded-xl border border-slate-700 transition"
            title={t.resetGameBtn}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Virtual Operator Guide Bar */}
      <div className="bg-gradient-to-r from-sky-950/80 via-slate-900 to-slate-900 border border-sky-800/40 rounded-2xl p-4 flex items-start sm:items-center gap-4 shadow-lg">
        {/* Animated Avatar */}
        <div className="relative shrink-0">
          <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 p-0.5 shadow-md shadow-sky-600/30">
            <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-sky-400">
              {/* Virtual Worker Avatar Face with Safety Helmet */}
              <svg viewBox="0 0 40 40" className="w-10 h-10">
                <circle cx="20" cy="20" r="18" fill="#1e293b" />
                {/* Yellow Hardhat */}
                <path d="M10 18 C10 8, 30 8, 30 18 Z" fill="#eab308" />
                <rect x="8" y="17" width="24" height="3" rx="1.5" fill="#ca8a04" />
                {/* Face */}
                <ellipse cx="20" cy="24" rx="8" ry="9" fill="#fed7aa" />
                {/* Safety Goggles */}
                <rect x="14" y="21" width="12" height="4" rx="2" fill="#0284c7" />
                {/* Vest collar */}
                <path d="M12 34 L20 30 L28 34 Z" fill="#ea580c" />
              </svg>
            </div>
          </div>
          <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-900 flex items-center justify-center text-[9px] text-white font-bold">
            ✓
          </span>
        </div>

        {/* Speech Dialogue Bubble */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="text-xs font-bold text-sky-300">
              {t.virtualOperatorName}
            </h4>
            <span className="text-[10px] text-slate-500 hidden sm:inline">
              · {t.virtualOperatorRole}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 mt-0.5 leading-relaxed font-normal">
            {operatorSpeech || (
              language === 'ca'
                ? 'Benvinguts al varador! Fes clic sobre les zones marcades o sobre la llista per inspeccionar cada risc. Faltaran 3 EPIs individuals i 4 proteccions col·lectives.'
                : '¡Bienvenidos al varadero! Haz clic sobre las zonas marcadas o sobre la lista para inspeccionar cada riesgo. Faltan 3 EPIs individuales y 4 protecciones colectivas.'
            )}
          </p>
        </div>
      </div>

      {/* Main Interactive Stage: SVG Shipyard Canvas + Sidebar Checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: SVG Shipyard Canvas (8 columns) */}
        <div className="lg:col-span-8 bg-slate-900/95 border border-slate-800 rounded-2xl p-3 sm:p-4 shadow-2xl relative overflow-hidden flex flex-col">
          
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <Wrench className="w-3.5 h-3.5 text-sky-400" />
              {language === 'ca' ? 'Varador d\'Embarcacions en Dic Sec' : 'Varadero de Embarcaciones en Dique Seco'}
            </span>
            <span>{t.clickHotspotPrompt}</span>
          </div>

          {/* Interactive SVG Stage */}
          <div className="relative w-full aspect-[16/10] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 rounded-xl overflow-hidden border border-slate-800/60 select-none">
            
            <svg
              viewBox="0 0 1000 625"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Ship hull gradients */}
                <linearGradient id="hullGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="60%" stopColor="#d97706" />
                  <stop offset="100%" stopColor="#78350f" />
                </linearGradient>
                <linearGradient id="antifoulingGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#dc2626" />
                  <stop offset="100%" stopColor="#991b1b" />
                </linearGradient>
                <linearGradient id="cabinGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f8fafc" />
                  <stop offset="100%" stopColor="#cbd5e1" />
                </linearGradient>
                <linearGradient id="craneGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#facc15" />
                  <stop offset="100%" stopColor="#ca8a04" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* BACKGROUND / DRYDOCK ENVIRONMENT */}
              {/* Floor grid / Drydock slipway */}
              <rect x="0" y="0" width="1000" height="625" fill="#090d16" />
              {/* Floor perspective planes */}
              <polygon points="0,480 1000,480 1000,625 0,625" fill="#131b2e" />
              <line x1="0" y1="480" x2="1000" y2="480" stroke="#1e293b" strokeWidth="2" />
              {/* Slipway wood keel supports / Varadero cunas */}
              <rect x="220" y="475" width="45" height="40" fill="#451a03" stroke="#78350f" strokeWidth="2" />
              <rect x="420" y="485" width="45" height="45" fill="#451a03" stroke="#78350f" strokeWidth="2" />
              <rect x="620" y="480" width="45" height="40" fill="#451a03" stroke="#78350f" strokeWidth="2" />

              {/* SHIP STRUCTURE (Isometric Boat in Maintenance) */}
              <g id="boat-structure">
                {/* Antifouling Bottom Keel (Obra Viva - Red) */}
                <path
                  d="M140 330 C220 480, 720 500, 830 450 C860 410, 780 360, 720 340 Z"
                  fill="url(#antifoulingGrad)"
                  stroke="#450a0a"
                  strokeWidth="3"
                />

                {/* Main Ship Hull (Obra Muerta - Orange/Yellow) */}
                <path
                  d="M130 320 C190 220, 760 210, 840 430 C760 490, 220 470, 130 320 Z"
                  fill="url(#hullGrad)"
                  stroke="#78350f"
                  strokeWidth="3"
                />

                {/* Deck Superstructure / Cabin (White with windows) */}
                <polygon points="200,240 380,140 420,160 420,270 240,320 200,280" fill="url(#cabinGrad)" stroke="#64748b" strokeWidth="2" />
                {/* Bridge windows */}
                <rect x="230" y="210" width="18" height="18" fill="#0284c7" opacity="0.85" rx="2" />
                <rect x="260" y="195" width="18" height="18" fill="#0284c7" opacity="0.85" rx="2" />
                <rect x="290" y="180" width="18" height="18" fill="#0284c7" opacity="0.85" rx="2" />
                <rect x="320" y="165" width="18" height="18" fill="#0284c7" opacity="0.85" rx="2" />
                {/* Radar mast */}
                <line x1="320" y1="140" x2="320" y2="100" stroke="#94a3b8" strokeWidth="4" />
                <ellipse cx="320" cy="100" rx="16" ry="4" fill="#cbd5e1" />

                {/* Ship Chimneys / Exhaust Pipes */}
                <polygon points="170,220 185,170 205,170 190,220" fill="#dc2626" stroke="#450a0a" strokeWidth="2" />
                <polygon points="195,210 210,165 230,165 215,210" fill="#dc2626" stroke="#450a0a" strokeWidth="2" />
              </g>

              {/* EQUIPMENT 1: SCAFFOLD ON LEFT (Bastida de pintura) */}
              <g id="scaffold-tower">
                {/* Vertical scaffold poles */}
                <line x1="170" y1="260" x2="170" y2="480" stroke="#64748b" strokeWidth="4" />
                <line x1="260" y1="240" x2="260" y2="460" stroke="#64748b" strokeWidth="4" />
                <line x1="190" y1="290" x2="190" y2="510" stroke="#64748b" strokeWidth="4" />
                <line x1="280" y1="270" x2="280" y2="490" stroke="#64748b" strokeWidth="4" />
                {/* Diagonal braces */}
                <line x1="170" y1="270" x2="260" y2="350" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 2" />
                <line x1="170" y1="350" x2="260" y2="270" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 2" />
                <line x1="170" y1="370" x2="260" y2="450" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 2" />
                <line x1="170" y1="450" x2="260" y2="370" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 2" />
                {/* Working Wooden Platform (Plataforma de fusta) */}
                <polygon points="160,310 270,285 290,315 180,340" fill="#b45309" stroke="#78350f" strokeWidth="2" />
                {/* Access ladder */}
                <line x1="140" y1="280" x2="120" y2="450" stroke="#64748b" strokeWidth="3" />
                <line x1="150" y1="285" x2="130" y2="455" stroke="#64748b" strokeWidth="3" />
                {[300, 325, 350, 375, 400, 425].map((ly, i) => (
                  <line key={i} x1={138 - i * 3} y1={ly} x2={148 - i * 3} y2={ly + 2} stroke="#cbd5e1" strokeWidth="2" />
                ))}

                {/* WORKER 1: Painter on scaffold */}
                <g id="worker-painter">
                  {/* Body in blue overalls */}
                  <ellipse cx="215" cy="275" rx="8" ry="12" fill="#0284c7" />
                  <circle cx="215" cy="256" r="6" fill="#fed7aa" />
                  <path d="M210 254 C210 248, 220 248, 220 254 Z" fill="#eab308" />
                  {/* Arm holding paint roller */}
                  <line x1="215" y1="268" x2="200" y2="245" stroke="#0284c7" strokeWidth="3" />
                  <rect x="195" y="240" width="12" height="4" fill="#dc2626" />
                </g>

                {/* HAZARD 1: SCAFFOLD GUARDRAIL & SAFETY NET (Appears when found) */}
                {hazards.find((h) => h.id === 'scaffold_guardrail')?.isFound ? (
                  <g id="equipped-guardrail" className="transition-all duration-500">
                    {/* Guardrail posts */}
                    <line x1="160" y1="310" x2="160" y2="275" stroke="#eab308" strokeWidth="4" />
                    <line x1="270" y1="285" x2="270" y2="250" stroke="#eab308" strokeWidth="4" />
                    <line x1="290" y1="315" x2="290" y2="280" stroke="#eab308" strokeWidth="4" />
                    <line x1="180" y1="340" x2="180" y2="305" stroke="#eab308" strokeWidth="4" />
                    {/* Upper handrail */}
                    <line x1="160" y1="275" x2="270" y2="250" stroke="#eab308" strokeWidth="4" />
                    <line x1="270" y1="250" x2="290" y2="280" stroke="#eab308" strokeWidth="4" />
                    <line x1="290" y1="280" x2="180" y2="305" stroke="#eab308" strokeWidth="4" />
                    <line x1="180" y1="305" x2="160" y2="275" stroke="#eab308" strokeWidth="4" />
                    {/* Midrail (Barra intermèdia) */}
                    <line x1="160" y1="292" x2="270" y2="267" stroke="#ca8a04" strokeWidth="2.5" />
                    <line x1="290" y1="297" x2="180" y2="322" stroke="#ca8a04" strokeWidth="2.5" />
                    {/* Toeboard (Rodapé de 15cm) */}
                    <polygon points="160,310 270,285 270,292 160,317" fill="#facc15" opacity="0.9" />
                    <polygon points="290,315 180,340 180,347 290,322" fill="#facc15" opacity="0.9" />
                    {/* Green protective mesh netting */}
                    <polygon points="160,275 270,250 270,285 160,310" fill="#10b981" opacity="0.25" stroke="#059669" strokeWidth="1" strokeDasharray="3 3" />
                  </g>
                ) : (
                  /* Danger open drop indicator */
                  <g>
                    <line x1="160" y1="310" x2="270" y2="285" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
                    <text x="215" y="325" fill="#ef4444" fontSize="12" fontWeight="bold">⚠️ Sense barana</text>
                  </g>
                )}
              </g>

              {/* EQUIPMENT 2: MOBILE CRANE (Grua mòbil hissant càrrega) */}
              <g id="mobile-crane">
                {/* Crane Chassis Truck */}
                <rect x="520" y="110" width="130" height="60" rx="6" fill="url(#craneGrad)" stroke="#78350f" strokeWidth="2" />
                <rect x="590" y="80" width="55" height="50" rx="4" fill="#eab308" stroke="#78350f" strokeWidth="2" />
                {/* Crane cabin window */}
                <rect x="600" y="88" width="35" height="24" rx="2" fill="#0284c7" opacity="0.8" />
                {/* Heavy wheels */}
                <circle cx="545" cy="175" r="14" fill="#1e293b" stroke="#0f172a" strokeWidth="3" />
                <circle cx="585" cy="175" r="14" fill="#1e293b" stroke="#0f172a" strokeWidth="3" />
                <circle cx="625" cy="175" r="14" fill="#1e293b" stroke="#0f172a" strokeWidth="3" />
                {/* Crane Boom Arm (Telescopic jib) */}
                <polygon points="540,115 470,30 495,25 565,110" fill="url(#craneGrad)" stroke="#78350f" strokeWidth="2" />
                {/* Cable & Pulley */}
                <line x1="475" y1="30" x2="475" y2="120" stroke="#0f172a" strokeWidth="3" />
                <polygon points="468,120 482,120 475,135" fill="#475569" />
                {/* Heavy Suspended Cogwheel / Gear (Càrrega suspesa) */}
                <circle cx="475" cy="155" r="24" fill="#94a3b8" stroke="#334155" strokeWidth="6" strokeDasharray="8 6" />
                <circle cx="475" cy="155" r="8" fill="#475569" />

                {/* HAZARD 5: CRANE EXCLUSION PERIMETER & CONES (Appears when found) */}
                {hazards.find((h) => h.id === 'crane_perimeter_marking')?.isFound ? (
                  <g id="equipped-crane-perimeter" className="transition-all duration-500">
                    {/* Exclusion perimeter boundary on ground */}
                    <ellipse cx="480" cy="220" rx="90" ry="35" fill="#ef4444" opacity="0.1" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="6 4" />
                    {/* Safety Cones with reflective stripes */}
                    {[
                      { cx: 395, cy: 220 },
                      { cx: 440, cy: 245 },
                      { cx: 520, cy: 245 },
                      { cx: 565, cy: 220 },
                      { cx: 480, cy: 195 }
                    ].map((cone, idx) => (
                      <g key={idx}>
                        <polygon points={`${cone.cx - 8},${cone.cy + 6} ${cone.cx + 8},${cone.cy + 6} ${cone.cx},${cone.cy - 16}`} fill="#ea580c" />
                        <polygon points={`${cone.cx - 4},${cone.cy - 4} ${cone.cx + 4},${cone.cy - 4} ${cone.cx},${cone.cy - 12}`} fill="#f8fafc" />
                      </g>
                    ))}
                    {/* Danger sign text */}
                    <rect x="420" y="222" width="120" height="20" rx="3" fill="#dc2626" stroke="#ffffff" strokeWidth="1" />
                    <text x="480" y="236" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">
                      {language === 'ca' ? 'ZONA D\'EXCLUSIÓ CÀRREGA' : 'ZONA EXCLUSIÓN CARGA'}
                    </text>
                  </g>
                ) : (
                  /* Danger zone unmarked */
                  <g>
                    <ellipse cx="480" cy="220" rx="70" ry="25" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 4" />
                    <text x="480" y="225" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="middle">⚠️ Sense abalisar</text>
                  </g>
                )}
              </g>

              {/* EQUIPMENT 3: ELEVATING WORK PLATFORM (PEMP de popa) */}
              <g id="lift-platform">
                {/* Scissor lift / articulated arm base */}
                <rect x="730" y="380" width="80" height="30" rx="4" fill="#eab308" stroke="#78350f" strokeWidth="2" />
                <circle cx="745" cy="410" r="10" fill="#1e293b" />
                <circle cx="795" cy="410" r="10" fill="#1e293b" />
                {/* Scissor metal links */}
                <line x1="740" y1="380" x2="790" y2="330" stroke="#64748b" strokeWidth="4" />
                <line x1="790" y1="380" x2="740" y2="330" stroke="#64748b" strokeWidth="4" />
                <line x1="740" y1="330" x2="790" y2="280" stroke="#64748b" strokeWidth="4" />
                <line x1="790" y1="330" x2="740" y2="280" stroke="#64748b" strokeWidth="4" />
                {/* Basket (Cistella de treball) */}
                <polygon points="730,280 810,280 810,315 730,315" fill="#cbd5e1" stroke="#334155" strokeWidth="2" />
                {/* Basket rails */}
                <line x1="730" y1="265" x2="810" y2="265" stroke="#eab308" strokeWidth="3" />
                <line x1="730" y1="265" x2="730" y2="280" stroke="#eab308" strokeWidth="3" />
                <line x1="810" y1="265" x2="810" y2="280" stroke="#eab308" strokeWidth="3" />
                <line x1="770" y1="265" x2="770" y2="280" stroke="#eab308" strokeWidth="2" />

                {/* WORKER 3: Worker in lift */}
                <g id="worker-lift">
                  <ellipse cx="770" cy="255" rx="8" ry="14" fill="#0284c7" />
                  <circle cx="770" cy="235" r="6" fill="#fed7aa" />
                  <path d="M764 233 C764 227, 776 227, 776 233 Z" fill="#eab308" />
                  <line x1="770" y1="245" x2="785" y2="230" stroke="#0284c7" strokeWidth="3" />
                  {/* Wrench in hand */}
                  <polygon points="785,225 798,220 802,228 790,233" fill="#64748b" />
                </g>

                {/* HAZARD 3: HARNESS & LANYARD IN LIFT (Appears when found) */}
                {hazards.find((h) => h.id === 'harness_lift')?.isFound ? (
                  <g id="equipped-harness" className="transition-all duration-500">
                    {/* Harness straps on worker */}
                    <line x1="765" y1="242" x2="775" y2="265" stroke="#10b981" strokeWidth="2.5" />
                    <line x1="775" y1="242" x2="765" y2="265" stroke="#10b981" strokeWidth="2.5" />
                    {/* Energy absorber & Lanyard connected to basket anchor ring */}
                    <path d="M770 255 Q785 260, 775 278" fill="none" stroke="#059669" strokeWidth="3" />
                    <circle cx="775" cy="278" r="4" fill="#ca8a04" stroke="#78350f" strokeWidth="1.5" />
                    <rect x="765" y="258" width="8" height="6" rx="2" fill="#10b981" />
                    <text x="770" y="215" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">
                      ✓ Arnès ancorat
                    </text>
                  </g>
                ) : (
                  /* Danger: unhooked */
                  <text x="770" y="215" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="middle">
                    ⚠️ Sense arnès
                  </text>
                )}
              </g>

              {/* WORKER 2: PROW HULL SANDING WORKER (Treballador polint el casc) */}
              <g id="worker-sander">
                <ellipse cx="430" cy="455" rx="9" ry="15" fill="#0284c7" />
                <circle cx="430" cy="433" r="7" fill="#fed7aa" />
                <path d="M423 430 C423 424, 437 424, 437 430 Z" fill="#eab308" />
                {/* Arm holding sander/disc */}
                <line x1="430" y1="445" x2="455" y2="445" stroke="#0284c7" strokeWidth="3.5" />
                <ellipse cx="460" cy="445" rx="5" ry="9" fill="#334155" />

                {/* HAZARD 2: RESPIRATORY MASK (Appears when found) */}
                {hazards.find((h) => h.id === 'respiratory_mask')?.isFound ? (
                  <g id="equipped-mask" className="transition-all duration-500">
                    {/* Dual cartridge respirator on face */}
                    <polygon points="426,435 434,435 433,442 427,442" fill="#475569" stroke="#0f172a" strokeWidth="1" />
                    <circle cx="425" cy="438" r="2.5" fill="#eab308" />
                    <circle cx="435" cy="438" r="2.5" fill="#eab308" />
                    <text x="430" y="415" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">
                      ✓ Màscara FFP3
                    </text>
                  </g>
                ) : (
                  /* Dust cloud & danger */
                  <g>
                    <ellipse cx="465" cy="440" rx="14" ry="10" fill="#f87171" opacity="0.4" />
                    <text x="430" y="415" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="middle">
                      ⚠️ Pols sense màscara
                    </text>
                  </g>
                )}
              </g>

              {/* WORKER 4: METAL GRINDING / DRILLING WORKER (Operari d'esmerilat) */}
              <g id="worker-grinder">
                <ellipse cx="470" cy="330" rx="9" ry="14" fill="#0284c7" />
                <circle cx="470" cy="310" r="7" fill="#fed7aa" />
                <path d="M463 308 C463 302, 477 302, 477 308 Z" fill="#eab308" />
                <line x1="470" y1="325" x2="495" y2="335" stroke="#0284c7" strokeWidth="3" />
                <circle cx="498" cy="336" r="6" fill="#475569" />

                {/* HAZARD 4: EYE & FACE SHIELD (Appears when found) */}
                {hazards.find((h) => h.id === 'eye_face_shield')?.isFound ? (
                  <g id="equipped-face-shield" className="transition-all duration-500">
                    {/* Full face transparent shield with gold rim */}
                    <path d="M464 308 C464 298, 478 298, 478 308 L479 320 C479 324, 463 324, 463 320 Z" fill="#38bdf8" opacity="0.65" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="470" y="292" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">
                      ✓ Pantalla facial
                    </text>
                  </g>
                ) : (
                  /* Flying sparks without protection */
                  <g>
                    <line x1="502" y1="334" x2="518" y2="326" stroke="#facc15" strokeWidth="2" />
                    <line x1="504" y1="338" x2="520" y2="344" stroke="#facc15" strokeWidth="2" />
                    <text x="470" y="292" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="middle">
                      ⚠️ Espurnes als ulls
                    </text>
                  </g>
                )}
              </g>

              {/* HAZARD 6: CHEMICAL CONTAINERS & RETENTION TRAY (Zona de dissolvents i pintures) */}
              <g id="chemical-zone">
                {/* Paint and thinner drums on ground */}
                <ellipse cx="130" cy="390" rx="14" ry="7" fill="#64748b" />
                <rect x="116" y="365" width="28" height="25" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
                <ellipse cx="130" cy="365" rx="14" ry="7" fill="#60a5fa" />
                
                <ellipse cx="155" cy="400" rx="12" ry="6" fill="#64748b" />
                <rect x="143" y="378" width="24" height="22" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.5" />
                <ellipse cx="155" cy="378" rx="12" ry="6" fill="#f87171" />

                {/* HAZARD 6 INSTALLED: RETENTION BUND TRAY & FIRE EXTINGUISHER */}
                {hazards.find((h) => h.id === 'chemical_spill_tray')?.isFound ? (
                  <g id="equipped-spill-tray" className="transition-all duration-500">
                    {/* Metal retention bund tray under drums */}
                    <polygon points="100,405 180,405 190,420 90,420" fill="#334155" stroke="#10b981" strokeWidth="2.5" />
                    <line x1="90" y1="412" x2="190" y2="412" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
                    {/* ABC Fire extinguisher next to tray */}
                    <rect x="80" y="380" width="10" height="25" rx="3" fill="#dc2626" stroke="#450a0a" strokeWidth="1.5" />
                    <line x1="85" y1="375" x2="85" y2="380" stroke="#0f172a" strokeWidth="2" />
                    <text x="135" y="435" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">
                      ✓ Cubeta de retenció
                    </text>
                  </g>
                ) : (
                  /* Chemical puddle on bare ground */
                  <g>
                    <ellipse cx="140" cy="415" rx="30" ry="8" fill="#1e293b" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" />
                    <text x="135" y="435" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="middle">
                      ⚠️ Risc de vessament
                    </text>
                  </g>
                )}
              </g>

              {/* HAZARD 7: FORCED VENTILATION & SMOKE EXTRACTOR IN HULL (Ventilació forçada en recinte) */}
              <g id="ventilation-zone">
                {/* Engine compartment hatch on hull */}
                <ellipse cx="650" cy="420" rx="20" ry="12" fill="#0f172a" stroke="#78350f" strokeWidth="2" />

                {hazards.find((h) => h.id === 'forced_ventilation')?.isFound ? (
                  <g id="equipped-ventilation" className="transition-all duration-500">
                    {/* Flexible yellow ribbed ventilation hose inserted into the hold */}
                    <path
                      d="M650 420 Q670 440, 680 470 T720 490"
                      fill="none"
                      stroke="#facc15"
                      strokeWidth="12"
                      strokeDasharray="4 2"
                    />
                    {/* Mobile forced ventilation blower fan unit on ground */}
                    <rect x="710" y="475" width="35" height="30" rx="4" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
                    <circle cx="727" cy="490" r="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                    <path d="M722 485 L732 495 M722 495 L732 485" stroke="#38bdf8" strokeWidth="2" />
                    <text x="660" y="405" fill="#10b981" fontSize="10" fontWeight="bold">
                      ✓ Ventilació forçada activa
                    </text>
                  </g>
                ) : (
                  /* Toxic vapors coming out of unventilated hold */
                  <g>
                    <path d="M645 410 Q640 395, 650 385 T660 370" fill="none" stroke="#a855f7" strokeWidth="3" opacity="0.7" />
                    <text x="650" y="405" fill="#ef4444" fontSize="10" fontWeight="bold">
                      ⚠️ Espai confinat sense extracció
                    </text>
                  </g>
                )}
              </g>

              {/* INTERACTIVE HOTSPOTS (Clickable Markers on coordinates) */}
              {hazards.map((item) => {
                const svgX = item.x * 10;
                const svgY = item.y * 6.25;
                const isSelected = item.id === selectedHazardId;

                return (
                  <g
                    key={item.id}
                    className="cursor-pointer group"
                    onClick={() => handleHazardClick(item.id)}
                  >
                    {/* Pulsing ring if not found */}
                    {!item.isFound && (
                      <circle
                        cx={svgX}
                        cy={svgY}
                        r="20"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="2.5"
                        opacity="0.8"
                        className="hotspot-radar"
                      />
                    )}

                    {/* Marker circle */}
                    <circle
                      cx={svgX}
                      cy={svgY}
                      r="16"
                      fill={item.isFound ? '#10b981' : '#ef4444'}
                      stroke="#ffffff"
                      strokeWidth="2.5"
                      className={`transition-all duration-300 ${isSelected ? 'scale-125' : 'group-hover:scale-110'}`}
                      filter="url(#glow)"
                    />

                    {/* Icon or Number inside marker */}
                    <text
                      x={svgX}
                      y={svgY + 5}
                      fill="#ffffff"
                      fontSize="12"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      {item.isFound ? '✓' : item.number}
                    </text>
                  </g>
                );
              })}

            </svg>
          </div>

          {/* Quick status bar under canvas */}
          <div className="flex flex-wrap items-center justify-between gap-2 mt-3 text-xs text-slate-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                {language === 'ca' ? 'Risc pendent d\'inspecció' : 'Riesgo pendiente de inspección'}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                {language === 'ca' ? 'Mesura reglamentària equipada' : 'Medida reglamentaria equipada'}
              </span>
            </div>
            <span className="text-sky-400 font-mono text-[11px]">
              {language === 'ca' ? 'Simulació interactiva en temps real' : 'Simulación interactiva en tiempo real'}
            </span>
          </div>

        </div>

        {/* Right: Checklist & Pedagogical Inspection Panel (4 columns) */}
        <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col gap-4">
          
          {/* Filter tabs: All (7), EPIs (3), Collective (4) */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              {language === 'ca' ? 'Llista dels 7 Riscos' : 'Lista de los 7 Riesgos'}
            </h3>
            
            <div className="flex items-center gap-1 bg-slate-800 p-0.5 rounded-lg text-[11px]">
              <button
                onClick={() => setFilterCategory('ALL')}
                className={`px-2 py-0.5 rounded-md font-medium transition ${
                  filterCategory === 'ALL' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                7
              </button>
              <button
                onClick={() => setFilterCategory('EPI')}
                className={`px-2 py-0.5 rounded-md font-medium transition ${
                  filterCategory === 'EPI' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                EPI (3)
              </button>
              <button
                onClick={() => setFilterCategory('COLLECTIVA')}
                className={`px-2 py-0.5 rounded-md font-medium transition ${
                  filterCategory === 'COLLECTIVA' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Col·l. (4)
              </button>
            </div>
          </div>

          {/* Interactive Hazard Cards List */}
          <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
            {filteredHazards.map((item) => {
              const isSelected = item.id === selectedHazardId;

              return (
                <div
                  key={item.id}
                  onClick={() => handleHazardClick(item.id)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer ${
                    item.isFound
                      ? isSelected
                        ? 'bg-emerald-950/40 border-emerald-500 shadow-md ring-1 ring-emerald-500/30'
                        : 'bg-slate-800/60 border-emerald-500/40 hover:bg-slate-800'
                      : isSelected
                      ? 'bg-slate-800 border-amber-500 shadow-md ring-1 ring-amber-500/30'
                      : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800/80 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2.5">
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 ${
                          item.isFound
                            ? 'bg-emerald-500 text-white'
                            : 'bg-amber-500 text-slate-950'
                        }`}
                      >
                        {item.isFound ? '✓' : item.number}
                      </span>
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                            item.category === 'EPI' 
                              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                              : 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                          }`}>
                            {item.categoryLabel[language]}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {item.zoneName[language]}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-white mt-1 leading-snug">
                          {item.title[language]}
                        </h4>
                      </div>
                    </div>

                    <button
                      className={`text-xs px-2 py-1 rounded-lg font-medium shrink-0 transition ${
                        item.isFound
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-sky-600 hover:bg-sky-500 text-white'
                      }`}
                    >
                      {item.isFound 
                        ? (language === 'ca' ? 'Equipat' : 'Equipado') 
                        : (language === 'ca' ? 'Equipar' : 'Equipar')}
                    </button>
                  </div>

                  {/* Expanded pedagogical explanation if selected */}
                  {isSelected && (
                    <div className="mt-3 pt-3 border-t border-slate-700/60 text-xs space-y-2 animate-fadeIn">
                      <p className="text-slate-300">
                        <strong className="text-amber-400">{language === 'ca' ? 'Risc Detectat: ' : 'Riesgo Detectado: '}</strong>
                        {item.riskDescription[language]}
                      </p>
                      <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-700/60">
                        <span className="text-emerald-400 font-bold block mb-0.5">
                          {item.isFound 
                            ? (language === 'ca' ? '✓ Solució Reglamentària Aplicada:' : '✓ Solución Reglamentaria Aplicada:') 
                            : (language === 'ca' ? 'Element que cal equipar:' : 'Elemento que debe equiparse:')}
                        </span>
                        <p className="text-slate-200">
                          {item.solutionMissing[language]}
                        </p>
                      </div>
                      <p className="text-[11px] text-sky-400/90 italic">
                        {item.detailedPedagogy[language]}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Completion Celebration Box */}
          {isComplete && (
            <div className="bg-emerald-950/60 border border-emerald-500/60 p-4 rounded-xl text-center space-y-2 animate-bounce-short">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center text-xl">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-extrabold text-emerald-300">
                {t.allCompletedTitle}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.allCompletedDesc}
              </p>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
