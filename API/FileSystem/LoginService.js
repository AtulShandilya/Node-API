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
    let rtn=null;
    if(fileName==''){
        return ["File Name is Incorrect!!",1]
    }else{
        try{
            const fileBuffer=fs.readFileSync(filePath);
            console.log("login details",fileBuffer)
            let jsonObj=JSON.parse(JSON.parse(fileBuffer));
            console.log("file text:",jsonObj)
            console.log("user:",jsonObj["userName"],"pass:",jsonObj.password)
            if (jsonObj.userName==userName&&jsonObj.password==password){
                if (userName.toUpperCase() =='ADMIN' ) {jsonObj.isAdmin=true}
                jsonObj.isLogin=true;
                console.log("Login Success")
                console.log("file buffer:",fileBuffer)
                rtn = '{"returnCode":0,"returnObj":'+fileBuffer.toString()+'}'
                console.log("return:",rtn)
                return rtn
            }else {
                rtn='{"returnCode":1,"returnObj":"username and password combination do not match"}'
                console.log("return:",rtn)
                return rtn
            }
        } catch(err){
            rtn = '{"returnCode":2,"returnObj":"User is not registered!"}'
            console.log("return:",rtn)
            return rtn
        }
    }
}


module.exports.verifyLogin = verifyLogin;
// export {readFile,writeFile}