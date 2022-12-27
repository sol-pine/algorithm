// 2022-12-25

const solution = n => {
    return Array
        .from({length: n}, (_, i) => i + 1)
        .filter(num => num % 2 !== 0)
}