Array

const products = [
  { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
  { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
  { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
  { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
  { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
  { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
];


// 1. Filtrar Productos con Descuento
function filterForProductsWithDiscount(products) {
    return products.filter( function(product) {
        return product.discount > 0;
    });
}
console.log("Productos con descuento:", filterForProductsWithDiscount(products));

// 2. calcular el precio total de los productos con descuento(usando map)
const finalprices = products.map(function(product) {
    if (product.discount > 0) {
        product.priceafterdiscount = product.price * (1-product.discount/100);
    }
    return product;
});
console.log("Precio total de los productos con descuento:", finalprices);


// 3. identificar productor con stock bajo (menor a 5 unidades)
const productswithlowstock = [];
products.forEach(product => {
    if (product.stock < 5) {
        productswithlowstock.push(product);
    }
});
console.log("Productos con stock bajo:", productswithlowstock);

// 4. actualizar stock de un producto (usar try catch)
function updatestockproduct(productname,stock) {
    try {
        const product = products.find(product => product.name === productname);

        if (!product) {
            throw new Error("el producto ingresado no existe");
        }
        actualstock = product.stock;
        product.stock += stock;
        console.log("el stock del producto "+ productname + " fue actualizado de " + actualstock + " a " + product.stock);
    } catch (error) {
        console.error("Error:", error.message);
    }
}
// ejemplo de uso
updatestockproduct("Laptop", 2);
updatestockproduct("Pan", 10);
updatestockproduct("tenedores", 10);

// 5. resumen por categoria 
function summarysizebycategory(products){
    const categorysumary = {};
    
    for (const product of products) {
        const category = product.category;
        if (!categorysumary[category]) {
            categorysumary[category] = 0;
        }
        categorysumary[category] ++;
    }
    return categorysumary;
}

console.log("Resumen por categoria:", summarysizebycategory(products));