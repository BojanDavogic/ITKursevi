let firebaseUrl =
  "https://it-kursevi-projekat-default-rtdb.europe-west1.firebasedatabase.app";

let korisnik = {};

let korisnickoImeKorisnika = document.getElementById("korisnickoimeKorisnika");
let emailKorisnika = document.getElementById("emailKorisnika");
let imeKorisnika = document.getElementById("imeKorisnika");
let prezimeKorisnika = document.getElementById("prezimeKorisnika");
let datumRodjenjaKorisnika = document.getElementById("datumRodjenja");
let adresaKorisnika = document.getElementById("adresaKorisnika");
let telefonKorisnika = document.getElementById("telefonKorisnika");

let ukloni = document.getElementById("ukloni");
let izmeni = document.getElementById("izmenipodatke");

let parametri = new URLSearchParams(window.location.search);
let id = parametri.get("id");
let request = new XMLHttpRequest();

request.onreadystatechange = function () {
  if (this.readyState == 4) {
    if (this.status == 200) {

      korisnik = JSON.parse(request.responseText);

      korisnickoImeKorisnika.innerText = korisnik.korisnickoIme;
      emailKorisnika.innerText = korisnik.email;
      imeKorisnika.innerText = korisnik.ime;
      prezimeKorisnika.innerText = korisnik.prezime;
      datumRodjenjaKorisnika.innerText = korisnik.datumRodjenja;
      adresaKorisnika.innerText = korisnik.adresa;
      telefonKorisnika.innerText = korisnik.telefon;
    } else {
      alert("Greska prilikom ucitavanja svih korisnika.");
    }
  }
};
request.open("GET", firebaseUrl + "/korisnici/" + id + ".json");
request.send();

ukloni.addEventListener("click", function (e) {
  let text = "Da li zaista želite da uklonite korisnika?";
  if (confirm(text) == true) {
    alert("Uspešno ste uklonili korisnika!");
    document.location.href = "korisnici-kursa.html";
  }



});

izmeni.addEventListener("click", function (e) {
  izmeni.setAttribute("href", "izmena-korisnika.html?id=" + id);
});
