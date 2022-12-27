// 2022-12-25

const solution = n => {
    return Array
        .from({length: n}, (_, i) => i + 1)
        .filter(num => n % num === 0)
        .length
}

/*
배열 생성
Array.from({length: 배열의 길이}, (_, i) => i + 1)
인덱스 +1을 반복해 배열의 길이만큼 오름차순 숫자 배열 생성
 */