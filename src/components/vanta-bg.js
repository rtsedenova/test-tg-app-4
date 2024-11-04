'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
// import dynamic from 'next/dynamic';

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const initializeVanta = async () => {
      const VANTA = await import('vanta/dist/vanta.globe.min');
      if (!vantaEffect.current) {
        vantaEffect.current = VANTA.default({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x8762cd,
          color2: 0xfc6897,
          size: 0.8,
          backgroundColor: 0xffffff,
          THREE,
        });
      }
    };

    initializeVanta();

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: -1,
      }}
    />
  );
};

export default VantaBackground;
