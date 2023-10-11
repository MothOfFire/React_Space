export default function initLoginBg() {
    const windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
    const windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    const canvas = document.getElementById('canvas') as HTMLCanvasElement,
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D,
    w = canvas.width = windowWidth,
    h = canvas.height = windowHeight,

    hue = 217,
    starts:IntStart[] = [],
    maxStarts = 500; //星星的数量，不建议设置太大会卡
    let count = 0;


    const canvas2 = document.getElementById('canvas') as HTMLCanvasElement,
    ctx2 = canvas2.getContext('2d') as CanvasRenderingContext2D;
    canvas2.width = 100;
    canvas2.height = 100;
    const half = canvas2.width / 2,
    gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, '#CCC');
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
    gradient2.addColorStop(1, 'transparent');

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

    function random(min:number, max = 0) {
        if(arguments.length < 2) {
            max = min;
            min = 0;
        }
        if(min > max) {
            const temp = max;
            max = min;
            min = temp;
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function maxOrbit(x:number, y:number) {
        const max = Math.max(x, y),
        diameter = Math.round(Math.sqrt(max * max + max * max));
        return diameter / 2;
        //小行星移动的范围，值越大范围越小
    }

    interface IntStart {
        orbitRadius: number;
        radius: number;
        orbitX: number;
        orbatY: number;
        timePassed: number;
        speed: number;
        alpha: number;
        draw: () => void;
    }
    const Start = function (this: IntStart) {
        this.orbitRadius = random(maxOrbit(w, h));
        this.radius = random(60, this.orbitRadius) / 18;
        //星星大小
        this.orbitX = w / 2;
        this.orbatY = h / 2;
        this.timePassed = random(0, maxStarts);
        //星星的移动速度
        this.speed = random(this.orbitRadius) / 500000;
        this.alpha = random(2, 10) / 10;
        count++;
        starts[count] = this;
    }
    Start.prototype.draw = function() {
        const x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
        y = Math.cos(this.timePassed) * this.orbitRadius + this.orbatY,
        twinkle = random(10);
        if(twinkle === 1 && this.alpha > 0){
            this.alpha -= 0.05;
        } else if(twinkle === 2 && this.alpha < 1){
            this.alpha += 0.05;
        }
        ctx.globalAlpha = this.alpha;
        ctx.clearRect(x - this.radius, y - this.radius, this.radius * 2, this.radius * 2);
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, x, y);
        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
        requestAnimationFrame(this.draw.bind(this));
    }
}