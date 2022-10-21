const cryptoControler = require(`express`).Router()

const {hasUser} = require(`../middlewares/guards`)
const { createCrypto } = require("../services/cryptoService")
const { parseError } = require("../util/parser")


cryptoControler.get(`/create`, hasUser(),(req,res) => {
    res.render(`create`, {
        title:`Create Crypto Token`
    })
})

cryptoControler.post(`/create`, async(req,res) => {
    const crypto = {
        name : req.body.name,
        imageUrl : req.body.imageUrl,
        price : req.body.price,
        description : req.body.description,
        paymentMethod : req.body.paymentMethod
    }

    try {
        await createCrypto(crypto)
        res.redirect(`/crypto/catalog`)
    } catch (error) {
        res.render(`create`, {
            title:`Create Crypto Token`,
            errors: parseError(error),
            body: crypto
        })
    }


})

module.exports = cryptoControler