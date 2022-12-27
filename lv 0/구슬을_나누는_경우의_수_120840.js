// 2022-12-27

const solution = (balls, share) => {
    return Array.from({length: share}, (_, i) => balls - i).reduce((acc, cur) => acc * cur)
        / Array.from({length: share}, (_, i) => share - i).reduce((acc, cur) => acc * cur)
}