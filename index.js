module.exports = function () {
    const fs = require('fs')
    const resolve = require('path').resolve
    const head = fs.readFileSync(resolve('./.git/head'))
    if (!head) return ''
    const reg = /([^/]+)$/.exec(head)
    if (!reg || !reg[1]) return ''
    return reg[1]
}
