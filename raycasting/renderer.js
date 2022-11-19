class Renderer {

    constructor(r, g, b) {
        this.objects = [];
        this.floor = {
            r: r,
            g: g,
            b: b
        }
    }

    render() {

        rectMode(CORNER);
        fill(this.floor.r, this.floor.g, this.floor.b);
        rect(width/2, height/2, width/2, height/2);
        fill(200);
        rect(width/2, 0, width/2, height/2);

        for (let i = 0; i < this.objects.length; ++i) {
            let distance = this.objects[i].dist;

            if (distance != -1) {
                let curr = this.objects[i];

                let h = 16 * distance / sqrt(200*200 + 150*150);

                let y1 = height / 2 - h / 2;
                let y2 = height / 2 + h / 2;

                noStroke();
                rectMode(CENTER);
                let color = this.objects[i].color;
                fill(color.r, color.g, color.b);
                let visibleH = height/h;
                let offset = 0;
                if (curr.height != 1) {
                    visibleH *= curr.height;
                    offset = h * curr.height / asin(curr.height);
                }
                rect(width / 2 + curr.idx * 4, height / 2 + offset/4, 6, visibleH);
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
