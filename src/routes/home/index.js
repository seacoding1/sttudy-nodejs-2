"use strict" //es를 준수하겠다.

const express = require('express');//express 모듈을 요청
const router = express.Router(); //express를 실행시키기 위한 변수

const controller = require('./home.controller');

router.get('/', controller.hello);

router.get('/login', controller.login);

module.exports = router;