var ball;
var database;
var position;
var Gamestate = 0;
var Playercount;
var form;
var player;
var game;


function setup(){
    createCanvas(500,500);
database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
    background("white");
    
    drawSprites();
}

