import React from 'react';

/**
 * Subtle pastel ambient gradient background.
 * Composed of multiple large, softly blended radial gradients in
 * pale yellow, blush pink, lavender, and light blue over a pure white base.
 * Concentrated primarily behind the top navigation and hero section,
 * with low opacity and ultra-smooth transitions into pure white.
 */
export const BackgroundDecor: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden -z-10 select-none bg-white"
    >
      {/* 1. Pale Yellow Glow (top-left & behind navigation) */}
      <div
        className="absolute -top-[120px] left-[2%] w-[45vw] min-w-[360px] max-w-[700px] h-[520px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(254, 249, 195, 0.42) 0%, rgba(253, 230, 138, 0.22) 42%, rgba(255, 255, 255, 0) 72%)',
          filter: 'blur(80px)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* 2. Soft Blush Pink Glow (top-center behind the upper hero avatar & greeting) */}
      <div
        className="absolute -top-[80px] left-[26%] w-[48vw] min-w-[380px] max-w-[760px] h-[560px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(253, 232, 238, 0.45) 0%, rgba(254, 226, 226, 0.22) 45%, rgba(255, 255, 255, 0) 72%)',
          filter: 'blur(90px)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* 3. Soft Lavender Glow (top-right towards headline & navbar menu) */}
      <div
        className="absolute -top-[140px] right-[12%] w-[52vw] min-w-[400px] max-w-[820px] h-[620px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(243, 232, 255, 0.42) 0%, rgba(238, 242, 255, 0.24) 48%, rgba(255, 255, 255, 0) 74%)',
          filter: 'blur(95px)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* 4. Light Sky Blue Glow (top-right perimeter & contact button area) */}
      <div
        className="absolute -top-[60px] -right-[6%] w-[42vw] min-w-[340px] max-w-[680px] h-[520px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(224, 242, 254, 0.38) 0%, rgba(230, 245, 255, 0.18) 46%, rgba(255, 255, 255, 0) 72%)',
          filter: 'blur(85px)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* 5. Smooth Lower-Hero Transition (feathering gracefully into pure white) */}
      <div
        className="absolute top-[280px] left-1/2 -translate-x-1/2 w-[90vw] max-w-[1300px] h-[340px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(250, 245, 255, 0.25) 0%, rgba(254, 242, 242, 0.12) 40%, rgba(255, 255, 255, 0) 72%)',
          filter: 'blur(75px)',
          transform: 'translate3d(-50%, 0, 0)',
        }}
      />
    </div>
  );
};
