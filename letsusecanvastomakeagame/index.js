console.log(navigator.userAgent)
var numbers = ""
var numbersPast = ""
var tL = 0
var timeout = setInterval(() => {check()}, 1000);
var change = document.getElementById("change")
change.oninput = check;
var val = change.innerHTML.valueOf()
if(navigator.userAgent.includes("Mobile")){
   change.outerHTML = `<input id="change" type="tel">`
}

function check(e){
    numbers = change.
    if(parseInt(val)==null);{
        numbers = numbers.replace(/\D/g,"")
        change.innerHTML = numbers
    }
    if(tL.toString().length.includes("2",tL.toString().length)||tL.toString().length.includes("4",tL.toString().length)||tL.toString().length.includes("6",tL.toString().length)|tL.toString().length.includes("8",tL.toString().length)){
        numbersPast=numbers
    }
    tL++
}
numbers.replace(/\D/g,"")
