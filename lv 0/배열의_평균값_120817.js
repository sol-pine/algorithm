// 2022-12-24

const solution = numbers => {
    return numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length
}