"use strict";


var $ = function (foo) {
    return document.getElementById(foo);    // save keystrokes
}

function createCookie(name, value, days) {
    let expires;
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}


const validate = function(){
    let name = $('name').value;
    let birthdate = $('birthdate').value;

    if(name.length < 2 || birthdate.length < 4){
        alert('indtast korrekt navn og fødselsdato');
    } 
    else {
        createCookie(name + birthdate , 42, 0.006);
        
    }
}

console.log(document.cookie);


let init = function(){
$('send').addEventListener('click', validate);
}
window.addEventListener('load', init);