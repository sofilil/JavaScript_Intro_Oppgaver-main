// Oppgave 1

const remove = document.getElementById("remove");
const removeBtn = document.querySelector("#remove-btn");

removeBtn.addEventListener("click", () => remove.remove());

// Oppgave 2

const change = document.getElementById("change");
const changeBtn = document.querySelector("#change-btn");

changeBtn.addEventListener("click", () => change.innerHTML = "Dette funker!");

// Oppgave 3

const input = document.getElementById("input");
const textInput = document.getElementById("input-text");

input.addEventListener("input", () => {
    textInput.innerHTML = input.value;
    
    if(textInput.innerHTML === "") {
        textInput.innerHTML = "Skriv noe her";
    }
});

// Oppgave 4
const myList = ['item one', 'item two', 'item three'];

const ul = document.querySelector("#ul");
const writeListBtn = document.getElementById('write-list');

writeListBtn.addEventListener("click", () => {
    for(let item of myList) {
        let li = document.createElement('li');
        li.innerText = item;
        ul.appendChild(li);
    }
});

// Oppgave 5

const selectTag = document.getElementById("select");
const textToElement = document.getElementById("text");
const createElementBtn = document.getElementById("create");

createElementBtn.addEventListener("click", () => {
    let createElement = document.createElement(selectTag.value);
    createElement.innerHTML = textToElement.value;
    document.getElementById("placeholder").appendChild(createElement);
  });

// Oppgave 6

const unorderedList = document.getElementById("list");
const removeLiButton = document.getElementById("remove-li");

removeLiButton.addEventListener("click", () => {
  if (unorderedList.childElementCount > 0) {
    unorderedList.removeChild(unorderedList.children[0]);
  }
});

// Oppgave 7

const nameInput = document.getElementById("name");

function disable() {
  const buttonToDisable = document.getElementById("order");

  if (nameInput.value.length > 4) {
    buttonToDisable.disabled = true;
    buttonToDisable.style.border = "1px solid red";
  } else {
    buttonToDisable.disabled = false;
    buttonToDisable.style.border = "1px solid black";
  }
};

nameInput.addEventListener("input", disable);

// Oppgave 8

const ulTask8 = document.querySelector(".children");

document.getElementById("color").addEventListener("click", () => {
  for (let i = 0; i < ulTask8.childElementCount; i++) {
    i % 2 
    ? ulTask8.children[i].style.border = "3px solid pink" 
    : ulTask8.children[i].style.border = "3px solid green";
  }
});