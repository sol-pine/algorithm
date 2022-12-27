// 2022-12-27

const solution = (my_str, n) => {
    return Array
        .from({length: Math.ceil(my_str.length / n)}, (_, i) => i)
        .map(i => my_str.substring(i * n, i * n + n))
}