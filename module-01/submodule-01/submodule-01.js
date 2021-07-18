const submodule_01_01_01 = "This is the submodule-01.js"
const submodule_01_02_01 = require('../submodule-02/submodule-02').submodule_01_02_01

module.exports.submodule_01_01_01 = {
    submodule_01_01_01,
    submodule_01_02_01
}