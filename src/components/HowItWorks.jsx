import React from 'react';
import { Wallet, Paintbrush, Barcode, ShieldCheck } from 'lucide-react';

const steps = [
  {
    title: 'Connect wallet',
    description: 'Link your favorite wallet to start minting and collecting.',
    icon: Wallet,
  },
  {
    title: 'Create or mint',
    description: 'Upload voxel art or pick from curated drops to mint instantly.',
    icon: Paintbrush,
  },
  {
    title: 'List & trade',
    description: 'Set your price, auction, or trade peer‑to‑peer securely.',
    icon: Barcode,
  },
  {
    title: 'Own on-chain',
    description: 'Each item is verified and secured with immutable ownership.',
    icon: ShieldCheck,
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">How it works</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">
          A smooth, secure flow designed for creators and collectors alike.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex rounded-lg bg-gray-900/90 p-3 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
