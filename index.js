const imageUrls = ["data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwAuAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAACAwABBAYF/8QAOxAAAgEDAgIGBgkCBwAAAAAAAQIAAxESBCEFMSJBUVRhkQYTFnGh0QcXIyQycoHB0hTwFTNCYqKx8f/EABkBAQEBAQEBAAAAAAAAAAAAAAABAwIFBP/EACARAQABBAIDAQEAAAAAAAAAAAABAgMRURITFCExBEH/2gAMAwEAAhEDEQA/APIAhASAQwJ9bwEAhgSAQwIEAhASwIYECgIQWWBDAgCFh2lgQwJAAEICFjCAgDjIFjLSwsALSYxmMmMDNrF+6VvyGNxg60fc635DHld4WfhWMorG4yFYQrGCVjSJREBREkZjJA8YCGBBEMCUEBDAlAQ1ECwIYEoQxAsCEBIIYEggEICWBCAgUBCAlgQwIQIWWBDAhBYAWktGYy8YGTWr9zr/AJDHkbwdaPuVf8hjyu8L/CbSiI7GCVhCisEiOxglYCSsuMIlQPCEMCAIxZVGIYgCMWAQhrBAhiRZGBCEEQxCLAjAIIEMCEWBDUSgIYgQCEBLAhgQKAlhYYEILCMmuX7lX/IY8rvPN9JNJxXV6SlR4MKhqmpeoKZF8LEdfjabeGU9XT4fp04hl/Vqlqudr5eNpzExnDWaJ64qGRKIjsYJE6ZEkQSI0iARAURJDMkK5wRixYjFlUxYYixGLAYs2aXS+uXJmsOQtMYhPxWlw2mDqCAjtYXNt+ck/G1iImvEtFWkaVTE9m0oQF1Q1iLXUgq6gr7oYMQ4uY5TgSxgi1jBDMYhrAEMGEGIYgAwwYDByhCADCBgdNwHT0l0Yq2BdzuezflMnpFp6VOpTqoAGe4bxtPP0mvr6QEUmGJ3xIuIvVaqrqqmdZrm1gOoT4qbFyL01zPp6Nf6rVX54txHskwDCJgEz7XnBMBoRMBoAGSQyQrnBDEWDDBlU1YYiwZKrlEuoBYkBb9p2gwepvMfGNDS1+lVazOMHDLgbbnb94bLSQA1qzZHrNQi/uAmavxGhTCodSKtMuuRKnJQCCb2G4sDJlpTE5zD1NJQXTaalp6ZJWkgRb87AWmgTGtd6w+xCKD/AKnN/IA/vIK5o1/VO7VujkQFF18tgN4yk0zluENYmm4dFZTdWFwYwGGZohgxQMO8BoMMGJBhAwHAwg0SGl5Qh2UmUVlJlAMtKLQC0EtAImATKJgkwqyZIBMkDnhCEWphgyqapi9VUVKfSyv+JcRflvLBgVEFaqqNfFBntzv1fv8ACSXVP0ig2oqs9StpgwZzYFrWA23Av5cppFcGqitgrgHCmbjH/cbgdXZ/4hqtfTP6n7JjUJKO5xA7b+Pht1fpl1OqK1TTqPSretxujOpyUc1Fhzv1ePvM5b4zLaeHUtUCzouLHKzAgMe3EEWHx7Y3+m0dqLnTUqagMpsoBRgL3v4YneZ6OurriEpoyupYIXcstiAR+Hnvy8OcF9RU1Fam4wp6bMGozqblxsAAbeAPuHjCYqe5QLGihqDplRf32jQZl0zOaf2hYm5IzFmt4gR4M6YTGJNBhAxIMIGEODSwYoGWGtCHBpeUUGkygOykyispWUBuUomLykygHeCTALSi0AiZUAmSB4CmGDEgwwZVOBkZEqWLKLjkeuAGhAwE1dOtRmFCjRyUFW9Ytw1xe3b2bwKC3LnUVKxIJRQaQICg+48/lNDqcs6ZAflvybwMzVUrvVJ9VURWIJKspB8St9zOcNqZz6V6mn9qUOoKo1x0sFFwLgjbn2WmvR6ZaddWenSRvVg4U1sEI2/62/SZTQSlT6FCo1QbIzYLZj17dd56NJSCzORm3O3IDs+MRBXV6ag0INEgywZWJ+UsNFBpYaA4NLyiQ0vKBuV9IRTzWoLIc7dbdvPlLRtIccvWiydLxbbl8ZhylhowuWqk9EC1QMb33/Tb42lU2pBOmGzy6uVrfOZ8pMoTLYH0hNMFai2HTJNwTY/vaDnpel0an4Th77m1/wBLTJlKJjC8jSVsbE+UAtAvKLQg8pIrKSB3H1ZcL77rvNP4yx9GnC++67zT+M7iSfPzq29nx7WnEfVrwzvmt80/jL+rfhnfNb5r/GdtJHOrZ49rTi/q54Z3zWea/wAZY+jrhnfNZ5r/ABnZyRyq2ePa04o/RxwwurHWa043sLpz7fw/3eL1PoRwXSAHUcR1KXtbJk7QOztInczNqdJQ1Do9ank1PddyLcvlHKra9FrTjG9EOAJUWm3FqwZhcD1ib8z2eBhH0Q4Cux4rV5gf5ibE2t1eI850/wDgnDhSNMaboEWK+sa1iLEc+yE3CdCUwNDogWtm1rXB7fARzq2nRa05en6IcDqVUpU+J13dxdQrob/CQ+iXAF/Fxdx761P5eE6inwnQ0qi1EokOjFlb1jXBPM8+Z6z19cicJ0KvTcUOkgst3Y47W237LD3Adkc6tr0W9ObqehfB6VMVG4hqcSQAQym9+XVMtH0d9Ha5QUuK6ljU2QC2/wDx/u4nZPw/SVNMunqaem1JAAqsL2sLD4bQF4Voaa4pQsCAD02uQCSATe5FyTbxjnVtOi3pyZ9GeAA78S1W1r7Da9+fR8DGaX0T4LqqjUqGv1Tut8lsARbmDdee428ROmbhOiOJak7EAgFqrkgEkne/WefbHabQ6bSPlQp2bAIWZizFQSQLnfmT5xzq2ePa0572C4f3vV+a/KT2C4f3vV+a/KdaJI51HRb05H2C4f3rV+a/KT2C4f3vV+a/KddJHOo8e1pyPsDw/ver81+Ur2B4f3vV+a/KdfJHOo6LenIewHDu96vzX5STr5I51L0W9P/Z",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3UZoI3tpYjb9VPrhCcOJtt-Y2QnuN__7ykJKg49Nag&s",
"https://cdn.pixabay.com/photo/2015/02/04/05/01/musician-623362__340.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhAJY-9azuWUOv7VzAs5dWUHpfJ_q9v_s2DA&usqp=CAU",
"data:image/jpeg;base64,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",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLprJRSQMBtf0a2_wGEMKtsgphVHMTawXa4A&usqp=CAU",
"https://cdn.pixabay.com/photo/2015/03/16/08/18/hex-675576__340.jpg",
"https://cdn.pixabay.com/photo/2019/02/26/19/03/flat-lay-4022714__340.jpg",
"https://cdn.pixabay.com/photo/2019/03/11/09/58/ikea-4048225__340.jpg",
"https://cdn.pixabay.com/photo/2020/02/25/19/16/stawberry-4879794__340.jpg",
"https://cdn.pixabay.com/photo/2019/12/17/00/59/beach-4700514__340.jpg",
"https://cdn.pixabay.com/photo/2017/07/01/19/48/background-2462434__340.jpg",
"https://cdn.pixabay.com/photo/2014/04/05/11/39/ship-316557__340.jpg",
"https://cdn.pixabay.com/photo/2015/10/21/16/12/dahlia-999891__340.jpg",
"https://cdn.pixabay.com/photo/2018/02/11/22/21/paper-3146951__340.jpg",
"https://cdn.pixabay.com/photo/2015/07/29/15/39/hexagon-866195__340.jpg",
"https://cdn.pixabay.com/photo/2012/02/17/15/26/egg-14534__340.jpg",
"https://cdn.pixabay.com/photo/2018/04/28/03/47/balance-3356547__340.jpg",
"https://cdn.pixabay.com/photo/2020/06/21/21/24/fence-5326894__340.jpg"
]
let blurImageurl = "data:image/jpeg;base64,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";

