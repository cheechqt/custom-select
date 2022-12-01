const wrapper = document.querySelector(".selector-wrapper"),
  selectBtnBox = wrapper.querySelector(".select-btn-box"),
  selectBtn = selectBtnBox.querySelector(".select-btn"),
  curSelectedBtn = selectBtnBox.querySelector(".cur-selected"),
  resetCurSelectedBtn = selectBtnBox.querySelector(".reset-cur-selected"),
  searchInp = wrapper.querySelector("input"),
  options = wrapper.querySelector(".options");

let optionsItems = [
  {
    name: "metro1",
    icon: "metrored.svg",
  },
  {
    name: "metro2",
    icon: "metrored.svg",
  },
  {
    name: "sub3",
    icon: "metrored.svg",
  },
  {
    name: "sub4",
    icon: "metrored.svg",
  },
  {
    name: "testSearch(no img)",
  },
  {
    name: "where a u from?",
    icon: "metrored.svg",
  },
  {
    name: "where a u from?1",
    icon: "metrored.svg",
  },
  {
    name: "where a u from?2",
    icon: "metrored.svg",
  },
  {
    name: "where a u from?3",
    icon: "metrored.svg",
  },
  {
    name: "where a u from?4",
    icon: "metrored.svg",
  },
];
function addItems(selectedItem) {
  options.innerHTML = "";
  optionsItems.forEach(({ name, icon }) => {
    let isSelected =
      name === selectedItem?.lastElementChild.textContent ? "selected" : "";
    let img = icon ? `<img src="images/${icon}" alt="${name}" />` : "";
    let listItem = `<li onclick="updateName(this)" class="${isSelected}">${img}<p>${name}</p></li>`;
    options.insertAdjacentHTML("beforeend", listItem);
  });
}
addItems();

function updateName(selectedLi) {
  console.log(selectedLi);
  searchInp.value = "";
  addItems(selectedLi);
  wrapper.classList.remove("active");
  curSelectedBtn.classList.remove("hidden");
  resetCurSelectedBtn.classList.remove("hidden");
  selectBtn.classList.add("hidden");
  curSelectedBtn.innerHTML = selectedLi.innerHTML;
}

searchInp.addEventListener("keyup", () => {
  let arr = [];
  let searchWord = searchInp.value.toLowerCase();
  arr = optionsItems
    .filter(({ name }) => {
      return name.toLowerCase().startsWith(searchWord);
    })
    .map(({ name, icon }) => {
      let isSelected =
        name === selectBtn.firstElementChild.innerText ? "selected" : "";
      let img = icon ? `<img src="images/${icon}" alt="${name}" />` : "";
      return `<li onclick="updateName(this)" class="${isSelected}">${img}<p>${name}</p></li>`;
    })
    .join("");
  options.innerHTML = arr
    ? arr
    : `<p style="margin-top: 10px;">Oops! Not found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
curSelectedBtn.addEventListener("click", () =>
  wrapper.classList.toggle("active")
);
resetCurSelectedBtn.addEventListener("click", () => {
  searchInp.value = "";
  addItems();
  wrapper.classList.remove("active");
  selectBtn.classList.toggle("hidden");
  curSelectedBtn.classList.toggle("hidden");
  resetCurSelectedBtn.classList.toggle("hidden");
});
