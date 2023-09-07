// Input  - A + B * C + D
// Output - ABC*+D+
var Operator;
(function (Operator) {
    Operator[Operator["+"] = 0] = "+";
    Operator[Operator["-"] = 1] = "-";
    Operator[Operator["*"] = 2] = "*";
    Operator[Operator["^"] = 3] = "^";
    Operator[Operator["/"] = 4] = "/";
    Operator[Operator["%"] = 5] = "%";
    Operator[Operator["&"] = 6] = "&";
})(Operator || (Operator = {}));
var InfixToPostfix = /** @class */ (function () {
    function InfixToPostfix(_inputExp) {
        this._inputExp = _inputExp;
        this._stack = [];
        this._expression = this._inputExp;
    }
    InfixToPostfix.prototype.getInfix = function () {
        return this._expression;
    };
    //Function to return precedence of operators
    InfixToPostfix.prototype.precedence = function (character) {
        if (character == '^')
            return 3;
        else if (character == '/' || character == '*')
            return 2;
        else if (character == '+' || character == '-')
            return 1;
        else
            return -1;
    };
    InfixToPostfix.prototype.convert = function () {
        var postFix = '';
        var i = 0;
        var character = '';
        for (var index = 0; index < this._expression.length; index++) {
            character = this._expression[index];
            // If the scanned character is an operand, add it to output string.
            if ((character >= 'a' && character <= 'z') ||
                (character >= 'A' && character <= 'Z') ||
                (character >= '0' && character <= '9')) {
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
                while (this._stack.length !== 0 &&
                    this.precedence(this._stack[index]) <= this.precedence(this._stack[this._stack.length - 1])) {
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
    };
    return InfixToPostfix;
}());
// const infixToPostFix = new InfixToPostfix('A+B*C+D');
var infixToPostFix = new InfixToPostfix('a+b*(c^d-e)^(f+g*h)-i');
console.log('Infix: ', infixToPostFix.getInfix());
console.log('Postfix: ', infixToPostFix.convert());
