// 2022-12-27

const solution = n => {
    let fac = 1
    let i = 1

    while (n > fac * i) fac *= ++ i
    return i
}