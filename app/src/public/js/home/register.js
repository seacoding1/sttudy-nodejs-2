"use strict";

const userName = document.querySelector("#name"),
      id = document.querySelector("#id"),
      pw = document.querySelector("#pw"),
      confirmPw = document.querySelector("#confirm-pw"),
      regBtn = document.querySelector("button"),
      error = document.querySelector(".error");

regBtn.addEventListener("click", register);

function register() {

    const req = {
        userName : userName.value,
        id : id.value,
        pw : pw.value,
        confirmPw : confirmPw.value
    };
    console.log(req.id);

    if( req.pw !== req.confirmPw){
        error.style.display = 'block';
        error.innerHTML = "비밀번호가 일치하지 않습니다.";
        
    } else {
        fetch('/register', {
            method: "POST", //Restful API와 관련있음 공부하기..
            //내가 전달하는 데이터가 json 데이터라고 알려주기 위해 넣음
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(req)
        }).then((res) => res.json()) //promise 반환
          .then((res) => {
            if(res.success){
                location.href = "/login";
            } else {
                alert(res.msg);
            }
          })
          .catch((err) => {
            console.error(new Error("회원가입 중 에러 발생"));
          });
    
    }
    
};





