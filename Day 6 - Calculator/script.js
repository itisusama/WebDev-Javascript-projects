let input = document.getElementById("text-box");
let buttons = document.querySelectorAll("button");

let result = "";
// getting all the buttons in an array
let buttonArr = Array.from(buttons);
buttonArr.forEach(button => {
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            result = eval(result);
            input.value = result;
        }

        else if(e.target.innerHTML == 'C'){
            result = "";
            input.value = result;
        }
        else if(e.target.innerHTML == '+/-'){
            result = result.substring(0, result.length-1);
            input.value = result;
        }
        else{
            result += e.target.innerHTML;
            input.value = result;
        }
    })
})