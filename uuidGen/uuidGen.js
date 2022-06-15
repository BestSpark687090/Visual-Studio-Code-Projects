var letters = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","1","2","3","4","5","6","7","8","9","0"]
let uuid = ""
function makeUUID(){
    uuid = uuid.concat(letters[Math.floor(Math.random() *  36  )])
    if(uuid.length == 8||uuid.length == 13||uuid.length == 18||uuid.length == 23) {
        uuid = uuid.concat("-")
    }
}
for (let timesRun = 0; timesRun < 36 ; timesRun++) {
    if(timesRun == 35){
        makeUUID()
        console.log(`Your UUID is: ${uuid}`)
    }
    else {
        makeUUID()
    }
}