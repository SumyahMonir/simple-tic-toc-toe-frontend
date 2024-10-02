let boxes = document.querySelectorAll(".box");
let wmsg = document.querySelector(".msgCon");
let agbtn = document.querySelector(".rstbutn");
let playerX = true;
let other = document.querySelector(".other")
let newg = document.querySelector(".newbtn");
let msg = document.querySelector("#msg");

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let nofc=0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        nofc++;
        if (playerX) {
            playerX = false;
            box.innerText = "X";
        }
        else {
            playerX = true;
            box.innerText = "O";
        }
        box.disabled = true;
        checkwinner(nofc);
    })
})
let X = 0;
let O = 0;
let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let won =false;
const checkwinner = (nofc) => {
    for (let pattern of winPattern) {
        let yo1 = boxes[pattern[0]].innerText;
        let yo2 = boxes[pattern[1]].innerText;
        let yo3 = boxes[pattern[2]].innerText;

        if (yo1 != "") {
            if (yo1 === yo2 && yo2 === yo3) {
                if (yo1 === "X") { X++; p1.innerHTML = `${X}` }
                else { O++; p2.innerHTML = `${O}` }
                msg.innerText = `${yo2} Won!`;
                disableall();
                wmsg.classList.remove("hide");
                other.classList.remove("hide");
                won=true;
            }
        }
        if(nofc===9 && won==false){
            msg.innerText = `Draw`;
            wmsg.classList.remove("hide");
            other.classList.remove("hide");
        }
    }
}
const disableall = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
newg.addEventListener("click", () => {
    wmsg.classList.add("hide");
    other.classList.add("hide");
    clearall();
    nofc=0;
    won = false;
})
const clearall = () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
}
agbtn.addEventListener("click", () => {
    wmsg.classList.add("hide");
    clearall();
    nofc=0;
    won = false;
})