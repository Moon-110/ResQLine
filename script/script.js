function getElement(id){
    const element = document.getElementById(id);
    return element;
}


// heart icon click count 
const heartIcons = document.getElementsByClassName('heart-icon');
const heartCountElement = document.getElementById('heart-icon-count');

for (let heart of heartIcons) {
    heart.addEventListener('click', function() {
        let currentQuantity = Number(heartCountElement.innerText);
        let newQuantity = currentQuantity + 1;

        heartCountElement.innerText=newQuantity;
    });
}



// call functionality

const calls = document.getElementsByClassName('cart-call-button');

for(let call of calls){
    call.addEventListener('click', function(){
        const serviceName = call.parentNode.parentNode.children[1].innerText;

        const serviceNumber = call.parentNode.parentNode.children[3].innerText;
        alert(`Service Name: ${serviceName} \nService Number: ${serviceNumber}`);
    })
}

    
        