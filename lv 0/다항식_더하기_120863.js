// 2023-01-02

// solution("3x + 7 + x + 2x")
const solution = polynomial => {
    // x항 계산
    let x = polynomial
        // + 기호를 기준으로 polynomial 문자열 자르기
        // => [ '3x', '7', 'x', '2x' ]
        .split(' + ')
        // 'x' 가 포함된 문자 필터링
        // => [ '3x', 'x', '2x' ]
        .filter(v => v.includes('x'))
        // 'x'를 공백으로, '(1)x'의 경우 '1'로 변환
        // => [ '3', '1', '2' ]
        .map(v => v.replace('x', '') || '1')
        // 총 합 계산
        .reduce((acc, cur) => acc + Number(cur), 0)

    // 상수항 계산
    let num = polynomial
        // + 기호를 기준으로 polynomial 문자열 자르기
        // => [ '3x', '7', 'x', '2x' ]
        .split(' + ')
        // 'x' 가 포함되지 않은 문자열
        // => [ '7' ]
        .filter(v => !v.includes('x'))
        // 총 합 계산
        .reduce((acc, cur) => acc + Number(cur), 0)

    let result = []

    // x가 0이 아닌 값이 있으면 x를 배열에 추가, x가 1일 때는 계수 생략
    x ? result.push(x === 1 ? 'x' : x + 'x') : null
    num? result.push(num) : null

    // 배열의 요소를 문자열로 합치기
    return result.join(' + ')
}