/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */
function sumTwo(int1, int2) {
    if (int1 === int2) {
        let sum = (int1 * 2) * 3
        return sum
    } else {
        return int1 + int2
    }
}
console.log(sumTwo(2, 2))

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */
function checkFifty(num1, num2) {
    let sum = num1 + num2

    if(sum === 50 || num1 ===50 || num2 === 50) {
        return true
    } else {
        return false
    }
}
console.log(checkFifty(15, 35))

/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */
function removeChar(index, stringEx3) {
    let stringLength = stringEx3.length

    if(index < stringLength) {
        let stringArr = stringEx3.split('')
        stringArr.splice(index, 1, '')
        return stringArr.join('')
    } else {
        return false
    }
}
console.log(removeChar(2, 'Strive'))

/* 4. Create a function to find and return the largest of three given integers. */
function largestNum(a, b, c) {
    if(a > b && a > c) {
        console.log(a)
    }
    if(b > a && b > c) {
        console.log(b)
    }
    if(c > b && c > a) {
        console.log(c)
    }
}
console.log(largestNum(3, 5, 6))

/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */
function checkRange(range1, range2) {
    if(range1 >= 40 && range1 <= 60 || range1 >=70 && range1 <= 100 && range2 >= 40 && range2 <= 60 || range2 >=70 && range2 <= 100) {
        return true
    } else {
        return false
    }
}
console.log(checkRange(40, 65))

/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */
function composeString(quantity, givenString) {
    for(let i = 0; i < quantity; i++) {
        console.log(givenString)
    }
}
composeString(5, 'School')

/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */


/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */


/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */


/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */ 


/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */ 


/* 12. Create a function to find the types of a given angle:
  1. Acute angle ⇒ between 0 and 90 degrees. Return `acute`.
    2. Right angle ⇒ 90 degree. Return `right`
    3. Obtuse angle ⇒ between 90 and 180. Return `obtuse`
    4. Straight angle ⇒ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/


/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */


/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */


/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */


/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */


/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */


/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor ⇒ return `Diego`
    The number has 5 as a factor ⇒ return `Riccardo`
    The number has 7 as a factor ⇒ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    ⚠️ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */


/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */