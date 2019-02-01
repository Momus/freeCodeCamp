function addTogether(...args) {
  const argtest = (params) => params.every((arg) => (typeof arg) === "number");
  if (!argtest(args)){
    return undefined;
    } else if(args.length === 1) { 
      return (x) => argtest([x]) ? x + args[0]: undefined;
    } else {return args.reduce((acc, item) => acc + item);
    }
  }
