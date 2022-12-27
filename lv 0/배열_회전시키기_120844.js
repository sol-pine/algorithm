// 2022-12-26

const solution = (numbers, direction) => {
    direction === 'right' ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift())
    return numbers
}

/*
배열에 추가
Array.unshift 앞에 추가
Array.push 끝에 추가

배열 요소 제거
Array.shift() 첫번째 요소 제거 후 반환
Array.pop() 마지막 요소 제거 후 반환
 */