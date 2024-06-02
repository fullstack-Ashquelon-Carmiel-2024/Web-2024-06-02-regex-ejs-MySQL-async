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

let str2 = `If you have sHOOt, sHoot, don't talk!`

/*** MISSION:
 * replace each "shoot" by "jump"
 */

