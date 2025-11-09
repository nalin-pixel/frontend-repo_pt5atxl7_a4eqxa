import React from 'react';
import { Rocket, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 text-white">
            <Rocket className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">BlockCraft</p>
            <p className="text-xs text-gray-500">Minecraft NFT Marketplace</p>
          </div>
        </div>

        <p className="text-xs text-gray-500">© {new Date().getFullYear()} BlockCraft. All rights reserved.</p>

        <div className="flex items-center gap-3">
          <a href="#" className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
            <Twitter className="h-4 w-4" />
            Twitter
          </a>
          <a href="#" className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
