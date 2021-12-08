const imgs = document.getElementById('imgs')

const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let ind = 0

let interval = setInterval(run,4000)

rightBtn.addEventListener('click', () => {
    ind++
    changeImg()
    reserInterval()
})

leftBtn.addEventListener('click', () => {
    ind--
    changeImg()
    reserInterval()
})

function changeImg() {
    if (ind > img.length - 1){
        ind = 0
    } else if (ind < 0){
        ind = img.length - 1
    }
    imgs.style.transform = `translateX(${-ind * 500}px)`
}

function reserInterval(){
    clearInterval(interval)
    interval = setInterval(run,4000)
}

function run() {
    ind++
    changeImg()
}