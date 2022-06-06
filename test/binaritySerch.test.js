import binaritySerch from "../01_binarySearch/index.js"
import newArray from "./utils/createArray.js"

const bigData = newArray(1,720)


console.group("binarySearch:")
console.log('Previous: [', 1 ,'...', 720 ,']')
console.time('1000 итераций за')
for(let i = 0; i < 1000; i++){
  binaritySerch(bigData,81) // 80
}
console.timeEnd('1000 итераций за')

console.log("Result: ", binaritySerch(bigData,81)) // 80
console.groupEnd()