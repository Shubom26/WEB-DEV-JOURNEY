let random=Math.random()
alert(random)

let a = Number(prompt("Enter the first number"));
let b = Number(prompt("Enter the second number"));
let c = prompt("Enter the operation");

let obj={
    "+": "-",
    "-": "/",
    "/": "**",
    "*": "+",
}


if (random>0.1 ) {
    //Perform correct operatioons 
    alert(`${a}${c}${b}`)
    alert(`The result is ${eval(`${a}${c}${b}`)}`)
}
else{
    c=obj[c]
    alert(`${a}${c}${b}`)
    alert(`The result is ${eval(`${a}${c}${b}`)}`)
}