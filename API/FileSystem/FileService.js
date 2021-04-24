// import * as fs from 'fs'
// import path from 'path';

const fs=require('fs');
const path=require('path');


const readFile=(fileName)=>{
    const filePath=(path.join(__dirname,'file',fileName))
    // console.log(process.env);

    if(fileName==''){
        return "File Name is Incorrect!!"
    }else{
        try{
            // console.log("b4 file read")
            const fileBuffer=fs.readFileSync(filePath);
            // console.log(fileBuffer.toString())
            return [(fileBuffer.toString()),0];
        } catch(err){
            return[err,1];
        }
    }
}

const writeFile=(fileName,fileObj)=>{
    const filePath=(path.join(__dirname,'file',fileName))
    if(fileName==''){
        return "File Name is Incorrect!!"
    }else{
        try{
            const fileBuffer=JSON.stringify(fileObj);
            fs.writeFileSync(filePath,fileBuffer);
            return [(fileBuffer),0];
        } catch(err){
            return[err,1];
        }
    }
}

module.exports.readFile = readFile;
module.exports.writeFile = writeFile;
// export {readFile,writeFile}