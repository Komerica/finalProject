/* calling header & footer for each html */
$(function(){
    $("#header").load("inc/header.html"); 
});
$(function(){
    $("#contact").load("inc/footer.html"); 
});

/* products */
const productBtnContainer = document.querySelector('.products-categories');
const productContainer = document.querySelector('.products-list');
const products = document.querySelectorAll('.product');
productBtnContainer.addEventListener('click', (e)=>{
    const filter = e.target.dataset.filter || e.tartget.parentNode.dataset.filter;
    if(filter == null){
        return;
    }
    console.log(filter);
    products.forEach((product)=>{
        console.log(product.dataset.type);
        if(filter === '*' || filter === product.dataset.type){
            product.classList.remove('invisible');
        }else{
            product.classList.add('invisible');
        }
    });
});