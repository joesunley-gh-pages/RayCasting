class Ray {
    constructor(pos, angle) {
        this.pos = pos;
        this.dir = createVector(sin(angle), cos(angle));
        this.scale = 25;
    }
    
    update(pos, angle) {
        if (pos != -1) {
            this.pos = pos;
        }
        if (angle != -1) {
            // this.dir = p5.fromAngle(angle);
        }
    }
    
    
    show () {
        stroke(255);
        line(this.pos.x, this.pos.y, this.pos.x + (this.dir.x * this.scale), this.pos.y + (this.dir.y * this.scale));
    }
    
    intersect(wall) {
        let x1 = wall.a.x;
        let y1 = wall.a.y;
        let x2 = wall.b.x;
        let y2 = wall.b.y;
        
        let x3 = this.pos.x;
        let y3 = this.pos.y;
        let x4 = this.pos.x + (this.dir.x * 100000);
        let y4 = this.pos.y + (this.dir.y * 100000);
        
        let den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        
        if (den === 0) {
            return;
        }
        
        let t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
        let u = ((x1 - x3) * (y1 - y2) - (y1 - y3) * (x1 - x2)) / den;
        
        if ((t >= 0 && t <= 1) && (u >= 0 && u <= 1)) {
            return createVector(x1 + t * (x2 - x1), y1 + t * (y2-y1));
        } else {
            return;
        }
    }
}