// 2022-12-24

const solution = (array, height) => {
    return array.filter(h => h > height).length
}