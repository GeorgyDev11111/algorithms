/**
 * Бинарный поиск 
 */ 
const binaritySerch = (list,item) => {
  let low = 0
  let high = list.length - 1

  while(low <= high){
    let mid = Math.floor((low + high) / 2)
    const guess = list[mid]

    if(guess === item) {
      return mid
    }
    if(guess > item) {
      high = mid - 1
    }else{
      low = mid + 1
    }
  }
  return -1
}

/**
 * Cортировка выбором
 */
const findIndexLess = (list) => {
  let first = list[0]
  let index_less = 0
  for(let i = 0; i < list.length; i++){
    if(first > list[i]){
     first = list[i]
     index_less = i 
    }
  }
  return index_less
}
 
const selectionSort = (list) => {
  let newList = []
  const length = list.length
  for(let i = 0; i < length; i++) {
    let index_less = findIndexLess(list)
    newList.push(...list.splice(index_less,1))
  }
  return newList
}

/**
 * Быстрая сортировка
 */
const quickSort = (list) => {
  if(list.length < 2) {
    return list
  }

  const pivot = list.splice(Math.random() * list.length - 1,1)
  let listLessPivot = list.filter(el => el < pivot)
  let listMorePivot = list.filter(el => el > pivot)

  return [...quickSort(listLessPivot),...pivot,...quickSort(listMorePivot)]
}

module.exports = {binaritySerch,selectionSort,quickSort,findIndexLess}