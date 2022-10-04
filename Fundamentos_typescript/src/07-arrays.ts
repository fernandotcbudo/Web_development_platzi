(() => {
  let prices = [1,2,3,4,5];
  prices.push(6);

  let numbers = ['Hola',23];
  numbers.push(14);

  let mixed: (number| string| boolean)[] = ['Hola',25, false];
  console.log(mixed);

}) ();
