const axios = require('axios')
const { meliConfig } = require('../config')
const Author = require('../models/Author')
const Res = require('../models/Res')
const Item = require('../models/Item')

async function getItemsBySearch(param) {
    const res = new Res()
    res.author = new Author()
    res.categories = []

    const { data } = await axios.get(`${meliConfig.domain}/${meliConfig.searchPath}/search?q=${param}&limit=4`)

    if (data.results.length > 0) {
        res.items = data.results
            .map(element => new Item(element, null, null))

        res.categories = data.filters.length > 0 ? data.filters[0].values[0].path_from_root : []
    }

    return res
}

async function getItemById(param) {
    const res = new Res()
    res.author = new Author()

    const { data } = await axios.get(`${meliConfig.domain}/${meliConfig.itemsPath}/${param}`)
    const description = await axios.get(`${meliConfig.domain}/${meliConfig.itemsPath}/${param}/description`)

    res.items = new Item(data, data.sold_quantity, description.data.plain_text)

    return res
}


module.exports = {
    getItemsBySearch,
    getItemById
}