"use strict";


/** 1. printIndices */
const printIndices = (items) => {
	// Replace this with your code
  for (const i in items) {
    console.log(items[i], i)
  }
};
printIndices(['apple', 'berry', 'orange'])

/** 2. everyOtherItem */
const everyOtherItem = (items) => {
  const array = [];
	for(const i in items) {
    if (i%2===0) {
      array.push(items[i]);
    }
  }
  console.log(array)
};

everyOtherItem(['apple', 'berry', 'orange', 'watermelon'])

/** 3. smallestNItems */
const smallestNItems = (items, n) => {
	return items.sort().slice(0, n).reverse();

};

console.log(smallestNItems([6, 8, 1, 7, 4, 9], 3))
