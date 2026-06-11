import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Floating ETH diamonds */}
      <motion.img
        src="https://www.wojakcto.com/images/images2/eth_wojak.png"
        alt=""
        className="absolute left-4 md:left-16 top-1/4 w-20 md:w-36 opacity-60"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.img
        src="https://www.wojakcto.com/images/images2/eth_wojak.png"
        alt=""
        className="absolute right-4 md:right-16 top-1/3 w-16 md:w-32 opacity-60"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Wojak tree background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="https://www.wojakcto.com/images/images2/wojaktree.jpg"
          alt=""
          className="w-full h-full object-contain opacity-15 md:opacity-20 max-w-4xl"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <h1 className="font-heading text-[5rem] md:text-[10rem] lg:text-[14rem] leading-[0.85] tracking-tight text-foreground">
            $WOJAK
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 md:mt-6"
        >
          <div className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-2.5 rounded-full font-heading text-lg md:text-2xl tracking-widest">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            AIRDROP IS LIVE
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-muted-foreground font-body text-base md:text-lg max-w-lg mx-auto leading-relaxed"
        >
          The soul of the internet. The heart of meme culture. 
          Connect your wallet and claim your share of the Wojak revolution.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-foreground/30 mx-auto flex items-start justify-center pt-2"
          >
            <div className="w-1.5 h-3 rounded-full bg-foreground/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}