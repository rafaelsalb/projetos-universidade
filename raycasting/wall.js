class Wall
{
    constructor(x1, y1, x2, y2)
    {
        this.a = new p5.Vector(x1, y1);
        this.b = new p5.Vector(x2, y2);
        this.color = {r: 255, g: 255, b: 255};
    }

    setColor(r, g, b) {
        this.color.r = r;
        this.color.g = g;
        this.color.b = b;
    }

    show()
    {
        strokeWeight(8);
        stroke(127);
        line(this.a.x, this.a.y, this.b.x, this.b.y)
    }
}