import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay to improve text contrast, doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center sm:py-28 lg:py-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 backdrop-blur">
          <Sparkles className="h-4 w-4 text-fuchsia-600" />
          <span className="text-sm font-medium text-gray-700">Modern • Vibrant • Futuristic</span>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          Minecraft NFT Marketplace
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-700 sm:text-xl">
          Trade voxel-inspired digital art and collectibles. Reflective neon cubes, on-chain ownership, and seamless minting.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#featured"
            className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-white shadow-lg shadow-gray-900/10 transition hover:translate-y-[-2px] hover:bg-gray-800"
          >
            <Rocket className="h-5 w-5" />
            Explore Drops
            <ArrowRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-gray-900 transition hover:border-gray-400"
          >
            <Shield className="h-5 w-5 text-emerald-600" />
            Secure by Design
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
