/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = ''
    let i = 0
    while (i < s.length) {
        let l = r = i;
        while(s[l-1] === s[i] && l > 0) {
            l--;
        }
        while(s[r+1] === s[i] && r < s.length - 1){
            r++;
        }
        while(s[r+1] === s[l-1] && r < s.length - 1 && l > 0) {
            r++;
            l--;
        }
        if(r - l + 1 > res.length){
            res = s.substring(l, r + 1)
        }
        i++
    }
    return res
};

