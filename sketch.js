//Class 0

//Goal: To create the basic structure of the PONG game


//Declare variables for game objects and behaviour indicators(FLAGS)
var aiPaddle, userPaddle, ball;
var topBorder, bottomBorder;
var gameState
var userScore, aiScore;
var aiIMG, userIMG, ballIMG, bkgIMG;
var userSound, aiSound, gameOverSound;

/*
Called directly before setup(), the preload() function is used to handle asynchronous loading of external 
files in a blocking way. If a preload function is defined, setup() will wait until any load calls within 
have finished. Nothing besides load calls (loadImage, loadJSON, loadFont, loadStrings, etc.) should be 
inside the preload function. 


 Unlike setup(), preload() forces the program to wait until everything has loaded before moving on. 
 It is best to only make load calls in preload(), and do all other setup in setup(). preload() 
 ensures that the image has been loaded before running the other code.
*/
function preload() {
  aiIMG = loadImage("./assets/alien.png");
  userIMG = loadImage("./assets/human.png");
  ballIMG = loadImage("./assets/earth.png");
  bkgIMG = loadImage("./assets/space.png");
  userSound = loadSound("./assets/alien sound.mp3");
  aiSound = loadSound("./assets/human sound.mp3");
  gameOverSound = loadSound("./assets/game over sound.mp3");
}


//define the intial environment of the software(before it is used)
//by defining the declared variables with default values
//executed only once at the start of the program
function setup() {
  //1. Ground Outline
  //createCanvas(width, height);
  createCanvas(600, 600);

  //   defining the variables accordingly

  //2.BALL
  ball = createSprite(300, 300, 20, 20);
  ball.shapeColor = "lightred";
  ball.addImage("ballIMG", ballIMG);
  ball.scale = 0.3;
  /* `ball.debug = true;` is setting the debug property of the `ball` sprite to `true`. This property
  is used in the p5.play library to display a visual representation of the sprite's boundaries and
  center point on the canvas. When `debug` is set to `true`, the sprite's boundaries are displayed
  as a green rectangle and its center point is displayed as a red dot. This is useful for debugging
  collision detection and sprite positioning in the game. */
  ball.debug = false;
  ball.setCollider("circle", 0, 0, 95);


  //3. AI PADDLE
  aiPaddle = createSprite(40, 300, 20, 120);
  /* `aiPaddle.addImage("aiIMG", aiIMG);` is adding an image to the `aiPaddle` sprite using the
  `addImage()` function from the p5.play library. The first argument `"aiIMG"` is a label or
  identifier for the image, and the second argument `aiIMG` is the actual image file that was loaded
  in the `preload()` function using the `loadImage()` function. This line of code is setting the
  image of the `aiPaddle` sprite to the `aiIMG` image file. */
  aiPaddle.addImage("userIMG", userIMG);
  aiPaddle.scale = 0.75;
  aiPaddle.debug = false;
  /* `aiPaddle.setCollider("circle", 0, 0, 45);` is setting a circular collider for the `aiPaddle`
  sprite using the `setCollider()` function from the p5.play library. The first argument `"circle"`
  specifies the shape of the collider, which in this case is a circle. The second and third arguments
  `0` and `0` specify the offset of the collider from the center of the sprite, which is set to the
  top-left corner of the sprite in this case. The fourth argument `45` specifies the radius of the
  collider, which is set to 45 pixels. This means that any other sprite that collides with the
  `aiPaddle` sprite will collide with the circular area defined by the collider, rather than the
  rectangular area defined by the sprite's dimensions. This is useful for more accurate collision
  detection in games. */
  aiPaddle.setCollider("circle", 0, 0, 45);

  //4. USER PADDLE
  userPaddle = createSprite(560, 300, 20, 120);
  userPaddle.addImage("aiIMG", aiIMG);
  /* `userPaddle.scale = 0.5;` is setting the scale of the `userPaddle` sprite to 0.5. This means that
  the size of the sprite will be reduced to half of its original size. This is a way to adjust the
  size of the sprite to fit the game space or to make it visually appealing. */
  userPaddle.scale = 0.5;
  userPaddle.debug = false;
  /* `userPaddle.setCollider("rectangle", 0, 0, 70, 250);` is setting a rectangular collider for the
  `userPaddle` sprite using the `setCollider()` function from the p5.play library. The first
  argument `"rectangle"` specifies the shape of the collider, which in this case is a rectangle. The
  second and third arguments `0` and `0` specify the offset of the collider from the center of the
  sprite, which is set to the top-left corner of the sprite in this case. The fourth argument `70`
  specifies the width of the collider, which is set to 70 pixels, and the fifth argument `250`
  specifies the height of the collider, which is set to 250 pixels. This means that any other sprite
  that collides with the `userPaddle` sprite will collide with the rectangular area defined by the
  collider, rather than the sprite's dimensions. This is useful for more accurate collision
  detection in games. */
  userPaddle.setCollider("rectangle", 0, 0, 70, 250);

  //creating edges in sprites
  /* `createEdgeSprites();` is a function in the p5.play library that creates invisible sprites at the
  edges of the canvas. These sprites can be used to detect collisions with other sprites and prevent
  them from going off the screen. */
  createEdgeSprites();

  topBorder = createSprite(300, 1, 600, 10);
  topBorder.shapeColor = "pink";
  bottomBorder = createSprite(300, 598, 600, 10);
  bottomBorder.shapeColor = "pink";

  /* `userScore = 0; aiScore = 0;` is initializing the score variables for the user and AI players to 0
  at the start of the game. This is important as it ensures that the score starts at 0 for both
  players and is incremented correctly throughout the game. */
  userScore = 0;
  aiScore = 0;

  //creating and adding value to GAMESTATE
  //(used as a flag to indicate the behaviour of game in different stages)
  gameState = "pre-start";

}

