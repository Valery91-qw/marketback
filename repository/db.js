// подключение mongodb
const { MongoClient } = require('mongodb')

const getTotalProduct = async () => {
    const uri = process.env.MONGODB_URI

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    try {
        await client.connect()
        const database = client.db('Marcet')
        const product = database.collection('product')
        const one = await product.find({}).toArray()
        if(one) {
            return await one
        } else  {
            console.log(one)
        }

    } finally {
        await client.close()
    }


}
exports.getTotalProduct = getTotalProduct
