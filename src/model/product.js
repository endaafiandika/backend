const database = require('../../db')
const product = {}

product.add = (nama, harga, stok, images) => {
    return new Promise((resolve, reject) => {
        database.query(`INSERT INTO produk (nama, harga, stok, images) VALUES ('${nama}','${harga}', '${stok}', '${images}')`)
        .then(res => {
            resolve(res)
        }) 
        .catch (err => {
            reject("gagal")
        })
    })
    
},

product.edit = (id, nama, harga, stok, images) => {
    database.query(`UPDATE produk SET nama='${nama}', harga='${harga}', stok='${stok}', images='${images}' WHERE id=${id} `)
    .then(res => {
        return res.rows
    })
    .catch(err => {
        console.log(err)
    })
}

product.delete = (id) => {
    database.query(`DELETE FROM produk WHERE id=${id} `)
    .then(res => {
        return res.rows
    })
    .catch(err => {
        console.log(err)
    })
}
module.exports = product