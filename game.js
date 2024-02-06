let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newbtn=document.querySelector(".newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".heading1");

let turnO=true;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const disableboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText="";
  }
};
const showWinner=(winner)=>{
    msg.innerText=`Congraculation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkwinner=()=>{
    for(let pattern of winPattern){
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
if(pos1Val !="" && pos2Val !="" && pos3Val!="")
{
    if(pos1Val===pos2Val&& pos2Val===pos3Val){
        console.log("winner",pos1Val);
        showWinner(pos1Val);
    }
}}
};
const resetGame=()=>{
turnO=true;
enableboxes();
msgcontainer.classList.add("hide");
}
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click", resetGame);
