class Player{
    constructor(){
        this.name=null;
        this.distance =0;
        this.index=null;
    }

    getCount(){
        var playerRef = database.ref("playerCount");
        playerRef.on("value",(data)=>{
            playerCount = data.val()
        })
    }

    updateCount(n){
        database.ref('/').update ({
            playerCount: n
        });
    }

    update(){
        //players
        // - player1
        // - player2
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance  
        })
    }
    static getPlayerInfo(){
            var playerInfoRef=database.ref("players")
            playerInfoRef.on("value",(data)=>{
                allPlayers=data.val()
            
                
            })
            
    }

   
}
