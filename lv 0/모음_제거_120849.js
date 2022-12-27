// 2022-12-25

const solution = my_string => {
    return my_string
        .split('')
        .filter(str => !['a', 'e', 'i', 'o', 'u'].includes(str))
        .join('')
}

// 정규식 사용
const another_solution = my_string => {
    return my_string.replace(/[aeiou]/g, '')
}