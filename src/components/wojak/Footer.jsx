import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-10 border-t-4 border-accent">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <img
            src="https://www.wojakcto.com/images/marquee_popout/wojak1.jpg"
            alt="Wojak"
            className="w-10 h-10 rounded-full border-2 border-background/30"
          />
          <span className="font-heading text-2xl tracking-wider">$WOJAK</span>
        </div>

        <div className="flex items-center justify-center gap-6 mb-8">
          <a href="https://t.me/wojakctoeth" target="_blank" rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity">
            <img src="https://www.wojakcto.com/images/images2/tg.png" alt="Telegram" className="w-10 h-10" />
          </a>
          <a href="https://x.com/wojakcto" target="_blank" rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity">
            <img src="https://www.wojakcto.com/images/images2/x.png" alt="X" className="w-10 h-10" />
          </a>
          <a href="https://dexscreener.com/ethereum/0x8De39B057CC6522230AB19C0205080a8663331Ef" target="_blank" rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity">
            <img src="https://www.wojakcto.com/images/images2/dex.png" alt="DexScreener" className="w-10 h-10" />
          </a>
        </div>

        <p className="font-body text-sm text-background/40">
          $WOJAK is a meme token with no intrinsic value or expectation of financial return. 
          There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only.
        </p>
        <p className="font-body text-xs text-background/30 mt-4">
          © {new Date().getFullYear()} $WOJAK Community. We are all Wojak.
        </p>
      </div>
    </footer>
  );
}