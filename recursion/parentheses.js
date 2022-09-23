/**
 * 括号生成
 * https://leetcode.cn/problems/generate-parentheses/solution/
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const signs = ['(', ')'];
    const ans = [];
    // 2^(n*2)次方
    const gen = function (combination, left, right) {
        if (left + right === n * 2) {
            ans.push(combination.join(''))
            return;
        }
        if (left < n) {
            combination.push('(');
            gen(combination, left + 1, right);
            combination.pop();
        }
        if (right < left) {
            combination.push(')');
            gen(combination, left, right + 1);
            combination.pop();
        }
    }

    gen([], 0, 0);
    return ans;
};