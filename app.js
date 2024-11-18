let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset");
let new_btn=document.querySelector("#new_btn");
let msg_container=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");

let turnO=true;

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];



boxes.forEach(function(box){
    box.addEventListener('click',function(){
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        
    checkwinner();
        });
});

function disabledboxes(){
    for(let box of boxes){
        box.disabled=true;
    }
}

function showwinner(winner){
    msg.innerText=`congratulation, winner is ${winner}`;
    msg_container.classList.remove("hide");
    disabledboxes();
}

function checkwinner() {
    for (let pattern of winpattern) {
        
        // console.log([pattern[0]],[pattern[1]],[pattern[2]]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
       
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val ===pos2val && pos2val ===pos3val){
                
                showwinner(pos1val);
            }
        }
        
    }
}

new_btn.addEventListener('click',resetGame);
reset_btn.addEventListener('click',resetGame);

function resetGame(){
    turnO=true;
    enableBoxes();
    msg_container.classList.add("hide");
}

function enableBoxes(){
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}