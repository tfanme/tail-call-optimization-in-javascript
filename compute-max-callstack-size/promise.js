/**
 * 使用promise实现的compute-max-callstack-size
 * @returns {Promise<unknown>}
 */
var
    compute_size = () => new Promise(resolve => {
        var repeat = size => {
            try {
                repeat(size + 1)
            } catch (err) {
                resolve(size)
            }
        };
        repeat(0)
    });

compute_size().then(size => console.log(size));