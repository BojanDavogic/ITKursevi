let firebaseUrl =
  "https://it-kursevi-projekat-default-rtdb.europe-west1.firebasedatabase.app";

let korisnik = {};

let korisnickoImeKorisnika = document.getElementById("korisnickoimeKorisnika");
let lozinkaKorisnika = document.getElementById("lozinkaKorisnika");
let emailKorisnika = document.getElementById("emailKorisnika");
let imeKorisnika = document.getElementById("imeKorisnika");
let prezimeKorisnika = document.getElementById("prezimeKorisnika");
let datumRodjenjaKorisnika = document.getElementById("datumrodjenja");
let adresaKorisnika = document.getElementById("adresaKorisnika");
let telefonKorisnika = document.getElementById("telefonKorisnika");

let potvrdi = document.getElementById("potvrda");
let nazadnakorisnika = document.getElementById("nazadnakorisnika");

let parametri = new URLSearchParams(window.location.search);
let id = parametri.get("id");

let request = new XMLHttpRequest();

request.onreadystatechange = function () {
  if (this.readyState == 4) {
    if (this.status == 200) {

      korisnik = JSON.parse(request.responseText);

      korisnickoImeKorisnika.value = korisnik.korisnickoIme;
      lozinkaKorisnika.value = korisnik.lozinka;
      emailKorisnika.value = korisnik.email;
      imeKorisnika.value = korisnik.ime;
      prezimeKorisnika.value = korisnik.prezime;
      datumRodjenjaKorisnika.value = korisnik.datumRodjenja;
      adresaKorisnika.value = korisnik.adresa;
      telefonKorisnika.value = korisnik.telefon;

      nazadnakorisnika.setAttribute("href", "detalji-korisnika.html?id=" + id);
    } else {
      alert("Greska prilikom ucitavanja svih korisnika.");
    }
  }
};
request.open("GET", firebaseUrl + "/korisnici/" + id + ".json");
request.send();

let danasnjiDatumIzmenaKorisnika = new Date().toISOString().split("T")[0];
datumRodjenjaKorisnika.setAttribute("max", danasnjiDatumIzmenaKorisnika);

potvrdi.addEventListener("click", function (e) {
  e.preventDefault();

  let errorKorisnickoImeIzmenaKorisnika = document.getElementById(
    "errorKorisnickoImeIzmenaKorisnika"
  );
  let errorLozinkaIzmenaKorisnika = document.getElementById(
    "errorLozinkaIzmenaKorisnika"
  );
  let errorEmailIzmenaKorisnika = document.getElementById(
    "errorEmailIzmenaKorisnika"
  );
  let errorImeIzmenaKorisnika = document.getElementById(
    "errorImeIzmenaKorisnika"
  );
  let errorPrezimeIzmenaKorisnika = document.getElementById(
    "errorPrezimeIzmenaKorisnika"
  );
  let errorDatumRodjenjaIzmenaKorisnika = document.getElementById(
    "errorDatumRodjenjaIzmenaKorisnika"
  );
  let errorAdresaIzmenaKorisnika = document.getElementById(
    "errorAdresaIzmenaKorisnika"
  );
  let errorTelefonIzmenaKorisnika = document.getElementById(
    "errorTelefonIzmenaKorisnika"
  );

  let pListaIzmenaKorisnika = document.querySelectorAll(
    ".errorIzmenaKorisnika"
  );

  let validniPodaciIzmenaKorisnika = true;

  for (let sviP of pListaIzmenaKorisnika) {
    sviP.textContent = "";
  }

  if (korisnickoImeKorisnika.value.trim() === "") {
    errorKorisnickoImeIzmenaKorisnika.textContent =
      "Korisničko ime ne sme biti prazno polje!";
    validniPodaciIzmenaKorisnika = false;
  }

  if (lozinkaKorisnika.value.trim() === "") {
    errorLozinkaIzmenaKorisnika.textContent =
      "Lozinka ne sme biti prazno polje!";
    validniPodaciIzmenaKorisnika = false;
  }

  if (emailKorisnika.value.trim() === "") {
    errorEmailIzmenaKorisnika.textContent = "Email ne sme biti prazno polje!";
    validniPodaciIzmenaKorisnika = false;
  }

  if (imeKorisnika.value.trim() === "") {
    errorImeIzmenaKorisnika.textContent =
      "Ime korisnika ne sme biti prazno polje!";
    validniPodaciIzmenaKorisnika = false;
  }

  if (prezimeKorisnika.value.trim() === "") {
    errorPrezimeIzmenaKorisnika.textContent =
      "Prezime korisnika ne sme biti prazno polje!";
    validniPodaciIzmenaKorisnika = false;
  }

  if (datumRodjenjaKorisnika.value === "") {
    errorDatumRodjenjaIzmenaKorisnika.textContent =
      "Datum rodjenja ne sme biti prazno polje!";
    validniPodaciIzmenaKorisnika = false;
  }

  if (adresaKorisnika.value.trim() === "") {
    errorAdresaIzmenaKorisnika.textContent = "Adresa ne sme biti prazno polje!";
    validniPodaciIzmenaKorisnika = false;
  }

  let patternTelefon = /^[(]{0,1}[+]{0,1}[0-9]{3}[)]{0,1}[-/ 0-9]*$/;
  if (patternTelefon.test(telefonKorisnika.value) === false) {
    errorTelefonIzmenaKorisnika.textContent =
      "Unesite ispravan format broja telefona!";
    validniPodaciIzmenaKorisnika = false;
  }

  if (validniPodaciIzmenaKorisnika) {
    alert("Uspešno ste sačuvali podatke! ");
    window.location.href = "detalji-korisnika.html?id=" + id;
  } else {
    alert("Neuspešna izmena korisnika. Proverite unete podatke.");
  }
});

nazadnakorisnika.setAttribute("href", "detalji-korisnika.html?id=" + id);
