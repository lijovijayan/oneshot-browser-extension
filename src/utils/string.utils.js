export function FormatString(str, ...val) {
    let _str = str
    for (let index = 0; index < val.length; index += 1) {
        _str = _str?.replace(`{${index}}`, val[index])
    }
    return _str
}
