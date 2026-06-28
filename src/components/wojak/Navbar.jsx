import React from 'react';
import WalletConnect from './WalletConnect';

export default function Navbar({ walletAddress, setWalletAddress }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b-2 border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-18 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://www.wojakcto.com/images/marquee_popout/wojak1.jpg"
            alt="Wojak"
            className="w-9 h-9 rounded-full border-2 border-foreground"
          />
          <span className="font-heading text-xl md:text-2xl tracking-wider text-foreground">
            $WOJAK
          </span>
        </div>

        {/* Social links - hidden on mobile */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://t.me/wojakctoeth" target="_blank" rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity">
            <img src="https://www.wojakcto.com/images/images2/tg.png" alt="Telegram" className="w-8 h-8" />
          </a>
          <a href="https://x.com/wojakcto" target="_blank" rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity">
            <img src="https://www.wojakcto.com/images/images2/x.png" alt="X" className="w-8 h-8" />
          </a>
          <a href="https://dexscreener.com/ethereum/0x8De39B057CC6522230AB19C0205080a8663331Ef" target="_blank" rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity">
            <img src="https://www.wojakcto.com/images/images2/dex.png" alt="DexScreener" className="w-8 h-8" />
          </a>
        </div>

        {/* Wallet Connect */}
        <WalletConnect walletAddress={walletAddress} setWalletAddress={setWalletAddress} />
      </div>
    </nav>
  );
}