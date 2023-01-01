// 2023-01-01

const solution = n => {
    let numbers = n;
    let original_number = 1;
    while(original_number <= numbers){
        original_number % 3 === 0 || original_number.toString().includes('3') ? numbers++ : null
        original_number++
    }
    return numbers
}

const another_solution = n => {
    return [...Array(n * 3)]
        .map((_, i) => i + 1)
        .filter(v => v % 3 !== 0 && !v.toString().includes('3'))[n - 1]
}