// 2022-12-29

const solution = (numlist, n) => {
    return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b -n) || b - a)
}