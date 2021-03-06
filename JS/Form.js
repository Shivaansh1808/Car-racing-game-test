class Form{
    constructor(){
        this.title = createElement('h1');
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h2");
        this.reset = createButton("Reset");

        this.image = loadImage("images/formbg.jpg");
    
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){

        //image(this.image, 200, 200, displayWidth, displayHeight);
        createImg('images/formbg.jpg', 'background');
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2-160, 0);
        this.title.style('font-family', 'Comic Sans MS');
        this.title.style('font-size', '60px');
        this.title.style('color', 'red');

        this.input.position(displayWidth/2-40, displayHeight/2-80);

        this.reset.position(displayWidth-100, 50);
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            player.updateCount(0);
            Player.updatecarsatend(0)
        })

        this.button.position(displayWidth/2+20, displayHeight/2);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name + " !!")
            this.greeting.position(displayWidth/2-40, displayHeight/2-20);
        });
    }
}