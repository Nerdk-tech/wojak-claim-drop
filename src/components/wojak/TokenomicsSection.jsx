import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Flame, FileCheck, Shield } from 'lucide-react';
import { toast } from 'sonner';

const CA = '0x8De39B057CC6522230AB19C0205080a8663331Ef';

export default function TokenomicsSection() {
  const [copied, setCopied] = useState(false);

  const copyCA = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    toast.success('Contract Address Copied!');
    setTimeout(() => setCopied(false), 2000);
  };

  const features = [
    { icon: Flame, label: 'LP Burned', href: 'https://etherscan.io/tx/0x99707e036d0b2c3f02f4e20ca8523186b89da7812e4785e7ab932ae19c3e8bd8' },
    { icon: FileCheck, label: 'Contract Renounced', href: 'https://etherscan.io/tx/0xc59aa600206ae56683aab6f728cb462c2dc659050b5349d302fda03fa680bfc1' },
    { icon: Shield, label: '0% Tax', href: null },
  ];

  return (
    <section className="py-20 md:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--background)) 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Wojak image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          src="https://www.wojakcto.com/images/images2/buy_wojak.jpg"
          alt="Wojak"
          className="w-32 h-32 md:w-44 md:h-44 rounded-full mx-auto mb-8 border-4 border-background/20 shadow-2xl"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-6xl tracking-wider mb-4"
        >
          TOKENOMICS
        </motion.h2>

        <p className="font-body text-background/60 text-lg mb-10">
          ETH Network &bull; Supply: 420,690,000,000,000
        </p>

        {/* CA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-background/10 border-2 border-background/20 rounded-2xl p-5 mb-10"
        >
          <p className="text-sm text-background/50 font-body mb-2 uppercase tracking-widest">Contract Address</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <code className="font-mono text-sm md:text-base break-all">{CA}</code>
            <button
              onClick={copyCA}
              className="bg-background/20 hover:bg-background/30 p-2 rounded-lg transition-colors flex-shrink-0"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </motion.div>

        {/* Feature badges */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {features.map((feat, i) => {
            const Tag = feat.href ? 'a' : 'div';
            const props = feat.href ? { href: feat.href, target: '_blank', rel: 'noopener noreferrer' } : {};
            return (
              <motion.div
                key={feat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (i + 1) }}
              >
                <Tag
                  {...props}
                  className="inline-flex items-center gap-2 bg-background/10 border border-background/20 rounded-full px-5 py-2.5 font-body font-semibold text-sm hover:bg-background/20 transition-colors cursor-pointer"
                >
                  <feat.icon className="w-4 h-4" />
                  {feat.label}
                </Tag>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}