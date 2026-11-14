import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Beautiful, visible, and luminous moving aurora background.
 * Matches the user's uploaded reference: soft sky-blue glow in the center,
 * delicate pale lavender and blush accents, bright and clean white canvas,
 * with visible, fluid motion across the full page.
 */
export const BackgroundDecor: React.FC = () => {
  // Smooth spring mouse tracking for interactive glow
  const mouseX = useMotionValue(
    typeof window !== 'undefined' ? window.innerWidth / 2 : 500
  );
  const mouseY = useMotionValue(
    typeof window !== 'undefined' ? window.innerHeight / 2 : 400
  );

  const springX = useSpring(mouseX, { stiffness: 45, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden z-0 select-none bg-white"
    >
      {/* 1. Underlying animated wallpaper texture from user upload */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-85"
        style={{
          backgroundImage: `url('/images/bg-aurora.jpg')`,
          transform: 'translate3d(0, 0, 0)',
        }}
        animate={{
          scale: [1, 1.08, 1.03, 1],
          x: [-20, 20, -12, -20],
          y: [-15, 15, -8, -15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 2. Primary Luminous Sky-Blue / Cyan Center Glow (clearly visible) */}
      <motion.div
        className="absolute top-[42%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[70vw] min-w-[480px] max-w-[900px] h-[580px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(125, 211, 252, 0.65) 0%, rgba(186, 230, 253, 0.45) 45%, rgba(224, 242, 254, 0.2) 68%, transparent 82%)',
          filter: 'blur(60px)',
          transform: 'translate3d(0, 0, 0)',
        }}
        animate={{
          x: ['-50%', '-44%', '-55%', '-50%'],
          y: ['-50%', '-56%', '-43%', '-50%'],
          scale: [1, 1.2, 0.94, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 3. Floating Pastel Lavender / Lilac Aura (Upper & Left) */}
      <motion.div
        className="absolute top-[18%] left-[22%] w-[55vw] min-w-[400px] max-w-[760px] h-[520px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(216, 180, 254, 0.55) 0%, rgba(233, 213, 255, 0.35) 45%, rgba(243, 232, 255, 0.15) 70%, transparent 85%)',
          filter: 'blur(65px)',
          transform: 'translate3d(0, 0, 0)',
        }}
        animate={{
          x: [-65, 75, -50, -65],
          y: [-50, 60, -35, -50],
          scale: [0.94, 1.18, 0.98, 0.94],
        }}
        transition={{
          duration: 9.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 4. Floating Soft Blush Rose / Peach Aura (Upper-Right) */}
      <motion.div
        className="absolute top-[25%] right-[14%] w-[48vw] min-w-[360px] max-w-[680px] h-[480px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(251, 207, 232, 0.55) 0%, rgba(254, 226, 226, 0.3) 45%, rgba(255, 241, 242, 0.1) 70%, transparent 82%)',
          filter: 'blur(60px)',
          transform: 'translate3d(0, 0, 0)',
        }}
        animate={{
          x: [55, -65, 40, 55],
          y: [-40, 50, -30, -40],
          scale: [1.12, 0.9, 1.15, 1.12],
        }}
        transition={{
          duration: 8.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 5. Floating Soft Cyan & Ice-Blue Wave (Lower Screen across Projects/Contact) */}
      <motion.div
        className="absolute bottom-[10%] left-[28%] w-[60vw] min-w-[450px] max-w-[820px] h-[520px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(147, 197, 253, 0.5) 0%, rgba(186, 230, 253, 0.35) 45%, rgba(224, 242, 254, 0.15) 70%, transparent 82%)',
          filter: 'blur(65px)',
          transform: 'translate3d(0, 0, 0)',
        }}
        animate={{
          x: [60, -70, 50, 60],
          y: [40, -50, 30, 40],
          scale: [0.95, 1.18, 0.92, 0.95],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 6. Interactive Cursor Glow */}
      <motion.div
        className="absolute w-[380px] h-[380px] rounded-full pointer-events-none opacity-50"
        style={{
          left: springX,
          top: springY,
          background:
            'radial-gradient(circle, rgba(186, 230, 253, 0.55) 0%, rgba(216, 180, 254, 0.3) 45%, transparent 70%)',
          filter: 'blur(55px)',
          transform: 'translate3d(-50%, -50%, 0)',
        }}
      />

      {/* 7. Subtle feathering at outermost edge only so borders blend into pure white */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 65%, rgba(255, 255, 255, 0.25) 90%, rgba(255, 255, 255, 0.6) 100%)',
        }}
      />
    </div>
  );
};
