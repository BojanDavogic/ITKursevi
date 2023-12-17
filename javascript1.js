document.getElementById("prijava").addEventListener("click", function () {
  document.querySelector(".sekcija-prijava").style.display = "flex";
});
document.getElementById("izadji").addEventListener("click", function () {
  document.querySelector(".sekcija-prijava").style.display = "none";
  location.reload();
});

document.getElementById("registracija").addEventListener("click", function () {
  document.querySelector(".sekcija-registracija").style.display = "flex";
});
document.getElementById("izadji2").addEventListener("click", function () {
  document.querySelector(".sekcija-registracija").style.display = "none";
  location.reload();
});

// za prijavu //

let prijava = document.querySelector(".sekcija-prijava");

let korisnickoIme = document.getElementById("korisnickoimePrijava");
let lozinka = document.getElementById("lozinkaPrijava");

let errorGlavni = document.querySelector(".errorGlavni");
let error = document.querySelector(".error");

const dugmePrijava = document.getElementById("dugme-prijava");

let firebaseUrl2 =
  "https://it-kursevi-projekat-default-rtdb.europe-west1.firebasedatabase.app";

let korisnici = {};

getAllKorisnici();

function getAllKorisnici() {
  let request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        korisnici = JSON.parse(request.responseText);
      } else {
        alert("Greska prilikom ucitavanja svih korisnika.");
      }
    }
  };
  request.open("GET", firebaseUrl2 + "/korisnici.json");
  request.send();
}

dugmePrijava.addEventListener("click", function (e) {
  e.preventDefault();

  let pErrorPrijava = document.querySelectorAll(".error");

  for (let p1 of pErrorPrijava) {
    p1.textContent = "";
  }

  let validnaPrijava = true;

  for (let k in korisnici) {
    let korisnik = korisnici[k];
    if (
      korisnickoIme.value === korisnik.korisnickoIme &&
      lozinka.value === korisnik.lozinka
    ) {
      prijava.style.display = "none";
      location.reload();
      return;
    }
    errorGlavni.textContent = "";
    errorGlavni.textContent = "Korisnicko ime i/ili lozinka nisu ispravni.";
    if (korisnickoIme.value.trim() === "" && lozinka.value.trim() === "") {
      errorGlavni.textContent = "Popunite sva polja!";
      validnaPrijava = false;
    } else if (korisnickoIme.value.trim() === "") {
      errorGlavni.textContent = "Korisničko ime ne sme biti prazno!";
      validnaPrijava = false;
    } else if (lozinka.value.trim() === "") {
      errorGlavni.textContent = "Lozinka ne sme biti prazna!";
      validnaPrijava = false;
    }
  }
});

// za registraciju //

let sekcijaRegistracija = document.querySelector(".sekcija-registracija");

let registracija = document.querySelector(".registracija");

let korisnickoIme2 = document.getElementById("korisnickoimeRegistracija");
let lozinkaRegistracija = document.getElementById("lozinkaRegistracija");
let emailRegistracija = document.getElementById("emailRegistracija");
let imeRegistracija = document.getElementById("imeRegistracija");
let prezimeRegistracija = document.getElementById("prezimeRegistracija");
let datumRegistracija = document.getElementById("datumRegistracija");
let adresaRegistracija = document.getElementById("adresaRegistracija");
let telefonRegistracija = document.getElementById("telefonRegistracija");

let errorGlavni2 = document.querySelector(".errorGlavni2");
let errorKorisnickoIme2 = document.querySelector(".errorKorisnickoIme2");
let errorLozinka2 = document.querySelector(".errorLozinka2");
let errorEmail = document.querySelector(".errorEmail");
let errorIme = document.querySelector(".errorIme");
let errorPrezime = document.querySelector(".errorPrezime");
let errorDatum = document.querySelector(".errorDatum");
let errorAdresa = document.querySelector(".errorAdresa");
let errorTelefon = document.querySelector(".errorTelefon");

const dugmeRegistracija = document.getElementById("dugme-registracija");

let today = new Date().toISOString().split("T")[0];
datumRegistracija.setAttribute("max", today);

dugmeRegistracija.addEventListener("click", function (e) {
  e.preventDefault();
  let validnaRegistracija = true;

  let pListaRegistracija = document.querySelectorAll(".errorRegistracija");

  for (let paragraph of pListaRegistracija) {
    paragraph.textContent = "";
  }

  if (korisnickoIme2.value.trim() === "") {
    errorKorisnickoIme2.textContent =
      "Popunite polje za unos korisnickog imena";
    validnaRegistracija = false;
  }
  if (lozinkaRegistracija.value.trim() === "") {
    errorLozinka2.textContent = "Popunite polje za unos lozinke";
    validnaRegistracija = false;
  }
  if (emailRegistracija.value.trim() === "") {
    errorEmail.textContent = "Popunite polje za unos email-a";
    validnaRegistracija = false;
  }

  let patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (patternEmail.test(emailRegistracija.value) === false) {
    errorEmail.textContent = "Format unete email adrese nije važeći";
    validnaRegistracija = false;
  }

  if (imeRegistracija.value.trim() === "") {
    errorIme.textContent = "Popunite polje za unos imena";
    validnaRegistracija = false;
  }
  if (prezimeRegistracija.value.trim() === "") {
    errorPrezime.textContent = "Popunite polje za unos prezimena";
    validnaRegistracija = false;
  }
  if (datumRegistracija.value === "") {
    errorDatum.textContent = "Popunite polje za unos datuma";
    validnaRegistracija = false;
  }

  if (adresaRegistracija.value.trim() === "") {
    errorAdresa.textContent = "Popunite polje za unos adrese";
    validnaRegistracija = false;
  }
  let pattern = /^(\([+]{0,1}[0-9]{3}\)){0,1}[-/ 0-9]*$/;
  if (pattern.test(telefonRegistracija.value) === false) {
    errorTelefon.textContent = "Unesite ispravan format broja telefona";
    validnaRegistracija = false;
  }

  if (telefonRegistracija.value === "") {
    errorTelefon.textContent = "Popunite polje za unos broja telefona";
    validnaRegistracija = false;
  }

  if (validnaRegistracija) {
    pListaRegistracija.textContent = "";
    sekcijaRegistracija.style.display = "none";
    alert("Uspešno ste se registrovali! 🙂");
    location.reload();
  }
});
