(()=>{
  type userData = {
    username:string,
    email:string,
    stock:number
  }

  const products: userData[] = [];

  products.push({
    username:'Diego',
    email: 'diego@example',
    stock:89
  })

  console.log(products);

})();
