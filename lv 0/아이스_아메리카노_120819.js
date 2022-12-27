// 2022-12-24

const price = 5500

const solution = money => {
    return [Math.trunc(money / price), money % price]
}