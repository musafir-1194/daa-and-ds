/**
 * LIFO - Last In First Out. Let's assume the below stack is in vertical form
 * push 1 --> [1]
 * push 2 --> [2][1]
 * push 3 --> [5][2][1]
 * pop    --> [2][1]
 * pop    --> [1]
 * push 4 --> [4][1]
 */
var Stack = /** @class */ (function () {
    function Stack() {
        this._stack = [];
        this._top = 0;
    }
    // Push into the stack
    Stack.prototype.push = function (element) {
        this._stack[this._top++] = element;
    };
    // Pop from the stack
    Stack.prototype.pop = function () {
        return this._stack[--this._top];
    };
    // Show the stack
    Stack.prototype.show = function () {
        return this._stack;
    };
    // Check if stack is empty
    Stack.prototype.isEmpty = function () {
        return true;
    };
    // Check if stack is full
    Stack.prototype.isFull = function () {
        return true;
    };
    // Display the top element of the stack
    Stack.prototype.peek = function () {
        var topIndex = this._top;
        return this._stack[--topIndex];
    };
    Stack.prototype.length = function () {
        return this._top;
    };
    Stack.prototype.clear = function () {
        this._top = 0;
    };
    return Stack;
}());
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