//All modifications, changes, conditions, manipulations, actions during the course of the program are written inside function draw.
//All commands to be executed and checked continously or applied throughout the program are written inside function draw.
//function draw is executed for every frame created since the start of the program.
function draw() {
  background("black");
  imageMode(CENTER);
  image(bkgIMG, 300, 300, 600, 600);

  console.log(gameState);

  /* `text("x:" + mouseX + ", y:" + mouseY, mouseX, mouseY);` is displaying the current x and y
  coordinates of the mouse cursor on the canvas. The `mouseX` and `mouseY` variables are built-in
  variables in p5.js that store the current x and y coordinates of the mouse cursor. The `text()`
  function is used to display text on the canvas, and in this case, it is displaying the text "x:"
  followed by the current x coordinate of the mouse cursor, a comma, a space, "y:" and the current y
  coordinate of the mouse cursor. The `mouseX` and `mouseY` variables are used as the x and y
  coordinates for the text, so the text is displayed at the current position of the mouse cursor. */
  text("x:" + mouseX + ", y:" + mouseY, mouseX, mouseY);

  /* This code block is checking if the gameState variable is equal to "pre-start". If it is, it
  displays a message on the canvas using the `text()` function from the p5.js library. The message
  says "Please press space to serve" and is positioned at coordinates (240, 250) on the canvas with
  a font size of 15. This message is displayed to prompt the user to start the game by pressing the
  space key. */
  if (gameState == "pre-start") {
    textSize(15);
    fill("purple");
    text("Please press space to serve", 220, 250);
  }


  //TO START GAME
  /* This code block is checking if the space key is being pressed down. If it is, it sets the
  gameState variable to "active" and gives the ball sprite a velocity in the x and y directions,
  causing it to move across the screen. This code block is used to start the game and initiate the
  movement of the ball. */
  if (keyDown("space")) {
    gameState = "active";
    ball.velocityX = 6;
    ball.velocityY = 5;
  }


  //Movement of paddles
  userPaddle.y = mouseY;
  //aiPaddle.y = ball.y;
  if (keyDown("up")) {
    aiPaddle.y = aiPaddle.y - 10;
  }
  else if (keyDown("down")) {
    aiPaddle.y = aiPaddle.y + 10;
  }

  //display Scoreboard 
  fill("purple");
  textSize(25);
  text("SCOREBOARD", 205, 30);
  text(userScore, 385, 60);
  text(aiScore, 195, 60);

  //TO BRING BACK THE BALL IN THE CENTER
  /* This code block is checking if the ball sprite has gone off the left or right edges of the canvas.
  If it has, it increases the score of the appropriate player (user or AI) and sets the gameState
  variable to "pre-start". It then calls the resetBall() function to reset the ball to its original
  position and state. This code block is important for the game of PONG as it keeps track of the
  score and ensures that the ball stays within the boundaries of the game. */
  if (ball.x < 0 || ball.x > 600) {
    //TO INCREASE SCORE 
    if (ball.x < 0) {
      userScore++;
    }
    else if (ball.x > 600) {
      aiScore++;
    }
    gameState = "pre-start";
    //function call to reset the ball
    resetBall();
  }

  //condition  for game over state
  /* This code block is checking if either the userScore or aiScore variables are equal to 5. If either
  of them is equal to 5, it means that one of the players has reached the winning score and the game
  is over. The code then displays the message "GAME OVER !!" on the canvas at coordinates (250, 250)
  with a font size of 15, and prompts the user to restart the game by pressing the "r" key with the
  message "Press r to Restart" displayed at coordinates (240, 250). The gameState variable is also
  set to "over" to indicate that the game is over and prevent any further movement of the ball. */
  if (userScore == 5 || aiScore == 5) {
    gameOverSound.play();


    textSize(15);
    fill("purple");
    text("GAME OVER !!", 250, 250);
    text("Press r to Restart", 240, 230);
    gameState = "over";
    //function call to reset the ball
    resetBall();
  }

  //condition  for game restart state
  if (keyDown("r") && gameState == "over") {
    userScore = 0;
    aiScore = 0;
    gameState = "pre-start";
    //function call to reset the ball
    resetBall();
  }

  if (userPaddle.isTouching(ball)) {
    userSound.play();
  }

  if (aiPaddle.isTouching(ball)){
    aiSound.play();
  }




  /* `ball.bounceOff(topBorder)` and `ball.bounceOff(bottomBorder)` are functions in the p5.play library
  that check if the ball sprite is colliding with the top or bottom border sprites respectively. If a
  collision is detected, the function changes the direction of the ball's velocity so that it bounces
  off the border instead of going through it. This is important for the game of PONG as it ensures
  that the ball stays within the boundaries of the game and does not go off-screen. */
  ball.bounceOff(topBorder);
  ball.bounceOff(bottomBorder);

  /* `ball.bounceOff(userPaddle)` and `ball.bounceOff(aiPaddle)` are functions in the p5.play library
  that check if the ball sprite is colliding with the userPaddle or aiPaddle sprites respectively. If
  a collision is detected, the function changes the direction of the ball's velocity so that it
  bounces off the paddle instead of going through it. This is important for the game of PONG as it
  simulates the physics of a ball bouncing off a paddle and adds to the gameplay mechanics. */
  //restrict ball movement inside the canvas by bouncing it off the edges in the form of sprites
  ball.bounceOff(userPaddle);
  ball.bounceOff(aiPaddle);

  //CREATING NET IN THE MIDDLE OF THE SPACE with help of LINE COMMAND
  /* This code block is creating a net in the middle of the game space for the PONG game. It uses a for
  loop to draw multiple lines with a gap of 10 pixels between them, creating the appearance of a
  net. The loop starts at 0 and increments by 20 until it reaches 600, drawing a line at each
  iteration with the `line()` function from the p5.js library. 
  
  The `line()` function takes four arguments: the x and y coordinates of the starting point of the line, and the x and y coordinates
  of the ending point of the line. In this case, the starting point of each line is at x=300 and the
  y coordinates are incremented by 20 at each iteration, while the ending point of each line is at
  x=300 and the y coordinates are incremented by 10 at each iteration, creating the gap between the
  lines. */
  for (var i = 0; i < 600; i = i + 20) {
    line(300, i, 300, i + 10);
  }



  drawSprites();
}

//function definition to reset the ball(setting ball to original position and state
/**
 * The function resets the position and velocity of a ball in a game.
 */
function resetBall() {
  ball.x = 300;
  ball.y = 300;
  ball.velocityX = 0;
  ball.velocityY = 0;
}