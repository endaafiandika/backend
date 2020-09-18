const model = require('../model/product')
const product = {}

product.Add = async ( req, res ) => {
    try {
        const {nama, harga, stok, images} = req.body
        console.log(req.body)
        const data = await model.add(nama, harga, stok, images)
        return res.send('Data Ditambahkan')   
    } catch (error) {
        return res.send(req.body)
    }
},

product.Edit = async (req, res) =>{
    try {
        const {id, nama, harga, stok, images} = req.body
        console.log(req.body)
        const data = await model.edit(id, nama, harga, stok , images)
        return res.send(data.rows)   
    } catch (error) {
        return res.send(error)
    }
}

product.Delete = async ( req, res ) => {
    try {
        const {id} = req.body
        console.log(req.body)
        const data = model.delete(id)
        return res.send(data.rows)   
    } catch (error) {
        return res.send(req.body)
    }
},
module.exports = product