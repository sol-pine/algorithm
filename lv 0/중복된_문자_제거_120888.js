// 2022-12-26

const solution = my_string => {
    // Set 배열 중복 데이터 제거
    return [...new Set(my_string)].join('')
}

/*
const solution = my_string => {
    let result = []
    my_string.split('').map(str => !result.includes(str) && result.push(str))
    return result.join('')
}
*/