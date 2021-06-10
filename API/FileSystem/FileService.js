// import * as fs from 'fs'
// import path from 'path';

const fs=require('fs');
const path=require('path');


const readFile=(fileName,dirName)=>{
    let filePath;
    if (dirName==""||dirName==undefined){
        filePath=(path.join(__dirname,'file',fileName))
    }else {
        filePath=(path.join(__dirname,'file',dirName,fileName))
    }
    // console.log(process.env);

    if(fileName==''){
        return ["File Name is Incorrect!!",1]
    }else{
        try{
            // console.log("b4 file read")
            const fileBuffer=fs.readFileSync(filePath);
            // console.log(fileBuffer.toString())
            return [(fileBuffer.toString()),0];
        } catch(err){
            return[err,2];
        }
    }
}

const writeFile=(fileName,dirName,fileObj)=>{
    let filePath;
    if (dirName==""||dirName==undefined){
        filePath=(path.join(__dirname,'file',fileName))
    }else {
        filePath=(path.join(__dirname,'file',dirName,fileName))
        console.log("filepath:",filePath)
    }
    if(fileName==''){
        return ["File Name is Incorrect!!",1]
    }else{
        try{
            const fileBuffer=JSON.stringify(fileObj);
            fs.writeFileSync(filePath,fileBuffer);
            const rtn = '{"returnCode":0,"returnObj":'+fileBuffer.toString()+'}'
            return rtn;
        } catch(err){
            console.log("error:",err)
            return '{"returnCode":2,"returnObj":" Error !! check server log"}'
        }
    }
}

module.exports.readFile = readFile;
module.exports.writeFile = writeFile;
// export {readFile,writeFile}