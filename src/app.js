"use strict" //es를 준수하겠다.

//모듈
const express = require('express');//express 모듈을 요청
const app = express(); //express를 실행시키기 위한 변수

//라우팅
const home = require("./routes/home") //현재폴더에서 routes라는 폴더에서 home 폴더에서 js파일을 불러와줘!

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

//use는 미들웨어를 등록하는 메서드
app.use("/", home); //루트(/)경로로 들어오면 home으로 보내주기

module.exports = app;