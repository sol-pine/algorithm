// 2022-12-26

const solution = n => {
    return Array
        .from({length: n}, (_, i) => i + 1)
        .filter(num => n % num === 0)
}