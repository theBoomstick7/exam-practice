const authController = require("../controllers/authController")
const cryptoControler = require("../controllers/cryptoController")
const homeController = require("../controllers/homeController")
const notFoundController = require("../controllers/notFoundController")


module.exports = (app) => {
    app.use(`/`, homeController)
    app.use(`/auth`, authController)
    app.use(`/crypto`,cryptoControler)
    app.use(`*`, notFoundController)
}