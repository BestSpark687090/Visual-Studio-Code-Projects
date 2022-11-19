/**
 * Gives you a string which you add to the text at where you want it.
 * @param {string} message Required parameter which is the text you want to color.
 * @param {boolean} text Optional parameter which if you want text, you set this to true.
 * Otherwise if you want better background, set this to false.
 * @param {boolean} bg Optional parameter which if you want a background, you set this to true.
 * Otherwise if you want better text, set this to false.
 * @param {boolean} better Optional parameter which if you want a better anything, you set this to true.
 * Otherwise, don't add this parameter.
 * @returns Text with the style you chose.
 * @defaults Default Color text
 * @example ```js
 * console.log(`${red()}Hello!${reset()}`) // Returns the word Hello! in red text
 * ```
 */
 function red(message,text = true, bg = false, better = false){
    if((text && bg && better) || (text && bg)){
        return message;
    }
    if((text && !better) || (!text && !bg && !better)){
        return "\x1b[31m" + message + "\x1b[0m"
    }
    if(bg && !better){
        return "\x1b[41m" + message + "\x1b[0m"
    }
    if(text && better){
        return "\x1b[91m" + message + "\x1b[0m"
    }
    if(bg && better){
        return "\x1b[101m" + message + "\x1b[0m"
    }
}
/**
 * Gives you a string which you add to the text at where you want it.
 * @param {string} message Required parameter which is the text you want to color.
 * @param {boolean} text Optional parameter which if you want text, you set this to true.
 * Otherwise if you want better background, set this to false.
 * @param {boolean} bg Optional parameter which if you want a background, you set this to true.
 * Otherwise if you want better text, set this to false.
 * @param {boolean} better Optional parameter which if you want a better anything, you set this to true.
 * Otherwise, don't add this parameter.
 * @returns Text with the style you chose.
 * @defaults Default Color text
 * @example ```js
 * console.log(`${green()}Hello!${reset()}`) // Returns the word Hello! in green text
 * ```
 */
 function green(message, text = true, bg = false, better = false){
    if((text && bg && better) || (text && bg)){
        return message;
    }
    if((text && !better) || (!text && !bg && !better)){
        return "\x1b[32m" + message + "\x1b[0m"
    }
    if(bg && !better){
        return "\x1b[42m" + message + "\x1b[0m"
    }
    if(text && better){
        return "\x1b[92m" + message + "\x1b[0m"
    }
    if(bg && better){
        return "\x1b[102m" + message + "\x1b[0m"
    }
}
/**
 * Gives you a string which you add to the text at where you want it.
 * @param {string} message Required parameter which is the text you want to color.
 * @param {boolean} text Optional parameter which if you want text, you set this to true.
 * Otherwise if you want better background, set this to false.
 * @param {boolean} bg Optional parameter which if you want a background, you set this to true.
 * Otherwise if you want better text, set this to false.
 * @param {boolean} better Optional parameter which if you want a better anything, you set this to true.
 * Otherwise, don't add this parameter.
 * @returns Text with the style you chose.
 * @defaults Default Color text
 * @example ```js
 * console.log(`${yellow()}Hello!${reset()}`) // Returns the word Hello! in yellow text
 * ```
 */
 function yellow(message, text = true, bg = false, better = false){
    if((text && bg && better) || (text && bg)){
        return message;
    }
    if((text && !better) || (!text && !bg && !better)){
        return "\x1b[33m" + message + "\x1b[0m"
    }
    if(bg && !better){
        return "\x1b[43m" + message + "\x1b[0m"
    }
    if(text && better){
        return "\x1b[93m" + message + "\x1b[0m"
    }
    if(bg && better){
        return "\x1b[103m" + message + "\x1b[0m"
    }
}
/**
 * Gives you a string which you add to the text at where you want it.
 * @param {string} message Required parameter which is the text you want to color.
 * @param {boolean} text Optional parameter which if you want text, you set this to true.
 * Otherwise if you want better background, set this to false.
 * @param {boolean} bg Optional parameter which if you want a background, you set this to true.
 * Otherwise if you want better text, set this to false.
 * @param {boolean} better Optional parameter which if you want a better anything, you set this to true.
 * Otherwise, don't add this parameter.
 * @returns Text with the style you chose.
 * @defaults Default Color text
 * @example ```js
 * console.log(`${blue()}Hello!${reset()}`) // Returns the word Hello! in blue text
 * ```
 */
 function blue(message, text = true, bg = false, better = false){
    if((text && bg && better) || (text && bg)){
        return message;
    }
    if((text && !better) || (!text && !bg && !better)){
        return "\x1b[34m" + message + "\x1b[0m"
    }
    if(bg && !better){
        return "\x1b[44m" + message + "\x1b[0m"
    }
    if(text && better){
        return "\x1b[94m" + message + "\x1b[0m"
    }
    if(bg && better){
        return "\x1b[104m" + message + "\x1b[0m"
    }
}
/**
 * Gives you a string which you add to the text at where you want it.
 * @param {string} message Required parameter which is the text you want to color.
 * @param {boolean} text Optional parameter which if you want text, you set this to true.
 * Otherwise if you want better background, set this to false.
 * @param {boolean} bg Optional parameter which if you want a background, you set this to true.
 * Otherwise if you want better text, set this to false.
 * @param {boolean} better Optional parameter which if you want a better anything, you set this to true.
 * Otherwise, don't add this parameter.
 * @returns Text with the style you chose.
 * @defaults Default Color text
 * @example ```js
 * console.log(`${purple()}Hello!${reset()}`) // Returns the word Hello! in purple text
 * ```
 */
 function purple(message, text = true, bg = false, better = false){
    if((text && bg && better) || (text && bg)){
        return message;
    }
    if((text && !better) || (!text && !bg && !better)){
        return "\x1b[35m" + message + "\x1b[0m"
    }
    if(bg && !better){
        return "\x1b[45m" + message + "\x1b[0m"
    }
    if(text && better){
        return "\x1b[95m" + message + "\x1b[0m"
    }
    if(bg && better){
        return "\x1b[105m" + message + "\x1b[0m"
    }
}
/**
 * Gives you a string which you add to the text at where you want it.
 * @param {string} message Required parameter which is the text you want to color.
 * @param {boolean} text Optional parameter which if you want text, you set this to true.
 * Otherwise if you want better background, set this to false.
 * @param {boolean} bg Optional parameter which if you want a background, you set this to true.
 * Otherwise if you want better text, set this to false.
 * @param {boolean} better Optional parameter which if you want a better anything, you set this to true.
 * Otherwise, don't add this parameter.
 * @returns Text with the style you chose.
 * @defaults Default Color text
 * @example ```js
 * console.log(`${lBlue()}Hello!${reset()}`) // Returns the word Hello! in lighter blue text
 * ```
 */
 function lBlue(message, text = true, bg = false, better = false){
    if((text && bg && better) || (text && bg)){
        return message;
    }
    if((text && !better) || (!text && !bg && !better)){
        return "\x1b[36m" + message + "\x1b[0m"
    }
    if(bg && !better){
        return "\x1b[46m" + message + "\x1b[0m"
    }
    if(text && better){
        return "\x1b[96m" + message + "\x1b[0m"
    }
    if(bg && better){
        return "\x1b[106m" + message + "\x1b[0m"
    }
}
/**
 * Gives you a string which you add to the text at where you want it.
 * @param {string} message Required parameter which is the text you want to color.
 * @param {boolean} text Optional parameter which if you want text, you set this to true.
 * Otherwise if you want better background, set this to false.
 * @param {boolean} bg Optional parameter which if you want a background, you set this to true.
 * Otherwise if you want better text, set this to false.
 * @param {boolean} better Optional parameter which if you want a better anything, you set this to true.
 * Otherwise, don't add this parameter.
 * @returns Text with the style you chose.
 * @defaults Default Color text
 * @example ```js
 * console.log(`${white()}Hello!${reset()}`) // Returns the word Hello! in white text
 * ```
 */
 function white(message, text = true, bg = false, better = false){
    if((text && bg && better) || (text && bg)){
        return message;
    }
    if((text && !better) || (!text && !bg && !better)){
        return "\x1b[37m" + message + "\x1b[0m"
    }
    if(bg && !better){
        return "\x1b[47m" + message + "\x1b[0m"
    }
    if(text && better){
        return "\x1b[97m" + message + "\x1b[0m"
    }
    if(bg && better){
        return "\x1b[107m" + message + "\x1b[0m"
    }
}
/**
 * Bold text.
 * > Note: You **MUST** use the reset function afterwards to not have that type of text for the entire thing.
 * @returns Text with the style you chose.
 */
 function bold(message){
    return "\x1b[1m" + message + "\x1b[0m"
}
/**
 * Darker text.
 * > Note: You **MUST** use the reset function afterwards to not have that type of text for the entire thing.
 * @returns Text with the style you chose.
 */
 function darker(message){
    return "\x1b[2m" + message + "\x1b[0m"
}
/**
 * Italic text.
 * > Note: You **MUST** use the reset function afterwards to not have that type of text for the entire thing.
 * @returns Text with the style you chose.
 */
 function italic(message){
    return "\x1b[3m" + message + "\x1b[0m"
}
/**
 * Reversed text.
 * > Note: You **MUST** use the reset function afterwards to not have that type of text for the entire thing.
 * @returns Text with the style you chose.
 * your BG color your text color..
 */
 function reverse(message){
    return "\x1b[7m" + message + "\x1b[0m"
}
/**
 * Crossed out text.
 * > Note: You **MUST** use the reset function afterwards to not have that type of text for the entire thing.
 * @returns Text with the style you chose.
 */
 function crossed(message){
    return "\x1b[9m" + message + "\x1b[0m"
}
/**
 * Double underlined text.
 * > Note: You **MUST** use the reset function afterwards to not have that type of text for the entire thing.
 * @returns Text with the style you chose.
 */
 function double_underline(message){
    return "\x1b[21m" + message + "\x1b[0m"
}
/**
 * Gray text.
 * > Note: You **MUST** use the reset function afterwards to not have that type of text for the entire thing.
 * @param {boolean} bg If you want a gray background, set this to true. 
 * Otherwise, don't add this parameter.
 * @returns Text with the style you chose.
 */
 function gray(message,bg=false){
    if(bg){
        return "\x1b[100m" + message + "\x1b[0m"
    }
    return "\x1b[30m" + message + "\x1b[0m"
}
/**
 * Black BG.
 * > Note: You **MUST** use the reset function afterwards to not have that type of text for the entire thing.
 * @returns Text with the style you chose.
 */
 function black(message){
    return "\x1b[40m" + message + "\x1b[0m"
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
 * @param {string} message
 * @param {string|number} r 
 * @param {string|number} g 
 * @param {string|number} b 
 * @returns 
 */
 function hexCustom(message,r="FF",g="FF",b="FF"){
    const redn = parseInt(r.toString().padStart(3,"0"),16)
    const greenn = parseInt(g.toString().padStart(3,"0"),16)
    const bluen = parseInt(b.toString().padStart(3,"0"),16)
    return `\x1b[38;2;${redn};${greenn};${bluen}m${message}\x1b[0m`
}
export{
    red,green,yellow,blue,purple,lBlue,white,bold,darker,italic,reverse,crossed,
    double_underline,gray,black,numCustom,hexCustom
}
