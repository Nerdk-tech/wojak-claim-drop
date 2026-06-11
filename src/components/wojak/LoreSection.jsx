import React from 'react';
import { motion } from 'framer-motion';

export default function LoreSection() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-7xl tracking-wider text-foreground mb-4">
            THE LORE
          </h2>
          <div className="w-24 h-1 bg-foreground mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://www.wojakcto.com/images/images2/Wojak%20Community%20strength%20(1).png"
              alt="Wojak Community"
              className="w-full rounded-3xl border-4 border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="font-body text-foreground/80 leading-relaxed">
              Originating around 2009–2010 on imageboards, <strong>Wojak</strong> derives 
              from the Polish word for "soldier" or "fighter". A simple, hand-drawn 
              bald man with a wistful expression — also known as "Feels Guy."
            </p>
            <p className="font-body text-foreground/80 leading-relaxed">
              The culture evolved from a simple reaction image into a vast universe of 
              characters representing human archetypes and social experiences. The iconic 
              "I know that feel, bro" meme became a digital support community.
            </p>
            <p className="font-heading text-xl md:text-2xl text-foreground tracking-wide mt-6">
              WOJAK IS THE SOUL OF THE INTERNET. WE ARE TRULY ALL WOJAK.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}