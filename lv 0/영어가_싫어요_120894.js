// 2022-12-28

const number_list = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

const solution = numbers => {
    return Number(number_list.map((n, idx) => numbers = numbers.split(n).join(idx))[number_list.length - 1])
}

const reduce_solution = numbers => {
    return Number(number_list.reduce((acc, cur, idx) => acc.replaceAll(cur, idx), numbers))
}