class Spot {
    constructor (x, y) {
        this.pos = createVector(x, y);
        this.step = 0.1;
        this.rays = [];
        
        for (let i = 0; i < 360; i += this.step) {
            this.rays.push(new Ray(this.pos, radians(i)));
        }
    }
    
    update(x, y) {
        this.pos = createVector(x, y);
        
        this.rays = [];
        
        for (let i = 0; i < 360; i += this.step) {
            this.rays.push(new Ray(this.pos, radians(i)));
        }
    }
    
    testIntersect(walls) {     
        for (const ray of this.rays) {
            let nearest, disst = Infinity;
            
            for (const wall of walls) {
                let s = ray.intersect(wall);
                
                
                if (s) {
                    let sDist = dist(ray.pos.x, ray.pos.y, s.x, s.y);
                    if (sDist < disst) {
                        disst = sDist;
                        nearest = s;
                    }
                }
            }
            
            stroke(255, 50);
            if (nearest) {
                line (ray.pos.x, ray.pos.y, nearest.x, nearest.y);
            }
        }
    }
}