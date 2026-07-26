/* ============================================================
   CHOKOGLADE — sprog.js
   ALLE tekster på hele hjemmesiden står i denne fil.

   Vil du rette en tekst, så ret den HER — ikke inde i
   HTML-filerne. Husk at rette den i alle tre sprog, ellers
   står den gamle tekst tilbage på de andre sprog.

   Nøgler der starter med:
     hero / menu / story / rev / visit ..... forsiden
     mk .................................... menukortet
     nav / cta ............................. begge sider

   ANMELDELSERNE står på dansk i alle tre sprogversioner.
   Det er med vilje: det er rigtige citater fra rigtige
   gæster, og oversætter vi dem, lægger vi ord i munden på
   folk. Teksten rev.orig forklarer det for udenlandske
   besøgende.
   ============================================================ */

const T = {

/* ============================ DANSK ============================ */
da: {
  "nav.menu": "Menukort",
  "nav.home": "Forsiden",

  "cta.call": "Ring 91 81 18 59",
  "cta.route": "Find vej",
  "cta.callShort": "Ring",
  "cta.routeShort": "Find vej",
  "cta.seeMenu": "Se hele menukortet",

  /* ---- Forside: hero ---- */
  "hero.kicker": "Café · Cioccolateria · Nederdammen 32, Ribe",
  "hero.title": "Et stykke Italien<br>midt i <em>Ribe</em>",
  "hero.lede": "Antipasti og panini, vafler med gelato, italiensk vin og illy-kaffe. Drevet af Eleonora og Giacomo, der solgte huset i Milano og flyttede hertil.",

  /* ---- Forside: uddrag af menuen ---- */
  "menu.title": "Det serverer vi",
  "menu.lede": "Italiensk mad og drikke, lavet af italienere. Vi har åbent alle ugens dage.",
  "menu.1.h": "Antipasti og panini",
  "menu.1.p": "Italiensk pålæg, oste, oliven, artiskokker og soltørrede tomater på tallerken. Eller en varm panini, ristet på stedet.",
  "menu.2.h": "Vafler med gelato",
  "menu.2.p": "Varm vaffel med italiensk is, karamel eller chokolade, friske bær og kakao. Vores mest bestilte.",
  "menu.3.h": "Chokolade fra Italien",
  "menu.3.p": "Domori og Venchi. Gianduiotti, cremini, tartufi og 100% criollo. Det var her butikken startede.",

  /* ---- Forside: historien ---- */
  "story.kicker": "Bag disken",
  "story.title": "Fra Milano til Ribe",
  "story.p1": "Eleonora Dovera og Giacomo Montemagno boede i Milano med AC Milans stadion i nabolaget. Hun var regnskabschef, han var læge. De havde besøgt Ribe som turister, faldt for byen og vikingehistorien — og besluttede sig.",
  "story.p2": "De solgte huset, sagde jobbene op og åbnede på Nederdammen den 23. april 2024. I dag bor de i Øster Vedsted, og det er dem selv, du møder bag disken.",
  "story.quote": "Gågaden er hyggelig, ikke tomme butikker som i gågaden i Esbjerg.",

  /* ---- Forside: anmeldelser ---- */
  "rev.title": "Hvad gæsterne siger",
  "rev.count": "53 anmeldelser på Google",
  "rev.link": "Læs dem alle",
  "rev.orig": "",
  "rev.1": "Den bedste espresso jeg har fået længe. … Super lækkert udvalg af vine man ikke lige finder i supermarkedet. Meget engagerede og venlige ejere.",
  "rev.1n": "Bo Mussmann",
  "rev.1w": "Google",
  "rev.2": "Fantastisk charmerende sted, ægte italiensk stemning, hvor de søde værter Giacomo og Eleonora kredser om gæsterne.",
  "rev.2n": "Ditte Fribert",
  "rev.2w": "Google",
  "rev.3": "Vi fik en fantastisk dejlig tapas med friske og gode råvarer.",
  "rev.3n": "Kirsten Jensen",
  "rev.3w": "Facebook",

  /* ---- Forside: besøg os ---- */
  "visit.title": "Besøg os",
  "visit.lede": "Vi ligger midt på gågaden i Ribe, to minutters gang fra Domkirken. Åbent alle ugens dage.",
  "visit.addr": "Adresse",
  "visit.phone": "Telefon",
  "visit.hours": "Åbningstider",
  "visit.monthu": "Mandag – torsdag",
  "visit.fri": "Fredag",
  "visit.sat": "Lørdag",
  "visit.sun": "Søndag",
  "visit.giftcard": "Vi modtager Ribe Gavekort",

  /* ---- Menukort ---- */
  "mk.title": "Menukort",
  "mk.lede": "Udvalget skifter med årstiden og med hvad der er godt den dag. Spørg os endelig — vi fortæller gerne om det hele.",
  "mk.ask": "Spørg i butikken efter dagens udvalg og priser.",

  "mk.anti.h": "Antipasti",
  "mk.anti.p": "Prosciutto, mozzarella, oliven, artiskokker, soltørrede tomater, pesto og grillede grøntsager, anrettet på tallerken med brød til. Til at dele mellem to eller spise alene med et glas vin.",

  "mk.panini.h": "Panini",
  "mk.panini.p": "Varme, ristede sandwiches med italiensk pålæg og ost. Laves når du bestiller.",

  "mk.vaffel.h": "Vafler og gelato",
  "mk.vaffel.p": "Varm vaffel med en kugle italiensk is, karamel- eller chokoladesauce, friske hindbær og blåbær, og kakao over. Isen kan også fås for sig.",

  "mk.kaffe.h": "Kaffe",
  "mk.kaffe.p": "Vi brygger på illy. Drik den stående ved disken som i Italien, eller sæt dig ned ved vinduet.",
  "mk.kaffe.1": "Espresso",
  "mk.kaffe.2": "Cappuccino",

  "mk.vin.h": "Vin og aperitivo",
  "mk.vin.p": "Italienske vine, som regel nogle du ikke finder i supermarkedet. Spørg efter en anbefaling — det er halvdelen af fornøjelsen.",
  "mk.vin.1": "Italiensk vin",
  "mk.vin.1p": "Rød og hvid, glas eller flaske.",
  "mk.vin.2": "Peroni",
  "mk.vin.3": "Aperol Spritz",

  "mk.choko.h": "Chokolade",
  "mk.choko.p": "Domori og Venchi fra Italien. Det var her butikken startede, og hylderne fylder stadig en hel væg. Vi pakker gerne ind som gave.",
  "mk.choko.1": "Tartufi Domori",
  "mk.choko.1p": "Trøfler rullet i kakao. Den vi oftest bliver spurgt om.",
  "mk.choko.2": "Gianduiotti",
  "mk.choko.2p": "Den klassiske piemontesiske nougat af hasselnød og chokolade.",
  "mk.choko.3": "Cremini",
  "mk.choko.3p": "Lagdelt gianduia — blødere og sødere.",
  "mk.choko.4": "Fondente 70–100%",
  "mk.choko.4p": "Mørk chokolade hele vejen op til ren criollo-kakao uden sukker.",

  "mk.take.h": "Til at tage med",
  "mk.take.p": "Det meste kan pakkes til afhentning. Ring i forvejen på 91 81 18 59, så står det klar når du kommer.",

  "mk.foot": "Har du en allergi eller spiser du ikke alt? Sig til, så finder vi ud af det."
},

/* =========================== ENGLISH =========================== */
en: {
  "nav.menu": "Menu",
  "nav.home": "Home",

  "cta.call": "Call +45 91 81 18 59",
  "cta.route": "Get directions",
  "cta.callShort": "Call",
  "cta.routeShort": "Directions",
  "cta.seeMenu": "See the full menu",

  "hero.kicker": "Café · Cioccolateria · Nederdammen 32, Ribe",
  "hero.title": "A piece of Italy<br>in the heart of <em>Ribe</em>",
  "hero.lede": "Antipasti and panini, waffles with gelato, Italian wine and illy coffee. Run by Eleonora and Giacomo, who sold their house in Milan and moved here.",

  "menu.title": "What we serve",
  "menu.lede": "Italian food and drink, made by Italians. Open every day of the week.",
  "menu.1.h": "Antipasti and panini",
  "menu.1.p": "Italian cured meats, cheeses, olives, artichokes and sun-dried tomatoes on a plate. Or a hot panini, pressed to order.",
  "menu.2.h": "Waffles with gelato",
  "menu.2.p": "A warm waffle with Italian ice cream, caramel or chocolate, fresh berries and cocoa. Our most ordered plate.",
  "menu.3.h": "Chocolate from Italy",
  "menu.3.p": "Domori and Venchi. Gianduiotti, cremini, tartufi and 100% criollo. This is where the shop began.",

  "story.kicker": "Behind the counter",
  "story.title": "From Milan to Ribe",
  "story.p1": "Eleonora Dovera and Giacomo Montemagno lived in Milan, with the AC Milan stadium in the neighbourhood. She was head of accounting, he was a doctor. They had visited Ribe as tourists, fell for the town and its Viking history — and made up their minds.",
  "story.p2": "They sold the house, resigned from their jobs, and opened on Nederdammen on 23 April 2024. Today they live in Øster Vedsted, and they are the ones you meet behind the counter.",
  "story.quote": "Gågaden er hyggelig, ikke tomme butikker som i gågaden i Esbjerg.",

  "rev.title": "What our guests say",
  "rev.count": "53 reviews on Google",
  "rev.link": "Read them all",
  "rev.orig": "Shown in Danish, as our guests wrote them.",
  "rev.1": "Den bedste espresso jeg har fået længe. … Super lækkert udvalg af vine man ikke lige finder i supermarkedet. Meget engagerede og venlige ejere.",
  "rev.1n": "Bo Mussmann",
  "rev.1w": "Google",
  "rev.2": "Fantastisk charmerende sted, ægte italiensk stemning, hvor de søde værter Giacomo og Eleonora kredser om gæsterne.",
  "rev.2n": "Ditte Fribert",
  "rev.2w": "Google",
  "rev.3": "Vi fik en fantastisk dejlig tapas med friske og gode råvarer.",
  "rev.3n": "Kirsten Jensen",
  "rev.3w": "Facebook",

  "visit.title": "Visit us",
  "visit.lede": "We are on the pedestrian street in Ribe, a two-minute walk from the Cathedral. Open every day.",
  "visit.addr": "Address",
  "visit.phone": "Phone",
  "visit.hours": "Opening hours",
  "visit.monthu": "Monday – Thursday",
  "visit.fri": "Friday",
  "visit.sat": "Saturday",
  "visit.sun": "Sunday",
  "visit.giftcard": "Ribe Gift Card accepted",

  "mk.title": "Menu",
  "mk.lede": "What we have changes with the season and with what is good that day. Do ask — we are happy to talk you through it.",
  "mk.ask": "Ask in the shop for today's selection and prices.",

  "mk.anti.h": "Antipasti",
  "mk.anti.p": "Prosciutto, mozzarella, olives, artichokes, sun-dried tomatoes, pesto and grilled vegetables on a plate, with bread. To share between two, or to have on your own with a glass of wine.",

  "mk.panini.h": "Panini",
  "mk.panini.p": "Hot pressed sandwiches with Italian cured meats and cheese. Made when you order.",

  "mk.vaffel.h": "Waffles and gelato",
  "mk.vaffel.p": "A warm waffle with a scoop of Italian ice cream, caramel or chocolate sauce, fresh raspberries and blueberries, and cocoa on top. The gelato is also available on its own.",

  "mk.kaffe.h": "Coffee",
  "mk.kaffe.p": "We brew illy. Drink it standing at the counter as in Italy, or sit down by the window.",
  "mk.kaffe.1": "Espresso",
  "mk.kaffe.2": "Cappuccino",

  "mk.vin.h": "Wine and aperitivo",
  "mk.vin.p": "Italian wines, usually ones you will not find in a supermarket. Ask for a recommendation — that is half the pleasure.",
  "mk.vin.1": "Italian wine",
  "mk.vin.1p": "Red and white, by the glass or the bottle.",
  "mk.vin.2": "Peroni",
  "mk.vin.3": "Aperol Spritz",

  "mk.choko.h": "Chocolate",
  "mk.choko.p": "Domori and Venchi from Italy. This is where the shop began, and the shelves still fill an entire wall. We are glad to wrap it as a gift.",
  "mk.choko.1": "Tartufi Domori",
  "mk.choko.1p": "Truffles rolled in cocoa. The one we are asked for most.",
  "mk.choko.2": "Gianduiotti",
  "mk.choko.2p": "The classic Piedmontese hazelnut and chocolate praline.",
  "mk.choko.3": "Cremini",
  "mk.choko.3p": "Layered gianduia — softer and sweeter.",
  "mk.choko.4": "Fondente 70–100%",
  "mk.choko.4p": "Dark chocolate all the way up to pure criollo cocoa with no sugar.",

  "mk.take.h": "Takeaway",
  "mk.take.p": "Most of it can be packed to go. Call ahead on +45 91 81 18 59 and it will be ready when you arrive.",

  "mk.foot": "Any allergies, or something you do not eat? Tell us and we will sort it out."
},

/* =========================== DEUTSCH =========================== */
de: {
  "nav.menu": "Speisekarte",
  "nav.home": "Startseite",

  "cta.call": "Anrufen +45 91 81 18 59",
  "cta.route": "Route planen",
  "cta.callShort": "Anrufen",
  "cta.routeShort": "Route",
  "cta.seeMenu": "Zur ganzen Speisekarte",

  "hero.kicker": "Café · Cioccolateria · Nederdammen 32, Ribe",
  "hero.title": "Ein Stück Italien<br>mitten in <em>Ribe</em>",
  "hero.lede": "Antipasti und Panini, Waffeln mit Gelato, italienischer Wein und illy-Kaffee. Geführt von Eleonora und Giacomo, die ihr Haus in Mailand verkauft haben und hierher gezogen sind.",

  "menu.title": "Was wir servieren",
  "menu.lede": "Italienisches Essen und Trinken, von Italienern gemacht. Täglich geöffnet.",
  "menu.1.h": "Antipasti und Panini",
  "menu.1.p": "Italienische Wurstwaren, Käse, Oliven, Artischocken und getrocknete Tomaten auf dem Teller. Oder ein warmes Panini, frisch gepresst.",
  "menu.2.h": "Waffeln mit Gelato",
  "menu.2.p": "Warme Waffel mit italienischem Eis, Karamell oder Schokolade, frischen Beeren und Kakao. Unser meistbestellter Teller.",
  "menu.3.h": "Schokolade aus Italien",
  "menu.3.p": "Domori und Venchi. Gianduiotti, Cremini, Tartufi und 100% Criollo. Hier hat der Laden angefangen.",

  "story.kicker": "Hinter der Theke",
  "story.title": "Von Mailand nach Ribe",
  "story.p1": "Eleonora Dovera und Giacomo Montemagno lebten in Mailand, mit dem Stadion des AC Mailand in der Nachbarschaft. Sie war Leiterin der Buchhaltung, er war Arzt. Sie hatten Ribe als Touristen besucht, verliebten sich in die Stadt und ihre Wikingergeschichte — und entschieden sich.",
  "story.p2": "Sie verkauften das Haus, kündigten ihre Jobs und eröffneten am 23. April 2024 in der Nederdammen. Heute wohnen sie in Øster Vedsted, und sie selbst stehen hinter der Theke.",
  "story.quote": "Gågaden er hyggelig, ikke tomme butikker som i gågaden i Esbjerg.",

  "rev.title": "Was unsere Gäste sagen",
  "rev.count": "53 Bewertungen bei Google",
  "rev.link": "Alle lesen",
  "rev.orig": "Auf Dänisch, so wie unsere Gäste es geschrieben haben.",
  "rev.1": "Den bedste espresso jeg har fået længe. … Super lækkert udvalg af vine man ikke lige finder i supermarkedet. Meget engagerede og venlige ejere.",
  "rev.1n": "Bo Mussmann",
  "rev.1w": "Google",
  "rev.2": "Fantastisk charmerende sted, ægte italiensk stemning, hvor de søde værter Giacomo og Eleonora kredser om gæsterne.",
  "rev.2n": "Ditte Fribert",
  "rev.2w": "Google",
  "rev.3": "Vi fik en fantastisk dejlig tapas med friske og gode råvarer.",
  "rev.3n": "Kirsten Jensen",
  "rev.3w": "Facebook",

  "visit.title": "Besuchen Sie uns",
  "visit.lede": "Wir liegen in der Fußgängerzone von Ribe, zwei Gehminuten vom Dom entfernt. Täglich geöffnet.",
  "visit.addr": "Adresse",
  "visit.phone": "Telefon",
  "visit.hours": "Öffnungszeiten",
  "visit.monthu": "Montag – Donnerstag",
  "visit.fri": "Freitag",
  "visit.sat": "Samstag",
  "visit.sun": "Sonntag",
  "visit.giftcard": "Ribe Gutschein wird akzeptiert",

  "mk.title": "Speisekarte",
  "mk.lede": "Das Angebot wechselt mit der Jahreszeit und damit, was an dem Tag gut ist. Fragen Sie uns ruhig — wir erzählen gerne davon.",
  "mk.ask": "Fragen Sie im Laden nach dem heutigen Angebot und den Preisen.",

  "mk.anti.h": "Antipasti",
  "mk.anti.p": "Prosciutto, Mozzarella, Oliven, Artischocken, getrocknete Tomaten, Pesto und gegrilltes Gemüse auf dem Teller, mit Brot. Zum Teilen zu zweit oder allein zu einem Glas Wein.",

  "mk.panini.h": "Panini",
  "mk.panini.p": "Warme, gepresste Sandwiches mit italienischen Wurstwaren und Käse. Frisch zubereitet.",

  "mk.vaffel.h": "Waffeln und Gelato",
  "mk.vaffel.p": "Warme Waffel mit einer Kugel italienischem Eis, Karamell- oder Schokoladensauce, frischen Himbeeren und Blaubeeren und Kakao darüber. Das Eis gibt es auch einzeln.",

  "mk.kaffe.h": "Kaffee",
  "mk.kaffe.p": "Wir brühen mit illy. Im Stehen an der Theke wie in Italien, oder am Fenster im Sitzen.",
  "mk.kaffe.1": "Espresso",
  "mk.kaffe.2": "Cappuccino",

  "mk.vin.h": "Wein und Aperitivo",
  "mk.vin.p": "Italienische Weine, meist solche, die man im Supermarkt nicht findet. Fragen Sie nach einer Empfehlung — das ist das halbe Vergnügen.",
  "mk.vin.1": "Italienischer Wein",
  "mk.vin.1p": "Rot und weiß, im Glas oder in der Flasche.",
  "mk.vin.2": "Peroni",
  "mk.vin.3": "Aperol Spritz",

  "mk.choko.h": "Schokolade",
  "mk.choko.p": "Domori und Venchi aus Italien. Hier hat der Laden angefangen, und die Regale füllen noch immer eine ganze Wand. Wir verpacken gerne als Geschenk.",
  "mk.choko.1": "Tartufi Domori",
  "mk.choko.1p": "In Kakao gewälzte Trüffel. Danach werden wir am häufigsten gefragt.",
  "mk.choko.2": "Gianduiotti",
  "mk.choko.2p": "Die klassische piemontesische Praline aus Haselnuss und Schokolade.",
  "mk.choko.3": "Cremini",
  "mk.choko.3p": "Geschichtete Gianduia — weicher und süßer.",
  "mk.choko.4": "Fondente 70–100%",
  "mk.choko.4p": "Dunkle Schokolade bis hin zu reinem Criollo-Kakao ohne Zucker.",

  "mk.take.h": "Zum Mitnehmen",
  "mk.take.p": "Das meiste lässt sich zum Mitnehmen verpacken. Rufen Sie vorher an unter +45 91 81 18 59, dann steht alles bereit.",

  "mk.foot": "Haben Sie eine Allergie oder essen Sie etwas nicht? Sagen Sie Bescheid, wir finden eine Lösung."
}
};

