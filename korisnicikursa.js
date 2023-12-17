let firebaseUrl =
  "https://it-kursevi-projekat-default-rtdb.europe-west1.firebasedatabase.app";

let korisniciKursa = {};

getAllKorisnici();

function getAllKorisnici() {
  let request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {

        korisniciKursa = JSON.parse(request.responseText);

        for (let id in korisniciKursa) {
          let korisnik = korisniciKursa[id];

          appendKorisniciRow("sviKorisnici", id, korisnik);
        }
      } else {
        alert("Greska prilikom ucitavanja svih korisnika.");
      }
    }
  };
  request.open("GET", firebaseUrl + "/korisnici.json");
  request.send();
}

function appendKorisniciRow(tBody, id, korisnik) {
  let korisniciRow = document.createElement("tr");

  let korisnickoimeTd = document.createElement("td");
  korisniciRow.appendChild(korisnickoimeTd);
  korisnickoimeTd.classList.add("row1");
  korisnickoimeTd.setAttribute("data-label", "Korisničko ime:");
  const newElement = document.createElement("a");

  newElement.innerText = korisnik.korisnickoIme;

  newElement.href = "detalji-korisnika.html?id=" + id;
  korisnickoimeTd.appendChild(newElement);

  let emailTd = document.createElement("td");
  emailTd.innerText = korisnik.email;
  korisniciRow.appendChild(emailTd);
  emailTd.classList.add("row2");
  emailTd.setAttribute("data-label", "Email:");

  let datumRodjenjaTd = document.createElement("td");
  datumRodjenjaTd.innerText = korisnik.datumRodjenja;
  korisniciRow.appendChild(datumRodjenjaTd);
  datumRodjenjaTd.classList.add("row3");
  datumRodjenjaTd.setAttribute("data-label", "Datum rođenja:");

  document.getElementById(tBody).appendChild(korisniciRow);
}
