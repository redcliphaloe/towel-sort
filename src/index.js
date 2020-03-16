
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  while (Array.isArray(matrix[0])) {
    for (let index = 1; index < matrix.length; index += 2) {
      matrix[index] = matrix[index].reverse();      
    }
    matrix = matrix.flat();
  }      
  return matrix;
}
