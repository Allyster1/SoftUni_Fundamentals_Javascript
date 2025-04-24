function distinctArray(array) {
    console.log([...new Set(array)].join(' '))
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])