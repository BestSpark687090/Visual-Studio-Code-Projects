class Main{
    constructor(name,clicks=0){
        this.player_name = name
        this.clicks = clicks
    }
    count_up(count = 1){
        this.clicks += count;
    }
    count_down(count = 1){
        this.clicks -= count;
    }
}
var player;
document.getElementById('naem').onclick((ev)=>{
    const thing = new Main(getName())
    globalSetter(thing)
})
function getName(){
    const thing = document.querySelector("#naem").value
    document.body.removeChild(document.body.querySelector('div'))
    return thing
}
function globalSetter(constant){player = constant}