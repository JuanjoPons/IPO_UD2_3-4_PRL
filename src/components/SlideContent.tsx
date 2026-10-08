import React, { useState } from 'react';
import { 
  Brain, 
  ShieldCheck, 
  ShieldAlert, 
  UserCheck, 
  HeartPulse, 
  Scale, 
  AlertTriangle, 
  Ban, 
  HardHat, 
  HelpCircle, 
  CheckCircle2, 
  FileCheck, 
  Key, 
  ExternalLink,
  ChevronRight,
  Flame,
  Activity,
  Zap,
  Ear,
  Eye,
  Glasses,
  Waves,
  Briefcase
} from 'lucide-react';
import { Language } from '../types/prl';
import { UI_TEXT } from '../data/translations';
import { InteractiveWorkerPPE } from './InteractiveWorkerPPE';
import { ShipyardHazardGame } from './ShipyardHazardGame';

interface SlideContentProps {
  currentSlide: number;
  language: Language;
  allSolutionsOpen: boolean;
}

export const SlideContent: React.FC<SlideContentProps> = ({
  currentSlide,
  language,
  allSolutionsOpen,
}) => {
  const [localOpenSolutions, setLocalOpenSolutions] = useState<Record<string, boolean>>({});

  const isSolutionOpen = (id: string) => {
    if (allSolutionsOpen) return true;
    return !!localOpenSolutions[id];
  };

  const toggleSolution = (id: string) => {
    setLocalOpenSolutions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const t = UI_TEXT[language];

  return (
    <div className="w-full flex flex-col justify-between">
      
      {/* ============================================================== */}
      {/* SLIDE 1: PORTADA */}
      {/* ============================================================== */}
      {currentSlide === 0 && (
        <section className="print-slide bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-12 shadow-2xl flex flex-col justify-between min-h-[560px] animate-fadeIn">
          <div className="space-y-6">
            <span className="inline-block bg-sky-500/10 text-sky-400 border border-sky-500/30 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              {language === 'ca' ? 'Formació i Orientació Laboral / FOL' : 'Formación y Orientación Laboral / FOL'}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              {language === 'ca' 
                ? 'UT 1: La Prevenció de Riscos Laborals' 
                : 'UT 1: La Prevención de Riesgos Laborales'}
            </h1>
            <p className="text-base md:text-xl text-slate-300 font-light max-w-3xl leading-relaxed">
              {language === 'ca'
                ? 'Conceptes bàsics sobre la salut laboral: Fatiga, Insatisfacció, Envelliment prematur, Mesures de Prevenció, Protecció Col·lectiva, Equips de Protecció Individual (EPIs) i Manteniment Naval.'
                : 'Conceptos básicos sobre la salud laboral: Fatiga, Insatisfacción, Envejecimiento prematuro, Medidas de Prevención, Protección Colectiva, Equipos de Protección Individual (EPIs) y Mantenimiento Naval.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/60 flex items-start gap-3.5">
              <div className="bg-amber-500/20 text-amber-400 p-2.5 rounded-lg text-xl shrink-0">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">
                  {language === 'ca' ? 'Danys a la Salut' : 'Daños a la Salud'}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {language === 'ca' 
                    ? 'Fatiga física i mental, insatisfacció laboral i envelliment prematur.' 
                    : 'Fatiga física y mental, insatisfacción laboral y envejecimiento prematuro.'}
                </p>
              </div>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/60 flex items-start gap-3.5">
              <div className="bg-emerald-500/20 text-emerald-400 p-2.5 rounded-lg text-xl shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">
                  {language === 'ca' ? 'Prevenció vs Protecció' : 'Prevención vs Protección'}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {language === 'ca' 
                    ? 'Actuar a l\'origen, protecció col·lectiva i jerarquia normativa.' 
                    : 'Actuar en el origen, protección colectiva y jerarquía normativa.'}
                </p>
              </div>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/60 flex items-start gap-3.5">
              <div className="bg-sky-500/20 text-sky-400 p-2.5 rounded-lg text-xl shrink-0">
                <HardHat className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">
                  {language === 'ca' ? 'Equips de Protecció (EPIs)' : 'Equipos de Protección (EPIs)'}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {language === 'ca' 
                    ? 'Classificació per regions corporals i simulador naval de 7 errors.' 
                    : 'Clasificación por regiones corporales y simulador naval de 7 errores.'}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center pt-4 border-t border-slate-800 text-xs text-slate-500 gap-2">
            <span>{language === 'ca' ? 'Manteniment & Normativa Prevenció de Riscos (LPRL 31/1995)' : 'Mantenimiento & Normativa Prevención de Riesgos (LPRL 31/1995)'}</span>
            <span>{language === 'ca' ? 'Utilitza les fletxes inferiors o el teclat per avançar' : 'Utiliza las flechas inferiores o el teclado para avanzar'}</span>
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* SLIDE 2: 3.3 LA FATIGA LABORAL */}
      {/* ============================================================== */}
      {currentSlide === 1 && (
        <section className="print-slide bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl flex flex-col justify-between min-h-[560px] animate-fadeIn">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">
                {language === 'ca' ? 'Apartat 3.3' : 'Apartado 3.3'}
              </span>
              <span className="text-xs bg-slate-800 px-2.5 py-1 rounded-md text-slate-400">
                {language === 'ca' ? 'Salut Laboral' : 'Salud Laboral'}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {language === 'ca' ? '3.3. La Fatiga Laboral' : '3.3. La Fatiga Laboral'}
            </h2>
            
            <div className="bg-slate-800/90 border-l-4 border-sky-500 p-4 rounded-r-xl mb-6">
              <p className="text-sm md:text-base text-slate-200">
                {language === 'ca' ? (
                  <>La fatiga laboral és la <strong className="text-sky-400">disminució de la capacitat física i mental</strong> per realitzar el treball a causa del cansament acumulat.</>
                ) : (
                  <>La fatiga laboral es la <strong className="text-sky-400">disminución de la capacidad física y mental</strong> para realizar el trabajo a causa del cansancio acumulado.</>
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Fatiga Física */}
              <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/70 hover:border-sky-500/50 transition">
                <div className="flex items-center gap-3 mb-3">
                  <span className="p-2 bg-orange-500/20 text-orange-400 rounded-lg text-lg">
                    <Activity className="w-5 h-5" />
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {language === 'ca' ? 'Fatiga Física' : 'Fatiga Física'}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 mb-3">
                  {language === 'ca' 
                    ? 'Produïda per una càrrega física excessiva durant la jornada laboral:' 
                    : 'Producida por una carga física excesiva durante la jornada laboral:'}
                </p>
                <ul className="text-xs text-slate-400 space-y-2 list-disc list-inside">
                  <li>{language === 'ca' ? 'Esforços físics intensos o continuats' : 'Esfuerzos físicos intensos o continuados'}</li>
                  <li>{language === 'ca' ? 'Postures incòmodes o forçades (e.g. sota el casc del vaixell)' : 'Posturas incómodas o forzadas (e.g. bajo el casco del barco)'}</li>
                  <li>{language === 'ca' ? 'Manipulació manual de càrregues pesades' : 'Manipulación manual de cargas pesadas'}</li>
                  <li>{language === 'ca' ? 'Moviments repetitius sostinguts en el temps' : 'Movimientos repetitivos sostenidos en el tiempo'}</li>
                </ul>
              </div>

              {/* Fatiga Mental */}
              <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/70 hover:border-sky-500/50 transition">
                <div className="flex items-center gap-3 mb-3">
                  <span className="p-2 bg-purple-500/20 text-purple-400 rounded-lg text-lg">
                    <Brain className="w-5 h-5" />
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {language === 'ca' ? 'Fatiga Mental' : 'Fatiga Mental'}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 mb-3">
                  {language === 'ca' 
                    ? 'Produïda per una alta càrrega mental i exigència cognitiva:' 
                    : 'Producida por una alta carga mental y exigencia cognitiva:'}
                </p>
                <ul className="text-xs text-slate-400 space-y-2 list-disc list-inside">
                  <li>{language === 'ca' ? 'Manejar molta informació simultània i dades' : 'Manejar mucha información simultánea y datos'}</li>
                  <li>{language === 'ca' ? 'Prendre decisions complexes en períodes curts de temps' : 'Tomar decisiones complejas en períodos cortos de tiempo'}</li>
                  <li>{language === 'ca' ? 'Atenció sostinguda i concentració contínua' : 'Atención sostenida y concentración continua'}</li>
                  <li>{language === 'ca' ? 'Ritmes de treball molt elevats o sota pressió horària' : 'Ritmos de trabajo muy elevados o bajo presión horaria'}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
            <span className="text-sky-400">ℹ</span>
            <span>
              {language === 'ca' 
                ? 'La fatiga no tractada pot degenerar en fatiga crònica i multiplicar exponencialment el risc d\'accidents laborals.' 
                : 'La fatiga no tratada puede degenerar en fatiga crónica y multiplicar exponencialmente el riesgo de accidentes laborales.'}
            </span>
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* SLIDE 3: 3.4 LA INSATISFACCIÓ LABORAL */}
      {/* ============================================================== */}
      {currentSlide === 2 && (
        <section className="print-slide bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl flex flex-col justify-between min-h-[560px] animate-fadeIn">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">
                {language === 'ca' ? 'Apartat 3.4' : 'Apartado 3.4'}
              </span>
              <span className="text-xs bg-slate-800 px-2.5 py-1 rounded-md text-slate-400">
                {language === 'ca' ? 'Salut Psicosocial' : 'Salud Psicosocial'}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {language === 'ca' ? '3.4. La Insatisfacció Laboral' : '3.4. La Insatisfacción Laboral'}
            </h2>
            
            <div className="bg-slate-800/90 border-l-4 border-indigo-500 p-4 rounded-r-xl mb-6">
              <p className="text-sm md:text-base text-slate-200">
                {language === 'ca' ? (
                  <>És una <strong className="text-indigo-300">actitud general negativa cap al treball</strong> que procedeix de la <strong>diferència entre les expectatives generades</strong> respecte al treball i la <strong>realitat del que és el treball</strong>, així com de la importància que el treballador li dóna a aquest desajust.</>
                ) : (
                  <>Es una <strong className="text-indigo-300">actitud general negativa hacia el trabajo</strong> que procede de la <strong>diferencia entre las expectativas generadas</strong> respecto al trabajo y la <strong>realidad de lo que es el trabajo</strong>, así como de la importancia que el trabajador le concede a ese desajuste.</>
                )}
              </p>
            </div>

            {/* Diagrama de Factors */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/60 text-center">
                <span className="text-2xl text-sky-400 mb-2 block">💭</span>
                <h4 className="font-bold text-white text-sm mb-1">
                  {language === 'ca' ? '1. Expectatives' : '1. Expectativas'}
                </h4>
                <p className="text-xs text-slate-400">
                  {language === 'ca' ? 'El que el treballador espera obtenir (horari, salari, ambient, promoció).' : 'Lo que el trabajador espera obtener (horario, salario, ambiente, promoción).'}
                </p>
              </div>
              <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/60 text-center">
                <span className="text-2xl text-indigo-400 mb-2 block">💼</span>
                <h4 className="font-bold text-white text-sm mb-1">
                  {language === 'ca' ? '2. Realitat del Treball' : '2. Realidad del Trabajo'}
                </h4>
                <p className="text-xs text-slate-400">
                  {language === 'ca' ? 'Les condicions reals en les quals executa les seves tasques diàries.' : 'Las condiciones reales en las que ejecuta sus tareas diarias.'}
                </p>
              </div>
              <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/60 text-center">
                <span className="text-2xl text-rose-400 mb-2 block">⚖️</span>
                <h4 className="font-bold text-white text-sm mb-1">
                  {language === 'ca' ? '3. Importància Valorada' : '3. Importancia Valorada'}
                </h4>
                <p className="text-xs text-slate-400">
                  {language === 'ca' ? 'El valor personal i emocional que s\'atorga a aquest desajust.' : 'El valor personal y emocional que se otorga a dicho desajuste.'}
                </p>
              </div>
            </div>

            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
              <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                💡 {language === 'ca' ? 'Exemple Didàctic' : 'Ejemplo Didáctico'}
              </h4>
              <p className="text-xs md:text-sm text-slate-300">
                {language === 'ca'
                  ? 'Si un treballador espera un bon horari però l\'empresa no li\'l dóna, i per a ell l\'horari és primordial, estarà insatisfet. En canvi, si un altre treballador té la mateixa condició però prioritza el sou o diu "Bé, no té importància", no experimentarà insatisfacció. La insatisfacció depèn de la combinació dels 3 factors alhora.'
                  : 'Si un trabajador espera un buen horario pero la empresa no se lo da, y para él el horario es primordial, estará insatisfecho. En cambio, si otro trabajador tiene la misma condición pero prioriza el sueldo o dice "Bueno, no tiene importancia", no experimentará insatisfacción. La insatisfacción depende de la combinación de los 3 factores a la vez.'}
              </p>
            </div>
          </div>

          <div className="mt-4 text-xs text-slate-500">
            * {language === 'ca' ? 'Influència directa de la Psicosociologia aplicada com a tècnica de prevenció laboral.' : 'Influencia directa de la Psicosociología aplicada como técnica de prevención laboral.'}
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* SLIDE 4: 3.5 L'ENVELLIMENT PREMATUR */}
      {/* ============================================================== */}
      {currentSlide === 3 && (
        <section className="print-slide bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl flex flex-col justify-between min-h-[560px] animate-fadeIn">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">
                {language === 'ca' ? 'Apartat 3.5' : 'Apartado 3.5'}
              </span>
              <span className="text-xs bg-slate-800 px-2.5 py-1 rounded-md text-slate-400">
                {language === 'ca' ? 'Efectes Crònics' : 'Efectos Crónicos'}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {language === 'ca' ? '3.5. L\'Envelliment Prematur' : '3.5. El Envejecimiento Prematuro'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-4">
                <div className="bg-slate-800/90 border-l-4 border-amber-500 p-4 rounded-r-xl">
                  <p className="text-sm md:text-base text-slate-200">
                    {language === 'ca' ? (
                      <>Determinats llocs de treball i activitats produeixen un <strong className="text-amber-400">desgast biològic superior</strong> a causa de l'acumulació continuada de <strong className="text-amber-400">fatiga crònica</strong>, fet que provoca una <strong>acceleració de l'envelliment natural</strong> de l'organisme.</>
                    ) : (
                      <>Determinados puestos de trabajo y actividades producen un <strong className="text-amber-400">desgaste biológico superior</strong> debido a la acumulación continuada de <strong className="text-amber-400">fatiga crónica</strong>, lo que provoca una <strong>aceleración del envejecimiento natural</strong> del organismo.</>
                    )}
                  </p>
                </div>

                <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/60">
                  <h3 className="font-bold text-white text-sm mb-2 flex items-center gap-2">
                    <HardHat className="w-4 h-4 text-amber-400" />
                    {language === 'ca' ? 'Exemple de Sectors Especialment Afectats' : 'Ejemplo de Sectores Especialmente Afectados'}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-300">
                    {language === 'ca'
                      ? 'Els treballadors de mineria, feines submarines, manteniment pesat o torns nocturns continuats pateixen un desgast accelerat. Per aquest motiu, la Seguretat Social reconeix coeficients reductors i una edat de jubilació més primerenca sense penalització econòmica.'
                      : 'Los trabajadores de minería, trabajos subacuáticos, mantenimiento pesado o turnos nocturnos continuados sufren un desgaste acelerado. Por este motivo, la Seguridad Social reconoce coeficientes reductores y una edad de jubilación más temprana sin penalización económica.'}
                  </p>
                </div>
              </div>

              <div className="md:col-span-4 bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 text-center flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-400 text-3xl mb-3 border border-amber-500/20">
                  ⏳
                </div>
                <h4 className="font-bold text-white text-sm">
                  {language === 'ca' ? 'Fatiga Crònica Acumulada' : 'Fatiga Crónica Acumulada'}
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  {language === 'ca' 
                    ? 'Suma sostinguda de desgast físic i psíquic no recuperat durant els períodes de descans.' 
                    : 'Suma sostenida de desgaste físico y psíquico no recuperado durante los períodos de descanso.'}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex justify-between text-xs text-slate-500">
            <span>{language === 'ca' ? 'Coeficients reductors de jubilació bonificada (RDL 8/2015)' : 'Coeficientes reductores de jubilación bonificada (RDL 8/2015)'}</span>
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* SLIDE 5: 4. MESURES DE PREVENCIÓ I PROTECCIÓ */}
      {/* ============================================================== */}
      {currentSlide === 4 && (
        <section className="print-slide bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl flex flex-col justify-between min-h-[560px] animate-fadeIn">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">
                {language === 'ca' ? 'Apartat 4' : 'Apartado 4'}
              </span>
              <span className="text-xs bg-slate-800 px-2.5 py-1 rounded-md text-slate-400">
                {language === 'ca' ? 'Prevenció i Protecció' : 'Prevención y Protección'}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {language === 'ca' 
                ? '4. Mesures de Prevenció i Protecció de Riscos Laborals' 
                : '4. Medidas de Prevención y Protección de Riesgos Laborales'}
            </h2>
            <p className="text-xs md:text-sm text-slate-400 mb-6">
              {language === 'ca' 
                ? 'Quina diferència fonamental existeix entre prevenir i protegir?' 
                : '¿Qué diferencia fundamental existe entre prevenir y proteger?'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Prevenció */}
              <div className="bg-slate-800/80 p-5 rounded-2xl border-t-4 border-sky-500 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-sky-400 flex items-center gap-2">
                    <Ban className="w-5 h-5" />
                    {language === 'ca' ? 'Mesures de Prevenció' : 'Medidas de Prevención'}
                  </h3>
                  <span className="text-xs bg-sky-500/10 text-sky-300 px-2 py-0.5 rounded font-mono">
                    {language === 'ca' ? 'Actua Abans' : 'Actúa Antes'}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-slate-300 mb-4 leading-relaxed">
                  {language === 'ca'
                    ? 'Actuen abans que es produeixi l\'accident o dany, de manera que intenten eliminar o reduir el risc en el focus d\'origen, evitant que arribi a succeir.'
                    : 'Actúan antes de que se produzca el accidente o daño, de modo que intentan eliminar o reducir el riesgo en el foco de origen, evitando que llegue a suceder.'}
                </p>
                <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-700/50">
                  <span className="text-xs text-sky-400 font-bold block mb-1">
                    {language === 'ca' ? 'Exemple del vehicle:' : 'Ejemplo del vehículo:'}
                  </span>
                  <p className="text-xs text-slate-300">
                    {language === 'ca' 
                      ? 'Els frens ABS que eviten el bloqueig de rodes per impedir que es produeixi la col·lisió.' 
                      : 'Los frenos ABS que evitan el bloqueo de ruedas para impedir que se produzca la colisión.'}
                  </p>
                </div>
              </div>

              {/* Protecció */}
              <div className="bg-slate-800/80 p-5 rounded-2xl border-t-4 border-amber-500 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" />
                    {language === 'ca' ? 'Mesures de Protecció' : 'Medidas de Protección'}
                  </h3>
                  <span className="text-xs bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded font-mono">
                    {language === 'ca' ? 'Redueix Danys' : 'Reduce Daños'}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-slate-300 mb-4 leading-relaxed">
                  {language === 'ca'
                    ? 'No eliminen el risc o perill d\'origen, sinó que redueixen o eliminen les seves conseqüències (danys) sobre el treballador una vegada s\'ha materialitzat l\'event.'
                    : 'No eliminan el riesgo o peligro de origen, sino que reducen o eliminan sus consecuencias (daños) sobre el trabajador una vez se ha materializado el evento.'}
                </p>
                <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-700/50">
                  <span className="text-xs text-amber-400 font-bold block mb-1">
                    {language === 'ca' ? 'Exemple del vehicle:' : 'Ejemplo del vehículo:'}
                  </span>
                  <p className="text-xs text-slate-300">
                    {language === 'ca' 
                      ? 'El coixí de seguretat (airbag) i el cinturó que no eviten el xoc, sinó que minimitzen les lesions.' 
                      : 'El airbag y el cinturón de seguridad que no evitan el choque, sino que minimizan las lesiones.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-slate-800/40 p-3 rounded-xl border border-slate-700/60 text-xs text-slate-300">
            <strong>{language === 'ca' ? 'Dos tipus de protecció:' : 'Dos tipos de protección:'}</strong>{' '}
            <span className="text-sky-300">
              {language === 'ca' ? 'Protecció Col·lectiva' : 'Protección Colectiva'}
            </span>{' '}
            {language === 'ca' ? '(protegeix diversos treballadors alhora sobre el mitjà)' : '(protege a varios trabajadores a la vez sobre el medio)'}{' '}
            {language === 'ca' ? 'i' : 'y'}{' '}
            <span className="text-amber-300">
              {language === 'ca' ? 'Protecció Individual / EPI' : 'Protección Individual / EPI'}
            </span>{' '}
            {language === 'ca' ? '(protegeix directament el treballador que el porta).' : '(protege directamente al trabajador que lo porta).'}
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* SLIDE 6: ORDRE DE PRIORITAT DE LES MESURES */}
      {/* ============================================================== */}
      {currentSlide === 5 && (
        <section className="print-slide bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl flex flex-col justify-between min-h-[560px] animate-fadeIn">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">
                {language === 'ca' ? 'Ordre Normatiu' : 'Orden Normativo'}
              </span>
              <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-md font-bold">
                {language === 'ca' ? 'Principi Fonamental LPRL' : 'Principio Fundamental LPRL'}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {language === 'ca' ? 'Quines mesures són prioritàries?' : '¿Qué medidas son prioritarias?'}
            </h2>
            
            <p className="text-xs md:text-sm text-slate-300 mb-6">
              {language === 'ca'
                ? 'L\'article 15 de la Llei de Prevenció estableix una jerarquia estricta i obligatòria d\'actuació:'
                : 'El artículo 15 de la Ley de Prevención establece una jerarquía estricta y obligatoria de actuación:'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* 1r Lloc */}
              <div className="bg-slate-800/90 p-4 rounded-xl border-2 border-emerald-500 relative">
                <span className="absolute -top-3 left-4 bg-emerald-500 text-slate-950 font-bold text-xs px-2 py-0.5 rounded">
                  {language === 'ca' ? '1r LLOC' : '1º LUGAR'}
                </span>
                <h3 className="font-bold text-white text-base mt-2 mb-1">
                  {language === 'ca' ? 'PREVENCIÓ' : 'PREVENCIÓN'}
                </h3>
                <p className="text-xs text-emerald-400 font-semibold mb-3">
                  {language === 'ca' ? 'Actua sobre EL FOCUS' : 'Actúa sobre EL FOCO'}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {language === 'ca' 
                    ? 'Evitar els riscos a l\'origen i avaluar els que no es puguin evitar en la planificació inicial.' 
                    : 'Evitar los riesgos en el origen y evaluar aquellos que no se puedan evitar en la planificación inicial.'}
                </p>
                <div className="mt-3 text-xs bg-slate-900/80 p-2.5 rounded text-slate-400 border border-slate-700/50">
                  <strong>{language === 'ca' ? 'Exemples: ' : 'Ejemplos: '}</strong>
                  {language === 'ca' 
                    ? 'Substitució de químics perillosos per innocus, manteniment preventiu de màquines.' 
                    : 'Sustitución de químicos peligrosos por inocuos, mantenimiento preventivo de máquinas.'}
                </div>
              </div>

              {/* 2n Lloc */}
              <div className="bg-slate-800/90 p-4 rounded-xl border-2 border-sky-500 relative">
                <span className="absolute -top-3 left-4 bg-sky-500 text-slate-950 font-bold text-xs px-2 py-0.5 rounded">
                  {language === 'ca' ? '2n LLOC' : '2º LUGAR'}
                </span>
                <h3 className="font-bold text-white text-base mt-2 mb-1">
                  {language === 'ca' ? 'PROTECCIÓ COL·LECTIVA' : 'PROTECCIÓN COLECTIVA'}
                </h3>
                <p className="text-xs text-sky-400 font-semibold mb-3">
                  {language === 'ca' ? 'Actua sobre EL MITJÀ' : 'Actúa sobre EL MEDIO'}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {language === 'ca' 
                    ? 'Si no es pot eliminar el risc, anteposar la protecció col·lectiva a la individual.' 
                    : 'Si no se puede eliminar el riesgo, anteponer la protección colectiva a la individual.'}
                </p>
                <div className="mt-3 text-xs bg-slate-900/80 p-2.5 rounded text-slate-400 border border-slate-700/50">
                  <strong>{language === 'ca' ? 'Exemples: ' : 'Ejemplos: '}</strong>
                  {language === 'ca' 
                    ? 'Baranes a les bastides, xarxes de seguretat, resguards de motors, ventilació forçada.' 
                    : 'Barandillas en andamios, redes de seguridad, resguardos de motores, ventilación forzada.'}
                </div>
              </div>

              {/* 3r Lloc */}
              <div className="bg-slate-800/90 p-4 rounded-xl border-2 border-amber-500 relative">
                <span className="absolute -top-3 left-4 bg-amber-500 text-slate-950 font-bold text-xs px-2 py-0.5 rounded">
                  {language === 'ca' ? '3r LLOC (ÚLTIM)' : '3º LUGAR (ÚLTIMO)'}
                </span>
                <h3 className="font-bold text-white text-base mt-2 mb-1">
                  {language === 'ca' ? 'PROTECCIÓ INDIVIDUAL' : 'PROTECCIÓN INDIVIDUAL'}
                </h3>
                <p className="text-xs text-amber-400 font-semibold mb-3">
                  {language === 'ca' ? 'Actua sobre EL TREBALLADOR' : 'Actúa sobre EL TRABAJADOR'}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {language === 'ca' 
                    ? 'Últim recurs quan les mesures prèvies són tècnicament insuficients o durant la seva instal·lació.' 
                    : 'Último recurso cuando las medidas previas son técnicamente insuficientes o durante su instalación.'}
                </p>
                <div className="mt-3 text-xs bg-slate-900/80 p-2.5 rounded text-slate-400 border border-slate-700/50">
                  <strong>{language === 'ca' ? 'Exemples: ' : 'Ejemplos: '}</strong>
                  {language === 'ca' 
                    ? 'Mascaretes amb filtre, guants de nitril, botes amb puntera d\'acer, arnès anticaigudes.' 
                    : 'Mascarillas con filtro, guantes de nitrilo, botas con puntera de acero, arnés anticaídas.'}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-slate-800/60 p-3 rounded-lg border border-slate-700 text-xs text-slate-300">
            <strong className="text-sky-400">{language === 'ca' ? 'Exemple pràctic del Soroll: ' : 'Ejemplo práctico del Ruido: '}</strong>
            {language === 'ca'
              ? '1r) Substituir la màquina per una de silenciosa -> 2n) Insonoritzar la sala amb pantalles acústiques -> 3r) Proveir taps o orelleres al treballador.'
              : '1º) Sustituir la máquina por una silenciosa -> 2º) Insonorizar la sala con pantallas acústicas -> 3º) Proveer tapones u orejeras al trabajador.'}
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* SLIDE 7: A) TÈCNIQUES DE PREVENCIÓ */}
      {/* ============================================================== */}
      {currentSlide === 6 && (
        <section className="print-slide bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl flex flex-col justify-between min-h-[560px] animate-fadeIn">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">
                {language === 'ca' ? 'Especialitats Preventives' : 'Especialidades Preventivas'}
              </span>
              <span className="text-xs bg-slate-800 px-2.5 py-1 rounded-md text-slate-400">
                {language === 'ca' ? 'Disciplines PRL' : 'Disciplinas PRL'}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {language === 'ca' ? 'A) Tècniques de Prevenció' : 'A) Técnicas de Prevención'}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/70">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-xs">⚠️</span>
                  <h3 className="font-bold text-white text-sm">
                    {language === 'ca' ? 'Seguretat en el Treball' : 'Seguridad en el Trabajo'}
                  </h3>
                </div>
                <p className="text-xs text-slate-300">
                  {language === 'ca'
                    ? 'Evita els accidents laborals actuant sobre les condicions de màquines, instal·lacions, eines i llocs de treball.'
                    : 'Evita los accidentes laborales actuando sobre las condiciones de máquinas, instalaciones, herramientas y lugares de trabajo.'}
                </p>
              </div>

              <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/70">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-xs">🧪</span>
                  <h3 className="font-bold text-white text-sm">
                    {language === 'ca' ? 'Higiene Industrial' : 'Higiene Industrial'}
                  </h3>
                </div>
                <p className="text-xs text-slate-300">
                  {language === 'ca'
                    ? 'Prevé malalties professionals identificant i mesurant contaminants físics (soroll, vibració), químics (dissolvents) i biològics.'
                    : 'Previene enfermedades profesionales identificando y midiendo contaminantes físicos (ruido, vibración), químicos (disolventes) y biológicos.'}
                </p>
              </div>

              <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/70">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">🪑</span>
                  <h3 className="font-bold text-white text-sm">
                    {language === 'ca' ? 'Ergonomia' : 'Ergonomía'}
                  </h3>
                </div>
                <p className="text-xs text-slate-300">
                  {language === 'ca'
                    ? 'Lluita contra la fatiga física adaptant el lloc de treball, pesos, alçades i ritmes a les característiques del treballador.'
                    : 'Lucha contra la fatiga física adaptando el puesto de trabajo, pesos, alturas y ritmos a las características del trabajador.'}
                </p>
              </div>

              <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/70">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs">👥</span>
                  <h3 className="font-bold text-white text-sm">
                    {language === 'ca' ? 'Psicosociologia' : 'Psicosociología'}
                  </h3>
                </div>
                <p className="text-xs text-slate-300">
                  {language === 'ca'
                    ? 'Combat la insatisfacció laboral millorant l\'organització de les tasques, autonomia, comunicació i ambient social.'
                    : 'Combate la insatisfacción laboral mejorando la organización de las tareas, autonomía, comunicación y clima social.'}
                </p>
              </div>

              <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/70 sm:col-span-2 lg:col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs">🩺</span>
                  <h3 className="font-bold text-white text-sm">
                    {language === 'ca' ? 'Medicina del Treball' : 'Medicina del Trabajo'}
                  </h3>
                </div>
                <p className="text-xs text-slate-300">
                  {language === 'ca'
                    ? 'Tècniques mèdiques assistencials i preventives: reconeixements mèdics periòdics específics, vacunació professional, vigilància de la salut i rehabilitació de lesions.'
                    : 'Técnicas médicas asistenciales y preventivas: reconocimientos médicos periódicos específicos, vacunación profesional, vigilancia de la salud y rehabilitación de lesiones.'}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
            {language === 'ca'
              ? 'Aquestes 5 disciplines conformen el marc d\'actuació integral d\'un Servei de Prevenció de Riscos Laborals.'
              : 'Estas 5 disciplinas conforman el marco de actuación integral de un Servicio de Prevención de Riesgos Laborales.'}
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* SLIDE 8: B) PROTECCIÓ COL·LECTIVA */}
      {/* ============================================================== */}
      {currentSlide === 7 && (
        <section className="print-slide bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl flex flex-col justify-between min-h-[560px] animate-fadeIn">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">
                {language === 'ca' ? 'Protecció Comuna' : 'Protección Común'}
              </span>
              <span className="text-xs bg-slate-800 px-2.5 py-1 rounded-md text-slate-400">
                {language === 'ca' ? 'Sobre el Mitjà' : 'Sobre el Medio'}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {language === 'ca' ? 'B) Tècniques de Protecció Col·lectiva' : 'B) Técnicas de Protección Colectiva'}
            </h2>
            <p className="text-xs md:text-sm text-slate-300 mb-6">
              {language === 'ca'
                ? 'Protegeixen simultàniament a diversos treballadors interposant una barrera física o tècnica en el mitjà de transmissió:'
                : 'Protegen simultáneamente a varios trabajadores interponiendo una barrera física o técnica en el medio de transmisión:'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700/70 flex items-start gap-3">
                <div className="text-sky-400 text-xl pt-1">🚧</div>
                <div>
                  <h4 className="font-bold text-white text-sm">
                    {language === 'ca' ? 'Baranes i Xarxes de Seguretat' : 'Barandillas y Redes de Seguridad'}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {language === 'ca' 
                      ? 'Impedeixen o detenen les caigudes a diferent nivell en bastides, passarel·les i cobertes d\'embarcacions.' 
                      : 'Impiden o detienen las caídas a distinto nivel en andamios, pasarelas y cubiertas de embarcaciones.'}
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700/70 flex items-start gap-3">
                <div className="text-sky-400 text-xl pt-1">🛡️</div>
                <div>
                  <h4 className="font-bold text-white text-sm">
                    {language === 'ca' ? 'Resguards de Màquines' : 'Resguardos de Máquinas'}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {language === 'ca' 
                      ? 'Barreres fixes o mòbils amb enclavament que impedeixen l\'accés a eixos, engranatges i transmissions mòbils.' 
                      : 'Barreras fijas o móviles con enclavamiento que impiden el acceso a ejes, engranajes y transmisiones móviles.'}
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700/70 flex items-start gap-3">
                <div className="text-sky-400 text-xl pt-1">⚡</div>
                <div>
                  <h4 className="font-bold text-white text-sm">
                    {language === 'ca' ? 'Dispositius de Parada d\'Emergència' : 'Dispositivos de Parada de Emergencia'}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {language === 'ca' 
                      ? 'Fotocèl·lules, barreres sensibles i comandaments bimanuals que aturen la màquina immediatament.' 
                      : 'Fotocélulas, barreras sensibles y mandos bimanuales que detienen la máquina inmediatamente.'}
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700/70 flex items-start gap-3">
                <div className="text-sky-400 text-xl pt-1">💨</div>
                <div>
                  <h4 className="font-bold text-white text-sm">
                    {language === 'ca' ? 'Ventilació Forçada i Extracció' : 'Ventilación Forzada y Extracción'}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {language === 'ca' 
                      ? 'Campanes d\'extracció focalitzada de vapors tòxics i sistemes de ventilació per a bodegues i dipòsits.' 
                      : 'Campanas de extracción localizada de vapores tóxicos y sistemas de ventilación para bodegas y depósitos.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl flex items-start gap-3">
              <span className="text-amber-400 text-xl pt-0.5">❓</span>
              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                  {language === 'ca' ? 'Sabies que...? (Resguards de màquines amb enclavament)' : '¿Sabías que...? (Resguardos de máquinas con enclavamiento)'}
                </h4>
                <p className="text-xs text-slate-300">
                  {language === 'ca'
                    ? 'Els resguards mòbils solen comptar amb un microinterruptor de seguretat: si el resguard s\'obre durant el funcionament, el circuit elèctric es talla instantàniament abans que la mà pugui arribar a l\'element perillós.'
                    : 'Los resguardos móviles suelen contar con un microinterruptor de seguridad: si el resguardo se abre durante el funcionamiento, el circuito eléctrico se corta instantáneamente antes de que la mano pueda alcanzar el elemento peligroso.'}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 text-xs text-slate-500">
            {language === 'ca' 
              ? 'S\'han de prioritzar i instal·lar abans de recórrer a l\'ús d\'EPIs individuals.' 
              : 'Se deben priorizar e instalar antes de recurrir al uso de EPIs individuales.'}
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* SLIDE 9: C) ELS EQUIPS DE PROTECCIÓ INDIVIDUAL (EPI) */}
      {/* ============================================================== */}
      {currentSlide === 8 && (
        <section className="print-slide bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl flex flex-col justify-between min-h-[560px] animate-fadeIn">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">
                {language === 'ca' ? 'Apartat C' : 'Apartado C'}
              </span>
              <span className="text-xs bg-rose-500/20 text-rose-400 px-2.5 py-1 rounded-md font-bold">
                {language === 'ca' ? 'Última Mesura' : 'Última Medida'}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {language === 'ca' ? 'C) Els Equips de Protecció Individual (EPI)' : 'C) Los Equipos de Protección Individual (EPI)'}
            </h2>

            <div className="bg-slate-800/90 border-l-4 border-rose-500 p-4 rounded-r-xl mb-5">
              <p className="text-sm md:text-base text-slate-200">
                <strong>{language === 'ca' ? 'Definició Oficial d\'EPI (RD 773/1997): ' : 'Definición Oficial de EPI (RD 773/1997): '}</strong>
                {language === 'ca'
                  ? 'Qualsevol equip destinat a ser portat o subjectat pel treballador perquè el protegeixi d\'un o diversos riscos que puguin amenaçar la seva salut o seguretat, així com qualsevol complement o accessori destinat a tal fi.'
                  : 'Cualquier equipo destinado a ser llevado o sujetado por el trabajador para que le proteja de uno o varios riesgos que puedan amenazar su salud o seguridad, así como cualquier complemento o accesorio destinado a tal fin.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
                <h4 className="font-bold text-rose-400 text-sm mb-2 flex items-center gap-2">
                  ❌ {language === 'ca' ? 'Què NO es considera EPI?' : '¿Qué NO se considera EPI?'}
                </h4>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>{language === 'ca' ? 'Roba de treball corrent i uniformes que no protegeixin contra un risc específic' : 'Ropa de trabajo corriente y uniformes que no protejan contra un riesgo específico'}</li>
                  <li>{language === 'ca' ? 'Equips dels serveis de socors i salvament' : 'Equipos de los servicios de socorro y salvamento'}</li>
                  <li>{language === 'ca' ? 'Equips de policies, militars i vigilància de seguretat' : 'Equipos de policías, militares y vigilancia de seguridad'}</li>
                  <li>{language === 'ca' ? 'Aparells portàtils de detecció de gasos o senyalització' : 'Aparatos portátiles de detección de gases o señalización'}</li>
                  <li>{language === 'ca' ? 'Material esportiu o mitjans d\'autodefensa' : 'Material deportivo o medios de autodefensa'}</li>
                </ul>
              </div>

              <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-sky-400 text-sm mb-2 flex items-center gap-2">
                    ✓ {language === 'ca' ? 'Condicions d\'Obligatorietat' : 'Condiciones de Obligatoriedad'}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {language === 'ca'
                      ? 'L\'empresa té l\'obligació de proporcionar els EPIs de forma gratuïta, adequats al lloc de treball i amb marcatge CE de conformitat europea. El treballador té l\'obligació d\'utilitzar-los i cuidar-los.'
                      : 'La empresa tiene la obligación de proporcionar los EPIs de forma gratuita, adecuados al puesto de trabajo y con marcado CE de conformidad europea. El trabajador tiene la obligación de utilizarlos y cuidarlos.'}
                  </p>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700/50 text-xs text-slate-400">
                  {language === 'ca' 
                    ? 'A la següent diapositiva trobareu l\'esquema visual interactiu complet per regions corporals.' 
                    : 'En la siguiente diapositiva encontraréis el esquema visual interactivo completo por regiones corporales.'}
                </div>
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-500">
            {language === 'ca' ? 'Reial Decret 773/1997 sobre equips de protecció individual.' : 'Real Decreto 773/1997 sobre equipos de protección individual.'}
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* SLIDE 10: CATÀLEG INTERACTIU D'EPIS PER PARTS DEL COS */}
      {/* ============================================================== */}
      {currentSlide === 9 && (
        <section className="print-slide bg-slate-900 border border-slate-800 rounded-2xl p-5 md:p-8 shadow-2xl flex flex-col justify-between min-h-[560px] animate-fadeIn">
          <InteractiveWorkerPPE language={language} />
        </section>
      )}

      {/* ============================================================== */}
      {/* SLIDE 11: EXEMPLE PRÀCTIC 4 (LUIS) */}
      {/* ============================================================== */}
      {currentSlide === 10 && (
        <section className="print-slide bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl flex flex-col justify-between min-h-[560px] animate-fadeIn">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">
                {language === 'ca' ? 'Exemple Pràctic 4' : 'Ejemplo Práctico 4'}
              </span>
              <span className="text-xs bg-slate-800 px-2.5 py-1 rounded-md text-slate-400">
                {language === 'ca' ? 'Resolució de Cas' : 'Resolución de Caso'}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {language === 'ca' 
                ? 'Cas Pràctic: Luis (Instal·lacions Elèctriques)' 
                : 'Caso Práctico: Luis (Instalaciones Eléctricas)'}
            </h2>

            <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700 mb-5">
              <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                📄 {language === 'ca' ? 'Situació / Enunciat' : 'Situación / Enunciado'}
              </h4>
              <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
                {language === 'ca'
                  ? 'Luis treballa en una drassana i fàbrica de reparació encarregant-se de les reparacions elèctriques i que totes les instal·lacions de baixa tensió estiguin en correcte funcionament. Quins EPIs haurà d\'utilitzar Luis per a protegir-se dels possibles riscos laborals?'
                  : 'Luis trabaja en un astillero y taller de reparación encargándose de las reparaciones eléctricas y de que todas las instalaciones de baja tensión estén en correcto funcionamiento. ¿Qué EPIs deberá utilizar Luis para protegerse de los posibles riesgos laborales?'}
              </p>
            </div>

            <div className="solution-container">
              <button 
                onClick={() => toggleSolution('sol-ex4')} 
                className="no-print bg-sky-600 hover:bg-sky-500 text-white font-medium text-xs px-4 py-2 rounded-lg transition flex items-center gap-2 shadow-md"
              >
                <Key className="w-4 h-4" />
                <span>{t.showSolution}</span>
              </button>

              <div className={`solution-box ${isSolutionOpen('sol-ex4') ? 'block' : 'hidden'} mt-4 bg-emerald-950/40 border border-emerald-500/40 p-4 rounded-xl`}>
                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  {t.solutionTitle}
                </h4>
                <p className="text-xs md:text-sm text-slate-200 leading-relaxed mb-2">
                  {language === 'ca' ? 'Luis haurà d\'utilitzar obligatòriament:' : 'Luis deberá utilizar obligatoriamente:'}
                </p>
                <ul className="text-xs md:text-sm text-slate-300 space-y-1.5 list-disc list-inside mb-3">
                  <li><strong>{language === 'ca' ? 'Guants dielèctrics' : 'Guantes dieléctricos'}</strong> {language === 'ca' ? 'certificats contra contactes elèctrics directes/indirectes.' : 'certificados contra contactos eléctricos directos/indirectos.'}</li>
                  <li><strong>{language === 'ca' ? 'Calçat de seguretat aïllant' : 'Calzado de seguridad aislante'}</strong> {language === 'ca' ? 'amb sola d\'alta resistència elèctrica.' : 'con suela de alta resistencia eléctrica.'}</li>
                  <li><strong>{language === 'ca' ? 'Casc electrònicament aïllant' : 'Casco eléctricamente aislante'}</strong> {language === 'ca' ? 'per a protecció fins a 500 V o 1000 V.' : 'para protección hasta 500 V o 1000 V.'}</li>
                  <li><strong>{language === 'ca' ? 'Roba ignífuga i aïllant' : 'Ropa ignífuga y aislante'}</strong> {language === 'ca' ? 'enfront de curtcircuits i arcs elèctrics.' : 'frente a cortocircuitos y arcos eléctricos.'}</li>
                  <li><strong>{language === 'ca' ? 'Accessoris com perxes i catifes aïllants' : 'Accesorios como pértigas y alfombras aislantes'}</strong>.</li>
                </ul>
                <p className="text-xs text-amber-300 font-semibold bg-amber-500/10 p-2 rounded border border-amber-500/20">
                  ⚠️ {language === 'ca' 
                    ? 'Recordatori de prioritat: Abans de confiar només en els EPIs, cal aplicar les 5 Regles d\'Or de Seguretat Elèctrica (desconnectar, bloquejar, verificar absència de tensió, posar a terra i senyalitzar).' 
                    : 'Recordatorio de prioridad: Antes de confiar solo en los EPIs, se deben aplicar las 5 Reglas de Oro de Seguridad Eléctrica (desconectar, bloquear, verificar ausencia de tensión, poner a tierra y señalizar).'}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 text-xs text-slate-500">
            {language === 'ca' ? 'Aplica la prioritat: Procediment segur + Protecció col·lectiva + EPIs específics.' : 'Aplica la prioridad: Procedimiento seguro + Protección colectiva + EPIs específicos.'}
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* SLIDE 12: ACTIVITAT 7 (BELÉN) */}
      {/* ============================================================== */}
      {currentSlide === 11 && (
        <section className="print-slide bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl flex flex-col justify-between min-h-[560px] animate-fadeIn">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">
                {language === 'ca' ? 'Exercici 7' : 'Ejercicio 7'}
              </span>
              <span className="text-xs bg-slate-800 px-2.5 py-1 rounded-md text-slate-400">
                {language === 'ca' ? 'Activitats d\'Avaluació' : 'Actividades de Evaluación'}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {language === 'ca' ? 'ACTIVITAT 7 — Belén (Empresa de Ceràmica)' : 'ACTIVIDAD 7 — Belén (Empresa Cerámica)'}
            </h2>

            <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700 mb-4 text-xs md:text-sm text-slate-200">
              <p className="mb-2">
                {language === 'ca'
                  ? 'Belén treballa en una empresa on es genera pols en suspensió i utilitza productes químics. L\'empresa estableix les següents tres mesures:'
                  : 'Belén trabaja en una empresa donde se genera polvo en suspensión y utiliza productos químicos. La empresa establece las siguientes tres medidas:'}
              </p>
              <ul className="list-inside space-y-1 font-semibold text-sky-300">
                <li>a) {language === 'ca' ? 'Lliurament de màscares respiratòries als treballadors.' : 'Entrega de mascarillas respiratorias a los trabajadores.'}</li>
                <li>b) {language === 'ca' ? 'Instal·lació d\'aspiradors de pols en els llocs de treball.' : 'Instalación de aspiradores de polvo en los puestos de trabajo.'}</li>
                <li>c) {language === 'ca' ? 'Substitució del clor per l\'oxigen, que és menys perjudicial.' : 'Sustitución del cloro por el oxígeno, que es menos perjudicial.'}</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-slate-700/80 font-normal space-y-1 text-slate-300">
                <p><strong>a)</strong> {language === 'ca' ? 'Indica quina és una mesura de prevenció, quina de protecció col·lectiva i quina de protecció individual.' : 'Indica cuál es una medida de prevención, cuál de protección colectiva y cuál de protección individual.'}</p>
                <p><strong>b)</strong> {language === 'ca' ? 'Indica l\'ordre jeràrquic d\'utilització d\'aquestes 3 mesures segons la LPRL.' : 'Indica el orden jerárquico de utilización de estas 3 medidas según la LPRL.'}</p>
              </div>
            </div>

            <div className="solution-container">
              <button 
                onClick={() => toggleSolution('sol-ex7')} 
                className="no-print bg-sky-600 hover:bg-sky-500 text-white font-medium text-xs px-4 py-2 rounded-lg transition flex items-center gap-2 shadow-md"
              >
                <Key className="w-4 h-4" />
                <span>{t.showSolution}</span>
              </button>

              <div className={`solution-box ${isSolutionOpen('sol-ex7') ? 'block' : 'hidden'} mt-3 bg-emerald-950/40 border border-emerald-500/40 p-4 rounded-xl text-xs md:text-sm`}>
                <h4 className="font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  {t.solutionTitle} — {language === 'ca' ? 'ACTIVITAT 7' : 'ACTIVIDAD 7'}
                </h4>
                <div className="space-y-2 text-slate-200">
                  <p><strong>{language === 'ca' ? 'Classificació de mesures:' : 'Clasificación de medidas:'}</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    <li><strong>c) {language === 'ca' ? 'Substituir clor per oxigen: ' : 'Sustituir cloro por oxígeno: '}</strong>
                      <em>{language === 'ca' ? 'Mesura de Prevenció' : 'Medida de Prevención'}</em> {language === 'ca' ? '(actua sobre el focus eliminant el risc a l\'arrel).' : '(actúa sobre el foco eliminando el riesgo de raíz).'}
                    </li>
                    <li><strong>b) {language === 'ca' ? 'Aspiradors de pols: ' : 'Aspiradores de polvo: '}</strong>
                      <em>{language === 'ca' ? 'Mesura de Protecció Col·lectiva' : 'Medida de Protección Colectiva'}</em> {language === 'ca' ? '(actua sobre el mitjà de transmissió).' : '(actúa sobre el medio de transmisión).'}
                    </li>
                    <li><strong>a) {language === 'ca' ? 'Màscares als treballadors: ' : 'Mascarillas a los trabajadores: '}</strong>
                      <em>{language === 'ca' ? 'Mesura de Protecció Individual (EPI)' : 'Medida de Protección Individual (EPI)'}</em> {language === 'ca' ? '(actua sobre el treballador).' : '(actúa sobre el trabajador).'}
                    </li>
                  </ul>
                  <p className="pt-2"><strong>{language === 'ca' ? 'Ordre de prioritat obligatori:' : 'Orden de prioridad obligatorio:'}</strong></p>
                  <p className="font-bold text-emerald-300">
                    1r Lloc: c (Prevenció) ➔ 2n Lloc: b (Protecció Col·lectiva) ➔ 3r Lloc: a (EPI)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-xs text-slate-500">
            {language === 'ca' ? 'Principi de prioritat d\'acció preventiva (Art. 15 Llei 31/1995).' : 'Principio de prioridad de acción preventiva (Art. 15 Ley 31/1995).'}
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* SLIDE 13: ACTIVITAT 8 (CLASSIFICACIÓ DE MESURES) */}
      {/* ============================================================== */}
      {currentSlide === 12 && (
        <section className="print-slide bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl flex flex-col justify-between min-h-[560px] animate-fadeIn">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">
                {language === 'ca' ? 'Exercici 8' : 'Ejercicio 8'}
              </span>
              <span className="text-xs bg-slate-800 px-2.5 py-1 rounded-md text-slate-400">
                {language === 'ca' ? 'Classificació' : 'Clasificación'}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {language === 'ca' ? 'ACTIVITAT 8 — Classificació de Mesures' : 'ACTIVIDAD 8 — Clasificación de Medidas'}
            </h2>

            <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700 mb-3 text-xs md:text-sm text-slate-200">
              <p className="mb-2">
                {language === 'ca'
                  ? 'Classifica les següents mesures segons siguin mesures de prevenció o de protecció. Indica sobre quin element actuen (focus, mitjà de transmissió o treballador):'
                  : 'Clasifica las siguientes medidas según sean medidas de prevención o de protección. Indica sobre qué elemento actúan (foco, medio de transmisión o trabajador):'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
                <div>a) {language === 'ca' ? 'Usar baranes i xarxes en una obra naval.' : 'Usar barandillas y redes en una obra naval.'}</div>
                <div>b) {language === 'ca' ? 'Greixar una màquina per a reduir el soroll.' : 'Engrasar una máquina para reducir el ruido.'}</div>
                <div>c) {language === 'ca' ? 'Substituir teules d\'uralita per materials no cancerígens.' : 'Sustituir tejas de uralita por materiales no cancerígenos.'}</div>
                <div>d) {language === 'ca' ? 'Lliurar roba especial contra el fred en cambres frigorífiques.' : 'Entregar ropa especial contra el frío en cámaras frigoríficas.'}</div>
                <div>e) {language === 'ca' ? 'Disposar safata sota bidons per possible vessament químic.' : 'Disponer cubeto bajo bidones por posible derrame químico.'}</div>
                <div>f) {language === 'ca' ? 'Resguard d\'una guillotina de fulles per al funcionament.' : 'Resguardo de una guillotina de corte para el funcionamiento.'}</div>
              </div>
            </div>

            <div className="solution-container">
              <button 
                onClick={() => toggleSolution('sol-ex8')} 
                className="no-print bg-sky-600 hover:bg-sky-500 text-white font-medium text-xs px-4 py-2 rounded-lg transition flex items-center gap-2 shadow-md"
              >
                <Key className="w-4 h-4" />
                <span>{t.showSolution}</span>
              </button>

              <div className={`solution-box ${isSolutionOpen('sol-ex8') ? 'block' : 'hidden'} mt-3 bg-emerald-950/40 border border-emerald-500/40 p-3 rounded-xl text-xs`}>
                <h4 className="font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  {t.solutionTitle} — {language === 'ca' ? 'ACTIVITAT 8' : 'ACTIVIDAD 8'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-200">
                  <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                    <strong>a) Baranes/xarxes:</strong> {language === 'ca' ? 'Protecció col·lectiva ➔ Mitjà' : 'Protección colectiva ➔ Medio'}
                  </div>
                  <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                    <strong>b) Greixar màquina:</strong> {language === 'ca' ? 'Prevenció ➔ Focus' : 'Prevención ➔ Foco'}
                  </div>
                  <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                    <strong>c) Substituir uralita:</strong> {language === 'ca' ? 'Prevenció ➔ Focus' : 'Prevención ➔ Foco'}
                  </div>
                  <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                    <strong>d) Roba fred:</strong> {language === 'ca' ? 'Protecció individual (EPI) ➔ Treballador' : 'Protección individual (EPI) ➔ Trabajador'}
                  </div>
                  <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                    <strong>e) Safata químics:</strong> {language === 'ca' ? 'Protecció col·lectiva ➔ Mitjà' : 'Protección colectiva ➔ Medio'}
                  </div>
                  <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                    <strong>f) Resguard guillotina:</strong> {language === 'ca' ? 'Protecció col·lectiva ➔ Mitjà/Màquina' : 'Protección colectiva ➔ Medio/Máquina'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 text-xs text-slate-500">
            {language === 'ca' ? 'Diferenciació precisa del punt d\'intervenció tècnica.' : 'Diferenciación precisa del punto de intervención técnica.'}
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* SLIDE 14: ACTIVITAT 9 (TÈCNIQUES PREVENTIVES) */}
      {/* ============================================================== */}
      {currentSlide === 13 && (
        <section className="print-slide bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl flex flex-col justify-between min-h-[560px] animate-fadeIn">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">
                {language === 'ca' ? 'Exercici 9' : 'Ejercicio 9'}
              </span>
              <span className="text-xs bg-slate-800 px-2.5 py-1 rounded-md text-slate-400">
                {language === 'ca' ? 'Tècniques Preventives' : 'Técnicas Preventivas'}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {language === 'ca' ? 'ACTIVITAT 9 — Disciplines Preventives' : 'ACTIVIDAD 9 — Disciplinas Preventivas'}
            </h2>

            <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700 mb-3 text-xs md:text-sm text-slate-200">
              <p className="mb-2">
                {language === 'ca'
                  ? 'Indica en les següents actuacions a quina tècnica preventiva fan referència (Seguretat, Higiene Industrial, Ergonomia, Psicosociologia o Medicina del Treball):'
                  : 'Indica en las siguientes actuaciones a qué técnica preventiva hacen referencia (Seguridad, Higiene Industrial, Ergonomía, Psicosociología o Medicina del Trabajo):'}
              </p>
              <div className="space-y-1 text-xs text-slate-300">
                <p><strong>a)</strong> {language === 'ca' ? 'Mesurar l\'aire d\'un taller per detectar dissolvents i pols.' : 'Medir el aire de un taller para detectar disolventes y polvo.'}</p>
                <p><strong>b)</strong> {language === 'ca' ? 'Dissenyar eines segures que impedeixin el contacte elèctric accidental.' : 'Diseñar herramientas seguras que impidan el contacto eléctrico accidental.'}</p>
                <p><strong>c)</strong> {language === 'ca' ? 'Fer pauses periòdiques per disminuir la fatiga davant pantalles o feines pesades.' : 'Hacer pausas periódicas para disminuir la fatiga frente a pantallas o tareas pesadas.'}</p>
                <p><strong>d)</strong> {language === 'ca' ? 'Realitzar reconeixements mèdics anuals específics als operaris.' : 'Realizar reconocimientos médicos anuales específicos a los operarios.'}</p>
                <p><strong>e)</strong> {language === 'ca' ? 'Triar cadires i suports regulables per a la comoditat física.' : 'Elegir sillas y soportes regulables para la comodidad física.'}</p>
                <p><strong>f)</strong> {language === 'ca' ? 'Organitzar rotació de tasques per evitar la monotonia i augmentar motivació.' : 'Organizar rotación de tareas para evitar la monotonía y aumentar la motivación.'}</p>
              </div>
            </div>

            <div className="solution-container">
              <button 
                onClick={() => toggleSolution('sol-ex9')} 
                className="no-print bg-sky-600 hover:bg-sky-500 text-white font-medium text-xs px-4 py-2 rounded-lg transition flex items-center gap-2 shadow-md"
              >
                <Key className="w-4 h-4" />
                <span>{t.showSolution}</span>
              </button>

              <div className={`solution-box ${isSolutionOpen('sol-ex9') ? 'block' : 'hidden'} mt-3 bg-emerald-950/40 border border-emerald-500/40 p-3 rounded-xl text-xs`}>
                <h4 className="font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  {t.solutionTitle} — {language === 'ca' ? 'ACTIVITAT 9' : 'ACTIVIDAD 9'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-200">
                  <div><strong>a) {language === 'ca' ? 'Mesurar aire: ' : 'Medir aire: '}</strong> Higiene Industrial.</div>
                  <div><strong>b) {language === 'ca' ? 'Eines elèctriques: ' : 'Herramientas eléctricas: '}</strong> {language === 'ca' ? 'Seguretat en el Treball.' : 'Seguridad en el Trabajo.'}</div>
                  <div><strong>c) {language === 'ca' ? 'Pauses fatiga: ' : 'Pausas fatiga: '}</strong> {language === 'ca' ? 'Ergonomia.' : 'Ergonomía.'}</div>
                  <div><strong>d) {language === 'ca' ? 'Reconeixements mèdics: ' : 'Reconocimientos médicos: '}</strong> {language === 'ca' ? 'Medicina del Treball.' : 'Medicina del Trabajo.'}</div>
                  <div><strong>e) {language === 'ca' ? 'Cadires adaptades: ' : 'Sillas adaptadas: '}</strong> {language === 'ca' ? 'Ergonomia.' : 'Ergonomía.'}</div>
                  <div><strong>f) {language === 'ca' ? 'Rotació tasques: ' : 'Rotación tareas: '}</strong> {language === 'ca' ? 'Psicosociologia.' : 'Psicosociología.'}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 text-xs text-slate-500">
            {language === 'ca' ? 'Relació directa entre el factor de risc i l\'especialitat competent.' : 'Relación directa entre el factor de riesgo y la especialidad competente.'}
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* SLIDE 15: ACTIVITAT 10 (ISABEL / SELECCIÓ D'EPIS) */}
      {/* ============================================================== */}
      {currentSlide === 14 && (
        <section className="print-slide bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl flex flex-col justify-between min-h-[560px] animate-fadeIn">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">
                {language === 'ca' ? 'Exercici 10' : 'Ejercicio 10'}
              </span>
              <span className="text-xs bg-slate-800 px-2.5 py-1 rounded-md text-slate-400">
                {language === 'ca' ? 'Selecció d\'EPIs' : 'Selección de EPIs'}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {language === 'ca' ? 'ACTIVITAT 10 — Isabel (Servei de Prevenció)' : 'ACTIVIDAD 10 — Isabel (Servicio de Prevención)'}
            </h2>

            <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700 mb-3 text-xs md:text-sm text-slate-200">
              <p className="mb-2">
                {language === 'ca'
                  ? 'Isabel entrarà a treballar com a tècnica de prevenció en una drassana i li demanen indicar almenys un exemple d\'EPI certificat per protegir:'
                  : 'Isabel entrará a trabajar como técnica de prevención en un astillero y le piden indicar al menos un ejemplo de EPI certificado para proteger:'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div>a) {language === 'ca' ? 'El tronc enfront de radiacions / raigs X.' : 'El tronco frente a radiaciones / rayos X.'}</div>
                <div>b) {language === 'ca' ? 'Les oïdes en un taller de reparació naval amb soroll de radials.' : 'Los oídos en un taller naval con ruido de radiales.'}</div>
                <div>c) {language === 'ca' ? 'Tot el cos per evitar caigudes al pal o bastida en altura.' : 'Todo el cuerpo para evitar caídas en mástil o andamio.'}</div>
                <div>d) {language === 'ca' ? 'Els ulls i la cara per a operaris de soldadura i esmerilat.' : 'Los ojos y la cara para soldadura y esmerilado.'}</div>
                <div>e) {language === 'ca' ? 'Els peus d\'un electricista de manteniment naval.' : 'Los pies de un electricista de mantenimiento naval.'}</div>
                <div>f) {language === 'ca' ? 'Vies respiratòries en aplicar pintura de buc o antifouling.' : 'Vías respiratorias al aplicar pintura de casco o antifouling.'}</div>
              </div>
            </div>

            <div className="solution-container">
              <button 
                onClick={() => toggleSolution('sol-ex10')} 
                className="no-print bg-sky-600 hover:bg-sky-500 text-white font-medium text-xs px-4 py-2 rounded-lg transition flex items-center gap-2 shadow-md"
              >
                <Key className="w-4 h-4" />
                <span>{t.showSolution}</span>
              </button>

              <div className={`solution-box ${isSolutionOpen('sol-ex10') ? 'block' : 'hidden'} mt-3 bg-emerald-950/40 border border-emerald-500/40 p-3 rounded-xl text-xs`}>
                <h4 className="font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  {t.solutionTitle} — {language === 'ca' ? 'ACTIVITAT 10' : 'ACTIVIDAD 10'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-200">
                  <div><strong>a) {language === 'ca' ? 'Tronc Raigs X: ' : 'Tronco Rayos X: '}</strong> {language === 'ca' ? 'Davantal plomat de protecció radiològica.' : 'Mandil plomado de protección radiológica.'}</div>
                  <div><strong>b) {language === 'ca' ? 'Oïdes taller: ' : 'Oídos taller: '}</strong> {language === 'ca' ? 'Taps auditius o orelleres acoblables (UNE-EN 352).' : 'Tapones auditivos u orejeras acoplables (UNE-EN 352).'}</div>
                  <div><strong>c) {language === 'ca' ? 'Caigudes alçada: ' : 'Caídas altura: '}</strong> {language === 'ca' ? 'Arnès anticaigudes integral (UNE-EN 361).' : 'Arnés anticaídas integral (UNE-EN 361).'}</div>
                  <div><strong>d) {language === 'ca' ? 'Ulls/Cara soldador: ' : 'Ojos/Cara soldador: '}</strong> {language === 'ca' ? 'Pantalla facial per a soldadura o ulleres integrals.' : 'Pantalla facial para soldadura o gafas integrales.'}</div>
                  <div><strong>e) {language === 'ca' ? 'Peus electricista: ' : 'Pies electricista: '}</strong> {language === 'ca' ? 'Calçat de seguretat aïllant (dielèctric).' : 'Calzado de seguridad aislante (dieléctrico).'}</div>
                  <div><strong>f) {language === 'ca' ? 'Vies respiratòries: ' : 'Vías respiratorias: '}</strong> {language === 'ca' ? 'Màscara amb filtre mixt (partícules + vapors A2P3).' : 'Máscara con filtro mixto (partículas + vapores A2P3).'}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 text-xs text-slate-500">
            {language === 'ca' ? 'Aplicació pràctica del catàleg oficial d\'equips certificats.' : 'Aplicación práctica del catálogo oficial de equipos certificados.'}
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* SLIDE 16: FONTS I RECURSOS */}
      {/* ============================================================== */}
      {currentSlide === 15 && (
        <section className="print-slide bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl flex flex-col justify-between min-h-[560px] animate-fadeIn">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">
                {language === 'ca' ? 'Resum i Bibliografia' : 'Resumen y Bibliografía'}
              </span>
              <span className="text-xs bg-slate-800 px-2.5 py-1 rounded-md text-slate-400">
                {language === 'ca' ? 'Fonts Oficials' : 'Fuentes Oficiales'}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {language === 'ca' ? 'FONTS I RECURSOS D\'APRENENTATGE' : 'FUENTES Y RECURSOS DE APRENDIZAJE'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
              <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-sky-500/20 text-sky-400 rounded-lg flex items-center justify-center text-xl">
                    🌐
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">ASEPAL</h4>
                    <p className="text-xs text-slate-400">
                      {language === 'ca' 
                        ? 'Associació d\'Empreses d\'Equips de Protecció Individual' 
                        : 'Asociación de Empresas de Equipos de Protección Individual'}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 mb-3">
                  {language === 'ca'
                    ? 'Patronal espanyola que engloba els principals fabricants i distribuïdors d\'EPIs certificats i informació tècnica.'
                    : 'Patronal española que engloba a los principales fabricantes y distribuidores de EPIs certificados e información técnica.'}
                </p>
                <a 
                  href="https://www.asepal.es" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-sky-400 hover:underline inline-flex items-center gap-1 font-mono"
                >
                  www.asepal.es <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-lg flex items-center justify-center text-xl">
                    🏛️
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">INSST</h4>
                    <p className="text-xs text-slate-400">
                      {language === 'ca' 
                        ? 'Institut Nacional de Seguretat i Salut en el Treball' 
                        : 'Instituto Nacional de Seguridad y Salud en el Trabajo'}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 mb-3">
                  {language === 'ca'
                    ? 'Òrgan científic tècnic estatal de referència en matèria de prevenció de riscos laborals i guies tècniques d\'EPIs.'
                    : 'Órgano científico técnico estatal de referencia en materia de prevención de riesgos laborales y guías técnicas de EPIs.'}
                </p>
                <a 
                  href="https://www.insst.es" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-emerald-400 hover:underline inline-flex items-center gap-1 font-mono"
                >
                  www.insst.es <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/60 text-xs text-slate-400">
              <strong className="text-slate-200">{language === 'ca' ? 'Marc Normatiu Clau: ' : 'Marco Normativo Clave: '}</strong>
              {language === 'ca'
                ? 'Llei 31/1995 de Prevenció de Riscos Laborals (LPRL) i Reial Decret 773/1997 sobre la utilització pels treballadors d\'equips de protecció individual.'
                : 'Ley 31/1995 de Prevención de Riesgos Laborales (LPRL) y Real Decreto 773/1997 sobre la utilización por los trabajadores de equipos de protección individual.'}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500">
            <span>{language === 'ca' ? 'A continuació: Estació Pràctica interactiva' : 'A continuación: Estación Práctica interactiva'}</span>
            <span className="text-sky-400 font-semibold">{language === 'ca' ? 'Diapositiva 17 ➔ Joc dels 7 Errors' : 'Diapositiva 17 ➔ Juego de los 7 Errores'}</span>
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* SLIDE 17: JOC DELS 7 ERRORS AL VARADOR NAVAL */}
      {/* ============================================================== */}
      {currentSlide === 16 && (
        <section className="print-slide bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col justify-between min-h-[580px] animate-fadeIn">
          <ShipyardHazardGame language={language} />
        </section>
      )}

    </div>
  );
};
