import { addProduct,calstock,products } from './product.service';

addProduct({
  title: "X",
  createdAt: new Date(1999,1,15),
  stock: 85
});

addProduct({
  title: "Y",
  createdAt: new Date(1999,1,25),
  stock: 90
})
console.log(products);
const total = calstock();
console.log(total);
