const express=require('express')

const app=express();

app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.send('Hello, World')
})

const PORT=3000
app.listen(PORT,(req,res)=>{
 console.log(`server is listening on port ${PORT}`)
})


//for this file to execute
//node server.js and goto the browser and type "localhost:3000" and hit the Enter button