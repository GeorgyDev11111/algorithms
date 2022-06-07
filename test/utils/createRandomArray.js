import newArray from './createArray.js'

export default (start,end) => {
  return newArray(start,end).sort(() => Math.random() - 0.5)
}