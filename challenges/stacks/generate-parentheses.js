/*

Given n pairs of parentheses, write a function to generate all combinations of
well-formed parentheses.

For example, given n = 2, a solution set is:

[
  "(())",
  "()()"
]

Given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

Given n = 0, a solution set is:

[
  ""
]

*/

const generateParentheses = n => {
  const result = [];

  const go = (l, r, s) => {
    if (s.length === 2 * n) {
      result.push(s);
      return;
    }

    if (l < n) go(l + 1, r, s + '(');
    if (r < l) go(l, r + 1, s + ')');
  };

  go(0, 0, '');
  
  return result;

};

module.exports = {generateParentheses};
