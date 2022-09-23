/**
 * 单词搜索
 * https://leetcode.cn/problems/word-search
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const nr = board.length;
    const nc = board[0].length;
    const nw = word.length;
    const visited = new Array(nr).fill(false).map(item => new Array(nc).fill(false));
    const wordArr = Array.from(word);

    const dfs = function (i, row, col) {
        if (i === nw) {
            return true;
        }
        if (row < 0 || col < 0 || row > nr - 1 || col > nc - 1 || visited[row][col] || board[row][col] !== wordArr[i]) {
            return false;
        }
        visited[row][col] = true;
        const found = dfs(i + 1, row, col + 1) || dfs(i + 1, row, col - 1) || dfs(i + 1, row + 1, col) || dfs(i + 1, row - 1, col);
        visited[row][col] = false;
        return found;
    }

    for (let i = 0; i < nr; ++i) {
        for (let j = 0; j < nc; ++j) {
            const found = dfs(0, i, j);
            if (found) return true;
        }
    }
    return false;
};