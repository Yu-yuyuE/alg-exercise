// 新数组
// var concatArr = function (arr1, arr2) {
//     let res = []
//     let i = 0;
//     let j = 0;

//     while (i < arr1.length && j < arr2.length) {
//         if(arr1[i] <= arr2[j]){
//             res.push(arr1[i])
//             i++
//         }else{
//             res.push(arr2[j])
//             j++
//         }
//     }
//     if(i >= arr1.length) res = res.concat(arr2.slice(j, arr2.length))
//     if(j >= arr2.length) res = res.concat(arr1.slice(i, arr1.length))

//     return res
// }

// 改变原数组
var concatArr = function (nums1, m, nums2, n) {
    let i = 0;
    let j = 0;

    nums1.splice(m,nums1.length)

    while (i < m + n && j < n) {
        if(nums1[i] > nums2[j]){
            nums1.splice(i,0,nums2[j])
            j++
        }
        i++
    }
    if(i >= nums1.length) nums1 = nums1.concat(nums2.slice(j, n))

    return nums1
}

console.log(concatArr([1,2,3,0,0,0],3,[2,5,6],3));
console.log(concatArr([1], 1, [], 0));
console.log(concatArr([0], 0, [1], 1));