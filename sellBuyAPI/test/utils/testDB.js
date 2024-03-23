const SellBuy = require("../../src/mongoose/models/sellBuy")
const mongoose = require("mongoose")
require("../../src/mongoose/connect_db/mongoose")

const productData = [
    {
        _id: new mongoose.Types.ObjectId,
        productName : "Laptop",
        costPrice : 8000,
        soldPrice : 9000
    },
    {
        _id: new mongoose.Types.ObjectId(),
        productName: "Smartphone",
        costPrice: 500,
        soldPrice: 600
    },
    {
        _id: new mongoose.Types.ObjectId(),
        productName: "Headphones",
        costPrice: 50,
        soldPrice: 70
    },
    {
        _id: new mongoose.Types.ObjectId(),
        productName: "Tablet",
        costPrice: 300,
        soldPrice: 350
    }
    
]

const setUpDatabase = async()=>{
    await new SellBuy(productData[0]).save()
    await new SellBuy(productData[1]).save()
    await new SellBuy(productData[2]).save()
    await new SellBuy(productData[3]).save()
}

module.exports={
    setUpDatabase,
    productData
}