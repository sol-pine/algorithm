// 2022-12-27

const solution = s => {
    // const cnt = {}
    // s.split('').forEach(x => cnt[x] ? cnt[x] += 1 : cnt[x] = 1)
    // return Object.entries(cnt).map(x => x[1] === 1 ? x[0] : '').sort().join('')
    const result = []
    s.split('').forEach(el => s.indexOf(el) === s.lastIndexOf(el) ? result.push(el) : null)
    return result.sort().join('')
}