const notFoundController = require(`express`).Router()

notFoundController.get(`/`, (req,res) => 
{
    res.render(`404` , {
        title: `404 Not Found`
    })
    res.status(404)
})

module.exports = notFoundController