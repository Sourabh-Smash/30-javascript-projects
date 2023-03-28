const keys=document.querySelectorAll('.key')

function removeTransition(e){
if(e.propertyName !=='transform') return 
this.classList.remove('playing');
}

keys.forEach(key=>{
   key.addEventListener('transitionend',removeTransition);
})
const playMusic= e=>{
    const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!audio) return 
    audio.currentTime=0
    audio.play()
    const key= document.querySelector(`.key[data-key="${e.keyCode}"]`)
    key.classList.add('playing')
}

window.addEventListener('keydown',playMusic)

