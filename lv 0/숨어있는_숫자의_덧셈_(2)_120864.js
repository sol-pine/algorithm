// 2022-12-27

const solution = my_string => {
    return my_string
        .split(/[A-z]/g)
        .filter(el => Number.isInteger(parseInt(el)))
        .reduce((acc, cur) => acc + Number(cur), 0)
}