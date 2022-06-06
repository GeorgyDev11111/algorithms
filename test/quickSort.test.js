import quickSort from "../03_quickSort/index.js"
import newRandomArray from "./utils/createRandomArray.js"

const randomArray = newRandomArray(1,25)


console.group('quickSort:')
console.log('Previous: ', randomArray)
console.time('1000 итераций за')
for(let i = 0; i < 1000; i++){
  quickSort([...randomArray])
}
console.timeEnd('1000 итераций за')

console.log("Result: ", quickSort([...randomArray]))
console.groupEnd()