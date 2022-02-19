/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  function compare(num1,num2){
    if(!num1 && Number(num2) !== 0){
      return -1
    }else if(!num2 && Number(num1) !== 0){
      return 1
    }else if(!num1 || !num2){
      return 0
    }
    let m = num1.length;
    let n = num2.length;
    if(m < n){
      num1 = num1.padStart(n, '0');
    }else if(m > n){
      num2 = num2.padStart(m, '0');
    }
    console.log(num1,num2);
    for (let i = 0; i < Math.max(m,n); i++) {
      if(Number(num1[i]) < Number(num2[i])){
        return -1;
      }else if(Number(num1[i]) > Number(num2[i])){
        return 1;
      }
    }
    return 0;
  };
  // compare(0,0)
  let i = 0;
  let j = 0;
  let arr1 = version1.split('.');
  let arr2 = version2.split('.');
  while (i < arr1.length || j < arr2.length){
    if(compare(arr1[i],arr2[j])){
      return compare(arr1[i],arr2[j]);
    }else {
      i++; 
      j++
    }
  }
  return 0
};

// console.log(compareVersion("1.01", "1.001"));
// console.log(compareVersion("1.0", "1.0.0"));
console.log(compareVersion("1.1", "1.10"));