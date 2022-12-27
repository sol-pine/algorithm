// 2022-12-27

const solution = (bin1, bin2) => {
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2)
}

/*
2진수 => 10진수
parseInt(num, 2)
10진수 => 2진수
num.toString(2)
 */