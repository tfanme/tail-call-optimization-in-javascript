// 循环转递归
const s = [['a','b','c'],['d','e','f'],['w','x','y','z'], ['t', 'u', 'v']];
// 求排列组合
const iterate = function () {
    const result = [];
    for (let i = 0; i < s[0].length; i++) {
        const c0 = s[0][i];
        for (let j = 0; j < s[1].length; j++) {
            const c1 = s[1][j];
            for (let k = 0; k < s[2].length; ++k) {
                const c2 = s[2][k];
                for (let l = 0; l < s[3].length; ++l) {
                    const c3 = s[3][l];
                    result.push(c0 + c1 + c2 + c3);
                }
            }
        }
    }
    console.log(result);
    console.log(result.length); // 3*3*4*3=108
}

// 当不知道要迭代多少次的时候使用while
const iterate2 = function () {
    const result = [];
    let i = 0;
    while (i < s[0].length) {
        const c0 = s[0][i];

        let j = 0;
        while (j < s[1].length) {
            const c1 = s[1][j];

            let k = 0;
            while (k < s[2].length) {
                const c2 = s[2][k];

                let l = 0;
                while (l < s[3].length) {
                    const c3 = s[3][l];
                    result.push(c0 + c1 + c2 + c3);
                    ++l;
                }
                ++k;
            }
            ++j;
        }
        ++i;
    }
    console.log(result);
    console.log(result.length); // 3*3*4*3=108
}

// 进一步改造成函数调用
const iterate3 = function () {
    const result = [];

    const dfs = function (_str) {
        let l = 0;
        while (l < s[3].length) {
            const c3 = s[3][l];
            result.push(_str + c3);
            ++l;
        }
    }
    const dfs2 = function (_str) {
        let k = 0;
        while (k < s[2].length) {
            const c2 = s[2][k];
            dfs(_str + c2);
            ++k;
        }
    }

    const dfs3 = function (_str) {
        let j = 0;
        while (j < s[1].length) {
            const c1 = s[1][j];
            dfs2(_str + c1);
            ++j;
        }
    }

    const dfs4 = function (_str) {
        let i = 0;
        while (i < s[0].length) {
            const c0 = s[0][i];
            dfs3(_str + c0);
            ++i;
        }
    }
    dfs4('');
    console.log(result);
    console.log(result.length); // 3*3*4*3=108
}

// 使用迭代器可以使逻辑更简化
const iterate4 = function () {
    const result = [];

    const dfs = function (_str) {
        for (const char of s[3]) {
            // 如果是最后一行了
            result.push(_str + char);
        }
    }

    const dfs2 = function (_str) {
        for (const char of s[2]) {
            dfs(_str + char);
        }
    }

    const dfs3 = function (_str) {
        for (const char of s[1]) {
            dfs2(_str + char);
        }
    }

    const dfs4 = function (_str) {
        for (const char of s[0]) {
            dfs3(_str + char);
        }
    }
    dfs4('');
    console.log(result);
    console.log(result.length); // 3*3*4*3=108
}

// 递归版本
const iterate5 = function () {
    const result = [];

    const dfs = function (_str, i) {
        const slist = s[i];
        for (const char of slist) {
            if (i < s.length - 1) {
                dfs(_str + char, i + 1);
            } else {
                // 如果是最后一行了
                result.push(_str + char);
            }
        }
    }

    dfs('', 0);
    console.log(result);
    console.log(result.length); // 3*3*4*3=108
}

// 回溯版本，回溯就是递归+迭代，深度+广度
const iterate6 = function () {
    const result = [];

    const dfs = function (_str, i) {
        // 全部遍历完了
        if (i === s.length) {
            result.push(_str.join(''));
        } else {
            const slist = s[i];
            for (const char of slist) {
                _str.push(char);
                dfs(_str, i + 1);
                _str.pop();
            }
        }
    }

    dfs([], 0);
    console.log(result);
    console.log(result.length); // 3*3*4*3=108
}

// 横向扫描
// 纵向扫描（有点像矩阵的操作）

// iterate();
// iterate2();
// iterate3();
// iterate4();
// iterate5();
// iterate6();

// 括号生成中的探索, 0 - (, 1 )
const m = 3;
const signs = ['(', ')'];
const ans = [];
const valid = function (combination) {
    if (combination[0] !== '(') return false;
    const leftCount = combination.filter(item => item === '(').length;
    const rightCount = combination.filter(item => item === ')').length;
    if ( leftCount > 3 || rightCount > 3 || rightCount > leftCount) return false;

    return true;
}
// 2^(n*2)次方
const gen = function (i, combination) {
    if (i === m * 2) {
        ans.push(combination.join(''))
    } else {
        for (const sign of signs) {
            combination.push(sign);
            // 增加一个条件，走不下去就不走了
            if (valid(combination)) {
                gen(i + 1, combination);
            }
            combination.pop();
        }
    }
}

gen(0, []);
console.log(ans);