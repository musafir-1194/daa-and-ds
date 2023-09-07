/**
 * LIFO - Last In First Out. Let's assume the below stack is in vertical form
 * push 1 --> [1]
 * push 2 --> [2][1]
 * push 3 --> [5][2][1]
 * pop    --> [2][1]
 * pop    --> [1]
 * push 4 --> [4][1]
 */

class Stack {
    private _stack: any[];     // array that stores the stack elements
    private _top: number;      // keeps track of the top of the stack

    constructor() {
        this._stack = [];
        this._top = 0;
    }

    // Push into the stack
    push(element: any): void {
        this._stack[this._top++] = element;
    }

    // Pop from the stack
    pop(): any {
        return this._stack[--this._top];
    }

    // Show the stack
    show(): any[] {
        return this._stack;
    }

    // Check if stack is empty
    isEmpty(): boolean {
        return true;
    }

    // Check if stack is full
    isFull(): boolean {
        return true;
    }

    // Display the top element of the stack
    peek(): any {
        let topIndex = this._top;
        return this._stack[--topIndex];
    }

    length(): number {
        return this._top;
    }

    clear(): void {
        this._top = 0;
    }

}

var newstack = new Stack();
newstack.push(44);
newstack.push('js');
console.log('Stack is: ', newstack.show());
console.log('lenght of the stack is: ', newstack.length());
console.log('Top element of the stack: ', newstack.peek());
console.log('The popped elment is: ', newstack.pop());
newstack.push('Java');
newstack.push('Python');
newstack.push('PHP');
console.log('Stack is: ', newstack.show());
