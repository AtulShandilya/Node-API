// import express from "express";
// import {readFile,writeFile} from './API/FileSystem/FileService.js'

const express=require('express')
const fo=require('./API/FileSystem/FileService.js')
const cors=require('cors');
const bodyParser=require('body-parser')
const app=express();


app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('',(req,res)=>{
    res.send("Hello Express")
})

app.get('/fileService',(req,res)=>{
    console.log("Operation:",req.query.operation,':','read',':')

    if(req.query.operation=='read'){
        console.log("read file:",req.query.filename);
        res.send(fo.readFile(req.query.filename));
    }else
        if (req.query.operation=='write'){
            res.send(fo.writeFile(req.query.filename,req.query.fileobj))
    }else{
            res.send(["Wrong Operation",1]);
        }
})

app.listen(4000,()=>{
    console.log("Server is up on and running")
})