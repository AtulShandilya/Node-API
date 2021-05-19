// import * as fs from 'fs'
// import path from 'path';

const fs=require('fs');
const path=require('path');


const verifyLogin=(fileName,dirName,userName,password)=>{
    let filePath;
    if (dirName==""||dirName==undefined){
        filePath=(path.join(__dirname,'file',fileName))
    }else {
        filePath=(path.join(__dirname,'file',dirName,fileName))
    }

    if(fileName==''){
        return ["File Name is Incorrect!!",1]
    }else{
        try{
            const fileBuffer=fs.readFileSync(filePath);
            // console.log(fileBuffer.toString())
            let jsonObj=fileBuffer.toString();
            if (jsonObj.userName==userName&&jsonObj.password==password){
                if (userName=='Admin' || userName=='admin') {jsonObj.isAdmin=true}
                jsonObj.isLogin=true;
                return [(fileBuffer.toString()),0];
            }else {
                return ['username and password combination do not match',1];
            }
        } catch(err){
            return[err,2];
        }
    }
}


module.exports.verifyLogin = verifyLogin;
// export {readFile,writeFile}