let firebaseUrl =
  "https://it-kursevi-projekat-default-rtdb.europe-west1.firebasedatabase.app";

let kurs = {};

let parametri = new URLSearchParams(window.location.search);
let id = parametri.get("id");

let naslovKursa = document.getElementById("naslovPlaceholder");
let slikaKursa = document.getElementById("imagePlaceholder");
let nazivKursa = document.getElementById("NazivkursaPlaceholder");
let idKursa = document.getElementById("IDkursaPlaceholder");
let autorKursa = document.getElementById("autorkursaPlaceholder");
let datumizmeneKursa = document.getElementById("datumizmenePlaceholder");
let opisKursa = document.getElementById("opisPlaceholder");
let cenaKursa = document.getElementById("cenaPlaceholder");
let brojlekcijaKursa = document.getElementById("brojlekcijaPlaceholder");
let kategorijaKursa = document.getElementById("kategorijaPlaceholder");
let jezikKursa = document.getElementById("jezikPlaceholder");
let ocenaKursa = document.getElementById("ocenaPlaceholder");
let brojkorisnikaKursa = document.getElementById("brojkorisnikaPlaceholder");
let sertifikatKursa = document.getElementById("sertifikatPlaceholder");

let izmenaKursa = document.getElementById("izmena-kursa");
let linkdoizmeneKursa = document.getElementById("izmenikurs");
let kupiKurs = document.getElementById("kupovina-kursa");

let request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (this.readyState == 4) {
    if (this.status == 200) {
      kurs = JSON.parse(this.responseText);

      naslovKursa.innerText = kurs.naziv;
      slikaKursa.setAttribute("src", kurs.slika);
      nazivKursa.innerText = kurs.naziv;
      idKursa.innerText = kurs.id;
      autorKursa.innerText = kurs.autor;
      datumizmeneKursa.innerText = kurs.datumIzmene;
      opisKursa.innerText = kurs.opis;
      cenaKursa.innerText = kurs.cena;
      brojlekcijaKursa.innerText = kurs.brojLekcija;
      kategorijaKursa.innerText = kurs.kategorija;
      jezikKursa.innerText = kurs.jezik;
      ocenaKursa.innerText = kurs.prosecnaOcena;
      brojkorisnikaKursa.innerText = kurs.brojKorisnika;
      sertifikatKursa.innerText = kurs.sertifikovan;

      linkdoizmeneKursa.setAttribute("href", "izmena-kursa.html?id=" + kurs.id);
    } else {
      alert("Greska prilikom dobavljanja podataka");
    }
  }
};

request.open("GET", firebaseUrl + "/kursevi/" + id + ".json");
request.send();

//sekcija za prikaz dodavanja u korpu //

let dodajukorpu = document.getElementById("dodajukorpu");

kupiKurs.addEventListener("click", function (e) {
  dodajukorpu.style.display = "flex";
  setTimeout(function () {
    dodajukorpu.style.display = "none";
  }, 1000);

  let korpa = localStorage.getItem("korpa");

  if (korpa == null) {
    localStorage.setItem("korpa", "[]");
  }
  let Listakorpa = JSON.parse(korpa);

  Listakorpa.push(kurs);
  localStorage.setItem("korpa", JSON.stringify(Listakorpa));
});
