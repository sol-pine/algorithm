// 2022-12-25

const solution = (s1, s2) => {
    return s1.filter(s => s2.includes(s)).length
}