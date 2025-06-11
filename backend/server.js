const express=require("express")
const app=express()
const dotenv=require("dotenv").config()
const connectDb=require("./config/connectionDb")
const cors=require("cors")

const PORT=process.env.PORT || 5000
connectDb()

app.use(express.json())
app.use(cors())
app.use(express.static("public"))

app.use("/api",require("./routes/user"))
app.use("/api/recipe",require("./routes/recipe"))

app.listen(PORT,'0.0.0.0',(err)=>{
    console.log(`app is listening on port ${PORT}`)
})