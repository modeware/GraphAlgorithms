const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

/*
    a __ b__d__f__null  
    |
    c__e__null
*/

// Push and Pop from the end of the array
function printGraphDepthFirst1(graph, source){
    const stack = [];
    stack.push(source)
    
    while(stack.length){
        let item = stack.pop()
        console.log(item)
        stack.push(...graph[item])        
    }
    console.log("--------------\n")
}

// Add and Remove from Beginning of the Array
function printGraphDepthFirst2(graph, source){
    let stack = [source];
    let newStack = []
    
    while(stack.length){
        let item = stack.shift()
        console.log(item)
        for (let n of graph[item]){
          newStack.push(n)
        }
        stack = [...newStack, ...stack]
        newStack = [] 
        }       
    console.log("--------------\n")

}


//Recusive Depth First Traversal
function printGraphDepthFirst3(graph, source){
    console.log(source)
    for(let n of graph[source]){
        printGraphDepthFirst3(graph, n)
    }
}

printGraphDepthFirst1(graph, 'a')
printGraphDepthFirst2(graph, 'a')
printGraphDepthFirst3(graph, 'a')