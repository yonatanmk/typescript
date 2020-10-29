type Dict<T> = {
  [k: string]: T | undefined;
};

// Array.prototype.map, but for Dict
function mapDict<T, S>(
  dict: Dict<T>,
  fn: (arg: T, i: number) => S
): Dict<S> {
  const out: Dict<S> = {};
  Object.keys(dict).forEach((dKey, idx) => {
      const thisItem = dict[dKey];
      if (typeof thisItem !== 'undefined') {
          out[dKey] = fn(thisItem, idx);
      }
  })
  return out;
}

console.log(mapDict({
  a: 'a',
  b: 'b'
}, (str) => [str]))

// Array.prototype.reduce, but for Dict
function reduceDict() {}
