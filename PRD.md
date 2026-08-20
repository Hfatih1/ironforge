# PRD — Iron Forge web sajt

Verzija: 1.0
Datum: 20.08.2026.
Status: Odobren za izradu

---

## 1. Pregled

Iron Forge je firma za proizvodnju metalnih konstrukcija, metalnog nameštaja,
bravariju, CNC obradu, kapije, ograde i nadstrešnice.

Sajt nije prodavnica niti generator masovnih lidova. Njegova jedina svrha je da
posluži kao dokaz ozbiljnosti firme kada se šalje ponuda drugoj firmi. Tipičan
scenario: Iron Forge šalje ponudu ili hladan mejl potencijalnom partneru u EU,
primalac klikne na link i za petnaest sekundi treba da zaključi da je reč o
ozbiljnom proizvođaču sa kojim vredi razgovarati.

Sve odluke u ovom dokumentu podređene su tom cilju.

---

## 2. Ciljevi

Primarni cilj: da posetilac koji dolazi iz poslovnog mejla stekne utisak
profesionalne, sposobne i pouzdane firme.

Sekundarni ciljevi:
- Da posetilac lako pošalje upit (forma, telefon, WhatsApp).
- Da sajt bude pronađen organski na Google-u za usluge po kategorijama.
- Da sajt bude jednako uverljiv na engleskom kao i na srpskom.

Merila uspeha:
- Lighthouse Performance i SEO iznad 95 na mobilnom.
- Vreme do prvog prikaza sadržaja ispod 1.5s na 4G.
- Forma za upit funkcionalna, sa dostavom mejla ispod 30 sekundi.
- Obe jezičke verzije indeksirane u Google Search Console.

---

## 3. Ciljna publika

Primarna: firme u EU koje traže kooperanta ili podizvođača za metalne radove
(inženjering firme, proizvođači, izvođači radova, opremanje enterijera).

Sekundarna: domaće firme i investitori u Srbiji.

Publika je poslovna, tehnička i nestrpljiva. Ne zanima je marketinški jezik,
nego šta firma konkretno može da uradi, kako se odvija saradnja i kako da
dobije ponudu.

---

## 4. Obim projekta

### U obimu

- Jednostranična glavna prezentacija (one-page) na srpskom i engleskom.
- SEO pod-stranice po kategorijama usluga, na oba jezika.
- Galerija radova sa filterima i lightbox prikazom.
- Kontakt forma sa slanjem mejla i zaštitom od spama.
- Google mapa u kontakt sekciji.
- Puna SEO postavka, sitemap, structured data.
- Cookie baner i stranica Politika privatnosti.
- Google Analytics uz pristanak korisnika.
- Rekonstrukcija loga u SVG format, bela varijanta, favicon set.

### Van obima (za sada)

- Sekcija sertifikata i standarda — firma ih trenutno nema. Dizajn se priprema
  tako da se sekcija može dodati bez preuređivanja stranice.
- Sekcija referenci i logotipa klijenata — nema podataka.
- Prikaz mašinskog parka i tehničkih kapaciteta.
- PDF katalog za preuzimanje.
- Obrazac za slanje tehničkih crteža (RFQ sa uploadom CAD fajlova).
- Blog i sekcija novosti.
- Prikaz cena.
- Svetla tema — sajt je isključivo taman.

---

## 5. Tehnički stack

- Next.js 16.3.1, App Router
- React 19.2.8
- TypeScript 5
- Tailwind CSS v4
- Fontovi preko `next/font`
- Hosting: Vercel, besplatan plan
- Domen: kupuje se zasebno kod registrara i povezuje na Vercel
- Mejl servis: Resend
- Zaštita forme: Cloudflare Turnstile
- Analitika: Google Analytics 4

Napomena za izradu: ova verzija Next.js-a ima izmene u odnosu na starije
konvencije. Pre pisanja koda obavezno konsultovati dokumentaciju u
`node_modules/next/dist/docs/`.

