import gsap from "gsap";
import { easeInOut } from "motion";

interface Star {
    x: number;
    y: number;
    z: number;
    color: string;
    draw: () => void;
    reset: () => void;
    update: () => void;
}

interface StarfieldOptions {
    numberOfStars?: number;
    focalLength?: number;
    colorPalette?: string[];
    enableZoomPulse?: boolean;
    scrollAcceleration?: boolean;
    speed?: number;
    background?: string | CanvasGradient | CanvasPattern;
}

export function startStarfield(canvas: HTMLCanvasElement, options: StarfieldOptions = {}) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = canvas.width = window.innerWidth;
    const centerY = canvas.height = window.innerHeight;
    const halfX = centerX / 2;
    const halfY = centerY / 2;

    let speed = options.speed ?? 4;
    let focalLength = options.focalLength ?? 500;
    const numStars = options.numberOfStars ?? 400;
    const colors = options.colorPalette ?? ['#fff'];
    const enableZoomPulse = options.enableZoomPulse ?? true;
    const enableScrollAcceleration = options.scrollAcceleration ?? true;
    const backgroundColor = options.background ?? "black";

    const stars: Star[] = [];

    function getRandomColor(): string {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    class StarBehave implements Star {
        x: number;
        y: number;
        z: number;
        color: string;

        // radius: number;
        // alpha: number;

        constructor() {
            this.x = (Math.random() - 0.5) * canvas.width;
            this.y = Math.random() * canvas.height;
            this.z = Math.random() * canvas.width;
            this.color = getRandomColor();
            // this.radius = Math.random() * 1.5 + 0.5;
            // this.alpha = Math.random();
            // this.twinkle();
        }

        reset(): void {
            this.x = (Math.random() - 0.5) * canvas.width;
            this.y = (Math.random() - 0.5) * canvas.height;
            this.z = Math.random() * canvas.width;
            this.color = getRandomColor();
        }

        update(): void {
            this.z -= speed;
            if (this.z <= 0) {
                this.reset();
            }
        }

        // twinkle(): void {
        //     gsap.to(this, {
        //         alpha: Math.random(),
        //         duration: Math.random() * 2 + 1,
        //         ease: easeInOut,
        //         onComplete: () => this.twinkle()
        //     })
        // }

        draw(): void {
            const scale = focalLength / this.z;
            const screenX = this.x * scale + halfX;
            const screenY = this.y * scale + halfY;
            const radius = scale * 1.2;

            const alpha = Math.min(1, scale / 5)

            if (ctx) {
                ctx.beginPath();
                ctx.globalAlpha = alpha;
                ctx.arc(screenX, screenY, radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

    }

    for (let i = 0; i < numStars; i++) {
        stars.push(new StarBehave());
    }

    gsap.to({ val: focalLength }, {
        val: 650, duration: 4, yoyo: true, repeat: -1, ease: 'sine.inOut', onUpdate() {
            focalLength = this.targets()[0].val;
        }
    })

    // Debounce function to prevent rapid wheel events
    function debounce(func: Function, wait: number) {
        let timeout: ReturnType<typeof setTimeout>;
        return function executedFunction(...args: any[]) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    const handleWheel = debounce((e: WheelEvent) => {
        const delta = e.deltaY * 0.01;
        const newSpeed = Math.max(0.5, Math.min(50, speed + delta));
        gsap.to({val: speed}, {val: newSpeed, duration: 0.3, ease: "power2.out", onUpdate () {
            speed = this.targets()[0].val;
        }})

        const acceleration = -0.098;
        const currentSpeed = speed;
        const targetSpeed = options.speed ?? 10;
        const time = (targetSpeed - currentSpeed) / acceleration;
        
        gsap.to({val: currentSpeed}, {
            val: targetSpeed,
            duration: time,
            delay: 1,
            ease: "linear",
            onUpdate () {
                speed = this.targets()[0].val;
            }
        });
    }, 100); // Debounce delay of 100ms

    window.addEventListener("wheel", handleWheel);

    
    function animate(): void {
        if (ctx) {
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            stars.forEach(star => { star.update(); star.draw() });
            requestAnimationFrame(animate);
        }
    }
    
    animate();
    
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // return () => {
    //     window.removeEventListener("wheel", handleWheel);
    // };
}
