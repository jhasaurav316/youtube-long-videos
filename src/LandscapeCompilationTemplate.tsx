import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
  AbsoluteFill,
  staticFile,
} from "remotion";
import { Audio } from "@remotion/media";
import { loadFont } from "@remotion/google-fonts/Baloo2";
import { loadFont as loadFontPoppins } from "@remotion/google-fonts/Poppins";
import React, { useEffect, useState } from "react";

// Safe Audio wrapper — skips if the file doesn't exist
const SafeAudio: React.FC<{ src: string; volume?: number }> = ({
  src,
  volume,
}) => {
  const [exists, setExists] = useState(true);

  useEffect(() => {
    fetch(src, { method: "HEAD" })
      .then((res) => {
        if (!res.ok) setExists(false);
      })
      .catch(() => setExists(false));
  }, [src]);

  if (!exists) return null;
  return <Audio src={src} volume={volume} />;
};

const { fontFamily: funFont } = loadFont("normal", {
  weights: ["400"],
  subsets: ["latin"],
});

const { fontFamily: cleanFont } = loadFontPoppins("normal", {
  weights: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export type ChapterData = {
  themeId: string;
  title: string;
  bgGradient: [string, string];
  accentColor: string;
  items: {
    letter: string;
    word: string;
    emoji: string;
    bgColor: string;
  }[];
};

export type LandscapeCompilationProps = {
  title: string;
  videoId: string;
  chapters: ChapterData[];
  itemDuration?: number;
  chapterIntroDuration?: number;
  chapterOutroDuration?: number;
  videoIntroDuration?: number;
  videoOutroDuration?: number;
  chapterTransitionDuration?: number;
};

// ---------------------------------------------------------------------------
// Sparkle / Particle helpers (adapted for 1920x1080)
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
  const drift = Math.sin((frame + delay * 17) / 20) * 8;

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

const FloatingEmoji: React.FC<{
  emoji: string;
  x: number;
  y: number;
  size: number;
  frame: number;
  delay: number;
}> = ({ emoji, x, y, size, frame, delay }) => {
  const floatY = Math.sin((frame + delay * 13) / 25) * 12;
  const floatX = Math.cos((frame + delay * 7) / 30) * 8;
  const rotation = Math.sin((frame + delay * 11) / 35) * 10;
  const opacity = interpolate(
    (frame + delay * 5) % 90,
    [0, 20, 70, 90],
    [0.3, 0.8, 0.8, 0.3]
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

function generateSparklesLandscape(count: number, seed: number) {
  const sparkles: { x: number; y: number; size: number; delay: number }[] = [];
  for (let i = 0; i < count; i++) {
    const hash = ((seed * 31 + i * 97) % 1000) / 1000;
    const hash2 = ((seed * 53 + i * 71) % 1000) / 1000;
    sparkles.push({
      x: hash * 1920,
      y: hash2 * 1080,
      size: 6 + hash * 16,
      delay: i * 3,
    });
  }
  return sparkles;
}

// ---------------------------------------------------------------------------
// Video Intro Scene (title card with chapter list)
// ---------------------------------------------------------------------------
const VideoIntroScene: React.FC<{
  title: string;
  chapters: ChapterData[];
}> = ({ title, chapters }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({ frame, fps, config: { damping: 8, mass: 0.8 } });
  const titleOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  const sparkles = generateSparklesLandscape(25, 42);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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

      {/* Background ABC letters */}
      {["A", "B", "C", "X", "Y", "Z"].map((letter, i) => {
        const letterSpring = spring({
          frame: Math.max(0, frame - i * 6),
          fps,
          config: { damping: 5, mass: 1.2 },
        });
        const floatY = Math.sin((frame + i * 30) / 15) * 20;
        const floatX = Math.cos((frame + i * 20) / 20) * 30;
        const rotation = Math.sin((frame + i * 25) / 18) * 15;

        return (
          <div
            key={letter}
            style={{
              position: "absolute",
              left: 100 + i * 310 + floatX,
              top: 80 + (i % 2) * 600 + floatY,
              fontSize: 180,
              fontWeight: 900,
              fontFamily: funFont,
              color: "rgba(255,255,255,0.15)",
              transform: `scale(${letterSpring}) rotate(${rotation}deg)`,
            }}
          >
            {letter}
          </div>
        );
      })}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: `scale(${titleScale})`,
          opacity: titleOpacity,
          zIndex: 1,
        }}
      >
        {/* Main title */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            fontFamily: funFont,
            color: "#FFFFFF",
            textAlign: "center",
            textShadow:
              "6px 6px 0 rgba(0,0,0,0.3), 0 0 60px rgba(255,255,255,0.5)",
            lineHeight: 1.2,
            padding: "0 60px",
          }}
        >
          {title}
        </div>

        {/* Chapter list */}
        <div
          style={{
            marginTop: 40,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 16,
            maxWidth: 1400,
          }}
        >
          {chapters.map((ch, i) => {
            const chipSpring = spring({
              frame: Math.max(0, frame - 30 - i * 8),
              fps,
              config: { damping: 10 },
            });

            return (
              <div
                key={i}
                style={{
                  padding: "12px 28px",
                  borderRadius: 40,
                  backgroundColor: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  fontSize: 28,
                  fontWeight: 700,
                  fontFamily: cleanFont,
                  color: "#FFFFFF",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                  transform: `scale(${chipSpring})`,
                  opacity: chipSpring,
                  whiteSpace: "nowrap",
                }}
              >
                {ch.items[0]?.emoji || ""} {ch.title}
              </div>
            );
          })}
        </div>

        {/* Let's Learn subtitle */}
        <div
          style={{
            marginTop: 30,
            fontSize: 44,
            fontWeight: 700,
            fontFamily: cleanFont,
            color: "#FFD700",
            textShadow: "3px 3px 0 rgba(0,0,0,0.4)",
            opacity: interpolate(frame, [40, 60], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          Let's Learn A to Z!
        </div>
      </div>

      {/* Confetti dots */}
      {Array.from({ length: 30 }).map((_, i) => {
        const cx = (i * 137 + 50) % 1920;
        const cy = (i * 193 + 100) % 1080;
        const confettiOpacity = interpolate(
          (frame + i * 7) % 50,
          [0, 15, 35, 50],
          [0, 1, 1, 0]
        );
        const colors = [
          "#FF6B6B",
          "#4ECDC4",
          "#FFE66D",
          "#A8E6CF",
          "#FF69B4",
          "#88D8FF",
        ];
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: cx,
              top: cy + Math.sin((frame + i * 11) / 12) * 10,
              width: 10 + (i % 6),
              height: 10 + (i % 6),
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
// Chapter Transition Scene
// ---------------------------------------------------------------------------
const ChapterTransitionScene: React.FC<{
  chapterNumber: number;
  title: string;
  bgGradient: [string, string];
  accentColor: string;
  emoji: string;
}> = ({ chapterNumber, title, bgGradient, accentColor, emoji }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const numberScale = spring({
    frame,
    fps,
    config: { damping: 6, mass: 1 },
  });

  const titleSlide = spring({
    frame: Math.max(0, frame - 15),
    fps,
    config: { damping: 10 },
  });

  const sparkles = generateSparklesLandscape(15, chapterNumber * 17);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${bgGradient[0]}, ${bgGradient[1]})`,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {sparkles.map((s, i) => (
        <Sparkle
          key={i}
          x={s.x}
          y={s.y}
          size={s.size}
          delay={s.delay}
          color={i % 2 === 0 ? "#FFFFFF" : "#FFD700"}
          frame={frame}
        />
      ))}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        {/* Chapter badge */}
        <div
          style={{
            fontSize: 36,
            fontWeight: 700,
            fontFamily: cleanFont,
            color: "rgba(255,255,255,0.8)",
            textTransform: "uppercase",
            letterSpacing: 8,
            transform: `scale(${numberScale})`,
          }}
        >
          Chapter {chapterNumber}
        </div>

        {/* Emoji */}
        <div
          style={{
            fontSize: 120,
            transform: `scale(${numberScale})`,
            lineHeight: 1,
          }}
        >
          {emoji}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            fontFamily: funFont,
            color: "#FFFFFF",
            textShadow: `5px 5px 0 ${accentColor}, 0 0 40px rgba(255,255,255,0.5)`,
            textAlign: "center",
            transform: `translateY(${interpolate(titleSlide, [0, 1], [40, 0])}px)`,
            opacity: titleSlide,
          }}
        >
          {title}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------------------
// Landscape Letter Scene (16:9 layout)
// ---------------------------------------------------------------------------
const LandscapeLetterScene: React.FC<{
  letter: string;
  word: string;
  emoji: string;
  bgColor: string;
  accentColor: string;
  letterIndex: number;
  totalLetters: number;
  chapterProgress: number;
}> = ({
  letter,
  word,
  emoji,
  bgColor,
  accentColor,
  letterIndex,
  totalLetters,
  chapterProgress,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const letterSpring = spring({
    frame,
    fps,
    config: { damping: 6, mass: 1.0, stiffness: 80 },
  });

  const emojiSpring = spring({
    frame: Math.max(0, frame - 10),
    fps,
    config: { damping: 7, mass: 1.2, stiffness: 60 },
  });

  const wordSlide = spring({
    frame: Math.max(0, frame - 18),
    fps,
    config: { damping: 12, mass: 0.8 },
  });

  const glowPulse = interpolate(Math.sin(frame / 8), [-1, 1], [15, 45]);
  const emojiFloat = Math.sin(frame / 12) * 14;

  const progress = (letterIndex + 1) / totalLetters;
  const sparkles = generateSparklesLandscape(12, letterIndex * 7 + 13);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${bgColor}DD 0%, ${bgColor} 50%, ${bgColor}CC 100%)`,
        overflow: "hidden",
      }}
    >
      {/* Background sparkles */}
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

      {/* Floating mini emojis in corners */}
      {[
        { x: 30, y: 80, size: 50 },
        { x: 1800, y: 60, size: 45 },
        { x: 50, y: 900, size: 40 },
        { x: 1820, y: 920, size: 48 },
        { x: 200, y: 500, size: 35 },
        { x: 1700, y: 500, size: 38 },
      ].map((pos, i) => (
        <FloatingEmoji
          key={i}
          emoji={emoji}
          x={pos.x}
          y={pos.y}
          size={pos.size}
          frame={frame}
          delay={i * 5}
        />
      ))}

      {/* Main content: 3-column landscape layout */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 60px",
        }}
      >
        {/* LEFT: "X for" label + Giant letter */}
        <div
          style={{
            flex: "0 0 580px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 700,
              fontFamily: cleanFont,
              color: "rgba(255,255,255,0.9)",
              textShadow: "3px 3px 6px rgba(0,0,0,0.3)",
              opacity: interpolate(frame, [0, 12], [0, 1], {
                extrapolateRight: "clamp",
              }),
              marginBottom: 10,
            }}
          >
            {letter.toUpperCase()} for
          </div>
          <div
            style={{
              fontSize: 520,
              fontWeight: 900,
              fontFamily: funFont,
              color: "#FFFFFF",
              transform: `scale(${letterSpring})`,
              textShadow: `
                6px 6px 0 ${accentColor},
                12px 12px 0 rgba(0,0,0,0.15),
                0 0 ${glowPulse * 1.5}px rgba(255,255,255,0.4),
                0 0 ${glowPulse * 3}px ${accentColor}44
              `,
              lineHeight: 1,
            }}
          >
            {letter.toUpperCase()}
          </div>
        </div>

        {/* CENTER: Emoji */}
        <div
          style={{
            flex: "0 0 600px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: `translateY(${emojiFloat}px)`,
          }}
        >
          <div
            style={{
              fontSize: 500,
              transform: `scale(${emojiSpring})`,
              lineHeight: 1,
              filter: "drop-shadow(0 12px 30px rgba(0,0,0,0.3))",
            }}
          >
            {emoji}
          </div>
        </div>

        {/* RIGHT: Word */}
        <div
          style={{
            flex: "0 0 580px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 130,
              fontWeight: 900,
              fontFamily: cleanFont,
              color: "#FFFFFF",
              textShadow: `5px 5px 0 ${accentColor}, 0 0 30px rgba(0,0,0,0.3)`,
              transform: `translateY(${interpolate(wordSlide, [0, 1], [40, 0])}px)`,
              opacity: wordSlide,
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            {word}
          </div>
        </div>
      </div>

      {/* Progress bar at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: 60,
          right: 60,
          height: 10,
          borderRadius: 5,
          backgroundColor: "rgba(255,255,255,0.2)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress * 100}%`,
            height: "100%",
            borderRadius: 5,
            background: `linear-gradient(90deg, #FFD700, ${accentColor}, #FF69B4)`,
            boxShadow: `0 0 8px ${accentColor}80`,
          }}
        />
      </div>

      {/* Letter counter badge */}
      <div
        style={{
          position: "absolute",
          top: 30,
          right: 40,
          width: 65,
          height: 65,
          borderRadius: 33,
          backgroundColor: "rgba(255,255,255,0.2)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(8px)",
        }}
      >
        <span
          style={{
            fontSize: 26,
            fontWeight: 900,
            fontFamily: cleanFont,
            color: "#FFFFFF",
          }}
        >
          {letterIndex + 1}
        </span>
      </div>

      {/* Chapter progress indicator (top left) */}
      <div
        style={{
          position: "absolute",
          top: 30,
          left: 40,
          padding: "8px 20px",
          borderRadius: 20,
          backgroundColor: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(8px)",
          fontSize: 22,
          fontWeight: 700,
          fontFamily: cleanFont,
          color: "rgba(255,255,255,0.9)",
        }}
      >
        Chapter {chapterProgress}
      </div>

      {/* Confetti rectangles */}
      {Array.from({ length: 10 }).map((_, i) => {
        const confX = ((i * 157 + letterIndex * 37) % 1820) + 50;
        const confY = ((i * 211 + letterIndex * 53) % 980) + 50;
        const confOpacity = interpolate(
          (frame + i * 9) % 70,
          [0, 20, 50, 70],
          [0, 0.4, 0.4, 0]
        );
        const confColors = [
          "#FF6B6B",
          "#4ECDC4",
          "#FFE66D",
          "#A8E6CF",
          "#FF69B4",
          "#88D8FF",
        ];
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: confX,
              top: confY + Math.sin((frame + i * 13) / 15) * 8,
              width: 8 + (i % 5),
              height: 8 + (i % 5),
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
// Chapter Intro Scene (per-chapter, landscape)
// ---------------------------------------------------------------------------
const ChapterIntroScene: React.FC<{
  title: string;
  bgGradient: [string, string];
  accentColor: string;
}> = ({ title, bgGradient, accentColor }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({ frame, fps, config: { damping: 8, mass: 0.8 } });
  const sparkles = generateSparklesLandscape(18, 77);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(160deg, ${bgGradient[0]}, ${bgGradient[1]})`,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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

      {/* ABC background */}
      {["A", "B", "C"].map((letter, i) => {
        const ls = spring({
          frame: Math.max(0, frame - i * 8),
          fps,
          config: { damping: 5, mass: 1.2 },
        });
        const floatY = Math.sin((frame + i * 30) / 15) * 20;
        const floatX = Math.cos((frame + i * 20) / 20) * 30;
        return (
          <div
            key={letter}
            style={{
              position: "absolute",
              left: 300 + i * 450 + floatX,
              top: 200 + floatY,
              fontSize: 200,
              fontWeight: 900,
              fontFamily: funFont,
              color: "rgba(255,255,255,0.2)",
              transform: `scale(${ls}) rotate(${Math.sin((frame + i * 25) / 18) * 12}deg)`,
            }}
          >
            {letter}
          </div>
        );
      })}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: `scale(${titleScale})`,
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontSize: 90,
            fontWeight: 900,
            fontFamily: funFont,
            color: "#FFFFFF",
            textAlign: "center",
            textShadow: `6px 6px 0 ${accentColor}, 0 0 50px rgba(255,255,255,0.5)`,
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 48,
            fontWeight: 700,
            fontFamily: cleanFont,
            color: "#FFD700",
            textShadow: "3px 3px 0 rgba(0,0,0,0.4)",
            opacity: interpolate(frame, [20, 40], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          Let's Learn!
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------------------
// Chapter Outro Scene (per-chapter, landscape)
// ---------------------------------------------------------------------------
const ChapterOutroScene: React.FC<{
  bgGradient: [string, string];
  accentColor: string;
  items: ChapterData["items"];
}> = ({ bgGradient, accentColor, items }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const greatJobSpring = spring({
    frame,
    fps,
    config: { damping: 6, mass: 1.0 },
  });

  const emojiIndex = Math.floor(frame / 3) % items.length;
  const currentEmoji = items[emojiIndex]?.emoji || "";

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(160deg, ${bgGradient[0]}, ${bgGradient[1]})`,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Confetti burst */}
      {Array.from({ length: 40 }).map((_, i) => {
        const angle = (i / 40) * Math.PI * 2;
        const dist = interpolate(frame, [0, 30, 60], [0, 350, 450], {
          extrapolateRight: "clamp",
        });
        const cx = 960 + Math.cos(angle) * dist;
        const cy = 540 + Math.sin(angle) * dist;
        const confOpacity = interpolate(frame, [0, 10, 50, 90], [0, 1, 0.8, 0], {
          extrapolateRight: "clamp",
        });
        const confColors = [
          "#FF6B6B",
          "#4ECDC4",
          "#FFE66D",
          "#A8E6CF",
          "#FF69B4",
          "#88D8FF",
          "#FFD700",
        ];
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: cx,
              top: cy,
              width: 12,
              height: 12,
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
          gap: 20,
        }}
      >
        <div
          style={{
            fontSize: 90,
            fontWeight: 900,
            fontFamily: funFont,
            color: "#FFFFFF",
            textShadow: `5px 5px 0 ${accentColor}, 0 0 40px rgba(255,255,255,0.5)`,
            transform: `scale(${greatJobSpring})`,
            textAlign: "center",
          }}
        >
          Great Job! {"\uD83C\uDF89"}
        </div>

        <div
          style={{
            fontSize: 100,
            lineHeight: 1,
            transform: `scale(${interpolate(frame % 3, [0, 1, 2], [1, 1.1, 1])})`,
          }}
        >
          {currentEmoji}
        </div>

        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            fontFamily: cleanFont,
            color: "#FFD700",
            textShadow: "3px 3px 0 rgba(0,0,0,0.3)",
            opacity: interpolate(frame, [15, 35], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          A to Z Complete! {"\u2705"}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------------------
// Video Outro Scene (end of full video)
// ---------------------------------------------------------------------------
const VideoOutroScene: React.FC<{
  chapters: ChapterData[];
}> = ({ chapters }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 8, mass: 0.8 },
  });

  // Collect sample emojis from all chapters
  const allEmojis = chapters.flatMap((ch) =>
    ch.items.slice(0, 6).map((item) => item.emoji)
  );

  const sparkles = generateSparklesLandscape(20, 999);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {sparkles.map((s, i) => (
        <Sparkle
          key={i}
          x={s.x}
          y={s.y}
          size={s.size}
          delay={s.delay}
          color={i % 2 === 0 ? "#FFD700" : "#FFFFFF"}
          frame={frame}
        />
      ))}

      {/* Confetti burst */}
      {Array.from({ length: 50 }).map((_, i) => {
        const angle = (i / 50) * Math.PI * 2;
        const dist = interpolate(frame, [0, 40, 80], [0, 500, 600], {
          extrapolateRight: "clamp",
        });
        const cx = 960 + Math.cos(angle) * dist;
        const cy = 540 + Math.sin(angle) * dist;
        const confOpacity = interpolate(frame, [0, 15, 60, 120], [0, 1, 0.7, 0], {
          extrapolateRight: "clamp",
        });
        const colors = [
          "#FF6B6B",
          "#4ECDC4",
          "#FFE66D",
          "#A8E6CF",
          "#FF69B4",
          "#88D8FF",
          "#FFD700",
        ];
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: cx,
              top: cy,
              width: 14,
              height: 14,
              borderRadius: i % 2 === 0 ? "50%" : "3px",
              backgroundColor: colors[i % colors.length],
              opacity: confOpacity,
              transform: `rotate(${frame * 3 + i * 40}deg)`,
            }}
          />
        );
      })}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            fontFamily: funFont,
            color: "#FFFFFF",
            textShadow: "6px 6px 0 rgba(0,0,0,0.3), 0 0 50px rgba(255,255,255,0.5)",
            transform: `scale(${titleSpring})`,
            textAlign: "center",
          }}
        >
          Amazing Learning! {"\uD83C\uDF1F"}
        </div>

        {/* Emoji grid from all chapters */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 12,
            maxWidth: 900,
            marginTop: 10,
          }}
        >
          {allEmojis.slice(0, 24).map((em, i) => {
            const emSpring = spring({
              frame: Math.max(0, frame - 20 - i * 2),
              fps,
              config: { damping: 10 },
            });
            return (
              <div
                key={i}
                style={{
                  fontSize: 50,
                  transform: `scale(${emSpring})`,
                  opacity: emSpring,
                }}
              >
                {em}
              </div>
            );
          })}
        </div>

        {/* Subscribe */}
        <div
          style={{
            marginTop: 20,
            fontSize: 44,
            fontWeight: 700,
            fontFamily: cleanFont,
            color: "rgba(255,255,255,0.95)",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            opacity: interpolate(frame, [60, 80], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          Like & Subscribe for more!
        </div>

        <div
          style={{
            display: "flex",
            gap: 30,
            marginTop: 10,
            opacity: interpolate(frame, [70, 90], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <span style={{ fontSize: 50 }}>{"\uD83D\uDC4D"}</span>
          <span style={{ fontSize: 50 }}>{"\uD83D\uDD14"}</span>
          <span style={{ fontSize: 50 }}>{"\u2764\uFE0F"}</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------
export const LandscapeCompilationTemplate: React.FC<
  LandscapeCompilationProps
> = ({
  title,
  videoId,
  chapters,
  itemDuration = 5,
  chapterIntroDuration = 3,
  chapterOutroDuration = 3,
  videoIntroDuration = 10,
  videoOutroDuration = 15,
  chapterTransitionDuration = 5,
}) => {
  const { fps } = useVideoConfig();

  const videoIntroFrames = videoIntroDuration * fps;
  const videoOutroFrames = videoOutroDuration * fps;
  const transitionFrames = chapterTransitionDuration * fps;
  const chapterIntroFrames = chapterIntroDuration * fps;
  const chapterOutroFrames = chapterOutroDuration * fps;
  const itemFrames = itemDuration * fps;

  let currentFrame = 0;

  // Build sequence timeline
  const sequences: React.ReactNode[] = [];

  // Video Intro
  sequences.push(
    <Sequence key="video-intro" from={currentFrame} durationInFrames={videoIntroFrames}>
      <SafeAudio src={staticFile(`${videoId}-audio/video-intro.mp3`)} />
      <VideoIntroScene title={title} chapters={chapters} />
    </Sequence>
  );
  currentFrame += videoIntroFrames;

  // Chapters
  chapters.forEach((chapter, chapterIndex) => {
    // Chapter transition
    sequences.push(
      <Sequence
        key={`transition-${chapterIndex}`}
        from={currentFrame}
        durationInFrames={transitionFrames}
      >
        <SafeAudio src={staticFile(`${chapter.themeId}-audio/chapter-transition.mp3`)} />
        <ChapterTransitionScene
          chapterNumber={chapterIndex + 1}
          title={chapter.title}
          bgGradient={chapter.bgGradient}
          accentColor={chapter.accentColor}
          emoji={chapter.items[0]?.emoji || ""}
        />
      </Sequence>
    );
    currentFrame += transitionFrames;

    // Chapter intro
    sequences.push(
      <Sequence
        key={`chapter-intro-${chapterIndex}`}
        from={currentFrame}
        durationInFrames={chapterIntroFrames}
      >
        <SafeAudio src={staticFile(`${chapter.themeId}-audio/chapter-intro.mp3`)} />
        <ChapterIntroScene
          title={chapter.title}
          bgGradient={chapter.bgGradient}
          accentColor={chapter.accentColor}
        />
      </Sequence>
    );
    currentFrame += chapterIntroFrames;

    // Letter scenes
    chapter.items.forEach((item, itemIndex) => {
      sequences.push(
        <Sequence
          key={`letter-${chapterIndex}-${itemIndex}`}
          from={currentFrame}
          durationInFrames={itemFrames}
        >
          {/* Per-letter audio */}
          <SafeAudio src={staticFile(`${chapter.themeId}-audio/letter_${itemIndex}.mp3`)} />
          <LandscapeLetterScene
            letter={item.letter}
            word={item.word}
            emoji={item.emoji}
            bgColor={item.bgColor}
            accentColor={chapter.accentColor}
            letterIndex={itemIndex}
            totalLetters={chapter.items.length}
            chapterProgress={chapterIndex + 1}
          />
        </Sequence>
      );
      currentFrame += itemFrames;
    });

    // Chapter outro
    sequences.push(
      <Sequence
        key={`chapter-outro-${chapterIndex}`}
        from={currentFrame}
        durationInFrames={chapterOutroFrames}
      >
        <SafeAudio src={staticFile(`${chapter.themeId}-audio/chapter-outro.mp3`)} />
        <ChapterOutroScene
          bgGradient={chapter.bgGradient}
          accentColor={chapter.accentColor}
          items={chapter.items}
        />
      </Sequence>
    );
    currentFrame += chapterOutroFrames;
  });

  // Video Outro
  sequences.push(
    <Sequence key="video-outro" from={currentFrame} durationInFrames={videoOutroFrames}>
      <SafeAudio src={staticFile(`${videoId}-audio/video-outro.mp3`)} />
      <VideoOutroScene chapters={chapters} />
    </Sequence>
  );

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* Background music from the first chapter */}
      {chapters[0] && (
        <SafeAudio
          src={staticFile(`${chapters[0].themeId}-audio/bgm.mp3`)}
          volume={0.25}
        />
      )}
      {sequences}
    </AbsoluteFill>
  );
};
