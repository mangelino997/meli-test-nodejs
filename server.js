const app = require('./app')

const { appConfig } = require('./config')

async function initApp(appConfig) {
    if (appConfig.port)
        app.listen(appConfig.port, () => console.log(`listen on ${appConfig.port}`))
    else
        process.exit(1);
}

initApp(appConfig)