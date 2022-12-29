// 2022-12-29

const solution = (id_pw, db) => {
    const [id, pw] = id_pw
    const map = new Map(db)
    return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail'
}