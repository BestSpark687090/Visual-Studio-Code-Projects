function click(){
    var clickText = document.getElementById('clicks').innerHTML;
    var value =  clickText.split(" ")[1];
    parseInt(value);
    value++;
    value.toString();
    document.getElementById('clicks').innerHTML = `${value.toString()} Clicks`;
    console.log(clickText);
}