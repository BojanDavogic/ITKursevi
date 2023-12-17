let firebaseUrl =
  "https://it-kursevi-projekat-default-rtdb.europe-west1.firebasedatabase.app";

let kurs = {};

let parametri = new URLSearchParams(window.location.search);
let id = parametri.get("id");

let nazivKursa = document.getElementById("naziv-kursa");
let idKursa = document.getElementById("id-kursa");
let autorKursa = document.getElementById("autor-kursa");
let datumKursa = document.getElementById("datum-kursa");
let opisKursa = document.getElementById("opis-kursa");
let kratakOpisKursa = document.getElementById("kratakopis-kursa");
let cenaKursa = document.getElementById("cena-kursa");
let brojlekcijaKursa = document.getElementById("brojlekcija-kursa");
let kategorijaKursa = document.getElementById("kategorija-kursa");
let jezikKursa = document.getElementById("jezik-kursa");
let ocenaKursa = document.getElementById("ocena-kursa");
let brojkorisnikaKursa = document.getElementById("brojkorisnika-kursa");
let sertifikovanKurs = document.getElementById("sertifikovan");
let nesertifikovanKurs = document.getElementById("ne-sertifikovan");
let obrisiPodatke = document.getElementById("reset");
let sacuvajPodatke = document.getElementById("submit");

let danasnjiDatum = new Date().toISOString().split("T")[0];
datumKursa.setAttribute("max", danasnjiDatum);

var nazivKursa2 = {};
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (this.readyState == 4) {
    if (this.status == 200) {
      let kursevi = JSON.parse(this.responseText);
      nazivKursa.setAttribute("value", kursevi.naziv);
      idKursa.setAttribute("value", kursevi.id);
      autorKursa.setAttribute("value", kursevi.autor);
      datumKursa.setAttribute("value", kursevi.datumIzmene);
      opisKursa.innerText = kursevi.opis;
      kratakOpisKursa.innerText = kursevi.kratakOpis;
      cenaKursa.setAttribute("value", kursevi.cena);
      brojlekcijaKursa.setAttribute("value", kursevi.brojLekcija);

      selektovanaKategorija(kursevi.kategorija);
      selektovanJezik(kursevi.jezik);

      ocenaKursa.setAttribute("value", kursevi.prosecnaOcena);
      brojkorisnikaKursa.setAttribute("value", kursevi.brojKorisnika);

      cekiranSertifikat(kursevi.sertifikovan);
    } else {
      alert("Greska prilikom dobavljanja podataka");
    }
  }
};

request.open("GET", firebaseUrl + "/kursevi/" + id + ".json");
request.send();

function selektovanaKategorija(kategorija) {
  let opcija1 = document.getElementById("web");
  let opcija2 = document.getElementById("objektno");
  let opcija3 = document.getElementById("baze");
  let opcija4 = document.getElementById("graficki");

  if (opcija1.innerText == kategorija) {
    opcija1.setAttribute("selected", "");
  } else if (opcija2.innerText == kategorija) {
    opcija2.setAttribute("selected", "");
  } else if (opcija3.innerText == kategorija) {
    opcija3.setAttribute("selected", "");
  } else {
    opcija4.setAttribute("selected", "");
  }
}

function selektovanJezik(jezik) {
  let opcija1 = document.getElementById("srpski");
  let opcija2 = document.getElementById("engleski");

  if (opcija1.innerText == jezik) {
    opcija1.setAttribute("selected", "");
  } else {
    opcija2.setAttribute("selected", "");
  }
}

function cekiranSertifikat(sertifikat) {
  let jeste = document.getElementById("jestesertifikovan");
  let nije = document.getElementById("nijesertifikovan");

  if (jeste.innerText == sertifikat) {
    sertifikovanKurs.setAttribute("checked", "");
  } else {
    nesertifikovanKurs.setAttribute("checked", "");
  }
}

obrisiPodatke.addEventListener("click", function (e) {
  let poruka = confirm("Da li stvarno želite da obrišete podatke?");
  if (poruka == true) {
    alert("Obrisali ste podatke.");
    document.location.href = "stranica-kursa.html?id=" + id;
  }
});

sacuvajPodatke.addEventListener("click", function (e) {
  let errorNaziv = document.getElementById("errorNazivKursa");
  let errorAutor = document.getElementById("errorAutorKursa");
  let errorDatumIzmene = document.getElementById("errorDatumIzmeneKursa");
  let errorKratakOpis = document.getElementById("errorKratakOpisKursa");
  let errorCena = document.getElementById("errorCenaKursa");
  let errorBrojLekcija = document.getElementById("errorBrojLekcijaKursa");
  let errorKategorija = document.getElementById("errorKategorijaKursa");
  let errorSertifikat = document.getElementById("errorSertifikatKursa");

  let validniPodaci = true;

  let pLista = document.querySelectorAll(".errorKurs");

  for (let p of pLista) {
    p.textContent = "";
  }

  if (nazivKursa.value.trim() === "") {
    errorNaziv.textContent = "Naziv kursa ne sme biti prazno polje!";
    validniPodaci = false;
  }

  if (nazivKursa.value.trim().length > 40) {
    errorNaziv.textContent = "Naziv kursa ne sme imati više od 40 karaktera!";
    validniPodaci = false;
  }

  if (autorKursa.value.trim() === "") {
    errorAutor.textContent = "Autor kursa ne sme biti prazno polje!";
    validniPodaci = false;
  }

  if (autorKursa.value.trim().length > 30) {
    errorAutor.textContent = "Autor kursa ne sme imati više od 30 karaktera!";
    validniPodaci = false;
  }

  if (datumKursa.value === "") {
    errorDatumIzmene.textContent =
      "Datum poslednje izmene ne sme biti prazno polje!";
    validniPodaci = false;
  }

  if (kratakOpisKursa.value.trim() === "") {
    errorKratakOpis.textContent = "Kratak opis kursa ne sme biti prazno polje!";
    validniPodaci = false;
  }

  if (kratakOpisKursa.value.length > 300) {
    errorKratakOpis.textContent =
      "Kratak opis ne može imati više od 300 karaktera!";
    validniPodaci = false;
  }

  if (cenaKursa.value.trim() === "") {
    errorCena.textContent = "Cena kursa ne sme biti prazno polje!";
    validniPodaci = false;
  }

  if (parseInt(cenaKursa.value) < 1) {
    errorCena.textContent = "Cena ne sme biti manja od 1";
    validniPodaci = false;
  }

  if (brojlekcijaKursa.value < 1) {
    errorBrojLekcija.textContent = "Broj lekcija ne sme biti manji od 1!";
    validniPodaci = false;
  }

  if (brojlekcijaKursa.value > 50) {
    errorBrojLekcija.textContent = "Broj lekcija ne može biti veći od 50!";
    validniPodaci = false;
  }

  if (kategorijaKursa.value === "") {
    errorKategorija.textContent = "Kategorija mora biti izabrana!";
    validniPodaci = false;
  }

  if (sertifikovanKurs.value === "" && nesertifikovanKurs.value === "") {
    errorSertifikat.textContent = "Čekirajte jedno polje!";
    validniPodaci = false;
  }

  if (validniPodaci) {
    alert("Uspešno ste izmenili kurs!!");
    window.location.href = "stranica-kursa.html?id=" + id;
  } else {
    alert("Neuspešna izmena kursa. Proverite unete podatke.");
  }
});