let imagesContiner = document.querySelector('.container');
let images = document.querySelectorAll('.images');
let lastImage = document.querySelector('.images:last-child')
let imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
           let lazyload = entry.target;
           lazyload.src = lazyload.dataset.src;
           lazyload?.classList?.remove('lzy_img');
           if(document.querySelectorAll('.lzy_img').length<20){
            addImageElements('img');
           // imageObserver.unobserve(entry.target);
           // imageObserver.unobserve(lastImage);
           }
           imageObserver.unobserve(lazyload)
            
            
        }
    })
},{threshold:0.15, rootMargin:"100px"})
// imageObserver.observe(lastImage);
let Loadimages = document.querySelector('.lzy_img:last-child');
// Loadimages.forEach((img)=>{
    imageObserver.observe(imagesContiner)
// })

let count = 1;
function addImageElements(type){
   //for(let i=0;i<=5;i++){
     let image = document.createElement(type);
    //  image.classList.add('images');
     image.classList.add('lzy_img');
     image.alt = 'new image falied'
     image.src = blurImageurl;
     image.dataset.src = imageUrls[count++]
     //count++;
     if(count < 20){
        imagesContiner.appendChild(image);
        imageObserver.observe(image)
     }
     
   //}
}
function pickRandomImage(){
    let val = Math.floor(Math.random()*imageUrls.length);
    return val;
}
