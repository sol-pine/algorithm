// 2022-12-26

const solution = age => {
    const char = 'abcdefghij'
    return age.toString().split('').map(el => char[Number(el)]).join('')
}