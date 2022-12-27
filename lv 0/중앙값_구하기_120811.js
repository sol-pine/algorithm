// 2022-12-25

const solution = array => {
    return array.sort((a, b) => a - b)[Math.trunc(array.length / 2)]
}

/*
숫자배열 오름차순
Array.sort((a, b) => a - b)
원 배열 정렬, 복사 아님
 */