class Form {
constructor () {
}
display() {
    var title = createElement('h1')
    title.html("Car Racing Game");
    title.position(100,50);
    var input = createInput("name")
    input.position(200,100)
    var button = createButton('play');
    button.position(400,150)
    button.mousePressed( function() {
    input.hide();
    button.hide();
    var name = input.value();
    playerCount+=1;
    player.update(name);
    player.updateCount(playerCount);
    var greeting = createElement('h2')
    greeting.html("Hello" + name)
    greeting.position(250,250)
    })
}
}