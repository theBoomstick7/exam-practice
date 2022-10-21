const {Crypto} = require(`../models/Crypto`)
async function getAll () {
    return Crypto.find({}).lean()
}

async function getById (id) {
    return Crypto.findById(id)
}

async function deleteById(id) {
    return Crypto.findByIdAndDelete(id)
}

async function createCrypto(data) {
    return Crypto.create(data)
}



module.exports = {
    getAll,
    getById,
    deleteById,
    createCrypto
}