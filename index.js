const express = require("express")

const app = express()
const PORT = 8001

app.listen(PORT, () => `Server started at PORT: ${PORT}`)
