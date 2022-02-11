export const objSize = (obj) => {
    let size = 0,
        key
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++
    }
    return size
}

export const objFormat = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === undefined) obj[key] = ''
    }
    return obj
}

export const ucFirst = (str) => {
    if (str.length > 0) {
        return str[0].toUpperCase() + str.substring(1)
    } else {
        return str
    }
}
