function binaryAgent(str) {
  return str.split(" ").map(str => String.fromCharCode(parseInt(str,2))).join("");
};
