var canvas, memeImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;

function preload()
{
   memeImage = loadImage("geniusHarryPotterMeme.jpg");
}


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw()
{
  background("pink");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }

  if(contestantCount === 1)
  {
    textSize(30);
    fill("black");
    text("Waiting for another player",350,200);
  }

  image(memeImage,580,120,280,280);

}
