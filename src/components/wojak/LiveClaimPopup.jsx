import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const FAKE_ADDRESSES = [
  '0x742d...F4a1', '0x1Cb3...9E2d', '0xA8f2...3B7c', '0x9De1...6F8a',
  '0x3Fa7...C2e5', '0xB1d4...8A3f', '0x6Ec9...D1b2', '0x4Ab8...7E6c',
  '0xF2c1...A5d9', '0x8Da3...4B1e', '0x5Ef6...2C8a', '0xC7b2...9D4f',
  '0x2Ac5...E3b7', '0xD9f8...1A6c', '0x7Ba4...F5e2', '0xE1c6...8D3a',
  '0x0Fd9...B7c1', '0x3Ae2...6F4d', '0xC8b5...A1e8', '0x6Df1...3C9b',
];

const AMOUNTS = [
  '420,000', '690,000', '1,337,000', '500,000', '250,000',
  '888,000', '777,000', '999,000', '333,333', '666,666',
  '100,000', '2,000,000', '1,500,000', '420,690', '1,000,000',
];

export default function LiveClaimPopup() {
  const [popups, setPopups] = useState([]);

  const addPopup = useCallback(() => {
    const address = FAKE_ADDRESSES[Math.floor(Math.random() * FAKE_ADDRESSES.length)];
    const amount = AMOUNTS[Math.floor(Math.random() * AMOUNTS.length)];
    const id = Date.now() + Math.random();
    
    setPopups(prev => {
      const newPopups = [...prev, { id, address, amount }];
      return newPopups.slice(-3);
    });

    setTimeout(() => {
      setPopups(prev => prev.filter(p => p.id !== id));
    }, 4000);
  }, []);

  useEffect(() => {
    const firstTimeout = setTimeout(addPopup, 2000);
    const interval = setInterval(addPopup, 5000 + Math.random() * 4000);
    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, [addPopup]);

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 pointer-events-none max-w-[340px]">
      <AnimatePresence>
        {popups.map((popup) => (
          <motion.div
            key={popup.id}
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="pointer-events-auto"
          >
            <div className="bg-foreground text-background rounded-xl px-4 py-3 shadow-2xl border-2 border-background/20 flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <img
                  src="https://www.wojakcto.com/images/marquee_popout/wojak1.jpg"
                  alt="Wojak"
                  className="w-10 h-10 rounded-full border-2 border-accent"
                />
                <CheckCircle2 className="w-4 h-4 text-green-400 absolute -bottom-1 -right-1" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono truncate opacity-70">{popup.address}</p>
                <p className="text-sm font-heading tracking-wide">
                  Claimed <span className="text-accent">{popup.amount}</span> $WOJAK
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}