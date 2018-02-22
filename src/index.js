module.exports = function longestConsecutiveLength(array) {
  let res = [],
      count;

  count = array.length > 0 ? 1 : 0;
  res.push(count);

  array.sort( (a,b) => a - b);
  array = array.filter( (x,i,arr) => x !== arr[i+1] );
  array.forEach( (x, i, arr) => {
    if (arr[i+1] - x === 1) {
      count++;
    } else {
      res.push(count);
      count = 1;
    }
  });

  return Math.max(...res);
}
