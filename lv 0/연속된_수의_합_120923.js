// 2023-01-09

// const solution = (num, total) => {
//     // total(전체 총 합) / num(연속된 수의 개수) => 평균(중간에 위치한 값)
//     // num의 절반을 구해 평균부터 시작 값까지의 간격을 구한다.
//     // 평균에서 시작 값까지의 간격을 뺀 값을 올림 처리를 해 연속된 수의 시작 값 min을 구한다.
//     const min = Math.ceil(total / num - Math.floor(num / 2))
//     // min부터 시작하고 길이가 num인 배열 반환
//     return Array.from({length:num}, (_, i) => i + min)
// }

const solution = (num, total) => {
    // 가장 작은 수와 가장 큰 수의 평균이 전체 평균과 동일(등차수열 특징 이용)
    // 가장 작은 수 찾기
    let min = (total / num) + ((1 - num) / 2)
    // min부터 시작하고 길이가 num인 배열 반환
    return Array.from({length:num}, (_, i) => i + min)
}