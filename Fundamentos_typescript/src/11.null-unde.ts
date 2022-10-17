(()=>{
  let myNull: null= null;
  let myUnde= undefined;

  let myNumber: number|null= null;

  function hi(name: string|null) {

    let hello= 'Hola ';
    if (name){
      hello += name;

    } else{
      hello += 'nobody';
    }
    console.log(hello);
  }

  hi('Diego');
  hi(null)


  })();
