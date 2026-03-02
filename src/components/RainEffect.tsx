import { useEffect, useRef } from 'react';

interface RainDrop {
  x: number;
  y: number;
  speed: number;
  length: number;
  opacity: number;
  isFuchsia: boolean;
  isAmber: boolean;
}

export default function RainEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const drops: RainDrop[] = Array.from({ length: 260 }, () => {
      const rand = Math.random();
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speed: 5 + Math.random() * 9,
        length: 25 + Math.random() * 80,
        opacity: 0.04 + Math.random() * 0.26,
        isAmber: rand < 0.08,
        isFuchsia: rand >= 0.08 && rand < 0.20,
      };
    });

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const drop of drops) {
        const color = drop.isAmber ? '255,140,0' : drop.isFuchsia ? '255,0,200' : '0,255,255';
        const grad = ctx.createLinearGradient(
          drop.x, drop.y,
          drop.x - drop.speed * 0.15, drop.y + drop.length
        );
        grad.addColorStop(0, `rgba(${color},0)`);
        grad.addColorStop(0.35, `rgba(${color},${drop.opacity})`);
        grad.addColorStop(1, `rgba(${color},0)`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x - drop.speed * 0.15, drop.y + drop.length);
        ctx.stroke();

        drop.y += drop.speed;
        drop.x -= drop.speed * 0.06;

        if (drop.y > canvas.height + drop.length) {
          drop.y = -drop.length;
          drop.x = Math.random() * (canvas.width + 150);
        }
      }
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 2,
        mixBlendMode: 'screen',
        opacity: 0.55,
      }}
    />
  );
}
