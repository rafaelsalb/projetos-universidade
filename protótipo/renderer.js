class Renderer {

    constructor(r, g, b) {
        this.objects = [];
        this.floor = {
            r: r,
            g: g,
            b: b
        }
        this.horizon = height/2;
        this.screenStart = width/2;
        this.wallSize = 5000;
    }

    render() {

        rectMode(CORNER);
        fill(this.floor.r, this.floor.g, this.floor.b);
        rect(width/2, height/2, width/2, height/2);
        fill(200);
        rect(width/2, 0, width/2, height/2);
        strokeWeight(4);

        for (let i = 0; i < this.objects.length; ++i) {
            let distance = this.objects[i].dist;

            if (distance != -1) {
                let curr = this.objects[i];
                let color = curr.color;

                let projected_half_size = curr.height / (2 * curr.dist);

                let y0 = this.horizon + projected_half_size;
                let y1 = y0 - 2*projected_half_size*this.wallSize;
                
                //if (i == 50) {
                //    console.log(y0, y1);
                //    stroke(0, 0, 255);
                //}
                //else {
                    stroke(color.r, color.g, color.b);
                //}

                line(4 * curr.idx + this.screenStart, y0, 4 * curr.idx + this.screenStart, y1);
            }
        }

    }

    update(objects) {
        this.objects = objects;
        this.objects.sort(this.compareReverse);
    }

    compareReverse(a, b) {
        if (a.dist < b.dist) {
            return  1;
        }
        else if (a.dist > b.dist) {
            return -1;
        }
        else {
            return 0;
        }
    }

}