---

## 6. Informaciona arhitektura

### Rute

- `/` — prepoznaje jezik pretraživača i preusmerava. Strani posetioci idu na
  `/en`, domaći na `/sr`.
- `/sr` — glavna stranica, srpski
- `/en` — glavna stranica, engleski
- `/sr/usluge/[kategorija]` — SEO pod-stranice, srpski
- `/en/services/[category]` — SEO pod-stranice, engleski
- `/sr/politika-privatnosti` i `/en/privacy-policy`
- `/sitemap.xml`, `/robots.txt`
- Prilagođena 404 stranica na oba jezika

### Jezici

Srpski i engleski su ravnopravni, sa zasebnim URL-ovima i prevedenim meta
podacima. Svaka stranica ima `hreflang` veze ka svom parnjaku i `x-default`.
Prekidač jezika u zaglavlju vodi na isti sadržaj u drugom jeziku, ne na
početnu.

Sve tekstove piše izvođač, u profesionalnom B2B tonu. Engleska verzija nije
doslovan prevod nego prilagođen tekst za EU tržište i podugovaranje.

---

## 7. Dizajn sistem

### Boje

| Namena | Vrednost |
|---|---|
| Pozadina | `#0A0A0A` |
| Površine, kartice | `#141414` |
| Uzdignute površine | `#1A1A1A` |
| Ivice i linije | `#1F1F1F` |
| Sporedni tekst | `#8A8A8A` |
| Glavni tekst | `#F5F5F5` |
| Akcenat | `#FF6A00` |
| Akcenat, hover | `#FF8124` |

Akcentna boja se koristi štedljivo: primarna dugmad, aktivni filteri, hover
stanja, tanke naglašene linije. Nikada kao pozadina velikih površina.

### Tipografija

Naslovi: kondenzovan industrijski font, velika slova, zategnut razmak između
slova, izražene veličine. Vizuelno se nadovezuje na logo.

Tekst: neutralan čitak sans-serif, komotan prored, sporedni tekst u sivoj.

Hijerarhija je oštra — razlika između naslova i teksta mora biti velika, jer
taj kontrast nosi utisak ozbiljnosti.

### Komponente

Zaglavlje sa logom, navigacijom, prekidačem jezika i istaknutim dugmetom
"Zatraži ponudu". Postaje neprozirno pri skrolovanju.

Kartice usluga sa ikonom, naslovom, kratkim opisom i linkom ka pod-stranici.
Hover podiže karticu i pali ivicu u akcentnoj boji.

Dugmad u dve varijante: puna akcentna i obrisna.

Futer sa logom, kontaktom, navigacijom, društvenim mrežama, pravnim podacima
firme i linkom ka politici privatnosti.

Plutajuće WhatsApp dugme, diskretno, u donjem desnom uglu.

### Animacije

Suptilne i brze. Pojavljivanje sekcija na skrol kroz Intersection Observer,
blagi vertikalni pomeraj, hover prelazi na karticama i dugmadima. Sve rešeno
CSS-om, bez teških animacionih biblioteka. Poštuje se
`prefers-reduced-motion`.

### Logo

Postojeći `iron-forge-cnc.png` se rekonstruiše kao čist SVG, u beloj varijanti
za tamnu podlogu. Izrađuje se i favicon set i OG slika za deljenje linka.

---

## 8. Glavna stranica — sekcije

Redosled je fiksan.

### 8.1 Hero

Čisto tipografski, bez fotografije. Ogroman naslov velikim slovima na crnoj
pozadini sa suptilnom teksturom i tankom akcentnom linijom. Ispod naslova
jedna rečenica koja objašnjava čime se firma bavi i kome se obraća, pa dva
dugmeta: "Zatraži ponudu" i "Pogledaj radove".

### 8.2 Šta radimo

Mreža od osam kategorija:

