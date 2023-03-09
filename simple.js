

let rang = ["green", "red", "pink", "blue", "rgba(133,122,200)", "#f15025", "#000", "#fff", "#0000ff", "#45a465", "#7D45A3", "#7AA345", "#A34593", "rgba(0,255,0)", "rgba(0,0,255)"]
let sub = document.getElementById("submit");
let clr = document.querySelector(".color");

sub.addEventListener("click", function () {
    let ran = ranNum();

    document.body.style.backgroundColor = rang[ran];
    clr.textContent = rang[ran];
});

function ranNum() {
    return Math.floor(Math.random() * rang.length)
}