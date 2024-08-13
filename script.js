let arr=Array(9).fill(null);
console.log(arr);
const container=document.querySelector(`.container`);
const boxes=document.getElementsByClassName(`box`);
console.log(boxes);
let arr2=Array.from(boxes)
console.log(arr2);
let cur="X";
let count=0;
arr2.forEach((val)=>{
    val.addEventListener(`click`,(e)=>{
        const id=Number(e.target.id);
        if(arr[id]){
            return;
        }
        else{
            cur= cur==="X"?"O":"X";
            arr[id]=cur;
            e.target.innerText=cur;
            count++;
        }
        console.log(arr);
        
        if(
            (arr[0]==="O" && arr[0]===arr[1] && arr[1]===arr[2]) ||
            (arr[3]==="O" && arr[3]===arr[4] && arr[4]===arr[5]) ||
            (arr[6]==="O" && arr[6]===arr[7] && arr[7]===arr[8]) ||
            (arr[0]==="O" && arr[0]===arr[3] && arr[3]===arr[6]) ||
            (arr[1]==="O" && arr[1]===arr[4] && arr[4]===arr[7]) ||
            (arr[2]==="O" && arr[2]===arr[5] && arr[5]===arr[8]) ||
            (arr[0]==="O" && arr[0]===arr[4] && arr[4]===arr[8]) ||
            (arr[2]==="O" && arr[2]===arr[4] && arr[4]===arr[6])
        ){
            // document.write(`Player 1 Won!`)
            container.innerText=`Player 1 Won!`;
            return;
        }
        else if(
            (arr[0]==="X" && arr[0]===arr[1] && arr[1]===arr[2]) ||
            (arr[3]==="X" && arr[3]===arr[4] && arr[4]===arr[5]) ||
            (arr[6]==="X" && arr[6]===arr[7] && arr[7]===arr[8]) ||
            (arr[0]==="X" && arr[0]===arr[3] && arr[3]===arr[6]) ||
            (arr[1]==="X" && arr[1]===arr[4] && arr[4]===arr[7]) ||
            (arr[2]==="X" && arr[2]===arr[5] && arr[5]===arr[8]) ||
            (arr[0]==="X" && arr[0]===arr[4] && arr[4]===arr[8]) ||
            (arr[2]==="X" && arr[2]===arr[4] && arr[4]===arr[6])
        ){
            // document.write("Player 2 Won!")
            container.innerText=`Player 2 Won!`;
            return;
        }
        else if(count===9){
            container.innerText=`It's a tie!`;
        }
    })
})
