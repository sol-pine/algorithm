# 문자열 내 p와 y의 개수
🔗 <a href="https://school.programmers.co.kr/learn/courses/30/lessons/12916">12916</a>

````javascript
function solution(s) {
  let pCnt = 0;
  let yCnt = 0;
  s = s.toLowerCase();

  [...s].forEach((str) => {
    if (str === "p") pCnt++;
    if (str === "y") yCnt++;
  });

  return pCnt === yCnt;
}
```
