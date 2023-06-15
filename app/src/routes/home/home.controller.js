"use strict"

const User = require("../../models/User");

const output = {
    hello : function (req, res){
        res.render('home/index');
     },
    
    login : function (req, res){
        res.render('home/login');
    },
    
    register : function (req, res){
        res.render('home/register');
    }  

}


//login API
const process = {
    login : (req, res) => {

        //요청한 값을 담은 객체(?)생성
        const user = new User(req.body);
        //user객체 안에 login메서드 실행한 값 담기
        const response = user.login();
        return res.json(response);

    },

    register : (req, res) => {

        //요청한 값을 담은 객체(?)생성
        const user = new User(req.body);
        //user객체 안에 login메서드 실행한 값 담기
        const response = user.login();
        return res.json(response);

    }
}

//이 함수들을 index.js에서 사용할 수 있도록 모듈 빼주기
module.exports = {
    output,
    process
};