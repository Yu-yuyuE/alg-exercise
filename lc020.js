/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stacks = [];
    for(let i = 0; i < s.length; i++) {
        switch(s[i]){
            case '(':
                stacks.push(')')
                break
            case '{':
                stacks.push('}')
                break
            case '[':
                stacks.push(']')
                break
            default:
                if(stacks.pop() !== s[i]){
                    return false
                }
        }
    }
    if(stacks.length !== 0) return false
    return true
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));