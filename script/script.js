

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

// copy count
const copyIcons = document.getElementsByClassName('copy-icons')
const copyCount = document.getElementById('copy-count');
for(let copy of copyIcons){
    copy.addEventListener('click', function(){
        let currentCopyCount=Number(copyCount.innerText);
        let newCopyCount=currentCopyCount+1;

        copyCount.innerText=newCopyCount;
    })
}



// call functionality

const calls = document.getElementsByClassName('cart-call-button');

for(let call of calls){
    call.addEventListener('click', function(){
        const serviceName = call.parentNode.parentNode.children[1].innerText;
        const serviceNumber = call.parentNode.parentNode.children[3].innerText;

        const data= {
        date: new Date().toLocaleTimeString()
    }

        const coins=document.getElementById('call-coin');
        const currentCoins = Number(coins.innerText);

        if(currentCoins <= 20){
            alert("Collect more coins");
            return
        }

        const callHistory=document.getElementById('call-history-btn');

        const newCart = document.createElement('div');
        newCart.innerHTML =`
        <div id="call-history" class="flex justify-around items-center my-3 p-3 bg-[#fafafa] rounded-lg shadow-xl text-[14px]">
                       
                        <div class="w-[70%]">
                        
                             <h3 class="font-semibold">${serviceName}</h3>
                             <p>${serviceNumber}</p>
                        </div>
                         <p>${data.date}</p>

        `;

        callHistory.append(newCart);



       alert(`Service Name: ${serviceName} \nService Number: ${serviceNumber}`);
       const newAvailableCoins= currentCoins - 20;

       coins.innerText=newAvailableCoins;
    })
}


// clear history button
const clear= document.getElementById('clear-button').addEventListener('click', function(){
    const callHistory= document.getElementById('call-history-btn');

    callHistory.innerHTML='';
})



    
        