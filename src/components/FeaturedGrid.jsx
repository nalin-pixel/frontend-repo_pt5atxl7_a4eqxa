import React from 'react';
import { Diamonds, Crown, Star } from 'lucide-react';

const items = [
  {
    id: 'emerald-core',
    title: 'Emerald Core',
    price: '0.24 ETH',
    badge: 'Featured',
    icon: Diamonds,
    gradient: 'from-emerald-400 to-teal-500',
  },
  {
    id: 'nether-star',
    title: 'Nether Star Relic',
    price: '0.42 ETH',
    badge: 'Limited',
    icon: Star,
    gradient: 'from-fuchsia-400 to-purple-500',
  },
  {
    id: 'royal-crown',
    title: 'Royal Crown',
    price: '0.31 ETH',
    badge: 'New',
    icon: Crown,
    gradient: 'from-amber-400 to-orange-500',
  },
];

const FeaturedGrid = () => {
  return (
    <section id="featured" className="relative w-full bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Featured Drops</h2>
            <p className="mt-1 text-gray-600">Voxel-crafted pieces inspired by the world of blocks.</p>
          </div>
          <a href="#" className="text-sm font-semibold text-gray-900 hover:opacity-80">View all</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ id, title, price, badge, icon: Icon, gradient }) => (
            <div key={id} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className={`flex h-40 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white`}>
                <Icon className="h-10 w-10 drop-shadow-md" />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-gray-500">{badge}</p>
                  <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                </div>
                <p className="shrink-0 rounded-full bg-gray-900 px-3 py-1 text-sm font-medium text-white">{price}</p>
              </div>
              <button className="mt-4 w-full rounded-xl border border-gray-300 bg-white py-2 text-sm font-medium text-gray-900 transition hover:border-gray-400">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGrid;
