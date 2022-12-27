// 2022-12-27

const solution = (i, j, k) => {
    return Array(j - i + 1)
        .fill(i).map((a, b) => a + b)
        .join('').split('').filter(el => parseInt(el) === k).length
}