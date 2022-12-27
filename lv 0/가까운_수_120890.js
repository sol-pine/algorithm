// 2022-12-27

const solution = (array, n) => {
    let arr = array.sort((a, b) => a - b)
    let dif_arr = arr.map(num => Math.abs(num - n))
    return arr[dif_arr.indexOf(Math.min(...dif_arr))]
}

// Math.abs(number) 절대값 반환(음수를 양수로)