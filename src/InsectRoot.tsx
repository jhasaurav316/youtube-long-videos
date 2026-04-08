import "./index.css";
import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";
import React from "react";

export const InsectRemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="InsectsGardenBugs1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Bugs - Part 1",
          videoId: "insects-garden-bugs-1",
          bgGradient: ["#4CAF50","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [
          {
          "letter": "A",
          "word": "Ant",
          "emoji": "🐜",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Beetle",
          "emoji": "🪲",
          "bgColor": "#795548"
          },
          {
          "letter": "C",
          "word": "Caterpillar",
          "emoji": "🐛",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "D",
          "word": "Dragonfly",
          "emoji": "🪰",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "E",
          "word": "Earwig",
          "emoji": "🪲",
          "bgColor": "#5D4037"
          },
          {
          "letter": "F",
          "word": "Firefly",
          "emoji": "🪲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "G",
          "word": "Grasshopper",
          "emoji": "🦗",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "H",
          "word": "Honeybee",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "I",
          "word": "Inchworm",
          "emoji": "🐛",
          "bgColor": "#689F38"
          },
          {
          "letter": "J",
          "word": "June Bug",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "K",
          "word": "Katydid",
          "emoji": "🦗",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Ladybug",
          "emoji": "🐞",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Mosquito",
          "emoji": "🦟",
          "bgColor": "#37474F"
          },
          {
          "letter": "N",
          "word": "Nymph",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Orange Tip",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Praying Mantis",
          "emoji": "🦗",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "Q",
          "word": "Queen Bee",
          "emoji": "🐝",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "R",
          "word": "Red Ant",
          "emoji": "🐜",
          "bgColor": "#C62828"
          },
          {
          "letter": "S",
          "word": "Spider",
          "emoji": "🕷️",
          "bgColor": "#263238"
          },
          {
          "letter": "T",
          "word": "Termite",
          "emoji": "🐜",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "U",
          "word": "Ulysses Butterfly",
          "emoji": "🦋",
          "bgColor": "#1565C0"
          },
          {
          "letter": "V",
          "word": "Velvet Ant",
          "emoji": "🐜",
          "bgColor": "#BF360C"
          },
          {
          "letter": "W",
          "word": "Wasp",
          "emoji": "🐝",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "X",
          "word": "Xerces Blue",
          "emoji": "🦋",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "Y",
          "word": "Yellow Jacket",
          "emoji": "🐝",
          "bgColor": "#F9A825"
          },
          {
          "letter": "Z",
          "word": "Zebra Spider",
          "emoji": "🕷️",
          "bgColor": "#263238"
          },
          {
          "letter": "S",
          "word": "Silverfish",
          "emoji": "🐛",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "C",
          "word": "Cockroach",
          "emoji": "🪳",
          "bgColor": "#4E342E"
          },
          {
          "letter": "M",
          "word": "Moth",
          "emoji": "🦋",
          "bgColor": "#795548"
          },
          {
          "letter": "B",
          "word": "Bumblebee",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsGardenBugs2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Bugs - Part 2",
          videoId: "insects-garden-bugs-2",
          bgGradient: ["#43A047","#C8E6C9"] as [string, string],
          accentColor: "#2E7D32",
          letters: [
          {
          "letter": "A",
          "word": "Army Ant",
          "emoji": "🐜",
          "bgColor": "#BF360C"
          },
          {
          "letter": "B",
          "word": "Black Ant",
          "emoji": "🐜",
          "bgColor": "#263238"
          },
          {
          "letter": "C",
          "word": "Cricket",
          "emoji": "🦗",
          "bgColor": "#33691E"
          },
          {
          "letter": "D",
          "word": "Dung Beetle",
          "emoji": "🪲",
          "bgColor": "#5D4037"
          },
          {
          "letter": "E",
          "word": "Emperor Moth",
          "emoji": "🦋",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "F",
          "word": "Flea",
          "emoji": "🪲",
          "bgColor": "#795548"
          },
          {
          "letter": "G",
          "word": "Glow Worm",
          "emoji": "🐛",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "H",
          "word": "Hornet",
          "emoji": "🐝",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "I",
          "word": "Indian Bee",
          "emoji": "🐝",
          "bgColor": "#FF9800"
          },
          {
          "letter": "J",
          "word": "Jewel Beetle",
          "emoji": "🪲",
          "bgColor": "#00897B"
          },
          {
          "letter": "K",
          "word": "Kissing Bug",
          "emoji": "🪲",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "L",
          "word": "Leafcutter Ant",
          "emoji": "🐜",
          "bgColor": "#43A047"
          },
          {
          "letter": "M",
          "word": "Mealworm",
          "emoji": "🐛",
          "bgColor": "#827717"
          },
          {
          "letter": "N",
          "word": "Nightcrawler",
          "emoji": "🪱",
          "bgColor": "#4E342E"
          },
          {
          "letter": "O",
          "word": "Orbweaver",
          "emoji": "🕷️",
          "bgColor": "#FF5722"
          },
          {
          "letter": "P",
          "word": "Pill Bug",
          "emoji": "🐛",
          "bgColor": "#607D8B"
          },
          {
          "letter": "Q",
          "word": "Queen Ant",
          "emoji": "🐜",
          "bgColor": "#E91E63"
          },
          {
          "letter": "R",
          "word": "Rhinoceros Beetle",
          "emoji": "🪲",
          "bgColor": "#795548"
          },
          {
          "letter": "S",
          "word": "Stink Bug",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "T",
          "word": "Tarantula",
          "emoji": "🕷️",
          "bgColor": "#5D4037"
          },
          {
          "letter": "U",
          "word": "Umbrella Ant",
          "emoji": "🐜",
          "bgColor": "#43A047"
          },
          {
          "letter": "V",
          "word": "Violin Spider",
          "emoji": "🕷️",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "W",
          "word": "Weevil",
          "emoji": "🪲",
          "bgColor": "#33691E"
          },
          {
          "letter": "X",
          "word": "Xylophagous",
          "emoji": "🪲",
          "bgColor": "#4E342E"
          },
          {
          "letter": "Y",
          "word": "Yellow Ant",
          "emoji": "🐜",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "Z",
          "word": "Zorapteran",
          "emoji": "🪲",
          "bgColor": "#795548"
          },
          {
          "letter": "C",
          "word": "Centipede",
          "emoji": "🐛",
          "bgColor": "#BF360C"
          },
          {
          "letter": "M",
          "word": "Millipede",
          "emoji": "🐛",
          "bgColor": "#455A64"
          },
          {
          "letter": "S",
          "word": "Scorpion",
          "emoji": "🦂",
          "bgColor": "#E65100"
          },
          {
          "letter": "L",
          "word": "Louse",
          "emoji": "🪲",
          "bgColor": "#8D6E63"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsGardenBugs3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Bugs - Part 3",
          videoId: "insects-garden-bugs-3",
          bgGradient: ["#388E3C","#E8F5E9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [
          {
          "letter": "A",
          "word": "Aphid",
          "emoji": "🐛",
          "bgColor": "#689F38"
          },
          {
          "letter": "B",
          "word": "Bookworm",
          "emoji": "🐛",
          "bgColor": "#795548"
          },
          {
          "letter": "C",
          "word": "Cicada",
          "emoji": "🦗",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "D",
          "word": "Damselfly",
          "emoji": "🪰",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "E",
          "word": "Elm Beetle",
          "emoji": "🪲",
          "bgColor": "#33691E"
          },
          {
          "letter": "F",
          "word": "Fruit Fly",
          "emoji": "🪰",
          "bgColor": "#FF9800"
          },
          {
          "letter": "G",
          "word": "Garden Spider",
          "emoji": "🕷️",
          "bgColor": "#43A047"
          },
          {
          "letter": "H",
          "word": "Housefly",
          "emoji": "🪰",
          "bgColor": "#607D8B"
          },
          {
          "letter": "I",
          "word": "Indian Mantis",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "J",
          "word": "Japanese Beetle",
          "emoji": "🪲",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "K",
          "word": "Kudzu Bug",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "L",
          "word": "Lacewing",
          "emoji": "🪰",
          "bgColor": "#7CB342"
          },
          {
          "letter": "M",
          "word": "Mayfly",
          "emoji": "🪰",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "N",
          "word": "Net Wing",
          "emoji": "🪰",
          "bgColor": "#FF5722"
          },
          {
          "letter": "O",
          "word": "Owlet Moth",
          "emoji": "🦋",
          "bgColor": "#455A64"
          },
          {
          "letter": "P",
          "word": "Potato Bug",
          "emoji": "🪲",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "Q",
          "word": "Quaker Moth",
          "emoji": "🦋",
          "bgColor": "#607D8B"
          },
          {
          "letter": "R",
          "word": "Robber Fly",
          "emoji": "🪰",
          "bgColor": "#263238"
          },
          {
          "letter": "S",
          "word": "Sawfly",
          "emoji": "🪰",
          "bgColor": "#689F38"
          },
          {
          "letter": "T",
          "word": "Tick",
          "emoji": "🕷️",
          "bgColor": "#5D4037"
          },
          {
          "letter": "U",
          "word": "Underwing Moth",
          "emoji": "🦋",
          "bgColor": "#4A148C"
          },
          {
          "letter": "V",
          "word": "Vine Borer",
          "emoji": "🪲",
          "bgColor": "#33691E"
          },
          {
          "letter": "W",
          "word": "Walking Stick",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "X",
          "word": "Xylocopa",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "Y",
          "word": "Yellow Fly",
          "emoji": "🪰",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "Z",
          "word": "Zigzag Spider",
          "emoji": "🕷️",
          "bgColor": "#FF5722"
          },
          {
          "letter": "B",
          "word": "Bed Bug",
          "emoji": "🪲",
          "bgColor": "#C62828"
          },
          {
          "letter": "F",
          "word": "Fire Ant",
          "emoji": "🐜",
          "bgColor": "#BF360C"
          },
          {
          "letter": "G",
          "word": "Green Bottle",
          "emoji": "🪰",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "S",
          "word": "Stag Beetle",
          "emoji": "🪲",
          "bgColor": "#795548"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsFlyingInsects1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Flying Insects - Part 1",
          videoId: "insects-flying-insects-1",
          bgGradient: ["#1E88E5","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [
          {
          "letter": "B",
          "word": "Butterfly",
          "emoji": "🦋",
          "bgColor": "#E91E63"
          },
          {
          "letter": "D",
          "word": "Dragonfly",
          "emoji": "🪰",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "M",
          "word": "Monarch",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "H",
          "word": "Hoverfly",
          "emoji": "🪰",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "L",
          "word": "Lacewing",
          "emoji": "🪰",
          "bgColor": "#7CB342"
          },
          {
          "letter": "W",
          "word": "Wasp",
          "emoji": "🐝",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "F",
          "word": "Firefly",
          "emoji": "🪲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "C",
          "word": "Crane Fly",
          "emoji": "🪰",
          "bgColor": "#607D8B"
          },
          {
          "letter": "G",
          "word": "Gnat",
          "emoji": "🪰",
          "bgColor": "#37474F"
          },
          {
          "letter": "A",
          "word": "Asian Hornet",
          "emoji": "🐝",
          "bgColor": "#FF5722"
          },
          {
          "letter": "S",
          "word": "Sawfly",
          "emoji": "🪰",
          "bgColor": "#689F38"
          },
          {
          "letter": "T",
          "word": "Tsetse Fly",
          "emoji": "🪰",
          "bgColor": "#795548"
          },
          {
          "letter": "N",
          "word": "Night Moth",
          "emoji": "🦋",
          "bgColor": "#1A237E"
          },
          {
          "letter": "P",
          "word": "Paper Wasp",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "R",
          "word": "Robber Fly",
          "emoji": "🪰",
          "bgColor": "#263238"
          },
          {
          "letter": "K",
          "word": "Killer Bee",
          "emoji": "🐝",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "O",
          "word": "Owl Butterfly",
          "emoji": "🦋",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "E",
          "word": "Emerald Wasp",
          "emoji": "🐝",
          "bgColor": "#00897B"
          },
          {
          "letter": "I",
          "word": "Indian Bee",
          "emoji": "🐝",
          "bgColor": "#FF9800"
          },
          {
          "letter": "J",
          "word": "June Beetle",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "U",
          "word": "Ulysses",
          "emoji": "🦋",
          "bgColor": "#1565C0"
          },
          {
          "letter": "V",
          "word": "Viceroy",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "X",
          "word": "Xanthopan Moth",
          "emoji": "🦋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Y",
          "word": "Yellow Swallowtail",
          "emoji": "🦋",
          "bgColor": "#F9A825"
          },
          {
          "letter": "Z",
          "word": "Zebra Longwing",
          "emoji": "🦋",
          "bgColor": "#263238"
          },
          {
          "letter": "Q",
          "word": "Queen Moth",
          "emoji": "🦋",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "B",
          "word": "Blue Bottle",
          "emoji": "🪰",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "M",
          "word": "Mayfly",
          "emoji": "🪰",
          "bgColor": "#FFC107"
          },
          {
          "letter": "C",
          "word": "Caddisfly",
          "emoji": "🪰",
          "bgColor": "#827717"
          },
          {
          "letter": "S",
          "word": "Stonefly",
          "emoji": "🪰",
          "bgColor": "#607D8B"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsFlyingInsects2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Flying Insects - Part 2",
          videoId: "insects-flying-insects-2",
          bgGradient: ["#1976D2","#90CAF9"] as [string, string],
          accentColor: "#1565C0",
          letters: [
          {
          "letter": "D",
          "word": "Damselfly",
          "emoji": "🪰",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "A",
          "word": "Atlas Moth",
          "emoji": "🦋",
          "bgColor": "#FF5722"
          },
          {
          "letter": "G",
          "word": "Green Darner",
          "emoji": "🪰",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "S",
          "word": "Skimmer",
          "emoji": "🪰",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "H",
          "word": "Hawker Dragonfly",
          "emoji": "🪰",
          "bgColor": "#0288D1"
          },
          {
          "letter": "P",
          "word": "Painted Lady",
          "emoji": "🦋",
          "bgColor": "#E91E63"
          },
          {
          "letter": "R",
          "word": "Red Admiral",
          "emoji": "🦋",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "C",
          "word": "Comma Butterfly",
          "emoji": "🦋",
          "bgColor": "#FF9800"
          },
          {
          "letter": "M",
          "word": "Meadow Brown",
          "emoji": "🦋",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "T",
          "word": "Tortoiseshell",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "L",
          "word": "Luna Moth",
          "emoji": "🦋",
          "bgColor": "#00E676"
          },
          {
          "letter": "B",
          "word": "Blue Morpho",
          "emoji": "🦋",
          "bgColor": "#1565C0"
          },
          {
          "letter": "K",
          "word": "King Cobra Moth",
          "emoji": "🦋",
          "bgColor": "#263238"
          },
          {
          "letter": "N",
          "word": "Nymphalid",
          "emoji": "🦋",
          "bgColor": "#E91E63"
          },
          {
          "letter": "O",
          "word": "Orange Oakleaf",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "F",
          "word": "Fritillary",
          "emoji": "🦋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "W",
          "word": "White Admiral",
          "emoji": "🦋",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "E",
          "word": "Emperor Butterfly",
          "emoji": "🦋",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "I",
          "word": "Indian Swallowtail",
          "emoji": "🦋",
          "bgColor": "#FFC107"
          },
          {
          "letter": "J",
          "word": "Julia Butterfly",
          "emoji": "🦋",
          "bgColor": "#FF9800"
          },
          {
          "letter": "U",
          "word": "Urania Moth",
          "emoji": "🦋",
          "bgColor": "#00897B"
          },
          {
          "letter": "V",
          "word": "Vanessa Butterfly",
          "emoji": "🦋",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "X",
          "word": "Xanthic Moth",
          "emoji": "🦋",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "Y",
          "word": "Yellow Pansy",
          "emoji": "🦋",
          "bgColor": "#F9A825"
          },
          {
          "letter": "Z",
          "word": "Zephyr Blue",
          "emoji": "🦋",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "Q",
          "word": "Queen Alexandra",
          "emoji": "🦋",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "S",
          "word": "Skipper",
          "emoji": "🦋",
          "bgColor": "#827717"
          },
          {
          "letter": "C",
          "word": "Clearwing Moth",
          "emoji": "🦋",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "P",
          "word": "Peacock Butterfly",
          "emoji": "🦋",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "M",
          "word": "Morpho",
          "emoji": "🦋",
          "bgColor": "#0D47A1"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsFlyingInsects3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Flying Insects - Part 3",
          videoId: "insects-flying-insects-3",
          bgGradient: ["#1565C0","#64B5F6"] as [string, string],
          accentColor: "#0D47A1",
          letters: [
          {
          "letter": "D",
          "word": "Darter Dragonfly",
          "emoji": "🪰",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "C",
          "word": "Club Tail",
          "emoji": "🪰",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Spreadwing",
          "emoji": "🪰",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "E",
          "word": "Emperor Dragonfly",
          "emoji": "🪰",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "G",
          "word": "Golden Ring",
          "emoji": "🪰",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "H",
          "word": "Hawkmoth",
          "emoji": "🦋",
          "bgColor": "#607D8B"
          },
          {
          "letter": "B",
          "word": "Black Swallowtail",
          "emoji": "🦋",
          "bgColor": "#263238"
          },
          {
          "letter": "L",
          "word": "Lappet Moth",
          "emoji": "🦋",
          "bgColor": "#795548"
          },
          {
          "letter": "M",
          "word": "Midge",
          "emoji": "🪰",
          "bgColor": "#37474F"
          },
          {
          "letter": "T",
          "word": "Thrips",
          "emoji": "🪰",
          "bgColor": "#827717"
          },
          {
          "letter": "A",
          "word": "Antlion",
          "emoji": "🪰",
          "bgColor": "#FFA000"
          },
          {
          "letter": "P",
          "word": "Phantom Crane",
          "emoji": "🪰",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "R",
          "word": "Rain Moth",
          "emoji": "🦋",
          "bgColor": "#546E7A"
          },
          {
          "letter": "N",
          "word": "Net Winged Beetle",
          "emoji": "🪲",
          "bgColor": "#FF5722"
          },
          {
          "letter": "K",
          "word": "Kite Swallowtail",
          "emoji": "🦋",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "O",
          "word": "Olive Hairstreak",
          "emoji": "🦋",
          "bgColor": "#689F38"
          },
          {
          "letter": "F",
          "word": "Fig Wasp",
          "emoji": "🐝",
          "bgColor": "#827717"
          },
          {
          "letter": "W",
          "word": "Widow Skimmer",
          "emoji": "🪰",
          "bgColor": "#455A64"
          },
          {
          "letter": "I",
          "word": "Io Moth",
          "emoji": "🦋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "J",
          "word": "Jewel Bug",
          "emoji": "🪲",
          "bgColor": "#00897B"
          },
          {
          "letter": "U",
          "word": "Underwing",
          "emoji": "🦋",
          "bgColor": "#4A148C"
          },
          {
          "letter": "V",
          "word": "Violet Ground",
          "emoji": "🪲",
          "bgColor": "#311B92"
          },
          {
          "letter": "X",
          "word": "Xestia Moth",
          "emoji": "🦋",
          "bgColor": "#546E7A"
          },
          {
          "letter": "Y",
          "word": "Yucca Moth",
          "emoji": "🦋",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "Z",
          "word": "Zodiac Moth",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "Q",
          "word": "Quill Mite",
          "emoji": "🕷️",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Banded Demoiselle",
          "emoji": "🪰",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "C",
          "word": "Common Blue",
          "emoji": "🦋",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "S",
          "word": "Silver Spotted",
          "emoji": "🦋",
          "bgColor": "#CFD8DC"
          },
          {
          "letter": "P",
          "word": "Purple Emperor",
          "emoji": "🦋",
          "bgColor": "#6A1B9A"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsBeetles1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beetles & Bugs - Part 1",
          videoId: "insects-beetles-1",
          bgGradient: ["#795548","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [
          {
          "letter": "R",
          "word": "Rhinoceros Beetle",
          "emoji": "🪲",
          "bgColor": "#795548"
          },
          {
          "letter": "S",
          "word": "Stag Beetle",
          "emoji": "🪲",
          "bgColor": "#5D4037"
          },
          {
          "letter": "G",
          "word": "Goliath Beetle",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "H",
          "word": "Hercules Beetle",
          "emoji": "🪲",
          "bgColor": "#33691E"
          },
          {
          "letter": "D",
          "word": "Dung Beetle",
          "emoji": "🪲",
          "bgColor": "#4E342E"
          },
          {
          "letter": "L",
          "word": "Longhorn Beetle",
          "emoji": "🪲",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "T",
          "word": "Titan Beetle",
          "emoji": "🪲",
          "bgColor": "#263238"
          },
          {
          "letter": "C",
          "word": "Click Beetle",
          "emoji": "🪲",
          "bgColor": "#FF9800"
          },
          {
          "letter": "B",
          "word": "Bark Beetle",
          "emoji": "🪲",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "J",
          "word": "Jewel Beetle",
          "emoji": "🪲",
          "bgColor": "#00897B"
          },
          {
          "letter": "K",
          "word": "Khapra Beetle",
          "emoji": "🪲",
          "bgColor": "#BF360C"
          },
          {
          "letter": "F",
          "word": "Flea Beetle",
          "emoji": "🪲",
          "bgColor": "#689F38"
          },
          {
          "letter": "W",
          "word": "Water Beetle",
          "emoji": "🪲",
          "bgColor": "#0288D1"
          },
          {
          "letter": "A",
          "word": "Atlas Beetle",
          "emoji": "🪲",
          "bgColor": "#FF5722"
          },
          {
          "letter": "N",
          "word": "Net Winged",
          "emoji": "🪲",
          "bgColor": "#E91E63"
          },
          {
          "letter": "M",
          "word": "May Beetle",
          "emoji": "🪲",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "P",
          "word": "Pine Beetle",
          "emoji": "🪲",
          "bgColor": "#33691E"
          },
          {
          "letter": "O",
          "word": "Oil Beetle",
          "emoji": "🪲",
          "bgColor": "#37474F"
          },
          {
          "letter": "E",
          "word": "Elm Bark Beetle",
          "emoji": "🪲",
          "bgColor": "#558B2F"
          },
          {
          "letter": "I",
          "word": "Indian Beetle",
          "emoji": "🪲",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "U",
          "word": "Unicorn Beetle",
          "emoji": "🪲",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "V",
          "word": "Vine Beetle",
          "emoji": "🪲",
          "bgColor": "#43A047"
          },
          {
          "letter": "X",
          "word": "Xyleborus",
          "emoji": "🪲",
          "bgColor": "#4E342E"
          },
          {
          "letter": "Y",
          "word": "Yellow Beetle",
          "emoji": "🪲",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "Z",
          "word": "Zebra Beetle",
          "emoji": "🪲",
          "bgColor": "#263238"
          },
          {
          "letter": "Q",
          "word": "Queen Beetle",
          "emoji": "🪲",
          "bgColor": "#9C27B0"
          },
          {
          "letter": "C",
          "word": "Colorado Beetle",
          "emoji": "🪲",
          "bgColor": "#FF5722"
          },
          {
          "letter": "S",
          "word": "Scarab",
          "emoji": "🪲",
          "bgColor": "#FFA000"
          },
          {
          "letter": "B",
          "word": "Blister Beetle",
          "emoji": "🪲",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "L",
          "word": "Lady Beetle",
          "emoji": "🐞",
          "bgColor": "#C62828"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsBeetles2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beetles & Bugs - Part 2",
          videoId: "insects-beetles-2",
          bgGradient: ["#6D4C41","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [
          {
          "letter": "W",
          "word": "Weevil",
          "emoji": "🪲",
          "bgColor": "#33691E"
          },
          {
          "letter": "B",
          "word": "Bombardier Beetle",
          "emoji": "🪲",
          "bgColor": "#FF5722"
          },
          {
          "letter": "C",
          "word": "Carpet Beetle",
          "emoji": "🪲",
          "bgColor": "#795548"
          },
          {
          "letter": "D",
          "word": "Deathwatch Beetle",
          "emoji": "🪲",
          "bgColor": "#263238"
          },
          {
          "letter": "F",
          "word": "Flour Beetle",
          "emoji": "🪲",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "G",
          "word": "Ground Beetle",
          "emoji": "🪲",
          "bgColor": "#455A64"
          },
          {
          "letter": "H",
          "word": "Harlequin Bug",
          "emoji": "🪲",
          "bgColor": "#E91E63"
          },
          {
          "letter": "I",
          "word": "Iron Clad Beetle",
          "emoji": "🪲",
          "bgColor": "#37474F"
          },
          {
          "letter": "J",
          "word": "Japanese Beetle",
          "emoji": "🪲",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "K",
          "word": "Kheper Beetle",
          "emoji": "🪲",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "L",
          "word": "Leaf Beetle",
          "emoji": "🪲",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "M",
          "word": "Metallic Beetle",
          "emoji": "🪲",
          "bgColor": "#00897B"
          },
          {
          "letter": "N",
          "word": "Nightjar Beetle",
          "emoji": "🪲",
          "bgColor": "#1A237E"
          },
          {
          "letter": "O",
          "word": "Ox Beetle",
          "emoji": "🪲",
          "bgColor": "#795548"
          },
          {
          "letter": "P",
          "word": "Powder Post",
          "emoji": "🪲",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "R",
          "word": "Rose Chafer",
          "emoji": "🪲",
          "bgColor": "#E91E63"
          },
          {
          "letter": "S",
          "word": "Soldier Beetle",
          "emoji": "🪲",
          "bgColor": "#FF9800"
          },
          {
          "letter": "T",
          "word": "Tiger Beetle",
          "emoji": "🪲",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "A",
          "word": "Ambrosia Beetle",
          "emoji": "🪲",
          "bgColor": "#558B2F"
          },
          {
          "letter": "E",
          "word": "Eyed Click",
          "emoji": "🪲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "U",
          "word": "Umber Beetle",
          "emoji": "🪲",
          "bgColor": "#5D4037"
          },
          {
          "letter": "V",
          "word": "Violet Beetle",
          "emoji": "🪲",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "X",
          "word": "Xysticus",
          "emoji": "🕷️",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "Y",
          "word": "Yew Beetle",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "Z",
          "word": "Zopherus Beetle",
          "emoji": "🪲",
          "bgColor": "#607D8B"
          },
          {
          "letter": "Q",
          "word": "Quince Beetle",
          "emoji": "🪲",
          "bgColor": "#689F38"
          },
          {
          "letter": "B",
          "word": "Bean Beetle",
          "emoji": "🪲",
          "bgColor": "#BF360C"
          },
          {
          "letter": "C",
          "word": "Cucumber Beetle",
          "emoji": "🪲",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "S",
          "word": "Snout Beetle",
          "emoji": "🪲",
          "bgColor": "#4E342E"
          },
          {
          "letter": "R",
          "word": "Red Palm Weevil",
          "emoji": "🪲",
          "bgColor": "#C62828"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsBeetles3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Beetles & Bugs - Part 3",
          videoId: "insects-beetles-3",
          bgGradient: ["#8D6E63","#EFEBE9"] as [string, string],
          accentColor: "#4E342E",
          letters: [
          {
          "letter": "S",
          "word": "Stink Beetle",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "A",
          "word": "Acorn Weevil",
          "emoji": "🪲",
          "bgColor": "#795548"
          },
          {
          "letter": "B",
          "word": "Boll Weevil",
          "emoji": "🪲",
          "bgColor": "#33691E"
          },
          {
          "letter": "C",
          "word": "Chafer Beetle",
          "emoji": "🪲",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "D",
          "word": "Darkling Beetle",
          "emoji": "🪲",
          "bgColor": "#263238"
          },
          {
          "letter": "E",
          "word": "Elephant Beetle",
          "emoji": "🪲",
          "bgColor": "#607D8B"
          },
          {
          "letter": "F",
          "word": "Firefly Beetle",
          "emoji": "🪲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "G",
          "word": "Grain Beetle",
          "emoji": "🪲",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "H",
          "word": "Horn Beetle",
          "emoji": "🪲",
          "bgColor": "#5D4037"
          },
          {
          "letter": "I",
          "word": "Indian Dung",
          "emoji": "🪲",
          "bgColor": "#4E342E"
          },
          {
          "letter": "J",
          "word": "Jeweled Frog",
          "emoji": "🪲",
          "bgColor": "#00897B"
          },
          {
          "letter": "K",
          "word": "King Stag",
          "emoji": "🪲",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "L",
          "word": "Lightning Bug",
          "emoji": "🪲",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "M",
          "word": "Museum Beetle",
          "emoji": "🪲",
          "bgColor": "#795548"
          },
          {
          "letter": "N",
          "word": "Nut Weevil",
          "emoji": "🪲",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "O",
          "word": "Oriental Beetle",
          "emoji": "🪲",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "P",
          "word": "Pea Weevil",
          "emoji": "🪲",
          "bgColor": "#689F38"
          },
          {
          "letter": "R",
          "word": "Rice Weevil",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "T",
          "word": "Tortoise Beetle",
          "emoji": "🪲",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "W",
          "word": "Whirligig Beetle",
          "emoji": "🪲",
          "bgColor": "#0288D1"
          },
          {
          "letter": "U",
          "word": "Umber Moth Beetle",
          "emoji": "🪲",
          "bgColor": "#455A64"
          },
          {
          "letter": "V",
          "word": "Varied Carpet",
          "emoji": "🪲",
          "bgColor": "#BF360C"
          },
          {
          "letter": "X",
          "word": "Xenos",
          "emoji": "🪲",
          "bgColor": "#37474F"
          },
          {
          "letter": "Y",
          "word": "Yellow Mealworm",
          "emoji": "🐛",
          "bgColor": "#F9A825"
          },
          {
          "letter": "Z",
          "word": "Zophobas",
          "emoji": "🐛",
          "bgColor": "#263238"
          },
          {
          "letter": "Q",
          "word": "Quahog Beetle",
          "emoji": "🪲",
          "bgColor": "#546E7A"
          },
          {
          "letter": "S",
          "word": "Sun Beetle",
          "emoji": "🪲",
          "bgColor": "#FF9800"
          },
          {
          "letter": "C",
          "word": "Carrion Beetle",
          "emoji": "🪲",
          "bgColor": "#1A237E"
          },
          {
          "letter": "B",
          "word": "Bess Beetle",
          "emoji": "🪲",
          "bgColor": "#795548"
          },
          {
          "letter": "M",
          "word": "Metallic Wood",
          "emoji": "🪲",
          "bgColor": "#00695C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsButterflies1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Butterflies & Moths - Part 1",
          videoId: "insects-butterflies-1",
          bgGradient: ["#9C27B0","#E1BEE7"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [
          {
          "letter": "M",
          "word": "Monarch Butterfly",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "S",
          "word": "Swallowtail",
          "emoji": "🦋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "B",
          "word": "Blue Morpho",
          "emoji": "🦋",
          "bgColor": "#1565C0"
          },
          {
          "letter": "P",
          "word": "Painted Lady",
          "emoji": "🦋",
          "bgColor": "#E91E63"
          },
          {
          "letter": "R",
          "word": "Red Admiral",
          "emoji": "🦋",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "C",
          "word": "Cabbage White",
          "emoji": "🦋",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "A",
          "word": "Apollo Butterfly",
          "emoji": "🦋",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "G",
          "word": "Glasswing",
          "emoji": "🦋",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "L",
          "word": "Luna Moth",
          "emoji": "🦋",
          "bgColor": "#00E676"
          },
          {
          "letter": "T",
          "word": "Tiger Moth",
          "emoji": "🦋",
          "bgColor": "#FF5722"
          },
          {
          "letter": "H",
          "word": "Hawk Moth",
          "emoji": "🦋",
          "bgColor": "#607D8B"
          },
          {
          "letter": "D",
          "word": "Death Head Moth",
          "emoji": "🦋",
          "bgColor": "#263238"
          },
          {
          "letter": "K",
          "word": "King Swallowtail",
          "emoji": "🦋",
          "bgColor": "#FFA000"
          },
          {
          "letter": "N",
          "word": "Nymphalid",
          "emoji": "🦋",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "O",
          "word": "Owl Butterfly",
          "emoji": "🦋",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "W",
          "word": "Wood Nymph",
          "emoji": "🦋",
          "bgColor": "#33691E"
          },
          {
          "letter": "F",
          "word": "Fritillary",
          "emoji": "🦋",
          "bgColor": "#FF9800"
          },
          {
          "letter": "E",
          "word": "Emperor Moth",
          "emoji": "🦋",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "I",
          "word": "Indian Leaf",
          "emoji": "🦋",
          "bgColor": "#43A047"
          },
          {
          "letter": "J",
          "word": "Jezebel",
          "emoji": "🦋",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "U",
          "word": "Ulysses Swallowtail",
          "emoji": "🦋",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "V",
          "word": "Viceroy",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "X",
          "word": "Xanthopan",
          "emoji": "🦋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Y",
          "word": "Yellow Pansy",
          "emoji": "🦋",
          "bgColor": "#F9A825"
          },
          {
          "letter": "Z",
          "word": "Zebra Swallowtail",
          "emoji": "🦋",
          "bgColor": "#263238"
          },
          {
          "letter": "Q",
          "word": "Queen Butterfly",
          "emoji": "🦋",
          "bgColor": "#9C27B0"
          },
          {
          "letter": "C",
          "word": "Clipper",
          "emoji": "🦋",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "S",
          "word": "Skipper Moth",
          "emoji": "🦋",
          "bgColor": "#827717"
          },
          {
          "letter": "P",
          "word": "Peacock Moth",
          "emoji": "🦋",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "M",
          "word": "Morpho Blue",
          "emoji": "🦋",
          "bgColor": "#0288D1"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsButterflies2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Butterflies & Moths - Part 2",
          videoId: "insects-butterflies-2",
          bgGradient: ["#8E24AA","#CE93D8"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [
          {
          "letter": "A",
          "word": "Atlas Moth",
          "emoji": "🦋",
          "bgColor": "#8B4513"
          },
          {
          "letter": "B",
          "word": "Bee-eater",
          "emoji": "🐝",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Cicada",
          "emoji": "🪲",
          "bgColor": "#795548"
          },
          {
          "letter": "D",
          "word": "Damselfly",
          "emoji": "🪰",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "E",
          "word": "Emerald Dragonfly",
          "emoji": "🪰",
          "bgColor": "#00897B"
          },
          {
          "letter": "F",
          "word": "Firefly",
          "emoji": "🪲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "G",
          "word": "Grasshopper",
          "emoji": "🦗",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "H",
          "word": "Hawk Moth",
          "emoji": "🦋",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "I",
          "word": "Indian Stick Insect",
          "emoji": "🦗",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "J",
          "word": "Jewel Beetle",
          "emoji": "🪲",
          "bgColor": "#00BCD4"
          },
          {
          "letter": "K",
          "word": "Katydid",
          "emoji": "🦗",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Ladybug",
          "emoji": "🐞",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Malabar Cicada",
          "emoji": "🪲",
          "bgColor": "#37474F"
          },
          {
          "letter": "N",
          "word": "Nymph",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Orange Tip Butterfly",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Praying Mantis",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Q",
          "word": "Queen Alexandra Parrot",
          "emoji": "🦋",
          "bgColor": "#5E35B1"
          },
          {
          "letter": "R",
          "word": "Red Ant",
          "emoji": "🐜",
          "bgColor": "#C62828"
          },
          {
          "letter": "S",
          "word": "Spider",
          "emoji": "🕷️",
          "bgColor": "#37474F"
          },
          {
          "letter": "T",
          "word": "Termite",
          "emoji": "🪲",
          "bgColor": "#5D4037"
          },
          {
          "letter": "U",
          "word": "Unicorn Beetle",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "V",
          "word": "Viceroy Butterfly",
          "emoji": "🦋",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "W",
          "word": "Wasp",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "X",
          "word": "Xeme Insect",
          "emoji": "🦗",
          "bgColor": "#689F38"
          },
          {
          "letter": "Y",
          "word": "Yellow Butterfly",
          "emoji": "🦋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zebra Butterfly",
          "emoji": "🦋",
          "bgColor": "#000000"
          },
          {
          "letter": "A",
          "word": "Antlion",
          "emoji": "🐜",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Blister Beetle",
          "emoji": "🪲",
          "bgColor": "#F57C00"
          },
          {
          "letter": "C",
          "word": "Cockroach",
          "emoji": "🪳",
          "bgColor": "#3E2723"
          },
          {
          "letter": "D",
          "word": "Dung Beetle",
          "emoji": "🪲",
          "bgColor": "#3F2C2C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsButterflies3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Butterflies & Moths - Part 3",
          videoId: "insects-butterflies-3",
          bgGradient: ["#AB47BC","#F3E5F5"] as [string, string],
          accentColor: "#7B1FA2",
          letters: [
          {
          "letter": "A",
          "word": "Atlas Moth",
          "emoji": "🦋",
          "bgColor": "#8B4513"
          },
          {
          "letter": "B",
          "word": "Bee-eater",
          "emoji": "🐝",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Cicada",
          "emoji": "🪲",
          "bgColor": "#795548"
          },
          {
          "letter": "D",
          "word": "Damselfly",
          "emoji": "🪰",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "E",
          "word": "Emerald Dragonfly",
          "emoji": "🪰",
          "bgColor": "#00897B"
          },
          {
          "letter": "F",
          "word": "Firefly",
          "emoji": "🪲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "G",
          "word": "Grasshopper",
          "emoji": "🦗",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "H",
          "word": "Hawk Moth",
          "emoji": "🦋",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "I",
          "word": "Indian Stick Insect",
          "emoji": "🦗",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "J",
          "word": "Jewel Beetle",
          "emoji": "🪲",
          "bgColor": "#00BCD4"
          },
          {
          "letter": "K",
          "word": "Katydid",
          "emoji": "🦗",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Ladybug",
          "emoji": "🐞",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Malabar Cicada",
          "emoji": "🪲",
          "bgColor": "#37474F"
          },
          {
          "letter": "N",
          "word": "Nymph",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Orange Tip Butterfly",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Praying Mantis",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Q",
          "word": "Queen Alexandra Parrot",
          "emoji": "🦋",
          "bgColor": "#5E35B1"
          },
          {
          "letter": "R",
          "word": "Red Ant",
          "emoji": "🐜",
          "bgColor": "#C62828"
          },
          {
          "letter": "S",
          "word": "Spider",
          "emoji": "🕷️",
          "bgColor": "#37474F"
          },
          {
          "letter": "T",
          "word": "Termite",
          "emoji": "🪲",
          "bgColor": "#5D4037"
          },
          {
          "letter": "U",
          "word": "Unicorn Beetle",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "V",
          "word": "Viceroy Butterfly",
          "emoji": "🦋",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "W",
          "word": "Wasp",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "X",
          "word": "Xeme Insect",
          "emoji": "🦗",
          "bgColor": "#689F38"
          },
          {
          "letter": "Y",
          "word": "Yellow Butterfly",
          "emoji": "🦋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zebra Butterfly",
          "emoji": "🦋",
          "bgColor": "#000000"
          },
          {
          "letter": "A",
          "word": "Antlion",
          "emoji": "🐜",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Blister Beetle",
          "emoji": "🪲",
          "bgColor": "#F57C00"
          },
          {
          "letter": "C",
          "word": "Cockroach",
          "emoji": "🪳",
          "bgColor": "#3E2723"
          },
          {
          "letter": "D",
          "word": "Dung Beetle",
          "emoji": "🪲",
          "bgColor": "#3F2C2C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsSpiders1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spiders & Arachnids - Part 1",
          videoId: "insects-spiders-1",
          bgGradient: ["#37474F","#90A4AE"] as [string, string],
          accentColor: "#263238",
          letters: [
          {
          "letter": "A",
          "word": "Atlas Moth",
          "emoji": "🦋",
          "bgColor": "#8B4513"
          },
          {
          "letter": "B",
          "word": "Bee-eater",
          "emoji": "🐝",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Cicada",
          "emoji": "🪲",
          "bgColor": "#795548"
          },
          {
          "letter": "D",
          "word": "Damselfly",
          "emoji": "🪰",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "E",
          "word": "Emerald Dragonfly",
          "emoji": "🪰",
          "bgColor": "#00897B"
          },
          {
          "letter": "F",
          "word": "Firefly",
          "emoji": "🪲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "G",
          "word": "Grasshopper",
          "emoji": "🦗",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "H",
          "word": "Hawk Moth",
          "emoji": "🦋",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "I",
          "word": "Indian Stick Insect",
          "emoji": "🦗",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "J",
          "word": "Jewel Beetle",
          "emoji": "🪲",
          "bgColor": "#00BCD4"
          },
          {
          "letter": "K",
          "word": "Katydid",
          "emoji": "🦗",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Ladybug",
          "emoji": "🐞",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Malabar Cicada",
          "emoji": "🪲",
          "bgColor": "#37474F"
          },
          {
          "letter": "N",
          "word": "Nymph",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Orange Tip Butterfly",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Praying Mantis",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Q",
          "word": "Queen Alexandra Parrot",
          "emoji": "🦋",
          "bgColor": "#5E35B1"
          },
          {
          "letter": "R",
          "word": "Red Ant",
          "emoji": "🐜",
          "bgColor": "#C62828"
          },
          {
          "letter": "S",
          "word": "Spider",
          "emoji": "🕷️",
          "bgColor": "#37474F"
          },
          {
          "letter": "T",
          "word": "Termite",
          "emoji": "🪲",
          "bgColor": "#5D4037"
          },
          {
          "letter": "U",
          "word": "Unicorn Beetle",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "V",
          "word": "Viceroy Butterfly",
          "emoji": "🦋",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "W",
          "word": "Wasp",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "X",
          "word": "Xeme Insect",
          "emoji": "🦗",
          "bgColor": "#689F38"
          },
          {
          "letter": "Y",
          "word": "Yellow Butterfly",
          "emoji": "🦋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zebra Butterfly",
          "emoji": "🦋",
          "bgColor": "#000000"
          },
          {
          "letter": "A",
          "word": "Antlion",
          "emoji": "🐜",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Blister Beetle",
          "emoji": "🪲",
          "bgColor": "#F57C00"
          },
          {
          "letter": "C",
          "word": "Cockroach",
          "emoji": "🪳",
          "bgColor": "#3E2723"
          },
          {
          "letter": "D",
          "word": "Dung Beetle",
          "emoji": "🪲",
          "bgColor": "#3F2C2C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsSpiders2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spiders & Arachnids - Part 2",
          videoId: "insects-spiders-2",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#37474F",
          letters: [
          {
          "letter": "A",
          "word": "Atlas Moth",
          "emoji": "🦋",
          "bgColor": "#8B4513"
          },
          {
          "letter": "B",
          "word": "Bee-eater",
          "emoji": "🐝",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Cicada",
          "emoji": "🪲",
          "bgColor": "#795548"
          },
          {
          "letter": "D",
          "word": "Damselfly",
          "emoji": "🪰",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "E",
          "word": "Emerald Dragonfly",
          "emoji": "🪰",
          "bgColor": "#00897B"
          },
          {
          "letter": "F",
          "word": "Firefly",
          "emoji": "🪲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "G",
          "word": "Grasshopper",
          "emoji": "🦗",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "H",
          "word": "Hawk Moth",
          "emoji": "🦋",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "I",
          "word": "Indian Stick Insect",
          "emoji": "🦗",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "J",
          "word": "Jewel Beetle",
          "emoji": "🪲",
          "bgColor": "#00BCD4"
          },
          {
          "letter": "K",
          "word": "Katydid",
          "emoji": "🦗",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Ladybug",
          "emoji": "🐞",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Malabar Cicada",
          "emoji": "🪲",
          "bgColor": "#37474F"
          },
          {
          "letter": "N",
          "word": "Nymph",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Orange Tip Butterfly",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Praying Mantis",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Q",
          "word": "Queen Alexandra Parrot",
          "emoji": "🦋",
          "bgColor": "#5E35B1"
          },
          {
          "letter": "R",
          "word": "Red Ant",
          "emoji": "🐜",
          "bgColor": "#C62828"
          },
          {
          "letter": "S",
          "word": "Spider",
          "emoji": "🕷️",
          "bgColor": "#37474F"
          },
          {
          "letter": "T",
          "word": "Termite",
          "emoji": "🪲",
          "bgColor": "#5D4037"
          },
          {
          "letter": "U",
          "word": "Unicorn Beetle",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "V",
          "word": "Viceroy Butterfly",
          "emoji": "🦋",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "W",
          "word": "Wasp",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "X",
          "word": "Xeme Insect",
          "emoji": "🦗",
          "bgColor": "#689F38"
          },
          {
          "letter": "Y",
          "word": "Yellow Butterfly",
          "emoji": "🦋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zebra Butterfly",
          "emoji": "🦋",
          "bgColor": "#000000"
          },
          {
          "letter": "A",
          "word": "Antlion",
          "emoji": "🐜",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Blister Beetle",
          "emoji": "🪲",
          "bgColor": "#F57C00"
          },
          {
          "letter": "C",
          "word": "Cockroach",
          "emoji": "🪳",
          "bgColor": "#3E2723"
          },
          {
          "letter": "D",
          "word": "Dung Beetle",
          "emoji": "🪲",
          "bgColor": "#3F2C2C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsSpiders3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spiders & Arachnids - Part 3",
          videoId: "insects-spiders-3",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#455A64",
          letters: [
          {
          "letter": "A",
          "word": "Atlas Moth",
          "emoji": "🦋",
          "bgColor": "#8B4513"
          },
          {
          "letter": "B",
          "word": "Bee-eater",
          "emoji": "🐝",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Cicada",
          "emoji": "🪲",
          "bgColor": "#795548"
          },
          {
          "letter": "D",
          "word": "Damselfly",
          "emoji": "🪰",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "E",
          "word": "Emerald Dragonfly",
          "emoji": "🪰",
          "bgColor": "#00897B"
          },
          {
          "letter": "F",
          "word": "Firefly",
          "emoji": "🪲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "G",
          "word": "Grasshopper",
          "emoji": "🦗",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "H",
          "word": "Hawk Moth",
          "emoji": "🦋",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "I",
          "word": "Indian Stick Insect",
          "emoji": "🦗",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "J",
          "word": "Jewel Beetle",
          "emoji": "🪲",
          "bgColor": "#00BCD4"
          },
          {
          "letter": "K",
          "word": "Katydid",
          "emoji": "🦗",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Ladybug",
          "emoji": "🐞",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Malabar Cicada",
          "emoji": "🪲",
          "bgColor": "#37474F"
          },
          {
          "letter": "N",
          "word": "Nymph",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Orange Tip Butterfly",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Praying Mantis",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Q",
          "word": "Queen Alexandra Parrot",
          "emoji": "🦋",
          "bgColor": "#5E35B1"
          },
          {
          "letter": "R",
          "word": "Red Ant",
          "emoji": "🐜",
          "bgColor": "#C62828"
          },
          {
          "letter": "S",
          "word": "Spider",
          "emoji": "🕷️",
          "bgColor": "#37474F"
          },
          {
          "letter": "T",
          "word": "Termite",
          "emoji": "🪲",
          "bgColor": "#5D4037"
          },
          {
          "letter": "U",
          "word": "Unicorn Beetle",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "V",
          "word": "Viceroy Butterfly",
          "emoji": "🦋",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "W",
          "word": "Wasp",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "X",
          "word": "Xeme Insect",
          "emoji": "🦗",
          "bgColor": "#689F38"
          },
          {
          "letter": "Y",
          "word": "Yellow Butterfly",
          "emoji": "🦋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zebra Butterfly",
          "emoji": "🦋",
          "bgColor": "#000000"
          },
          {
          "letter": "A",
          "word": "Antlion",
          "emoji": "🐜",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Blister Beetle",
          "emoji": "🪲",
          "bgColor": "#F57C00"
          },
          {
          "letter": "C",
          "word": "Cockroach",
          "emoji": "🪳",
          "bgColor": "#3E2723"
          },
          {
          "letter": "D",
          "word": "Dung Beetle",
          "emoji": "🪲",
          "bgColor": "#3F2C2C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsForestInsects1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Forest Insects - Part 1",
          videoId: "insects-forest-insects-1",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [
          {
          "letter": "A",
          "word": "Atlas Moth",
          "emoji": "🦋",
          "bgColor": "#8B4513"
          },
          {
          "letter": "B",
          "word": "Bee-eater",
          "emoji": "🐝",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Cicada",
          "emoji": "🪲",
          "bgColor": "#795548"
          },
          {
          "letter": "D",
          "word": "Damselfly",
          "emoji": "🪰",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "E",
          "word": "Emerald Dragonfly",
          "emoji": "🪰",
          "bgColor": "#00897B"
          },
          {
          "letter": "F",
          "word": "Firefly",
          "emoji": "🪲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "G",
          "word": "Grasshopper",
          "emoji": "🦗",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "H",
          "word": "Hawk Moth",
          "emoji": "🦋",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "I",
          "word": "Indian Stick Insect",
          "emoji": "🦗",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "J",
          "word": "Jewel Beetle",
          "emoji": "🪲",
          "bgColor": "#00BCD4"
          },
          {
          "letter": "K",
          "word": "Katydid",
          "emoji": "🦗",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Ladybug",
          "emoji": "🐞",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Malabar Cicada",
          "emoji": "🪲",
          "bgColor": "#37474F"
          },
          {
          "letter": "N",
          "word": "Nymph",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Orange Tip Butterfly",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Praying Mantis",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Q",
          "word": "Queen Alexandra Parrot",
          "emoji": "🦋",
          "bgColor": "#5E35B1"
          },
          {
          "letter": "R",
          "word": "Red Ant",
          "emoji": "🐜",
          "bgColor": "#C62828"
          },
          {
          "letter": "S",
          "word": "Spider",
          "emoji": "🕷️",
          "bgColor": "#37474F"
          },
          {
          "letter": "T",
          "word": "Termite",
          "emoji": "🪲",
          "bgColor": "#5D4037"
          },
          {
          "letter": "U",
          "word": "Unicorn Beetle",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "V",
          "word": "Viceroy Butterfly",
          "emoji": "🦋",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "W",
          "word": "Wasp",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "X",
          "word": "Xeme Insect",
          "emoji": "🦗",
          "bgColor": "#689F38"
          },
          {
          "letter": "Y",
          "word": "Yellow Butterfly",
          "emoji": "🦋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zebra Butterfly",
          "emoji": "🦋",
          "bgColor": "#000000"
          },
          {
          "letter": "A",
          "word": "Antlion",
          "emoji": "🐜",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Blister Beetle",
          "emoji": "🪲",
          "bgColor": "#F57C00"
          },
          {
          "letter": "C",
          "word": "Cockroach",
          "emoji": "🪳",
          "bgColor": "#3E2723"
          },
          {
          "letter": "D",
          "word": "Dung Beetle",
          "emoji": "🪲",
          "bgColor": "#3F2C2C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsForestInsects2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Forest Insects - Part 2",
          videoId: "insects-forest-insects-2",
          bgGradient: ["#388E3C","#81C784"] as [string, string],
          accentColor: "#2E7D32",
          letters: [
          {
          "letter": "A",
          "word": "Atlas Moth",
          "emoji": "🦋",
          "bgColor": "#8B4513"
          },
          {
          "letter": "B",
          "word": "Bee-eater",
          "emoji": "🐝",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Cicada",
          "emoji": "🪲",
          "bgColor": "#795548"
          },
          {
          "letter": "D",
          "word": "Damselfly",
          "emoji": "🪰",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "E",
          "word": "Emerald Dragonfly",
          "emoji": "🪰",
          "bgColor": "#00897B"
          },
          {
          "letter": "F",
          "word": "Firefly",
          "emoji": "🪲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "G",
          "word": "Grasshopper",
          "emoji": "🦗",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "H",
          "word": "Hawk Moth",
          "emoji": "🦋",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "I",
          "word": "Indian Stick Insect",
          "emoji": "🦗",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "J",
          "word": "Jewel Beetle",
          "emoji": "🪲",
          "bgColor": "#00BCD4"
          },
          {
          "letter": "K",
          "word": "Katydid",
          "emoji": "🦗",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Ladybug",
          "emoji": "🐞",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Malabar Cicada",
          "emoji": "🪲",
          "bgColor": "#37474F"
          },
          {
          "letter": "N",
          "word": "Nymph",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Orange Tip Butterfly",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Praying Mantis",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Q",
          "word": "Queen Alexandra Parrot",
          "emoji": "🦋",
          "bgColor": "#5E35B1"
          },
          {
          "letter": "R",
          "word": "Red Ant",
          "emoji": "🐜",
          "bgColor": "#C62828"
          },
          {
          "letter": "S",
          "word": "Spider",
          "emoji": "🕷️",
          "bgColor": "#37474F"
          },
          {
          "letter": "T",
          "word": "Termite",
          "emoji": "🪲",
          "bgColor": "#5D4037"
          },
          {
          "letter": "U",
          "word": "Unicorn Beetle",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "V",
          "word": "Viceroy Butterfly",
          "emoji": "🦋",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "W",
          "word": "Wasp",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "X",
          "word": "Xeme Insect",
          "emoji": "🦗",
          "bgColor": "#689F38"
          },
          {
          "letter": "Y",
          "word": "Yellow Butterfly",
          "emoji": "🦋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zebra Butterfly",
          "emoji": "🦋",
          "bgColor": "#000000"
          },
          {
          "letter": "A",
          "word": "Antlion",
          "emoji": "🐜",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Blister Beetle",
          "emoji": "🪲",
          "bgColor": "#F57C00"
          },
          {
          "letter": "C",
          "word": "Cockroach",
          "emoji": "🪳",
          "bgColor": "#3E2723"
          },
          {
          "letter": "D",
          "word": "Dung Beetle",
          "emoji": "🪲",
          "bgColor": "#3F2C2C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsTropicalInsects1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Insects - Part 1",
          videoId: "insects-tropical-insects-1",
          bgGradient: ["#FF6F00","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [
          {
          "letter": "A",
          "word": "Atlas Moth",
          "emoji": "🦋",
          "bgColor": "#8B4513"
          },
          {
          "letter": "B",
          "word": "Bee-eater",
          "emoji": "🐝",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Cicada",
          "emoji": "🪲",
          "bgColor": "#795548"
          },
          {
          "letter": "D",
          "word": "Damselfly",
          "emoji": "🪰",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "E",
          "word": "Emerald Dragonfly",
          "emoji": "🪰",
          "bgColor": "#00897B"
          },
          {
          "letter": "F",
          "word": "Firefly",
          "emoji": "🪲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "G",
          "word": "Grasshopper",
          "emoji": "🦗",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "H",
          "word": "Hawk Moth",
          "emoji": "🦋",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "I",
          "word": "Indian Stick Insect",
          "emoji": "🦗",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "J",
          "word": "Jewel Beetle",
          "emoji": "🪲",
          "bgColor": "#00BCD4"
          },
          {
          "letter": "K",
          "word": "Katydid",
          "emoji": "🦗",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Ladybug",
          "emoji": "🐞",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Malabar Cicada",
          "emoji": "🪲",
          "bgColor": "#37474F"
          },
          {
          "letter": "N",
          "word": "Nymph",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Orange Tip Butterfly",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Praying Mantis",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Q",
          "word": "Queen Alexandra Parrot",
          "emoji": "🦋",
          "bgColor": "#5E35B1"
          },
          {
          "letter": "R",
          "word": "Red Ant",
          "emoji": "🐜",
          "bgColor": "#C62828"
          },
          {
          "letter": "S",
          "word": "Spider",
          "emoji": "🕷️",
          "bgColor": "#37474F"
          },
          {
          "letter": "T",
          "word": "Termite",
          "emoji": "🪲",
          "bgColor": "#5D4037"
          },
          {
          "letter": "U",
          "word": "Unicorn Beetle",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "V",
          "word": "Viceroy Butterfly",
          "emoji": "🦋",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "W",
          "word": "Wasp",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "X",
          "word": "Xeme Insect",
          "emoji": "🦗",
          "bgColor": "#689F38"
          },
          {
          "letter": "Y",
          "word": "Yellow Butterfly",
          "emoji": "🦋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zebra Butterfly",
          "emoji": "🦋",
          "bgColor": "#000000"
          },
          {
          "letter": "A",
          "word": "Antlion",
          "emoji": "🐜",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Blister Beetle",
          "emoji": "🪲",
          "bgColor": "#F57C00"
          },
          {
          "letter": "C",
          "word": "Cockroach",
          "emoji": "🪳",
          "bgColor": "#3E2723"
          },
          {
          "letter": "D",
          "word": "Dung Beetle",
          "emoji": "🪲",
          "bgColor": "#3F2C2C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsTinyCreatures1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tiny Creatures - Part 1",
          videoId: "insects-tiny-creatures-1",
          bgGradient: ["#00897B","#B2DFDB"] as [string, string],
          accentColor: "#004D40",
          letters: [
          {
          "letter": "A",
          "word": "Atlas Moth",
          "emoji": "🦋",
          "bgColor": "#8B4513"
          },
          {
          "letter": "B",
          "word": "Bee-eater",
          "emoji": "🐝",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Cicada",
          "emoji": "🪲",
          "bgColor": "#795548"
          },
          {
          "letter": "D",
          "word": "Damselfly",
          "emoji": "🪰",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "E",
          "word": "Emerald Dragonfly",
          "emoji": "🪰",
          "bgColor": "#00897B"
          },
          {
          "letter": "F",
          "word": "Firefly",
          "emoji": "🪲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "G",
          "word": "Grasshopper",
          "emoji": "🦗",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "H",
          "word": "Hawk Moth",
          "emoji": "🦋",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "I",
          "word": "Indian Stick Insect",
          "emoji": "🦗",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "J",
          "word": "Jewel Beetle",
          "emoji": "🪲",
          "bgColor": "#00BCD4"
          },
          {
          "letter": "K",
          "word": "Katydid",
          "emoji": "🦗",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Ladybug",
          "emoji": "🐞",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Malabar Cicada",
          "emoji": "🪲",
          "bgColor": "#37474F"
          },
          {
          "letter": "N",
          "word": "Nymph",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Orange Tip Butterfly",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Praying Mantis",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Q",
          "word": "Queen Alexandra Parrot",
          "emoji": "🦋",
          "bgColor": "#5E35B1"
          },
          {
          "letter": "R",
          "word": "Red Ant",
          "emoji": "🐜",
          "bgColor": "#C62828"
          },
          {
          "letter": "S",
          "word": "Spider",
          "emoji": "🕷️",
          "bgColor": "#37474F"
          },
          {
          "letter": "T",
          "word": "Termite",
          "emoji": "🪲",
          "bgColor": "#5D4037"
          },
          {
          "letter": "U",
          "word": "Unicorn Beetle",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "V",
          "word": "Viceroy Butterfly",
          "emoji": "🦋",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "W",
          "word": "Wasp",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "X",
          "word": "Xeme Insect",
          "emoji": "🦗",
          "bgColor": "#689F38"
          },
          {
          "letter": "Y",
          "word": "Yellow Butterfly",
          "emoji": "🦋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zebra Butterfly",
          "emoji": "🦋",
          "bgColor": "#000000"
          },
          {
          "letter": "A",
          "word": "Antlion",
          "emoji": "🐜",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Blister Beetle",
          "emoji": "🪲",
          "bgColor": "#F57C00"
          },
          {
          "letter": "C",
          "word": "Cockroach",
          "emoji": "🪳",
          "bgColor": "#3E2723"
          },
          {
          "letter": "D",
          "word": "Dung Beetle",
          "emoji": "🪲",
          "bgColor": "#3F2C2C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsAmazingInsects1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Amazing Insects - Part 1",
          videoId: "insects-amazing-insects-1",
          bgGradient: ["#C62828","#FFCDD2"] as [string, string],
          accentColor: "#B71C1C",
          letters: [
          {
          "letter": "A",
          "word": "Atlas Moth",
          "emoji": "🦋",
          "bgColor": "#8B4513"
          },
          {
          "letter": "B",
          "word": "Bee-eater",
          "emoji": "🐝",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Cicada",
          "emoji": "🪲",
          "bgColor": "#795548"
          },
          {
          "letter": "D",
          "word": "Damselfly",
          "emoji": "🪰",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "E",
          "word": "Emerald Dragonfly",
          "emoji": "🪰",
          "bgColor": "#00897B"
          },
          {
          "letter": "F",
          "word": "Firefly",
          "emoji": "🪲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "G",
          "word": "Grasshopper",
          "emoji": "🦗",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "H",
          "word": "Hawk Moth",
          "emoji": "🦋",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "I",
          "word": "Indian Stick Insect",
          "emoji": "🦗",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "J",
          "word": "Jewel Beetle",
          "emoji": "🪲",
          "bgColor": "#00BCD4"
          },
          {
          "letter": "K",
          "word": "Katydid",
          "emoji": "🦗",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Ladybug",
          "emoji": "🐞",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Malabar Cicada",
          "emoji": "🪲",
          "bgColor": "#37474F"
          },
          {
          "letter": "N",
          "word": "Nymph",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Orange Tip Butterfly",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Praying Mantis",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Q",
          "word": "Queen Alexandra Parrot",
          "emoji": "🦋",
          "bgColor": "#5E35B1"
          },
          {
          "letter": "R",
          "word": "Red Ant",
          "emoji": "🐜",
          "bgColor": "#C62828"
          },
          {
          "letter": "S",
          "word": "Spider",
          "emoji": "🕷️",
          "bgColor": "#37474F"
          },
          {
          "letter": "T",
          "word": "Termite",
          "emoji": "🪲",
          "bgColor": "#5D4037"
          },
          {
          "letter": "U",
          "word": "Unicorn Beetle",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "V",
          "word": "Viceroy Butterfly",
          "emoji": "🦋",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "W",
          "word": "Wasp",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "X",
          "word": "Xeme Insect",
          "emoji": "🦗",
          "bgColor": "#689F38"
          },
          {
          "letter": "Y",
          "word": "Yellow Butterfly",
          "emoji": "🦋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zebra Butterfly",
          "emoji": "🦋",
          "bgColor": "#000000"
          },
          {
          "letter": "A",
          "word": "Antlion",
          "emoji": "🐜",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Blister Beetle",
          "emoji": "🪲",
          "bgColor": "#F57C00"
          },
          {
          "letter": "C",
          "word": "Cockroach",
          "emoji": "🪳",
          "bgColor": "#3E2723"
          },
          {
          "letter": "D",
          "word": "Dung Beetle",
          "emoji": "🪲",
          "bgColor": "#3F2C2C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsForestInsects3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Forest Insects - Part 3",
          videoId: "insects-forest-insects-3",
          bgGradient: ["#1B5E20","#C8E6C9"] as [string, string],
          accentColor: "#2E7D32",
          letters: [
          {
          "letter": "A",
          "word": "Ant",
          "emoji": "🐜",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Butterfly",
          "emoji": "🦋",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "C",
          "word": "Cicada",
          "emoji": "🪲",
          "bgColor": "#00695C"
          },
          {
          "letter": "D",
          "word": "Dragonfly",
          "emoji": "🪰",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "E",
          "word": "Earwig",
          "emoji": "🪳",
          "bgColor": "#5D4037"
          },
          {
          "letter": "F",
          "word": "Firefly",
          "emoji": "🪲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "G",
          "word": "Grasshopper",
          "emoji": "🦗",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "H",
          "word": "Honeybee",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "I",
          "word": "Inchworm",
          "emoji": "🐛",
          "bgColor": "#689F38"
          },
          {
          "letter": "J",
          "word": "June Bug",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "K",
          "word": "Katydid",
          "emoji": "🦗",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Ladybug",
          "emoji": "🐞",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Mosquito",
          "emoji": "🦟",
          "bgColor": "#37474F"
          },
          {
          "letter": "N",
          "word": "Nymph",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Orange Tip",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Praying Mantis",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Q",
          "word": "Queen Bee",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "R",
          "word": "Robber Fly",
          "emoji": "🪰",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Spider",
          "emoji": "🕷️",
          "bgColor": "#37474F"
          },
          {
          "letter": "T",
          "word": "Termite",
          "emoji": "🪳",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "U",
          "word": "Underwing Moth",
          "emoji": "🪰",
          "bgColor": "#4A235A"
          },
          {
          "letter": "V",
          "word": "Vespid Wasp",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "W",
          "word": "Wasp",
          "emoji": "🐝",
          "bgColor": "#FFB300"
          },
          {
          "letter": "X",
          "word": "Xeme Insect",
          "emoji": "🦗",
          "bgColor": "#689F38"
          },
          {
          "letter": "Y",
          "word": "Yellow Butterfly",
          "emoji": "🦋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zebra Butterfly",
          "emoji": "🦋",
          "bgColor": "#000000"
          },
          {
          "letter": "A",
          "word": "Antlion",
          "emoji": "🐜",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Blister Beetle",
          "emoji": "🪲",
          "bgColor": "#F57C00"
          },
          {
          "letter": "C",
          "word": "Cockroach",
          "emoji": "🪳",
          "bgColor": "#3E2723"
          },
          {
          "letter": "D",
          "word": "Dung Beetle",
          "emoji": "🪲",
          "bgColor": "#3F2C2C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsTropicalInsects2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Insects - Part 2",
          videoId: "insects-tropical-insects-2",
          bgGradient: ["#FF8F00","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [
          {
          "letter": "A",
          "word": "Ant",
          "emoji": "🐜",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Butterfly",
          "emoji": "🦋",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "C",
          "word": "Cicada",
          "emoji": "🪲",
          "bgColor": "#00695C"
          },
          {
          "letter": "D",
          "word": "Dragonfly",
          "emoji": "🪰",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "E",
          "word": "Earwig",
          "emoji": "🪳",
          "bgColor": "#5D4037"
          },
          {
          "letter": "F",
          "word": "Firefly",
          "emoji": "🪲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "G",
          "word": "Grasshopper",
          "emoji": "🦗",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "H",
          "word": "Honeybee",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "I",
          "word": "Inchworm",
          "emoji": "🐛",
          "bgColor": "#689F38"
          },
          {
          "letter": "J",
          "word": "June Bug",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "K",
          "word": "Katydid",
          "emoji": "🦗",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Ladybug",
          "emoji": "🐞",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Mosquito",
          "emoji": "🦟",
          "bgColor": "#37474F"
          },
          {
          "letter": "N",
          "word": "Nymph",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Orange Tip",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Praying Mantis",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Q",
          "word": "Queen Bee",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "R",
          "word": "Robber Fly",
          "emoji": "🪰",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Spider",
          "emoji": "🕷️",
          "bgColor": "#37474F"
          },
          {
          "letter": "T",
          "word": "Termite",
          "emoji": "🪳",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "U",
          "word": "Underwing Moth",
          "emoji": "🪰",
          "bgColor": "#4A235A"
          },
          {
          "letter": "V",
          "word": "Vespid Wasp",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "W",
          "word": "Wasp",
          "emoji": "🐝",
          "bgColor": "#FFB300"
          },
          {
          "letter": "X",
          "word": "Xeme Insect",
          "emoji": "🦗",
          "bgColor": "#689F38"
          },
          {
          "letter": "Y",
          "word": "Yellow Butterfly",
          "emoji": "🦋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zebra Butterfly",
          "emoji": "🦋",
          "bgColor": "#000000"
          },
          {
          "letter": "A",
          "word": "Antlion",
          "emoji": "🐜",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Blister Beetle",
          "emoji": "🪲",
          "bgColor": "#F57C00"
          },
          {
          "letter": "C",
          "word": "Cockroach",
          "emoji": "🪳",
          "bgColor": "#3E2723"
          },
          {
          "letter": "D",
          "word": "Dung Beetle",
          "emoji": "🪲",
          "bgColor": "#3F2C2C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsTropicalInsects3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Insects - Part 3",
          videoId: "insects-tropical-insects-3",
          bgGradient: ["#FFA000","#FFECB3"] as [string, string],
          accentColor: "#FF8F00",
          letters: [
          {
          "letter": "A",
          "word": "Ant",
          "emoji": "🐜",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Butterfly",
          "emoji": "🦋",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "C",
          "word": "Cicada",
          "emoji": "🪲",
          "bgColor": "#00695C"
          },
          {
          "letter": "D",
          "word": "Dragonfly",
          "emoji": "🪰",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "E",
          "word": "Earwig",
          "emoji": "🪳",
          "bgColor": "#5D4037"
          },
          {
          "letter": "F",
          "word": "Firefly",
          "emoji": "🪲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "G",
          "word": "Grasshopper",
          "emoji": "🦗",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "H",
          "word": "Honeybee",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "I",
          "word": "Inchworm",
          "emoji": "🐛",
          "bgColor": "#689F38"
          },
          {
          "letter": "J",
          "word": "June Bug",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "K",
          "word": "Katydid",
          "emoji": "🦗",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Ladybug",
          "emoji": "🐞",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Mosquito",
          "emoji": "🦟",
          "bgColor": "#37474F"
          },
          {
          "letter": "N",
          "word": "Nymph",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Orange Tip",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Praying Mantis",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Q",
          "word": "Queen Bee",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "R",
          "word": "Robber Fly",
          "emoji": "🪰",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Spider",
          "emoji": "🕷️",
          "bgColor": "#37474F"
          },
          {
          "letter": "T",
          "word": "Termite",
          "emoji": "🪳",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "U",
          "word": "Underwing Moth",
          "emoji": "🪰",
          "bgColor": "#4A235A"
          },
          {
          "letter": "V",
          "word": "Vespid Wasp",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "W",
          "word": "Wasp",
          "emoji": "🐝",
          "bgColor": "#FFB300"
          },
          {
          "letter": "X",
          "word": "Xeme Insect",
          "emoji": "🦗",
          "bgColor": "#689F38"
          },
          {
          "letter": "Y",
          "word": "Yellow Butterfly",
          "emoji": "🦋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zebra Butterfly",
          "emoji": "🦋",
          "bgColor": "#000000"
          },
          {
          "letter": "A",
          "word": "Antlion",
          "emoji": "🐜",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Blister Beetle",
          "emoji": "🪲",
          "bgColor": "#F57C00"
          },
          {
          "letter": "C",
          "word": "Cockroach",
          "emoji": "🪳",
          "bgColor": "#3E2723"
          },
          {
          "letter": "D",
          "word": "Dung Beetle",
          "emoji": "🪲",
          "bgColor": "#3F2C2C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsTinyCreatures2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tiny Creatures - Part 2",
          videoId: "insects-tiny-creatures-2",
          bgGradient: ["#00796B","#80CBC4"] as [string, string],
          accentColor: "#00695C",
          letters: [
          {
          "letter": "A",
          "word": "Ant",
          "emoji": "🐜",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Butterfly",
          "emoji": "🦋",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "C",
          "word": "Cicada",
          "emoji": "🪲",
          "bgColor": "#00695C"
          },
          {
          "letter": "D",
          "word": "Dragonfly",
          "emoji": "🪰",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "E",
          "word": "Earwig",
          "emoji": "🪳",
          "bgColor": "#5D4037"
          },
          {
          "letter": "F",
          "word": "Firefly",
          "emoji": "🪲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "G",
          "word": "Grasshopper",
          "emoji": "🦗",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "H",
          "word": "Honeybee",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "I",
          "word": "Inchworm",
          "emoji": "🐛",
          "bgColor": "#689F38"
          },
          {
          "letter": "J",
          "word": "June Bug",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "K",
          "word": "Katydid",
          "emoji": "🦗",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Ladybug",
          "emoji": "🐞",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Mosquito",
          "emoji": "🦟",
          "bgColor": "#37474F"
          },
          {
          "letter": "N",
          "word": "Nymph",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Orange Tip",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Praying Mantis",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Q",
          "word": "Queen Bee",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "R",
          "word": "Robber Fly",
          "emoji": "🪰",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Spider",
          "emoji": "🕷️",
          "bgColor": "#37474F"
          },
          {
          "letter": "T",
          "word": "Termite",
          "emoji": "🪳",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "U",
          "word": "Underwing Moth",
          "emoji": "🪰",
          "bgColor": "#4A235A"
          },
          {
          "letter": "V",
          "word": "Vespid Wasp",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "W",
          "word": "Wasp",
          "emoji": "🐝",
          "bgColor": "#FFB300"
          },
          {
          "letter": "X",
          "word": "Xeme Insect",
          "emoji": "🦗",
          "bgColor": "#689F38"
          },
          {
          "letter": "Y",
          "word": "Yellow Butterfly",
          "emoji": "🦋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zebra Butterfly",
          "emoji": "🦋",
          "bgColor": "#000000"
          },
          {
          "letter": "A",
          "word": "Antlion",
          "emoji": "🐜",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Blister Beetle",
          "emoji": "🪲",
          "bgColor": "#F57C00"
          },
          {
          "letter": "C",
          "word": "Cockroach",
          "emoji": "🪳",
          "bgColor": "#3E2723"
          },
          {
          "letter": "D",
          "word": "Dung Beetle",
          "emoji": "🪲",
          "bgColor": "#3F2C2C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsTinyCreatures3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tiny Creatures - Part 3",
          videoId: "insects-tiny-creatures-3",
          bgGradient: ["#00695C","#4DB6AC"] as [string, string],
          accentColor: "#004D40",
          letters: [
          {
          "letter": "A",
          "word": "Ant",
          "emoji": "🐜",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Butterfly",
          "emoji": "🦋",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "C",
          "word": "Cicada",
          "emoji": "🪲",
          "bgColor": "#00695C"
          },
          {
          "letter": "D",
          "word": "Dragonfly",
          "emoji": "🪰",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "E",
          "word": "Earwig",
          "emoji": "🪳",
          "bgColor": "#5D4037"
          },
          {
          "letter": "F",
          "word": "Firefly",
          "emoji": "🪲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "G",
          "word": "Grasshopper",
          "emoji": "🦗",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "H",
          "word": "Honeybee",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "I",
          "word": "Inchworm",
          "emoji": "🐛",
          "bgColor": "#689F38"
          },
          {
          "letter": "J",
          "word": "June Bug",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "K",
          "word": "Katydid",
          "emoji": "🦗",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Ladybug",
          "emoji": "🐞",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Mosquito",
          "emoji": "🦟",
          "bgColor": "#37474F"
          },
          {
          "letter": "N",
          "word": "Nymph",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Orange Tip",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Praying Mantis",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Q",
          "word": "Queen Bee",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "R",
          "word": "Robber Fly",
          "emoji": "🪰",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Spider",
          "emoji": "🕷️",
          "bgColor": "#37474F"
          },
          {
          "letter": "T",
          "word": "Termite",
          "emoji": "🪳",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "U",
          "word": "Underwing Moth",
          "emoji": "🪰",
          "bgColor": "#4A235A"
          },
          {
          "letter": "V",
          "word": "Vespid Wasp",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "W",
          "word": "Wasp",
          "emoji": "🐝",
          "bgColor": "#FFB300"
          },
          {
          "letter": "X",
          "word": "Xeme Insect",
          "emoji": "🦗",
          "bgColor": "#689F38"
          },
          {
          "letter": "Y",
          "word": "Yellow Butterfly",
          "emoji": "🦋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zebra Butterfly",
          "emoji": "🦋",
          "bgColor": "#000000"
          },
          {
          "letter": "A",
          "word": "Antlion",
          "emoji": "🐜",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Blister Beetle",
          "emoji": "🪲",
          "bgColor": "#F57C00"
          },
          {
          "letter": "C",
          "word": "Cockroach",
          "emoji": "🪳",
          "bgColor": "#3E2723"
          },
          {
          "letter": "D",
          "word": "Dung Beetle",
          "emoji": "🪲",
          "bgColor": "#3F2C2C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsNightInsects1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Night Insects - Part 1",
          videoId: "insects-night-insects-1",
          bgGradient: ["#1A237E","#7986CB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [
          {
          "letter": "A",
          "word": "Ant",
          "emoji": "🐜",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Butterfly",
          "emoji": "🦋",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "C",
          "word": "Cicada",
          "emoji": "🪲",
          "bgColor": "#00695C"
          },
          {
          "letter": "D",
          "word": "Dragonfly",
          "emoji": "🪰",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "E",
          "word": "Earwig",
          "emoji": "🪳",
          "bgColor": "#5D4037"
          },
          {
          "letter": "F",
          "word": "Firefly",
          "emoji": "🪲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "G",
          "word": "Grasshopper",
          "emoji": "🦗",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "H",
          "word": "Honeybee",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "I",
          "word": "Inchworm",
          "emoji": "🐛",
          "bgColor": "#689F38"
          },
          {
          "letter": "J",
          "word": "June Bug",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "K",
          "word": "Katydid",
          "emoji": "🦗",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Ladybug",
          "emoji": "🐞",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Mosquito",
          "emoji": "🦟",
          "bgColor": "#37474F"
          },
          {
          "letter": "N",
          "word": "Nymph",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Orange Tip",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Praying Mantis",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Q",
          "word": "Queen Bee",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "R",
          "word": "Robber Fly",
          "emoji": "🪰",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Spider",
          "emoji": "🕷️",
          "bgColor": "#37474F"
          },
          {
          "letter": "T",
          "word": "Termite",
          "emoji": "🪳",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "U",
          "word": "Underwing Moth",
          "emoji": "🪰",
          "bgColor": "#4A235A"
          },
          {
          "letter": "V",
          "word": "Vespid Wasp",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "W",
          "word": "Wasp",
          "emoji": "🐝",
          "bgColor": "#FFB300"
          },
          {
          "letter": "X",
          "word": "Xeme Insect",
          "emoji": "🦗",
          "bgColor": "#689F38"
          },
          {
          "letter": "Y",
          "word": "Yellow Butterfly",
          "emoji": "🦋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zebra Butterfly",
          "emoji": "🦋",
          "bgColor": "#000000"
          },
          {
          "letter": "A",
          "word": "Antlion",
          "emoji": "🐜",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Blister Beetle",
          "emoji": "🪲",
          "bgColor": "#F57C00"
          },
          {
          "letter": "C",
          "word": "Cockroach",
          "emoji": "🪳",
          "bgColor": "#3E2723"
          },
          {
          "letter": "D",
          "word": "Dung Beetle",
          "emoji": "🪲",
          "bgColor": "#3F2C2C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsNightInsects2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Night Insects - Part 2",
          videoId: "insects-night-insects-2",
          bgGradient: ["#283593","#9FA8DA"] as [string, string],
          accentColor: "#1A237E",
          letters: [
          {
          "letter": "A",
          "word": "Ant",
          "emoji": "🐜",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Butterfly",
          "emoji": "🦋",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "C",
          "word": "Cicada",
          "emoji": "🪲",
          "bgColor": "#00695C"
          },
          {
          "letter": "D",
          "word": "Dragonfly",
          "emoji": "🪰",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "E",
          "word": "Earwig",
          "emoji": "🪳",
          "bgColor": "#5D4037"
          },
          {
          "letter": "F",
          "word": "Firefly",
          "emoji": "🪲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "G",
          "word": "Grasshopper",
          "emoji": "🦗",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "H",
          "word": "Honeybee",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "I",
          "word": "Inchworm",
          "emoji": "🐛",
          "bgColor": "#689F38"
          },
          {
          "letter": "J",
          "word": "June Bug",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "K",
          "word": "Katydid",
          "emoji": "🦗",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Ladybug",
          "emoji": "🐞",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Mosquito",
          "emoji": "🦟",
          "bgColor": "#37474F"
          },
          {
          "letter": "N",
          "word": "Nymph",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Orange Tip",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Praying Mantis",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Q",
          "word": "Queen Bee",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "R",
          "word": "Robber Fly",
          "emoji": "🪰",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Spider",
          "emoji": "🕷️",
          "bgColor": "#37474F"
          },
          {
          "letter": "T",
          "word": "Termite",
          "emoji": "🪳",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "U",
          "word": "Underwing Moth",
          "emoji": "🪰",
          "bgColor": "#4A235A"
          },
          {
          "letter": "V",
          "word": "Vespid Wasp",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "W",
          "word": "Wasp",
          "emoji": "🐝",
          "bgColor": "#FFB300"
          },
          {
          "letter": "X",
          "word": "Xeme Insect",
          "emoji": "🦗",
          "bgColor": "#689F38"
          },
          {
          "letter": "Y",
          "word": "Yellow Butterfly",
          "emoji": "🦋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zebra Butterfly",
          "emoji": "🦋",
          "bgColor": "#000000"
          },
          {
          "letter": "A",
          "word": "Antlion",
          "emoji": "🐜",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Blister Beetle",
          "emoji": "🪲",
          "bgColor": "#F57C00"
          },
          {
          "letter": "C",
          "word": "Cockroach",
          "emoji": "🪳",
          "bgColor": "#3E2723"
          },
          {
          "letter": "D",
          "word": "Dung Beetle",
          "emoji": "🪲",
          "bgColor": "#3F2C2C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsNightInsects3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Night Insects - Part 3",
          videoId: "insects-night-insects-3",
          bgGradient: ["#303F9F","#C5CAE9"] as [string, string],
          accentColor: "#283593",
          letters: [
          {
          "letter": "A",
          "word": "Ant",
          "emoji": "🐜",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Butterfly",
          "emoji": "🦋",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "C",
          "word": "Cicada",
          "emoji": "🪲",
          "bgColor": "#00695C"
          },
          {
          "letter": "D",
          "word": "Dragonfly",
          "emoji": "🪰",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "E",
          "word": "Earwig",
          "emoji": "🪳",
          "bgColor": "#5D4037"
          },
          {
          "letter": "F",
          "word": "Firefly",
          "emoji": "🪲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "G",
          "word": "Grasshopper",
          "emoji": "🦗",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "H",
          "word": "Honeybee",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "I",
          "word": "Inchworm",
          "emoji": "🐛",
          "bgColor": "#689F38"
          },
          {
          "letter": "J",
          "word": "June Bug",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "K",
          "word": "Katydid",
          "emoji": "🦗",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Ladybug",
          "emoji": "🐞",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Mosquito",
          "emoji": "🦟",
          "bgColor": "#37474F"
          },
          {
          "letter": "N",
          "word": "Nymph",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Orange Tip",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Praying Mantis",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Q",
          "word": "Queen Bee",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "R",
          "word": "Robber Fly",
          "emoji": "🪰",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Spider",
          "emoji": "🕷️",
          "bgColor": "#37474F"
          },
          {
          "letter": "T",
          "word": "Termite",
          "emoji": "🪳",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "U",
          "word": "Underwing Moth",
          "emoji": "🪰",
          "bgColor": "#4A235A"
          },
          {
          "letter": "V",
          "word": "Vespid Wasp",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "W",
          "word": "Wasp",
          "emoji": "🐝",
          "bgColor": "#FFB300"
          },
          {
          "letter": "X",
          "word": "Xeme Insect",
          "emoji": "🦗",
          "bgColor": "#689F38"
          },
          {
          "letter": "Y",
          "word": "Yellow Butterfly",
          "emoji": "🦋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zebra Butterfly",
          "emoji": "🦋",
          "bgColor": "#000000"
          },
          {
          "letter": "A",
          "word": "Antlion",
          "emoji": "🐜",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Blister Beetle",
          "emoji": "🪲",
          "bgColor": "#F57C00"
          },
          {
          "letter": "C",
          "word": "Cockroach",
          "emoji": "🪳",
          "bgColor": "#3E2723"
          },
          {
          "letter": "D",
          "word": "Dung Beetle",
          "emoji": "🪲",
          "bgColor": "#3F2C2C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsAmazingInsects2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Amazing Insects - Part 2",
          videoId: "insects-amazing-insects-2",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#C62828",
          letters: [
          {
          "letter": "A",
          "word": "Ant",
          "emoji": "🐜",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Butterfly",
          "emoji": "🦋",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "C",
          "word": "Cicada",
          "emoji": "🪲",
          "bgColor": "#00695C"
          },
          {
          "letter": "D",
          "word": "Dragonfly",
          "emoji": "🪰",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "E",
          "word": "Earwig",
          "emoji": "🪳",
          "bgColor": "#5D4037"
          },
          {
          "letter": "F",
          "word": "Firefly",
          "emoji": "🪲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "G",
          "word": "Grasshopper",
          "emoji": "🦗",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "H",
          "word": "Honeybee",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "I",
          "word": "Inchworm",
          "emoji": "🐛",
          "bgColor": "#689F38"
          },
          {
          "letter": "J",
          "word": "June Bug",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "K",
          "word": "Katydid",
          "emoji": "🦗",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Ladybug",
          "emoji": "🐞",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Mosquito",
          "emoji": "🦟",
          "bgColor": "#37474F"
          },
          {
          "letter": "N",
          "word": "Nymph",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Orange Tip",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Praying Mantis",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Q",
          "word": "Queen Bee",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "R",
          "word": "Robber Fly",
          "emoji": "🪰",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Spider",
          "emoji": "🕷️",
          "bgColor": "#37474F"
          },
          {
          "letter": "T",
          "word": "Termite",
          "emoji": "🪳",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "U",
          "word": "Underwing Moth",
          "emoji": "🪰",
          "bgColor": "#4A235A"
          },
          {
          "letter": "V",
          "word": "Vespid Wasp",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "W",
          "word": "Wasp",
          "emoji": "🐝",
          "bgColor": "#FFB300"
          },
          {
          "letter": "X",
          "word": "Xeme Insect",
          "emoji": "🦗",
          "bgColor": "#689F38"
          },
          {
          "letter": "Y",
          "word": "Yellow Butterfly",
          "emoji": "🦋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zebra Butterfly",
          "emoji": "🦋",
          "bgColor": "#000000"
          },
          {
          "letter": "A",
          "word": "Antlion",
          "emoji": "🐜",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Blister Beetle",
          "emoji": "🪲",
          "bgColor": "#F57C00"
          },
          {
          "letter": "C",
          "word": "Cockroach",
          "emoji": "🪳",
          "bgColor": "#3E2723"
          },
          {
          "letter": "D",
          "word": "Dung Beetle",
          "emoji": "🪲",
          "bgColor": "#3F2C2C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InsectsAmazingInsects3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Amazing Insects - Part 3",
          videoId: "insects-amazing-insects-3",
          bgGradient: ["#E53935","#FFEBEE"] as [string, string],
          accentColor: "#D32F2F",
          letters: [
          {
          "letter": "A",
          "word": "Ant",
          "emoji": "🐜",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Butterfly",
          "emoji": "🦋",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "C",
          "word": "Cicada",
          "emoji": "🪲",
          "bgColor": "#00695C"
          },
          {
          "letter": "D",
          "word": "Dragonfly",
          "emoji": "🪰",
          "bgColor": "#1E88E5"
          },
          {
          "letter": "E",
          "word": "Earwig",
          "emoji": "🪳",
          "bgColor": "#5D4037"
          },
          {
          "letter": "F",
          "word": "Firefly",
          "emoji": "🪲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "G",
          "word": "Grasshopper",
          "emoji": "🦗",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "H",
          "word": "Honeybee",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "I",
          "word": "Inchworm",
          "emoji": "🐛",
          "bgColor": "#689F38"
          },
          {
          "letter": "J",
          "word": "June Bug",
          "emoji": "🪲",
          "bgColor": "#827717"
          },
          {
          "letter": "K",
          "word": "Katydid",
          "emoji": "🦗",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Ladybug",
          "emoji": "🐞",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Mosquito",
          "emoji": "🦟",
          "bgColor": "#37474F"
          },
          {
          "letter": "N",
          "word": "Nymph",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Orange Tip",
          "emoji": "🦋",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Praying Mantis",
          "emoji": "🦗",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Q",
          "word": "Queen Bee",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "R",
          "word": "Robber Fly",
          "emoji": "🪰",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Spider",
          "emoji": "🕷️",
          "bgColor": "#37474F"
          },
          {
          "letter": "T",
          "word": "Termite",
          "emoji": "🪳",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "U",
          "word": "Underwing Moth",
          "emoji": "🪰",
          "bgColor": "#4A235A"
          },
          {
          "letter": "V",
          "word": "Vespid Wasp",
          "emoji": "🐝",
          "bgColor": "#FFA000"
          },
          {
          "letter": "W",
          "word": "Wasp",
          "emoji": "🐝",
          "bgColor": "#FFB300"
          },
          {
          "letter": "X",
          "word": "Xeme Insect",
          "emoji": "🦗",
          "bgColor": "#689F38"
          },
          {
          "letter": "Y",
          "word": "Yellow Butterfly",
          "emoji": "🦋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zebra Butterfly",
          "emoji": "🦋",
          "bgColor": "#000000"
          },
          {
          "letter": "A",
          "word": "Antlion",
          "emoji": "🐜",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Blister Beetle",
          "emoji": "🪲",
          "bgColor": "#F57C00"
          },
          {
          "letter": "C",
          "word": "Cockroach",
          "emoji": "🪳",
          "bgColor": "#3E2723"
          },
          {
          "letter": "D",
          "word": "Dung Beetle",
          "emoji": "🪲",
          "bgColor": "#3F2C2C"
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
