// 2022-12-26

const solution = n => {
    return Array
        .from({length: n}, (_, i) => i + 1)
        .map(num => isCompositeNum(num))
        .filter(num => num !== 0)
        .length
}

// 합성수 판별 함수
const isCompositeNum = n => {
    return Array
        .from({length: n}, (_, i) => i + 1)
        .filter(num => num !== 1 && num !== n)
        .filter(num => n % num === 0)
        .length
}