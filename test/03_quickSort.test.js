import quickSort from '../03_quickSort/index.js'
import newRandomArray from './utils/createRandomArray.js'

const randomArray = newRandomArray(1,25)

  // test
const wrap = (arr) => () => (
  quickSort([...arr])
)

const example = wrap(randomArray)

console.group('quickSort:')
console.log('Previous: ', randomArray)
console.time('1000 итераций за')
for(let i = 0; i < 1000; i++){
  example()
}
console.timeEnd('1000 итераций за')

console.log('Result: ', example())
console.groupEnd()