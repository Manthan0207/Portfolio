const path = require('path')
const express = require('express')
const port = 3000

const app = express()


//to use render with handlebars we also have to import that and use it's engine
const { engine } = require('express-handlebars'); // ✅ Correct way to import Handlebars
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))



//middleware to use static files.
app.use(express.static(path.join(__dirname, 'static')))
app.use('/', require(path.join(__dirname, 'routes/server.js')))




app.listen(port, () => {
    console.log('Server Listening on ', port);

})