const categoriesList = document.querySelector("ul#categories").children;
console.log(`Number of categories: ${categoriesList.length}`);

[...categoriesList].forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
