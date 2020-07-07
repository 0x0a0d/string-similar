function getSameLength(strs) {
  let j = 0;
  for (; j < strs[0].length; j++) {
    for (let i = 0; i < strs.length - 1; i++) {
      if (strs[i][j] !== strs[i + 1][j]) return j - 1
    }
  }
  return j
}

function getSameString(strs) {
  const sameLength = getSameLength(strs)
  return strs[0].substr(0, sameLength)
}

module.exports = {
  getSameString,
  getSameLength
}