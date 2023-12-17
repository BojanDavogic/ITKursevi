let firebaseUrl =
  "https://it-kursevi-projekat-default-rtdb.europe-west1.firebasedatabase.app";

let kurseviUrl = firebaseUrl + "/kursevi.json";

let kursevi = {};

let tabelaKorpe = document.getElementById("tabelaKorpe");

let ukupno = document.getElementById("ukupna-cena");

let potvrdiKupovinu = document.getElementById("kupovina-kursa");

sviKursevi();

function sviKursevi() {
  let korpa = localStorage.getItem("korpa");
  if (korpa != null) {
    let ListaKorpe = JSON.parse(korpa);

    let ukupnacena1 = 0;

    for (let kurs of ListaKorpe) {
      dodajRed(tabelaKorpe, kurs.id, kurs);
      ukupnacena1 += kurs.cena;
    }
    ukupno.textContent = ukupnacena1;
  }
}

function dodajRed(tabelaKorpe, id, kurs) {
  let redKorpe = document.createElement("tr");
  tabelaKorpe.appendChild(redKorpe);

  let nazivTd = document.createElement("td");
  nazivTd.innerText = kurs.naziv;
  redKorpe.appendChild(nazivTd);

  let lekcijeTd = document.createElement("td");
  lekcijeTd.innerText = kurs.brojLekcija + " " + "lekcija";
  redKorpe.appendChild(lekcijeTd);

  let cenaTd = document.createElement("td");
  cenaTd.innerText = kurs.cena + " " + "rsd";
  redKorpe.appendChild(cenaTd);

  let izbrisiTd = document.createElement("td");
  let izbrisiBtn = document.createElement("button");
  izbrisiBtn.type = "button";
  izbrisiBtn.innerText = "Ukloni iz korpe";
  izbrisiBtn.addEventListener("click", function (e) {
    tabelaKorpe.removeChild(redKorpe);

    let korpa = localStorage.getItem("korpa");
    if (korpa != null) {
      let ListaKorpe = JSON.parse(korpa);
      let index = -1;
      for (let i = 0; i < ListaKorpe.length; i++) {
        if (ListaKorpe[i].id === id) {
          index = i;
          break;
        }
      }
      ukupnaCena = parseInt(ukupno.innerText);
      ukupno.textContent = ukupnaCena - ListaKorpe[index].cena;
      ListaKorpe.splice(index, 1);
      localStorage.setItem("korpa", JSON.stringify(ListaKorpe));
    }
  });
  izbrisiTd.appendChild(izbrisiBtn);
  redKorpe.appendChild(izbrisiTd);
}

let sekcijaKupovina = document.querySelector(".sekcija-dodajuKorpu");

potvrdiKupovinu.addEventListener("click", function (e) {
  let text = "Da li ste sigurni da želite da kupite ove kurseve?";
  if ((confirm(text) == true)) {
    sekcijaKupovina.style.display = "flex";
    setTimeout(function () {
      dodajukorpu.style.display = "none";
    }, 3000);
    setTimeout(function () {
      window.location.href = "pocetna.html";
    }, 3000);
  }
});
