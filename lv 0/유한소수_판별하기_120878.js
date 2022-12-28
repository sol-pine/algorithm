// 2022-12-28

const solution = (a, b) => {
    // a와 b의 최대공약수
    const gcd = get_gcd(a, b)
    // 최대공약수(gcd)로 나눈 분모
    let m = b / gcd

    while(m % 2 === 0) m /= 2
    while(m % 5 === 0) m /= 5

    return m === 1 ? 1 : 2
}

// 최대공약수 반환 함수
const get_gcd = (num1, num2) => {
    return Array
        .from({length: Math.max(num1, num2)}, (_, i) => i + 1)
        .filter(n => num1 % n === 0 && num2 % n === 0)
        .sort((a, b) => b - a)[0]
}