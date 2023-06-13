"use strict"

const output = {
    hello : function (req, res){
        res.render('home/index');
     },
    
    login : function (req, res){
        res.render('home/login');
    }  

}

const users = {
    id : ["hihi1", "hihi2", "hihi3"],
    pw : ["1234", "1234", "1234"]
};

//login API
const process = {
    login : (req, res) => {
        const id = req.body.id,
              pw = req.body.pw;

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pw[idx] === pw){
                return res.json({
                   success : true, 
                });
            }
        }

        return res.json({
            
        });
    }
}

//이 함수들을 index.js에서 사용할 수 있도록 모듈 빼주기
module.exports = {
    output,
    process
};