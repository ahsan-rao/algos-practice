/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' const wow = { yo: thisIsAwesome() }'); // true
 * balancedParens(' const newton = () => { telescopes.areSicc(); '); // false
 *
 *
 */

    //iterate through the input string
        // if an opening bracket is found, push it to the stack
        //else if it is a closing bracket, check last entry of stack
            //pop it off and assign it to openbracket
            //compare bracket[openbracket] with char
            //if they do not match, return false
    //if the stack is not empty, return false      

const balancedParens = input => {
    input = input.replace(/[^()[\]{}]/g, ''); 
    //store an object with bracket key value pairs
    const bracket ={
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }

    const stack = [];
    //declare a stack object

    for (let char of input) {
        if (bracket[char]) {stack.push(char)}
        else {
            let closeBracket = stack.pop();
            if (bracket[closeBracket] !== char) return false;
        }
    }
    return (stack.length === 0);
};

module.exports = { balancedParens} ;
