/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
	const letters = paragraph.replace(/[^\w]/g, ' ').split(' ').map(v => v.toLowerCase()).filter(v => v && !banned.includes(v))
  
  counts = letters.reduce((acc, cur) => {
    acc[cur] = !acc[cur] ? 1 : ++acc[cur];

    return acc
  }, {});
  
  let max = 0;
  let word = '';
  Object.entries(counts).map(v => {
    if (v[1] > max) {
      max = v[1]; 
      word = v[0]
    }
  })
  return word
};