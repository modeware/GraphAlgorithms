# Depth First Traversal

## Depth First Traversal Uses A Stack

### Stack is a data structure which follows the Last in first out principle which means the last element entered in the stack would be the first one out.

As you can see in the code I have used an array as a stack.

In this specific example: 
- The code is pushing the element at the end of the stack and popping the element out from the very end.

- It could have been implemented the other way round as well keeping in mind the LIFO principle i.e. adding at the beginning of the array and removing it from the beginning. 

- What would change?
Just the order of the traversal. Rest it would traverse the deepest nodes.


> Run the code using - ```node depthFirstPrint.js```