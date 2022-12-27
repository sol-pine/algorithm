// 2022-12-26

const solution = n => {
    let slice = 6
    while (slice % n !== 0) {
        slice += 6
    }
    return slice / 6
}