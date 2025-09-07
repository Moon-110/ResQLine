
const heartIcons = document.getElementsByClassName('heart-icon');
const heartCountElement = document.getElementById('heart-icon-count');

for (let heart of heartIcons) {
    heart.addEventListener('click', function() {
        let currentQuantity = Number(heartCountElement.innerText);
        let newQuantity = currentQuantity + 1;

        heartCountElement.innerText=newQuantity;
    });
}

