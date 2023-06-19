"use strict";

const id = document.querySelector("#id"),
pw = document.querySelector("#pw"),
loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {

    const req = {
        id : id.value,
        pw : pw.value
    };

    fetch('/login', {
        method: "POST", //Restful API와 관련있음 공부하기..
        //내가 전달하는 데이터가 json 데이터라고 알려주기 위해 넣음
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req)
    }).then((res) => res.json()) //promise 반환
      .then((res) => {
        if(res.success){
            location.href = "/";
        } else {
            alert(res.msg);
        }
      })
      .catch((err) => {
        console.error(new Error("로그인 중 에러 발생"));
      });

};

