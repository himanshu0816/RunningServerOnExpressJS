const express = require('express')
// console.log(express)
const app = express()
app.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>")
    // res.writeHead(200,{"Content-Type:text/html"})
})
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`server is running at port${PORT}`))
