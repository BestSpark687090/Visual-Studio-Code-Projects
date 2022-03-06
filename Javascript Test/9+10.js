// JavaScript source code
const Sum = 9 + 12;
const errorSum = Sum - 9
javaTest();
function javaTest() {
    if (Sum == 21) {
       console.log("YOO 9+10 DOES equal 21!");
    } else {
        console.log("I guess 9+10 doesn't equal 21...");
        if (Sum !== 21, Sum !== 19) {
            setTimeout(() => {
                console.log("Wait a minute...");
            }, 1000);
            setTimeout(() => {
                console.log("That isn't 9+10!");
            }, 2000);
            setTimeout(() => {
                console.log("Uncaught error: constant Sum doesn't equal 19 or 21");
                console.log(" [90m    at Line 2 : const Sum is not 9 + 10 or 9 + 12");
                console.log(" const Sum = 9 + " + errorSum + "; ");
                console.log("             ^   ^^");
            }, 3000);
            setTimeout(() => {
                console.log("Something isn't right...");
            }, 1500);
        }
    }
}