//this fuction will count the number of vowels in a string

function countVowels(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" || str[i] == "A" || str[i] == "E" || str[i] == "I" || str[i] == "O" || str[i] == "U"){
            count++;
        }
    }
    return count;
}

let string =  prompt("Enter a string: ");
console.log("Number of vowels in the string: ", countVowels(string));

//doing same with arrow function
let countVowelsArrow = (str) => {
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" || str[i] == "A" || str[i] == "E" || str[i] == "I" || str[i] == "O" || str[i] == "U"){
            count++;
        }
    }
    return count;
}
console.log("Number of vowels in the string: ", countVowelsArrow(string));