/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
currentPlayer = "player1";
authorPlayer ="player2";
function  startGame() {
    disableButtons(false);
    document.getElementById('score-0').innerText = 0;
    document.getElementById('score-1').innerHTML = 0;
    document.getElementById('current-0').innerHTML = 0;
    document.getElementById('current-1').innerHTML = 0;
    currentPlayer = "player1";
    authorPlayer ="player2";
    document.getElementById(authorPlayer).classList.remove('active');
    document.getElementById(currentPlayer).classList.add('active');

}
function changePlayers ()  {

    if(currentPlayer ==="player1"){
    currentPlayer = "player2";
    authorPlayer ="player1";}
    else
    {
        currentPlayer = "player1";
        authorPlayer = "player2";
    }
    document.getElementById(authorPlayer).classList.remove('active');
    document.getElementById(currentPlayer).classList.add('active');
    document.getElementById('current-0').innerHTML = 0;
    document.getElementById('current-1').innerHTML = 0;


}
function  rollDice() {
  a = Math.floor(Math.random()*6+1);

    document.getElementById('image').src = "dice-"+ a +".png";
    if(a === 1){
        if(currentPlayer ==='player1'){
        document.getElementById('current-0').innerText=0;}
        else {
            document.getElementById('current-1').innerText=0;}
        changePlayers();
    }
    else{
    if(currentPlayer ==="player1" )
    document.getElementById('current-0').innerHTML = parseInt(document.getElementById('current-0').innerHTML)+a;
else
        document.getElementById('current-1').innerHTML = parseInt(document.getElementById('current-1').innerHTML)+a; }
}
function  disableButtons(tmp)
{
    document.getElementById('btnRoll').disabled = tmp;
    document.getElementById('btnHold').disabled = tmp;
}
function hold() {

     if(currentPlayer === "player1"){
         var tmp = parseInt(document.getElementById('score-0').innerHTML);
    document.getElementById('score-0').innerHTML = parseInt(document.getElementById('current-0').innerHTML)+ tmp;
       if(tmp >=100){
       disableButtons(true);
     }
     }
   else {
         var tmp = parseInt(document.getElementById('score-1').innerHTML);
         document.getElementById('score-1').innerHTML = parseInt(document.getElementById('current-1').innerHTML)+ tmp;
         if(tmp >=100){
             disableButtons(true);
           }

   }
        changePlayers();
}

//changePlayer();