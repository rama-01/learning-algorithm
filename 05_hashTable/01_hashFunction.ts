const hasFunc = (str: string, max: number): number => {
  let hashCode = 0
  let len = str.length
  for (let i = 0; i < len; i++) {
    hashCode = 31 * hashCode + str.charCodeAt(i)
  }
  const index = hashCode % max
  return index
}

// test
// loadFactor=3/7
console.log(hasFunc('abc', 7));
console.log(hasFunc('bbc', 7));
console.log(hasFunc('dbc', 7));
console.log(hasFunc('ebc', 7));
console.log(hasFunc('qbc', 7));
console.log(hasFunc('vbc', 7));
console.log(hasFunc('rbc', 7));
console.log(hasFunc('tbc', 7));

export {}