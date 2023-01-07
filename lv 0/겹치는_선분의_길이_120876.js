// 2023-01-07

const solution = lines => {
    // lines의 원소는 [a, b] 형태이며, 범위는 -100 ≤ a < b ≤ 100 이므로
    // a ~ b를 카운트할 빈 배열을 만들어준다.
    let line = new Array(200).fill(0)

    lines.forEach(([a, b]) => {
        // 100을 기준으로 0이며
        // 양수인 경우, 100부터 +1
        // 음수인 경우, 100부터 -1
        // 값이랑 같은 인덱스에 횟수를 카운트해준다.
        for(; a < b; a++) line[a+100]++
    })
    // 1 이상인 수(두 번 카운트된 값)의 총 개수를 반환
    return line.reduce((acc, cur) =>  cur > 1 ? acc + 1 : acc, 0)
}