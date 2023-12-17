let firebaseUrl =
  "https://it-kursevi-projekat-default-rtdb.europe-west1.firebasedatabase.app";

let kurseviUrl = firebaseUrl + "/kursevi.json";

let kurseviLista = [];
let kursevi = [];
let sviKursevi = document.getElementById("sviKursevi");



// sekcija pretrage kursa //

const searchPolje = document.getElementById("search-polje");
let dugmePretrazi = document.getElementById("btn-search");

let request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (this.readyState == 4) {
    if (this.status == 200) {
      kursevi = JSON.parse(this.responseText);

      for (let id in kursevi) {
        let trenutniKurs = kursevi[id];
        napraviKarticu(id, trenutniKurs);
      }

      dugmePretrazi.addEventListener("click", function (e) {
        sviKursevi.innerHTML = "";

        for (let id in kursevi) {
          let kurs = kursevi[id];
          if (kurs.naziv.toLowerCase().includes(searchPolje.value.toLowerCase())) {
            napraviKarticu(id, kurs);
          }
          else if (kurs.autor.toLowerCase().includes(searchPolje.value.toLowerCase())) {
            napraviKarticu(id, kurs);
          }
          else if (kurs.kategorija.toLowerCase().includes(searchPolje.value.toLowerCase())) {
            napraviKarticu(id, kurs);
          }
        }

        markiraj();
      });
    } else {
      alert("Greska prilikom dobavljanja podataka");
    }
  }
};

request.open("GET", kurseviUrl);
request.send();

function napraviKarticu(id, trenutniKurs) {
  let sablonKartice = kreirajSablon();

  sablonKartice.querySelector("a").innerText = trenutniKurs.naziv;
  sablonKartice
    .querySelector("a")
    .setAttribute("href", "stranica-kursa.html?id=" + id);
  sablonKartice.querySelector("p").innerText = trenutniKurs.kratakOpis;
  sablonKartice.querySelector(".card-autor").innerText = trenutniKurs.autor;
  sablonKartice.querySelector(".card-kategorija").innerText = trenutniKurs.kategorija;
  sablonKartice.querySelector("img").setAttribute("src", trenutniKurs.slika);

  sviKursevi.appendChild(sablonKartice);
}

function kreirajSablon() {
  let sablonKartice = document.createElement("div");
  sablonKartice.classList.add("col");
  sablonKartice.innerHTML =
    '<div class="card h-100"><img class="card-img-top" /><div class="card-body"><h5 class="card-title"><a class="link_do_kursa"></a></h5><p class="card-text"></p><p class="card-autor"></p><p class="card-kategorija"></p></div></div>';
  return sablonKartice;
}

function markiraj() {
  let listaNaziva = document.querySelectorAll(".link_do_kursa");
  let listaAutora = document.querySelectorAll(".card-autor");
  let listaKategorija = document.querySelectorAll(".card-kategorija");

  let searchText = document.getElementById("search-polje").value;
  let regExp = new RegExp(searchText, "gi");

  if (searchText !== "") {
    for (let i = 0; i < listaNaziva.length; i++) {
      listaNaziva[i].innerHTML = listaNaziva[i].innerHTML.replaceAll(regExp, "<mark>$&</mark>");
      listaAutora[i].innerHTML = listaAutora[i].innerHTML.replaceAll(regExp, "<mark>$&</mark>");
      listaKategorija[i].innerHTML = listaKategorija[i].innerHTML.replaceAll(regExp, "<mark>$&</mark>");
    }
  }
}