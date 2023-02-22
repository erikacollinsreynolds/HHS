/**
 * Recursively flattens a nested array.
 * flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
 */

const arr = [1, 2, 3, [4, 5]];
// const arr = [1, 2, 3, [4, [5]], 6];
console.log(arr.flat());

const flattenDeep = (array) => {
  const flat = [];
  for (let element of array) {
    Array.isArray(element)
      ? flat.push(...flattenDeep(element))
      : flat.push(element);
  }
  return flat;
}

console.log(flattenDeep([1, [2, [3, [4, [5, 6, 7, [8, [9]]]]]]]));
console.log(flattenDeep([1, [2, 3, [4]]]));
console.log(flattenDeep([1]));
console.log(flattenDeep([]));