// Arrays
let arr=[1,3,5,6,76,89]
console.log(arr)
console.log(arr.length)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
arr[0]=566
console.log(arr)
console.log(arr,typeof(arr))
// tostring 
console.log(arr.toString())
// join
console.log(arr.join(" and "))
// pop
let a=[1,3,2,4,5,6]
// console.log(a)
// console.log(a.pop())
// push
console.log(a.push(56))
console.log(a)

// shift is pop from the rear
console.log(a.shift())
// unshift is push from the rear
console.log(a.unshift("Jack"))
console.log(a)
// delete
delete a[6]
console.log(a,a.length)

let a1=[1,2,3,4]
let a2=[5,6,7,8]
let a3=[9,10,11,12]

console.log(a1.concat(a2,a3))
let a4=a1.concat(a2,a3)
console.log(a4.sort())

// splice
let numbers=[1,2,3,4,5]
console.log(numbers.splice(1,2,222,333))
// splice(index,delete count,item1,item2)
console.log(numbers)
// reverse
console.log(numbers.reverse())


