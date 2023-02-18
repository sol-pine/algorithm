# k의 개수
🔗 <a href="https://school.programmers.co.kr/learn/courses/30/lessons/120887">120887</a>

```javascript
const solution = (i, j, k) => {
    return Array(j - i + 1)
        .fill(i).map((a, b) => a + b)
        .join('').split('').filter(el => parseInt(el) === k).length
}
```
