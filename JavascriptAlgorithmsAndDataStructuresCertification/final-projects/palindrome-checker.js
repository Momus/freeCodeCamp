function palindrome(str) {
  // Good luck!
    str = str.replace(/\W|_/g, '').toLowerCase();
    return str.split("").reverse().join("") === str;
}