1. Metalne konstrukcije (hale, nosači, platforme)
2. Metalni nameštaj (stolovi, stolice, police)
3. Bravarija po meri
4. CNC obrada i sečenje metala
5. Kapije, uključujući klizne
6. Ograde (dvorišne, terase, stepenišne)
7. Nadstrešnice i stepeništa
8. Usluge zavarivanja, servis i popravke

Svaka kartica vodi na svoju SEO pod-stranicu.

### 8.3 Zašto Iron Forge

Tri do četiri argumenta o kvalitetu izrade, izradi po meri prema crtežu,
poštovanju rokova i direktnoj komunikaciji bez posrednika. Bez izmišljenih
brojeva i statistike.

### 8.4 Kako radimo

Proces saradnje u četiri koraka: upit i konsultacija, tehnički crtež i ponuda,
proizvodnja, isporuka i montaža.

Ovoj sekciji se daje više prostora nego uobičajeno. Pošto nema sertifikata ni
referenci, jasno definisan proces je glavni signal ozbiljnosti stranoj firmi.

### 8.5 Galerija radova

Mreža fotografija sa filterima po kategoriji i lightbox prikazom na klik.
Podržava tastaturu i zatvara se na Escape. Slike idu kroz `next/image` sa
lenjim učitavanjem i blur pozadinom tokom učitavanja.

Očekivano oko petnaest fotografija u prvoj fazi. Dok ne stignu, koriste se
tamni placeholder blokovi istog odnosa stranica.

### 8.6 O nama

Kratak, samouveren tekst o firmi, pristupu poslu i tipu saradnje koju traži.

### 8.7 Česta pitanja

Šest do osam pitanja koja stvarno zanimaju poslovnog kupca: da li se radi po
dostavljenom crtežu, koji materijali, da li se izvozi, kako se formira cena,
koji su rokovi, da li se radi montaža. Označava se FAQ structured data
oznakama.

### 8.8 Kontakt

Forma sa leve strane, kontakt podaci i ugrađena Google mapa sa desne.

---

## 9. SEO pod-stranice usluga

Za svaku kategoriju iz sekcije 8.2 izrađuje se zasebna stranica, na oba
jezika, sa jedinstvenim naslovom, opisom, tekstom od nekoliko pasusa, izborom
relevantnih fotografija iz galerije i pozivom na akciju.

Ove stranice nisu istaknute u glavnoj navigaciji. Njihova svrha je organski
dolazak sa pretrage i mogućnost da se u ponudi pošalje link direktno ka
konkretnoj usluzi.

---

## 10. Forma i integracije

### Polja

Ime i prezime, naziv firme, e-mail, telefon, tip posla (padajući izbor sa osam
kategorija), poruka.

### Ponašanje

Validacija na klijentu i ponovo na serveru. Vidljiva stanja: slanje, uspeh,
greška. Poruka o uspehu jasno navodi u kom roku se očekuje odgovor.

### Tehnička izvedba

Slanje kroz Next server akciju. Mejl ide preko Resend-a na poslovnu adresu
firme, sa e-mailom pošiljaoca postavljenim kao adresa za odgovor.

Zaštita od spama: Cloudflare Turnstile, sa proverom tokena na serveru. Dodatno
skriveno honeypot polje.

### Promenljive okruženja

Izrađuje se `.env.example` sa tačnim nazivima:
`RESEND_API_KEY`, `CONTACT_EMAIL_TO`, `CONTACT_EMAIL_FROM`,
`TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`, `NEXT_PUBLIC_GA_ID`,
`NEXT_PUBLIC_SITE_URL`.

Nijedan ključ se ne unosi u kod niti u repozitorijum.

---

## 11. SEO

