// Dodaj kod
const color = document.querySelector('#color');
const board = document.querySelector('#board');

const quality = document.querySelector('#quality');
let output = document.querySelector('#demo');
output.innerHTML = "Przesuń suwak";

quality.oninput = function() { 
  switch (quality.value) {
    case "0":
      output.innerHTML = "Przesuń suwak";
        break;
    case "1":
      output.innerHTML = "Niska";
      break;
    case "2":
      output.innerHTML = "Średnia";
      break;
    case "3":
      output.innerHTML = "Wysoka";
      break;
    case "4":
      output.innerHTML = "Bardzo wysoka";
      break;
}
}

let p = 0; //ilość bloków 
let size = 0; //rozmiar pojedynczego bloku 
let yourPaint = color.value;

quality.addEventListener("change", () => {
board.innerHTML = "";
switch (quality.value) {
      case "0":
        null.dummy; //gdy uzytkownik na nowo przesunie suwak na poczatek to skrypt dalej nie jest wykonywany
        break;
      case "1":
        size = 20;
        p = 25;
        break;
      case "2":
        size = 10;
        p = 100;
        break;
      case "3":
        size = 5;
        p = 400;
        break;
      case "4":
        size = 4;
        p = 625;
        break;
}

for (let i = 0; i < p; i++) { //pętla wypełnia blokami board 
  const block = document.createElement("div");
  block.style.width = size+"%";
  block.style.height = size+"%";
  block.style.float = "left";
  block.classList.add("blocks");
  board.appendChild(block);
}
});

color.addEventListener("change", () => {
  yourPaint = color.value;
})

board.addEventListener("click", (e) => {
  if (e.target.classList.contains("blocks")) {
    e.target.style.backgroundColor = yourPaint;
}
})