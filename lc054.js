/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {

    if(matrix.length === 0) return[]
    let res = []
    let top = 0, left = 0, right = matrix[0].length - 1, bottom = matrix.length - 1
    while(top < bottom && left < right){
        for(let i = left; i < right; i++) res.push(matrix[top][i])
        for(let i = top; i < bottom; i++) res.push(matrix[i][right])
        for(let i = right; i > left; i--) res.push(matrix[bottom][i])
        for(let i = bottom; i > top; i--) res.push(matrix[i][left])
        top++
        bottom--
        left++
        right--
    }
    if(top === bottom){
        for(let i = left; i <= right; i++) res.push(matrix[top][i])
    }else if(left === right){
        for(let i = top; i <= bottom; i++) res.push(matrix[i][right])
    }

    return res


};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));