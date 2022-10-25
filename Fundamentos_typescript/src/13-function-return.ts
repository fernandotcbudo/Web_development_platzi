(()=>{
  const calCTotal= (prices: number[]) => {
    let total=0;
    prices.forEach((item)=>{
      total+= item;
    })
    return total;
  }

  const prinTotal = (prices:number[]) => {
    const rta = calCTotal(prices);
    console.log(`El total es ${rta}`);
  }

  const rta= prinTotal([25,8,1,56,24]);
})();
