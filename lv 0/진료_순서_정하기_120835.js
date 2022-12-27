// 2022-12-27

const solution = emergency => {
    let urgent_order = [...emergency].sort((a, b) => b - a)
    return emergency.map(e => urgent_order.indexOf(e) + 1)
}