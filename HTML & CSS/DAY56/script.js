console.log("Hello I am conditional statements in JavaScript");

let age = 3;
let grace = 2;

age += grace;

console.log("Age =",age);
console.log(age + grace);
console.log(age - grace);
console.log(age / grace);
console.log(age % grace);
console.log(age * grace);
console.log(age ** grace);


if(age==18)

    {
        console.log("You can Drive");
    }
else
     {
        console.log("You cannot drive");
     }
// checks if the values are same and of the same type 

// nested if else or if-else if-else

if(age==18)
{
    console.log("You can drive");
}
else if(age>18)
{ 
    console.log("You can drive");
}
else
{
    console.log("You cannot drive");
}


a=5;
b=6;
let c= a>b ? (a-b):(b-a);
console.log(c);

/*
translates to 
if(a>b)
{
    let c= a-b;
}
else
{
    let c= b-a;
}
*/