/* ---- Sidetitler (det der står i browserfanen, og som Google viser) ---- */
const PAGE_TITLE = {
  forside: {
    da: "ChokoGlade — Italiensk café i Ribe | Antipasti, vafler, kaffe og chokolade",
    en: "ChokoGlade — Italian café in Ribe | Antipasti, waffles, coffee and chocolate",
    de: "ChokoGlade — Italienisches Café in Ribe | Antipasti, Waffeln, Kaffee und Schokolade"
  },
  menukort: {
    da: "Menukort — ChokoGlade, italiensk café i Ribe",
    en: "Menu — ChokoGlade, Italian café in Ribe",
    de: "Speisekarte — ChokoGlade, italienisches Café in Ribe"
  }
};


/* ============================================================
   HERUNDER ER MASKINERIET. Du behøver ikke rette noget her.
   ============================================================ */

function setLang(lang){
  const dict = T[lang] || T.da;
  const page = document.body.dataset.page || "forside";

  document.querySelectorAll("[data-t]").forEach(el => {
    const val = dict[el.dataset.t];
    if (val === undefined) return;
    /* Er teksten tom på det valgte sprog, skjules elementet helt,
       så der ikke står et tomt hul tilbage. */
    el.hidden = (val === "");
    if (el.hasAttribute("data-html")) el.innerHTML = val;
    else el.textContent = val;
  });

  /* Tomme kategorier på menukortet får deres note oversat */
  document.querySelectorAll("[data-empty-key]").forEach(el => {
    const val = dict[el.dataset.emptyKey];
    if (val !== undefined) el.setAttribute("data-empty", val);
  });

  document.documentElement.lang = lang;
  const titles = PAGE_TITLE[page] || PAGE_TITLE.forside;
  document.title = titles[lang] || titles.da;

  document.querySelectorAll(".langs button").forEach(b => {
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });

  try { localStorage.setItem("cg-lang", lang); } catch(e) { /* privat browsing */ }
}

