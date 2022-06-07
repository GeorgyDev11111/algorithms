/**
 *  Selection sort
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
  const newList = []
  const length = list.length
  for(let i = 0; i < length; i++) {
    const index_less = findIndexLess(list)
    newList.push(...list.splice(index_less,1))
  }
  return newList
}

export {selectionSort}