const categoriesEl = document.querySelector("ul#categories");

const itemsEl = categoriesEl.querySelectorAll("li.item");
console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach((element) => {
  const itemHeader = element.querySelector("h2");
  console.log(`Category: ${itemHeader.textContent}`);

  const nestedCategoriesEl = element.querySelectorAll("ul li");
  console.log(`Elements: ${nestedCategoriesEl.length}`);
});
