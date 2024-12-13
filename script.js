const btnblack = document.getElementById("btnblack");
const btnwhite = document.getElementById("btnwhite");
const btnred = document.getElementById("btnred");
const btnyellow = document.getElementById("btnyellow");
const imgshirt = document.getElementById("imgshirt");
const h1 = document.getElementById("text");

btnblack.addEventListener("click", () => {
    h1.innerHTML = "<b>Shirt Black</b>";
    btnblack.style.borderColor = "#d1d5db";
    btnwhite.style.borderColor = "#fff";
    btnred.style.borderColor = "#fff";
    btnyellow.style.borderColor = "#fff";
    imgshirt.src = "imgs/shirtBlack.png";
});

btnwhite.addEventListener("click", () => {
    h1.innerHTML = "<b>Shirt White</b>";
    btnblack.style.borderColor = "#fff";
    btnwhite.style.borderColor = "#d1d5db";
    btnred.style.borderColor = "#fff";
    btnyellow.style.borderColor = "#fff";
    imgshirt.src = "imgs/shirtWhite.png";
});

btnred.addEventListener("click", () => {
    h1.innerHTML = "<b>Shirt Red</b>";
    btnblack.style.borderColor = "#fff";
    btnwhite.style.borderColor = "#fff";
    btnred.style.borderColor = "#d1d5db";
    btnyellow.style.borderColor = "#fff";
    imgshirt.src = "imgs/shirtRed.png";
});

btnyellow.addEventListener("click", () => {
    h1.innerHTML = "<b>Shirt Yellow</b>";
    btnblack.style.borderColor = "#fff";
    btnwhite.style.borderColor = "#fff";
    btnred.style.borderColor = "#fff";
    btnyellow.style.borderColor = "#d1d5db";
    imgshirt.src = "imgs/shirtYellow.png";
});
