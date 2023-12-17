# ITKursevi
Projekat iz predmeta Web Dizajn

Specifikacija projektnog zadatka iz predmeta Web dizajn
1. Zadatak
Primenom tehnika i alata pokazanih na vežbama i predavanjima u toku semestra kreirati
front end deo za web sajt platforme za učenje . Dizajn sajta je proizvoljan, ali treba da bude u skladu
sa smernicama datim i prikazanim na predavanjima i vežbama. Svaki student treba da izabere i kreira
jedinstvenu vizuelnu temu za svoj projekat.
U
daljem tekstu dat je opis delova koje projekat treba da sadrži, a na studentima je da, u
konsultaciji sa predmetnim asistentom i profesorom osmisle finalni dizajn.
Projekat realizovati isključivo upotrebom sledećih tehnologija (ukoliko student ima želju d a
koristi neku tehnologiju koja nije navedena, neophodno je da se prvo konsultuje sa predmetnim
nastavnicima):
• HTML 5
• CSS / SASS
• JavaScript / jQuery
• Bootstrap , Materialize, W3Css, Foundations, Bulma
• Angular / Vue.js / React
2. Specifikacija projektnog zadatk a
Zadatak studenata je specifikacija i implementacija rasporeda elemenata i sadržaja na
stranicama koji će korisnicima pružiti mogućnost lakog pristupa sadržajima kao i obavljanje ciljanih
aktivnosti.
Neophodno je osmisliti osnovni raspored ključnih elemenata (logo, zaglavlje, glavna navigacija,
forme, prikaz kurseva …) i održavati konzistentnost izgleda kroz sve stranice (sekcije)
Minimalan skup stranica (sekcija) u sklopu projekta :
1. Početna stranica aplikacije Prikazuje sv e kurseva koj i postoje na pl atformi
2. Stranice pojedinačnih kurseva Prikazuju pojedinačne informacije o kursu
3. Stranica za izmenu detalja o kursu Stranica sa formom za izmenu podataka o
pojedinačnom kursu . Neophodno je da forma bude popunjena postojećim podacima ID kursa
treba da se prikaže, ali da bude onemogućen za izmene. Isto važi i za broj korisnika koji su
prešli kurs i za prosečnu ocenu.
4. Administratorska stranica za upravljanje korisnicima Prikazuje listu svih korisnika u
sistemu
5. Stranica za prikaz detalja o pojedinačnim korisnicimaStranica za prikaz detalja o pojedinačnim korisnicima –– Prikazuje podatke o poPrikazuje podatke o pojedinačnom jedinačnom korisniku, kao profilna stranica korisnikakorisniku, kao profilna stranica korisnika
6. Stranica za izmenu detalja o pojedinačnim korisnicimStranica za izmenu detalja o pojedinačnim korisnicima a –– Stranica sa formom za izmenu Stranica sa formom za izmenu podataka o podataka o pojedinačnom korisnikupojedinačnom korisniku. Neophodno je da forma bude popunjena postojećim . Neophodno je da forma bude popunjena postojećim podacimapodacima
7. Sekcije za prijavu i regiSekcije za prijavu i registracijustraciju –– Inicijalno treba da su sakrivene. Prikazuju se klikom na Inicijalno treba da su sakrivene. Prikazuju se klikom na odgovarajuće HTML elemente (potrebno je da budu realizovane kao „popodgovarajuće HTML elemente (potrebno je da budu realizovane kao „pop--up” sekcije dostupne up” sekcije dostupne na svim stranicama, a ne kao posebne stranice).na svim stranicama, a ne kao posebne stranice).
8. Stranica za prikaz korpe za kupovinuStranica za prikaz korpe za kupovinu
Z
Za a svesve navedene stranice neophodno je da se pri implementaciji ispoštuju principi navedene stranice neophodno je da se pri implementaciji ispoštuju principi responsive designresponsive design--aa , odnosno da se obezbedi da iste izgledaju korektno i na desktop, odnosno da se obezbedi da iste izgledaju korektno i na desktop--u i na u i na mobilnim uređajima.mobilnim uređajima.
Svaki
Svaki kurs kurs je opisan sledećim atributima:je opisan sledećim atributima:
• NazivNaziv
• IIDD (jedinstveno obeležje od (jedinstveno obeležje od 11 11 cifara)cifara)
• AutorAutor kursakursa
• Datum Datum poslednje izmeneposlednje izmene
• OpisOpis
• Slika (Slika (naslovna slika za naslovna slika za kurskurs))
• CenaCena
• Broj Broj lekcijalekcija
• Kategorija (web programiranje, objektno programiranje, algoritmi, strukture podataka ili baze Kategorija (web programiranje, objektno programiranje, algoritmi, strukture podataka ili baze podataka)podataka)
• Jezik Jezik na kome je snimljenna kome je snimljen
• Prosečna ocenaProsečna ocena
• Broj korisnika koji su prešli kursBroj korisnika koji su prešli kurs
• SertifikovanSertifikovan // nenesserertifikovantifikovan
S
Svaki vaki korisnikkorisnik je opisan sledećim atributima:je opisan sledećim atributima:
• Korisničko imeKorisničko ime
• LozinkaLozinka
• EE--mail adresamail adresa
• ImeIme
• PrezimePrezime
• Datum rođenjaDatum rođenja
• AdresaAdresa
• Broj telefonaBroj telefona
Pored osnovnih stranica i sekcija, u Pored osnovnih stranica i sekcija, u sklopu projekta je potrebno realizovati sledeće frontsklopu projekta je potrebno realizovati sledeće front--end end funkcionalnosti:funkcionalnosti:
• Sve forme je potrebno validirati na klijentskoj strani pre slanja na server. Ovo se Sve forme je potrebno validirati na klijentskoj strani pre slanja na server. Ovo se ne odnosine odnosi na na automatsku validaciju koju automatsku validaciju koju browserbrowser vrši na osnovu vrši na osnovu requiredrequired atributa, već je potrebnatributa, već je potrebno o implementirati ručnu proveru unesenih vrednosti.implementirati ručnu proveru unesenih vrednosti.
• Potrebno je omogućiti brisanje Potrebno je omogućiti brisanje kursevakurseva i i deaktiviranje deaktiviranje korisnika u okviru gore navedenih korisnika u okviru gore navedenih stranica (gde ima smisla). Za sve akcije koje su vezane za brisanje ili deaktiviranje entiteta stranica (gde ima smisla). Za sve akcije koje su vezane za brisanje ili deaktiviranje entiteta sistema implementirati dijaloge putem kojih će se tražiti od korisnika da potvrde svoju akciju.sistema implementirati dijaloge putem kojih će se tražiti od korisnika da potvrde svoju akciju.
NAPOMENA 1
NAPOMENA 1: Studenti: Studenti treba da u svoj lični treba da u svoj lični Google FirebaseGoogle Firebase uvezu podatke iz fajla uvezu podatke iz fajla podaci_podaci_kursevikursevi.json.json i njih prikazuju na odgovarajućim stranicama. Upi njih prikazuju na odgovarajućim stranicama. Uputstvo za podešavanje utstvo za podešavanje Google Google FirebaseFirebase dato je u zasebnom PDF dokumentu. Za potrebe Kontrolne tačke 1 moguće je prikazati dato je u zasebnom PDF dokumentu. Za potrebe Kontrolne tačke 1 moguće je prikazati statičke podatke unesene direktno u HTML kod same stranice.statičke podatke unesene direktno u HTML kod same stranice.
NAPOMENA 2
NAPOMENA 2: Studenti: Studenti ne treba da brinu o pravima pristupa stranicama. ne treba da brinu o pravima pristupa stranicama. Svi Svi korisnici i prijavljeni i korisnici i prijavljeni i neprijavljeni mogu da pristupaju svim stranicamaneprijavljeni mogu da pristupaju svim stranicama. Takođe, ne treba obezbediti registraciju novih . Takođe, ne treba obezbediti registraciju novih korisnika, već samo validirati podatke unete u formu za registraciju.korisnika, već samo validirati podatke unete u formu za registraciju.
3. Zadaci za ocenu 9 i 10 (Brane se na odbrani projekta)Zadaci za ocenu 9 i 10 (Brane se na odbrani projekta)
Za Za maksimalnu ocenu 9 potrebno je implementirati jedan (bilo koji) od navedenih zadataka, maksimalnu ocenu 9 potrebno je implementirati jedan (bilo koji) od navedenih zadataka, dok je za maksimalnu ocenu 10 neophodno implementirati oba.dok je za maksimalnu ocenu 10 neophodno implementirati oba.
3.1. Zadatak 1Zadatak 1
U sklopu
U sklopu početne stranice dodati sekciju početne stranice dodati sekciju za pretragu. Sekcija za pretraguza pretragu. Sekcija za pretragu, treba da omogući , treba da omogući prepretragu kurseva po nazivutragu kurseva po nazivu, autoru ili kategoriji, autoru ili kategoriji istovremenoistovremeno..
3.2.
3.2. Zadatak 2 Zadatak 2
U sklopu prikaza rezultata pretrage, implemenitati funkcionalnU sklopu prikaza rezultata pretrage, implemenitati funkcionalnost označavanja ključnih reči iz ost označavanja ključnih reči iz pretrage u sklopu rezultata (svim ključnim rečima koje su pronađene u tekstovima obojati pozadinu pretrage u sklopu rezultata (svim ključnim rečima koje su pronađene u tekstovima obojati pozadinu kako bi one bile lakše uočljive).kako bi one bile lakše uočljive).
