// 2022-12-28

const solution = (numbers, k) => {
    return numbers[2 * (k - 1) % numbers.length]
}