(() => {

  let isEnable = true;
  let isDisable: boolean = false;
  console.log(isDisable);

  const random = Math.random();
  console.log('Number' , random)
  isDisable = random >= 0.5 ? true : false;
  console.log('Ran number', isDisable);
})();
