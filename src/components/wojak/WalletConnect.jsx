import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Wallet, LogOut, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

export default function WalletConnect({ walletAddress, setWalletAddress }) {
  const [copied, setCopied] = useState(false);

  const disconnectWallet = useCallback(() => {
    setWalletAddress(null);
    toast.info('Wallet Disconnected');
  }, [setWalletAddress]);

  const copyAddress = useCallback(() => {
    if (walletAddress) {
      navigator.clipboard.writeText(walletAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [walletAddress]);

  if (walletAddress) {
    return (
      <div className="flex items-center gap-2">
        <button
          onClick={copyAddress}
          className="flex items-center gap-2 bg-foreground/10 border-2 border-foreground/20 rounded-full px-4 py-2 font-mono text-sm hover:bg-foreground/15 transition-all"
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
          {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5 opacity-50" />}
        </button>
        <Button
          variant="ghost"
          size="icon"
          onClick={disconnectWallet}
          className="rounded-full hover:bg-destructive/10 hover:text-destructive"
        >
          <LogOut className="w-4 h-4" />
        </Button>
      </div>
    );
  }

  return (
    <a 
      href="/wojak.html" 
      className="inline-block no-underline select-none"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Button
        asChild={false}
        className="bg-foreground text-background hover:bg-foreground/90 font-heading text-base md:text-lg tracking-wider px-6 md:px-8 py-5 md:py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-background/20 pointer-events-none"
      >
        <div className="flex items-center justify-center">
          <Wallet className="w-5 h-5 mr-2" />
          Connect Wallet
        </div>
      </Button>
    </a>
  );
}