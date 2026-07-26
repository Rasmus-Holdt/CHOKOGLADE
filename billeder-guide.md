# ChokoGlade — sådan er siden skruet sammen

Fire filer og en billedmappe. Det hele skal ligge sammen.

| Fil | Hvad |
|---|---|
| `index.html` | Forsiden |
| `menukort.html` | Menukortet |
| `style.css` | Alt design **og** hvilke billeder der bruges |
| `sprog.js` | **Alle tekster**, på dansk, engelsk og tysk |
| `billeder/` | De ni billeder |

Tommelfingerregel: skal du rette en **tekst**, gør du det i `sprog.js`. Skal du skifte et **billede** eller rette **designet**, gør du det i `style.css`. HTML-filerne rører du kun, hvis du skal skrive priser ind eller tilføje en ret.

Retter du en tekst i `sprog.js`, så husk alle tre sprog. Ellers står den gamle tekst tilbage på de to andre.

---

# Billederne

Alle ni billeder er skiftet ind og virker. De er konverteret til JPEG, komprimeret og ligger i `billeder/`. Samlet vægt: **1,6 MB** for hele sitet — det loader fint på mobildata.

| Fil | Bruges til |
|---|---|
| `facade-hero.jpg` | Hero på forsiden — åben dør, illy-skilt, varmt lys indenfor |
| `facade-skilt.jpg` | Kvadratet i "Besøg os" — hele ChokoGladE-skiltet og bænken |
| `antipasti.jpg` | Galleri — den fyldte tallerken. Sidens bedste madbillede |
| `vafler.jpg` | Galleri — tre vafler med gelato |
| `interioer.jpg` | Galleri — caféen indenfor med illy-skiltet i vinduet |
| `giacomo-eleonora.jpg` | Historien — dem selv under skiltet |
| `vaffel.jpg` | Menukortet, billedstribe |
| `kaffe.jpg` | Menukortet, billedstribe |
| `chokoladehylder.jpg` | Menukortet, billedstribe |

## Skal du skifte et billede

Læg det nye i `billeder/` og ret filnavnet øverst i `style.css`:

```css
--img-facade: url("billeder/dit-nye-navn.jpg");
```

Galleriet og billedstriben er kvadratiske, fordi billederne er en blanding af stående og liggende — kvadratet beskærer mindst af begge dele. Beskæringen kan finjusteres med `background-position` samme sted i `style.css`.

---

# Hvad billederne afslørede

Briefet sagde chokoladebutik med håndlavet chokolade. Det holder ikke.

Deres eget skilt over døren siger **"Eleonora & Giacomo — Café · Cioccolateria"**. Café står først. Google har dem registreret som **kaffebar**. Billederne viser antipasti, panini, vafler med gelato, vin og cappuccino — og chokoladen er hyldevarer fra **Domori** og **Venchi**, ikke noget de laver selv.

Vaflerne optræder på tre af ni billeder og stod ikke nævnt nogen steder. De er reelt husets signaturret.

Siden er bygget efter det: café først, chokoladen som den historie forretningen startede med.

---

# Data hentet fra Google Business

Hentet 26. juli 2026.

**Åbningstider** — de gamle tal fra 2024 var forkerte. De rigtige:

| | |
|---|---|
| Mandag–torsdag | 11.00 – 17.30 |
| Fredag | 12.00 – 19.30 |
| Lørdag | 11.00 – 18.30 |
| Søndag | 11.00 – 17.00 |

Åbent alle syv dage. Fredag åbner de senere og lukker sent — det ligner en bevidst aperitivo-aften. Dagens tid fremhæves automatisk på siden.

**Bedømmelse:** 4,7 stjerner af 53 anmeldelser. Tre anmeldelser er vist på forsiden, to fra Google og en fra Facebook.

Anmeldelserne står **på dansk i alle tre sprogversioner**. Det er med vilje: det er rigtige gæsters ord, og oversætter vi dem, lægger vi ord i munden på folk. På engelsk og tysk står der en linje der forklarer det. Vil du hellere have dem oversat, ligger de i `sprog.js` under `rev.1`, `rev.2` og `rev.3`.

**Og det vigtigste:** Google-profilen har feltet "Tilføj website" stående tomt. De har ingen hjemmeside registreret nogen steder.

---

# Det der stadig mangler

## 1. Priserne

Alle prisfelter på menukortet er tomme. De er markeret med `data-check="priser"`.

Siden er bygget så et tomt prisfelt skjuler både prisen og prikkerne — den ser altså ikke i stykker ud imens. Men det er ikke et rigtigt menukort før tallene er der.

**Der findes en genvej.** På `billeder/facade-hero.jpg` hænger der et lysegrønt menuskilt i vinduet med overskriften "ChokoGladE Cafeteria" og hele prislisten under. Jeg forsøgte at læse det, men opløsningen er for lav. Ét skarpt foto af det skilt, så kan hele kortet fyldes ud på en halv time.

Google angiver prisniveauet til 100–200 kr. pr. person, rapporteret af 22 personer.

## 2. To tomme kategorier

**Antipasti** og **panini** står med kategorien og beskrivelsen, men uden enkeltretter — vi ved ikke hvilke varianter og størrelser de laver. De viser "Spørg i butikken efter dagens udvalg og priser" indtil videre. Det er sandt, men tyndt.

## 3. To ting der ikke er bekræftet

**Aperol Spritz** — `data-check="aperol"` i `menukort.html`. Stammer fra et opslag på deres Facebook, ikke fra et billede af en drink de selv har lavet. Slet linjen hvis den ikke holder.

**Wolt** — `data-check="wolt"` i `index.html`. De har en Wolt-side, men det er ikke bekræftet at den er aktiv. Fjern badgen hvis ikke.

## 4. E-mail

Den private gmail er ude af siden. Telefonen er eneste kontakt nu, hvilket er bedre end at trykke `4fooldogs@gmail.com` på en firmaside.

Men der er ingen måde at skrive til dem på. Det peger på næste del: et domæne og en rigtig mailadresse. Får de `chokoglade.dk`, følger `info@chokoglade.dk` med, og så kan mailen komme tilbage på siden.

---

# Salgsargumenterne, i rækkefølge

1. **4,7 stjerner af 53 anmeldelser — og ingen hjemmeside.** De har allerede gjort det svære. De mangler bare et sted at sende folk hen.
2. **Turistby uden tysk og engelsk.** Siden har begge dele klar.
3. **Åbningstiderne findes kun på Google.** Ikke på Facebook, ikke i deres Om-sektion. En turist der googler dem kan ikke se om der er åbent — medmindre de rammer Google-kortet præcist.
4. **Deres eget materiale er hængt bagud.** Facebook-beskrivelsen taler stadig kun om chokolade, halvandet år efter de blev en café med køkken, servering og sæsonpersonale.
