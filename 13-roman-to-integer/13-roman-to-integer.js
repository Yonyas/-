/**
 * @param {string} s
 * @return {number}
 */

const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};
const specialMap = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900
};

var romanToInt = function (s) {
  let res = 0;
  const specialKeys = Object.keys(specialMap);
  for (let i=0; i<s.length; i++) {
    if (specialKeys.includes(s.slice(i,i+2))) {
    	res += specialMap[s.slice(i,i+2)];
      ++i
    } else {
      res += map[s[i]]
    }
  }
  return res
};