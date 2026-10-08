# Plataforma Didàctica Interactiva PRL & Joc dels 7 Errors en Manteniment Naval (Bilingüe Català - Castellà)

Presentació interactiva de la Unitat Didàctica 1 (FOL - Prevenció de Riscos Laborals i EPIs) amb infografies vectorials corporals, suport bilingüe complet (Català i Castellà) i un simulador interactiu de detecció dels 7 errors i riscos en manteniment d'embarcacions amb operari virtual guia.

### User Review & Critical Decisions

> [!IMPORTANT]
> **Decisions clau confirmades per a la implementació:**
> 1. **Doble Idioma Complet (Català ⇄ Castellà)**: Selector global a la barra superior que canvia a l'instant tots els textos:
>    - Les 16 diapositives de teoria i normatives (fatiga, insatisfacció, envelliment prematur, prevenció vs protecció, catàleg d'EPIs).
>    - Els 5 casos pràctics interactius (Luis, Belén, classificació, etc.) amb les seves solucions.
>    - L'operari virtual guia (diàlegs, pistes i explicacions tècniques).
>    - El joc dels 7 errors al varador naval (nom dels riscos, explicació de l'EPI o protecció col·lectiva que falta i solucions).
> 2. **Joc dels 7 Errors al Varador Naval de Manteniment d'Embarcacions**:
>    - Escenari complet d'astiller/varador amb una embarcació en dic sec, grua de càrrega, bastides, plataformes elevadores i zones de treball.
>    - **3 EPIs individuals que falten**:
>      1. Operari decapat/polit sense màscara respiratòria per a pols i vapors.
>      2. Operari en plataforma elevadora o treball en alçada sense arnès anticaigudes connectat.
>      3. Operari esmerilant / soldant sense pantalla facial / ulleres protectores.
>    - **4 Proteccions Col·lectives i Preventives que falten**:
>      4. Bastida de pintura sense baranes de protecció perimetral ni rodapés.
>      5. Grua hissant càrrega pesada sobre zona de trànsit sense abalisament ni delimitació perimetral.
>      6. Zona de bidons de dissolvents i pintures nàutiques sense cubeta / safata de retenció ambiental.
>      7. Treballs de soldadura i pintura en bodega/interior sense sistema d'extracció i ventilació forçada focalitzada.
>    - **Interacció interactiva amb aparició visual**: En fer clic sobre la zona del risc o sobre la targeta de pista, l'element protector corresponent **apareix visualment a l'escena** (s'instal·la la barana, es col·loca la màscara, es desplega la cubeta, etc.).
>    - **Botó de solució d'un sol clic ("Revelar i Equipar Totes les Mesures")**: Fa aparèixer tots els elements de protecció alhora a l'escena amb explicació didàctica dels motius tècnics.
> 3. **Operari Virtual Guia ("Toni / Manel - Tècnic de Prevenció")**:
>    - Avatar interactiu amb uniforme i casc que presenta l'activitat, acompanya amb bafarades de diàleg, ofereix pistes pedagògiques sobre la jerarquia preventiva (Prevenció -> Col·lectiva -> Individual) i felicita en completar la seguretat del vaixell.

---

### 1. Overview & Core Concept

- **Què fa l'aplicació**: Proporciona un recurs educatiu interactiu i complet per a Formació i Orientació Laboral (FOL / IPE) adaptat a Cicles Formatius de Manteniment d'Embarcacions, Mecànica i Indústria.
- **Components Principals**:
  1. **Presentació de Diapositives (16 diapositives)**: Cobertura exhaustiva del temari de PRL (danys a la salut, fatiga física/mental, insatisfacció laboral, envelliment prematur, prevenció vs protecció, jerarquia de mesures, disciplines preventives, catàleg d'EPIs per regions corporals i activitats pràctiques).
  2. **Infografia Interactiva d'EPIs (Estil Il·lustració 1)**: Operari amb selectors interactius connectats per línies radials a les 8 zones corporals (cap, oïda, ulls/cara, vies respiratòries, mans, cames/peus, tronc, cos sencer).
  3. **Estació Didàctica Final: Simulador & Joc dels 7 Errors (Estil Astiller Il·lustració 2)**: Escenari naval complet amb navegació interactiva, detecció de riscos i operari virtual.
- **Mode d'Impressió / PDF**: Generació neta del document complet amb solucions per a estudi o lliurament a classe.

---

### 2. User Experience & Visual Design

#### A. Navegació i Controls
- **Barra Superior**:
  - Títol de la unitat didàctica.
  - **Selector d'Idioma (Català / Español)** amb canvi instantani sense recàrrega.
  - Selector desplegable de diapositiva (1 a 17).
  - Botó d'apertura/tancament de solucions.
  - Botó d'impressió / Descarregar PDF.
  - Mode pantalla completa.
  - Barra de progrés dinàmica.
- **Barra Inferior**: Botons d'anterior/següent, comptador de diapositiva i drecera per teclat (`←` / `→`).

#### B. Disseny Visual
- **Tema**: Fosc modern professional de presentació tècnica (`#0f172a`, `#1e293b`) amb targetes de contrast alt i tipografia clara (`Plus Jakarta Sans`).
- **Gràfics Interactius**:
  - Il·lustració de l'operari amb connectors radials d'EPIs dissenyada amb SVG vectorial precís.
  - Il·lustració del varador d'embarcacions amb vaixell en manteniment, grua, bastides i operaris, amb capes dinàmiques que mostren els elements de seguretat en ser descoberts.

---

### 3. Key Product Decisions & Trade-Offs

- **Bilingüisme integrat en un sol fitxer de dades (i18n lleuger)**:
  - *Decisió*: Emmagatzemar els textos de cada diapositiva i del joc en un diccionari estructurat `ca` i `es`.
  - *Per què*: Assegura canvi d'idioma en temps real sense duplicar components ni codi, mantenint la concordança exacta amb el temari oficial.
- **Gràfics Vectorials SVG Nadius en React**:
  - *Decisió*: Implementar el vaixell, l'operari guia i els elements de protecció directament en components SVG reactius.
  - *Per què*: Permet que cada element de protecció (barana, arnès, màscara, safata de retenció, abalisament) tingui una transició d'aparició fluida en clicar o en prémer el botó de solució, sense dependre de servidors d'imatges ni risc de fallades de càrrega.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────┐
│                      App (Root)                        │
│  - Current Slide State (0..16)                         │
│  - Language State ('ca' | 'es')                        │
│  - Print & Fullscreen Handlers                         │
└───────────────────────────┬────────────────────────────┘
                            │
       ┌────────────────────┴────────────────────┐
       ▼                                         ▼
┌─────────────────────────────┐   ┌─────────────────────────────┐
│   Slides 1..16 (Theory)     │   │   Slide 17: Shipyard Game   │
│  - Danys, Fatiga, Insatisf. │   │  - Virtual Operator Guide   │
│  - Prevenció vs Protecció   │   │  - Interactive SVG Shipyard │
│  - Body PPE Interactive Map │   │  - 7 Missing Safety Items   │
│  - Cases 4, 7, 8, 9, 10     │   │  - "Equipar Tot / Revelar"  │
│  - Revealable Solutions     │   │  - Score & Completion State │
└─────────────────────────────┘   └─────────────────────────────┘
```
