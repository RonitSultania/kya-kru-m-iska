class Form{
    constructor(){

    }
display(){
    var title = createElement("h2");
    title.html("CAR RACE");
    title.position(130, 0);
    var input = createInput("name");
    input.position(130, 160);
    var button = createButton("PLAY");
    button.position(250, 200);
    button.mousePressed(function(){
        input.hide();
        button.hide();
        var name = input.value();
        Playercount = Playercount +1;
        player.update(name);
        player.updateCount(Playercount);
        var greeting = createElement("h3");
        greeting.html("KEM CHO"+name)
        greeting.position(130, 160);
    })
   
}
}
