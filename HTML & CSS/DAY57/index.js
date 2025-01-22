// Tutorial on Loops
// FOR LOOP
let a=1;
for (let i = 0; i < 10; i++) {
    console.log(a+i);  
}

let obj={
    name:"John",
    role:"Programer",
    company:"SD pvt. ltd."
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element) 
    }
}
for (const c of "Shubom Deb is a good boy") {
    console.log(c);
}

// WHILE LOOP
let i = 0;
while (i<4){
    console.log(i);
    i++;
}

console.log("Do while loop");
//Do Whle Loop
let j=6;
do {
    console.log(j);
    j++;
} while (j<5);