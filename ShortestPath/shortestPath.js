const edges = [
    ['a', 'c'],
    ['a', 'b'],
    ['c', 'b'],
    ['c', 'd'],
    ['b', 'd'],
    ['e', 'd'],
    ['g', 'f']
  ];

  const convertToMap = (edges) => {
    let graph = {}
    for(let e of edges){
       let [a, b] = e;
       if(!(a in graph)){
            graph[a] = []
       }
       if(!(b in graph)){
        graph[b] = []
   }

   graph[a].push(b)
   graph[b].push(a)

    }
    return graph
  }

  const explore = (graph, start, destination)=>{
    let queue = [{node: start, count: 0}]
    let numberOfNodes = Object.keys(graph).length
    let visited = new Set()

  while(queue.length > 0){
    console.log(queue)
        let poppedNode = queue.shift()
        if(poppedNode.node === destination){
            return poppedNode.count
        }

        visited.add(poppedNode.node)
        for(let n of graph[poppedNode.node]){
            if(!visited.has(n)){
                visited.add(n)
                queue.push({node: n, count: poppedNode.count + 1})
            
        }
        }
    }

    return -1
  }

  
  const shortestPath = (edges, start, destination) => {

    let graph = convertToMap(edges);
    return explore(graph, start, destination)

}

console.log(shortestPath(edges, 'b', 'g'))

