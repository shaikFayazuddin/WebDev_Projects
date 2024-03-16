const express = require("express");
const cors = require("cors")
const port = 3003

const app = express()
app.use(express.json())
app.use(cors())

const mainRouter = require("./routes/index")
// const app = express()


app.use("/api/v1", mainRouter)

app.listen(port, () => {
    console.log(`PayTm app listening on port ${port}`)
  })


