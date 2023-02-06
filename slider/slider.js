const nextBtn = document.querySelector(".button__right")
const prevBtn = document.querySelector(".button__left")
const sliderLine = document.querySelector(".slider__line")
let offset = 0 


nextBtn.addEventListener("click", ()=>{
    offset= offset + 365
    if(offset>1095){
        offset = 0
    }
    sliderLine.style.left= -offset + "px"
})

prevBtn.addEventListener("click", ()=>{
 offset= offset - 365
if(offset<0){
   offset = 1095 
}
sliderLine.style.left = -offset +"px"   
})