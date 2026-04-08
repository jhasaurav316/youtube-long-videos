import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
  AbsoluteFill,
  Easing,
  staticFile,
} from "remotion";
import { Audio } from "@remotion/media";
import { loadFont } from "@remotion/google-fonts/Baloo2";
import { loadFont as loadFontPoppins } from "@remotion/google-fonts/Poppins";
import React from "react";

const { fontFamily: funFont } = loadFont("normal", {
  weights: ["400"],
  subsets: ["latin"],
});

const { fontFamily: cleanFont } = loadFontPoppins("normal", {
  weights: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

export type AlphabetShortsProps = {
  title: string;
  videoId: string;
  bgGradient: [string, string];
  accentColor: string;
  letters: {
    letter: string;
    word: string;
    emoji: string;
    bgColor: string;
  }[];
  letterDuration?: number;
  introDuration?: number;
  outroDuration?: number;
};

// ---------------------------------------------------------------------------
// Sparkle / Particle helper
// ---------------------------------------------------------------------------
const Sparkle: React.FC<{
  x: number;
  y: number;
  size: number;
  delay: number;
  color: string;
  frame: number;
}> = ({ x, y, size, delay, color, frame }) => {
  const cycle = (frame + delay * 10) % 60;
  const opacity = interpolate(cycle, [0, 15, 30, 45, 60], [0, 1, 0.6, 1, 0]);
  const scale = interpolate(cycle, [0, 30, 60], [0.5, 1.2, 0.5]);
  const drift = Math.sin((frame + delay * 17) / 20) * 12;

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y + drift,
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity,
        transform: `scale(${scale})`,
        pointerEvents: "none",
      }}
    />
  );
};

// Floating mini-emoji helper
const FloatingEmoji: React.FC<{
  emoji: string;
  x: number;
  y: number;
  size: number;
  frame: number;
  delay: number;
}> = ({ emoji, x, y, size, frame, delay }) => {
  const floatY = Math.sin((frame + delay * 13) / 25) * 18;
  const floatX = Math.cos((frame + delay * 7) / 30) * 10;
  const rotation = Math.sin((frame + delay * 11) / 35) * 15;
  const opacity = interpolate(
    (frame + delay * 5) % 90,
    [0, 20, 70, 90],
    [0.4, 0.9, 0.9, 0.4]
  );

  return (
    <div
      style={{
        position: "absolute",
        left: x + floatX,
        top: y + floatY,
        fontSize: size,
        transform: `rotate(${rotation}deg)`,
        opacity,
        pointerEvents: "none",
      }}
    >
      {emoji}
    </div>
  );
};

// Generate deterministic sparkle positions
function generateSparkles(count: number, seed: number) {
  const sparkles: { x: number; y: number; size: number; delay: number }[] = [];
  for (let i = 0; i < count; i++) {
    const hash = ((seed * 31 + i * 97) % 1000) / 1000;
    const hash2 = ((seed * 53 + i * 71) % 1000) / 1000;
    sparkles.push({
      x: hash * 1080,
      y: hash2 * 1920,
      size: 8 + (hash * 20),
      delay: i * 3,
    });
  }
  return sparkles;
}

// Generate positions for side decorations
function generateSideEmojis(count: number, seed: number) {
  const positions: { x: number; y: number; size: number; delay: number }[] = [];
  for (let i = 0; i < count; i++) {
    const side = i % 2 === 0 ? 0 : 1; // left or right
    const hash = ((seed * 41 + i * 89) % 1000) / 1000;
    positions.push({
      x: side === 0 ? 30 + hash * 120 : 880 + hash * 120,
      y: 300 + (i * 250) + hash * 100,
      size: 100 + hash * 30,
      delay: i * 5,
    });
  }
  return positions;
}

