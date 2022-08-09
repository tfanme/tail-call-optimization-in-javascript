/**
 * 采用ES6写法的compute max callstack size
 * @param size
 * @returns {void|*}
 */
computeMaxCallStackSize = (size = 1) => {
    try {
        return computeMaxCallStackSize(size + 1)
    } catch (error) {
        console.log(size, error)
    }
};

computeMaxCallStackSize(1);