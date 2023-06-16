"use strict";

class userStorage {
    //클래스 자체에서 users에 접근하고자 하면 static을 붙여 정적 변수로 만들어줘야 한다.
    //은닉화(private) : private 변수로 바꿔주려면 # 붙이기
    //데이터를 함부로 아무곳에서 사용하지 못하도록 private 변수로 바꿔주기
    static #users = {
        id : ["hihi1", "hihi2", "hihi3"],
        pw : ["1234", "1234", "1234"],
        name : ["김이박", "아이린", "김민정"]
    };
    //은닉화한 변수를 함수로
    static getUsers(...fields){
        const users = this.#users;
        //            ["id", "pw"]       초기값  , 순회하는 값
        const newUsers = fields.reduce((newUsers, field) =>{
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

    static getUserInfo(id){
        const users = this.#users;
        //받아온 id가 있는 인덱스 번호
        const idx = users.id.indexOf(id);
        //users의 key값들만 배열로 담기
        const usersKeys = Object.keys(users); // =>ㄴ [id, pw, name]

        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo; 
    }

    

}

module.exports = userStorage;