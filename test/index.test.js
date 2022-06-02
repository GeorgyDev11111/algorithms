const {binaritySerch,selectionSort,quickSort,findIndexLess} = require('../index')

describe('№1',() => {
  let myArr

  beforeEach(() => {
    myArr = [1,2,3,4,5,6,7,8,9]
  })

  test('Бинарный поиск',() => {
    expect(binaritySerch(myArr,4)).toBe(3)
  })
})

describe('№2', () => {
  let myArr
  let resultArr
  let lessIndex

  beforeEach(() => {
    myArr = [5,2,9,6,1,7,0,4,8,3]
    lessIndex = 6

    resultArr = [0,1,2,3,4,5,6,7,8,9]
  })

  test('Сортировка выбором', () => {
    expect(selectionSort(myArr)).toEqual(resultArr)
  })
  test('Найти индекс меньшего числа', () => {
    expect(findIndexLess(myArr)).toEqual(lessIndex)
  })
})

describe('№3', () => {
  let myArr
  let resultArr

  beforeEach(() => {
    resultArr = [0,1,2,3,4,5,6,7,8,9]
    myArr = [5,2,9,6,1,7,0,4,8,3]
  })

  test('Быстрая сортировка', () => {
    expect(quickSort(myArr)).toEqual(resultArr)
  })
})