// 2022-12-26

const solution = (num, k) => {
    let arr = [...num.toString()]
    return arr.includes(k.toString()) ? arr.indexOf(k.toString()) + 1 : -1
}