# OX퀴즈
🔗 <a href="https://school.programmers.co.kr/learn/courses/30/lessons/120907">120907</a>

```javascript
const solution = quiz => {
    // 올바른 답을 계산하는 함수
    const calc = (sign, num1, num2) => {
        return sign === '+' ? num1 + num2 : num1 - num2
    }
    // 배열의 문자열 요소를 공백을 기준으로 자름
    // => [ [ '3', '-', '4', '=', '-3' ], [ '5', '+', '6', '=', '11' ] ]
    let array = quiz.map(v => v.split(' '))
    // 배열 요소를 계산 함수 파라미터로 전달해 계산 결괏값을 반환 받음
    let answer = array.map(v => calc(v[1], +v[0], +v[2]))
    // 퀴즈의 결괏값과 계산 결괏값을 비교
    let quizAnswer = array.map(v => +v[4])
    return quizAnswer.map((v, i) => +v === answer[i] ? 'O' : 'X')
}
```
