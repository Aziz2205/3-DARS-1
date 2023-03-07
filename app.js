let son = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let submit = document.getElementById("submit")
let rang = document.querySelector(".color")

submit.addEventListener("click", function () {
    let numClr = "#";
    for (i = 0; i < 6 ; i++ ){
        numClr += son[rndm()];
    }
    rang.textContent = numClr;
    document.body.style.backgroundColor = numClr;
});

function rndm() {
    return Math.floor(Math.random() * son.length);
}