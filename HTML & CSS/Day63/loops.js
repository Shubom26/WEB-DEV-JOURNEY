let a=[1,9,3,23,67,99]

// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     console.log(element)
// }
// For each
// a.forEach((value, index, arr)=>{
//     console.log(value,index,arr)
// })

// For of
let obj={
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj,key)){
        const element= obj[key];
        console.log(key,element)
    }
}
