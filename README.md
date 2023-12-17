# ITKursevi
Projekat iz predmeta Web Dizajn

Specifikacija projektnog zadatka iz predmeta Web dizajn 
 
 
1. Zadatak 
 
 Primenom tehnika i alata pokazanih na vežbama i predavanjima u toku semestra kreirati front-end deo za web sajt platforme za učenje. Dizajn sajta je proizvoljan, ali treba da bude u skladu sa smernicama datim i prikazanim na predavanjima i vežbama. Svaki student treba da izabere i kreira jedinstvenu vizuelnu temu za svoj projekat.  
U daljem tekstu dat je opis delova koje projekat treba da sadrži, a na studentima je da, u konsultaciji sa predmetnim asistentom i profesorom osmisle finalni dizajn. 
 Projekat realizovati isključivo upotrebom sledećih tehnologija (ukoliko student ima želju da koristi neku tehnologiju koja nije navedena, neophodno je da se prvo konsultuje sa predmetnim nastavnicima):
 
•	HTML 5

•	CSS / SASS

•	JavaScript / jQuery

•	Bootstrap, Materialize, W3Css, Foundations, Bulma 
• Angular / Vue.js / React 

 
2. Specifikacija projektnog zadatka 
 
 Zadatak studenata je specifikacija i implementacija rasporeda elemenata i sadržaja na stranicama koji će korisnicima pružiti mogućnost lakog pristupa sadržajima kao i obavljanje ciljanih aktivnosti. 
 Neophodno je osmisliti osnovni raspored ključnih elemenata (logo, zaglavlje, glavna navigacija, forme, prikaz kurseva…) i održavati konzistentnost izgleda kroz sve stranice (sekcije) sajta. 
 
Minimalan skup stranica (sekcija) u sklopu projekta : 
 
1.	Početna stranica aplikacije – Prikazuje sve kurseva koji postoje na platformi 
2.	Stranice pojedinačnih kurseva – Prikazuju pojedinačne informacije o kursu 
3.	Stranica za izmenu detalja o kursu – Stranica sa formom za izmenu podataka o pojedinačnom kursu. Neophodno je da forma bude popunjena postojećim podacima (ID kursa treba da se prikaže, ali da bude onemogućen za izmene. Isto važi i za broj korisnika koji su prešli kurs i za prosečnu ocenu.) 
4.	Administratorska stranica za upravljanje korisnicima – Prikazuje listu svih korisnika u sistemu.  
5.	Stranica za prikaz detalja o pojedinačnim korisnicima – Prikazuje podatke o pojedinačnom korisniku, kao profilna stranica korisnika 
6.	Stranica za izmenu detalja o pojedinačnim korisnicima – Stranica sa formom za izmenu podataka o pojedinačnom korisniku. Neophodno je da forma bude popunjena postojećim podacima 
7.	Sekcije za prijavu i registraciju – Inicijalno treba da su sakrivene. Prikazuju se klikom na odgovarajuće HTML elemente (potrebno je da budu realizovane kao „pop-up” sekcije dostupne na svim stranicama, a ne kao posebne stranice). 
8.	Stranica za prikaz korpe za kupovinu 
Za sve navedene stranice neophodno je da se pri implementaciji ispoštuju principi responsive design-a ,  odnosno da se obezbedi da iste izgledaju korektno i na desktop-u i na mobilnim uređajima. 
Svaki kurs je opisan sledećim atributima:

•	Naziv

•	ID (jedinstveno obeležje od 11 cifara)

•	Autor kursa

•	Datum poslednje izmene

•	Opis

•	Slika (naslovna slika za kurs)

•	Cena

•	Broj lekcija

•	Kategorija (web programiranje, objektno programiranje, algoritmi, strukture podataka ili baze podataka)

•	Jezik na kome je snimljen

•	Prosečna ocena

•	Broj korisnika koji su prešli kurs

•	Sertifikovan / nesertifikovan

 
Svaki korisnik je opisan sledećim atributima: 
 
•	Korisničko ime

•	Lozinka

•	E-mail adresa

•	Ime

•	Prezime

•	Datum rođenja

•	Adresa

•	Broj telefona 
 
 Pored osnovnih stranica i sekcija, u sklopu projekta je potrebno realizovati sledeće front-end funkcionalnosti: 
 
•	Sve forme je potrebno validirati na klijentskoj strani pre slanja na server. Ovo se ne odnosi na automatsku validaciju koju browser vrši na osnovu required atributa, već je potrebno implementirati ručnu proveru unesenih vrednosti.

•	Potrebno je omogućiti brisanje kurseva i deaktiviranje korisnika u okviru gore navedenih stranica (gde ima smisla). Za sve akcije koje su vezane za brisanje ili deaktiviranje entiteta sistema implementirati dijaloge putem kojih će se tražiti od korisnika da potvrde svoju akciju. 
 
NAPOMENA 1:  Studenti treba da u svoj lični Google Firebase uvezu podatke iz fajla podaci_kursevi.json i njih prikazuju na odgovarajućim stranicama. Uputstvo za podešavanje Google Firebase dato je u zasebnom PDF dokumentu. Za potrebe Kontrolne tačke 1 moguće je prikazati statičke podatke unesene direktno u HTML kod same stranice. 
 
NAPOMENA 2: Studenti ne treba da brinu o pravima pristupa stranicama. Svi korisnici i prijavljeni i neprijavljeni mogu da pristupaju svim stranicama. Takođe, ne treba obezbediti registraciju novih korisnika, već samo validirati podatke unete u formu za registraciju. 
 
3. Zadaci za ocenu 9 i 10 (Brane se na odbrani projekta) 
 
 	Za maksimalnu ocenu 9 potrebno je implementirati jedan (bilo koji) od navedenih zadataka, dok je za maksimalnu ocenu 10 neophodno implementirati oba. 
 
3.1. Zadatak 1 
 
U sklopu početne stranice dodati sekciju za pretragu. Sekcija za pretragu, treba da omogući pretragu kurseva po nazivu, autoru ili kategoriji istovremeno. 
 
3.2.  	Zadatak 2  
 
 U sklopu prikaza rezultata pretrage, implemenitati funkcionalnost označavanja ključnih reči iz pretrage u sklopu rezultata (svim ključnim rečima koje su pronađene u tekstovima obojati pozadinu kako bi one bile lakše uočljive). 