- Jedinstveni `title` i `description` za svaku stranicu na oba jezika.
- Open Graph i Twitter kartice sa namenski izrađenom slikom.
- `hreflang` veze između srpske i engleske verzije, plus `x-default`.
- Canonical linkovi.
- Structured data: Organization i LocalBusiness za firmu, Service za svaku
  kategoriju, FAQPage za sekciju čestih pitanja, BreadcrumbList na
  pod-stranicama.
- Automatski generisan `sitemap.xml` sa svim rutama na oba jezika.
- `robots.txt` sa linkom ka sitemap-u.
- Semantičan HTML sa jednim `h1` po stranici i ispravnom hijerarhijom naslova.
- Opisni `alt` tekstovi na svim fotografijama.

Ključne reči se biraju odvojeno za srpsko tržište (po gradu i usluzi) i za EU
tržište (metal fabrication, steel structures, subcontracting, CNC cutting).

Po objavi: prijava na Google Search Console i slanje sitemap-a.

---

## 12. Privatnost i kolačići

Diskretan cookie baner na dnu ekrana pri prvoj poseti, sa jasnim izborom
prihvatanja i odbijanja. Google Analytics se učitava isključivo nakon
prihvatanja. Izbor se pamti lokalno.

Stranica Politika privatnosti na oba jezika, sa objašnjenjem koji se podaci
prikupljaju kroz formu i analitiku.

---

## 13. Performanse i pristupačnost

- Ciljni Lighthouse rezultat iznad 95 za Performance, Accessibility i SEO na
  mobilnom.
- Sve fotografije optimizovane kroz `next/image`, u modernim formatima, sa
  ispravno postavljenim `sizes`.
- Nema pomeranja sadržaja pri učitavanju.
- Fontovi se učitavaju preko `next/font`, bez skoka teksta.
- Puna navigacija tastaturom, vidljiv fokus, ispravni ARIA atributi na
  lightbox-u, meniju i formi.
- Kontrast teksta zadovoljava WCAG AA.
- Responzivno od 360px naviše, dizajn se radi mobile-first.

---

## 14. Sadržaj koji dostavlja naručilac

Neophodno pre objave:

- Pun pravni naziv firme, PIB, matični broj
- Adresa, grad, poštanski broj
- Telefon, poslovni e-mail, radno vreme
- Tačna lokacija za Google mapu
- Linkovi ka Instagram, Facebook i LinkedIn profilima
- Broj telefona za WhatsApp
- Domen nakon kupovine
- Fotografije radova, u `public/gallery/`, grupisane po kategoriji
- Pred objavu: Resend API ključ, Turnstile ključevi, GA4 merni ID

Napomena: projekat nema `src` folder. Aplikacija se nalazi u `app/`, a statički
resursi u `public/`.

---

## 15. Faze isporuke

1. Temelj — dizajn tokeni, fontovi, SVG logo, zaglavlje, futer, jezičke rute
2. Glavna stranica — sve sekcije od hero do kontakta
3. Galerija — filteri, lightbox, optimizacija slika
4. Forma — server akcija, Resend, Turnstile, validacija i stanja
5. Pod-stranice usluga na oba jezika
6. SEO sloj — meta podaci, structured data, sitemap, robots, mapa
7. Kolačići, politika privatnosti, analitika
8. Završna obrada — performanse, pristupačnost, 404, uputstvo za objavu

---

## 16. Rizici i otvorena pitanja

Nedostatak sertifikata je najveći rizik za EU tržište, gde je EN 1090 često
uslov za učešće u tenderu. Preporuka je da se pribavi, a dizajn se priprema
tako da se sekcija doda bez preuređivanja stranice.

Nedostatak referenci znači da galerija nosi ceo teret dokazivanja. Kvalitet
fotografija direktno određuje uverljivost sajta i vredi uložiti u profesionalno
fotografisanje.

Petnaest fotografija je donja granica za uverljivu galeriju. Cilj je da se
vremenom dopuni, posebno fotografijama procesa rada.

Otvoreno za potvrdu: preusmeravanje sa `/` na `/en` za strane posetioce.
