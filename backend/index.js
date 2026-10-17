require('dotenv').config()
const express=require('express')
// don't need these here because we have written above code import express from "express"
const app=express()
const port=3000

app.get('/',(req,res)=>{
    res.send('Hello World!')
});

app.get('/twitter',(req,res)=>{
    res.send('chandandotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please Login at Chai aur Code</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai Aur Code</h2>")
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`);
})