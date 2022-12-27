// 2022-12-26

const solution = n => {
    let triangle = ''
    Array
        .from({length: n}, (_, i) => i + 1)
        .map(num => triangle = triangle + '*'.repeat(num) + '\n')
    console.log(triangle);
}