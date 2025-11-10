const inputEl = document.querySelector("input#name-input");

const outputEl = document.querySelector("span#name-output");

const outputTextContent = inputEl.addEventListener("input", (event) => {
  outputEl.textContent = event.currentTarget.value.trim();
  if (!inputEl.value || inputEl.value.trim() === "") {
    return (outputEl.textContent = "Anonymous");
  }
});
