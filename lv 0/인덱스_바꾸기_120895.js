// 2022-12-26

const solution = (my_string, num1, num2) => {
    let result = [...my_string]
    result.splice(num1, 1, my_string[num2])
    result.splice(num2, 1, my_string[num1])
    return result.join('')
}

const another_solution = (my_string, num1, num2) => {
    let result = [...my_string];
    [result[num1], result[num2]] = [result[num2], result[num1]]
    return result.join('')
}