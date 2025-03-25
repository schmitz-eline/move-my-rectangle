import {Rectangle} from "./framework25/shapes/Rectangle";
import {randomFloat, randomInt} from "./framework25/helpers/random";
import {Hsl} from "./framework25/colors/Hsl";
import {settings} from "./settings";

const app = {
    init() {
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();
        this.rect = new Rectangle(
            this.ctx,
            {x: this.canvas.width/2 ,y: this.canvas.height/2},
            new Hsl(randomInt(0, 360), randomInt(0,100), randomInt(0, 100)),
            settings.rect.width,
            settings.rect.height,
            randomFloat(0, Math.PI*2)
        );
        this.update();
        this.rect.draw();
        this.addEventListeners();
        requestAnimationFrame(() => {
            this.update();
        });
    },
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },
    addEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });
        window.addEventListener('mousemove', (evt) => {
            const dy = evt.clientY - this.rect.position.y;
            const dx = evt.clientX - this.rect.position.x;
            this.rect.rotation = Math.atan2(dy, dx);
        });
    },
    update() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.rect.position.x += Math.cos(this.rect.rotation) * settings.step;
        this.rect.position.y += Math.sin(this.rect.rotation) * settings.step;

        // si le rectangle se trouve à droite du canvas, il revient à gauche
        if (this.rect.position.x >= this.canvas.width + settings.rect.width/2) {
            this.rect.position.x = -this.rect.width/2;
            this.rect.position.y = randomInt(this.rect.height/2, this.canvas.height - this.rect.height/2);
            // si le rectangle se trouve à gauche du canvas, il revient à droite
        } else if (this.rect.position.x <= -settings.rect.width/2) {
            this.rect.position.x = this.canvas.width + settings.rect.width/2;
            this.rect.position.y = randomInt(this.rect.height/2, this.canvas.height - this.rect.height/2);
        }

        // si le rectangle se trouve en bas du canvas, il revient en haut
        if (this.rect.position.y >= this.canvas.height + settings.rect.height/2) {
            this.rect.position.x = randomInt(this.rect.width/2, this.canvas.width - this.rect.width/2);
            this.rect.position.y = -this.rect.height/2;
            // si le rectangle se trouve en haut du canvas, il revient en bas
        } else if (this.rect.position.y <= -settings.rect.height/2) {
            this.rect.position.x = randomInt(this.rect.width/2, this.canvas.width - this.rect.width/2);
            this.rect.position.y = this.canvas.height + settings.rect.height/2;
        }

        this.rect.draw();
        requestAnimationFrame(() => {
            this.update();
        });
    }
}
app.init();