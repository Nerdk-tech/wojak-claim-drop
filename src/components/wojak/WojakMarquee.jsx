import React from 'react';

const WOJAK_FACES = [
  'https://www.wojakcto.com/images/marquee_popout/wojak1.jpg',
  'https://www.wojakcto.com/images/marquee_popout/wojak2.jpg',
  'https://www.wojakcto.com/images/marquee_popout/wojak3.jpg',
  'https://www.wojakcto.com/images/marquee_popout/wojak4.jpg',
  'https://www.wojakcto.com/images/marquee_popout/wojak5.jpg',
  'https://www.wojakcto.com/images/marquee_popout/wojak6.jpg',
  'https://www.wojakcto.com/images/marquee_popout/wojak7.jpg',
  'https://www.wojakcto.com/images/marquee_popout/wojak8.jpg',
];

export default function WojakMarquee() {
  return (
    <div className="w-full overflow-hidden bg-foreground py-2 border-y-4 border-foreground">
      <div className="flex animate-marquee">
        {[...WOJAK_FACES, ...WOJAK_FACES, ...WOJAK_FACES].map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Wojak"
            className="h-20 w-20 md:h-28 md:w-28 object-cover rounded-lg mx-2 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
          />
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
}