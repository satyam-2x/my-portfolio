
const helloText = "Hello,";
const introText = "I Am ";
const nameText = "Satyam";

const helloEl = document.querySelector("#typing-text");
const introEl = document.querySelector("#typing-intro");
const nameEl = document.querySelector("#typing-name");

let i = 0, j = 0, k = 0;

function typeHello() {
  if (i < helloText.length) {
    helloEl.innerText += helloText[i++];
    setTimeout(typeHello, 250);
  } else {
    setTimeout(typeIntro, 500);
  }
}

function typeIntro() {
  if (j < introText.length) {
    introEl.innerText += introText[j++];
    setTimeout(typeIntro, 250);
  } else {
    setTimeout(typeName, 250);
  }
}

function typeName() {
  if (k < nameText.length) {
    nameEl.innerText += nameText[k++];
    setTimeout(typeName, 250);
  }
}

typeHello();



