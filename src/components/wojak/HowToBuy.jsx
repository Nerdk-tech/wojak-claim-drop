import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    num: '1',
    title: 'DOWNLOAD METAMASK',
    img: 'https://www.wojakcto.com/images/images2/metamask_wojak.png',
    text: 'Download MetaMask or your wallet of choice from the App Store or Play Store. Desktop users, download the Chrome extension.',
  },
  {
    num: '2',
    title: 'GET SOME ETH',
    img: 'https://www.wojakcto.com/images/images2/eth_wojak.png',
    text: 'Have ETH in your wallet to swap for $WOJAK. Buy on MetaMask, transfer from another wallet, or buy on Coinbase.',
  },
  {
    num: '3',
    title: 'GO TO UNISWAP',
    img: 'https://www.wojakcto.com/images/images2/uniswap_wojak.png',
    text: 'Connect to Uniswap, paste the $WOJAK token address, select WOJAK, and confirm. Sign the transaction in MetaMask.',
  },
  {
    num: '4',
    title: 'BUY $WOJAK',
    img: 'https://www.wojakcto.com/images/images2/buy_wojak.jpg',
    text: 'Swap ETH for $WOJAK. Zero taxes — no need for specific slippage. Track the price on DexScreener.',
  },
];

export default function HowToBuy() {
  return (
    <section className="py-20 md:py-32 bg-background relative">
      {/* Buddha float */}
      <motion.img
        src="https://www.wojakcto.com/images/budda.png"
        alt=""
        className="absolute right-0 top-0 w-40 md:w-64 opacity-10 pointer-events-none"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-7xl tracking-wider text-foreground text-center mb-16"
        >
          HOW TO BUY
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border-3 border-foreground/10 p-6 hover:border-foreground/30 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-foreground text-background font-heading text-3xl w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <div className="flex-1 min-w-0">
                  <img src={step.img} alt="" className="w-16 h-16 rounded-xl mb-3 object-cover" />
                  <h3 className="font-heading text-xl tracking-wider text-foreground mb-2">{step.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}