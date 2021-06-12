class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    textSize (30);
    text ("Game Start",120,100);

    // for (i=0; i<5; i++){ ... }
    // for(counter begin; condition; increase or decrease){}
    Player.getPlayerInfo();
    if(allPlayers!=undefined){

      var display_position =150
      for(var plr in allPlayers){
        if(plr=="player"+player.index){
          fill("red")
  
        }
        else{
          fill("black")
        }
        textStyle(BOLDITALIC)
      text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position )
      display_position+=30
       

      }
    }
    
    if(keyIsDown(UP_ARROW)&&player.index!=null){
           player.distance+=15
           player.update()
    }
  }
}
