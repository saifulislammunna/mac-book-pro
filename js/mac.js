 // function for different configuration cost
 function updateProductCost( product,price){
    const productExtraCost = document.getElementById(product + '-cost');
    productExtraCost.innerText = price;
    // calling calculate total
    calculateTotal();
}
 
 
 // function for calculate total 

function calculateTotal(){
    const bestPriceCost = 1299;
    const extraMemoryCost = parseInt( document.getElementById('extra-memory-cost').innerText);
    const extraStorageCost = parseInt( document.getElementById('extra-storage-cost').innerText);
    const deliveryChargeCost = parseInt( document.getElementById('delivery-charge-cost').innerText);
     
    // calculating total price
    const totalPrice = bestPriceCost + extraMemoryCost + extraStorageCost + deliveryChargeCost;  
    //  update on html
    document.getElementById('total-price').innerText = totalPrice;
    //  bonus part
    document.getElementById('total-price-bottom').innerText = totalPrice;
}

   

// handling memory extra cost with event-handler 
document.getElementById('memory-8gb').addEventListener('click',function( ){
    updateProductCost('extra-memory',0);
     
     
});

document.getElementById('memory-16gb').addEventListener('click',function(){
    updateProductCost('extra-memory',180);
     
    
});
// handling storage extra cost with event-handler 
document.getElementById('storage-256gb').addEventListener('click',function(){
    updateProductCost('extra-storage',0);
   
});

document.getElementById('storage-512gb').addEventListener('click',function(){
    updateProductCost('extra-storage',100);
     
});

document.getElementById('storage-1tb').addEventListener('click',function(){
    updateProductCost('extra-storage', 180);
     
});
// handling delivery extra cost with event-handler 
document.getElementById('delay-delivery').addEventListener('click',function(){
    updateProductCost('delivery-charge',0);
     
});

document.getElementById('fast-delivery').addEventListener('click',function(){
    updateProductCost('delivery-charge',20);
     
});

 