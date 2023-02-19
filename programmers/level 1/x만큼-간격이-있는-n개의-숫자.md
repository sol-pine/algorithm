# x만큼 간격이 있는 n개의 숫자
🔗 <a href="https://school.programmers.co.kr/learn/courses/30/lessons/12954">12954</a>

```javascript
function solution(x, n) {
  let answer = [];
  for (let i = 1; i <= n; i++) answer.push(x * i);
  return answer;
}
```
