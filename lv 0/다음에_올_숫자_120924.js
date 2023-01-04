// 2023-01-04

const solution = common => {
    let sequence = common[1] - common[0] === common[2] - common[1] ? '등차수열' : '등비수열'
    return sequence === '등차수열' ? common[common.length - 1] + (common[1] - common[0]) : common[common.length - 1] * (common[1] / common[0])
}