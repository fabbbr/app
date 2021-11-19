export function objSize(obj) {
    let size = 0, key
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}

export function objFormat(obj) {
    for(let key in obj) {
        if(obj.hasOwnProperty(key) && obj[key] === undefined) obj[key] = ''
    }
    return obj
}