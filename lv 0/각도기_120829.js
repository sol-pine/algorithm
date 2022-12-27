// 2022-12-23

const solution = angle => {
    return angle < 90 ? 1 : angle === 90 ? 2 : angle === 180 ? 4 : 3
}

const another_solution = angle => [0, 90, 91, 180].filter(a => angle >= a).length