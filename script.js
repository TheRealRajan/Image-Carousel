const imgContainer = document.querySelector('.image-container')
const leftBtn = document.querySelector('.left')
const rightBtn = document.querySelector('.right')
const country = document.querySelector('.country')
const img = document.querySelectorAll('img')

let idx = 0

let interval = setInterval(run, 2500) //function, time

function run(){
    idx++
    changeImage()
    
    // console.log(img[idx].getAttribute('title'))
}

function changeImage(){
    if(idx > img.length -1){
        idx = 0
    }
    else if(idx < 0){
        idx = img.length -1
    }
    
    imgContainer.style.transform = `translateX(${-idx * 80}vw)`
    country.innerText = img[idx].getAttribute('title')
    

}



rightBtn.addEventListener('click', ()=>{
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', ()=>{
    idx--
    changeImage()
    resetInterval()
})

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 2000);
}