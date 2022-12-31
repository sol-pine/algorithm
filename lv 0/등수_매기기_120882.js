// 2022-12-31

const solution = score => {
    let avg = score.map(([english, math]) => (english + math) / 2)
    let sorted_arr = avg.slice().sort((a, b) => b - a)
    return avg.map(v => sorted_arr.indexOf(v) + 1)
}