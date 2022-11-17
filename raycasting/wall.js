class Wall
{
    constructor(x1, y1, x2, y2)
    {
        this.a = new p5.Vector(x1, y1);
        this.b = new p5.Vector(x2, y2);
        this.color = {r: 255, g: 255, b: 255};
        this.height = 1;
    }

    setColor(r, g, b) {
        this.color.r = r;
        this.color.g = g;
        this.color.b = b;
    }

    setHeight(h) {
        this.height = h;
    }

    show()
    {
        strokeWeight(8);
        stroke(this.color.r, this.color.g, this.color.b);
        line(this.a.x, this.a.y, this.b.x, this.b.y)
    }
}