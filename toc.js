let btn = document.querySelectorAll(".box");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset-btn")

const winPattern = [
      [0,1,2],
      [0,4,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [2,4,6],
      [3,4,5],
      [6,7,8]
]


const disabledBtn = () =>{
      for(let box of btn){
            box.disabled = true;
      }
} 
const enabledBtn = () =>{
      for(let box of btn){
            box.disabled = false;
            box.innerText = ""
      }
} 

const showWinner = (winner) =>{
      msg.innerText = `Congratulations🎉, Winner is ${winner}🎊`;
      msgContainer.classList.remove("hide");
      disabledBtn();
};
const checkWinner = () =>{
      for(let pattern of winPattern){
            
            let pos1Val = btn[pattern[0]].innerText;
            let pos2Val = btn[pattern[1]].innerText;
            let pos3Val = btn[pattern[2]].innerText;
            if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                  if(pos1Val === pos2Val && pos2Val === pos3Val){
                        console.log("winner" ,pos1Val)
                        showWinner(pos1Val);
                  }
            }

      }
}

let turno = true;
btn.forEach((box) => {
      box.addEventListener("click" , () =>{
            if(turno){
                  box.innerText = "O"
                  turno = false;
            }else{
                  box.innerText = "X"
                  turno = true; 
            }
            box.disabled = true;
            checkWinner();
      })
});

const resetGame = () => {
      turno = true;
      enabledBtn();
      msgContainer.classList.add("hide");
};

newBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);



