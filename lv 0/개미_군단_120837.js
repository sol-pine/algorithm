// 2022-12-25

const solution = hp => {
    const general = Math.trunc(hp / 5)
    const soldier = Math.trunc((hp - (general * 5)) / 3)
    const worker = hp - ((general * 5) + (soldier * 3))
    return general + soldier + worker
}