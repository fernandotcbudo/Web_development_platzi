(()=>{
  const login = (data:{email:string,password:string})=>{
    console.log(data.email, data.password)
  }

  login(
    {
      email:'Diego@diego.com',
      password:'15ffh678'
    }
  )

  type Sizes = 'S'| 'M' | 'L';

  const products: any[] = [];

  const addProduct = (data: {
    title:string,
    createdAt:Date,
    stock:number,
    size?:Sizes
  }) => {products.push(data);}

  addProduct({
    title: 'Pro1',
    createdAt:new Date(1999,1,15),
    stock:58,
    size:'M'
  });

  console.log(products);

})();
