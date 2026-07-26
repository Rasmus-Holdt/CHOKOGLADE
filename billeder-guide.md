# ChokoGlade — sådan er siden skruet sammen

Fire filer og en billedmappe. Det hele skal ligge sammen.

| Fil | Hvad |
|---|---|
| `index.html` | Forsiden |
| `menukort.html` | Menukortet |
| `style.css` | Alt design **og** hvilke billeder der bruges |
| `sprog.js` | **Alle tekster**, på dansk, engelsk og tysk |
| `logo.svg` | Mærket i topbaren |
| `favicon.svg` | Samme mærke, til browserfanen |
| `billeder/` | De elleve billeder |

Tommelfingerregel: skal du rette en **tekst**, gør du det i `sprog.js`. Skal du skifte et **billede** eller rette **designet**, gør du det i `style.css`. HTML-filerne rører du kun, hvis du skal skrive priser ind eller tilføje en ret.

Retter du en tekst i `sprog.js`, så husk alle tre sprog. Ellers står den gamle tekst tilbage på de to andre.

Begge sider deler topbar, farver, skrifter og bundfelt gennem `style.css`. Retter du designet ét sted, slår det igennem begge steder. **Undtagelsen er topbarens HTML** — den står skrevet i begge filer, så tilføjer du et menupunkt, skal det ind begge steder.

---

# Skærmstørrelser

Brudpunkterne står nederst i `style.css`. De er sat efter målte bredder, ikke efter runde tal.

| Bredde | Hvad sker der |
|---|---|
| under 430 px | Mindre mærke, mindre luft, knapper i fuld bredde |
| under 560 px | Adresse og åbningstider får hele bredden, etiketten står ovenover |
| **under 700 px** | **Kun telefon** — se nedenfor |
| under 1000 px | Navigationen ligger på sin egen række under navnet |
| fra 700 px | Menu i to spalter, galleri og billedstribe i tre |
| fra 900 px | Anmeldelserne i tre spalter |
| fra 980 px | "Besøg os" og historien i to spalter, menu i tre |

## Tre ting der kun gælder telefon

Blokken `@media (max-width:700px)` nederst i `style.css`. På iPad og computer er alt uændret.

1. **Sprogvælgeren står ved siden af navnet.** Uden de tre linjer placerer grid'et den selv, og så havner den på en tredje række helt under navigationen.
2. **Knappen "Se hele menukortet" mellem overskriften og billederne er skjult.** Der er stadig to andre veje til menukortet: øverst i introen og i topbaren.
3. **Facadebilledet nederst under "Besøg os" er skjult.** Facaden er allerede vist i toppen af siden.

Punkt 2 og 3 er skjult med CSS, ikke slettet. De står stadig i `index.html` og vises på større skærme.

**Hvorfor 1000 px og ikke 800.** Topbaren i én række kræver 825 px, fordi navn, fire menupunkter og sprogvælgeren skal stå ved siden af hinanden — målt på tysk, som er det bredeste sprog. Alle iPads i portræt er mellem 744 og 1024 px, så de får den stablede udgave. Sætter du grænsen lavere, brækker topbaren på iPad.

**Hvorfor "Besøg os" først deler sig ved 980 px.** Højre spalte bliver ellers så smal at `Montag – Donnerstag  11:00 – 17:30` ikke kan stå på én linje. Det ramte iPad 10.9" og Pro 11" i portræt.

**Hvorfor etiketspalten er 132 px og ikke 118.** Tysk `Öffnungszeiten` er bredere end 118 px.

Ændrer du et menupunkt til noget længere, så tjek at de fire punkter stadig kan være på én række ved 1000 px. Ellers skal grænsen op.

---

# Mærket

Cirklen er ikke et opfundet logo — det er deres eget runde skilt fra døren, renset op: "Eleonora & Giacomo" i bue foroven, navnet i midten, "Café · Cioccolateria" forneden, og de to iturevne italienske flag ved 3 og 9.

Den findes **tre steder med præcis samme tegning**:

| Hvor | Fil |
|---|---|
| Stort i heroen | SVG-kode inde i `index.html` |
| Småt i topbaren, begge sider | `logo.svg` |
| Browserfanen | `favicon.svg`, med mørk skive bagved så den ses på lyse faner |

**Retter du i den ene, skal de to andre rettes med.** Det er bevidst tre kopier og ikke én fil: cirklen i heroen arver farven fra CSS, mens de to andre hentes som billeder og selv skal have farven skrevet ind.

Cremefarven er `#F5EFE6`, samme som `--cream` i `style.css`. Ændrer du den, skal `logo.svg` og `favicon.svg` rettes i hånden.

## Tre ting der kan gå galt

**Buerne skal løbe fra venstre mod højre.** Vender du bundbuen om, står `CAFÉ · CIOCCOLATERIA` på hovedet. Sådan virker SVG.

**Teksterne har låst bredde** med `textLength`. Det er derfor mærket ser ens ud uanset hvilken serif browseren finder. Skriver du en længere tekst ind, skal tallet med, ellers bliver bogstaverne mast sammen.

**Ingen dobbelt bindestreg i kommentarerne i `logo.svg` og `favicon.svg`.** De to filer hentes som billeder og parses derfor som XML, og XML forbyder `--` inde i en kommentar. Skriver du en skillelinje af bindestreger derinde, holder hele filen op med at blive tegnet — mærket forsvinder uden fejlmeddelelse. Det er præcis den fejl der gjorde at cirklen forsvandt første gang.

`<meta name="theme-color">` farver browserbjælken på Android i samme mørke kakaobrun som topbaren.

---

# Billederne

Alle billeder er konverteret til JPEG, komprimeret og ligger i `billeder/`. Samlet **1,9 MB** — det loader fint på mobildata.

| Fil | Bruges til |
|---|---|
| `hero-emblem.jpg` | Forsidens hero — caféen indefra, mørklagt bag emblemet |
| `antipasti.jpg` | Galleri — den fyldte tallerken. Sidens bedste madbillede |
| `vafler.jpg` | Galleri — tre vafler med gelato |
| `interioer.jpg` | Galleri — caféen indenfor med illy-skiltet i vinduet |
| `giacomo-eleonora.jpg` | Historien — dem selv under skiltet |
| `facade-sommer.jpg` | "Besøg os" — facaden, 1:1, sommergraderet |
| `vaffel.jpg` | Menukortet, billedstribe |
| `kaffe.jpg` | Menukortet, billedstribe |
| `chokoladehylder.jpg` | Menukortet, billedstribe |
| `facade-hero.jpg` | Bruges ikke — originalen som de to facadebilleder er lavet ud fra |
| `facade-skilt.jpg` | Bruges ikke — facaden med hele ChokoGladE-skiltet |

## Skal du skifte et billede

Læg det nye i `billeder/` og ret filnavnet øverst i `style.css`:

```css
--img-hero: url("billeder/dit-nye-navn.jpg");
```

Galleriet og billedstriben er kvadratiske, fordi billederne er en blanding af stående og liggende — kvadratet beskærer mindst af begge dele. Beskæringen kan finjusteres med `background-position` samme sted i `style.css`.

Hero-billedet er mørklagt og kakao-tonet med en vignette, så det lyse emblem kan læses henover. Skifter du det ud med et almindeligt lyst billede, forsvinder emblemet. Sløret over billedet sidder i `style.css` som `.hero::after` og kan gøres kraftigere.

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
