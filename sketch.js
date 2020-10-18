var doggy,dog,happyDog,foods,database,foodstock

function preload()
{
  dog = loadImage("images/dog.png");
  happyDog = loadImage("images/happyDog.png");
}

function setup() {
  createCanvas(500,500);
  doggy=createSprite(250,250,50,50)
  doggy.addImage(dog);
  doggy.scale=0.35
 // database = firebase.database();
 // foodstock=database.ref('food')
 // foodstock.on("value",readStock)
}


function draw() {  
background(46, 139, 87)
if(keyWentDown(UP_ARROW)){
 writeStock(foods)
  doggy.addImage(happyDog)
  drawSprites();
  
}

drawSprites();
}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1;
    }
    database.ref('/').update({
      Food:x
    })
  }


