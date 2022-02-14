var addStrings = function(num1, num2) {
    let res = ''
    let flag = 0
    let i = num1.length - 1
    let j = num2.length - 1

    while(i >= 0 || j >= 0){
        let sum = (i >= 0 ? Number(num1[i]) : 0) + (j >= 0 ? Number(num2[j]) : 0) + flag
        res = sum % 10 + res
        flag = Math.floor(sum / 10)
        i--
        j--
    }

    if (flag !== 0) res = flag + res

    return res
};

console.log(addStrings("11", "123"));
console.log(addStrings("456", "77"));
console.log(addStrings("0", "0"));
console.log(addStrings("584", "18"));

