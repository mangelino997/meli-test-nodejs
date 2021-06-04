require('dotenv').config()

const config = {
    appConfig:{
        host: process.env.APP_HOST,
        port: process.env.PORT || 3000
    },
    meliConfig:{
        domain: process.env.MLA_SITES_URL,
        searchPath: process.env.PATH_SITES,
        itemsPath: process.env.PATH_ITEMS
    }
}

module.exports = config