function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");

const btnEl = bodyEl.querySelector(".js-change-color");
console.log(btnEl.textContent);

btnEl.addEventListener("click", changeColor);

console.log(getRandomHexColor());

function changeColor() {
  const color = (bodyEl.style.backgroundColor = getRandomHexColor());
  bodyEl.querySelector(".color").textContent = color;
}
