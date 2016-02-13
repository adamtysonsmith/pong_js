// Setup canvas
var canvas  = document.createElement('canvas');
var context = canvas.getContext('2d');
var WIDTH   = 500;
var HEIGHT  = 500;

var keystate = {};
var upArrow = 38;
var downArrow = 40;

var player1;
var player2;
var ball;

canvas.width = WIDTH;
canvas.height = HEIGHT;
context.fillStyle = '#ffffff';
context.fillRect(0, 0, WIDTH, HEIGHT);
document.body.appendChild(canvas);


function makePiece(x, y, w, h, color) {
    return {
        x: x,
        y: y,
        width: w,
        height: h,
        draw: function() {
            context.fillStyle = color;
            context.fillRect(this.x, this.y, this.width, this.height);
        },
        update: function() {
          if (keystate[upArrow]) this.y -= 7;
          if (keystate[downArrow]) this.y += 7;
        }
    }
}


function init() {
  player1 = makePiece(20, 200, 20, 100, 'black');
  player2 = makePiece(460, 200, 20, 100, 'black');
  ball    = makePiece(240, 240, 20, 20, 'red');
}


function draw() {
    // Save the canvas at it's starting point
    context.fillRect(0, 0, WIDTH, HEIGHT);
    context.save()
  
    player1.draw();
    player2.draw();
  
    drawLine();
    ball.draw();
  
    // Restore Canvas to original state
    context.restore()
}


function drawLine() {
    context.fillStyle = 'black';
    var w = 4;
    var x = (WIDTH - w) * 0.5;
    var y = 0;
    var step = HEIGHT / 15;

    while (y < HEIGHT) {
      context.fillRect(x, y + step * 0.25, w, step * 0.5);
      y += step;
    }
}


function registerEvents() {
  $(document).keydown(function(evt) {
    keystate[evt.keyCode] = true;
  });
  
  $(document).keyup(function(evt) {
    delete keystate[evt.keyCode];
  });
}


// Run the game
function run() {
    // Register events and initialize the game elements
    registerEvents()
    init();
    
    // Run the loop!
    var loop = function() {
        player1.update();
        draw();
        window.requestAnimationFrame(loop, canvas);
    }
    window.requestAnimationFrame(loop, canvas);
}

run();












// https://www.youtube.com/watch?v=KApAJhkkqkA
// https://github.com/maxwihlborg/youtube-tutorials/tree/master/pong
// http://html5.litten.com/understanding-save-and-restore-for-the-canvas-context/