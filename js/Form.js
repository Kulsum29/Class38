class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
      
    console.log(this)
  
  }

  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }
  display(){
     var title = createElement('h2')
   
    title.html("Car Racing Game");
    title.position(130, 0);
    
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
   
      this.input.hide();
      this.button.hide();

      var name = this.input.value();
      //var player = new Player();
      player.name=this.input.value();
      
      playerCount++;
      player.index=playerCount;
      player.distance=0;
      player.updateCount(playerCount);
      console.log(player)
      player.update()
     // playerCount+=1;
      //player.update(name)
      //player.updateCount(playerCount);
     this.greeting.html("Hello " + name )
      this.greeting.position(130, 160)

    });

  }
}
