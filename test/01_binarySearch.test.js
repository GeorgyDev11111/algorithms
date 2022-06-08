import binaritySerch from '../01_binarySearch/index.js'
import newArray from './utils/createArray.js'

const bigData = newArray(1,720)

  // test
const wrap = (list) => (item) => (
  binaritySerch(list,item)
)

const example = wrap(bigData)

console.group('binarySearch:')
console.log('Previous: [', 1 ,'...', 720 ,']')
console.time('1000 итераций за')
for(let i = 0; i < 1000; i++){
  example(81) // 80
}
console.timeEnd('1000 итераций за')

console.log('Result: ', example(56)) // 55
console.groupEnd()