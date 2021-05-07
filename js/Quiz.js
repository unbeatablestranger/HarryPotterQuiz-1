class Quiz 
{
  constructor()
  {}

  getState()
  {
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state)
  {
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0)
    {
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");

      if(contestantCountRef.exists())
      {
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play()
  {
    //write code here to hide question elements
    

    //write code to change the background color here
    background("yellow");

    //write code to show a heading for showing the result of Quiz
    fill("black");
    textSize(30);
    text("The Results",350,50);

    //call getContestantInfo() here
    contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined)
    {
      for(var plr in allContestants)
      {
        var correctAns ="2";

        

        //write code to highlight contest who answered correctly

        if(correctAns === allContestants[plr].answer)
        {
          fill("green");
          textSize(20);
          text(contestant.name,200,100);
        }else
        {
          fill("red");
          textSize(20);
          text(contestant.name,200,200);
        }  
      }
    }

    
   


    //write code to add a note here
    
    
    
  }

}