// ---------------------------------------------------------------------------
// Intro Scene
// ---------------------------------------------------------------------------
const IntroScene: React.FC<{
  title: string;
  bgGradient: [string, string];
  accentColor: string;
}> = ({ title, bgGradient, accentColor }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({ frame, fps, config: { damping: 8, mass: 0.8 } });
  const titleOpacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateRight: "clamp",
  });

  const subtitleProgress = spring({
    frame: Math.max(0, frame - 20),
    fps,
    config: { damping: 10 },
  });

  // Bouncing ABC letters
  const abcLetters = ["A", "B", "C"];
  const sparkles = generateSparkles(20, 42);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(160deg, ${bgGradient[0]}, ${bgGradient[1]})`,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Sparkles */}
      {sparkles.map((s, i) => (
        <Sparkle
          key={i}
          x={s.x}
          y={s.y}
          size={s.size}
          delay={s.delay}
          color={i % 2 === 0 ? "#FFD700" : "#FF69B4"}
          frame={frame}
        />
      ))}

      {/* Bouncing ABC letters in background */}
      {abcLetters.map((letter, i) => {
        const letterSpring = spring({
          frame: Math.max(0, frame - i * 8),
          fps,
          config: { damping: 5, mass: 1.2 },
        });
        const floatY = Math.sin((frame + i * 30) / 15) * 30;
        const floatX = Math.cos((frame + i * 20) / 20) * 40;
        const rotation = Math.sin((frame + i * 25) / 18) * 20;

        return (
          <div
            key={letter}
            style={{
              position: "absolute",
              left: 150 + i * 300 + floatX,
              top: 300 + floatY,
              fontSize: 250,
              fontWeight: 900,
              fontFamily: funFont,
              color: "rgba(255,255,255,0.3)",
              transform: `scale(${letterSpring}) rotate(${rotation}deg)`,
              textShadow: `0 0 60px rgba(255,255,255,0.4), 0 0 120px ${accentColor}33`,
            }}
          >
            {letter}
          </div>
        );
      })}

      {/* Title */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: `scale(${titleScale})`,
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontSize: 140,
            fontWeight: 900,
            fontFamily: funFont,
            color: "#FFFFFF",
            textAlign: "center",
            textShadow: `8px 8px 0 ${accentColor}, 0 0 60px rgba(255,255,255,0.6), 0 0 120px ${accentColor}44`,
            lineHeight: 1.2,
            padding: "0 40px",
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            marginTop: 50,
            fontSize: 70,
            fontWeight: 700,
            fontFamily: cleanFont,
            color: "#FFD700",
            textShadow: "3px 3px 0 rgba(0,0,0,0.4), 0 0 30px rgba(255,215,0,0.6), 0 0 60px rgba(255,215,0,0.3)",
            transform: `scale(${subtitleProgress})`,
            opacity: subtitleProgress,
          }}
        >
          Let's Learn!
        </div>
      </div>

      {/* Confetti dots */}
      {Array.from({ length: 30 }).map((_, i) => {
        const cx = ((i * 137 + 50) % 1080);
        const cy = ((i * 193 + 100) % 1920);
        const confettiOpacity = interpolate(
          (frame + i * 7) % 50,
          [0, 15, 35, 50],
          [0, 1, 1, 0]
        );
        const colors = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#A8E6CF", "#FF69B4", "#88D8FF"];
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: cx,
              top: cy + Math.sin((frame + i * 11) / 12) * 15,
              width: 12 + (i % 8),
              height: 12 + (i % 8),
              borderRadius: i % 3 === 0 ? "50%" : "2px",
              backgroundColor: colors[i % colors.length],
              opacity: confettiOpacity,
              transform: `rotate(${frame * 3 + i * 45}deg)`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------------------
// Letter Scene
// ---------------------------------------------------------------------------
const LetterScene: React.FC<{
  letter: string;
  word: string;
  emoji: string;
  bgColor: string;
  accentColor: string;
  letterIndex: number;
  totalLetters: number;
}> = ({ letter, word, emoji, bgColor, accentColor, letterIndex, totalLetters }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // --- Animations ---
  const letterSpring = spring({
    frame,
    fps,
    config: { damping: 6, mass: 1.0, stiffness: 80 },
  });

  const emojiSpring = spring({
    frame: Math.max(0, frame - 12),
    fps,
    config: { damping: 7, mass: 1.2, stiffness: 60 },
  });

  const wordSlide = spring({
    frame: Math.max(0, frame - 20),
    fps,
    config: { damping: 12, mass: 0.8 },
  });

  // Glow pulse on the big letter
  const glowPulse = interpolate(
    Math.sin(frame / 8),
    [-1, 1],
    [20, 60]
  );

  // Emoji float
  const emojiFloat = Math.sin(frame / 12) * 20;

  // Progress
  const progress = (letterIndex + 1) / totalLetters;

  // Sparkles for this scene
  const sparkles = generateSparkles(15, letterIndex * 7 + 13);
  const sideEmojis = generateSideEmojis(12, letterIndex * 11 + 3);

  // Darken/lighten the bg for gradient
  const bgDarker = bgColor;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${bgColor}CC 0%, ${bgColor} 40%, ${bgDarker}EE 100%)`,
        overflow: "hidden",
      }}
    >
      {/* Background sparkles/particles */}
      {sparkles.map((s, i) => (
        <Sparkle
          key={i}
          x={s.x}
          y={s.y}
          size={s.size}
          delay={s.delay}
          color={i % 3 === 0 ? "#FFFFFF" : i % 3 === 1 ? "#FFD700" : accentColor}
          frame={frame}
        />
      ))}

      {/* Side floating mini emojis */}
      {sideEmojis.map((pos, i) => (
        <FloatingEmoji
          key={i}
          emoji={emoji}
          x={pos.x}
          y={pos.y}
          size={pos.size}
          frame={frame}
          delay={pos.delay}
        />
      ))}

      {/* TOP area: "A for" label */}
      <div
        style={{
          position: "absolute",
          top: 120,
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 110,
            fontWeight: 700,
            fontFamily: cleanFont,
            color: "rgba(255,255,255,0.95)",
            textShadow: "3px 3px 6px rgba(0,0,0,0.4)",
            opacity: interpolate(frame, [0, 15], [0, 1], {
              extrapolateRight: "clamp",
            }),
          }}
        >
          {letter.toUpperCase()} for
        </div>
      </div>

      {/* CENTER: GIANT letter */}
      <div
        style={{
          position: "absolute",
          top: 200,
          width: "100%",
          height: 750,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: 700,
            fontWeight: 900,
            fontFamily: funFont,
            color: "#FFFFFF",
            transform: `scale(${letterSpring})`,
            textShadow: `
              8px 8px 0 ${accentColor},
              16px 16px 0 rgba(0,0,0,0.2),
              0 0 ${glowPulse * 1.5}px rgba(255,255,255,0.5),
              0 0 ${glowPulse * 3}px ${accentColor}55
            `,
            lineHeight: 1,
          }}
        >
          {letter.toUpperCase()}
        </div>
      </div>

      {/* MIDDLE-BOTTOM: HUGE emoji */}
      <div
        style={{
          position: "absolute",
          top: 1000 + emojiFloat,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: 500,
            transform: `scale(${emojiSpring})`,
            lineHeight: 1,
            filter: `drop-shadow(0 15px 35px rgba(0,0,0,0.35))`,
          }}
        >
          {emoji}
        </div>
      </div>

      {/* BOTTOM: Word text */}
      <div
        style={{
          position: "absolute",
          bottom: 140,
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 140,
            fontWeight: 900,
            fontFamily: cleanFont,
            color: "#FFFFFF",
            textShadow: `6px 6px 0 ${accentColor}, 0 0 40px rgba(0,0,0,0.4)`,
            transform: `translateY(${interpolate(wordSlide, [0, 1], [60, 0])}px)`,
            opacity: wordSlide,
          }}
        >
          {word}
        </div>
      </div>

      {/* Progress bar at very bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 60,
          right: 60,
          height: 12,
          borderRadius: 6,
          backgroundColor: "rgba(255,255,255,0.2)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress * 100}%`,
            height: "100%",
            borderRadius: 6,
            background: `linear-gradient(90deg, #FFD700, ${accentColor}, #FF69B4)`,
            boxShadow: `0 0 10px ${accentColor}80`,
            transition: "width 0.3s ease",
          }}
        />
      </div>

      {/* Letter counter badge */}
      <div
        style={{
          position: "absolute",
          top: 50,
          right: 50,
          width: 80,
          height: 80,
          borderRadius: 40,
          backgroundColor: "rgba(255,255,255,0.2)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(10px)",
        }}
      >
        <span
          style={{
            fontSize: 32,
            fontWeight: 900,
            fontFamily: cleanFont,
            color: "#FFFFFF",
          }}
        >
          {letterIndex + 1}
        </span>
      </div>

      {/* Background confetti rectangles */}
      {Array.from({ length: 12 }).map((_, i) => {
        const confX = ((i * 157 + letterIndex * 37) % 980) + 50;
        const confY = ((i * 211 + letterIndex * 53) % 1800) + 60;
        const confOpacity = interpolate(
          (frame + i * 9) % 70,
          [0, 20, 50, 70],
          [0, 0.5, 0.5, 0]
        );
        const confColors = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#A8E6CF", "#FF69B4", "#88D8FF"];
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: confX,
              top: confY + Math.sin((frame + i * 13) / 15) * 10,
              width: 10 + (i % 6),
              height: 10 + (i % 6),
              borderRadius: i % 2 === 0 ? "50%" : "2px",
              backgroundColor: confColors[i % confColors.length],
              opacity: confOpacity,
              transform: `rotate(${frame * 2 + i * 30}deg)`,
              pointerEvents: "none",
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------------------
// Outro Scene
// ---------------------------------------------------------------------------
const OutroScene: React.FC<{
  bgGradient: [string, string];
  accentColor: string;
  letters: AlphabetShortsProps["letters"];
}> = ({ bgGradient, accentColor, letters }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const greatJobSpring = spring({
    frame,
    fps,
    config: { damping: 6, mass: 1.0 },
  });

  const subtitleSpring = spring({
    frame: Math.max(0, frame - 15),
    fps,
    config: { damping: 10 },
  });

  // Rapid emoji cycling
  const emojiIndex = Math.floor(frame / 3) % letters.length;
  const currentEmoji = letters[emojiIndex]?.emoji || "";

  const sparkles = generateSparkles(25, 99);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(160deg, ${bgGradient[0]}, ${bgGradient[1]})`,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Sparkles */}
      {sparkles.map((s, i) => (
        <Sparkle
          key={i}
          x={s.x}
          y={s.y}
          size={s.size}
          delay={s.delay}
          color={i % 2 === 0 ? "#FFD700" : "#FF69B4"}
          frame={frame}
        />
      ))}

      {/* Confetti burst */}
      {Array.from({ length: 40 }).map((_, i) => {
        const angle = (i / 40) * Math.PI * 2;
        const dist = interpolate(frame, [0, 30, 60], [0, 400, 500], {
          extrapolateRight: "clamp",
        });
        const cx = 540 + Math.cos(angle) * dist;
        const cy = 960 + Math.sin(angle) * dist;
        const confOpacity = interpolate(frame, [0, 10, 50, 90], [0, 1, 0.8, 0], {
          extrapolateRight: "clamp",
        });
        const confColors = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#A8E6CF", "#FF69B4", "#88D8FF", "#FFD700"];
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: cx,
              top: cy,
              width: 14,
              height: 14,
              borderRadius: i % 2 === 0 ? "50%" : "2px",
              backgroundColor: confColors[i % confColors.length],
              opacity: confOpacity,
              transform: `rotate(${frame * 4 + i * 45}deg)`,
            }}
          />
        );
      })}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 30,
        }}
      >
        {/* Great Job text */}
        <div
          style={{
            fontSize: 140,
            fontWeight: 900,
            fontFamily: funFont,
            color: "#FFFFFF",
            textShadow: `6px 6px 0 ${accentColor}, 0 0 50px rgba(255,255,255,0.6)`,
            transform: `scale(${greatJobSpring})`,
            textAlign: "center",
          }}
        >
          Great Job! {"\uD83C\uDF89"}
        </div>

        {/* Cycling emoji */}
        <div
          style={{
            fontSize: 150,
            lineHeight: 1,
            transform: `scale(${interpolate(frame % 3, [0, 1, 2], [1, 1.1, 1])})`,
          }}
        >
          {currentEmoji}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            fontFamily: cleanFont,
            color: "#FFD700",
            textShadow: "3px 3px 0 rgba(0,0,0,0.4)",
            transform: `scale(${subtitleSpring})`,
            opacity: subtitleSpring,
            textAlign: "center",
          }}
        >
          A to Z Complete! {"\u2705"}
        </div>

        {/* Subscribe prompt */}
        <div
          style={{
            marginTop: 60,
            fontSize: 56,
            fontWeight: 700,
            fontFamily: cleanFont,
            color: "rgba(255,255,255,0.9)",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            opacity: interpolate(frame, [30, 50], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            textAlign: "center",
            padding: "0 60px",
          }}
        >
          Like & Subscribe for more!
        </div>

        {/* Thumbs up / Subscribe icons row */}
        <div
          style={{
            display: "flex",
            gap: 40,
            marginTop: 20,
            opacity: interpolate(frame, [40, 60], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <span style={{ fontSize: 70 }}>{"\uD83D\uDC4D"}</span>
          <span style={{ fontSize: 70 }}>{"\uD83D\uDD14"}</span>
          <span style={{ fontSize: 70 }}>{"\u2764\uFE0F"}</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------
export const AlphabetShortsTemplate: React.FC<AlphabetShortsProps> = ({
  title,
  videoId,
  bgGradient,
  accentColor,
  letters,
  letterDuration = 3,
  introDuration = 3,
  outroDuration = 3,
}) => {
  const { fps } = useVideoConfig();

  const introFrames = introDuration * fps;
  const letterFrames = letterDuration * fps;
  const outroFrames = outroDuration * fps;

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* Background music */}
      <Audio src={staticFile(`${videoId}-audio/bgm.mp3`)} volume={0.3} />

      {/* Intro */}
      <Sequence from={0} durationInFrames={introFrames}>
        <IntroScene
          title={title}
          bgGradient={bgGradient}
          accentColor={accentColor}
        />
      </Sequence>

      {/* Letter scenes */}
      {letters.map((item, i) => (
        <Sequence
          key={i}
          from={introFrames + i * letterFrames}
          durationInFrames={letterFrames}
        >
          {/* Per-letter voice */}
          <Audio src={staticFile(`${videoId}-audio/letter_${i}.mp3`)} />
          <LetterScene
            letter={item.letter}
            word={item.word}
            emoji={item.emoji}
            bgColor={item.bgColor}
            accentColor={accentColor}
            letterIndex={i}
            totalLetters={letters.length}
          />
        </Sequence>
      ))}

      {/* Outro */}
      <Sequence
        from={introFrames + letters.length * letterFrames}
        durationInFrames={outroFrames}
      >
        <OutroScene
          bgGradient={bgGradient}
          accentColor={accentColor}
          letters={letters}
        />
      </Sequence>
    </AbsoluteFill>
  );
};
