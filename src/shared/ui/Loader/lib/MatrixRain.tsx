import { useEffect, useRef } from 'react';

export const MatrixRain = ({
  color = '#8cebdc',
  fontSize = 12,
  speed = 70,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      const katakana =
        'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890';
      const alphabet = katakana.split('');
      const columns = canvas.width / fontSize;
      const rainDrops = Array.from({ length: columns }).fill(1);
      const draw = () => {
        if (ctx) {
          ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          ctx.fillStyle = color;
          ctx.font = `${fontSize}px monospace`;

          for (let i = 0; i < rainDrops.length; i++) {
            const text = alphabet[Math.floor(Math.random() * alphabet.length)];
            ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (
              rainDrops[i] * fontSize > canvas.height &&
              Math.random() > 0.975
            ) {
              rainDrops[i] = 0;
            }
            rainDrops[i]++;
          }
        }
      };

      const interval = setInterval(draw, speed);

      const handleResize = () => {
        canvas.width = canvas.parentElement.offsetWidth ?? 0;
        canvas.height = canvas.parentElement.offsetHeight ?? 0;
      };
      window.addEventListener('resize', handleResize);
      return () => {
        clearInterval(interval);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [color, fontSize, speed]);

  return (
    <canvas
      ref={canvasRef}
      className='block overflow-hidden relative'
    />
  );
};
