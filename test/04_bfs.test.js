import bfs from '../04_bfs/index.js'

  // data
let graph = {}
graph['you'] = ['alice', 'bob', 'claire']
graph['bob'] = ['anuj', 'peggy']
graph['alice'] = ['peggy']
graph['claire'] = ['thom', 'jonny']
graph['anuj'] = []
graph['peggy'] = []
graph['thom'] = []
graph['jonny'] = []

  // test
const wrap = () => {
  return function() {
    return bfs(graph,'you')
  }
}

const example = wrap()

console.group('bfs:')
console.log('Previos:',JSON.stringify(graph))
console.time('1000 итераций за')
for(let i = 0; i < 1000; i++){
  example()
}
console.timeEnd('1000 итераций за')
console.log('Result:', example())
console.groupEnd()