setText()
function clickedOnThingOne(){
   
}
function setText(){
    var value = document.getElementById('thing1').value
    if(value.toString().includes('<') > 0 || value.toString().includes('>') > 0) {
        document.getElementById('whatrange').innerHTML = `You may not use greater than signs or less than signs.`
    } else{
    document.getElementById('whatrange').innerHTML = `Range is at: ${value}`
    }
}
