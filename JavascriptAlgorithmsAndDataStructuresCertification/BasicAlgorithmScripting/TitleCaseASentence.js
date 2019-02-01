function titleCase(str) {
  let re = /(?<=\s|^)[a-z]/ig;
    return toLowerCase(str).replace(re, function(c){return c.toUpperCase()})
};


// console.log(titleCase("I'm a little tea pot"));
