import express from "express"
import dotenv from "dotenv"
import {connectDb} from "./config/db.js"
import productRouter from "./routes/productRoute.js"

dotenv.config()

const app = express()

app.use(express.json())

const PORT = process.env.PORT


app.use("/api/products", productRouter)

app.listen(PORT, ()=>{
  connectDb()
  console.log("Server running on http://localhost:" + PORT)
})