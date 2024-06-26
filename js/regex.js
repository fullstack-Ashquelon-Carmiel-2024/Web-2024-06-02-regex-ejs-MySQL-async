/***
 * 
 * regular expression is a class of objects,
 * and it is not a string
 * 
 */

let str1 = 'She CRies and makes the onions cry';

// replace every 'cr' by 'fl'(no matter the case)
console.log(`With 'replaceAll' and 'toLowerCase:'`);
console.log(str1.toLowerCase().replaceAll('cr','fl'));

console.log('With toooo simple regular expression')
console.log(str1.replace(/cr/,'fl'));

/*** REGULAR EXPRESSION MODIFIERS:
 * i - ignorecase
 * g - global
*/

console.log('With regular expression with "i":')
console.log(str1.replace(/cr/i,'fl'));


console.log('With regular expression with "i" and "g":')
console.log(str1.replace(/cr/gi,'fl'));

let str2 = `If you have to sHOOt, sHoot, don't talk!`

/*** MISSION:
 * replace each "shoot" by "jump"
 */
console.log(str2.replace(/shoot/ig,'jump'))

// [fhs] - list of characters, equivalent to "or 'f' or 'h' or 's'"
console.log(str2.replace(/[fhs]/ig,'$'))

/** MISSION:
 * replace all "o",spaces,and ' by 0
 */
console.log(str2.replace(/[o ']/gi,'0'))

let str3 = `1,1,1 - littlE dog run, 2,2,2 - \\cat sEe you,
            3,3,3 - bIRd on THE TREe`

//console.log(str3.replace(/[0123456789]/g,'&'))   
// INSTEAD of this we will  use RANGE:
console.log(str3.replace(/[0-9]/g,'&'))      
console.log(str3.replace(/[2-7a-e]/g,'&'))  

// \ - ESCAPE character, cancels the special meaning 
// of the next character
console.log(`If you have to sHOOt, sHoot, don't talk!`)
console.log("If you have to sHOOt, sHoot, don't talk!")
console.log('If you have to sHOOt, sHoot, don\'t talk!')

console.log(str3.replace(/[2-7a\-e]/g,'&'))  

/** MISSION:
 * 1. To the previous add also the range of D-L
 * 2. and cancel \
 */

console.log(str3.replace(/[2-7a\\-eD-L]/g,'&'))

console.log(str3.replace(/[T-d]/g,'&'))

let str4 = 'שבועות שמח!'
console.log(str4.replace(/[מ-ק]/g,'&'))

if ('A'>'D') {
    console.log('A bigger than D')
} else {
    console.log('A smaller than D')

}

