# OXí´ì¦
ð <a href="https://school.programmers.co.kr/learn/courses/30/lessons/120907">120907</a>

```javascript
const solution = quiz => {
    // ì¬ë°ë¥¸ ëµì ê³ì°íë í¨ì
    const calc = (sign, num1, num2) => {
        return sign === '+' ? num1 + num2 : num1 - num2
    }
    // ë°°ì´ì ë¬¸ìì´ ììë¥¼ ê³µë°±ì ê¸°ì¤ì¼ë¡ ìë¦
    // => [ [ '3', '-', '4', '=', '-3' ], [ '5', '+', '6', '=', '11' ] ]
    let array = quiz.map(v => v.split(' '))
    // ë°°ì´ ììë¥¼ ê³ì° í¨ì íë¼ë¯¸í°ë¡ ì ë¬í´ ê³ì° ê²°ê´ê°ì ë°í ë°ì
    let answer = array.map(v => calc(v[1], +v[0], +v[2]))
    // í´ì¦ì ê²°ê´ê°ê³¼ ê³ì° ê²°ê´ê°ì ë¹êµ
    let quizAnswer = array.map(v => +v[4])
    return quizAnswer.map((v, i) => +v === answer[i] ? 'O' : 'X')
}
```
