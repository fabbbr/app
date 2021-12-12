export function email(text) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    return reg.test(text)
}

export function registerPassword(text) {
    // if(text.length < 5) {

    // }
}