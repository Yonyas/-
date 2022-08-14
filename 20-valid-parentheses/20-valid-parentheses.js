/**
 * @param {string} s
 * @return {boolean}
 */
const opened = {'[': ']', '{': '}', '(': ')'};
var isValid = function(s) {
	const que = [];
  s = s.split('');

  for (let i = 0; i < s.length; i++) {
       if (s[i] in opened) {
    	console.log(s[i])  
      que.push(s[i]) 
    }
    else {
      const next = opened[que.pop()];
      console.log(next)
      if (s[i] !== next) return false;  
    }  
  }
  if (que.length !== 0) return false;
  return true;
};
