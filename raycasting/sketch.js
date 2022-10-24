const walls = [];
let view = [];
let player;
let renderer;

function setup()
{
    let canvas = createCanvas(800, 300);
    canvas.parent("canvas");
    background(0);

    // walls.push(new Wall(0, 0, width, 0));
    // walls.push(new Wall(0, height, width, height));

    list_walls();

    player = new Player(width/4, height/2, 1, walls);
    walls.push(new Wall(0, 0, width/2, 0));
    walls.push(new Wall(0, height, width/2, height));
    walls.push(new Wall(width/2, 0, width/2, height));

    walls.push(new Wall(100, 200, 200, 200));
    walls[3].setColor(255, 0, 0);

    walls.push(new Wall(0, 0, 0, height));
    // rays.push(new Ray(0));

    renderer = new Renderer();
}

function draw()
{
    background(0);
    player.handle_input();
    view = player.update();
    player.show();
    // console.log(player.angle);

    stroke(255);
    strokeWeight(2);
    line(width/2, 0, width/2, height)

    renderer.update(view);
    renderer.render();
}

function grid(space)
{
    for (let i = 0; i < width; i += space) {
        line(i, 0, i, height);
    }

    for (let j = 0; j < height; j += space) {
        line(0, j, width, j);
    }
}

function mousePressed()
{
    // if (mouseButton === "LEFT") {
        // for (let i = 0; i < rays.length; ++i) {
            // rays[i].debug(i);
            for (let i = 0; i < view.length; ++i) {
                console.log(view[i][0]);
                console.log(view[i][1]);
            }
        // }
    // } else {
        //console.log(frameRate());
    // }
}

function add_wall()
{
    let x1 = document.getElementById("x1").value;
    let y1 = document.getElementById("y1").value;
    let x2 = document.getElementById("x2").value;
    let y2 = document.getElementById("y2").value;

    walls.push(new Wall(x1, y1, x2, y2));
    list_walls();
}

function remove_wall(index)
{
    walls.splice(index, 1);
    list_walls();
}

function toggle_fov()
{
    if (player.show_fov) {
        player.show_fov = false;
    } else {
        player.show_fov = true;
    }
}