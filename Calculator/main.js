let result = localStorage.getItem("calculation") || "";

let switches = document.getElementsByClassName("switch");
for (let themeSwitch of switches) {
  themeSwitch.addEventListener("click", function () {
    let theme = this.dataset.theme;
    setTheme(theme);
  });
}

document.querySelectorAll(".calc-button").forEach((calcButton, index) => {
  calcButton.addEventListener("click", () => {
    if (calcButton.innerHTML.length === 1 && calcButton.innerHTML !== "=") {
      updateResult(calcButton.innerHTML);
    }
  });
});

function updateResult(value) {
  if (result.length === 21) {
    alert("Sorry, the calculator cannot handle such large numbers");
  } else {
    if (value === "x") value = "*";
    result += value;
    displayResult();
  }
}

function displayResult() {
  document.querySelector(".result").innerHTML = result;
}

let resetButton = document.querySelector(".reset-button");
let delButton = document.querySelector(".del-button");
let resultButton = document.querySelector(".result-button");
resultButton.addEventListener("click", () => {
  expressionEval();
});
delButton.addEventListener("click", () => {
  result = result.slice(0, -1);
  displayResult();
});
resetButton.addEventListener("click", () => {
  result = "";
  displayResult();
});

function expressionEval() {
  try {
    result = eval(result);
    displayResult();
  } catch {
    result = "Error";
    displayResult();
    result = "";
  }
}

function setTheme(theme) {
  let themeLink = document.getElementById("switcher-id");
  themeLink.href = `./styles/${theme}.css`;
  localStorage.setItem("style", theme);
}

// Set the default theme to "Theme-1"
setTheme("Theme-1"); // Theme-1
