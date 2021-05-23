class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null; 
        this.rank = null;
    }

    getCount(){
        var playerCountRef = database.ref("/playerCount");
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        });
    }

    updateCount(count){
        var playerCountRef = database.ref("/");
        playerCountRef.update({
            playerCount : count
        });
    }

    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name  : this.name,
            distance : this.distance,
            rank : this.rank
        });
    }

    static getCarsAtEnd(){
        database.ref("carsAtEnd").on("value",function(data){
            carsAtEnd = data.val();
        })
    }

    static updateCarsAtEnd(rank){
        database.ref("/").update({
            carsAtEnd : rank
        })
    }

    updateRank(index,rank){
        var plrIndex = "players/player"+index
        database.ref(plrIndex).update({
            rank : rank
        })
    }


    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        //console.log(allPlayers);
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
            //console.log(allPlayers)
        })
    }
}