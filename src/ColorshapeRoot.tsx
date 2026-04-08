import "./index.css";
import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";
import React from "react";

export const ColorshapeRemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ColorsRainbowColors1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainbow Colors - Part 1",
          videoId: "colors-rainbow-colors-1",
          bgGradient: ["#D32F2F","#FFCDD2"] as [string, string],
          accentColor: "#B71C1C",
          letters: [
          {
          "letter": "R",
          "word": "Red",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Blue",
          "emoji": "🔵",
          "bgColor": "#1565C0"
          },
          {
          "letter": "G",
          "word": "Green",
          "emoji": "🟢",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "Y",
          "word": "Yellow",
          "emoji": "🟡",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "O",
          "word": "Orange",
          "emoji": "🟠",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Purple",
          "emoji": "🟣",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "W",
          "word": "White",
          "emoji": "⚪",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "B",
          "word": "Black",
          "emoji": "⚫",
          "bgColor": "#263238"
          },
          {
          "letter": "P",
          "word": "Pink",
          "emoji": "🩷",
          "bgColor": "#E91E63"
          },
          {
          "letter": "B",
          "word": "Brown",
          "emoji": "🟤",
          "bgColor": "#795548"
          },
          {
          "letter": "G",
          "word": "Gold",
          "emoji": "🥇",
          "bgColor": "#FFA000"
          },
          {
          "letter": "S",
          "word": "Silver",
          "emoji": "🥈",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "C",
          "word": "Cyan",
          "emoji": "🔵",
          "bgColor": "#00BCD4"
          },
          {
          "letter": "M",
          "word": "Magenta",
          "emoji": "🟣",
          "bgColor": "#AD1457"
          },
          {
          "letter": "T",
          "word": "Turquoise",
          "emoji": "🔵",
          "bgColor": "#00897B"
          },
          {
          "letter": "I",
          "word": "Indigo",
          "emoji": "🟣",
          "bgColor": "#1A237E"
          },
          {
          "letter": "V",
          "word": "Violet",
          "emoji": "🟣",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "C",
          "word": "Crimson",
          "emoji": "🔴",
          "bgColor": "#C62828"
          },
          {
          "letter": "S",
          "word": "Scarlet",
          "emoji": "🔴",
          "bgColor": "#FF1744"
          },
          {
          "letter": "N",
          "word": "Navy",
          "emoji": "🔵",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "L",
          "word": "Lavender",
          "emoji": "🟣",
          "bgColor": "#7E57C2"
          },
          {
          "letter": "M",
          "word": "Maroon",
          "emoji": "🟤",
          "bgColor": "#880E4F"
          },
          {
          "letter": "C",
          "word": "Coral",
          "emoji": "🟠",
          "bgColor": "#FF7043"
          },
          {
          "letter": "T",
          "word": "Teal",
          "emoji": "🔵",
          "bgColor": "#00695C"
          },
          {
          "letter": "K",
          "word": "Khaki",
          "emoji": "🟡",
          "bgColor": "#827717"
          },
          {
          "letter": "A",
          "word": "Amber",
          "emoji": "🟠",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "P",
          "word": "Peach",
          "emoji": "🟠",
          "bgColor": "#FF8A65"
          },
          {
          "letter": "R",
          "word": "Rose",
          "emoji": "🩷",
          "bgColor": "#E91E63"
          },
          {
          "letter": "B",
          "word": "Beige",
          "emoji": "🟡",
          "bgColor": "#FFF9C4"
          },
          {
          "letter": "G",
          "word": "Grey",
          "emoji": "⚪",
          "bgColor": "#607D8B"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsRainbowColors2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainbow Colors - Part 2",
          videoId: "colors-rainbow-colors-2",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [
          {
          "letter": "S",
          "word": "Sky Blue",
          "emoji": "🔵",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "L",
          "word": "Lime Green",
          "emoji": "🟢",
          "bgColor": "#7CB342"
          },
          {
          "letter": "H",
          "word": "Hot Pink",
          "emoji": "🩷",
          "bgColor": "#FF4081"
          },
          {
          "letter": "D",
          "word": "Dark Blue",
          "emoji": "🔵",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "F",
          "word": "Forest Green",
          "emoji": "🟢",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "R",
          "word": "Royal Blue",
          "emoji": "🔵",
          "bgColor": "#1565C0"
          },
          {
          "letter": "O",
          "word": "Olive Green",
          "emoji": "🟢",
          "bgColor": "#827717"
          },
          {
          "letter": "B",
          "word": "Baby Pink",
          "emoji": "🩷",
          "bgColor": "#F8BBD0"
          },
          {
          "letter": "M",
          "word": "Mint Green",
          "emoji": "🟢",
          "bgColor": "#00E676"
          },
          {
          "letter": "C",
          "word": "Cherry Red",
          "emoji": "🔴",
          "bgColor": "#C62828"
          },
          {
          "letter": "N",
          "word": "Neon Green",
          "emoji": "🟢",
          "bgColor": "#76FF03"
          },
          {
          "letter": "P",
          "word": "Pastel Blue",
          "emoji": "🔵",
          "bgColor": "#90CAF9"
          },
          {
          "letter": "G",
          "word": "Golden Yellow",
          "emoji": "🟡",
          "bgColor": "#FFD600"
          },
          {
          "letter": "W",
          "word": "Wine Red",
          "emoji": "🔴",
          "bgColor": "#880E4F"
          },
          {
          "letter": "A",
          "word": "Aqua Blue",
          "emoji": "🔵",
          "bgColor": "#00BCD4"
          },
          {
          "letter": "T",
          "word": "Tangerine",
          "emoji": "🟠",
          "bgColor": "#FF6D00"
          },
          {
          "letter": "E",
          "word": "Emerald",
          "emoji": "🟢",
          "bgColor": "#00C853"
          },
          {
          "letter": "I",
          "word": "Ice Blue",
          "emoji": "🔵",
          "bgColor": "#B3E5FC"
          },
          {
          "letter": "S",
          "word": "Sunset Orange",
          "emoji": "🟠",
          "bgColor": "#FF5722"
          },
          {
          "letter": "J",
          "word": "Jade Green",
          "emoji": "🟢",
          "bgColor": "#00897B"
          },
          {
          "letter": "K",
          "word": "Kelly Green",
          "emoji": "🟢",
          "bgColor": "#43A047"
          },
          {
          "letter": "V",
          "word": "Vermillion",
          "emoji": "🔴",
          "bgColor": "#FF3D00"
          },
          {
          "letter": "U",
          "word": "Ultramarine",
          "emoji": "🔵",
          "bgColor": "#1A237E"
          },
          {
          "letter": "X",
          "word": "Xanadu Green",
          "emoji": "🟢",
          "bgColor": "#689F38"
          },
          {
          "letter": "Y",
          "word": "Yellow Green",
          "emoji": "🟢",
          "bgColor": "#C0CA33"
          },
          {
          "letter": "Z",
          "word": "Zinc White",
          "emoji": "⚪",
          "bgColor": "#ECEFF1"
          },
          {
          "letter": "D",
          "word": "Dusty Rose",
          "emoji": "🩷",
          "bgColor": "#CE93D8"
          },
          {
          "letter": "F",
          "word": "Fuchsia",
          "emoji": "🩷",
          "bgColor": "#F50057"
          },
          {
          "letter": "C",
          "word": "Copper",
          "emoji": "🟤",
          "bgColor": "#BF360C"
          },
          {
          "letter": "B",
          "word": "Bronze",
          "emoji": "🟤",
          "bgColor": "#8D6E63"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsRainbowColors3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rainbow Colors - Part 3",
          videoId: "colors-rainbow-colors-3",
          bgGradient: ["#E53935","#FFEBEE"] as [string, string],
          accentColor: "#C62828",
          letters: [
          {
          "letter": "R",
          "word": "Rainbow",
          "emoji": "🌈",
          "bgColor": "#FF5722"
          },
          {
          "letter": "P",
          "word": "Plum",
          "emoji": "🟣",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "C",
          "word": "Champagne",
          "emoji": "🟡",
          "bgColor": "#FFF9C4"
          },
          {
          "letter": "S",
          "word": "Sage Green",
          "emoji": "🟢",
          "bgColor": "#689F38"
          },
          {
          "letter": "M",
          "word": "Mustard",
          "emoji": "🟡",
          "bgColor": "#F9A825"
          },
          {
          "letter": "T",
          "word": "Terracotta",
          "emoji": "🟤",
          "bgColor": "#BF360C"
          },
          {
          "letter": "B",
          "word": "Burgundy",
          "emoji": "🔴",
          "bgColor": "#880E4F"
          },
          {
          "letter": "D",
          "word": "Denim Blue",
          "emoji": "🔵",
          "bgColor": "#1565C0"
          },
          {
          "letter": "L",
          "word": "Lilac",
          "emoji": "🟣",
          "bgColor": "#CE93D8"
          },
          {
          "letter": "A",
          "word": "Apricot",
          "emoji": "🟠",
          "bgColor": "#FF8A65"
          },
          {
          "letter": "H",
          "word": "Honey",
          "emoji": "🟡",
          "bgColor": "#FFA000"
          },
          {
          "letter": "O",
          "word": "Ochre",
          "emoji": "🟡",
          "bgColor": "#827717"
          },
          {
          "letter": "N",
          "word": "Nude",
          "emoji": "🟡",
          "bgColor": "#FFCCBC"
          },
          {
          "letter": "W",
          "word": "Wheat",
          "emoji": "🟡",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "F",
          "word": "Flamingo Pink",
          "emoji": "🩷",
          "bgColor": "#FF80AB"
          },
          {
          "letter": "G",
          "word": "Grape Purple",
          "emoji": "🟣",
          "bgColor": "#4A148C"
          },
          {
          "letter": "I",
          "word": "Ivory",
          "emoji": "⚪",
          "bgColor": "#FFF8E1"
          },
          {
          "letter": "J",
          "word": "Jasmine Yellow",
          "emoji": "🟡",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "K",
          "word": "Kale Green",
          "emoji": "🟢",
          "bgColor": "#33691E"
          },
          {
          "letter": "E",
          "word": "Electric Blue",
          "emoji": "🔵",
          "bgColor": "#2979FF"
          },
          {
          "letter": "V",
          "word": "Vanilla",
          "emoji": "🟡",
          "bgColor": "#FFF9C4"
          },
          {
          "letter": "U",
          "word": "Umber",
          "emoji": "🟤",
          "bgColor": "#5D4037"
          },
          {
          "letter": "X",
          "word": "Xanthic Yellow",
          "emoji": "🟡",
          "bgColor": "#FFD600"
          },
          {
          "letter": "Y",
          "word": "Yellow Ochre",
          "emoji": "🟡",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "Z",
          "word": "Zaffre Blue",
          "emoji": "🔵",
          "bgColor": "#283593"
          },
          {
          "letter": "Q",
          "word": "Quartz Pink",
          "emoji": "🩷",
          "bgColor": "#F48FB1"
          },
          {
          "letter": "C",
          "word": "Charcoal",
          "emoji": "⚫",
          "bgColor": "#37474F"
          },
          {
          "letter": "S",
          "word": "Steel Grey",
          "emoji": "⚪",
          "bgColor": "#455A64"
          },
          {
          "letter": "P",
          "word": "Pearl White",
          "emoji": "⚪",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "R",
          "word": "Ruby Red",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsShapes1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes All Around - Part 1",
          videoId: "colors-shapes-1",
          bgGradient: ["#1565C0","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [
          {
          "letter": "C",
          "word": "Circle",
          "emoji": "⭕",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Square",
          "emoji": "🟥",
          "bgColor": "#1565C0"
          },
          {
          "letter": "T",
          "word": "Triangle",
          "emoji": "🔺",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "R",
          "word": "Rectangle",
          "emoji": "🟦",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "D",
          "word": "Diamond",
          "emoji": "💎",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "S",
          "word": "Star",
          "emoji": "⭐",
          "bgColor": "#FF9800"
          },
          {
          "letter": "H",
          "word": "Heart",
          "emoji": "❤️",
          "bgColor": "#E91E63"
          },
          {
          "letter": "O",
          "word": "Oval",
          "emoji": "🟡",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Pentagon",
          "emoji": "🔵",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "H",
          "word": "Hexagon",
          "emoji": "🔷",
          "bgColor": "#00897B"
          },
          {
          "letter": "O",
          "word": "Octagon",
          "emoji": "🛑",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "A",
          "word": "Arrow",
          "emoji": "➡️",
          "bgColor": "#455A64"
          },
          {
          "letter": "C",
          "word": "Crescent",
          "emoji": "🌙",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "Cross",
          "emoji": "➕",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Sphere",
          "emoji": "🔵",
          "bgColor": "#1565C0"
          },
          {
          "letter": "C",
          "word": "Cube",
          "emoji": "🟦",
          "bgColor": "#FF5722"
          },
          {
          "letter": "C",
          "word": "Cylinder",
          "emoji": "🫙",
          "bgColor": "#795548"
          },
          {
          "letter": "C",
          "word": "Cone",
          "emoji": "🔺",
          "bgColor": "#FF9800"
          },
          {
          "letter": "P",
          "word": "Pyramid",
          "emoji": "🔺",
          "bgColor": "#FFA000"
          },
          {
          "letter": "S",
          "word": "Spiral",
          "emoji": "🌀",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "R",
          "word": "Ring",
          "emoji": "⭕",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "T",
          "word": "Trapezoid",
          "emoji": "🔷",
          "bgColor": "#33691E"
          },
          {
          "letter": "P",
          "word": "Parallelogram",
          "emoji": "🟦",
          "bgColor": "#0288D1"
          },
          {
          "letter": "R",
          "word": "Rhombus",
          "emoji": "🔷",
          "bgColor": "#E91E63"
          },
          {
          "letter": "K",
          "word": "Kite Shape",
          "emoji": "🪁",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "S",
          "word": "Semicircle",
          "emoji": "🌗",
          "bgColor": "#455A64"
          },
          {
          "letter": "E",
          "word": "Ellipse",
          "emoji": "🟡",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "D",
          "word": "Decagon",
          "emoji": "🔵",
          "bgColor": "#00897B"
          },
          {
          "letter": "H",
          "word": "Heptagon",
          "emoji": "🔷",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "N",
          "word": "Nonagon",
          "emoji": "🔵",
          "bgColor": "#D32F2F"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsShapes2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes All Around - Part 2",
          videoId: "colors-shapes-2",
          bgGradient: ["#1976D2","#90CAF9"] as [string, string],
          accentColor: "#1565C0",
          letters: [
          {
          "letter": "S",
          "word": "Sphere",
          "emoji": "🔵",
          "bgColor": "#1565C0"
          },
          {
          "letter": "C",
          "word": "Cube",
          "emoji": "🟦",
          "bgColor": "#FF5722"
          },
          {
          "letter": "P",
          "word": "Prism",
          "emoji": "🔷",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "C",
          "word": "Cylinder",
          "emoji": "🫙",
          "bgColor": "#795548"
          },
          {
          "letter": "C",
          "word": "Cone",
          "emoji": "🔺",
          "bgColor": "#FF9800"
          },
          {
          "letter": "P",
          "word": "Pyramid",
          "emoji": "🔺",
          "bgColor": "#FFA000"
          },
          {
          "letter": "T",
          "word": "Torus",
          "emoji": "⭕",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "D",
          "word": "Dodecahedron",
          "emoji": "🔷",
          "bgColor": "#00897B"
          },
          {
          "letter": "I",
          "word": "Icosahedron",
          "emoji": "🔷",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "O",
          "word": "Octahedron",
          "emoji": "🔷",
          "bgColor": "#E91E63"
          },
          {
          "letter": "T",
          "word": "Tetrahedron",
          "emoji": "🔺",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "H",
          "word": "Hemisphere",
          "emoji": "🌗",
          "bgColor": "#455A64"
          },
          {
          "letter": "E",
          "word": "Ellipsoid",
          "emoji": "🟡",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "R",
          "word": "Rectangular Prism",
          "emoji": "🟦",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "S",
          "word": "Square Pyramid",
          "emoji": "🔺",
          "bgColor": "#BF360C"
          },
          {
          "letter": "T",
          "word": "Triangular Prism",
          "emoji": "🔷",
          "bgColor": "#33691E"
          },
          {
          "letter": "P",
          "word": "Pentagonal Prism",
          "emoji": "🔷",
          "bgColor": "#1565C0"
          },
          {
          "letter": "H",
          "word": "Hexagonal Prism",
          "emoji": "🔷",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "C",
          "word": "Cuboid",
          "emoji": "🟦",
          "bgColor": "#FF5722"
          },
          {
          "letter": "R",
          "word": "Right Angle",
          "emoji": "📐",
          "bgColor": "#263238"
          },
          {
          "letter": "A",
          "word": "Acute Angle",
          "emoji": "📐",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "O",
          "word": "Obtuse Angle",
          "emoji": "📐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "Straight Line",
          "emoji": "📏",
          "bgColor": "#455A64"
          },
          {
          "letter": "P",
          "word": "Parallel Lines",
          "emoji": "📏",
          "bgColor": "#1565C0"
          },
          {
          "letter": "C",
          "word": "Curved Line",
          "emoji": "〰️",
          "bgColor": "#E91E63"
          },
          {
          "letter": "Z",
          "word": "Zigzag Line",
          "emoji": "⚡",
          "bgColor": "#FF9800"
          },
          {
          "letter": "W",
          "word": "Wavy Line",
          "emoji": "🌊",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "D",
          "word": "Dotted Line",
          "emoji": "⋯",
          "bgColor": "#607D8B"
          },
          {
          "letter": "M",
          "word": "Measurement",
          "emoji": "📐",
          "bgColor": "#795548"
          },
          {
          "letter": "G",
          "word": "Grid",
          "emoji": "#️⃣",
          "bgColor": "#263238"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsShapes3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Shapes All Around - Part 3",
          videoId: "colors-shapes-3",
          bgGradient: ["#1E88E5","#64B5F6"] as [string, string],
          accentColor: "#1976D2",
          letters: [
          {
          "letter": "S",
          "word": "Snowflake Shape",
          "emoji": "❄️",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "C",
          "word": "Cloud Shape",
          "emoji": "☁️",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "L",
          "word": "Lightning Bolt",
          "emoji": "⚡",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "Sun Shape",
          "emoji": "☀️",
          "bgColor": "#FF9800"
          },
          {
          "letter": "M",
          "word": "Moon Shape",
          "emoji": "🌙",
          "bgColor": "#FFA000"
          },
          {
          "letter": "R",
          "word": "Raindrop",
          "emoji": "💧",
          "bgColor": "#0288D1"
          },
          {
          "letter": "F",
          "word": "Flower Shape",
          "emoji": "🌸",
          "bgColor": "#E91E63"
          },
          {
          "letter": "L",
          "word": "Leaf Shape",
          "emoji": "🍃",
          "bgColor": "#33691E"
          },
          {
          "letter": "T",
          "word": "Tree Shape",
          "emoji": "🌲",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "B",
          "word": "Butterfly Shape",
          "emoji": "🦋",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "H",
          "word": "Heart Shape",
          "emoji": "💜",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "S",
          "word": "Star Shape",
          "emoji": "🌟",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "D",
          "word": "Diamond Shape",
          "emoji": "💎",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "A",
          "word": "Arrow Shape",
          "emoji": "🏹",
          "bgColor": "#455A64"
          },
          {
          "letter": "C",
          "word": "Crown Shape",
          "emoji": "👑",
          "bgColor": "#FFC107"
          },
          {
          "letter": "K",
          "word": "Key Shape",
          "emoji": "🔑",
          "bgColor": "#795548"
          },
          {
          "letter": "R",
          "word": "Ribbon Shape",
          "emoji": "🎀",
          "bgColor": "#E91E63"
          },
          {
          "letter": "S",
          "word": "Shield Shape",
          "emoji": "🛡️",
          "bgColor": "#263238"
          },
          {
          "letter": "W",
          "word": "Wave Shape",
          "emoji": "🌊",
          "bgColor": "#0288D1"
          },
          {
          "letter": "P",
          "word": "Puzzle Shape",
          "emoji": "🧩",
          "bgColor": "#FF5722"
          },
          {
          "letter": "G",
          "word": "Gear Shape",
          "emoji": "⚙️",
          "bgColor": "#607D8B"
          },
          {
          "letter": "E",
          "word": "Eye Shape",
          "emoji": "👁️",
          "bgColor": "#1A237E"
          },
          {
          "letter": "I",
          "word": "Infinity Shape",
          "emoji": "♾️",
          "bgColor": "#263238"
          },
          {
          "letter": "N",
          "word": "Number Shape",
          "emoji": "🔢",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "O",
          "word": "Oval Shape",
          "emoji": "🥚",
          "bgColor": "#FFA000"
          },
          {
          "letter": "U",
          "word": "Umbrella Shape",
          "emoji": "☂️",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "V",
          "word": "Vine Shape",
          "emoji": "🌿",
          "bgColor": "#33691E"
          },
          {
          "letter": "X",
          "word": "X Shape",
          "emoji": "❌",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "Y",
          "word": "Yin Yang",
          "emoji": "☯️",
          "bgColor": "#263238"
          },
          {
          "letter": "Z",
          "word": "Zigzag Shape",
          "emoji": "⚡",
          "bgColor": "#FF9800"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsNatureColors1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Nature Colors - Part 1",
          videoId: "colors-nature-colors-1",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [
          {
          "letter": "G",
          "word": "Green Leaf",
          "emoji": "🍃",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "B",
          "word": "Blue Sky",
          "emoji": "🔵",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "R",
          "word": "Red Rose",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "Y",
          "word": "Yellow Sun",
          "emoji": "🟡",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "O",
          "word": "Orange Sunset",
          "emoji": "🟠",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "W",
          "word": "White Snow",
          "emoji": "⚪",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "B",
          "word": "Brown Earth",
          "emoji": "🟤",
          "bgColor": "#795548"
          },
          {
          "letter": "P",
          "word": "Pink Flower",
          "emoji": "🩷",
          "bgColor": "#E91E63"
          },
          {
          "letter": "G",
          "word": "Grey Cloud",
          "emoji": "⚪",
          "bgColor": "#607D8B"
          },
          {
          "letter": "B",
          "word": "Blue Ocean",
          "emoji": "🔵",
          "bgColor": "#0288D1"
          },
          {
          "letter": "G",
          "word": "Green Grass",
          "emoji": "🟢",
          "bgColor": "#43A047"
          },
          {
          "letter": "Y",
          "word": "Yellow Banana",
          "emoji": "🟡",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "R",
          "word": "Red Apple",
          "emoji": "🔴",
          "bgColor": "#C62828"
          },
          {
          "letter": "O",
          "word": "Orange Carrot",
          "emoji": "🟠",
          "bgColor": "#FF9800"
          },
          {
          "letter": "P",
          "word": "Purple Grape",
          "emoji": "🟣",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "W",
          "word": "White Daisy",
          "emoji": "⚪",
          "bgColor": "#FFF9C4"
          },
          {
          "letter": "B",
          "word": "Black Night",
          "emoji": "⚫",
          "bgColor": "#263238"
          },
          {
          "letter": "G",
          "word": "Gold Honey",
          "emoji": "🟡",
          "bgColor": "#FFA000"
          },
          {
          "letter": "S",
          "word": "Silver Moon",
          "emoji": "⚪",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "T",
          "word": "Turquoise Water",
          "emoji": "🔵",
          "bgColor": "#00897B"
          },
          {
          "letter": "C",
          "word": "Coral Reef",
          "emoji": "🟠",
          "bgColor": "#FF7043"
          },
          {
          "letter": "I",
          "word": "Indigo Night",
          "emoji": "🟣",
          "bgColor": "#1A237E"
          },
          {
          "letter": "M",
          "word": "Mint Leaf",
          "emoji": "🟢",
          "bgColor": "#00E676"
          },
          {
          "letter": "L",
          "word": "Lavender Field",
          "emoji": "🟣",
          "bgColor": "#7E57C2"
          },
          {
          "letter": "K",
          "word": "Khaki Sand",
          "emoji": "🟡",
          "bgColor": "#827717"
          },
          {
          "letter": "A",
          "word": "Amber Autumn",
          "emoji": "🟠",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "N",
          "word": "Navy Deep",
          "emoji": "🔵",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "D",
          "word": "Dark Forest",
          "emoji": "🟢",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "F",
          "word": "Fiery Red",
          "emoji": "🔴",
          "bgColor": "#FF1744"
          },
          {
          "letter": "E",
          "word": "Emerald Green",
          "emoji": "🟢",
          "bgColor": "#00C853"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsNatureColors2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Nature Colors - Part 2",
          videoId: "colors-nature-colors-2",
          bgGradient: ["#388E3C","#C8E6C9"] as [string, string],
          accentColor: "#2E7D32",
          letters: [
          {
          "letter": "S",
          "word": "Sapphire Blue",
          "emoji": "🔵",
          "bgColor": "#1565C0"
          },
          {
          "letter": "R",
          "word": "Ruby Red",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "E",
          "word": "Emerald Green",
          "emoji": "🟢",
          "bgColor": "#00C853"
          },
          {
          "letter": "A",
          "word": "Amethyst Purple",
          "emoji": "🟣",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "T",
          "word": "Topaz Yellow",
          "emoji": "🟡",
          "bgColor": "#FFA000"
          },
          {
          "letter": "O",
          "word": "Opal White",
          "emoji": "⚪",
          "bgColor": "#ECEFF1"
          },
          {
          "letter": "D",
          "word": "Diamond Clear",
          "emoji": "💎",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "G",
          "word": "Garnet Red",
          "emoji": "🔴",
          "bgColor": "#B71C1C"
          },
          {
          "letter": "P",
          "word": "Pearl White",
          "emoji": "⚪",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "C",
          "word": "Citrine Yellow",
          "emoji": "🟡",
          "bgColor": "#FFD600"
          },
          {
          "letter": "J",
          "word": "Jade Green",
          "emoji": "🟢",
          "bgColor": "#00897B"
          },
          {
          "letter": "L",
          "word": "Lapis Blue",
          "emoji": "🔵",
          "bgColor": "#1A237E"
          },
          {
          "letter": "M",
          "word": "Moonstone",
          "emoji": "⚪",
          "bgColor": "#CFD8DC"
          },
          {
          "letter": "N",
          "word": "Neon Pink",
          "emoji": "🩷",
          "bgColor": "#FF4081"
          },
          {
          "letter": "B",
          "word": "Bright Orange",
          "emoji": "🟠",
          "bgColor": "#FF6D00"
          },
          {
          "letter": "F",
          "word": "Fern Green",
          "emoji": "🟢",
          "bgColor": "#33691E"
          },
          {
          "letter": "H",
          "word": "Hot Red",
          "emoji": "🔴",
          "bgColor": "#FF1744"
          },
          {
          "letter": "I",
          "word": "Ice White",
          "emoji": "⚪",
          "bgColor": "#E3F2FD"
          },
          {
          "letter": "K",
          "word": "Koi Orange",
          "emoji": "🟠",
          "bgColor": "#FF9800"
          },
          {
          "letter": "W",
          "word": "Warm Gold",
          "emoji": "🟡",
          "bgColor": "#FFB300"
          },
          {
          "letter": "V",
          "word": "Vivid Blue",
          "emoji": "🔵",
          "bgColor": "#2979FF"
          },
          {
          "letter": "U",
          "word": "Ultra Violet",
          "emoji": "🟣",
          "bgColor": "#AA00FF"
          },
          {
          "letter": "X",
          "word": "Xanadu",
          "emoji": "🟢",
          "bgColor": "#689F38"
          },
          {
          "letter": "Y",
          "word": "Yarn Pink",
          "emoji": "🩷",
          "bgColor": "#F48FB1"
          },
          {
          "letter": "Z",
          "word": "Zenith Blue",
          "emoji": "🔵",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "Q",
          "word": "Quartz Rose",
          "emoji": "🩷",
          "bgColor": "#F06292"
          },
          {
          "letter": "C",
          "word": "Cherry Blossom",
          "emoji": "🩷",
          "bgColor": "#F8BBD0"
          },
          {
          "letter": "S",
          "word": "Sunset Gold",
          "emoji": "🟡",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "T",
          "word": "Tropical Green",
          "emoji": "🟢",
          "bgColor": "#00E676"
          },
          {
          "letter": "B",
          "word": "Berry Purple",
          "emoji": "🟣",
          "bgColor": "#880E4F"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsBrightColors1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bright Colors - Part 1",
          videoId: "colors-bright-colors-1",
          bgGradient: ["#FF6F00","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [
          {
          "letter": "N",
          "word": "Neon Yellow",
          "emoji": "🟡",
          "bgColor": "#FFEA00"
          },
          {
          "letter": "N",
          "word": "Neon Green",
          "emoji": "🟢",
          "bgColor": "#76FF03"
          },
          {
          "letter": "N",
          "word": "Neon Pink",
          "emoji": "🩷",
          "bgColor": "#FF4081"
          },
          {
          "letter": "N",
          "word": "Neon Blue",
          "emoji": "🔵",
          "bgColor": "#2979FF"
          },
          {
          "letter": "N",
          "word": "Neon Orange",
          "emoji": "🟠",
          "bgColor": "#FF6D00"
          },
          {
          "letter": "N",
          "word": "Neon Purple",
          "emoji": "🟣",
          "bgColor": "#D500F9"
          },
          {
          "letter": "E",
          "word": "Electric Blue",
          "emoji": "🔵",
          "bgColor": "#2962FF"
          },
          {
          "letter": "E",
          "word": "Electric Green",
          "emoji": "🟢",
          "bgColor": "#00E676"
          },
          {
          "letter": "F",
          "word": "Fluorescent Yellow",
          "emoji": "🟡",
          "bgColor": "#FFFF00"
          },
          {
          "letter": "F",
          "word": "Fluorescent Pink",
          "emoji": "🩷",
          "bgColor": "#FF80AB"
          },
          {
          "letter": "B",
          "word": "Bright Red",
          "emoji": "🔴",
          "bgColor": "#FF1744"
          },
          {
          "letter": "B",
          "word": "Bright Blue",
          "emoji": "🔵",
          "bgColor": "#448AFF"
          },
          {
          "letter": "B",
          "word": "Bright Green",
          "emoji": "🟢",
          "bgColor": "#00E676"
          },
          {
          "letter": "B",
          "word": "Bright Yellow",
          "emoji": "🟡",
          "bgColor": "#FFEA00"
          },
          {
          "letter": "B",
          "word": "Bright Orange",
          "emoji": "🟠",
          "bgColor": "#FF6D00"
          },
          {
          "letter": "V",
          "word": "Vivid Red",
          "emoji": "🔴",
          "bgColor": "#D50000"
          },
          {
          "letter": "V",
          "word": "Vivid Blue",
          "emoji": "🔵",
          "bgColor": "#304FFE"
          },
          {
          "letter": "V",
          "word": "Vivid Green",
          "emoji": "🟢",
          "bgColor": "#00C853"
          },
          {
          "letter": "V",
          "word": "Vivid Purple",
          "emoji": "🟣",
          "bgColor": "#AA00FF"
          },
          {
          "letter": "V",
          "word": "Vivid Orange",
          "emoji": "🟠",
          "bgColor": "#FF6D00"
          },
          {
          "letter": "H",
          "word": "Hot Pink",
          "emoji": "🩷",
          "bgColor": "#FF4081"
          },
          {
          "letter": "H",
          "word": "Hot Red",
          "emoji": "🔴",
          "bgColor": "#FF1744"
          },
          {
          "letter": "L",
          "word": "Lime",
          "emoji": "🟢",
          "bgColor": "#C6FF00"
          },
          {
          "letter": "C",
          "word": "Candy Pink",
          "emoji": "🩷",
          "bgColor": "#F50057"
          },
          {
          "letter": "S",
          "word": "Shocking Pink",
          "emoji": "🩷",
          "bgColor": "#FF4081"
          },
          {
          "letter": "A",
          "word": "Acid Green",
          "emoji": "🟢",
          "bgColor": "#C6FF00"
          },
          {
          "letter": "R",
          "word": "Radical Red",
          "emoji": "🔴",
          "bgColor": "#FF1744"
          },
          {
          "letter": "T",
          "word": "Tropical Blue",
          "emoji": "🔵",
          "bgColor": "#00B0FF"
          },
          {
          "letter": "G",
          "word": "Glow Yellow",
          "emoji": "🟡",
          "bgColor": "#FFD600"
          },
          {
          "letter": "P",
          "word": "Power Purple",
          "emoji": "🟣",
          "bgColor": "#7C4DFF"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsBrightColors2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Bright Colors - Part 2",
          videoId: "colors-bright-colors-2",
          bgGradient: ["#6A1B9A","#E1BEE7"] as [string, string],
          accentColor: "#4A148C",
          letters: [
          {
          "letter": "P",
          "word": "Pastel Pink",
          "emoji": "🩷",
          "bgColor": "#F8BBD0"
          },
          {
          "letter": "P",
          "word": "Pastel Blue",
          "emoji": "🔵",
          "bgColor": "#BBDEFB"
          },
          {
          "letter": "P",
          "word": "Pastel Green",
          "emoji": "🟢",
          "bgColor": "#C8E6C9"
          },
          {
          "letter": "P",
          "word": "Pastel Yellow",
          "emoji": "🟡",
          "bgColor": "#FFF9C4"
          },
          {
          "letter": "P",
          "word": "Pastel Purple",
          "emoji": "🟣",
          "bgColor": "#E1BEE7"
          },
          {
          "letter": "P",
          "word": "Pastel Orange",
          "emoji": "🟠",
          "bgColor": "#FFE0B2"
          },
          {
          "letter": "S",
          "word": "Soft Pink",
          "emoji": "🩷",
          "bgColor": "#FCE4EC"
          },
          {
          "letter": "S",
          "word": "Soft Blue",
          "emoji": "🔵",
          "bgColor": "#E3F2FD"
          },
          {
          "letter": "S",
          "word": "Soft Green",
          "emoji": "🟢",
          "bgColor": "#E8F5E9"
          },
          {
          "letter": "S",
          "word": "Soft Yellow",
          "emoji": "🟡",
          "bgColor": "#FFFDE7"
          },
          {
          "letter": "L",
          "word": "Light Grey",
          "emoji": "⚪",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "L",
          "word": "Light Blue",
          "emoji": "🔵",
          "bgColor": "#B3E5FC"
          },
          {
          "letter": "L",
          "word": "Light Green",
          "emoji": "🟢",
          "bgColor": "#B9F6CA"
          },
          {
          "letter": "L",
          "word": "Light Pink",
          "emoji": "🩷",
          "bgColor": "#F8BBD0"
          },
          {
          "letter": "L",
          "word": "Light Purple",
          "emoji": "🟣",
          "bgColor": "#E1BEE7"
          },
          {
          "letter": "D",
          "word": "Dark Red",
          "emoji": "🔴",
          "bgColor": "#B71C1C"
          },
          {
          "letter": "D",
          "word": "Dark Blue",
          "emoji": "🔵",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "D",
          "word": "Dark Green",
          "emoji": "🟢",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "D",
          "word": "Dark Purple",
          "emoji": "🟣",
          "bgColor": "#4A148C"
          },
          {
          "letter": "D",
          "word": "Dark Orange",
          "emoji": "🟠",
          "bgColor": "#E65100"
          },
          {
          "letter": "M",
          "word": "Matte Black",
          "emoji": "⚫",
          "bgColor": "#212121"
          },
          {
          "letter": "M",
          "word": "Matte White",
          "emoji": "⚪",
          "bgColor": "#FAFAFA"
          },
          {
          "letter": "M",
          "word": "Matte Grey",
          "emoji": "⚪",
          "bgColor": "#9E9E9E"
          },
          {
          "letter": "G",
          "word": "Glitter Gold",
          "emoji": "🟡",
          "bgColor": "#FFD600"
          },
          {
          "letter": "G",
          "word": "Glitter Silver",
          "emoji": "⚪",
          "bgColor": "#CFD8DC"
          },
          {
          "letter": "R",
          "word": "Rose Gold",
          "emoji": "🩷",
          "bgColor": "#FF80AB"
          },
          {
          "letter": "C",
          "word": "Chrome Silver",
          "emoji": "⚪",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "B",
          "word": "Bronze",
          "emoji": "🟤",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "C",
          "word": "Copper",
          "emoji": "🟤",
          "bgColor": "#BF360C"
          },
          {
          "letter": "T",
          "word": "Titanium",
          "emoji": "⚪",
          "bgColor": "#607D8B"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsNatureColors3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Nature Colors - Part 3",
          videoId: "colors-nature-colors-3",
          bgGradient: ["#43A047","#E8F5E9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [
          {
          "letter": "G",
          "word": "Green",
          "emoji": "🟢",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "E",
          "word": "Emerald",
          "emoji": "💎",
          "bgColor": "#00695C"
          },
          {
          "letter": "O",
          "word": "Olive",
          "emoji": "🟩",
          "bgColor": "#558B2F"
          },
          {
          "letter": "M",
          "word": "Moss",
          "emoji": "🟢",
          "bgColor": "#37474F"
          },
          {
          "letter": "J",
          "word": "Jade",
          "emoji": "💎",
          "bgColor": "#004D40"
          },
          {
          "letter": "F",
          "word": "Forest",
          "emoji": "🟩",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "S",
          "word": "Sage",
          "emoji": "🟢",
          "bgColor": "#558B2F"
          },
          {
          "letter": "T",
          "word": "Teal",
          "emoji": "🔵",
          "bgColor": "#00796B"
          },
          {
          "letter": "M",
          "word": "Mint",
          "emoji": "🟢",
          "bgColor": "#00897B"
          },
          {
          "letter": "C",
          "word": "Cedar",
          "emoji": "🟤",
          "bgColor": "#3E2723"
          },
          {
          "letter": "L",
          "word": "Leaf",
          "emoji": "🟩",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Spring",
          "emoji": "🌈",
          "bgColor": "#558B2F"
          },
          {
          "letter": "A",
          "word": "Avocado",
          "emoji": "🟢",
          "bgColor": "#558B2F"
          },
          {
          "letter": "K",
          "word": "Khaki",
          "emoji": "🟨",
          "bgColor": "#9FA8DA"
          },
          {
          "letter": "P",
          "word": "Pistachio",
          "emoji": "🟢",
          "bgColor": "#689F38"
          },
          {
          "letter": "W",
          "word": "Willow",
          "emoji": "🟩",
          "bgColor": "#616161"
          },
          {
          "letter": "H",
          "word": "Hunter",
          "emoji": "🟢",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "B",
          "word": "Basil",
          "emoji": "🟢",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "S",
          "word": "Shamrock",
          "emoji": "🟢",
          "bgColor": "#33691E"
          },
          {
          "letter": "N",
          "word": "Nature",
          "emoji": "🌈",
          "bgColor": "#558B2F"
          },
          {
          "letter": "R",
          "word": "Rainforest",
          "emoji": "🟩",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "V",
          "word": "Verdant",
          "emoji": "🟢",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "E",
          "word": "Earth",
          "emoji": "🟤",
          "bgColor": "#33691E"
          },
          {
          "letter": "D",
          "word": "Dark",
          "emoji": "🟢",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "L",
          "word": "Light",
          "emoji": "🟢",
          "bgColor": "#9CCC65"
          },
          {
          "letter": "B",
          "word": "Bright",
          "emoji": "🟢",
          "bgColor": "#7CB342"
          },
          {
          "letter": "D",
          "word": "Deep",
          "emoji": "🟢",
          "bgColor": "#033D00"
          },
          {
          "letter": "S",
          "word": "Soft",
          "emoji": "🟢",
          "bgColor": "#C5E1A5"
          },
          {
          "letter": "R",
          "word": "Rich",
          "emoji": "🟢",
          "bgColor": "#558B2F"
          },
          {
          "letter": "V",
          "word": "Vibrant",
          "emoji": "🌈",
          "bgColor": "#7CB342"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsWarmColors1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Warm Colors - Part 1",
          videoId: "colors-warm-colors-1",
          bgGradient: ["#FF6F00","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [
          {
          "letter": "R",
          "word": "Red",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "O",
          "word": "Orange",
          "emoji": "🟠",
          "bgColor": "#E65100"
          },
          {
          "letter": "Y",
          "word": "Yellow",
          "emoji": "🟡",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "G",
          "word": "Gold",
          "emoji": "🥇",
          "bgColor": "#FFA000"
          },
          {
          "letter": "C",
          "word": "Coral",
          "emoji": "🟠",
          "bgColor": "#FF5252"
          },
          {
          "letter": "S",
          "word": "Salmon",
          "emoji": "🩷",
          "bgColor": "#FF7043"
          },
          {
          "letter": "P",
          "word": "Peach",
          "emoji": "🟠",
          "bgColor": "#FF8A65"
          },
          {
          "letter": "T",
          "word": "Tangerine",
          "emoji": "🟠",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "A",
          "word": "Amber",
          "emoji": "🟨",
          "bgColor": "#FFA000"
          },
          {
          "letter": "B",
          "word": "Bronze",
          "emoji": "🟤",
          "bgColor": "#CD7F32"
          },
          {
          "letter": "F",
          "word": "Flame",
          "emoji": "🔴",
          "bgColor": "#FF1744"
          },
          {
          "letter": "S",
          "word": "Sunset",
          "emoji": "🌈",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "F",
          "word": "Fire",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Marmalade",
          "emoji": "🟠",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "T",
          "word": "Terracotta",
          "emoji": "🟠",
          "bgColor": "#E64A19"
          },
          {
          "letter": "R",
          "word": "Rust",
          "emoji": "🟤",
          "bgColor": "#C62828"
          },
          {
          "letter": "B",
          "word": "Brick",
          "emoji": "🟥",
          "bgColor": "#D84315"
          },
          {
          "letter": "H",
          "word": "Honey",
          "emoji": "🟡",
          "bgColor": "#FFA000"
          },
          {
          "letter": "C",
          "word": "Copper",
          "emoji": "🟤",
          "bgColor": "#BF360C"
          },
          {
          "letter": "W",
          "word": "Warm",
          "emoji": "🔴",
          "bgColor": "#FF5252"
          },
          {
          "letter": "S",
          "word": "Saffron",
          "emoji": "🟨",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "L",
          "word": "Lava",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Blaze",
          "emoji": "🔴",
          "bgColor": "#FF1744"
          },
          {
          "letter": "G",
          "word": "Glow",
          "emoji": "🟠",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "H",
          "word": "Heat",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "R",
          "word": "Radiant",
          "emoji": "🌈",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "W",
          "word": "Wheat",
          "emoji": "🟡",
          "bgColor": "#FDD835"
          },
          {
          "letter": "S",
          "word": "Spice",
          "emoji": "🟠",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "T",
          "word": "Toast",
          "emoji": "🟤",
          "bgColor": "#A1887F"
          },
          {
          "letter": "V",
          "word": "Vibrant",
          "emoji": "🌈",
          "bgColor": "#FF5252"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsWarmColors2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Warm Colors - Part 2",
          videoId: "colors-warm-colors-2",
          bgGradient: ["#FF8F00","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [
          {
          "letter": "R",
          "word": "Red",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "O",
          "word": "Orange",
          "emoji": "🟠",
          "bgColor": "#E65100"
          },
          {
          "letter": "Y",
          "word": "Yellow",
          "emoji": "🟡",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "G",
          "word": "Gold",
          "emoji": "🥇",
          "bgColor": "#FFA000"
          },
          {
          "letter": "C",
          "word": "Coral",
          "emoji": "🟠",
          "bgColor": "#FF5252"
          },
          {
          "letter": "S",
          "word": "Salmon",
          "emoji": "🩷",
          "bgColor": "#FF7043"
          },
          {
          "letter": "P",
          "word": "Peach",
          "emoji": "🟠",
          "bgColor": "#FF8A65"
          },
          {
          "letter": "T",
          "word": "Tangerine",
          "emoji": "🟠",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "A",
          "word": "Amber",
          "emoji": "🟨",
          "bgColor": "#FFA000"
          },
          {
          "letter": "B",
          "word": "Bronze",
          "emoji": "🟤",
          "bgColor": "#CD7F32"
          },
          {
          "letter": "F",
          "word": "Flame",
          "emoji": "🔴",
          "bgColor": "#FF1744"
          },
          {
          "letter": "S",
          "word": "Sunset",
          "emoji": "🌈",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "F",
          "word": "Fire",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Marmalade",
          "emoji": "🟠",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "T",
          "word": "Terracotta",
          "emoji": "🟠",
          "bgColor": "#E64A19"
          },
          {
          "letter": "R",
          "word": "Rust",
          "emoji": "🟤",
          "bgColor": "#C62828"
          },
          {
          "letter": "B",
          "word": "Brick",
          "emoji": "🟥",
          "bgColor": "#D84315"
          },
          {
          "letter": "H",
          "word": "Honey",
          "emoji": "🟡",
          "bgColor": "#FFA000"
          },
          {
          "letter": "C",
          "word": "Copper",
          "emoji": "🟤",
          "bgColor": "#BF360C"
          },
          {
          "letter": "W",
          "word": "Warm",
          "emoji": "🔴",
          "bgColor": "#FF5252"
          },
          {
          "letter": "S",
          "word": "Saffron",
          "emoji": "🟨",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "L",
          "word": "Lava",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Blaze",
          "emoji": "🔴",
          "bgColor": "#FF1744"
          },
          {
          "letter": "G",
          "word": "Glow",
          "emoji": "🟠",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "H",
          "word": "Heat",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "R",
          "word": "Radiant",
          "emoji": "🌈",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "W",
          "word": "Wheat",
          "emoji": "🟡",
          "bgColor": "#FDD835"
          },
          {
          "letter": "S",
          "word": "Spice",
          "emoji": "🟠",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "T",
          "word": "Toast",
          "emoji": "🟤",
          "bgColor": "#A1887F"
          },
          {
          "letter": "V",
          "word": "Vibrant",
          "emoji": "🌈",
          "bgColor": "#FF5252"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsWarmColors3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Warm Colors - Part 3",
          videoId: "colors-warm-colors-3",
          bgGradient: ["#FFA000","#FFECB3"] as [string, string],
          accentColor: "#FF8F00",
          letters: [
          {
          "letter": "R",
          "word": "Red",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "O",
          "word": "Orange",
          "emoji": "🟠",
          "bgColor": "#E65100"
          },
          {
          "letter": "Y",
          "word": "Yellow",
          "emoji": "🟡",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "G",
          "word": "Gold",
          "emoji": "🥇",
          "bgColor": "#FFA000"
          },
          {
          "letter": "C",
          "word": "Coral",
          "emoji": "🟠",
          "bgColor": "#FF5252"
          },
          {
          "letter": "S",
          "word": "Salmon",
          "emoji": "🩷",
          "bgColor": "#FF7043"
          },
          {
          "letter": "P",
          "word": "Peach",
          "emoji": "🟠",
          "bgColor": "#FF8A65"
          },
          {
          "letter": "T",
          "word": "Tangerine",
          "emoji": "🟠",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "A",
          "word": "Amber",
          "emoji": "🟨",
          "bgColor": "#FFA000"
          },
          {
          "letter": "B",
          "word": "Bronze",
          "emoji": "🟤",
          "bgColor": "#CD7F32"
          },
          {
          "letter": "F",
          "word": "Flame",
          "emoji": "🔴",
          "bgColor": "#FF1744"
          },
          {
          "letter": "S",
          "word": "Sunset",
          "emoji": "🌈",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "F",
          "word": "Fire",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Marmalade",
          "emoji": "🟠",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "T",
          "word": "Terracotta",
          "emoji": "🟠",
          "bgColor": "#E64A19"
          },
          {
          "letter": "R",
          "word": "Rust",
          "emoji": "🟤",
          "bgColor": "#C62828"
          },
          {
          "letter": "B",
          "word": "Brick",
          "emoji": "🟥",
          "bgColor": "#D84315"
          },
          {
          "letter": "H",
          "word": "Honey",
          "emoji": "🟡",
          "bgColor": "#FFA000"
          },
          {
          "letter": "C",
          "word": "Copper",
          "emoji": "🟤",
          "bgColor": "#BF360C"
          },
          {
          "letter": "W",
          "word": "Warm",
          "emoji": "🔴",
          "bgColor": "#FF5252"
          },
          {
          "letter": "S",
          "word": "Saffron",
          "emoji": "🟨",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "L",
          "word": "Lava",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Blaze",
          "emoji": "🔴",
          "bgColor": "#FF1744"
          },
          {
          "letter": "G",
          "word": "Glow",
          "emoji": "🟠",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "H",
          "word": "Heat",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "R",
          "word": "Radiant",
          "emoji": "🌈",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "W",
          "word": "Wheat",
          "emoji": "🟡",
          "bgColor": "#FDD835"
          },
          {
          "letter": "S",
          "word": "Spice",
          "emoji": "🟠",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "T",
          "word": "Toast",
          "emoji": "🟤",
          "bgColor": "#A1887F"
          },
          {
          "letter": "V",
          "word": "Vibrant",
          "emoji": "🌈",
          "bgColor": "#FF5252"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsCoolColors1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cool Colors - Part 1",
          videoId: "colors-cool-colors-1",
          bgGradient: ["#0277BD","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [
          {
          "letter": "B",
          "word": "Blue",
          "emoji": "🔵",
          "bgColor": "#0277BD"
          },
          {
          "letter": "C",
          "word": "Cyan",
          "emoji": "🔵",
          "bgColor": "#00ACC1"
          },
          {
          "letter": "I",
          "word": "Indigo",
          "emoji": "🔵",
          "bgColor": "#1A237E"
          },
          {
          "letter": "P",
          "word": "Purple",
          "emoji": "🟣",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "V",
          "word": "Violet",
          "emoji": "🟣",
          "bgColor": "#4527A0"
          },
          {
          "letter": "L",
          "word": "Lavender",
          "emoji": "🟣",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "T",
          "word": "Teal",
          "emoji": "🔵",
          "bgColor": "#00796B"
          },
          {
          "letter": "S",
          "word": "Sky",
          "emoji": "🔵",
          "bgColor": "#01579B"
          },
          {
          "letter": "I",
          "word": "Ice",
          "emoji": "⚪",
          "bgColor": "#B3E5FC"
          },
          {
          "letter": "M",
          "word": "Mint",
          "emoji": "🟢",
          "bgColor": "#00897B"
          },
          {
          "letter": "A",
          "word": "Azure",
          "emoji": "🔵",
          "bgColor": "#0277BD"
          },
          {
          "letter": "S",
          "word": "Slate",
          "emoji": "🟦",
          "bgColor": "#37474F"
          },
          {
          "letter": "C",
          "word": "Cool",
          "emoji": "🔵",
          "bgColor": "#01579B"
          },
          {
          "letter": "F",
          "word": "Frost",
          "emoji": "⚪",
          "bgColor": "#90CAF9"
          },
          {
          "letter": "D",
          "word": "Denim",
          "emoji": "🔵",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "M",
          "word": "Mauve",
          "emoji": "🟣",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "P",
          "word": "Periwinkle",
          "emoji": "🟣",
          "bgColor": "#6C63FF"
          },
          {
          "letter": "S",
          "word": "Steel",
          "emoji": "⚪",
          "bgColor": "#455A64"
          },
          {
          "letter": "G",
          "word": "Gray",
          "emoji": "⚪",
          "bgColor": "#757575"
          },
          {
          "letter": "S",
          "word": "Silver",
          "emoji": "🥈",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "B",
          "word": "Bluebell",
          "emoji": "🔵",
          "bgColor": "#1565C0"
          },
          {
          "letter": "N",
          "word": "Navy",
          "emoji": "🔵",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "T",
          "word": "Turquoise",
          "emoji": "🔵",
          "bgColor": "#00838F"
          },
          {
          "letter": "C",
          "word": "Cornflower",
          "emoji": "🔵",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "O",
          "word": "Ocean",
          "emoji": "🔵",
          "bgColor": "#0277BD"
          },
          {
          "letter": "W",
          "word": "Water",
          "emoji": "🔵",
          "bgColor": "#0288D1"
          },
          {
          "letter": "S",
          "word": "Sea",
          "emoji": "🔵",
          "bgColor": "#00838F"
          },
          {
          "letter": "B",
          "word": "Breeze",
          "emoji": "🔵",
          "bgColor": "#4FC3F7"
          },
          {
          "letter": "D",
          "word": "Deep",
          "emoji": "🔵",
          "bgColor": "#01579B"
          },
          {
          "letter": "F",
          "word": "Frosty",
          "emoji": "⚪",
          "bgColor": "#81D4FA"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsCoolColors2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cool Colors - Part 2",
          videoId: "colors-cool-colors-2",
          bgGradient: ["#0288D1","#81D4FA"] as [string, string],
          accentColor: "#0277BD",
          letters: [
          {
          "letter": "B",
          "word": "Blue",
          "emoji": "🔵",
          "bgColor": "#0277BD"
          },
          {
          "letter": "C",
          "word": "Cyan",
          "emoji": "🔵",
          "bgColor": "#00ACC1"
          },
          {
          "letter": "I",
          "word": "Indigo",
          "emoji": "🔵",
          "bgColor": "#1A237E"
          },
          {
          "letter": "P",
          "word": "Purple",
          "emoji": "🟣",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "V",
          "word": "Violet",
          "emoji": "🟣",
          "bgColor": "#4527A0"
          },
          {
          "letter": "L",
          "word": "Lavender",
          "emoji": "🟣",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "T",
          "word": "Teal",
          "emoji": "🔵",
          "bgColor": "#00796B"
          },
          {
          "letter": "S",
          "word": "Sky",
          "emoji": "🔵",
          "bgColor": "#01579B"
          },
          {
          "letter": "I",
          "word": "Ice",
          "emoji": "⚪",
          "bgColor": "#B3E5FC"
          },
          {
          "letter": "M",
          "word": "Mint",
          "emoji": "🟢",
          "bgColor": "#00897B"
          },
          {
          "letter": "A",
          "word": "Azure",
          "emoji": "🔵",
          "bgColor": "#0277BD"
          },
          {
          "letter": "S",
          "word": "Slate",
          "emoji": "🟦",
          "bgColor": "#37474F"
          },
          {
          "letter": "C",
          "word": "Cool",
          "emoji": "🔵",
          "bgColor": "#01579B"
          },
          {
          "letter": "F",
          "word": "Frost",
          "emoji": "⚪",
          "bgColor": "#90CAF9"
          },
          {
          "letter": "D",
          "word": "Denim",
          "emoji": "🔵",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "M",
          "word": "Mauve",
          "emoji": "🟣",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "P",
          "word": "Periwinkle",
          "emoji": "🟣",
          "bgColor": "#6C63FF"
          },
          {
          "letter": "S",
          "word": "Steel",
          "emoji": "⚪",
          "bgColor": "#455A64"
          },
          {
          "letter": "G",
          "word": "Gray",
          "emoji": "⚪",
          "bgColor": "#757575"
          },
          {
          "letter": "S",
          "word": "Silver",
          "emoji": "🥈",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "B",
          "word": "Bluebell",
          "emoji": "🔵",
          "bgColor": "#1565C0"
          },
          {
          "letter": "N",
          "word": "Navy",
          "emoji": "🔵",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "T",
          "word": "Turquoise",
          "emoji": "🔵",
          "bgColor": "#00838F"
          },
          {
          "letter": "C",
          "word": "Cornflower",
          "emoji": "🔵",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "O",
          "word": "Ocean",
          "emoji": "🔵",
          "bgColor": "#0277BD"
          },
          {
          "letter": "W",
          "word": "Water",
          "emoji": "🔵",
          "bgColor": "#0288D1"
          },
          {
          "letter": "S",
          "word": "Sea",
          "emoji": "🔵",
          "bgColor": "#00838F"
          },
          {
          "letter": "B",
          "word": "Breeze",
          "emoji": "🔵",
          "bgColor": "#4FC3F7"
          },
          {
          "letter": "D",
          "word": "Deep",
          "emoji": "🔵",
          "bgColor": "#01579B"
          },
          {
          "letter": "F",
          "word": "Frosty",
          "emoji": "⚪",
          "bgColor": "#81D4FA"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsCoolColors3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Cool Colors - Part 3",
          videoId: "colors-cool-colors-3",
          bgGradient: ["#039BE5","#4FC3F7"] as [string, string],
          accentColor: "#0288D1",
          letters: [
          {
          "letter": "B",
          "word": "Blue",
          "emoji": "🔵",
          "bgColor": "#0277BD"
          },
          {
          "letter": "C",
          "word": "Cyan",
          "emoji": "🔵",
          "bgColor": "#00ACC1"
          },
          {
          "letter": "I",
          "word": "Indigo",
          "emoji": "🔵",
          "bgColor": "#1A237E"
          },
          {
          "letter": "P",
          "word": "Purple",
          "emoji": "🟣",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "V",
          "word": "Violet",
          "emoji": "🟣",
          "bgColor": "#4527A0"
          },
          {
          "letter": "L",
          "word": "Lavender",
          "emoji": "🟣",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "T",
          "word": "Teal",
          "emoji": "🔵",
          "bgColor": "#00796B"
          },
          {
          "letter": "S",
          "word": "Sky",
          "emoji": "🔵",
          "bgColor": "#01579B"
          },
          {
          "letter": "I",
          "word": "Ice",
          "emoji": "⚪",
          "bgColor": "#B3E5FC"
          },
          {
          "letter": "M",
          "word": "Mint",
          "emoji": "🟢",
          "bgColor": "#00897B"
          },
          {
          "letter": "A",
          "word": "Azure",
          "emoji": "🔵",
          "bgColor": "#0277BD"
          },
          {
          "letter": "S",
          "word": "Slate",
          "emoji": "🟦",
          "bgColor": "#37474F"
          },
          {
          "letter": "C",
          "word": "Cool",
          "emoji": "🔵",
          "bgColor": "#01579B"
          },
          {
          "letter": "F",
          "word": "Frost",
          "emoji": "⚪",
          "bgColor": "#90CAF9"
          },
          {
          "letter": "D",
          "word": "Denim",
          "emoji": "🔵",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "M",
          "word": "Mauve",
          "emoji": "🟣",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "P",
          "word": "Periwinkle",
          "emoji": "🟣",
          "bgColor": "#6C63FF"
          },
          {
          "letter": "S",
          "word": "Steel",
          "emoji": "⚪",
          "bgColor": "#455A64"
          },
          {
          "letter": "G",
          "word": "Gray",
          "emoji": "⚪",
          "bgColor": "#757575"
          },
          {
          "letter": "S",
          "word": "Silver",
          "emoji": "🥈",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "B",
          "word": "Bluebell",
          "emoji": "🔵",
          "bgColor": "#1565C0"
          },
          {
          "letter": "N",
          "word": "Navy",
          "emoji": "🔵",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "T",
          "word": "Turquoise",
          "emoji": "🔵",
          "bgColor": "#00838F"
          },
          {
          "letter": "C",
          "word": "Cornflower",
          "emoji": "🔵",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "O",
          "word": "Ocean",
          "emoji": "🔵",
          "bgColor": "#0277BD"
          },
          {
          "letter": "W",
          "word": "Water",
          "emoji": "🔵",
          "bgColor": "#0288D1"
          },
          {
          "letter": "S",
          "word": "Sea",
          "emoji": "🔵",
          "bgColor": "#00838F"
          },
          {
          "letter": "B",
          "word": "Breeze",
          "emoji": "🔵",
          "bgColor": "#4FC3F7"
          },
          {
          "letter": "D",
          "word": "Deep",
          "emoji": "🔵",
          "bgColor": "#01579B"
          },
          {
          "letter": "F",
          "word": "Frosty",
          "emoji": "⚪",
          "bgColor": "#81D4FA"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Colors3dShapes1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "3D Shapes - Part 1",
          videoId: "colors-3d-shapes-1",
          bgGradient: ["#37474F","#90A4AE"] as [string, string],
          accentColor: "#263238",
          letters: [
          {
          "letter": "C",
          "word": "Cube",
          "emoji": "🟥",
          "bgColor": "#37474F"
          },
          {
          "letter": "S",
          "word": "Sphere",
          "emoji": "⚫",
          "bgColor": "#263238"
          },
          {
          "letter": "P",
          "word": "Pyramid",
          "emoji": "🔺",
          "bgColor": "#455A64"
          },
          {
          "letter": "C",
          "word": "Cylinder",
          "emoji": "⭕",
          "bgColor": "#546E7A"
          },
          {
          "letter": "C",
          "word": "Cone",
          "emoji": "🔺",
          "bgColor": "#37474F"
          },
          {
          "letter": "D",
          "word": "Diamond",
          "emoji": "💎",
          "bgColor": "#263238"
          },
          {
          "letter": "R",
          "word": "Rectangle",
          "emoji": "🟦",
          "bgColor": "#455A64"
          },
          {
          "letter": "T",
          "word": "Triangle",
          "emoji": "🔺",
          "bgColor": "#37474F"
          },
          {
          "letter": "O",
          "word": "Octahedron",
          "emoji": "💎",
          "bgColor": "#546E7A"
          },
          {
          "letter": "T",
          "word": "Tetrahedron",
          "emoji": "🔺",
          "bgColor": "#455A64"
          },
          {
          "letter": "P",
          "word": "Prism",
          "emoji": "🔷",
          "bgColor": "#37474F"
          },
          {
          "letter": "D",
          "word": "Dodecahedron",
          "emoji": "💎",
          "bgColor": "#263238"
          },
          {
          "letter": "I",
          "word": "Icosahedron",
          "emoji": "💎",
          "bgColor": "#455A64"
          },
          {
          "letter": "C",
          "word": "Cube",
          "emoji": "🟥",
          "bgColor": "#546E7A"
          },
          {
          "letter": "S",
          "word": "Square",
          "emoji": "🟨",
          "bgColor": "#37474F"
          },
          {
          "letter": "C",
          "word": "Circle",
          "emoji": "⭕",
          "bgColor": "#263238"
          },
          {
          "letter": "H",
          "word": "Hexagon",
          "emoji": "🔷",
          "bgColor": "#455A64"
          },
          {
          "letter": "P",
          "word": "Pentagon",
          "emoji": "🔷",
          "bgColor": "#37474F"
          },
          {
          "letter": "S",
          "word": "Star",
          "emoji": "⭐",
          "bgColor": "#546E7A"
          },
          {
          "letter": "R",
          "word": "Rhombus",
          "emoji": "🔷",
          "bgColor": "#263238"
          },
          {
          "letter": "T",
          "word": "Trapezoid",
          "emoji": "🔷",
          "bgColor": "#455A64"
          },
          {
          "letter": "O",
          "word": "Oval",
          "emoji": "⭕",
          "bgColor": "#37474F"
          },
          {
          "letter": "E",
          "word": "Ellipse",
          "emoji": "⭕",
          "bgColor": "#546E7A"
          },
          {
          "letter": "A",
          "word": "Arc",
          "emoji": "🔷",
          "bgColor": "#263238"
          },
          {
          "letter": "L",
          "word": "Line",
          "emoji": "📏",
          "bgColor": "#455A64"
          },
          {
          "letter": "A",
          "word": "Angle",
          "emoji": "🔺",
          "bgColor": "#37474F"
          },
          {
          "letter": "C",
          "word": "Curve",
          "emoji": "🌈",
          "bgColor": "#546E7A"
          },
          {
          "letter": "V",
          "word": "Vertex",
          "emoji": "⭐",
          "bgColor": "#263238"
          },
          {
          "letter": "E",
          "word": "Edge",
          "emoji": "📏",
          "bgColor": "#455A64"
          },
          {
          "letter": "F",
          "word": "Face",
          "emoji": "🟦",
          "bgColor": "#37474F"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Colors3dShapes2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "3D Shapes - Part 2",
          videoId: "colors-3d-shapes-2",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#37474F",
          letters: [
          {
          "letter": "C",
          "word": "Cube",
          "emoji": "🟥",
          "bgColor": "#37474F"
          },
          {
          "letter": "S",
          "word": "Sphere",
          "emoji": "⚫",
          "bgColor": "#263238"
          },
          {
          "letter": "P",
          "word": "Pyramid",
          "emoji": "🔺",
          "bgColor": "#455A64"
          },
          {
          "letter": "C",
          "word": "Cylinder",
          "emoji": "⭕",
          "bgColor": "#546E7A"
          },
          {
          "letter": "C",
          "word": "Cone",
          "emoji": "🔺",
          "bgColor": "#37474F"
          },
          {
          "letter": "D",
          "word": "Diamond",
          "emoji": "💎",
          "bgColor": "#263238"
          },
          {
          "letter": "R",
          "word": "Rectangle",
          "emoji": "🟦",
          "bgColor": "#455A64"
          },
          {
          "letter": "T",
          "word": "Triangle",
          "emoji": "🔺",
          "bgColor": "#37474F"
          },
          {
          "letter": "O",
          "word": "Octahedron",
          "emoji": "💎",
          "bgColor": "#546E7A"
          },
          {
          "letter": "T",
          "word": "Tetrahedron",
          "emoji": "🔺",
          "bgColor": "#455A64"
          },
          {
          "letter": "P",
          "word": "Prism",
          "emoji": "🔷",
          "bgColor": "#37474F"
          },
          {
          "letter": "D",
          "word": "Dodecahedron",
          "emoji": "💎",
          "bgColor": "#263238"
          },
          {
          "letter": "I",
          "word": "Icosahedron",
          "emoji": "💎",
          "bgColor": "#455A64"
          },
          {
          "letter": "C",
          "word": "Cube",
          "emoji": "🟥",
          "bgColor": "#546E7A"
          },
          {
          "letter": "S",
          "word": "Square",
          "emoji": "🟨",
          "bgColor": "#37474F"
          },
          {
          "letter": "C",
          "word": "Circle",
          "emoji": "⭕",
          "bgColor": "#263238"
          },
          {
          "letter": "H",
          "word": "Hexagon",
          "emoji": "🔷",
          "bgColor": "#455A64"
          },
          {
          "letter": "P",
          "word": "Pentagon",
          "emoji": "🔷",
          "bgColor": "#37474F"
          },
          {
          "letter": "S",
          "word": "Star",
          "emoji": "⭐",
          "bgColor": "#546E7A"
          },
          {
          "letter": "R",
          "word": "Rhombus",
          "emoji": "🔷",
          "bgColor": "#263238"
          },
          {
          "letter": "T",
          "word": "Trapezoid",
          "emoji": "🔷",
          "bgColor": "#455A64"
          },
          {
          "letter": "O",
          "word": "Oval",
          "emoji": "⭕",
          "bgColor": "#37474F"
          },
          {
          "letter": "E",
          "word": "Ellipse",
          "emoji": "⭕",
          "bgColor": "#546E7A"
          },
          {
          "letter": "A",
          "word": "Arc",
          "emoji": "🔷",
          "bgColor": "#263238"
          },
          {
          "letter": "L",
          "word": "Line",
          "emoji": "📏",
          "bgColor": "#455A64"
          },
          {
          "letter": "A",
          "word": "Angle",
          "emoji": "🔺",
          "bgColor": "#37474F"
          },
          {
          "letter": "C",
          "word": "Curve",
          "emoji": "🌈",
          "bgColor": "#546E7A"
          },
          {
          "letter": "V",
          "word": "Vertex",
          "emoji": "⭐",
          "bgColor": "#263238"
          },
          {
          "letter": "E",
          "word": "Edge",
          "emoji": "📏",
          "bgColor": "#455A64"
          },
          {
          "letter": "F",
          "word": "Face",
          "emoji": "🟦",
          "bgColor": "#37474F"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="Colors3dShapes3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "3D Shapes - Part 3",
          videoId: "colors-3d-shapes-3",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#455A64",
          letters: [
          {
          "letter": "C",
          "word": "Cube",
          "emoji": "🟥",
          "bgColor": "#37474F"
          },
          {
          "letter": "S",
          "word": "Sphere",
          "emoji": "⚫",
          "bgColor": "#263238"
          },
          {
          "letter": "P",
          "word": "Pyramid",
          "emoji": "🔺",
          "bgColor": "#455A64"
          },
          {
          "letter": "C",
          "word": "Cylinder",
          "emoji": "⭕",
          "bgColor": "#546E7A"
          },
          {
          "letter": "C",
          "word": "Cone",
          "emoji": "🔺",
          "bgColor": "#37474F"
          },
          {
          "letter": "D",
          "word": "Diamond",
          "emoji": "💎",
          "bgColor": "#263238"
          },
          {
          "letter": "R",
          "word": "Rectangle",
          "emoji": "🟦",
          "bgColor": "#455A64"
          },
          {
          "letter": "T",
          "word": "Triangle",
          "emoji": "🔺",
          "bgColor": "#37474F"
          },
          {
          "letter": "O",
          "word": "Octahedron",
          "emoji": "💎",
          "bgColor": "#546E7A"
          },
          {
          "letter": "T",
          "word": "Tetrahedron",
          "emoji": "🔺",
          "bgColor": "#455A64"
          },
          {
          "letter": "P",
          "word": "Prism",
          "emoji": "🔷",
          "bgColor": "#37474F"
          },
          {
          "letter": "D",
          "word": "Dodecahedron",
          "emoji": "💎",
          "bgColor": "#263238"
          },
          {
          "letter": "I",
          "word": "Icosahedron",
          "emoji": "💎",
          "bgColor": "#455A64"
          },
          {
          "letter": "C",
          "word": "Cube",
          "emoji": "🟥",
          "bgColor": "#546E7A"
          },
          {
          "letter": "S",
          "word": "Square",
          "emoji": "🟨",
          "bgColor": "#37474F"
          },
          {
          "letter": "C",
          "word": "Circle",
          "emoji": "⭕",
          "bgColor": "#263238"
          },
          {
          "letter": "H",
          "word": "Hexagon",
          "emoji": "🔷",
          "bgColor": "#455A64"
          },
          {
          "letter": "P",
          "word": "Pentagon",
          "emoji": "🔷",
          "bgColor": "#37474F"
          },
          {
          "letter": "S",
          "word": "Star",
          "emoji": "⭐",
          "bgColor": "#546E7A"
          },
          {
          "letter": "R",
          "word": "Rhombus",
          "emoji": "🔷",
          "bgColor": "#263238"
          },
          {
          "letter": "T",
          "word": "Trapezoid",
          "emoji": "🔷",
          "bgColor": "#455A64"
          },
          {
          "letter": "O",
          "word": "Oval",
          "emoji": "⭕",
          "bgColor": "#37474F"
          },
          {
          "letter": "E",
          "word": "Ellipse",
          "emoji": "⭕",
          "bgColor": "#546E7A"
          },
          {
          "letter": "A",
          "word": "Arc",
          "emoji": "🔷",
          "bgColor": "#263238"
          },
          {
          "letter": "L",
          "word": "Line",
          "emoji": "📏",
          "bgColor": "#455A64"
          },
          {
          "letter": "A",
          "word": "Angle",
          "emoji": "🔺",
          "bgColor": "#37474F"
          },
          {
          "letter": "C",
          "word": "Curve",
          "emoji": "🌈",
          "bgColor": "#546E7A"
          },
          {
          "letter": "V",
          "word": "Vertex",
          "emoji": "⭐",
          "bgColor": "#263238"
          },
          {
          "letter": "E",
          "word": "Edge",
          "emoji": "📏",
          "bgColor": "#455A64"
          },
          {
          "letter": "F",
          "word": "Face",
          "emoji": "🟦",
          "bgColor": "#37474F"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsArtColors1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Art & Paint Colors - Part 1",
          videoId: "colors-art-colors-1",
          bgGradient: ["#AD1457","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [
          {
          "letter": "R",
          "word": "Red",
          "emoji": "🔴",
          "bgColor": "#AD1457"
          },
          {
          "letter": "V",
          "word": "Violet",
          "emoji": "🟣",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "I",
          "word": "Indigo",
          "emoji": "🔵",
          "bgColor": "#1A237E"
          },
          {
          "letter": "C",
          "word": "Crimson",
          "emoji": "❤️",
          "bgColor": "#C41C3B"
          },
          {
          "letter": "S",
          "word": "Scarlet",
          "emoji": "🔴",
          "bgColor": "#FF2400"
          },
          {
          "letter": "P",
          "word": "Purple",
          "emoji": "🟣",
          "bgColor": "#800080"
          },
          {
          "letter": "M",
          "word": "Maroon",
          "emoji": "❤️",
          "bgColor": "#800000"
          },
          {
          "letter": "P",
          "word": "Plum",
          "emoji": "🟣",
          "bgColor": "#893F8B"
          },
          {
          "letter": "M",
          "word": "Mauve",
          "emoji": "🟣",
          "bgColor": "#8B7BA8"
          },
          {
          "letter": "L",
          "word": "Lilac",
          "emoji": "🟣",
          "bgColor": "#B19CD9"
          },
          {
          "letter": "R",
          "word": "Rose",
          "emoji": "❤️",
          "bgColor": "#C72C5B"
          },
          {
          "letter": "W",
          "word": "Wine",
          "emoji": "❤️",
          "bgColor": "#722F37"
          },
          {
          "letter": "O",
          "word": "Orchid",
          "emoji": "🟣",
          "bgColor": "#DA70D6"
          },
          {
          "letter": "M",
          "word": "Magenta",
          "emoji": "🟣",
          "bgColor": "#FF00FF"
          },
          {
          "letter": "F",
          "word": "Fuchsia",
          "emoji": "🟣",
          "bgColor": "#FF20F0"
          },
          {
          "letter": "B",
          "word": "Berry",
          "emoji": "🟣",
          "bgColor": "#3F2140"
          },
          {
          "letter": "A",
          "word": "Aubergine",
          "emoji": "🟣",
          "bgColor": "#371F1F"
          },
          {
          "letter": "T",
          "word": "Taupe",
          "emoji": "🟤",
          "bgColor": "#B38B6D"
          },
          {
          "letter": "U",
          "word": "Umber",
          "emoji": "🟤",
          "bgColor": "#635147"
          },
          {
          "letter": "S",
          "word": "Sienna",
          "emoji": "🟤",
          "bgColor": "#882D17"
          },
          {
          "letter": "O",
          "word": "Ochre",
          "emoji": "🟨",
          "bgColor": "#CC7000"
          },
          {
          "letter": "B",
          "word": "Burnt",
          "emoji": "🟤",
          "bgColor": "#8B4513"
          },
          {
          "letter": "R",
          "word": "Raw",
          "emoji": "🟤",
          "bgColor": "#826644"
          },
          {
          "letter": "G",
          "word": "Gold",
          "emoji": "🥇",
          "bgColor": "#FFD700"
          },
          {
          "letter": "S",
          "word": "Silver",
          "emoji": "🥈",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "B",
          "word": "Bronze",
          "emoji": "🟤",
          "bgColor": "#CD7F32"
          },
          {
          "letter": "P",
          "word": "Platinum",
          "emoji": "🥈",
          "bgColor": "#E5E4E2"
          },
          {
          "letter": "C",
          "word": "Copper",
          "emoji": "🟤",
          "bgColor": "#B87333"
          },
          {
          "letter": "T",
          "word": "Titanium",
          "emoji": "⚪",
          "bgColor": "#CFD0CF"
          },
          {
          "letter": "A",
          "word": "Art",
          "emoji": "🌈",
          "bgColor": "#FF1493"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsArtColors2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Art & Paint Colors - Part 2",
          videoId: "colors-art-colors-2",
          bgGradient: ["#C2185B","#F8BBD0"] as [string, string],
          accentColor: "#AD1457",
          letters: [
          {
          "letter": "R",
          "word": "Red",
          "emoji": "🔴",
          "bgColor": "#AD1457"
          },
          {
          "letter": "V",
          "word": "Violet",
          "emoji": "🟣",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "I",
          "word": "Indigo",
          "emoji": "🔵",
          "bgColor": "#1A237E"
          },
          {
          "letter": "C",
          "word": "Crimson",
          "emoji": "❤️",
          "bgColor": "#C41C3B"
          },
          {
          "letter": "S",
          "word": "Scarlet",
          "emoji": "🔴",
          "bgColor": "#FF2400"
          },
          {
          "letter": "P",
          "word": "Purple",
          "emoji": "🟣",
          "bgColor": "#800080"
          },
          {
          "letter": "M",
          "word": "Maroon",
          "emoji": "❤️",
          "bgColor": "#800000"
          },
          {
          "letter": "P",
          "word": "Plum",
          "emoji": "🟣",
          "bgColor": "#893F8B"
          },
          {
          "letter": "M",
          "word": "Mauve",
          "emoji": "🟣",
          "bgColor": "#8B7BA8"
          },
          {
          "letter": "L",
          "word": "Lilac",
          "emoji": "🟣",
          "bgColor": "#B19CD9"
          },
          {
          "letter": "R",
          "word": "Rose",
          "emoji": "❤️",
          "bgColor": "#C72C5B"
          },
          {
          "letter": "W",
          "word": "Wine",
          "emoji": "❤️",
          "bgColor": "#722F37"
          },
          {
          "letter": "O",
          "word": "Orchid",
          "emoji": "🟣",
          "bgColor": "#DA70D6"
          },
          {
          "letter": "M",
          "word": "Magenta",
          "emoji": "🟣",
          "bgColor": "#FF00FF"
          },
          {
          "letter": "F",
          "word": "Fuchsia",
          "emoji": "🟣",
          "bgColor": "#FF20F0"
          },
          {
          "letter": "B",
          "word": "Berry",
          "emoji": "🟣",
          "bgColor": "#3F2140"
          },
          {
          "letter": "A",
          "word": "Aubergine",
          "emoji": "🟣",
          "bgColor": "#371F1F"
          },
          {
          "letter": "T",
          "word": "Taupe",
          "emoji": "🟤",
          "bgColor": "#B38B6D"
          },
          {
          "letter": "U",
          "word": "Umber",
          "emoji": "🟤",
          "bgColor": "#635147"
          },
          {
          "letter": "S",
          "word": "Sienna",
          "emoji": "🟤",
          "bgColor": "#882D17"
          },
          {
          "letter": "O",
          "word": "Ochre",
          "emoji": "🟨",
          "bgColor": "#CC7000"
          },
          {
          "letter": "B",
          "word": "Burnt",
          "emoji": "🟤",
          "bgColor": "#8B4513"
          },
          {
          "letter": "R",
          "word": "Raw",
          "emoji": "🟤",
          "bgColor": "#826644"
          },
          {
          "letter": "G",
          "word": "Gold",
          "emoji": "🥇",
          "bgColor": "#FFD700"
          },
          {
          "letter": "S",
          "word": "Silver",
          "emoji": "🥈",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "B",
          "word": "Bronze",
          "emoji": "🟤",
          "bgColor": "#CD7F32"
          },
          {
          "letter": "P",
          "word": "Platinum",
          "emoji": "🥈",
          "bgColor": "#E5E4E2"
          },
          {
          "letter": "C",
          "word": "Copper",
          "emoji": "🟤",
          "bgColor": "#B87333"
          },
          {
          "letter": "T",
          "word": "Titanium",
          "emoji": "⚪",
          "bgColor": "#CFD0CF"
          },
          {
          "letter": "A",
          "word": "Art",
          "emoji": "🌈",
          "bgColor": "#FF1493"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsArtColors3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Art & Paint Colors - Part 3",
          videoId: "colors-art-colors-3",
          bgGradient: ["#D81B60","#FCE4EC"] as [string, string],
          accentColor: "#C2185B",
          letters: [
          {
          "letter": "R",
          "word": "Red",
          "emoji": "🔴",
          "bgColor": "#AD1457"
          },
          {
          "letter": "V",
          "word": "Violet",
          "emoji": "🟣",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "I",
          "word": "Indigo",
          "emoji": "🔵",
          "bgColor": "#1A237E"
          },
          {
          "letter": "C",
          "word": "Crimson",
          "emoji": "❤️",
          "bgColor": "#C41C3B"
          },
          {
          "letter": "S",
          "word": "Scarlet",
          "emoji": "🔴",
          "bgColor": "#FF2400"
          },
          {
          "letter": "P",
          "word": "Purple",
          "emoji": "🟣",
          "bgColor": "#800080"
          },
          {
          "letter": "M",
          "word": "Maroon",
          "emoji": "❤️",
          "bgColor": "#800000"
          },
          {
          "letter": "P",
          "word": "Plum",
          "emoji": "🟣",
          "bgColor": "#893F8B"
          },
          {
          "letter": "M",
          "word": "Mauve",
          "emoji": "🟣",
          "bgColor": "#8B7BA8"
          },
          {
          "letter": "L",
          "word": "Lilac",
          "emoji": "🟣",
          "bgColor": "#B19CD9"
          },
          {
          "letter": "R",
          "word": "Rose",
          "emoji": "❤️",
          "bgColor": "#C72C5B"
          },
          {
          "letter": "W",
          "word": "Wine",
          "emoji": "❤️",
          "bgColor": "#722F37"
          },
          {
          "letter": "O",
          "word": "Orchid",
          "emoji": "🟣",
          "bgColor": "#DA70D6"
          },
          {
          "letter": "M",
          "word": "Magenta",
          "emoji": "🟣",
          "bgColor": "#FF00FF"
          },
          {
          "letter": "F",
          "word": "Fuchsia",
          "emoji": "🟣",
          "bgColor": "#FF20F0"
          },
          {
          "letter": "B",
          "word": "Berry",
          "emoji": "🟣",
          "bgColor": "#3F2140"
          },
          {
          "letter": "A",
          "word": "Aubergine",
          "emoji": "🟣",
          "bgColor": "#371F1F"
          },
          {
          "letter": "T",
          "word": "Taupe",
          "emoji": "🟤",
          "bgColor": "#B38B6D"
          },
          {
          "letter": "U",
          "word": "Umber",
          "emoji": "🟤",
          "bgColor": "#635147"
          },
          {
          "letter": "S",
          "word": "Sienna",
          "emoji": "🟤",
          "bgColor": "#882D17"
          },
          {
          "letter": "O",
          "word": "Ochre",
          "emoji": "🟨",
          "bgColor": "#CC7000"
          },
          {
          "letter": "B",
          "word": "Burnt",
          "emoji": "🟤",
          "bgColor": "#8B4513"
          },
          {
          "letter": "R",
          "word": "Raw",
          "emoji": "🟤",
          "bgColor": "#826644"
          },
          {
          "letter": "G",
          "word": "Gold",
          "emoji": "🥇",
          "bgColor": "#FFD700"
          },
          {
          "letter": "S",
          "word": "Silver",
          "emoji": "🥈",
          "bgColor": "#C0C0C0"
          },
          {
          "letter": "B",
          "word": "Bronze",
          "emoji": "🟤",
          "bgColor": "#CD7F32"
          },
          {
          "letter": "P",
          "word": "Platinum",
          "emoji": "🥈",
          "bgColor": "#E5E4E2"
          },
          {
          "letter": "C",
          "word": "Copper",
          "emoji": "🟤",
          "bgColor": "#B87333"
          },
          {
          "letter": "T",
          "word": "Titanium",
          "emoji": "⚪",
          "bgColor": "#CFD0CF"
          },
          {
          "letter": "A",
          "word": "Art",
          "emoji": "🌈",
          "bgColor": "#FF1493"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsPatterns1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Patterns & Designs - Part 1",
          videoId: "colors-patterns-1",
          bgGradient: ["#795548","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [
          {
          "letter": "D",
          "word": "Dots",
          "emoji": "⭕",
          "bgColor": "#795548"
          },
          {
          "letter": "S",
          "word": "Stripes",
          "emoji": "📏",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "C",
          "word": "Checkerboard",
          "emoji": "🟥",
          "bgColor": "#795548"
          },
          {
          "letter": "Z",
          "word": "Zigzag",
          "emoji": "🌈",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "W",
          "word": "Waves",
          "emoji": "🌊",
          "bgColor": "#795548"
          },
          {
          "letter": "S",
          "word": "Spirals",
          "emoji": "🌈",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "G",
          "word": "Grid",
          "emoji": "🔷",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "M",
          "word": "Mosaic",
          "emoji": "🌈",
          "bgColor": "#795548"
          },
          {
          "letter": "B",
          "word": "Blossoms",
          "emoji": "🌼",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "F",
          "word": "Flowers",
          "emoji": "🌸",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "L",
          "word": "Lines",
          "emoji": "📏",
          "bgColor": "#795548"
          },
          {
          "letter": "T",
          "word": "Triangles",
          "emoji": "🔺",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "C",
          "word": "Circles",
          "emoji": "⭕",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "S",
          "word": "Squares",
          "emoji": "🟥",
          "bgColor": "#795548"
          },
          {
          "letter": "R",
          "word": "Rings",
          "emoji": "⭕",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "D",
          "word": "Diamonds",
          "emoji": "💎",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "H",
          "word": "Hexagons",
          "emoji": "🔷",
          "bgColor": "#795548"
          },
          {
          "letter": "S",
          "word": "Stars",
          "emoji": "⭐",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "C",
          "word": "Crosses",
          "emoji": "✕",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "P",
          "word": "Plus",
          "emoji": "➕",
          "bgColor": "#795548"
          },
          {
          "letter": "X",
          "word": "X",
          "emoji": "❌",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "A",
          "word": "Arrows",
          "emoji": "➡️",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "V",
          "word": "Vines",
          "emoji": "🌿",
          "bgColor": "#795548"
          },
          {
          "letter": "L",
          "word": "Leaves",
          "emoji": "🍃",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "P",
          "word": "Paisley",
          "emoji": "🌈",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "T",
          "word": "Tile",
          "emoji": "🔷",
          "bgColor": "#795548"
          },
          {
          "letter": "T",
          "word": "Texture",
          "emoji": "🌈",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "P",
          "word": "Pattern",
          "emoji": "🌈",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "D",
          "word": "Design",
          "emoji": "🎨",
          "bgColor": "#795548"
          },
          {
          "letter": "O",
          "word": "Ornament",
          "emoji": "🌈",
          "bgColor": "#8D6E63"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsPatterns2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Patterns & Designs - Part 2",
          videoId: "colors-patterns-2",
          bgGradient: ["#6D4C41","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [
          {
          "letter": "D",
          "word": "Dots",
          "emoji": "⭕",
          "bgColor": "#795548"
          },
          {
          "letter": "S",
          "word": "Stripes",
          "emoji": "📏",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "C",
          "word": "Checkerboard",
          "emoji": "🟥",
          "bgColor": "#795548"
          },
          {
          "letter": "Z",
          "word": "Zigzag",
          "emoji": "🌈",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "W",
          "word": "Waves",
          "emoji": "🌊",
          "bgColor": "#795548"
          },
          {
          "letter": "S",
          "word": "Spirals",
          "emoji": "🌈",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "G",
          "word": "Grid",
          "emoji": "🔷",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "M",
          "word": "Mosaic",
          "emoji": "🌈",
          "bgColor": "#795548"
          },
          {
          "letter": "B",
          "word": "Blossoms",
          "emoji": "🌼",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "F",
          "word": "Flowers",
          "emoji": "🌸",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "L",
          "word": "Lines",
          "emoji": "📏",
          "bgColor": "#795548"
          },
          {
          "letter": "T",
          "word": "Triangles",
          "emoji": "🔺",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "C",
          "word": "Circles",
          "emoji": "⭕",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "S",
          "word": "Squares",
          "emoji": "🟥",
          "bgColor": "#795548"
          },
          {
          "letter": "R",
          "word": "Rings",
          "emoji": "⭕",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "D",
          "word": "Diamonds",
          "emoji": "💎",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "H",
          "word": "Hexagons",
          "emoji": "🔷",
          "bgColor": "#795548"
          },
          {
          "letter": "S",
          "word": "Stars",
          "emoji": "⭐",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "C",
          "word": "Crosses",
          "emoji": "✕",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "P",
          "word": "Plus",
          "emoji": "➕",
          "bgColor": "#795548"
          },
          {
          "letter": "X",
          "word": "X",
          "emoji": "❌",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "A",
          "word": "Arrows",
          "emoji": "➡️",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "V",
          "word": "Vines",
          "emoji": "🌿",
          "bgColor": "#795548"
          },
          {
          "letter": "L",
          "word": "Leaves",
          "emoji": "🍃",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "P",
          "word": "Paisley",
          "emoji": "🌈",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "T",
          "word": "Tile",
          "emoji": "🔷",
          "bgColor": "#795548"
          },
          {
          "letter": "T",
          "word": "Texture",
          "emoji": "🌈",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "P",
          "word": "Pattern",
          "emoji": "🌈",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "D",
          "word": "Design",
          "emoji": "🎨",
          "bgColor": "#795548"
          },
          {
          "letter": "O",
          "word": "Ornament",
          "emoji": "🌈",
          "bgColor": "#8D6E63"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsPatterns3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Patterns & Designs - Part 3",
          videoId: "colors-patterns-3",
          bgGradient: ["#8D6E63","#EFEBE9"] as [string, string],
          accentColor: "#4E342E",
          letters: [
          {
          "letter": "D",
          "word": "Dots",
          "emoji": "⭕",
          "bgColor": "#795548"
          },
          {
          "letter": "S",
          "word": "Stripes",
          "emoji": "📏",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "C",
          "word": "Checkerboard",
          "emoji": "🟥",
          "bgColor": "#795548"
          },
          {
          "letter": "Z",
          "word": "Zigzag",
          "emoji": "🌈",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "W",
          "word": "Waves",
          "emoji": "🌊",
          "bgColor": "#795548"
          },
          {
          "letter": "S",
          "word": "Spirals",
          "emoji": "🌈",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "G",
          "word": "Grid",
          "emoji": "🔷",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "M",
          "word": "Mosaic",
          "emoji": "🌈",
          "bgColor": "#795548"
          },
          {
          "letter": "B",
          "word": "Blossoms",
          "emoji": "🌼",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "F",
          "word": "Flowers",
          "emoji": "🌸",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "L",
          "word": "Lines",
          "emoji": "📏",
          "bgColor": "#795548"
          },
          {
          "letter": "T",
          "word": "Triangles",
          "emoji": "🔺",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "C",
          "word": "Circles",
          "emoji": "⭕",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "S",
          "word": "Squares",
          "emoji": "🟥",
          "bgColor": "#795548"
          },
          {
          "letter": "R",
          "word": "Rings",
          "emoji": "⭕",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "D",
          "word": "Diamonds",
          "emoji": "💎",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "H",
          "word": "Hexagons",
          "emoji": "🔷",
          "bgColor": "#795548"
          },
          {
          "letter": "S",
          "word": "Stars",
          "emoji": "⭐",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "C",
          "word": "Crosses",
          "emoji": "✕",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "P",
          "word": "Plus",
          "emoji": "➕",
          "bgColor": "#795548"
          },
          {
          "letter": "X",
          "word": "X",
          "emoji": "❌",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "A",
          "word": "Arrows",
          "emoji": "➡️",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "V",
          "word": "Vines",
          "emoji": "🌿",
          "bgColor": "#795548"
          },
          {
          "letter": "L",
          "word": "Leaves",
          "emoji": "🍃",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "P",
          "word": "Paisley",
          "emoji": "🌈",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "T",
          "word": "Tile",
          "emoji": "🔷",
          "bgColor": "#795548"
          },
          {
          "letter": "T",
          "word": "Texture",
          "emoji": "🌈",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "P",
          "word": "Pattern",
          "emoji": "🌈",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "D",
          "word": "Design",
          "emoji": "🎨",
          "bgColor": "#795548"
          },
          {
          "letter": "O",
          "word": "Ornament",
          "emoji": "🌈",
          "bgColor": "#8D6E63"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsIndianColors1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Colors - Part 1",
          videoId: "colors-indian-colors-1",
          bgGradient: ["#E65100","#FFCC80"] as [string, string],
          accentColor: "#BF360C",
          letters: [
          {
          "letter": "H",
          "word": "Holi",
          "emoji": "🌈",
          "bgColor": "#E65100"
          },
          {
          "letter": "S",
          "word": "Saffron",
          "emoji": "🟨",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "G",
          "word": "Green",
          "emoji": "🟢",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "W",
          "word": "White",
          "emoji": "⚪",
          "bgColor": "#FFFFFF"
          },
          {
          "letter": "R",
          "word": "Rangoli",
          "emoji": "🌈",
          "bgColor": "#D81B60"
          },
          {
          "letter": "M",
          "word": "Mehendi",
          "emoji": "🟢",
          "bgColor": "#558B2F"
          },
          {
          "letter": "B",
          "word": "Blue",
          "emoji": "🔵",
          "bgColor": "#0277BD"
          },
          {
          "letter": "T",
          "word": "Turquoise",
          "emoji": "🔵",
          "bgColor": "#00838F"
          },
          {
          "letter": "P",
          "word": "Pink",
          "emoji": "🩷",
          "bgColor": "#E91E63"
          },
          {
          "letter": "Y",
          "word": "Yellow",
          "emoji": "🟡",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "R",
          "word": "Red",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "O",
          "word": "Orange",
          "emoji": "🟠",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Purple",
          "emoji": "🟣",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "I",
          "word": "Indigo",
          "emoji": "🔵",
          "bgColor": "#1A237E"
          },
          {
          "letter": "C",
          "word": "Crimson",
          "emoji": "❤️",
          "bgColor": "#C41C3B"
          },
          {
          "letter": "M",
          "word": "Marigold",
          "emoji": "🟡",
          "bgColor": "#FFB300"
          },
          {
          "letter": "L",
          "word": "Lotus",
          "emoji": "🌸",
          "bgColor": "#E91E63"
          },
          {
          "letter": "T",
          "word": "Turmeric",
          "emoji": "🟨",
          "bgColor": "#FFA000"
          },
          {
          "letter": "B",
          "word": "Bindhi",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Silk",
          "emoji": "🌈",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "J",
          "word": "Jewel",
          "emoji": "💎",
          "bgColor": "#D81B60"
          },
          {
          "letter": "G",
          "word": "Gold",
          "emoji": "🥇",
          "bgColor": "#FFA000"
          },
          {
          "letter": "A",
          "word": "Amber",
          "emoji": "🟨",
          "bgColor": "#FFA000"
          },
          {
          "letter": "C",
          "word": "Copper",
          "emoji": "🟤",
          "bgColor": "#BF360C"
          },
          {
          "letter": "B",
          "word": "Bronze",
          "emoji": "🟤",
          "bgColor": "#CD7F32"
          },
          {
          "letter": "T",
          "word": "Traditional",
          "emoji": "🌈",
          "bgColor": "#E65100"
          },
          {
          "letter": "V",
          "word": "Vibrant",
          "emoji": "🌈",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "R",
          "word": "Rich",
          "emoji": "💎",
          "bgColor": "#D81B60"
          },
          {
          "letter": "D",
          "word": "Deep",
          "emoji": "🌈",
          "bgColor": "#E65100"
          },
          {
          "letter": "C",
          "word": "Color",
          "emoji": "🌈",
          "bgColor": "#FF8F00"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsIndianColors2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Colors - Part 2",
          videoId: "colors-indian-colors-2",
          bgGradient: ["#EF6C00","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [
          {
          "letter": "H",
          "word": "Holi",
          "emoji": "🌈",
          "bgColor": "#E65100"
          },
          {
          "letter": "S",
          "word": "Saffron",
          "emoji": "🟨",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "G",
          "word": "Green",
          "emoji": "🟢",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "W",
          "word": "White",
          "emoji": "⚪",
          "bgColor": "#FFFFFF"
          },
          {
          "letter": "R",
          "word": "Rangoli",
          "emoji": "🌈",
          "bgColor": "#D81B60"
          },
          {
          "letter": "M",
          "word": "Mehendi",
          "emoji": "🟢",
          "bgColor": "#558B2F"
          },
          {
          "letter": "B",
          "word": "Blue",
          "emoji": "🔵",
          "bgColor": "#0277BD"
          },
          {
          "letter": "T",
          "word": "Turquoise",
          "emoji": "🔵",
          "bgColor": "#00838F"
          },
          {
          "letter": "P",
          "word": "Pink",
          "emoji": "🩷",
          "bgColor": "#E91E63"
          },
          {
          "letter": "Y",
          "word": "Yellow",
          "emoji": "🟡",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "R",
          "word": "Red",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "O",
          "word": "Orange",
          "emoji": "🟠",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Purple",
          "emoji": "🟣",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "I",
          "word": "Indigo",
          "emoji": "🔵",
          "bgColor": "#1A237E"
          },
          {
          "letter": "C",
          "word": "Crimson",
          "emoji": "❤️",
          "bgColor": "#C41C3B"
          },
          {
          "letter": "M",
          "word": "Marigold",
          "emoji": "🟡",
          "bgColor": "#FFB300"
          },
          {
          "letter": "L",
          "word": "Lotus",
          "emoji": "🌸",
          "bgColor": "#E91E63"
          },
          {
          "letter": "T",
          "word": "Turmeric",
          "emoji": "🟨",
          "bgColor": "#FFA000"
          },
          {
          "letter": "B",
          "word": "Bindhi",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Silk",
          "emoji": "🌈",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "J",
          "word": "Jewel",
          "emoji": "💎",
          "bgColor": "#D81B60"
          },
          {
          "letter": "G",
          "word": "Gold",
          "emoji": "🥇",
          "bgColor": "#FFA000"
          },
          {
          "letter": "A",
          "word": "Amber",
          "emoji": "🟨",
          "bgColor": "#FFA000"
          },
          {
          "letter": "C",
          "word": "Copper",
          "emoji": "🟤",
          "bgColor": "#BF360C"
          },
          {
          "letter": "B",
          "word": "Bronze",
          "emoji": "🟤",
          "bgColor": "#CD7F32"
          },
          {
          "letter": "T",
          "word": "Traditional",
          "emoji": "🌈",
          "bgColor": "#E65100"
          },
          {
          "letter": "V",
          "word": "Vibrant",
          "emoji": "🌈",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "R",
          "word": "Rich",
          "emoji": "💎",
          "bgColor": "#D81B60"
          },
          {
          "letter": "D",
          "word": "Deep",
          "emoji": "🌈",
          "bgColor": "#E65100"
          },
          {
          "letter": "C",
          "word": "Color",
          "emoji": "🌈",
          "bgColor": "#FF8F00"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsIndianColors3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Colors - Part 3",
          videoId: "colors-indian-colors-3",
          bgGradient: ["#F57C00","#FFF3E0"] as [string, string],
          accentColor: "#EF6C00",
          letters: [
          {
          "letter": "H",
          "word": "Holi",
          "emoji": "🌈",
          "bgColor": "#E65100"
          },
          {
          "letter": "S",
          "word": "Saffron",
          "emoji": "🟨",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "G",
          "word": "Green",
          "emoji": "🟢",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "W",
          "word": "White",
          "emoji": "⚪",
          "bgColor": "#FFFFFF"
          },
          {
          "letter": "R",
          "word": "Rangoli",
          "emoji": "🌈",
          "bgColor": "#D81B60"
          },
          {
          "letter": "M",
          "word": "Mehendi",
          "emoji": "🟢",
          "bgColor": "#558B2F"
          },
          {
          "letter": "B",
          "word": "Blue",
          "emoji": "🔵",
          "bgColor": "#0277BD"
          },
          {
          "letter": "T",
          "word": "Turquoise",
          "emoji": "🔵",
          "bgColor": "#00838F"
          },
          {
          "letter": "P",
          "word": "Pink",
          "emoji": "🩷",
          "bgColor": "#E91E63"
          },
          {
          "letter": "Y",
          "word": "Yellow",
          "emoji": "🟡",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "R",
          "word": "Red",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "O",
          "word": "Orange",
          "emoji": "🟠",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Purple",
          "emoji": "🟣",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "I",
          "word": "Indigo",
          "emoji": "🔵",
          "bgColor": "#1A237E"
          },
          {
          "letter": "C",
          "word": "Crimson",
          "emoji": "❤️",
          "bgColor": "#C41C3B"
          },
          {
          "letter": "M",
          "word": "Marigold",
          "emoji": "🟡",
          "bgColor": "#FFB300"
          },
          {
          "letter": "L",
          "word": "Lotus",
          "emoji": "🌸",
          "bgColor": "#E91E63"
          },
          {
          "letter": "T",
          "word": "Turmeric",
          "emoji": "🟨",
          "bgColor": "#FFA000"
          },
          {
          "letter": "B",
          "word": "Bindhi",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Silk",
          "emoji": "🌈",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "J",
          "word": "Jewel",
          "emoji": "💎",
          "bgColor": "#D81B60"
          },
          {
          "letter": "G",
          "word": "Gold",
          "emoji": "🥇",
          "bgColor": "#FFA000"
          },
          {
          "letter": "A",
          "word": "Amber",
          "emoji": "🟨",
          "bgColor": "#FFA000"
          },
          {
          "letter": "C",
          "word": "Copper",
          "emoji": "🟤",
          "bgColor": "#BF360C"
          },
          {
          "letter": "B",
          "word": "Bronze",
          "emoji": "🟤",
          "bgColor": "#CD7F32"
          },
          {
          "letter": "T",
          "word": "Traditional",
          "emoji": "🌈",
          "bgColor": "#E65100"
          },
          {
          "letter": "V",
          "word": "Vibrant",
          "emoji": "🌈",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "R",
          "word": "Rich",
          "emoji": "💎",
          "bgColor": "#D81B60"
          },
          {
          "letter": "D",
          "word": "Deep",
          "emoji": "🌈",
          "bgColor": "#E65100"
          },
          {
          "letter": "C",
          "word": "Color",
          "emoji": "🌈",
          "bgColor": "#FF8F00"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="ColorsAllColors"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "All Colors Collection",
          videoId: "colors-all-colors",
          bgGradient: ["#6A1B9A","#E1BEE7"] as [string, string],
          accentColor: "#4A148C",
          letters: [
          {
          "letter": "H",
          "word": "Holi",
          "emoji": "🌈",
          "bgColor": "#E65100"
          },
          {
          "letter": "S",
          "word": "Saffron",
          "emoji": "🟨",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "G",
          "word": "Green",
          "emoji": "🟢",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "W",
          "word": "White",
          "emoji": "⚪",
          "bgColor": "#FFFFFF"
          },
          {
          "letter": "R",
          "word": "Rangoli",
          "emoji": "🌈",
          "bgColor": "#D81B60"
          },
          {
          "letter": "M",
          "word": "Mehendi",
          "emoji": "🟢",
          "bgColor": "#558B2F"
          },
          {
          "letter": "B",
          "word": "Blue",
          "emoji": "🔵",
          "bgColor": "#0277BD"
          },
          {
          "letter": "T",
          "word": "Turquoise",
          "emoji": "🔵",
          "bgColor": "#00838F"
          },
          {
          "letter": "P",
          "word": "Pink",
          "emoji": "🩷",
          "bgColor": "#E91E63"
          },
          {
          "letter": "Y",
          "word": "Yellow",
          "emoji": "🟡",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "R",
          "word": "Red",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "O",
          "word": "Orange",
          "emoji": "🟠",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Purple",
          "emoji": "🟣",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "I",
          "word": "Indigo",
          "emoji": "🔵",
          "bgColor": "#1A237E"
          },
          {
          "letter": "C",
          "word": "Crimson",
          "emoji": "❤️",
          "bgColor": "#C41C3B"
          },
          {
          "letter": "M",
          "word": "Marigold",
          "emoji": "🟡",
          "bgColor": "#FFB300"
          },
          {
          "letter": "L",
          "word": "Lotus",
          "emoji": "🌸",
          "bgColor": "#E91E63"
          },
          {
          "letter": "T",
          "word": "Turmeric",
          "emoji": "🟨",
          "bgColor": "#FFA000"
          },
          {
          "letter": "B",
          "word": "Bindhi",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Silk",
          "emoji": "🌈",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "J",
          "word": "Jewel",
          "emoji": "💎",
          "bgColor": "#D81B60"
          },
          {
          "letter": "G",
          "word": "Gold",
          "emoji": "🥇",
          "bgColor": "#FFA000"
          },
          {
          "letter": "A",
          "word": "Amber",
          "emoji": "🟨",
          "bgColor": "#FFA000"
          },
          {
          "letter": "C",
          "word": "Copper",
          "emoji": "🟤",
          "bgColor": "#BF360C"
          },
          {
          "letter": "B",
          "word": "Bronze",
          "emoji": "🟤",
          "bgColor": "#CD7F32"
          },
          {
          "letter": "T",
          "word": "Traditional",
          "emoji": "🌈",
          "bgColor": "#E65100"
          },
          {
          "letter": "V",
          "word": "Vibrant",
          "emoji": "🌈",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "R",
          "word": "Rich",
          "emoji": "💎",
          "bgColor": "#D81B60"
          },
          {
          "letter": "D",
          "word": "Deep",
          "emoji": "🌈",
          "bgColor": "#E65100"
          },
          {
          "letter": "C",
          "word": "Color",
          "emoji": "🌈",
          "bgColor": "#FF8F00"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
    </>
  );
};
