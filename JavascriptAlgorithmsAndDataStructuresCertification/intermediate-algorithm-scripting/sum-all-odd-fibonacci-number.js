function sumFibs(num){
    var fibseq = [0,1,2];
    var n = 3;
    while (fibseq[n - 1] < num + 1) {
      fibseq[n] = fibseq[n - 1] + fibseq[n - 2];
      n++;
    };
    fibseq.pop();
    return fibseq.reduce((acc, cur) => (!(cur % 2 === 0)) ? acc + cur : acc);
}

