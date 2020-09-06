var ball, database, databaseref;
var dataThing;

function setup(){
    database = firebase.database();
    createCanvas(500, 500);
    ball = createSprite(250, 250, 10, 10);
    ball.shapeColor = "red";
    databaseref = database.ref("ball/position");
    databaseref.on("value", readPosition, showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1, 0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1, 0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0, -1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0, +1);
    }
    drawSprites();
}

function changePosition(x, y){

    database.ref("ball/position").set({
        
        x: dataThing.x + x,
        y: dataThing.y + y
        
    });

}

function readPosition(data){

    dataThing = data.val();
    ball.x = dataThing.x;
    ball.y = dataThing.y;
    
}

function showError(){

    console.log("get it right dumbass");

}