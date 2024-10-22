let btn = document.querySelector(".generate");
let serial = document.querySelector(".serial");

btn.onclick = function () {
    let char = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = '';
    for (let i = 0; i < 10; i++) {
        result += char[Math.floor(Math.random() * char.length)];
    }
    serial.innerHTML=result;
}