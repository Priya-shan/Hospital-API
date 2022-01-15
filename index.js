const express=require("express");
const importdata=require("./data.json");
const app=express();
let port = process.envnPORT || 3000;

app.get("/",(req,res)=>{
    res.send(importdata);
});

app.listen(port,()=>{
    console.log(`listening on port http://localhost:${port}`);
})