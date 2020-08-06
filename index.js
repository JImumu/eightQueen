const check = (x, y, checkerboard) => {
    let safe = true
    for (let i = 0; i < checkerboard.length; i++) {
      if ((checkerboard[i].x === x || checkerboard[i].y === y) || Math.abs(checkerboard[i].x - x) === Math.abs(checkerboard[i].y - y)) {
          safe = false
          break
      }
    }
    return safe
}

const getAllMethods = n => {
    if (n < 4) {
        throw new Error('棋盘宽度小于4，无解')
    }
    let res = []

    const setCheckerboard = (currentCol, end, checkerboard = []) => {
        for (let i = 0; i < end; i++) {
            if (check(currentCol, i, checkerboard)) {
                let checkerboardNext = [...checkerboard]
                checkerboardNext.push({x: currentCol, y: i})
                if (currentCol === end - 1) {
                    res.push(checkerboardNext)
                } else {
                    setCheckerboard(currentCol + 1, end, checkerboardNext)
                }
            }
        }
    }
    setCheckerboard(0, n)
    return res
}
getAllMethods(8)
