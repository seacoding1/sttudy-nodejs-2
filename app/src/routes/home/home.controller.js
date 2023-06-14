"use strict"

const userStorage = require("../../models/userStorage");

const output = {
    hello : function (req, res){
        res.render('home/index');
     },
    
    login : function (req, res){
        res.render('home/login');
    }  

}


//login API
const process = {
    login : (req, res) => {
        const id = req.body.id,
              pw = req.body.pw;

        const users = userStorage.getUsers("id", "pw");
        const response = {};

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pw[idx] === pw){
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인에 실패하셨습니다.";
        return res.json(response);
    }
}

//이 함수들을 index.js에서 사용할 수 있도록 모듈 빼주기
module.exports = {
    output,
    process
};