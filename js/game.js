window.addEventListener('load', game_init);

var mask = undefined;
var context = undefined;
const canvas_dim = 1024;

function game_init() {
    let canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    canvas.width = canvas_dim;
    canvas.height = canvas_dim;
    mask = document.getElementById("drawmask");
    mask.addEventListener("mousedown", game_draw_down);
    mask.addEventListener("mouseup", game_draw_up);
    mask.addEventListener("mousemove", game_draw_move);

    document.getElementById("paint_black" ).addEventListener('click', function(){game_color("#000000"); });
    document.getElementById("paint_red"   ).addEventListener('click', function(){game_color("#ff0000"); });
    document.getElementById("paint_orange").addEventListener('click', function(){game_color("#ff8c00"); });
    document.getElementById("paint_yellow").addEventListener('click', function(){game_color("#ebee1b"); });
    document.getElementById("paint_green" ).addEventListener('click', function(){game_color("#06b700"); });
    document.getElementById("paint_blue"  ).addEventListener('click', function(){game_color("#0015b7"); });

    document.getElementById("pensize_large").addEventListener('click', function(){game_pensize(40); });
    document.getElementById("pensize_med"  ).addEventListener('click', function(){game_pensize(20); });
    document.getElementById("pensize_small").addEventListener('click', function(){game_pensize(10); });
    context.lineWidth = 10;
    context.lineCap = "round";
}

var pen_down = false;
var last_draw = undefined;

function game_draw_down() {
    pen_down = true;
}

function game_draw_move(e) {
    console.log(e);
    console.log(e.offsetX, e.offsetY);
    if(!pen_down) return;
    // Calculate calculate draw location
    let x = e.offsetX / mask.offsetWidth * canvas_dim;
    let y = e.offsetY / mask.offsetHeight * canvas_dim;
    if(last_draw != undefined) {
        context.beginPath();
        context.moveTo(last_draw[0], last_draw[1]);
        context.lineTo(x, y);
        context.stroke();
    }
    last_draw = [x,y];
}

function game_draw_up() {
    pen_down = false;
    last_draw = undefined;
}

function game_color(color) {
    console.log("Setting color to ", color);
    context.strokeStyle = color;
}

function game_pensize(size) {
    console.log("Setting pen size to ", size);
    context.lineWidth = size;
}