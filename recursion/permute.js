/**
 * 全排列
 * https://leetcode.cn/problems/permutations/solution/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const n = nums.length;
    const ans = [];
    const dfs = function (i, src, combination) {
        if (i === n) {
            ans.push([...combination]);
            return;
        }
        for (let j = 0; j < src.length; ++j) {
            combination.push(src[j]);
            dfs(i + 1, src.filter(item => item !== src[j]), combination)
            combination.pop();
        }
    }
    dfs(0, nums, []);
    return ans;
};