function makeText(){
    var fontChosen = document.getElementById("font").options[font.selectedIndex].text;
    var colorChosen = document.getElementById("color").value
    var fontStart = `<font face="${fontChosen}"`
    var colorStart = `color="${colorChosen}"`
    var fontEnding = "</font>"
    defaultFontTrue = (fontChosen = "Please choose a font") ? true:false
    defaultColorTrue = (colorChosen == "#000000") ? true:false
    if(defaultFontTrue){
        fontStart = `<stroke`
        fontEnding = "</stroke>"
    }
    if(defaultColorTrue){
        colorStart = ""
    }
    if(defaultFontTrue && defaultColorTrue){
        fontStart = ""
        colorStart = ""
        fontStartEnding = ""
    }
    var full = fontStart + colorStart + ">"
}