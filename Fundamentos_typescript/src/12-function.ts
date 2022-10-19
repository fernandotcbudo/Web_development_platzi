(()=>{
  type Sizes= 'S'|'M'|'L';

  function createProduct(
    title:string,
    date:Date,
    stock:number,
    size?:Sizes,
  )
  {
    return{
      title,
      date,
      stock,
      size
    }
  }

  const product1 = createProduct('P1', new Date(),12,);
  console.log(product1)
  })();
