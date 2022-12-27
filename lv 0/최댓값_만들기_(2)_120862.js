// 2022-12-26

const solution = numbers => {
    let arr = numbers.sort((a, b) => a - b)
    return Math.max(arr[0] * arr[1], arr[arr.length - 1] * arr[arr.length - 2])
}