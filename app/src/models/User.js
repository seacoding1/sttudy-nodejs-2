"use strict"

const userStorage = require("./userStorage");

class User {
    constructor(body){
        this.body = body;
    }

    login(){
        //id와 pw라는 변수로 바로 받음
        // const { id, pw } = userStorage.getUsers("id", "pw");
        // console.log(id);
        //["hihi1", "hihi2", "hihi3"]
        // console.log(pw);
        //["1234", "1234", "1234"]

        const body = this.body;
        const { id, pw } = userStorage.getUserInfo(body.id);

        if(id) {
            if(id === body.id && pw === body.pw){
                return { success: true };
            }
            return { success: false, msg: "비밀번호가 틀렸습니다."};
        }
        return { success: false, msg: "존재하지 않는 아이디입니다."};
        
    }

}

module.exports = User;

