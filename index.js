const lexique = ["balkany", "sarkozy", "hortefeu", "patronat"];
const word = lexique[Math.floor(Math.random() * lexique.length)].toUpperCase();
const tableau = [];
const response = [];
const penality = 0;

console.log(word);



const stalineAppear = (function (situtation) {
  const container = document.getElementById("container");
  const StalineTrigered = document.createElement("img");
  StalineTrigered.src = `../assets/staline${situtation}.png`;
  StalineTrigered.className = "triggeredStalin";
  container.appendChild(StalineTrigered);
  // setTimeout(function () {
  //   document.querySelector("#container > img").remove();
  // }, 2000);
})
const char = function () {
  const container = document.getElementById("letterContainer");
  const blockChar = document.createElement("span");
  const sovietIcone = document.createElement("img");

  sovietIcone.src = "../assets/soviet.svg";
  sovietIcone.className = "sovietIcon";

  blockChar.className = "letter";

  container.appendChild(blockChar);

  blockChar.appendChild(sovietIcone);
};


for (var i = 0; i < word.length; i++) {
  console.log(word.charAt(i));
  tableau.push(word.charAt(i));
  response.push("");
  char();
}

console.log(response);
console.log(tableau);

const cases = document.getElementsByClassName("letter");

const submit = document.getElementById("submit");
submit.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();

  console.log(response);


  const subElement = document.getElementById("text").value.toUpperCase();

  if (
    subElement === tableau.join("") ||
    response.join("") === tableau.join("")
  ) {
    console.log("bien ouej");

    for (var i = 0; i < tableau.length; i++) {
      console.log(i + tableau.at(i));
      cases[i].innerText = tableau.at(i);
      cases[i].style.backgroundColor = "#ff0000";
      stalineAppear("Happy");
    }
  } else if (/^\w{1}$/.test(subElement)) {
    console.log(response);

    const letterIndex = [];

    const test = tableau.filter((el) => el === subElement);
    console.log("test " + subElement);

    let idx = tableau.indexOf(subElement);

    while (idx != -1) {
      letterIndex.push(idx);
      idx = tableau.indexOf(subElement, idx + 1);
      console.log(letterIndex);
    }
    for (var i = 0; i < letterIndex.length; i++) {
      cases[letterIndex.at(i)].innerText = subElement;
      cases[letterIndex.at(i)].style.backgroundColor = "#ff0000";
      console.log(letterIndex.at(i));
      console.log(response);
      response[letterIndex.at(i)] = subElement;
    }
    document.getElementById("text").value = "";
    if(response.join("") === tableau.join("")) {stalineAppear("Happy")}
  } else {
    console.log(penality);
  }

  console.log(response)
  // const letterIndex = [];
  // let idx = tableau.indexOf(subElement);
  // while (idx != -1) {
  //   letterIndex.push(idx);
  //   idx = tableau.indexOf(subElement, idx + 1);
  //   console.log(letterIndex);
  // }

  // for (var i = 0; i < letterIndex.length; i++) {
  //   cases[letterIndex.at(i)].innerText = subElement;
  //   cases[letterIndex.at(i)].style.backgroundColor = "#ff0000";
  // }
});
