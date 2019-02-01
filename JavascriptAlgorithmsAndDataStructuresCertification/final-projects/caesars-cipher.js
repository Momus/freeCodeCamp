const ceasarsCipher = (str, shift) =>  {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    const idx = (char) =>  alphabet.findIndex((c) => c === char);

    const shiftN = (char, shift) => idx(char) + shift < 26 ? 
          idx(char) + shift : Math.abs(26 - idx(char) - shift);    

    return str.split("").map(char => alphabet.includes(char) ?
                             alphabet[shiftN(char,shift)] : char).join("");
}

const  rot13 = (str) => ceasarsCipher(str, 13);
