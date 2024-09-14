var player1Y = 270;
var player2Y = 270;
var ballX = 643; 
var ballY =  320;
var hit = null;
var moveDownPlayer1;
var moveUpPlayer1;
var moveDownPlayer2;
var moveUpPlayer2;
var colisionType;
var pause = true;
var player1Score = 0;
var player2Score = 0;
document.getElementById("score1").innerHTML = player2Score;
document.getElementById("score2").innerHTML = player1Score;
function  updateDisplay(){
 document.getElementById("pl1").style.top = player1Y+"px";
 document.getElementById("pl2").style.top = player2Y+"px";
 document.getElementById("ball").style.left = ballX+"px";
 document.getElementById("ball").style.top = ballY+"px";
 colision();
 winnerReset();
 if (pause == false){
    moveBall();
 }
 
};

document.addEventListener('keydown', function(event) {
    if (event.key === 's'){
        if(player1Y < 520){
        player1Y += 20;
        moveDownPlayer1 = true;
        moveUpPlayer1 = false;
        }
    } else if((event.key === 'w')){
        if(player1Y > 10){
        player1Y -= 20;
        moveUpPlayer1 = true;
        moveDownPlayer1 = false;
        }
    }
    
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowDown'){
        if(player2Y < 520){
        player2Y += 20;
        moveDownPlayer2 = true;
        moveUpPlayer2 = false;
        }
    } else if((event.key === 'ArrowUp')){
        if(player2Y > 10){
        player2Y -= 20;
        moveDownPlayer2 = true;
        moveUpPlayer2 = false;
        }
    }
    
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && ballX == 643){
        pause = false;
        hit = Math.random() < 0.5;

}});

function moveBall(){
    if(hit == false){
        setInterval(ballX -= 10, 4000);
    }
    else if(hit == true){
        setInterval(ballX += 10, 4000);
}

if(colisionType == true){
    setInterval(ballY -= 5, 4000);   
}
if(colisionType == false){
    setInterval(ballY += 5, 4000); 
}
console.log("ballX", ballX);
console.log("ballY", ballY);
console.log("player1Y", player1Y);

}
function pauseGame(){
    pause = true;
    ballX = 643;
    ballY =  320;
    player1Y = 270;
    player2Y = 270;
    colisionType = null;
}
    
function colision(){
    let pbDiff1 = false;
    let pbDiff2 = false;
    if (ballY >= player1Y-10 && ballY < player1Y +60){
        pbDiff1 = true;
    }
    if (ballY >= player2Y-10 && ballY < player2Y +60 ){
        pbDiff2 = true;
    }
    // Colisão da bola com o player 1
   if(ballX < 35 && pbDiff1 == true){ 
    hit = true;
    pbDiff1 = false;
    if(moveDownPlayer1 == true){
        colisionType = false;
    }
    if(moveUpPlayer1 == true){
        colisionType = true;
    }
   }
   //Colisão da bola com o player 2 
   if(ballX > 1260 && pbDiff2 == true){
    hit = false;
    pbDiff2 = false;
    if(moveDownPlayer2 == true){
        colisionType = false;
    }
    if(moveUpPlayer2 == true){
        colisionType = true;
    }

   }
   if(ballY <= 0){ 
    colisionType = false;
   }
   if(ballY >= 585){ 
    colisionType = true;
   }


}

function winnerReset() {
    if(ballX < -60){
        pauseGame();
        player2Score++;
        document.getElementById("score1").innerHTML = player2Score;
    }
    if(ballX > 1300){
        pauseGame();
        player1Score++; 
        document.getElementById("score2").innerHTML = player1Score;
    }

    
    
}

setInterval(updateDisplay, 20);
console.log(pause);