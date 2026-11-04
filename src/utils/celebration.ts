import confetti from 'canvas-confetti';

export function triggerConfettiBurst() {
  // Center burst
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#F7DE8E', '#E5C158', '#C79524', '#FCDFD9', '#FFFDEB', '#E11D48'],
  });
}

export function triggerFireworks() {
  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval: any = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    // Left firework
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: ['#F7DE8E', '#E5C158', '#FFB703', '#FB8500', '#F72585'],
    });
    // Right firework
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: ['#F7DE8E', '#E5C158', '#4CC9F0', '#7209B7', '#F72585'],
    });
  }, 250);
}

// Gentle Web Audio API synthesizer for celebratory chimes without external audio files
export function playChimeSound() {
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    // Notes for "Happy Birthday" opening motif (G4, G4, A4, G4, C5, B4)
    const notes = [
      { freq: 392.0, duration: 0.22, delay: 0 },
      { freq: 392.0, duration: 0.22, delay: 0.25 },
      { freq: 440.0, duration: 0.45, delay: 0.5 },
      { freq: 392.0, duration: 0.45, delay: 1.0 },
      { freq: 523.25, duration: 0.45, delay: 1.5 },
      { freq: 493.88, duration: 0.75, delay: 2.0 },
    ];

    notes.forEach((note) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.freq, ctx.currentTime + note.delay);

      gain.gain.setValueAtTime(0, ctx.currentTime + note.delay);
      gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + note.delay + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + note.delay + note.duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + note.delay);
      osc.stop(ctx.currentTime + note.delay + note.duration);
    });
  } catch (e) {
    // Ignore audio permission or context restrictions
  }
}
