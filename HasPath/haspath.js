
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}


// DFS Approach
const hasPath = (graph, source, dest) => {
    const stack = [];
    stack.push(source)
    
    while(stack.length){
        let item = stack.pop()
        if(item === dest){
            return true
        }
        stack.push(...graph[item])        
    }
    return false
}

//DFS Approach
const hasPathRecursive = (graph, src, dest) => {
        if(src === dest){
            return true
        }

    for(let n of graph[src]){
        return hasPathRecursive(graph, n, dest )
    }

    return false
    
}

console.log(hasPathRecursive(graph, 'a', 'f'))


