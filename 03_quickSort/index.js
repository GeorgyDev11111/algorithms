const quickSort = (list) => {
  if(list.length < 2) {
    return list
  }

  const pivot = list[0]

  const less = []
  const greater = []

  for(let i = 1; i < list.length; i++){
    if(list[i] <= pivot){
      less.push(list[i])
    }else {
      greater.push(list[i])
    }
  }

  return [...quickSort(less),pivot,...quickSort(greater)]
}

export default quickSort