function fearNotLetter(str){
    const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
    const initial = alphabet.indexOf(str[0]);
    const ending = alphabet.indexOf(str[str.length - 1]);
    const range = alphabet.slice(initial, ending + 1);
    return str.length !== range.length ? range.filter(c => str.indexOf(c) < 0).join("") : undefined;
}
