const buttons = document.querySelectorAll(".button"); // returns NodeList
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    const e = event.target.id;
    switch (e) {
      case "cyan":
        body.style.backgroundColor = e;
        break;
      case "slateblue":
        body.style.backgroundColor = e;
        break;
      case "yellow":
        body.style.backgroundColor = e;
        break;
      case "salmon":
        body.style.backgroundColor = e;
        break;
      default:
        body.style.backgroundColor = "white";
        break;
    }
  });
});
