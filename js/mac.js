 function updateExtraCost( product,price){
    const extraMemoryCost = document.getElementById(product + '-cost');
    extraMemoryCost.innerText = price;
}
   


document.getElementById('memory-8gb').addEventListener('click',function( ){
    updateExtraCost('extra-memory',0);
});

document.getElementById('memory-16gb').addEventListener('click',function(){
    updateExtraCost('extra-memory',180);
});

document.getElementById('storage-256gb').addEventListener('click',function(){
    updateExtraCost('extra-storage',0);
});

document.getElementById('storage-512gb').addEventListener('click',function(){
    updateExtraCost('extra-storage',100);
});

document.getElementById('storage-1tb').addEventListener('click',function(){
    updateExtraCost('extra-storage', 180);
});

document.getElementById('delay-delivery').addEventListener('click',function(){
    updateExtraCost('delivery-charge',0);
});

document.getElementById('fast-delivery').addEventListener('click',function(){
    updateExtraCost('delivery-charge',20);
});