"use strict"

const hello = function (req, res){
    res.render('home/index');
 };

 const login =  function (req, res){
    res.render('home/login');
};

//이 함수들을 index.js에서 사용할 수 있도록 모듈 빼주기
module.exports = {
    hello, 
    login
};

