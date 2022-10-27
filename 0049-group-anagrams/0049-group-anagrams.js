/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
	const group =  strs.reduce((acc, cur) => {
    let letter = cur.split('').sort().join("")
    acc[letter] = [...(acc[letter] || []) , cur];
    return acc
  }, {})
  
  return Object.entries(group).map(v => v[1])
};