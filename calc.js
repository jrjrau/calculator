let calculation = '';
let operated = false;

function operate(x,y,z){
    switch(y){
        case '+':
            return add(x,z);
        case '-':
            return subtract(x,z);
        case '*':
            return multiply(x,z);
        case '/':
            return divide(x,z);
    }
}
function add(x,z){
    return x+z
}
function subtract(x,z){
    return x-z
}
function multiply(x,z){
    return x*z
}
function divide(x,z){
    return x/z
}

const numButtons = document.querySelector("#numButtons");
const display = document.querySelector("#displaywindow");
const equals = document.querySelector("#equals")
const clear = document.querySelector("#clear")

function buildCalc(){
    for (let i = 0; i < 14; i++){
        const div = document.createElement("div");
        div.classList.add("grid-item")
        div.style.flexBasis = `calc(100%/3)`;
        div.style.border = '1px solid black';
        switch (i){
            case 0:
                div.textContent='+';
                div.style.flexBasis = `calc(100%/4)`;
                div.classList.add("operator")

                break
            case 1:
                div.textContent='-';
                div.style.flexBasis = `calc(100%/4)`;
                div.classList.add("operator")
                break
            case 2:
                div.textContent='*';
                div.style.flexBasis = `calc(100%/4)`;
                div.classList.add("operator")
                break
            case 3:
                div.textContent='/';
                div.style.flexBasis = `calc(100%/4)`;
                div.classList.add("operator")
                break
            case 13:
                div.textContent=0;
                div.style.textAlign="center";
                div.style.display = "flex";
                div.style.alignItems= "center";
                div.style.justifyContent= "center";
                break
            default:
                div.textContent=(i-3)
                break

        }

        div.id = div.textContent;
        numButtons.appendChild(div);

        div.addEventListener("click", function (e) {
            let background = e.target.style.background
            e.target.style.background = 'gray'
            console.log(e.target.id)
            if (['+', '-', '/', '*'].includes(e.target.id)) {
                console.log('triggered on ', operated)
                if (operated === true){
                    let formula = calculation
                    solve(formula)
                }
                if (operated === false){
                    operated = true
                }

            }else{
                console.log(operated)
                console.log('target ',e.target.id)
            }

            calculation += e.target.id;
            display.value = calculation;
            console.log('78: ',calculation)

            setTimeout(function() {
                e.target.style.background = background;
            }, 100);



        })
    }}

equals.addEventListener("click", function (e) {
    let background = e.target.style.background
    e.target.style.background = 'gray'

            //console.log(calculation)
            let formula = calculation
            solve(formula)

            setTimeout(function() {
                e.target.style.background = background;
            }, 100);



})

clear.addEventListener("click", function (e) {
    let background = e.target.style.background
    e.target.style.background = 'gray'

            //console.log(calculation)
            calculation = '';
            display.value = '';
            operated = false;

            setTimeout(function() {
                e.target.style.background = background;
            }, 100);



})

buildCalc()

function solve(formula){
    function parseCalculation(input) {
        const regex = /(\d+)([+\-*/])(\d+)/;
        const match = input.match(regex);

        if (!match) {
            throw new Error('Invalid input format');
        }

        const x = parseFloat(match[1]);
        const y = match[2];
        const z = parseFloat(match[3]);

        return { x, y, z };
    }

    const { x, y, z } = parseCalculation(formula);

    let answer = operate(x,y,z)
    display.value = answer;
    console.log('answer is ',answer)
    calculation = answer
    console.log('calculation is ', calculation)
    operated = false;
    return calculation
}
