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
const wrap = (graph) => (entrypoint) => (
  bfs(graph,entrypoint)
)

const example = wrap(graph)

console.group('bfs:')
console.log('Previos:',JSON.stringify(graph))
console.time('1000 итераций за')
for(let i = 0; i < 1000; i++){
  example('you')
}
console.timeEnd('1000 итераций за')
console.log('Result:', example('you'))
console.groupEnd()