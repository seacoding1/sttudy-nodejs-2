"use strict" //es를 준수하겠다.

const express = require('express');//express 모듈을 요청
const router = express.Router(); //express를 실행시키기 위한 변수

const controller = require('./home.controller');

router.get('/', controller.output.hello);
router.get('/login', controller.output.login);
router.post('/login', controller.process.login);
router.get('/register', controller.output.register);
router.get('/register', controller.process.register);

module.exports = router;