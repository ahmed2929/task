function transpose(matrix) {
    return matrix[0].map((_, i) => matrix.map(row => row[i]));
}

console.log(transpose([[1,2], [3,4]]));
console.log(transpose([[1,2,3,4], [5,6,7,8]]));