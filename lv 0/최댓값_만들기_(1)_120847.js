// 2022-12-25

const solution = numbers => {
    numbers.sort((a, b) => b - a)
    return numbers[0] * numbers[1]
}

/*
숫자 배열 내림차순
numbers.sort((a, b) => b - a)
numbers.sort((a, b) => a - b).reverse()
 */