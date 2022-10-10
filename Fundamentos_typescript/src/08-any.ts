(()=>{
  let myDynamic: any;
  myDynamic= "Hola";

  const rta = (myDynamic as string).toLowerCase();
  console.log(rta);

  myDynamic = 1212;
  const rta2 = (<number>myDynamic).toFixed();
  console.log(rta2);

})();
