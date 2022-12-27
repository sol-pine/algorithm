// 2022-12-26

const solution = array => {
    return [Math.max(...array), array.indexOf(Math.max(...array))]
}