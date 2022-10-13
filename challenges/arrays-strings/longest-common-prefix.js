/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". (Note: All given inputs are in lowercase letters a-z.)

ex: longestCommonPrefix(["flower","flow","flight"]) --> "fl"

longestCommonPrefix(["dog","racecar","car"]) --> "" (There is no common prefix among the input strings)

*/

const longestCommonPrefix = (strs) => {
  if (!strs.length) return '';

  for (let i = 0; i < strs[0].length; i++) {
      for (let str of strs) {
        if (str[i] !== strs[0][i]){
            return str.slice(0, i);
        }
      }
  }
  return strs[0];
};

module.exports = { longestCommonPrefix };