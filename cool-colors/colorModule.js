/**
 * Gives you a string which you add to the text at where you want it.
 * > Note: You **MUST** use the reset function afterwards to not have that colored text for everything.
 * @param {boolean} text Optional parameter which if you want text, you set this to true.
 * Otherwise if you want better background, set this to false.
 * @param {boolean} bg Optional parameter which if you want a background, you set this to true.
 * Otherwise if you want better text, set this to false.
 * @param {boolean} better Optional parameter which if you want a better anything, you set this to true.
 * Otherwise, don't add this parameter.
 * @returns Depends on what you set.
 * @defaults Default Color text
 * @example ```js
 * console.log(`${red()}Hello!${reset()}`) // Returns the word Hello! in red text
 * ```
 */
 function red(text = true, bg = false, better = false){
    if((text && bg && better) || (text && bg)){
        return "";
    }
    if((text && !better) || (!text && !bg && !better)){
        return "\x1b[31m"
    }
    if(bg && !better){
        return "\x1b[41m"
    }
    if(text && better){
        return "\x1b[91m"
    }
    if(bg && better){
        return "\x1b[101m"
    }
}
/**
 * Gives you a string which you add to the text at where you want it.
 * > Note: You **MUST** use the reset function afterwards to not have that colored text for everything.
 * @param {boolean} text Optional parameter which if you want text, you set this to true.
 * Otherwise if you want better background, set this to false.
 * @param {boolean} bg Optional parameter which if you want a background, you set this to true.
 * Otherwise if you want better text, set this to false.
 * @param {boolean} better Optional parameter which if you want a better anything, you set this to true.
 * Otherwise, don't add this parameter.
 * @returns Depends on what you set.
 * @defaults Default Color text
 * @example ```js
 * console.log(`${green()}Hello!${reset()}`) // Returns the word Hello! in green text
 * ```
 */
 function green(text = true, bg = false, better = false){
    if((text && bg && better) || (text && bg)){
        return "";
    }
    if((text && !better) || (!text && !bg && !better)){
        return "\x1b[32m"
    }
    if(bg && !better){
        return "\x1b[42m"
    }
    if(text && better){
        return "\x1b[92m"
    }
    if(bg && better){
        return "\x1b[102m"
    }
}
/**
 * Gives you a string which you add to the text at where you want it.
 * > Note: You **MUST** use the reset function afterwards to not have that colored text for everything.
 * @param {boolean} text Optional parameter which if you want text, you set this to true.
 * Otherwise if you want better background, set this to false.
 * @param {boolean} bg Optional parameter which if you want a background, you set this to true.
 * Otherwise if you want better text, set this to false.
 * @param {boolean} better Optional parameter which if you want a better anything, you set this to true.
 * Otherwise, don't add this parameter.
 * @returns Depends on what you set.
 * @defaults Default Color text
 * @example ```js
 * console.log(`${yellow()}Hello!${reset()}`) // Returns the word Hello! in yellow text
 * ```
 */
 function yellow(text = true, bg = false, better = false){
    if((text && bg && better) || (text && bg)){
        return "";
    }
    if((text && !better) || (!text && !bg && !better)){
        return "\x1b[33m"
    }
    if(bg && !better){
        return "\x1b[43m"
    }
    if(text && better){
        return "\x1b[93m"
    }
    if(bg && better){
        return "\x1b[103m"
    }
}
/**
 * Gives you a string which you add to the text at where you want it.
 * > Note: You **MUST** use the reset function afterwards to not have that colored text for everything.
 * @param {boolean} text Optional parameter which if you want text, you set this to true.
 * Otherwise if you want better background, set this to false.
 * @param {boolean} bg Optional parameter which if you want a background, you set this to true.
 * Otherwise if you want better text, set this to false.
 * @param {boolean} better Optional parameter which if you want a better anything, you set this to true.
 * Otherwise, don't add this parameter.
 * @returns Depends on what you set.
 * @defaults Default Color text
 * @example ```js
 * console.log(`${blue()}Hello!${reset()}`) // Returns the word Hello! in blue text
 * ```
 */
 function blue(text = true, bg = false, better = false){
    if((text && bg && better) || (text && bg)){
        return "";
    }
    if((text && !better) || (!text && !bg && !better)){
        return "\x1b[34m"
    }
    if(bg && !better){
        return "\x1b[44m"
    }
    if(text && better){
        return "\x1b[94m"
    }
    if(bg && better){
        return "\x1b[104m"
    }
}
/**
 * Gives you a string which you add to the text at where you want it.
 * > Note: You **MUST** use the reset function afterwards to not have that colored text for everything.
 * @param {boolean} text Optional parameter which if you want text, you set this to true.
 * Otherwise if you want better background, set this to false.
 * @param {boolean} bg Optional parameter which if you want a background, you set this to true.
 * Otherwise if you want better text, set this to false.
 * @param {boolean} better Optional parameter which if you want a better anything, you set this to true.
 * Otherwise, don't add this parameter.
 * @returns Depends on what you set.
 * @defaults Default Color text
 * @example ```js
 * console.log(`${purple()}Hello!${reset()}`) // Returns the word Hello! in purple text
 * ```
 */
 function purple(text = true, bg = false, better = false){
    if((text && bg && better) || (text && bg)){
        return "";
    }
    if((text && !better) || (!text && !bg && !better)){
        return "\x1b[35m"
    }
    if(bg && !better){
        return "\x1b[45m"
    }
    if(text && better){
        return "\x1b[95m"
    }
    if(bg && better){
        return "\x1b[105m"
    }
}
/**
 * Gives you a string which you add to the text at where you want it.
 * > Note: You **MUST** use the reset function afterwards to not have that colored text for everything.
 * @param {boolean} text Optional parameter which if you want text, you set this to true.
 * Otherwise if you want better background, set this to false.
 * @param {boolean} bg Optional parameter which if you want a background, you set this to true.
 * Otherwise if you want better text, set this to false.
 * @param {boolean} better Optional parameter which if you want a better anything, you set this to true.
 * Otherwise, don't add this parameter.
 * @returns Depends on what you set.
 * @defaults Default Color text
 * @example ```js
 * console.log(`${lBlue()}Hello!${reset()}`) // Returns the word Hello! in lighter blue text
 * ```
 */
 function lBlue(text = true, bg = false, better = false){
    if((text && bg && better) || (text && bg)){
        return "";
    }
    if((text && !better) || (!text && !bg && !better)){
        return "\x1b[36m"
    }
    if(bg && !better){
        return "\x1b[46m"
    }
    if(text && better){
        return "\x1b[96m"
    }
    if(bg && better){
        return "\x1b[106m"
    }
}
/**
 * Gives you a string which you add to the text at where you want it.
 * > Note: You **MUST** use the reset function afterwards to not have that colored text for everything.
 * @param {boolean} text Optional parameter which if you want text, you set this to true.
 * Otherwise if you want better background, set this to false.
 * @param {boolean} bg Optional parameter which if you want a background, you set this to true.
 * Otherwise if you want better text, set this to false.
 * @param {boolean} better Optional parameter which if you want a better anything, you set this to true.
 * Otherwise, don't add this parameter.
 * @returns Depends on what you set.
 * @defaults Default Color text
 * @example ```js
 * console.log(`${white()}Hello!${reset()}`) // Returns the word Hello! in white text
 * ```
 */
 function white(text = true, bg = false, better = false){
    if((text && bg && better) || (text && bg)){
        return "";
    }
    if((text && !better) || (!text && !bg && !better)){
        return "\x1b[37m"
    }
    if(bg && !better){
        return "\x1b[47m"
    }
    if(text && better){
        return "\x1b[97m"
    }
    if(bg && better){
        return "\x1b[107m"
    }
}
/**
 * Bold text.
 * > Note: You **MUST** use the reset function afterwards to not have that type of text for the entire thing.
 * @returns A code which makes your text bold.
 */
 function bold(){
    return "\x1b[1m"
}
/**
 * Darker text.
 * > Note: You **MUST** use the reset function afterwards to not have that type of text for the entire thing.
 * @returns A code which makes your text darker.
 */
 function darker(){
    return "\x1b[2m"
}
/**
 * Italic text.
 * > Note: You **MUST** use the reset function afterwards to not have that type of text for the entire thing.
 * @returns A code which makes your text italic.
 */
 function italic(){
    return "\x1b[3m"
}
/**
 * Reversed text.
 * > Note: You **MUST** use the reset function afterwards to not have that type of text for the entire thing.
 * @returns A code which makes your text color your background color and
 * your BG color your text color..
 */
 function reverse(){
    return "\x1b[7m"
}
/**
 * Crossed out text.
 * > Note: You **MUST** use the reset function afterwards to not have that type of text for the entire thing.
 * @returns A code which makes your text crossed out.
 */
 function crossed(){
    return "\x1b[9m"
}
/**
 * Double underlined text.
 * > Note: You **MUST** use the reset function afterwards to not have that type of text for the entire thing.
 * @returns A code which makes your text double underlined.
 */
 function double_underline(){
    return "\x1b[21m"
}
/**
 * Gray text.
 * > Note: You **MUST** use the reset function afterwards to not have that type of text for the entire thing.
 * @param {boolean} bg If you want a gray background, set this to true. 
 * Otherwise, don't add this parameter.
 * @returns A code which makes your text gray or your background gray.
 */
 function gray(bg=false){
    if(bg){
        return "\x1b[100m"
    }
    return "\x1b[30m"
}
/**
 * Black BG.
 * > Note: You **MUST** use the reset function afterwards to not have that type of text for the entire thing.
 * @returns A code which makes your background black.
 */
 function black(){
    return "\x1b[40m"
}
/**
 * Color resetter.
 * @returns A value which resets the color.
 */
 function reset(){
    return "\x1b[0m"
}
/**
 * A color setter which you give the RGB values as numbers and it gives you that colored code.
 * @param {number} r 
 * @param {number} g 
 * @param {number} b 
 * @returns 
 */
function numCustom(r=0,g=0,b=0){
    return `\x1b[38;2;${r};${g};${b}m`
}
/**
 * A color setter which you give the RGB values as hex values and it gives you that colored code.
 * @param {string|number} r 
 * @param {string|number} g 
 * @param {string|number} b 
 * @returns 
 */
 function hexCustom(r="FF",g="FF",b="FF"){
    return `\x1b[38;2;${parseInt(r.padStart(2,"0"),16)};${parseInt(g.padStart(2,"0"),16)};${parseInt(b.padStart(2,"0"),16)}m`
}
export{
    red,green,yellow,blue,purple,lBlue,white,bold,darker,italic,reverse,crossed,
    double_underline,gray,black,reset,numCustom,hexCustom
}