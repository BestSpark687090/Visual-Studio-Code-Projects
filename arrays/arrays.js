var array = [1,1];
var array1 = ["H","e","l","l","o",","," ","W","o","r","l","d","!"];
var arrayQuoteRemoved1 = array1.toString().replace("', '","");
var arrayQuoteRemoved2 = arrayQuoteRemoved1.toString().replace("'","");
var arrayLeftBracketRemoved = arrayQuoteRemoved2.toString().replace("[ ","");
var arrayRightBracketRemoved = arrayLeftBracketRemoved.toString().replace(" ]","");
var arrayCommaHelper = arrayRightBracketRemoved.toString().replace(",,,",",");
var arrayExtraCommaRemover = arrayCommaHelper.toString().replace(/,/g,"",);
var arrayHCommaRemover = arrayExtraCommaRemover.toString().replace("H,","H");
var arrayECommaRemover = arrayHCommaRemover.toString().replace("e,","e");
var arrayLCommaRemover = arrayECommaRemover.toString().replace("l,","l",3);
var arrayOCommaRemover = arrayLCommaRemover.toString().replace("o,","o",2);
var arrayWCommaAdder = arrayOCommaRemover.toString().replace(" W",", W")
console.log(arrayWCommaAdder);
var string = "a";
string.replace("a","e",1)