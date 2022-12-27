// 2022-12-26

const solution = my_string => {
    return Array
        .from(my_string)
        .map((str, idx) => str === my_string.toUpperCase().split('')[idx] ? str.toLowerCase() : str.toUpperCase())
        .join('')
}