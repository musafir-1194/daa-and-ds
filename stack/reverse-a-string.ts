/**
 * Reverse a string using a stack data structure 
 * Input : abcd0987
 * Output: 7890dcba
 * 
*/
class ReverseOfAString {
    private _input: string;
    private _stack: string[];

    constructor(private data: string) {
        this._input = data;
        this._stack = [];
    }

    getInputString(): string {
        return this._input;
    }

    getStack(): string[] {
        return this._stack;
    }

    isEmpty(): boolean {
        return this._stack.length ? true : false;
    }

    reverse(): string {

        let reverse: string = '';

        for (let i = 0; i < this._input.length; i++) {
            // this._stack.push(this._input[i]);
            this._stack.push(this._input.charAt(i));
        }

        console.log('Stack is: ', this.getStack());

        for (let i = 0; i < this._input.length; i++) {
            reverse += this._stack.pop();
        }

        return reverse;
    }
}

const instance = new ReverseOfAString('JAVASCRIPT');
console.log('String is: ', instance.getInputString());
console.log('Reverse of the string: ', instance.reverse());