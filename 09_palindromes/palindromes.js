const palindromes = function (word) {
    word = word.toLowerCase().replace(/[^a-z]/g, '');
    
    return word.split('').reverse().join('') === word;
};

// Do not edit below this line
module.exports = palindromes;
