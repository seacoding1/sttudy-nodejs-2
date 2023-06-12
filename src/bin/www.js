"use strict" //es를 준수하겠다.

const PORT = 8059;

const app = require('../app'); //상위 폴더로 가서 app.js 임포트

app.listen(PORT, () => {
    console.log('서버 시작');
});