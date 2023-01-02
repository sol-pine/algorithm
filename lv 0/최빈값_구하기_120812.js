// 2023-01-02

// solution([1, 2, 2, 3, 3, 3, 4])
const solution = array => {
    // 요소가 반복되는 횟수를 reduce()를 이용해 누적된 값을 카운트
    // => { '1': 1, '2': 2, '3': 3, '4': 1 }
    let cnt_obj = array.reduce((acc, cur) => {
        acc.hasOwnProperty(cur) ? acc[cur] += 1 : acc[cur] = 1
        return acc
    },{})
    let result = Array
        // 매개변수(array)의 최대 값 + 1 길이의 오름차순 배열을 만들고
        // => [0, 1, 2, 3, 4, 5]
        .from({length: Math.max(...array) + 1}, (_, i) => i)
        // cnt_obj 의 n번째 값이 cnt_obj 의 최대값인 수만 필터링
        .filter(n => cnt_obj[n] === Math.max(...Object.values(cnt_obj)))
    // 배열의 길이가 1보다 크면(최빈값이 여러 개) -1, 아니면 배열의 첫번째 값을 반환
    return result.length > 1 ? -1 : result[0]
}