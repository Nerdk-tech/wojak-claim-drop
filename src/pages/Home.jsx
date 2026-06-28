import React, { useState } from 'react';
import Navbar from '../components/wojak/Navbar';
import HeroSection from '../components/wojak/HeroSection';
import WojakMarquee from '../components/wojak/WojakMarquee';
import AirdropClaimCard from '../components/wojak/AirdropClaimCard';
import HowToBuy from '../components/wojak/HowToBuy';
import TokenomicsSection from '../components/wojak/TokenomicsSection';
import LoreSection from '../components/wojak/LoreSection';
import Footer from '../components/wojak/Footer';
import LiveClaimPopup from '../components/wojak/LiveClaimPopup';

export default function Home() {
  const [walletAddress, setWalletAddress] = useState(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar walletAddress={walletAddress} setWalletAddress={setWalletAddress} />
      <LiveClaimPopup />

      {/* Hero */}
      <div className="pt-16">
        <HeroSection />
      </div>

      {/* Marquee */}
      <WojakMarquee />

      {/* Airdrop Claim Section */}
      <section className="py-16 md:py-24 bg-background relative" id="claim">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="relative z-10 px-4">
          <AirdropClaimCard
            walletAddress={walletAddress}
            onConnectClick={() => {
              if (typeof window.ethereum !== 'undefined') {
                window.ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
                  if (accounts?.[0]) setWalletAddress(accounts[0]);
                });
              } else {
                window.open('https://metamask.io/', '_blank');
              }
            }}
          />
        </div>
      </section>

      {/* Marquee reverse */}
      <div className="rotate-0">
        <WojakMarquee />
      </div>

      {/* How to Buy */}
      <HowToBuy />

      {/* Tokenomics */}
      <TokenomicsSection />

      {/* Lore */}
      <LoreSection />

      {/* Final Marquee */}
      <WojakMarquee />

      {/* Footer */}
      <Footer />
    </div>
  );
}