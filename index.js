//подключение express
const express = require('express')
// подключение cors
const cors = require('cors')
// создание объекта приложения
const app = express()
app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
//порт на котором происходит запуск приложения
const port = process.env.PORT || 3004
const {getTotalProduct} = require("./repository/db");

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/", async (request, response) => {
    const product = await getTotalProduct()
    if(product) {
        response.send(product)
    } else {
        response.sendStatus(404)
    }

})

app.post('/order', async (request, response) => {
    const {name, productIn} = await request.body
    const sum = productIn.reduce((acc, cur) => acc + cur.cost * cur.amount,0)
    let bodyMassage = `dear ${name} you order is ok, be happy, your total cost order is ${sum}`
    response.send(bodyMassage)
})

app.listen(port, () => {

})

