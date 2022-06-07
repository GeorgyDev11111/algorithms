/**
 * Breadth-first search (BFS)
 * 
 * example 'Mango seller'
 */

const isSellerMango = (name) => name.at(-1) === 'm'

const bfs = (graph,entrypoint) => {
  let queue = [...graph[entrypoint]]
  const checked_out = []

  while(queue.length !== 0) {
    const person = queue.shift()
    if(checked_out.indexOf(person) === -1){
      if(isSellerMango(person)){
        return person + ' is a mango seller'
      }else {
        queue = [...queue,...graph[person]]
        checked_out.push(person)
      }
    }
  }
  return 'nobody is a mango seller'
}

export default bfs