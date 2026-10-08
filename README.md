# UT1: La Prevenció de Riscos Laborals i EPIs | Manteniment d'Embarcacions ⚓

Aplicació didàctica interactiva i bilingüe (Català / Castellà) per a Formació i Orientació Laboral (FOL / IPE) i Cicles Formatius de Manteniment d'Embarcacions, Mecànica i Indústria. Inclou una presentació completa de 16 diapositives amb solucions desplegables, un catàleg anatòmic interactiu d'EPIs i un **simulador interactiu dels 7 errors al varador naval** guiat per un operari virtual.

---

## 🚀 Característiques Principals

1. **Joc Interactiu dels 7 Errors en Manteniment d'Embarcacions (Diapositiva 17)**:
   - Escenari vectorial interactiu d'un vaixell en dic sec, grua de càrrega, bastides, cistella elevadora i banc de treball.
   - **Operari Virtual Guia ("Toni l'Oficial de Seguretat Naval")** amb diàlegs i pistes pedagògiques.
   - **Aparició visual dels elements amb un clic**: en seleccionar un risc, s'equipa automàticament la mesura reglamentària (baranes a la bastida, màscara FFP3, arnès anticaigudes, pantalla facial, cons d'exclusió de grua, cubeta de retenció i ventilació forçada).
   - Botó d'un sol clic *"Equipar i Revelar Totes les Mesures"* per a correcció a l'aula.

2. **Doble Idioma Complet (Català ⇄ Español)**:
   - Selector a la barra superior que commuta a l'instant tots els textos, exercicis, solucions i explicacions tècniques.

3. **Catàleg Anatòmic d'EPIs (Diapositiva 10)**:
   - Esquema interactiu de l'operari amb connectors radials per a les 8 zones del cos (cap, oïda, ulls/cara, vies respiratòries, mans, peus, tronc i cos sencer) amb normatives UNE-EN, marcatge CE i aplicació a drassanes.

4. **16 Diapositives Teòriques i Casos Pràctics (4, 7, 8, 9 i 10)**:
   - Desplegable de solucions, navegació amb teclat (`←` i `→`), mode pantalla completa i exportació a PDF per a impressió.

---

## 🛠️ Requisits previs

- [Node.js](https://nodejs.org/) (versió 18 o superior)
- `npm`, `pnpm` o `bun`

---

## 💻 Instal·lació i Execució Local

```bash
# 1. Clonar el repositori
git clone https://github.com/EL_TEU_USUARI/prl-manteniment-naval-fol.git

# 2. Entrar a la carpeta del projecte
cd prl-manteniment-naval-fol

# 3. Instal·lar dependències
npm install

# 4. Iniciar el servidor de desenvolupament
npm run dev
```

L'aplicació s'obrirà a [http://localhost:3000](http://localhost:3000) o [http://localhost:5173](http://localhost:5173).

---

## 📦 Compilació per a Producció

Per generar els arxius estàtics llestos per allotjar en qualsevol servidor web:

```bash
npm run build
```

Els fitxers compilats es generaran a la carpeta `dist/`.

---

## 🌐 Publicació a GitHub Pages

El projecte ja compta amb `base: './'` configurat a `vite.config.ts`, de manera que pots publicar-lo a GitHub Pages molt fàcilment:

1. A GitHub, vés a **Settings > Pages**.
2. A **Build and deployment > Source**, selecciona **GitHub Actions**.
3. Pots utilitzar el workflow estàndard de Vite / Static HTML o desplegar la carpeta `dist` mitjançant la branca `gh-pages`:
   ```bash
   npx gh-pages -d dist
   ```

---

## 📁 Estructura del Projecte

```
├── index.html                   # Pàgina d'entrada HTML
├── package.json                 # Dependències i scripts
├── vite.config.ts               # Configuració de Vite (amb base relativa)
├── tsconfig.json                # Configuració de TypeScript
├── src/
│   ├── App.tsx                  # Controlador principal i gestor de diapositives
│   ├── main.tsx                 # Punt d'entrada de React
│   ├── index.css                # Estils globals, animacions i regles d'impressió PDF
│   ├── types/
│   │   └── prl.ts               # Tipus TypeScript (Idiomes, Riscos, EPIs)
│   ├── data/
│   │   └── translations.ts      # Textos bilingües, teoria i dades dels 7 errors
│   └── components/
│       ├── Header.tsx           # Capçalera amb selector d'idioma, solucions i PDF
│       ├── Footer.tsx           # Peu de pàgina amb controls de navegació
│       ├── SlideContent.tsx     # Diapositives 1 a 16 amb casos pràctics
│       ├── InteractiveWorkerPPE.tsx # Catàleg anatòmic interactiu d'EPIs
│       └── ShipyardHazardGame.tsx   # Joc interactiu dels 7 errors al varador
```

---

## 📄 Llicència

Projecte educatiu de codi lliure sota llicència Apache 2.0.
