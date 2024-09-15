// Hex Code Generator
const hexContainer=document.querySelector(".hex-container");
const hexBtn = document.querySelector(".hex-btn");
const hexCode = document.querySelector(".hex-code");
const copyClipboard = document.querySelector(".hex-copy");

hexContainer.style.backgroundColor = "#8F9E9D";
hexCode.innerHTML = "#8F9E9D";

function generateColor() {
  color = "#";
  let colors = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * colors.length);
    color += colors.charAt(index);
  }
  hexContainer.style.backgroundColor = color;
  hexCode.textContent = color;
}

function copyToClipboard() {
  navigator.clipboard.writeText(hexCode.textContent);
  alert("Hex color copied to clipboard");
}

hexBtn.addEventListener("click", () => generateColor());

copyClipboard.addEventListener("click", () => copyToClipboard());


// RGB Color Generator

const rgbContainer=document.querySelector(".rgb-container");
const rgbBtn=document.querySelector(".rgb-btn");
const redRange=document.querySelector("#red");
const greenRange=document.querySelector("#green");
const blueRange=document.querySelector("#blue");
const rgbCode=document.querySelector(".rgb-code");
const rgbCopy=document.querySelector(".rgb-copy");

function rgbColorGenerator(){
  let getRed=redRange.value;
  let getBlue=blueRange.value;
  let getGreen=greenRange.value;

  rgbCode.textContent=`rgb(${getRed}, ${getGreen}, ${getBlue})`;
  rgbContainer.style.backgroundColor=`rgb(${getRed}, ${getGreen}, ${getBlue})`;
}

function copyRGBToClipboard(){
  navigator.clipboard.writeText(rgbCode.textContent);
  alert("Rgb Color is copied to clipboard");
}

rgbBtn.addEventListener('click',rgbColorGenerator);
rgbCopy.addEventListener('click',copyRGBToClipboard)
