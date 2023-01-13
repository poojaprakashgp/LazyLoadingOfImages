let imagesContiner = document.querySelector('.container');
let images = document.querySelectorAll('.images');
let lastImage = document.querySelector('.images:last-child')
let imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting || entry.intersectionRatio>0.15){
            addImageElements('img');
            imageObserver.unobserve(document.querySelector('.images:last-child'));
        }
    })
},{root:imagesContiner, rootMargin:'200px'})
imageObserver.observe(lastImage);
function addImageElements(type){
   for(let i=0;i<=5;i++){
     let image = document.createElement(type);
     image.classList.add('images');
     image.alt = 'new image falied'
     image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs1xyi_D23lbRP6yFBezj4REXU7ct_khX8xg&usqp=CAU';
     imagesContiner.appendChild(image);
     imageObserver.observe(image)
   }
}