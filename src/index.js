// You should implement your task here.
module.exports = function towelSort (matrix) {
  let result = [];
  if (!matrix) {
    return result;
  }
  matrix.forEach((elem, i, arr) => {   
    if (i%2 === 0) {
      result=result.concat(arr[i]);     
    } else {
      result=result.concat(arr[i].reverse());
    }
});
  return result;
};