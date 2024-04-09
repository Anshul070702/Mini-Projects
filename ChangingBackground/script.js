// Async in Javascript
/* 
    The setInterval() method, offered on the Window and WorkerGlobalScope interfaces,   
    repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
*/
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
function changeBgColor() {
  document.body.style.backgroundColor = randomColor();
}
let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  //Prevents overwrite => Good Practice
  intervalId = null;
};
document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
