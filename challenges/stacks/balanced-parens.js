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
    //remove all other characters from string
    input = input.replace(/[^()[\]{}]/g, ''); 
    //store an object with bracket key value pairs
    const bracket ={
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }

    const stack = [];
    //declare a stack object following LIFO

    //iterate through the input string
    for (let char of input) {
        //if you come across an opening bracket, push it stack
        if (bracket[char]) {stack.push(char)}
        else {
            //if its closing bracket, pop it off the stack
            let closeBracket = stack.pop();
            //if it is not matching with opening bracket, return false
            if (bracket[closeBracket] !== char) return false;
        }
    }
    //return true if stack length is 0
    return (stack.length === 0);
};

module.exports = { balancedParens} ;
