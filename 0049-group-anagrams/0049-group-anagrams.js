/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
	const group =  strs.reduce((acc, cur) => {
    acc[cur.split('').sort()] = [...(acc[cur.split('').sort()] || []) , cur];
    return acc
  }, {})
  
  return Object.entries(group).map(v => v[1])
};