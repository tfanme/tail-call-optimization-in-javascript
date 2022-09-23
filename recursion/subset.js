/**
 * 子集问题
 * https://leetcode.cn/problems/subsets/submissions/
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const n = nums.length;
    const ans = [];
    const dfs = function (i, combination) {
        if (i === n) {
            ans.push([...combination]);
            return;
        }
        dfs(i + 1, combination);
        combination.push(nums[i]);
        dfs(i + 1, combination);
        combination.pop();
    }

    dfs(0, []);
    return ans;
};