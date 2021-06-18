class Player{
    constructor(){

    }
     getCount(){
        var playerCountref = database.ref("playerCount")
        playerCountref.on("value", function(data){
        playerCount = data.val();
        }
        )
     }
    updateCount(Playercount){
        database.ref('/').update({
            playerCount: Playercount
        })
    }
    update(name){
var playerIndex = "player" + Playercount
database.ref(playerIndex).set({
    name: name,
})

    }
}