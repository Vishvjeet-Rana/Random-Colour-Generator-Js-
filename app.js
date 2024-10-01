let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let h4 = document.querySelector("h4");
  let randomColor = giveRandomColor();
  h4.innerText = randomColor;

  let colorBox = document.querySelector(".color-div");
  colorBox.style.backgroundColor = randomColor;
});

function giveRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;

  return color;
}
