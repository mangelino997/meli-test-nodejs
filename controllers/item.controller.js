const { getItemsBySearch, getItemById } = require('../services/item.service')
const { handleError } = require('../utils/handleError')

async function getItems(req, res) {
    if (!req.query.search) {
        let message = handleError(400)
        res.status(400).send({ success: false, message: message })
        return
    }

    try {
        const response = await getItemsBySearch(req.query.search)
        res.status(200).send(response)
    } catch (error) {
        const { response } = error
        res.status(response.status).send({ success: false, message: response.data.message })
    }
}

async function getItemDescription(req, res) {
    if (!req.params.itemId) {
        let message = handleError(400)
        res.status(400).send({ success: false, message: message})
        return
    }

    try {
        const response = await getItemById(req.params.itemId)
        res.status(200).send(response)
    } catch (error) {
        const { response } = error
        let message = handleError(response.status)
        res.status(response.status).send({ success: false, message: message })
    }
}

module.exports = {
    getItems,
    getItemDescription,
}