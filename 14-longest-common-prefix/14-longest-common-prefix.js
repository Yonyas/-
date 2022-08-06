/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	let res = ''

  let i = 0;
  while (true) {

    const char = strs[0][i];
    if (char == null) break;
    if (strs.every(v => v[i] === char)) {
      res += char;
    } else {
      break;
    }
    i++;
  }
  return res
};