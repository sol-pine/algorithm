// 2022-12-25

const solution = my_string => {
    return my_string
        .split('')
        .filter(str => Number.isInteger(parseInt(str)))
        .reduce((acc, cur) => acc + Number(cur), 0)
}

/*
str.split('')
문자열을 배열로
 */