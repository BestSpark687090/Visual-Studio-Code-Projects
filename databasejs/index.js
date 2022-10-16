var usernames = ['admin']
var passwords = ['password']
var uReg = document.getElementById('usernameRegister').value
var pReg = document.getElementById('passwordRegister').value
var uLog = document.getElementById('usernameLogin').value
var pLog = document.getElementById('passwordLogin').value
function login(){
    if(usernames.find(uLog) == uLog && passwords.find(pLog) == pLog){
    }
}
function register(){
    usernames.push(uReg)
    passwords.push(pReg)
    location.reload()
}
