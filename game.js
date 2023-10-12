// Iteration 1.1: Add shotgun sound

let game_body = document.getElementById("game-body")
let shotgunSound = new Audio("./assets/shotgun.wav")
game_body.onclick = () => {

    shotgunSound.currentTime = 0
    shotgunSound.play()
}



// Iteration 1.2: Add background sound

let backgroundMusic = new Audio("./assets/bgm.mp3")
backgroundMusic.play()
backgroundMusic.loop = true






// Iteration 2: Write a function to make a zombie

let zombieID = 0
let zombie;
function generateZombies() {
    let num = generateUniqueNums(1, 7)
    
    game_body.innerHTML += `<img src=./assets/zombie-${num}.png class=zombie-image id=zombie${zombieID}>`
    zombie = document.getElementById(`zombie${zombieID}`)
    
    let second = generateUniqueNums(2, 6)
    zombie.style.animationDuration = `${second}s`
    let viewWidth = generateUniqueNums(20, 80)
    zombie.style.transform = `translateX(${viewWidth}vw)`


    zombie.onclick = () => {
        destroyZombie(zombie)
    }
    
}



// Iteration 3: Write a code to start the game by calling the first zombie

generateZombies()





// Iteration 4: Write the helper function to get random integer

function generateUniqueNums(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}





// Iteration 5: Write a function to destroy a zombie when it is shot or missed
function destroyZombie(zombie) {
    zombie.style.display = "none"
    zombieID++

    generateZombies()
}


 


// Iteration 6: Write a function to check if the player missed a zombie and reduce Lives

function adjustDivWidth(widthPercentage) {
    const div = document.getElementById('max-lives');
    const viewportWidth = window.innerWidth;    
    
    const calculatedWidth = (viewportWidth * widthPercentage) / 100;
    div.style.width = calculatedWidth + 'px';
  }


let lives=5
let widthPercentage = 100

function zombieEscape(zombie) {   
    
    if (zombie.getBoundingClientRect().top < 50) {
        lives-=1
        widthPercentage-=20

        adjustDivWidth(widthPercentage)
        
        destroyZombie(zombie)
    }

    else if (lives==0) {
        location.href = "gameover.html"
    }
}



// Iteration 7: Creating timer

let time = 60

setInterval(timer, 1000)
function timer() {
    if (time == 1) {
        location.href = "win.html"
    }

    time--
    

    var timerBox = document.getElementById("timer")
    timerBox.innerHTML = time    
}


setInterval(Escape,100)
function Escape() {
    zombieEscape(zombie)
}
