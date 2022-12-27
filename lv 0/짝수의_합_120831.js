// 2022-12-23

const solution = n => {
    // n이 10일 때, 빈 배열 만들기 [ <10 empty items> ]
    return Array(n)
        // undefined로 채우기 [ undefined * 10 ]
        .fill()
        // index에 1씩 더한 숫자를 반복해서 채우기 [ 1, 2, 3, ... 10 ]
        .map((_, i) => i + 1)
        // 짝수 필터링 [ 2, 4, 6, 8, 10 ]
        .filter(num => num % 2 === 0)
        // 누적 더하기 30
        .reduce((acc, cur) => acc + cur, 0)
}

/*
Array.reduce((누적값, 현재값) => 계산식, 초기값)
 */