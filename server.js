// import express from "express";
// import {readFile,writeFile} from './API/FileSystem/FileService.js'

const express=require('express')
const fo=require('./API/FileSystem/FileService.js')
const ls=require('./API/FileSystem/LoginService.js')
const cors=require('cors');
const bodyParser=require('body-parser')
const app=express();

app.use(cors());
app.options('*', cors()) // include before other routes

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: true, limit:'50mb' }));
app.use(bodyParser.json({ extended: true, limit:'50mb' }));

// create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false,limit:'50mb' })



app.get('',(req,res)=>{
    res.send("Hello Express")
})


//*************************************************************************************************
// ************ Get Service ***********************************************************************
//*************************************************************************************************
app.get('/fileService',(req,res)=>{
    // console.log("Operation:",req.query.operation,':','read',':')

    if(req.query.operation==='read'){
        console.log("read file:",req.query.filename);
        res.send(fo.readFile(req.query.filename,req.query.dir));
    }else
        if (req.query.operation==='write'){
            res.send(fo.writeFile(req.query.filename,req.query.dir,req.query.fileobj))
    }else{
            res.send(["Wrong Operation",1]);
        }
})

//*************************************************************************************************
// *************** POST service  ******************************************************************
//*************************************************************************************************
app.post('/fileService',urlencodedParser,(req,res)=>{
    if(req.query.operation==='read'){
        console.log("read file:",req.query.filename);
        res.send(fo.readFile(req.query.filename,req.query.dir));
    }else
    if (req.query.operation==='write'){
        console.log("write file:",req.query.filename);
        console.log("body:",req.body)
        res.send(fo.writeFile(req.query.filename,req.query.dir,req.body))
    }else{
        console.log("Wrong Operation")
        res.send(["Wrong Operation",1]);
    }
})

//*************************************************************************************************
// ***************** Login Service ****************************************************************
//*************************************************************************************************
app.get('/LoginService',(req,res)=>{
    //console.log("req.query:",req.query)
    //console.log("1st req.query:",req.query);
    if (req.query.operation == "login"){
        //console.log("req.query:",req.query);
        res.send(ls.verifyLogin(req.query.filename,req.query.dir,req.query.userName,req.query.password));
    }else if (req.query.operation == "register"){
        //req.query.userObj.isLoggedIn=true
        //console.log("register file:",req.query.filename);
        res.send(fo.writeFile(req.query.filename,req.query.dir,req.query.userObj))
    }else{
        console.log("bad request at server")
    }

})

app.listen(4003,()=>{
    console.log("Server is up on and running")
})