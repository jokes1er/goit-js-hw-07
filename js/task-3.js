const inputEl = document.querySelector("input#name-input");

const outputEl = document.querySelector("span#name-output");

const outputTextContent = inputEl.addEventListener("input", (event) => {
  const trimmedValue = inputEl.value.trim();
  outputEl.textContent = "Anon";

  if (trimmedValue === "") {
    outputEl.textContent = "Anonymous";
  } else {
    outputEl.textContent = trimmedValue;
  }
});
