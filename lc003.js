var longestStr1 = function (s) {
    // var left, right = 0
    var minIndex = 0
    var res = 0

    for(let i = 0; i < s.length; i++) {
        if(s.indexOf(s[i], minIndex) < i){
            minIndex = s.indexOf(s[i], minIndex) + 1
        }else{
            res = Math.max(i - minIndex + 1, res)
        }
    }

    return res;
}

var longestStr2 = function (s) {
    let set = new Set()
    let left = 0, right = 0
    let len = s.length
    let res = 0

    while(left < len) {
        while(right < len && !set.has(s[right])) {
            set.add(s[right]) 
            right++
        }
        res = Math.max(right - left, res)
        set.delete(s[left])
        left++
    }

    return res;
}

console.log(longestStr1('abcabcbb'));
console.log(longestStr1('bbbbb'));
console.log(longestStr1('pwwkew'));
console.log(longestStr1(''));

console.log(longestStr2('abcabcbb'));
console.log(longestStr2('bbbbb'));
console.log(longestStr2('pwwkew'));
console.log(longestStr2(''));