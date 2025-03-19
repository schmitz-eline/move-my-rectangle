import {Rectangle} from "./framework25/shapes/Rectangle";
import {Hsl} from "./framework25/colors/Hsl";
import {settings} from "./settings";
import {randomFloat, randomInt} from "./framework25/helpers/random";

const app = {
    init() {
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
        console.log(this.ctx);
        this.resizeCanvas();
        this.rect = new Rectangle(
            this.ctx,
            {x: this.canvas.width/2, y: this.canvas.height/2},
            new Hsl(randomInt(0, 360), randomInt(50, 100), randomInt(50, 100)),
            settings.rect.width,
            settings.rect.height,
            randomFloat(0, Math.PI*2)
        );
        this.update();
        this.rect.draw();
        this.addEventListeners();
    },
    update() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.rect.position.x >= this.canvas.width + this.rect.width/2) {
            this.rect.color = new Hsl(randomInt(0, 360), randomInt(50, 100), randomInt(50, 100));
            this.rect.position.x = -this.rect.width/2;
            this.rect.position.y = randomInt(this.rect.height/2, this.canvas.height-this.rect.height/2);
        }
        this.rect.position.x += Math.cos(this.rect.rotation) * settings.rect.step;
        this.rect.position.y += Math.sin(this.rect.rotation) * settings.rect.step;

        this.rect.draw();

        requestAnimationFrame(this.update.bind(this));
    },
    addEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });
        window.addEventListener('mousemove', (evt) => {
            const dx = evt.clientX - this.rect.position.x;
            const dy = evt.clientY - this.rect.position.y;
            this.rect.rotation = Math.atan2(dy, dx);
        });
    },
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },
}
app.init();