export default (start,end) => {
  const array = []
  try {
    for(let i = start; i <= end; i++){
      array.push(i)
    }
  }catch {
    return []
  }
  
  return array
}