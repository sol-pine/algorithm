// 2022-12-28

const solution = chicken => {
    // 치킨 1마리 당 쿠폰 1장 (치킨 수 = 쿠폰 수)
    let coupon = chicken
    // 서비스 치킨은 0부터 시작
    let free_chicken = 0
    // 쿠폰이 10장 이상 남아있으면 반복 돌림 (쿠폰 10장 당 서비스 치킨 1마리)
    while(coupon >= 10){
        // 서비스 치킨은 쿠폰을 10으로 나눈 몫 (10장 당 1마리)
        free_chicken += Math.trunc(coupon / 10)
        // 쿠폰은 서비스 치킨 수 (서비스에도 쿠폰 들어있음) + 남은 쿠폰
        coupon = Math.trunc(coupon / 10) + coupon % 10
    }
    return free_chicken
}