const { getItemsBySearch, getItemById } = require('../services/item.service')

async function getItems(req, res) {
    if (!req.query.search) {
        res.status(400).send({success:false, message: 'El parámetro no debe ser nulo.'})
        return
    }

    try {
        const response = await getItemsBySearch(req.query.search)
        res.status(200).send(response)
    } catch (error) {
        const {response} = error
        res.status(response.status).send({success: false, message: response.data.message})
    }
}

async function getItemDescription(req, res) {
    if (!req.params.itemId) {
        res.status(400).send({success:false, message: 'El parámetro no debe ser nulo.'})
        return
    }

    try {
        const response = await getItemById(req.params.itemId)
        res.status(200).send(response)
    } catch (error) {
        const {response} = error
        res.status(response.status).send({success: false, message: response.data.message})
    }
}

module.exports = {
    getItems,
    getItemDescription,
}