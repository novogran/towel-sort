
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  let flag = true;
  if(matrix == undefined) return [];
    for (let i = 0; i < matrix.length; i++){
      for (let k = 0; k < matrix[i].length; k++){
        if(matrix[i].length == undefined) return []; 
        flag ? result.push(matrix[i][k]) : result.push(matrix[i][((matrix[i].length)-1)-k])
      }
      flag = !flag;
    }
    return result;
}
