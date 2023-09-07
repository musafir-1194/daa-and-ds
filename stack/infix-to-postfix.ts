// Input  - A + B * C + D
// Output - ABC*+D+

enum Operator {
    '+',
    '-',
    '*',
    '^',
    '/',
    '%',
    '&',
}

class InfixToPostfix {
    private _expression: string;
    private _stack: string[] = [];

    constructor(private _inputExp) {
        this._expression = this._inputExp;
    }

    getInfix(): string {
        return this._expression;
    }

    //Function to return precedence of operators
    precedence(character: string): number {
        if (character == '^')
            return 3;
        else if (character == '/' || character == '*')
            return 2;
        else if (character == '+' || character == '-')
            return 1;
        else
            return -1;
    }

    convert(): string {
        let postFix: string = '';
        let i: number = 0;
        let character: string = '';

        for (let index = 0; index < this._expression.length; index++) {
            character = this._expression[index];
            // If the scanned character is an operand, add it to output string.
            if (
                (character >= 'a' && character <= 'z') ||
                (character >= 'A' && character <= 'Z') ||
                (character >= '0' && character <= '9')
            ) {
                postFix += character;
            }

            // If the scanned character is an ‘(‘, push it to the stack.
            else if (character === '(') {
                this._stack.push(character);
            }

            // If the scanned character is an ‘)’, pop and to output string from the stack
            // until an ‘(‘ is encountered.
            else if (character === ')') {
                while (this._stack[this._stack.length - 1] !== '(') {
                    postFix += this._stack[this._stack.length - 1];
                    this._stack.pop();
                }
                this._stack.pop();
            }

            //If an operator is scanned
            else {
                while (
                    this._stack.length !== 0 &&
                    this.precedence(this._stack[index]) <= this.precedence(this._stack[this._stack.length - 1])
                ) {
                    postFix += this._stack[this._stack.length - 1];
                    this._stack.pop();
                }
                this._stack.push(character);
            }
        }

        // Pop all the remaining elements from the stack
        while (this._stack.length !== 0) {
            postFix += this._stack[this._stack.length - 1];
            this._stack.pop();
        }

        return postFix;
    }
}

// const infixToPostFix = new InfixToPostfix('A+B*C+D');
const infixToPostFix = new InfixToPostfix('a+b*(c^d-e)^(f+g*h)-i');
console.log('Infix: ', infixToPostFix.getInfix());
console.log('Postfix: ', infixToPostFix.convert());
