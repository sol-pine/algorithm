// 2022-12-26

const solution = my_string => {
    return my_string
        .split('')
        .map(str => Number(str))
        .filter(el => !isNaN(el))
        .sort((a, b) => a - b)
}