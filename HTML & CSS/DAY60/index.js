console.log("This is String tutorial");
let a="shubom";
console.log(a[4]);
console.log(a[3]);
console.log(a[2]);
console.log(a[1]);
console.log(a[0]);

console.log(a.length);

let real_name="Shubom"
let friend="Jitesh"
console.log("His name is "+real_name + " His friend's name is "+friend);
console.log(`His real name is ${real_name} and his friends name is ${friend}`)

// Escape Sequence 
// \n= newline
// \t= tab
// \\= backslash
// \r=cariage return
let b=" Shubom Deb"
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);

// Slicing a String
console.log(b.slice(1,4));
console.log(b.slice(0,6));
console.log(b.slice(4));
console.log(b.replace("sh","xx"))
console.log(a.concat(b," is"," great"))
console.log(b.trim())
// string is immutable




