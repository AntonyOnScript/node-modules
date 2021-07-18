const module01 = require('./module-01/module-01')
const module02 = require('./module-02/module-02')

module.exports.module = {
    module01,
    module02
}

console.log(module.exports)
console.log(module.exports.module.module01)
console.log(module.exports.module.module02)