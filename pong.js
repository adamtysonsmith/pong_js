// Setup canvas
var canvas  = document.createElement('canvas');
var context = canvas.getContext('2d');
var WIDTH   = 500;
var HEIGHT  = 500;

canvas.width = WIDTH;
canvas.height = HEIGHT;
context.fillStyle = '#ffffff';
context.fillRect(0, 0, WIDTH, HEIGHT);
document.body.appendChild(canvas);


// Lots of repetition
// Would like to teach them a better way
// A factory constructor?
function makePiece(x, y, w, h, color) {
    return {
        x: x,
        y: y,
        width: w,
        height: h,
        draw: function() {
            context.fillStyle = color;
            context.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}

var player1 = makePiece(20, 200, 20, 100, 'gray');
var player2 = makePiece(460, 200, 20, 100, 'blue');
var ball    = makePiece(240, 240, 20, 20, 'yellow');


function init() {
    player1.x = player1.width; // 20
    player1.y = (HEIGHT - player1.height)/2; // 200
    
    player2.x = WIDTH - (player1.width + player2.width); // 460
    player2.y = (HEIGHT - player2.height)/2; // 200
    
    ball.x = (WIDTH - ball.height)/2; //240
    ball.y = (HEIGHT - ball.width)/2; //240
}

function draw() {
    player1.draw();
    player2.draw();
    ball.draw();
}


// Run the game
function run() {
    // Initialize the game elements
    //init();
    
    // Run the loop!
    var loop = function() {
        draw();
        window.requestAnimationFrame(loop, canvas);
    }
    window.requestAnimationFrame(loop, canvas);
}

run();

















// Tutorial Example

//var player = {
//    x: null,
//    y: null,
//    width: 20,
//    height: 100,
//    draw: function() {
//        context.fillStyle = 'blue';
//        context.fillRect(this.x, this.y, this.width, this.height);
//    }
//}
//
//var ai = {
//    x: null,
//    y: null,
//    width: 20,
//    height: 100,
//    draw: function() {
//        context.fillStyle = 'red';
//        context.fillRect(this.x, this.y, this.width, this.height);
//    }
//}
//
//var ball = {
//    x: null,
//    y: null,
//    side: 20,
//    draw: function() {
//        context.fillStyle = 'green';
//        context.fillRect(this.x, this.y, this.side, this.side);
//    }
//}


//function init() {
//    player1.x = player.width;
//    player1.y = (HEIGHT - player.height)/2;
//    
//    player2.x = WIDTH - (player.width + ai.width);
//    player2.y = (HEIGHT - ai.height)/2;
//    
//    ball.x = (WIDTH - ball.side)/2;
//    ball.y = (HEIGHT - ball.side)/2;
//}