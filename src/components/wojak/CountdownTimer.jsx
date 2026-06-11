import React, { useState, useEffect } from 'react';

const TARGET_DATE = new Date();
TARGET_DATE.setDate(TARGET_DATE.getDate() + 3);
TARGET_DATE.setHours(23, 59, 59, 0);

function getTimeLeft() {
  const now = new Date();
  const diff = TARGET_DATE - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimeBlock({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-foreground text-background font-heading text-3xl md:text-5xl w-16 h-16 md:w-24 md:h-24 rounded-xl flex items-center justify-center shadow-lg border-2 border-background/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
        <span className="relative z-10">{String(value).padStart(2, '0')}</span>
      </div>
      <span className="text-xs md:text-sm font-body font-semibold uppercase tracking-widest mt-2 text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-3 md:gap-5">
      <TimeBlock value={time.days} label="Days" />
      <span className="text-3xl md:text-5xl font-heading text-foreground mt-[-1.5rem]">:</span>
      <TimeBlock value={time.hours} label="Hours" />
      <span className="text-3xl md:text-5xl font-heading text-foreground mt-[-1.5rem]">:</span>
      <TimeBlock value={time.minutes} label="Mins" />
      <span className="text-3xl md:text-5xl font-heading text-foreground mt-[-1.5rem]">:</span>
      <TimeBlock value={time.seconds} label="Secs" />
    </div>
  );
}