"use strict";

//readFile 자체에서 promise라는 것을 제공함
const fs = require("fs").promises; //

class userStorage {
    //클래스 자체에서 users에 접근하고자 하면 static을 붙여 정적 변수로 만들어줘야 한다.
    //은닉화(private) : private 변수로 바꿔주려면 # 붙이기
    //데이터를 함부로 아무곳에서 사용하지 못하도록 private 변수로 바꿔주기
    //private한 변수나 메서드는 최상단에 올려줘야 한다.

    static #getUserInfo(data, id){
        const users = JSON.parse(data);
        //받아온 id가 있는 인덱스 번호
        const idx = users.id.indexOf(id);
        //users의 key값들만 배열로 담기
        const usersKeys = Object.keys(users); // =>ㄴ  

        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo; 
    }

    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        // const users = this.#users;
        //            ["id", "pw"]       초기값  , 순회하는 값
        if(isAll) return users;

        const newUsers = fields.reduce((newUsers, field) => {
            
            //users에 해당하는 키값=filed 이 있는지
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }

            console.log(newUsers);

            return newUsers;
        }, {});
           //초기값 (이게 지정 안 되어 있으면 newUsers가 초기값)
        return newUsers;
    }


    //은닉화한 변수를 함수로
    static getUsers(isAll, ...fields){
        console.log(fields);
        return fs
        .readFile("./src/database/users.json") //promise반환, then()으로 접근가능 then()은 성공했을 때, catch()로 에러 잡을 수 있음,
        .then((data) => {
             return this.#getUsers(data, isAll, fields);
        })
        .catch(console.error);

       
    }

    static getUserInfo(id){

        return fs
          .readFile("./src/database/users.json") //promise반환, then()으로 접근가능 then()은 성공했을 때, catch()로 에러 잡을 수 있음,
          .then((data) => {
               return this.#getUserInfo(data, id);
          })
          .catch(console.error);
        
    }

   

    static async save(userInfo){
        console.log(userInfo);
        const users = await this.getUsers(true, userInfo);
        if(users.id.includes(userInfo.id)){
            throw "이미 존재하는 아이디입니다";
        }
        users.id.push(userInfo.id);
        users.pw.push(userInfo.pw);
        users.name.push(userInfo.userName);
        //저장할 파일의 경로, 저장할 데이터
        fs.writeFile('./src/database/users.json', JSON.stringify(users));
        return { success : true };

    }
}

module.exports = userStorage;