document.querySelectorAll(".langs button").forEach(b => {
  b.addEventListener("click", () => setLang(b.dataset.lang));
});

/* Husk valget. Ellers gæt ud fra browserens sprog. Ellers dansk. */
let startLang = "da";
try {
  const saved = localStorage.getItem("cg-lang");
  if (saved && T[saved]) startLang = saved;
  else {
    const nav = (navigator.language || "da").slice(0,2).toLowerCase();
    if (T[nav]) startLang = nav;
  }
} catch(e) {}

setLang(startLang);

/* Skjuler den stiplede placeholder, hvis der ikke er sat et billede
   ind i style.css. Klarer sig selv. */
document.querySelectorAll(".ph").forEach(ph => {
  const bg = getComputedStyle(ph.parentElement).backgroundImage;
  if (bg && bg !== "none") ph.hidden = true;
});

/* Fremhæver dagens åbningstid, så man kan se den med det samme */
(function(){
  const rows = document.querySelectorAll("[data-day]");
  if (!rows.length) return;
  const today = new Date().getDay();            /* 0 = søndag */
  const order = ["sun","mon","tue","wed","thu","fri","sat"];
  rows.forEach(r => {
    /* data-day kan indeholde flere dage, fx "mon tue wed thu" */
    if (r.dataset.day.split(/\s+/).includes(order[today])) r.classList.add("today");
  });
})();
