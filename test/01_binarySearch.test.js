import binaritySerch from '../01_binarySearch/index.js'
import newArray from './utils/createArray.js'

const bigData = newArray(1,720)

  // test
const wrap = () => {
  return function() {
    return binaritySerch(bigData,81)
  }
}

const example = wrap()

console.group('binarySearch:')
console.log('Previous: [', 1 ,'...', 720 ,']')
console.time('1000 итераций за')
for(let i = 0; i < 1000; i++){
  example() // 80
}
console.timeEnd('1000 итераций за')

console.log('Result: ', example()) // 80
console.groupEnd()