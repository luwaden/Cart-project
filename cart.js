const cart = [
    { name: 'Apple', price: 100.00, qnty: 3 },
    { name: 'Banana', price: 80.00, qnty: 2 },
    { name: 'cucumber', price: 50.00, qnty: 5 }
];

function calSubtotal (items){
    let subtotal = 0;
    for (let i = 0; i < items.length; i++) {
    //    subtotal += cartItem.price * cartItem.qnty
    subtotal += items[i].price * items[i].qnty;
    
    }
    return subtotal;
}

let tax = 5;
let discountPercent = 10;

function applyDiscount (subtotal, discountPercent) {
    let discount = (subtotal * discountPercent) / 100
    return subtotal - discount;
}

//applyDiscount(710,10)



function calculateTax (discountedTotal, tax ) {
let taxRate = (discountedTotal * tax) / 100;
return  discountedTotal + taxRate; 

}



function calculateTotal() {
    const subtotal = calSubtotal(cart);
    const discountedTotal = applyDiscount(subtotal, discountPercent);
    const taxTotal = calculateTax(discountedTotal, tax);
    return taxTotal;
} 
  
console.log('$'calculateTotal());





