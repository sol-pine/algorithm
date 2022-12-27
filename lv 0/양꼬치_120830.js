// 2022-12-24

const lamb = 12000
const drink = 2000

const solution = (n, k) => {
    return lamb * n + drink * (k - Math.trunc(n / 10))
}