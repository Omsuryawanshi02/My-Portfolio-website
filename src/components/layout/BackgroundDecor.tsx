import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Minimal, light, and airy moving ambient background.
 * Keeps the page crisp, bright, and pure white with subtle, continuous moving
 * pastel aura lights (ethereal sky blue, pale lavender, delicate blush)
 * that match the uploaded reference without any dark or heavy tones.
 */
export const BackgroundDecor: React.FC = () => {
  // Smooth spring mouse tracking for subtle interactive highlight
  const mouseX = useMotionValue(
    typeof window !== 'undefined' ? window.innerWidth / 2 : 500
  );
  const mouseY = useMotionValue(
    typeof window !== 'undefined' ? window.innerHeight / 2 : 400
  );

  const springX = useSpring(mouseX, { stiffness: 40, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 22 });

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
      {/* 1. Ultra-subtle, airy breathing texture from uploaded reference */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('/images/bg-aurora.jpg')`,
          filter: 'blur(40px)',
          transform: 'translate3d(0, 0, 0)',
        }}
        animate={{
          scale: [1, 1.08, 1.02, 1],
          x: [-15, 18, -10, -15],
          y: [-12, 15, -8, -12],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 2. Primary Moving Ethereal Sky-Blue Aura (Center & Lower) */}
      <motion.div
        className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[65vw] min-w-[450px] max-w-[850px] h-[550px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(186, 230, 253, 0.42) 0%, rgba(224, 242, 254, 0.25) 45%, rgba(255, 255, 255, 0) 72%)',
          filter: 'blur(85px)',
          transform: 'translate3d(0, 0, 0)',
        }}
        animate={{
          x: ['-50%', '-44%', '-54%', '-50%'],
          y: ['-50%', '-56%', '-44%', '-50%'],
          scale: [1, 1.15, 0.94, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 3. Moving Pale Lavender Aura (Upper-Left) */}
      <motion.div
        className="absolute top-[15%] left-[20%] w-[50vw] min-w-[380px] max-w-[720px] h-[480px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(238, 242, 255, 0.48) 0%, rgba(243, 232, 255, 0.28) 42%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(95px)',
          transform: 'translate3d(0, 0, 0)',
        }}
        animate={{
          x: [-60, 65, -45, -60],
          y: [-45, 55, -30, -45],
          scale: [0.95, 1.12, 0.98, 0.95],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 4. Moving Soft Blush / Rose Tint (Upper-Right) */}
      <motion.div
        className="absolute top-[22%] right-[12%] w-[45vw] min-w-[340px] max-w-[650px] h-[440px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(253, 232, 238, 0.38) 0%, rgba(254, 242, 242, 0.2) 45%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(90px)',
          transform: 'translate3d(0, 0, 0)',
        }}
        animate={{
          x: [50, -55, 35, 50],
          y: [-35, 45, -25, -35],
          scale: [1.08, 0.92, 1.12, 1.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 5. Moving Ice-Blue Wave (Lower Screen / Spanning down to footer) */}
      <motion.div
        className="absolute bottom-[10%] left-[30%] w-[55vw] min-w-[420px] max-w-[780px] h-[460px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse, rgba(224, 242, 254, 0.45) 0%, rgba(230, 245, 255, 0.22) 48%, rgba(255, 255, 255, 0) 72%)',
          filter: 'blur(90px)',
          transform: 'translate3d(0, 0, 0)',
        }}
        animate={{
          x: [55, -60, 45, 55],
          y: [35, -45, 25, 35],
          scale: [0.96, 1.14, 0.94, 0.96],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 6. Subtle Interactive Mouse Highlight (very light & soft) */}
      <motion.div
        className="absolute w-[360px] h-[360px] rounded-full pointer-events-none opacity-40"
        style={{
          left: springX,
          top: springY,
          background:
            'radial-gradient(circle, rgba(224, 242, 254, 0.35) 0%, rgba(243, 232, 255, 0.15) 50%, transparent 70%)',
          filter: 'blur(60px)',
          transform: 'translate3d(-50%, -50%, 0)',
        }}
      />

      {/* 7. Pure White Perimeter Feathering for maximum clarity & cleanliness */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(255, 255, 255, 0.5) 80%, rgba(255, 255, 255, 0.92) 100%)',
        }}
      />
    </div>
  );
};
