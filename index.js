//подключение express
const express = require('express')
// подключение cors
const cors = require('cors')
// создание объекта приложения
const app = express()
//порт на котором происходит запуск приложения
const port = process.env.PORT || 3004
const {getTotalProduct} = require("./repository/db");
app.use(cors())
// app.use(express.urlencoded({extended: true}))
// app.use(express.json())

app.get("/", async (request, response) => {
    const product = await getTotalProduct()
    if(product) {
        response.send(product)
    } else {
        response.sendStatus(404)
    }

})

app.listen(port, () => {

})

