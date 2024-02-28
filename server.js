// import the app
const app = require('./app.js')

// configuring the port
require(`dotenv`).config()
const PORT = process.env.PORT || 3003

// now the app listens to when we run using the PORT
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})