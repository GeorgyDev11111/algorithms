import {selectionSort} from "../02_selectionSort/index.js"
import newRandomArray from "./utils/createRandomArray.js"

const randomArray = newRandomArray(1,25)


console.group('selectionSort:')
console.log('Previous: ', randomArray)
console.time('1000 итераций за')
for(let i = 0; i < 1000; i++){
  selectionSort([...randomArray])
}
console.timeEnd('1000 итераций за')

console.log("Result: ", selectionSort([...randomArray]))
console.groupEnd()