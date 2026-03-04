const express = require("express")
const cors = require("cors")
const http = require("http")
const socketio = require("socket.io")
require("dotenv").config()

const connectDB = require("./config/db")

const authRoutes = require("./routes/authRoutes")
const complaintRoutes = require("./routes/complaintRoutes")

connectDB()

const app = express()

app.use(cors())
app.use(express.json())

const server = http.createServer(app)

const io = socketio(server,{
 cors:{origin:"*"}
})

app.use((req,res,next)=>{
 req.io = io
 next()
})

app.use("/api/auth",authRoutes)
app.use("/api/complaints",complaintRoutes)

server.listen(5000,()=>{
 console.log("Server running")
})