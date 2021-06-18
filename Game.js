class Game{
constructor(){

}
getState(){
    var gameStateref = database.ref("gameState")
    gameStateref.on("value", function(data){
Gamestate = data.val();
    })
} 
update(Gamestate){
database.ref('/').update({
    gameState: Gamestate
})
}
start(){
    if(Gamestate===0){
        player = new.player();
        player.getCount();
        form = new Form();
        form.display();
    }
}
}