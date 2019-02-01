function convertToRoman(num) {
    const roman = {
        1:"I",
        5:"V",
        10:"X",
        50:"L",
        100:"C",
        500:"D",
        1000:"M"
    };
    const arabic = Object.keys(roman).reverse();
    // rid us of mīlla while declaring variables
    const topvalue = arabic.shift();
    let numberOfRomans = Math.floor(num / topvalue);    
    let numeral = roman[topvalue].repeat(numberOfRomans);
    let remanider = num - (numberOfRomans * topvalue); 
    arabic.forEach(function(arabicNumber,idx) {
        numberOfRomans =  Math.floor(remanider / arabicNumber);
        if (numberOfRomans === 4){
            numeral += roman[arabic[idx]] + roman[arabic[idx - 1]];
            remanider -= (numberOfRomans * arabicNumber);
        } else if (String(remanider)[0] !== "9"){
            // everything else but the  nines
            numeral += roman[arabicNumber].repeat(numberOfRomans);
            remanider -= (numberOfRomans * arabicNumber); 
        } else {
            // the nines
            if (numberOfRomans === 1){
                const offset = arabicNumber / 5;
                numeral += roman[offset] + roman[offset * 10];
                remanider -= (9 * offset);
            }           
        }; 
    });     
    return numeral;
}
