class Renderer {

    constructor() {
        this.objects = [];
    }

    render() {

        for (let i = 0; i < this.objects.length; ++i) {
            let distance = this.objects[i][0];

            if (distance != -1) {
                let h = 16 * height / distance;
                let y1 = height / 2 - h / 2;
                let y2 = height / 2 + h / 2;

                
                const sq = h * h;
                const wSq = 36;
                const b = map(sq, 0, wSq, 255, 0);
                noStroke();
                rectMode(CENTER);
                let color = this.objects[i][1];
                fill(color.r * h / 32, color.g * h / 32, color.b * h / 32);
                rect(width / 2 + i, height / 2, 6, h);
            }
        }

    }

    update(objects) {
        this.objects = objects;
    }

}