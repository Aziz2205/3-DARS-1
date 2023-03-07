let son = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let submit = document.getElementById("btn")

function rndm() {
    return Math.floor(Math.random() * son.length);
}

submit.addEventListener("click", () => {
    let numClr = "#";
    for (i = 0; i < 6 ; i++ ){
        numClr += son[rndm()];
    }
});