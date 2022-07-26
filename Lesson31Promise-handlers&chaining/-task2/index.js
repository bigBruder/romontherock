const asyncCalculator = (numbr) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`initial value: ${numbr}`);
      resolve(numbr);
    }, 500);
  })
    .then(
      (num) =>
        new Promise((resolve) => {
          setTimeout(() => {
            const squared = num * num;
            console.log(`squared value: ${squared}`);
            resolve(squared);
          }, 500);
        })
    )
    .then((value) => {
      const doubled = value * 2;
      console.log(`Doubled value: ${doubled}`);
      return doubled;
    });

asyncCalculator(4).then((value) => console.log(value));
