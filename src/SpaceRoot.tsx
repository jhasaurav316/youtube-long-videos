import "./index.css";
import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";
import React from "react";

export const SpaceRemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="SpacePlanets1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Moons - Part 1",
          videoId: "space-planets-1",
          bgGradient: ["#1A237E","#7986CB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [
          {
          "letter": "M",
          "word": "Mercury",
          "emoji": "🪨",
          "bgColor": "#607D8B"
          },
          {
          "letter": "V",
          "word": "Venus",
          "emoji": "🌍",
          "bgColor": "#FFA000"
          },
          {
          "letter": "E",
          "word": "Earth",
          "emoji": "🌍",
          "bgColor": "#1565C0"
          },
          {
          "letter": "M",
          "word": "Mars",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "J",
          "word": "Jupiter",
          "emoji": "🪐",
          "bgColor": "#FF9800"
          },
          {
          "letter": "S",
          "word": "Saturn",
          "emoji": "🪐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "U",
          "word": "Uranus",
          "emoji": "🔵",
          "bgColor": "#00BCD4"
          },
          {
          "letter": "N",
          "word": "Neptune",
          "emoji": "🔵",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "P",
          "word": "Pluto",
          "emoji": "🪨",
          "bgColor": "#795548"
          },
          {
          "letter": "S",
          "word": "Sun",
          "emoji": "☀️",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "M",
          "word": "Moon",
          "emoji": "🌙",
          "bgColor": "#FFA000"
          },
          {
          "letter": "C",
          "word": "Ceres",
          "emoji": "🪨",
          "bgColor": "#607D8B"
          },
          {
          "letter": "E",
          "word": "Europa",
          "emoji": "🌍",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "G",
          "word": "Ganymede",
          "emoji": "🌍",
          "bgColor": "#827717"
          },
          {
          "letter": "I",
          "word": "Io",
          "emoji": "🌍",
          "bgColor": "#FF5722"
          },
          {
          "letter": "C",
          "word": "Callisto",
          "emoji": "🌍",
          "bgColor": "#455A64"
          },
          {
          "letter": "T",
          "word": "Titan",
          "emoji": "🌍",
          "bgColor": "#FF9800"
          },
          {
          "letter": "E",
          "word": "Enceladus",
          "emoji": "🌍",
          "bgColor": "#E3F2FD"
          },
          {
          "letter": "T",
          "word": "Triton",
          "emoji": "🌍",
          "bgColor": "#0288D1"
          },
          {
          "letter": "P",
          "word": "Phobos",
          "emoji": "🪨",
          "bgColor": "#795548"
          },
          {
          "letter": "D",
          "word": "Deimos",
          "emoji": "🪨",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "M",
          "word": "Miranda",
          "emoji": "🌍",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "A",
          "word": "Ariel",
          "emoji": "🌍",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "O",
          "word": "Oberon",
          "emoji": "🌍",
          "bgColor": "#607D8B"
          },
          {
          "letter": "C",
          "word": "Charon",
          "emoji": "🪨",
          "bgColor": "#455A64"
          },
          {
          "letter": "R",
          "word": "Rhea",
          "emoji": "🌍",
          "bgColor": "#CFD8DC"
          },
          {
          "letter": "I",
          "word": "Iapetus",
          "emoji": "🌍",
          "bgColor": "#263238"
          },
          {
          "letter": "H",
          "word": "Hyperion",
          "emoji": "🪨",
          "bgColor": "#827717"
          },
          {
          "letter": "M",
          "word": "Makemake",
          "emoji": "🪨",
          "bgColor": "#BF360C"
          },
          {
          "letter": "E",
          "word": "Eris",
          "emoji": "🪨",
          "bgColor": "#546E7A"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpacePlanets2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Moons - Part 2",
          videoId: "space-planets-2",
          bgGradient: ["#283593","#9FA8DA"] as [string, string],
          accentColor: "#1A237E",
          letters: [
          {
          "letter": "S",
          "word": "Solar System",
          "emoji": "☀️",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "M",
          "word": "Milky Way",
          "emoji": "🌌",
          "bgColor": "#4A148C"
          },
          {
          "letter": "A",
          "word": "Asteroid Belt",
          "emoji": "🪨",
          "bgColor": "#607D8B"
          },
          {
          "letter": "K",
          "word": "Kuiper Belt",
          "emoji": "🪨",
          "bgColor": "#0288D1"
          },
          {
          "letter": "O",
          "word": "Oort Cloud",
          "emoji": "☁️",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "D",
          "word": "Dwarf Planet",
          "emoji": "🪨",
          "bgColor": "#795548"
          },
          {
          "letter": "G",
          "word": "Gas Giant",
          "emoji": "🪐",
          "bgColor": "#FF9800"
          },
          {
          "letter": "I",
          "word": "Ice Giant",
          "emoji": "🔵",
          "bgColor": "#00BCD4"
          },
          {
          "letter": "R",
          "word": "Rocky Planet",
          "emoji": "🪨",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "T",
          "word": "Terrestrial Planet",
          "emoji": "🌍",
          "bgColor": "#1565C0"
          },
          {
          "letter": "E",
          "word": "Exoplanet",
          "emoji": "🌍",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "N",
          "word": "Nebula",
          "emoji": "🌌",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "C",
          "word": "Comet",
          "emoji": "☄️",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "M",
          "word": "Meteor",
          "emoji": "🌠",
          "bgColor": "#FF5722"
          },
          {
          "letter": "A",
          "word": "Asteroid",
          "emoji": "🪨",
          "bgColor": "#827717"
          },
          {
          "letter": "S",
          "word": "Star",
          "emoji": "⭐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "B",
          "word": "Black Hole",
          "emoji": "🕳️",
          "bgColor": "#263238"
          },
          {
          "letter": "P",
          "word": "Pulsar",
          "emoji": "⭐",
          "bgColor": "#00E676"
          },
          {
          "letter": "Q",
          "word": "Quasar",
          "emoji": "🌟",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "S",
          "word": "Supernova",
          "emoji": "💥",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "W",
          "word": "White Dwarf",
          "emoji": "⚪",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "R",
          "word": "Red Giant",
          "emoji": "🔴",
          "bgColor": "#C62828"
          },
          {
          "letter": "N",
          "word": "Neutron Star",
          "emoji": "⭐",
          "bgColor": "#455A64"
          },
          {
          "letter": "G",
          "word": "Galaxy",
          "emoji": "🌌",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "C",
          "word": "Constellation",
          "emoji": "⭐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "L",
          "word": "Light Year",
          "emoji": "🌟",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "H",
          "word": "Heliosphere",
          "emoji": "☀️",
          "bgColor": "#FF9800"
          },
          {
          "letter": "F",
          "word": "Fireball",
          "emoji": "🔥",
          "bgColor": "#FF5722"
          },
          {
          "letter": "V",
          "word": "Void",
          "emoji": "🕳️",
          "bgColor": "#1A237E"
          },
          {
          "letter": "U",
          "word": "Universe",
          "emoji": "🌌",
          "bgColor": "#311B92"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpacePlanets3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Planets & Moons - Part 3",
          videoId: "space-planets-3",
          bgGradient: ["#303F9F","#C5CAE9"] as [string, string],
          accentColor: "#283593",
          letters: [
          {
          "letter": "E",
          "word": "Earth",
          "emoji": "🌍",
          "bgColor": "#1565C0"
          },
          {
          "letter": "M",
          "word": "Mars Colony",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "V",
          "word": "Venus Surface",
          "emoji": "🌍",
          "bgColor": "#FFA000"
          },
          {
          "letter": "J",
          "word": "Jupiter Storm",
          "emoji": "🪐",
          "bgColor": "#FF9800"
          },
          {
          "letter": "S",
          "word": "Saturn Rings",
          "emoji": "🪐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "U",
          "word": "Uranus Tilt",
          "emoji": "🔵",
          "bgColor": "#00BCD4"
          },
          {
          "letter": "N",
          "word": "Neptune Blue",
          "emoji": "🔵",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "M",
          "word": "Mercury Crater",
          "emoji": "🪨",
          "bgColor": "#607D8B"
          },
          {
          "letter": "P",
          "word": "Pluto Heart",
          "emoji": "🪨",
          "bgColor": "#795548"
          },
          {
          "letter": "S",
          "word": "Sun Core",
          "emoji": "☀️",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "T",
          "word": "Titan Lakes",
          "emoji": "🌍",
          "bgColor": "#FF9800"
          },
          {
          "letter": "E",
          "word": "Europa Ocean",
          "emoji": "🌍",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "G",
          "word": "Great Red Spot",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "I",
          "word": "Io Volcano",
          "emoji": "🌋",
          "bgColor": "#FF5722"
          },
          {
          "letter": "C",
          "word": "Cassini Gap",
          "emoji": "🪐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "R",
          "word": "Ring System",
          "emoji": "💍",
          "bgColor": "#FF9800"
          },
          {
          "letter": "A",
          "word": "Aurora",
          "emoji": "🌌",
          "bgColor": "#00E676"
          },
          {
          "letter": "D",
          "word": "Dark Side Moon",
          "emoji": "🌑",
          "bgColor": "#263238"
          },
          {
          "letter": "K",
          "word": "Kepler Planet",
          "emoji": "🌍",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "L",
          "word": "Lunar Surface",
          "emoji": "🌙",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "O",
          "word": "Olympus Mons",
          "emoji": "🏔️",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Binary Star",
          "emoji": "⭐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "H",
          "word": "Habitable Zone",
          "emoji": "🌍",
          "bgColor": "#43A047"
          },
          {
          "letter": "W",
          "word": "Water on Mars",
          "emoji": "💧",
          "bgColor": "#0288D1"
          },
          {
          "letter": "F",
          "word": "Full Moon",
          "emoji": "🌕",
          "bgColor": "#FFA000"
          },
          {
          "letter": "N",
          "word": "New Moon",
          "emoji": "🌑",
          "bgColor": "#263238"
          },
          {
          "letter": "Q",
          "word": "Quarter Moon",
          "emoji": "🌓",
          "bgColor": "#607D8B"
          },
          {
          "letter": "X",
          "word": "Xenon Planet",
          "emoji": "🌍",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "Y",
          "word": "Young Star",
          "emoji": "⭐",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "Z",
          "word": "Zero Gravity",
          "emoji": "🪐",
          "bgColor": "#42A5F5"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceStarsGalaxies1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Stars & Galaxies - Part 1",
          videoId: "space-stars-galaxies-1",
          bgGradient: ["#4A148C","#CE93D8"] as [string, string],
          accentColor: "#311B92",
          letters: [
          {
          "letter": "S",
          "word": "Sun",
          "emoji": "☀️",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "S",
          "word": "Sirius",
          "emoji": "⭐",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "P",
          "word": "Polaris",
          "emoji": "⭐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "B",
          "word": "Betelgeuse",
          "emoji": "⭐",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "R",
          "word": "Rigel",
          "emoji": "⭐",
          "bgColor": "#1565C0"
          },
          {
          "letter": "A",
          "word": "Aldebaran",
          "emoji": "⭐",
          "bgColor": "#FF9800"
          },
          {
          "letter": "V",
          "word": "Vega",
          "emoji": "⭐",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "C",
          "word": "Canopus",
          "emoji": "⭐",
          "bgColor": "#FFA000"
          },
          {
          "letter": "A",
          "word": "Antares",
          "emoji": "⭐",
          "bgColor": "#C62828"
          },
          {
          "letter": "D",
          "word": "Deneb",
          "emoji": "⭐",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "F",
          "word": "Fomalhaut",
          "emoji": "⭐",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "P",
          "word": "Procyon",
          "emoji": "⭐",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "S",
          "word": "Spica",
          "emoji": "⭐",
          "bgColor": "#1565C0"
          },
          {
          "letter": "A",
          "word": "Arcturus",
          "emoji": "⭐",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "C",
          "word": "Capella",
          "emoji": "⭐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "M",
          "word": "Mira",
          "emoji": "⭐",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "R",
          "word": "Regulus",
          "emoji": "⭐",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "A",
          "word": "Achernar",
          "emoji": "⭐",
          "bgColor": "#0288D1"
          },
          {
          "letter": "H",
          "word": "Hadar",
          "emoji": "⭐",
          "bgColor": "#1565C0"
          },
          {
          "letter": "M",
          "word": "Mimosa",
          "emoji": "⭐",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "N",
          "word": "North Star",
          "emoji": "⭐",
          "bgColor": "#FFA000"
          },
          {
          "letter": "W",
          "word": "Wolf Star",
          "emoji": "⭐",
          "bgColor": "#607D8B"
          },
          {
          "letter": "E",
          "word": "Eta Carinae",
          "emoji": "⭐",
          "bgColor": "#FF5722"
          },
          {
          "letter": "T",
          "word": "Tau Ceti",
          "emoji": "⭐",
          "bgColor": "#FF9800"
          },
          {
          "letter": "G",
          "word": "Gamma Ray",
          "emoji": "⭐",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "K",
          "word": "Kepler Star",
          "emoji": "⭐",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "L",
          "word": "Luyten Star",
          "emoji": "⭐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "O",
          "word": "Omega Star",
          "emoji": "⭐",
          "bgColor": "#263238"
          },
          {
          "letter": "I",
          "word": "Indian Star",
          "emoji": "⭐",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "J",
          "word": "Jewel Star",
          "emoji": "⭐",
          "bgColor": "#E91E63"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceStarsGalaxies2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Stars & Galaxies - Part 2",
          videoId: "space-stars-galaxies-2",
          bgGradient: ["#6A1B9A","#E1BEE7"] as [string, string],
          accentColor: "#4A148C",
          letters: [
          {
          "letter": "M",
          "word": "Milky Way",
          "emoji": "🌌",
          "bgColor": "#4A148C"
          },
          {
          "letter": "A",
          "word": "Andromeda",
          "emoji": "🌌",
          "bgColor": "#1565C0"
          },
          {
          "letter": "S",
          "word": "Spiral Galaxy",
          "emoji": "🌌",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "E",
          "word": "Elliptical Galaxy",
          "emoji": "🌌",
          "bgColor": "#263238"
          },
          {
          "letter": "I",
          "word": "Irregular Galaxy",
          "emoji": "🌌",
          "bgColor": "#FF5722"
          },
          {
          "letter": "B",
          "word": "Barred Spiral",
          "emoji": "🌌",
          "bgColor": "#FF9800"
          },
          {
          "letter": "D",
          "word": "Dwarf Galaxy",
          "emoji": "🌌",
          "bgColor": "#607D8B"
          },
          {
          "letter": "L",
          "word": "Lenticular Galaxy",
          "emoji": "🌌",
          "bgColor": "#455A64"
          },
          {
          "letter": "S",
          "word": "Starburst Galaxy",
          "emoji": "🌌",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "C",
          "word": "Centaurus A",
          "emoji": "🌌",
          "bgColor": "#37474F"
          },
          {
          "letter": "W",
          "word": "Whirlpool Galaxy",
          "emoji": "🌌",
          "bgColor": "#0288D1"
          },
          {
          "letter": "S",
          "word": "Sombrero Galaxy",
          "emoji": "🌌",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "P",
          "word": "Pinwheel Galaxy",
          "emoji": "🌌",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "T",
          "word": "Triangulum Galaxy",
          "emoji": "🌌",
          "bgColor": "#00897B"
          },
          {
          "letter": "N",
          "word": "NGC Galaxy",
          "emoji": "🌌",
          "bgColor": "#795548"
          },
          {
          "letter": "M",
          "word": "Magellanic Cloud",
          "emoji": "🌌",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "C",
          "word": "Cartwheel Galaxy",
          "emoji": "🌌",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "G",
          "word": "Galaxy Cluster",
          "emoji": "🌌",
          "bgColor": "#311B92"
          },
          {
          "letter": "H",
          "word": "Hubble Deep",
          "emoji": "🌌",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "R",
          "word": "Radio Galaxy",
          "emoji": "🌌",
          "bgColor": "#BF360C"
          },
          {
          "letter": "K",
          "word": "Kepler Galaxy",
          "emoji": "🌌",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "F",
          "word": "Fornax Cluster",
          "emoji": "🌌",
          "bgColor": "#455A64"
          },
          {
          "letter": "O",
          "word": "Observable Universe",
          "emoji": "🌌",
          "bgColor": "#1A237E"
          },
          {
          "letter": "V",
          "word": "Virgo Cluster",
          "emoji": "🌌",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "U",
          "word": "Ultra Deep Field",
          "emoji": "🌌",
          "bgColor": "#263238"
          },
          {
          "letter": "J",
          "word": "James Webb",
          "emoji": "🔭",
          "bgColor": "#FF9800"
          },
          {
          "letter": "X",
          "word": "X-ray Galaxy",
          "emoji": "🌌",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "Y",
          "word": "Young Galaxy",
          "emoji": "🌌",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "Z",
          "word": "Zenith Galaxy",
          "emoji": "🌌",
          "bgColor": "#4A148C"
          },
          {
          "letter": "Q",
          "word": "Quasar Galaxy",
          "emoji": "🌌",
          "bgColor": "#FF6F00"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceStarsGalaxies3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Stars & Galaxies - Part 3",
          videoId: "space-stars-galaxies-3",
          bgGradient: ["#7B1FA2","#F3E5F5"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [
          {
          "letter": "N",
          "word": "Nebula",
          "emoji": "🌌",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "O",
          "word": "Orion Nebula",
          "emoji": "🌌",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "E",
          "word": "Eagle Nebula",
          "emoji": "🌌",
          "bgColor": "#00897B"
          },
          {
          "letter": "C",
          "word": "Crab Nebula",
          "emoji": "🌌",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "R",
          "word": "Ring Nebula",
          "emoji": "🌌",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "H",
          "word": "Horsehead Nebula",
          "emoji": "🌌",
          "bgColor": "#263238"
          },
          {
          "letter": "P",
          "word": "Planetary Nebula",
          "emoji": "🌌",
          "bgColor": "#FF9800"
          },
          {
          "letter": "S",
          "word": "Supernova Remnant",
          "emoji": "💥",
          "bgColor": "#C62828"
          },
          {
          "letter": "D",
          "word": "Dark Nebula",
          "emoji": "🌌",
          "bgColor": "#1A237E"
          },
          {
          "letter": "E",
          "word": "Emission Nebula",
          "emoji": "🌌",
          "bgColor": "#FF5722"
          },
          {
          "letter": "R",
          "word": "Reflection Nebula",
          "emoji": "🌌",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "B",
          "word": "Bubble Nebula",
          "emoji": "🌌",
          "bgColor": "#0288D1"
          },
          {
          "letter": "L",
          "word": "Lagoon Nebula",
          "emoji": "🌌",
          "bgColor": "#00897B"
          },
          {
          "letter": "T",
          "word": "Tarantula Nebula",
          "emoji": "🌌",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "C",
          "word": "Cat Eye Nebula",
          "emoji": "🌌",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "W",
          "word": "Witch Head",
          "emoji": "🌌",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "F",
          "word": "Flame Nebula",
          "emoji": "🔥",
          "bgColor": "#FF5722"
          },
          {
          "letter": "V",
          "word": "Veil Nebula",
          "emoji": "🌌",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "A",
          "word": "Ant Nebula",
          "emoji": "🌌",
          "bgColor": "#33691E"
          },
          {
          "letter": "M",
          "word": "Mystic Mountain",
          "emoji": "🌌",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "K",
          "word": "Keyhole Nebula",
          "emoji": "🌌",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "G",
          "word": "Ghost Nebula",
          "emoji": "🌌",
          "bgColor": "#607D8B"
          },
          {
          "letter": "I",
          "word": "Iris Nebula",
          "emoji": "🌌",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "S",
          "word": "Skull Nebula",
          "emoji": "🌌",
          "bgColor": "#263238"
          },
          {
          "letter": "U",
          "word": "Unicorn Nebula",
          "emoji": "🌌",
          "bgColor": "#E91E63"
          },
          {
          "letter": "J",
          "word": "Jellyfish Nebula",
          "emoji": "🌌",
          "bgColor": "#00BCD4"
          },
          {
          "letter": "X",
          "word": "X-ray Nebula",
          "emoji": "🌌",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "Y",
          "word": "Young Nebula",
          "emoji": "🌌",
          "bgColor": "#FF9800"
          },
          {
          "letter": "Z",
          "word": "Zeta Nebula",
          "emoji": "🌌",
          "bgColor": "#4A148C"
          },
          {
          "letter": "Q",
          "word": "Quantum Nebula",
          "emoji": "🌌",
          "bgColor": "#311B92"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceRocketsMissions1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rockets & Missions - Part 1",
          videoId: "space-rockets-missions-1",
          bgGradient: ["#D32F2F","#FFCDD2"] as [string, string],
          accentColor: "#B71C1C",
          letters: [
          {
          "letter": "I",
          "word": "ISRO",
          "emoji": "🚀",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "C",
          "word": "Chandrayaan",
          "emoji": "🌙",
          "bgColor": "#FFA000"
          },
          {
          "letter": "M",
          "word": "Mangalyaan",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "G",
          "word": "Gaganyaan",
          "emoji": "🚀",
          "bgColor": "#1565C0"
          },
          {
          "letter": "P",
          "word": "PSLV",
          "emoji": "🚀",
          "bgColor": "#FF9800"
          },
          {
          "letter": "G",
          "word": "GSLV",
          "emoji": "🚀",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "A",
          "word": "Aryabhata Satellite",
          "emoji": "🛰️",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "S",
          "word": "SLV",
          "emoji": "🚀",
          "bgColor": "#33691E"
          },
          {
          "letter": "R",
          "word": "Rohini Satellite",
          "emoji": "🛰️",
          "bgColor": "#FF5722"
          },
          {
          "letter": "N",
          "word": "NASA",
          "emoji": "🚀",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "S",
          "word": "SpaceX",
          "emoji": "🚀",
          "bgColor": "#263238"
          },
          {
          "letter": "F",
          "word": "Falcon 9",
          "emoji": "🚀",
          "bgColor": "#607D8B"
          },
          {
          "letter": "S",
          "word": "Starship",
          "emoji": "🚀",
          "bgColor": "#455A64"
          },
          {
          "letter": "A",
          "word": "Apollo",
          "emoji": "🚀",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "G",
          "word": "Gemini",
          "emoji": "🚀",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "M",
          "word": "Mercury Program",
          "emoji": "🚀",
          "bgColor": "#795548"
          },
          {
          "letter": "S",
          "word": "Saturn V",
          "emoji": "🚀",
          "bgColor": "#FFA000"
          },
          {
          "letter": "C",
          "word": "Columbia",
          "emoji": "🚀",
          "bgColor": "#1565C0"
          },
          {
          "letter": "D",
          "word": "Discovery",
          "emoji": "🚀",
          "bgColor": "#FF9800"
          },
          {
          "letter": "E",
          "word": "Endeavour",
          "emoji": "🚀",
          "bgColor": "#263238"
          },
          {
          "letter": "A",
          "word": "Atlantis",
          "emoji": "🚀",
          "bgColor": "#0288D1"
          },
          {
          "letter": "C",
          "word": "Challenger",
          "emoji": "🚀",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "H",
          "word": "Hubble",
          "emoji": "🔭",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "J",
          "word": "James Webb",
          "emoji": "🔭",
          "bgColor": "#FF9800"
          },
          {
          "letter": "V",
          "word": "Voyager",
          "emoji": "🛰️",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "P",
          "word": "Pioneer",
          "emoji": "🛰️",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "N",
          "word": "New Horizons",
          "emoji": "🛰️",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "M",
          "word": "Mars Rover",
          "emoji": "🤖",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "C",
          "word": "Curiosity",
          "emoji": "🤖",
          "bgColor": "#BF360C"
          },
          {
          "letter": "P",
          "word": "Perseverance",
          "emoji": "🤖",
          "bgColor": "#C62828"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceRocketsMissions2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rockets & Missions - Part 2",
          videoId: "space-rockets-missions-2",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [
          {
          "letter": "S",
          "word": "Soyuz",
          "emoji": "🚀",
          "bgColor": "#33691E"
          },
          {
          "letter": "A",
          "word": "Ariane",
          "emoji": "🚀",
          "bgColor": "#1565C0"
          },
          {
          "letter": "V",
          "word": "Vostok",
          "emoji": "🚀",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "L",
          "word": "Long March",
          "emoji": "🚀",
          "bgColor": "#C62828"
          },
          {
          "letter": "H",
          "word": "H-IIA",
          "emoji": "🚀",
          "bgColor": "#FF9800"
          },
          {
          "letter": "E",
          "word": "Electron",
          "emoji": "🚀",
          "bgColor": "#263238"
          },
          {
          "letter": "R",
          "word": "RLV",
          "emoji": "🚀",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "B",
          "word": "Blue Origin",
          "emoji": "🚀",
          "bgColor": "#0288D1"
          },
          {
          "letter": "N",
          "word": "New Shepard",
          "emoji": "🚀",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "V",
          "word": "Virgin Galactic",
          "emoji": "🚀",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "D",
          "word": "Delta",
          "emoji": "🚀",
          "bgColor": "#455A64"
          },
          {
          "letter": "A",
          "word": "Atlas",
          "emoji": "🚀",
          "bgColor": "#607D8B"
          },
          {
          "letter": "T",
          "word": "Titan Rocket",
          "emoji": "🚀",
          "bgColor": "#37474F"
          },
          {
          "letter": "P",
          "word": "Proton",
          "emoji": "🚀",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zenit",
          "emoji": "🚀",
          "bgColor": "#1565C0"
          },
          {
          "letter": "M",
          "word": "Minotaur",
          "emoji": "🚀",
          "bgColor": "#795548"
          },
          {
          "letter": "C",
          "word": "Centaur",
          "emoji": "🚀",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "S",
          "word": "Scout Rocket",
          "emoji": "🚀",
          "bgColor": "#33691E"
          },
          {
          "letter": "F",
          "word": "Firefly",
          "emoji": "🚀",
          "bgColor": "#FF5722"
          },
          {
          "letter": "K",
          "word": "KSLV",
          "emoji": "🚀",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "W",
          "word": "Wenchang",
          "emoji": "🚀",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "G",
          "word": "Geosync Rocket",
          "emoji": "🚀",
          "bgColor": "#FFA000"
          },
          {
          "letter": "I",
          "word": "IRNSS",
          "emoji": "🛰️",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "O",
          "word": "Orbital Rocket",
          "emoji": "🚀",
          "bgColor": "#263238"
          },
          {
          "letter": "J",
          "word": "JAXA Rocket",
          "emoji": "🚀",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "U",
          "word": "ULA Rocket",
          "emoji": "🚀",
          "bgColor": "#455A64"
          },
          {
          "letter": "X",
          "word": "X-33",
          "emoji": "🚀",
          "bgColor": "#607D8B"
          },
          {
          "letter": "Y",
          "word": "Yuanzheng",
          "emoji": "🚀",
          "bgColor": "#C62828"
          },
          {
          "letter": "Q",
          "word": "Quick Launch",
          "emoji": "🚀",
          "bgColor": "#FF5722"
          },
          {
          "letter": "R",
          "word": "Reusable Rocket",
          "emoji": "🚀",
          "bgColor": "#33691E"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceRocketsMissions3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Rockets & Missions - Part 3",
          videoId: "space-rockets-missions-3",
          bgGradient: ["#E53935","#FFEBEE"] as [string, string],
          accentColor: "#C62828",
          letters: [
          {
          "letter": "S",
          "word": "Space Shuttle",
          "emoji": "🚀",
          "bgColor": "#263238"
          },
          {
          "letter": "I",
          "word": "ISS",
          "emoji": "🛰️",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "M",
          "word": "Mir Station",
          "emoji": "🛰️",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "T",
          "word": "Tiangong",
          "emoji": "🛰️",
          "bgColor": "#C62828"
          },
          {
          "letter": "S",
          "word": "Skylab",
          "emoji": "🛰️",
          "bgColor": "#607D8B"
          },
          {
          "letter": "H",
          "word": "HST Hubble",
          "emoji": "🔭",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "C",
          "word": "Chandra",
          "emoji": "🔭",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "J",
          "word": "JWST",
          "emoji": "🔭",
          "bgColor": "#FF9800"
          },
          {
          "letter": "K",
          "word": "Kepler Telescope",
          "emoji": "🔭",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "Spitzer",
          "emoji": "🔭",
          "bgColor": "#FF5722"
          },
          {
          "letter": "G",
          "word": "GPS Satellite",
          "emoji": "🛰️",
          "bgColor": "#1565C0"
          },
          {
          "letter": "C",
          "word": "Communication Sat",
          "emoji": "🛰️",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "W",
          "word": "Weather Satellite",
          "emoji": "🛰️",
          "bgColor": "#0288D1"
          },
          {
          "letter": "R",
          "word": "Remote Sensing",
          "emoji": "🛰️",
          "bgColor": "#33691E"
          },
          {
          "letter": "N",
          "word": "Navigation Sat",
          "emoji": "🛰️",
          "bgColor": "#455A64"
          },
          {
          "letter": "L",
          "word": "Lunar Module",
          "emoji": "🚀",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "M",
          "word": "Mars Lander",
          "emoji": "🤖",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "V",
          "word": "Venus Probe",
          "emoji": "🛰️",
          "bgColor": "#FFA000"
          },
          {
          "letter": "P",
          "word": "Parker Probe",
          "emoji": "🛰️",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "D",
          "word": "Deep Space",
          "emoji": "🛰️",
          "bgColor": "#1A237E"
          },
          {
          "letter": "A",
          "word": "Aditya L1",
          "emoji": "🛰️",
          "bgColor": "#FF9800"
          },
          {
          "letter": "E",
          "word": "EVA Spacewalk",
          "emoji": "👨‍🚀",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "B",
          "word": "Booster",
          "emoji": "🚀",
          "bgColor": "#263238"
          },
          {
          "letter": "F",
          "word": "Fuel Tank",
          "emoji": "🚀",
          "bgColor": "#607D8B"
          },
          {
          "letter": "O",
          "word": "Orbit Module",
          "emoji": "🛰️",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "I",
          "word": "Indian Satellite",
          "emoji": "🛰️",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "U",
          "word": "Unmanned Craft",
          "emoji": "🛰️",
          "bgColor": "#455A64"
          },
          {
          "letter": "X",
          "word": "X-Ray Telescope",
          "emoji": "🔭",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "Y",
          "word": "Year in Space",
          "emoji": "👨‍🚀",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "Z",
          "word": "Zero Gravity Lab",
          "emoji": "🧪",
          "bgColor": "#7C4DFF"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceAstronauts1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Astronauts & Space Travel - Part 1",
          videoId: "space-astronauts-1",
          bgGradient: ["#00897B","#B2DFDB"] as [string, string],
          accentColor: "#004D40",
          letters: [
          {
          "letter": "R",
          "word": "Rakesh Sharma",
          "emoji": "👨‍🚀",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "K",
          "word": "Kalpana Chawla",
          "emoji": "👩‍🚀",
          "bgColor": "#1565C0"
          },
          {
          "letter": "S",
          "word": "Sunita Williams",
          "emoji": "👩‍🚀",
          "bgColor": "#0288D1"
          },
          {
          "letter": "N",
          "word": "Neil Armstrong",
          "emoji": "👨‍🚀",
          "bgColor": "#607D8B"
          },
          {
          "letter": "B",
          "word": "Buzz Aldrin",
          "emoji": "👨‍🚀",
          "bgColor": "#455A64"
          },
          {
          "letter": "Y",
          "word": "Yuri Gagarin",
          "emoji": "👨‍🚀",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "V",
          "word": "Valentina",
          "emoji": "👩‍🚀",
          "bgColor": "#E91E63"
          },
          {
          "letter": "J",
          "word": "John Glenn",
          "emoji": "👨‍🚀",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "A",
          "word": "Alan Shepard",
          "emoji": "👨‍🚀",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "S",
          "word": "Sally Ride",
          "emoji": "👩‍🚀",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "C",
          "word": "Chris Hadfield",
          "emoji": "👨‍🚀",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "T",
          "word": "Tim Peake",
          "emoji": "👨‍🚀",
          "bgColor": "#1565C0"
          },
          {
          "letter": "M",
          "word": "Mae Jemison",
          "emoji": "👩‍🚀",
          "bgColor": "#FF9800"
          },
          {
          "letter": "P",
          "word": "Peggy Whitson",
          "emoji": "👩‍🚀",
          "bgColor": "#00897B"
          },
          {
          "letter": "S",
          "word": "Scott Kelly",
          "emoji": "👨‍🚀",
          "bgColor": "#263238"
          },
          {
          "letter": "E",
          "word": "Eileen Collins",
          "emoji": "👩‍🚀",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "G",
          "word": "Gus Grissom",
          "emoji": "👨‍🚀",
          "bgColor": "#795548"
          },
          {
          "letter": "D",
          "word": "Dennis Tito",
          "emoji": "👨‍🚀",
          "bgColor": "#FF5722"
          },
          {
          "letter": "L",
          "word": "Laika Dog",
          "emoji": "🐕",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "H",
          "word": "Ham Chimp",
          "emoji": "🐒",
          "bgColor": "#5D4037"
          },
          {
          "letter": "W",
          "word": "Wally Funk",
          "emoji": "👩‍🚀",
          "bgColor": "#FFA000"
          },
          {
          "letter": "F",
          "word": "Frank Borman",
          "emoji": "👨‍🚀",
          "bgColor": "#37474F"
          },
          {
          "letter": "I",
          "word": "Indian Astronaut",
          "emoji": "👨‍🚀",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "O",
          "word": "Oleg Kononenko",
          "emoji": "👨‍🚀",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "U",
          "word": "Unni Krishnan",
          "emoji": "👨‍🚀",
          "bgColor": "#33691E"
          },
          {
          "letter": "X",
          "word": "X-15 Pilot",
          "emoji": "👨‍🚀",
          "bgColor": "#263238"
          },
          {
          "letter": "Z",
          "word": "Zhai Zhigang",
          "emoji": "👨‍🚀",
          "bgColor": "#C62828"
          },
          {
          "letter": "Q",
          "word": "Queen of Space",
          "emoji": "👩‍🚀",
          "bgColor": "#E91E63"
          },
          {
          "letter": "N",
          "word": "NASA Astronaut",
          "emoji": "👨‍🚀",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "R",
          "word": "Russian Cosmonaut",
          "emoji": "👨‍🚀",
          "bgColor": "#D32F2F"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceAstronauts2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Astronauts & Space Travel - Part 2",
          videoId: "space-astronauts-2",
          bgGradient: ["#00796B","#80CBC4"] as [string, string],
          accentColor: "#00695C",
          letters: [
          {
          "letter": "S",
          "word": "Space Suit",
          "emoji": "👨‍🚀",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "H",
          "word": "Helmet",
          "emoji": "⛑️",
          "bgColor": "#607D8B"
          },
          {
          "letter": "G",
          "word": "Gloves",
          "emoji": "🧤",
          "bgColor": "#455A64"
          },
          {
          "letter": "B",
          "word": "Boots",
          "emoji": "🥾",
          "bgColor": "#795548"
          },
          {
          "letter": "O",
          "word": "Oxygen Tank",
          "emoji": "🫁",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "J",
          "word": "Jet Pack",
          "emoji": "🚀",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "T",
          "word": "Tether",
          "emoji": "🔗",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "V",
          "word": "Visor",
          "emoji": "🥽",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "Communication",
          "emoji": "📡",
          "bgColor": "#1565C0"
          },
          {
          "letter": "L",
          "word": "Life Support",
          "emoji": "❤️",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Mission Control",
          "emoji": "🖥️",
          "bgColor": "#263238"
          },
          {
          "letter": "R",
          "word": "Re-entry",
          "emoji": "🔥",
          "bgColor": "#FF5722"
          },
          {
          "letter": "S",
          "word": "Spacewalk",
          "emoji": "👨‍🚀",
          "bgColor": "#0288D1"
          },
          {
          "letter": "D",
          "word": "Docking",
          "emoji": "🛰️",
          "bgColor": "#455A64"
          },
          {
          "letter": "L",
          "word": "Landing",
          "emoji": "🏠",
          "bgColor": "#33691E"
          },
          {
          "letter": "A",
          "word": "Airlock",
          "emoji": "🚪",
          "bgColor": "#607D8B"
          },
          {
          "letter": "P",
          "word": "Parachute",
          "emoji": "🪂",
          "bgColor": "#FF9800"
          },
          {
          "letter": "E",
          "word": "EVA",
          "emoji": "👨‍🚀",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "F",
          "word": "Food in Space",
          "emoji": "🍽️",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "W",
          "word": "Water in Space",
          "emoji": "💧",
          "bgColor": "#0288D1"
          },
          {
          "letter": "S",
          "word": "Sleep in Space",
          "emoji": "😴",
          "bgColor": "#1A237E"
          },
          {
          "letter": "K",
          "word": "Kitchen ISS",
          "emoji": "🍳",
          "bgColor": "#FFA000"
          },
          {
          "letter": "G",
          "word": "Gym in Space",
          "emoji": "💪",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "N",
          "word": "Navigation",
          "emoji": "🧭",
          "bgColor": "#33691E"
          },
          {
          "letter": "I",
          "word": "Instrument Panel",
          "emoji": "🖥️",
          "bgColor": "#263238"
          },
          {
          "letter": "U",
          "word": "Undocking",
          "emoji": "🛰️",
          "bgColor": "#455A64"
          },
          {
          "letter": "X",
          "word": "X-Ray Vision",
          "emoji": "👓",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "Y",
          "word": "Yoga in Space",
          "emoji": "🧘",
          "bgColor": "#00897B"
          },
          {
          "letter": "Z",
          "word": "Zero Gravity Fun",
          "emoji": "🪐",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "Q",
          "word": "Quick Launch",
          "emoji": "🚀",
          "bgColor": "#FF5722"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceAstronauts3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Astronauts & Space Travel - Part 3",
          videoId: "space-astronauts-3",
          bgGradient: ["#00695C","#4DB6AC"] as [string, string],
          accentColor: "#004D40",
          letters: [
          {
          "letter": "M",
          "word": "Moon Landing",
          "emoji": "🌙",
          "bgColor": "#FFA000"
          },
          {
          "letter": "M",
          "word": "Mars Mission",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Space Station",
          "emoji": "🛰️",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "O",
          "word": "Orbital Flight",
          "emoji": "🚀",
          "bgColor": "#1565C0"
          },
          {
          "letter": "L",
          "word": "Lunar Orbit",
          "emoji": "🌙",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "G",
          "word": "Gravity",
          "emoji": "🌍",
          "bgColor": "#33691E"
          },
          {
          "letter": "A",
          "word": "Atmosphere",
          "emoji": "🌍",
          "bgColor": "#0288D1"
          },
          {
          "letter": "V",
          "word": "Vacuum Space",
          "emoji": "🌌",
          "bgColor": "#1A237E"
          },
          {
          "letter": "R",
          "word": "Radiation",
          "emoji": "☢️",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "Solar Wind",
          "emoji": "☀️",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "C",
          "word": "Cosmic Ray",
          "emoji": "💫",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "D",
          "word": "Dark Matter",
          "emoji": "🕳️",
          "bgColor": "#263238"
          },
          {
          "letter": "E",
          "word": "Dark Energy",
          "emoji": "⚡",
          "bgColor": "#311B92"
          },
          {
          "letter": "T",
          "word": "Time Dilation",
          "emoji": "⏰",
          "bgColor": "#FF9800"
          },
          {
          "letter": "W",
          "word": "Wormhole",
          "emoji": "🌀",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "B",
          "word": "Big Bang",
          "emoji": "💥",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "P",
          "word": "Parallel Universe",
          "emoji": "🌌",
          "bgColor": "#4A148C"
          },
          {
          "letter": "N",
          "word": "Neutron Star",
          "emoji": "⭐",
          "bgColor": "#455A64"
          },
          {
          "letter": "F",
          "word": "Future Space",
          "emoji": "🚀",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "H",
          "word": "Hyperdrive",
          "emoji": "🚀",
          "bgColor": "#FF5722"
          },
          {
          "letter": "I",
          "word": "Interstellar",
          "emoji": "🌌",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "K",
          "word": "Kepler Discover",
          "emoji": "🔭",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "J",
          "word": "Jupiter Flyby",
          "emoji": "🪐",
          "bgColor": "#FF9800"
          },
          {
          "letter": "U",
          "word": "UFO",
          "emoji": "🛸",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "X",
          "word": "Xeno Planet",
          "emoji": "🌍",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "Y",
          "word": "Year Light",
          "emoji": "🌟",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "Z",
          "word": "Zodiac Star",
          "emoji": "⭐",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "Q",
          "word": "Quantum Space",
          "emoji": "🌌",
          "bgColor": "#311B92"
          },
          {
          "letter": "L",
          "word": "Light Speed",
          "emoji": "💫",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "S",
          "word": "Space Frontier",
          "emoji": "🚀",
          "bgColor": "#263238"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceConstellations1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Constellations - Part 1",
          videoId: "space-constellations-1",
          bgGradient: ["#37474F","#90A4AE"] as [string, string],
          accentColor: "#263238",
          letters: [
          {
          "letter": "O",
          "word": "Orion",
          "emoji": "⭐",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "U",
          "word": "Ursa Major",
          "emoji": "⭐",
          "bgColor": "#1565C0"
          },
          {
          "letter": "U",
          "word": "Ursa Minor",
          "emoji": "⭐",
          "bgColor": "#0288D1"
          },
          {
          "letter": "C",
          "word": "Cassiopeia",
          "emoji": "⭐",
          "bgColor": "#E91E63"
          },
          {
          "letter": "L",
          "word": "Leo",
          "emoji": "⭐",
          "bgColor": "#FF9800"
          },
          {
          "letter": "S",
          "word": "Scorpius",
          "emoji": "⭐",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "G",
          "word": "Gemini",
          "emoji": "⭐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "A",
          "word": "Aquarius",
          "emoji": "⭐",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "P",
          "word": "Pisces",
          "emoji": "⭐",
          "bgColor": "#0288D1"
          },
          {
          "letter": "V",
          "word": "Virgo",
          "emoji": "⭐",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "T",
          "word": "Taurus",
          "emoji": "⭐",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "C",
          "word": "Cancer",
          "emoji": "⭐",
          "bgColor": "#607D8B"
          },
          {
          "letter": "S",
          "word": "Sagittarius",
          "emoji": "⭐",
          "bgColor": "#FF5722"
          },
          {
          "letter": "C",
          "word": "Capricorn",
          "emoji": "⭐",
          "bgColor": "#33691E"
          },
          {
          "letter": "A",
          "word": "Aries",
          "emoji": "⭐",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "L",
          "word": "Libra",
          "emoji": "⭐",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "D",
          "word": "Draco",
          "emoji": "⭐",
          "bgColor": "#263238"
          },
          {
          "letter": "P",
          "word": "Perseus",
          "emoji": "⭐",
          "bgColor": "#455A64"
          },
          {
          "letter": "A",
          "word": "Andromeda",
          "emoji": "⭐",
          "bgColor": "#1565C0"
          },
          {
          "letter": "H",
          "word": "Hercules",
          "emoji": "⭐",
          "bgColor": "#795548"
          },
          {
          "letter": "C",
          "word": "Cygnus",
          "emoji": "⭐",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "L",
          "word": "Lyra",
          "emoji": "⭐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "A",
          "word": "Aquila",
          "emoji": "⭐",
          "bgColor": "#FF9800"
          },
          {
          "letter": "P",
          "word": "Pegasus",
          "emoji": "⭐",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "B",
          "word": "Bootes",
          "emoji": "⭐",
          "bgColor": "#33691E"
          },
          {
          "letter": "C",
          "word": "Corona",
          "emoji": "⭐",
          "bgColor": "#FFA000"
          },
          {
          "letter": "E",
          "word": "Eridanus",
          "emoji": "⭐",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "O",
          "word": "Ophiuchus",
          "emoji": "⭐",
          "bgColor": "#607D8B"
          },
          {
          "letter": "S",
          "word": "Serpens",
          "emoji": "⭐",
          "bgColor": "#827717"
          },
          {
          "letter": "C",
          "word": "Centaurus",
          "emoji": "⭐",
          "bgColor": "#455A64"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceConstellations2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Constellations - Part 2",
          videoId: "space-constellations-2",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#37474F",
          letters: [
          {
          "letter": "C",
          "word": "Canis Major",
          "emoji": "⭐",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "C",
          "word": "Canis Minor",
          "emoji": "⭐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "L",
          "word": "Lepus",
          "emoji": "⭐",
          "bgColor": "#795548"
          },
          {
          "letter": "M",
          "word": "Monoceros",
          "emoji": "⭐",
          "bgColor": "#E91E63"
          },
          {
          "letter": "P",
          "word": "Puppis",
          "emoji": "⭐",
          "bgColor": "#1565C0"
          },
          {
          "letter": "V",
          "word": "Vela",
          "emoji": "⭐",
          "bgColor": "#0288D1"
          },
          {
          "letter": "C",
          "word": "Columba",
          "emoji": "⭐",
          "bgColor": "#607D8B"
          },
          {
          "letter": "P",
          "word": "Pictor",
          "emoji": "⭐",
          "bgColor": "#827717"
          },
          {
          "letter": "D",
          "word": "Dorado",
          "emoji": "⭐",
          "bgColor": "#FF9800"
          },
          {
          "letter": "R",
          "word": "Reticulum",
          "emoji": "⭐",
          "bgColor": "#455A64"
          },
          {
          "letter": "H",
          "word": "Hydra",
          "emoji": "⭐",
          "bgColor": "#33691E"
          },
          {
          "letter": "C",
          "word": "Corvus",
          "emoji": "⭐",
          "bgColor": "#263238"
          },
          {
          "letter": "C",
          "word": "Crater",
          "emoji": "⭐",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "S",
          "word": "Sextans",
          "emoji": "⭐",
          "bgColor": "#FF5722"
          },
          {
          "letter": "A",
          "word": "Antlia",
          "emoji": "⭐",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Pyxis",
          "emoji": "⭐",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "C",
          "word": "Carina",
          "emoji": "⭐",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "V",
          "word": "Volans",
          "emoji": "⭐",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "C",
          "word": "Chameleon",
          "emoji": "⭐",
          "bgColor": "#43A047"
          },
          {
          "letter": "M",
          "word": "Musca",
          "emoji": "⭐",
          "bgColor": "#607D8B"
          },
          {
          "letter": "C",
          "word": "Crux",
          "emoji": "⭐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "T",
          "word": "Triangulum",
          "emoji": "⭐",
          "bgColor": "#FF9800"
          },
          {
          "letter": "N",
          "word": "Norma",
          "emoji": "⭐",
          "bgColor": "#455A64"
          },
          {
          "letter": "L",
          "word": "Lupus",
          "emoji": "⭐",
          "bgColor": "#795548"
          },
          {
          "letter": "A",
          "word": "Ara",
          "emoji": "⭐",
          "bgColor": "#FF5722"
          },
          {
          "letter": "T",
          "word": "Telescopium",
          "emoji": "⭐",
          "bgColor": "#263238"
          },
          {
          "letter": "P",
          "word": "Pavo",
          "emoji": "⭐",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "I",
          "word": "Indus",
          "emoji": "⭐",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "G",
          "word": "Grus",
          "emoji": "⭐",
          "bgColor": "#0288D1"
          },
          {
          "letter": "S",
          "word": "Sculptor",
          "emoji": "⭐",
          "bgColor": "#827717"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceConstellations3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Constellations - Part 3",
          videoId: "space-constellations-3",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#455A64",
          letters: [
          {
          "letter": "P",
          "word": "Phoenix",
          "emoji": "⭐",
          "bgColor": "#FF5722"
          },
          {
          "letter": "F",
          "word": "Fornax",
          "emoji": "⭐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "H",
          "word": "Horologium",
          "emoji": "⭐",
          "bgColor": "#607D8B"
          },
          {
          "letter": "C",
          "word": "Caelum",
          "emoji": "⭐",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "M",
          "word": "Mensa",
          "emoji": "⭐",
          "bgColor": "#33691E"
          },
          {
          "letter": "O",
          "word": "Octans",
          "emoji": "⭐",
          "bgColor": "#263238"
          },
          {
          "letter": "A",
          "word": "Apus",
          "emoji": "⭐",
          "bgColor": "#FF9800"
          },
          {
          "letter": "T",
          "word": "Tucana",
          "emoji": "⭐",
          "bgColor": "#0288D1"
          },
          {
          "letter": "S",
          "word": "Southern Cross",
          "emoji": "⭐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "N",
          "word": "North Star",
          "emoji": "⭐",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "B",
          "word": "Big Dipper",
          "emoji": "⭐",
          "bgColor": "#1565C0"
          },
          {
          "letter": "L",
          "word": "Little Dipper",
          "emoji": "⭐",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "P",
          "word": "Pleiades",
          "emoji": "⭐",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "H",
          "word": "Hyades",
          "emoji": "⭐",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "B",
          "word": "Beehive Cluster",
          "emoji": "⭐",
          "bgColor": "#FFA000"
          },
          {
          "letter": "D",
          "word": "Double Cluster",
          "emoji": "⭐",
          "bgColor": "#455A64"
          },
          {
          "letter": "G",
          "word": "Globular Cluster",
          "emoji": "⭐",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "O",
          "word": "Open Cluster",
          "emoji": "⭐",
          "bgColor": "#43A047"
          },
          {
          "letter": "S",
          "word": "Star Cluster",
          "emoji": "⭐",
          "bgColor": "#FF9800"
          },
          {
          "letter": "W",
          "word": "Winter Triangle",
          "emoji": "⭐",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "S",
          "word": "Summer Triangle",
          "emoji": "⭐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "A",
          "word": "Asterism",
          "emoji": "⭐",
          "bgColor": "#FF5722"
          },
          {
          "letter": "Z",
          "word": "Zodiac Belt",
          "emoji": "⭐",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "R",
          "word": "Rashi Star",
          "emoji": "⭐",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "I",
          "word": "Indian Nakshatra",
          "emoji": "⭐",
          "bgColor": "#FF9800"
          },
          {
          "letter": "K",
          "word": "Krittika",
          "emoji": "⭐",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Mrigashira",
          "emoji": "⭐",
          "bgColor": "#FFA000"
          },
          {
          "letter": "V",
          "word": "Vishakha",
          "emoji": "⭐",
          "bgColor": "#33691E"
          },
          {
          "letter": "C",
          "word": "Chitra Star",
          "emoji": "⭐",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "U",
          "word": "Uttara Star",
          "emoji": "⭐",
          "bgColor": "#0288D1"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceSolarSystem1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Solar System - Part 1",
          videoId: "space-solar-system-1",
          bgGradient: ["#FF6F00","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [
          {
          "letter": "M",
          "word": "Mercury",
          "emoji": "🪨",
          "bgColor": "#607D8B"
          },
          {
          "letter": "V",
          "word": "Venus",
          "emoji": "🌍",
          "bgColor": "#FFA000"
          },
          {
          "letter": "E",
          "word": "Earth",
          "emoji": "🌍",
          "bgColor": "#1565C0"
          },
          {
          "letter": "M",
          "word": "Mars",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "J",
          "word": "Jupiter",
          "emoji": "🪐",
          "bgColor": "#FF9800"
          },
          {
          "letter": "S",
          "word": "Saturn",
          "emoji": "🪐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "U",
          "word": "Uranus",
          "emoji": "🔵",
          "bgColor": "#00BCD4"
          },
          {
          "letter": "N",
          "word": "Neptune",
          "emoji": "🔵",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "O",
          "word": "Orbit",
          "emoji": "🛰️",
          "bgColor": "#FF9800"
          },
          {
          "letter": "R",
          "word": "Revolution",
          "emoji": "🌍",
          "bgColor": "#1565C0"
          },
          {
          "letter": "G",
          "word": "Gravity",
          "emoji": "🌍",
          "bgColor": "#1565C0"
          },
          {
          "letter": "T",
          "word": "Tilt",
          "emoji": "🌎",
          "bgColor": "#43A047"
          },
          {
          "letter": "A",
          "word": "Axis",
          "emoji": "📍",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Poles",
          "emoji": "🧊",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "Z",
          "word": "Zone",
          "emoji": "🌍",
          "bgColor": "#1565C0"
          },
          {
          "letter": "D",
          "word": "Distance",
          "emoji": "📏",
          "bgColor": "#FF9800"
          },
          {
          "letter": "S",
          "word": "Sun",
          "emoji": "☀️",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "C",
          "word": "Comet",
          "emoji": "☄️",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "A",
          "word": "Asteroid",
          "emoji": "🪨",
          "bgColor": "#795548"
          },
          {
          "letter": "M",
          "word": "Moon",
          "emoji": "🌙",
          "bgColor": "#FFA000"
          },
          {
          "letter": "B",
          "word": "Belt",
          "emoji": "🪐",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "H",
          "word": "Halo",
          "emoji": "⭐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "L",
          "word": "Light",
          "emoji": "✨",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "R",
          "word": "Radiation",
          "emoji": "☢️",
          "bgColor": "#FF5722"
          },
          {
          "letter": "W",
          "word": "Wave",
          "emoji": "〰️",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "X",
          "word": "X-ray",
          "emoji": "💫",
          "bgColor": "#9C27B0"
          },
          {
          "letter": "Y",
          "word": "Year",
          "emoji": "📅",
          "bgColor": "#FF9800"
          },
          {
          "letter": "I",
          "word": "ISRO",
          "emoji": "🚀",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "C",
          "word": "Chandrayaan",
          "emoji": "🛰️",
          "bgColor": "#37474F"
          },
          {
          "letter": "K",
          "word": "Kaleidoscope",
          "emoji": "🌌",
          "bgColor": "#6A1B9A"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceSolarSystem2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Solar System - Part 2",
          videoId: "space-solar-system-2",
          bgGradient: ["#FF8F00","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [
          {
          "letter": "P",
          "word": "Pluto",
          "emoji": "🪨",
          "bgColor": "#795548"
          },
          {
          "letter": "C",
          "word": "Ceres",
          "emoji": "🪨",
          "bgColor": "#607D8B"
          },
          {
          "letter": "E",
          "word": "Europa",
          "emoji": "🌍",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "G",
          "word": "Ganymede",
          "emoji": "🌍",
          "bgColor": "#827717"
          },
          {
          "letter": "I",
          "word": "Io",
          "emoji": "🌋",
          "bgColor": "#FF5722"
          },
          {
          "letter": "T",
          "word": "Titan",
          "emoji": "🌍",
          "bgColor": "#FFA000"
          },
          {
          "letter": "R",
          "word": "Rings",
          "emoji": "💍",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "Spot",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "A",
          "word": "Atmosphere",
          "emoji": "💨",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "C",
          "word": "Core",
          "emoji": "🔥",
          "bgColor": "#FF5722"
          },
          {
          "letter": "M",
          "word": "Mantle",
          "emoji": "🪨",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "V",
          "word": "Volcano",
          "emoji": "🌋",
          "bgColor": "#FF5722"
          },
          {
          "letter": "C",
          "word": "Crater",
          "emoji": "🕳️",
          "bgColor": "#795548"
          },
          {
          "letter": "F",
          "word": "Field",
          "emoji": "🧲",
          "bgColor": "#37474F"
          },
          {
          "letter": "P",
          "word": "Plasma",
          "emoji": "⚡",
          "bgColor": "#FFB300"
          },
          {
          "letter": "S",
          "word": "Solar Wind",
          "emoji": "💨",
          "bgColor": "#FF9800"
          },
          {
          "letter": "F",
          "word": "Flare",
          "emoji": "🔆",
          "bgColor": "#FFC107"
          },
          {
          "letter": "P",
          "word": "Prominence",
          "emoji": "🌟",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "Q",
          "word": "Quarter",
          "emoji": "🌓",
          "bgColor": "#607D8B"
          },
          {
          "letter": "W",
          "word": "Waning",
          "emoji": "🌗",
          "bgColor": "#455A64"
          },
          {
          "letter": "W",
          "word": "Waxing",
          "emoji": "🌒",
          "bgColor": "#FFA000"
          },
          {
          "letter": "N",
          "word": "New Moon",
          "emoji": "🌑",
          "bgColor": "#263238"
          },
          {
          "letter": "F",
          "word": "Full Moon",
          "emoji": "🌕",
          "bgColor": "#FFA000"
          },
          {
          "letter": "M",
          "word": "Mangalyaan",
          "emoji": "🚀",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "R",
          "word": "Rakesh Sharma",
          "emoji": "👨‍🚀",
          "bgColor": "#1565C0"
          },
          {
          "letter": "K",
          "word": "Kalpana Chawla",
          "emoji": "👩‍🚀",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "S",
          "word": "Space Station",
          "emoji": "🛰️",
          "bgColor": "#37474F"
          },
          {
          "letter": "O",
          "word": "Orbit",
          "emoji": "🛰️",
          "bgColor": "#455A64"
          },
          {
          "letter": "D",
          "word": "Docking",
          "emoji": "🛸",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "E",
          "word": "EVA",
          "emoji": "👨‍🚀",
          "bgColor": "#0288D1"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceSolarSystem3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Solar System - Part 3",
          videoId: "space-solar-system-3",
          bgGradient: ["#FFA000","#FFECB3"] as [string, string],
          accentColor: "#FF8F00",
          letters: [
          {
          "letter": "A",
          "word": "Aurora",
          "emoji": "🌌",
          "bgColor": "#00E676"
          },
          {
          "letter": "B",
          "word": "Binary Star",
          "emoji": "⭐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "B",
          "word": "Black Hole",
          "emoji": "🕳️",
          "bgColor": "#263238"
          },
          {
          "letter": "N",
          "word": "Neutron Star",
          "emoji": "💫",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "P",
          "word": "Pulsar",
          "emoji": "✨",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "Q",
          "word": "Quasar",
          "emoji": "🌟",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "W",
          "word": "White Dwarf",
          "emoji": "⭐",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "R",
          "word": "Red Giant",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Supernova",
          "emoji": "💥",
          "bgColor": "#FF5722"
          },
          {
          "letter": "S",
          "word": "Supergiant",
          "emoji": "⭐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "M",
          "word": "Meteor",
          "emoji": "☄️",
          "bgColor": "#795548"
          },
          {
          "letter": "M",
          "word": "Meteorite",
          "emoji": "🪨",
          "bgColor": "#607D8B"
          },
          {
          "letter": "M",
          "word": "Meteoroid",
          "emoji": "🪨",
          "bgColor": "#78909C"
          },
          {
          "letter": "D",
          "word": "Dust Cloud",
          "emoji": "☁️",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "G",
          "word": "Galaxy",
          "emoji": "🌌",
          "bgColor": "#37474F"
          },
          {
          "letter": "L",
          "word": "Light Year",
          "emoji": "💫",
          "bgColor": "#FFD700"
          },
          {
          "letter": "P",
          "word": "Parallax",
          "emoji": "👁️",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "S",
          "word": "Spectral",
          "emoji": "🌈",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "R",
          "word": "Redshift",
          "emoji": "📊",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Blueshift",
          "emoji": "📊",
          "bgColor": "#0288D1"
          },
          {
          "letter": "C",
          "word": "Cosmic",
          "emoji": "🌌",
          "bgColor": "#4A148C"
          },
          {
          "letter": "U",
          "word": "Universe",
          "emoji": "🌌",
          "bgColor": "#1A237E"
          },
          {
          "letter": "E",
          "word": "Expansion",
          "emoji": "📈",
          "bgColor": "#FF9800"
          },
          {
          "letter": "V",
          "word": "Void",
          "emoji": "⬛",
          "bgColor": "#212121"
          },
          {
          "letter": "F",
          "word": "Formation",
          "emoji": "🌟",
          "bgColor": "#FFC107"
          },
          {
          "letter": "E",
          "word": "Evolution",
          "emoji": "🔄",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "A",
          "word": "Age",
          "emoji": "⏰",
          "bgColor": "#795548"
          },
          {
          "letter": "B",
          "word": "Big Bang",
          "emoji": "💥",
          "bgColor": "#FF5722"
          },
          {
          "letter": "H",
          "word": "Hubble",
          "emoji": "🔭",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "I",
          "word": "India Space",
          "emoji": "🚀",
          "bgColor": "#FF9800"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceSpaceTech1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Space Technology - Part 1",
          videoId: "space-space-tech-1",
          bgGradient: ["#37474F","#90A4AE"] as [string, string],
          accentColor: "#263238",
          letters: [
          {
          "letter": "R",
          "word": "Rocket",
          "emoji": "🚀",
          "bgColor": "#FF5722"
          },
          {
          "letter": "S",
          "word": "Satellite",
          "emoji": "🛰️",
          "bgColor": "#37474F"
          },
          {
          "letter": "T",
          "word": "Telescope",
          "emoji": "🔭",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "P",
          "word": "Probe",
          "emoji": "🛸",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "O",
          "word": "Orbiter",
          "emoji": "🛰️",
          "bgColor": "#455A64"
          },
          {
          "letter": "L",
          "word": "Lander",
          "emoji": "🛸",
          "bgColor": "#78909C"
          },
          {
          "letter": "R",
          "word": "Rover",
          "emoji": "🚗",
          "bgColor": "#FF9800"
          },
          {
          "letter": "C",
          "word": "Capsule",
          "emoji": "🛸",
          "bgColor": "#546E7A"
          },
          {
          "letter": "M",
          "word": "Module",
          "emoji": "📦",
          "bgColor": "#455A64"
          },
          {
          "letter": "E",
          "word": "Engine",
          "emoji": "⚙️",
          "bgColor": "#37474F"
          },
          {
          "letter": "F",
          "word": "Fuel",
          "emoji": "⛽",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "T",
          "word": "Thruster",
          "emoji": "🔥",
          "bgColor": "#FF5722"
          },
          {
          "letter": "P",
          "word": "Payload",
          "emoji": "📦",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "S",
          "word": "Sensor",
          "emoji": "📡",
          "bgColor": "#0288D1"
          },
          {
          "letter": "C",
          "word": "Camera",
          "emoji": "📷",
          "bgColor": "#FFC107"
          },
          {
          "letter": "S",
          "word": "Spectrometer",
          "emoji": "🌈",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "R",
          "word": "Radar",
          "emoji": "📡",
          "bgColor": "#0288D1"
          },
          {
          "letter": "L",
          "word": "Laser",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "A",
          "word": "Antenna",
          "emoji": "📡",
          "bgColor": "#455A64"
          },
          {
          "letter": "B",
          "word": "Battery",
          "emoji": "🔋",
          "bgColor": "#FFC107"
          },
          {
          "letter": "S",
          "word": "Solar Panel",
          "emoji": "☀️",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "C",
          "word": "Computer",
          "emoji": "💻",
          "bgColor": "#263238"
          },
          {
          "letter": "D",
          "word": "Data",
          "emoji": "📊",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "T",
          "word": "Transmission",
          "emoji": "📡",
          "bgColor": "#0288D1"
          },
          {
          "letter": "S",
          "word": "Signal",
          "emoji": "📶",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "C",
          "word": "Communication",
          "emoji": "💬",
          "bgColor": "#2196F3"
          },
          {
          "letter": "N",
          "word": "Navigation",
          "emoji": "🧭",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "G",
          "word": "GPS",
          "emoji": "📍",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "I",
          "word": "ISRO Tech",
          "emoji": "🔬",
          "bgColor": "#1565C0"
          },
          {
          "letter": "I",
          "word": "Innovation",
          "emoji": "💡",
          "bgColor": "#FFC107"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceSpaceTech2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Space Technology - Part 2",
          videoId: "space-space-tech-2",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#37474F",
          letters: [
          {
          "letter": "M",
          "word": "Meteorology",
          "emoji": "🌡️",
          "bgColor": "#FF9800"
          },
          {
          "letter": "W",
          "word": "Weather",
          "emoji": "⛅",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "C",
          "word": "Climate",
          "emoji": "🌍",
          "bgColor": "#1565C0"
          },
          {
          "letter": "O",
          "word": "Observation",
          "emoji": "👁️",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "M",
          "word": "Mapping",
          "emoji": "🗺️",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "S",
          "word": "Survey",
          "emoji": "📋",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "R",
          "word": "Remote Sensing",
          "emoji": "📡",
          "bgColor": "#0288D1"
          },
          {
          "letter": "E",
          "word": "Earth",
          "emoji": "🌍",
          "bgColor": "#1565C0"
          },
          {
          "letter": "A",
          "word": "Atmosphere",
          "emoji": "💨",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "O",
          "word": "Ocean",
          "emoji": "🌊",
          "bgColor": "#0288D1"
          },
          {
          "letter": "I",
          "word": "Ionosphere",
          "emoji": "⚡",
          "bgColor": "#FFB300"
          },
          {
          "letter": "M",
          "word": "Magnetosphere",
          "emoji": "🧲",
          "bgColor": "#37474F"
          },
          {
          "letter": "P",
          "word": "Plasma",
          "emoji": "⚡",
          "bgColor": "#FFB300"
          },
          {
          "letter": "S",
          "word": "Solar Radiation",
          "emoji": "☀️",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "U",
          "word": "UV Light",
          "emoji": "☀️",
          "bgColor": "#FFC107"
          },
          {
          "letter": "I",
          "word": "IR Imaging",
          "emoji": "🌡️",
          "bgColor": "#FF5722"
          },
          {
          "letter": "M",
          "word": "Microwave",
          "emoji": "📡",
          "bgColor": "#0288D1"
          },
          {
          "letter": "R",
          "word": "Radio Wave",
          "emoji": "📡",
          "bgColor": "#455A64"
          },
          {
          "letter": "X",
          "word": "X-Ray",
          "emoji": "💫",
          "bgColor": "#9C27B0"
          },
          {
          "letter": "G",
          "word": "Gamma Ray",
          "emoji": "☢️",
          "bgColor": "#FF5722"
          },
          {
          "letter": "L",
          "word": "Lidar",
          "emoji": "📡",
          "bgColor": "#0288D1"
          },
          {
          "letter": "S",
          "word": "Sonar",
          "emoji": "📡",
          "bgColor": "#0288D1"
          },
          {
          "letter": "V",
          "word": "Vision",
          "emoji": "👁️",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "I",
          "word": "Imaging",
          "emoji": "📷",
          "bgColor": "#FFC107"
          },
          {
          "letter": "S",
          "word": "Spectroscopy",
          "emoji": "🌈",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "P",
          "word": "Photometry",
          "emoji": "💡",
          "bgColor": "#FFC107"
          },
          {
          "letter": "A",
          "word": "Analysis",
          "emoji": "📊",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "C",
          "word": "Calibration",
          "emoji": "⚙️",
          "bgColor": "#37474F"
          },
          {
          "letter": "T",
          "word": "Testing",
          "emoji": "🧪",
          "bgColor": "#FF5722"
          },
          {
          "letter": "V",
          "word": "Validation",
          "emoji": "✓",
          "bgColor": "#4CAF50"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceSpaceTech3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Space Technology - Part 3",
          videoId: "space-space-tech-3",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#455A64",
          letters: [
          {
          "letter": "S",
          "word": "Spacecraft",
          "emoji": "🛸",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "A",
          "word": "Avionics",
          "emoji": "⚙️",
          "bgColor": "#455A64"
          },
          {
          "letter": "S",
          "word": "Systems",
          "emoji": "🔧",
          "bgColor": "#37474F"
          },
          {
          "letter": "H",
          "word": "Hardware",
          "emoji": "💾",
          "bgColor": "#263238"
          },
          {
          "letter": "S",
          "word": "Software",
          "emoji": "💻",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "P",
          "word": "Programming",
          "emoji": "⌨️",
          "bgColor": "#1565C0"
          },
          {
          "letter": "A",
          "word": "Algorithm",
          "emoji": "🧮",
          "bgColor": "#2196F3"
          },
          {
          "letter": "O",
          "word": "Operation",
          "emoji": "⚙️",
          "bgColor": "#455A64"
          },
          {
          "letter": "M",
          "word": "Maintenance",
          "emoji": "🔧",
          "bgColor": "#FF9800"
          },
          {
          "letter": "U",
          "word": "Upgrade",
          "emoji": "📈",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "I",
          "word": "Integration",
          "emoji": "🔗",
          "bgColor": "#2196F3"
          },
          {
          "letter": "T",
          "word": "Testing",
          "emoji": "🧪",
          "bgColor": "#FF5722"
          },
          {
          "letter": "Q",
          "word": "Quality",
          "emoji": "✓",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "S",
          "word": "Safety",
          "emoji": "🛡️",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "R",
          "word": "Reliability",
          "emoji": "✓",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "E",
          "word": "Efficiency",
          "emoji": "⚡",
          "bgColor": "#FFB300"
          },
          {
          "letter": "P",
          "word": "Performance",
          "emoji": "📈",
          "bgColor": "#FF9800"
          },
          {
          "letter": "O",
          "word": "Optimization",
          "emoji": "📊",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "M",
          "word": "Monitoring",
          "emoji": "📡",
          "bgColor": "#0288D1"
          },
          {
          "letter": "C",
          "word": "Control",
          "emoji": "🎮",
          "bgColor": "#37474F"
          },
          {
          "letter": "A",
          "word": "Automation",
          "emoji": "🤖",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "I",
          "word": "Intelligence",
          "emoji": "🧠",
          "bgColor": "#FFB300"
          },
          {
          "letter": "M",
          "word": "Machine Learning",
          "emoji": "🤖",
          "bgColor": "#2196F3"
          },
          {
          "letter": "A",
          "word": "AI",
          "emoji": "🧠",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "N",
          "word": "Network",
          "emoji": "🌐",
          "bgColor": "#0288D1"
          },
          {
          "letter": "C",
          "word": "Cybersecurity",
          "emoji": "🔒",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "E",
          "word": "Encryption",
          "emoji": "🔐",
          "bgColor": "#1565C0"
          },
          {
          "letter": "I",
          "word": "ISRO Systems",
          "emoji": "🚀",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "I",
          "word": "India Tech",
          "emoji": "💻",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "F",
          "word": "Future Tech",
          "emoji": "🔮",
          "bgColor": "#7C4DFF"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceMoonMissions1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Moon Missions - Part 1",
          videoId: "space-moon-missions-1",
          bgGradient: ["#795548","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [
          {
          "letter": "M",
          "word": "Moon",
          "emoji": "🌙",
          "bgColor": "#FFA000"
          },
          {
          "letter": "L",
          "word": "Luna",
          "emoji": "🌙",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "S",
          "word": "Satellite",
          "emoji": "🛰️",
          "bgColor": "#37474F"
          },
          {
          "letter": "A",
          "word": "Apollo",
          "emoji": "🚀",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "C",
          "word": "Chandrayaan",
          "emoji": "🛰️",
          "bgColor": "#1565C0"
          },
          {
          "letter": "O",
          "word": "Orbiter",
          "emoji": "🛰️",
          "bgColor": "#455A64"
          },
          {
          "letter": "I",
          "word": "Impactor",
          "emoji": "💥",
          "bgColor": "#FF5722"
          },
          {
          "letter": "R",
          "word": "Rover",
          "emoji": "🚗",
          "bgColor": "#FF9800"
          },
          {
          "letter": "L",
          "word": "Lander",
          "emoji": "🛸",
          "bgColor": "#78909C"
          },
          {
          "letter": "C",
          "word": "Crater",
          "emoji": "🕳️",
          "bgColor": "#795548"
          },
          {
          "letter": "S",
          "word": "Surface",
          "emoji": "🌍",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "R",
          "word": "Regolith",
          "emoji": "🪨",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "D",
          "word": "Dust",
          "emoji": "☁️",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "R",
          "word": "Rock",
          "emoji": "🪨",
          "bgColor": "#795548"
          },
          {
          "letter": "M",
          "word": "Maria",
          "emoji": "🌑",
          "bgColor": "#263238"
          },
          {
          "letter": "H",
          "word": "Highlands",
          "emoji": "⛰️",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "V",
          "word": "Valley",
          "emoji": "🏜️",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "P",
          "word": "Peak",
          "emoji": "⛰️",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "S",
          "word": "Seismic",
          "emoji": "📊",
          "bgColor": "#FF5722"
          },
          {
          "letter": "G",
          "word": "Gravity",
          "emoji": "🌍",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "M",
          "word": "Magnetic",
          "emoji": "🧲",
          "bgColor": "#37474F"
          },
          {
          "letter": "T",
          "word": "Temperature",
          "emoji": "🌡️",
          "bgColor": "#FF9800"
          },
          {
          "letter": "R",
          "word": "Radiation",
          "emoji": "☢️",
          "bgColor": "#FF5722"
          },
          {
          "letter": "W",
          "word": "Water",
          "emoji": "💧",
          "bgColor": "#0288D1"
          },
          {
          "letter": "I",
          "word": "Ice",
          "emoji": "🧊",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "O",
          "word": "Oxygen",
          "emoji": "💨",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "H",
          "word": "Helium",
          "emoji": "🎈",
          "bgColor": "#FFB300"
          },
          {
          "letter": "S",
          "word": "Science",
          "emoji": "🔬",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "R",
          "word": "Research",
          "emoji": "🔭",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "E",
          "word": "Exploration",
          "emoji": "🔍",
          "bgColor": "#FF6F00"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceMoonMissions2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Moon Missions - Part 2",
          videoId: "space-moon-missions-2",
          bgGradient: ["#6D4C41","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [
          {
          "letter": "M",
          "word": "Mission",
          "emoji": "🎯",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "O",
          "word": "Objective",
          "emoji": "🎯",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "G",
          "word": "Goal",
          "emoji": "🎯",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Plan",
          "emoji": "📋",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "S",
          "word": "Schedule",
          "emoji": "📅",
          "bgColor": "#FF9800"
          },
          {
          "letter": "L",
          "word": "Launch",
          "emoji": "🚀",
          "bgColor": "#FF5722"
          },
          {
          "letter": "T",
          "word": "Trajectory",
          "emoji": "📈",
          "bgColor": "#2196F3"
          },
          {
          "letter": "D",
          "word": "Descent",
          "emoji": "📉",
          "bgColor": "#FF5722"
          },
          {
          "letter": "L",
          "word": "Landing",
          "emoji": "🛸",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "D",
          "word": "Deployment",
          "emoji": "📦",
          "bgColor": "#FF9800"
          },
          {
          "letter": "O",
          "word": "Operation",
          "emoji": "⚙️",
          "bgColor": "#455A64"
          },
          {
          "letter": "C",
          "word": "Collection",
          "emoji": "📦",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "S",
          "word": "Sample",
          "emoji": "🧪",
          "bgColor": "#0288D1"
          },
          {
          "letter": "A",
          "word": "Analysis",
          "emoji": "🔬",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "R",
          "word": "Result",
          "emoji": "📊",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "D",
          "word": "Discovery",
          "emoji": "🔍",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "F",
          "word": "Finding",
          "emoji": "📍",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "E",
          "word": "Evidence",
          "emoji": "🔍",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "D",
          "word": "Data",
          "emoji": "📊",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "I",
          "word": "Information",
          "emoji": "📄",
          "bgColor": "#1565C0"
          },
          {
          "letter": "K",
          "word": "Knowledge",
          "emoji": "📚",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "U",
          "word": "Understanding",
          "emoji": "🧠",
          "bgColor": "#FFB300"
          },
          {
          "letter": "I",
          "word": "Insight",
          "emoji": "💡",
          "bgColor": "#FFC107"
          },
          {
          "letter": "C",
          "word": "Conclusion",
          "emoji": "✓",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "S",
          "word": "Success",
          "emoji": "🏆",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "A",
          "word": "Achievement",
          "emoji": "🏆",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Progress",
          "emoji": "📈",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "A",
          "word": "Advancement",
          "emoji": "📈",
          "bgColor": "#FF9800"
          },
          {
          "letter": "I",
          "word": "ISRO Mission",
          "emoji": "🚀",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "H",
          "word": "Historic",
          "emoji": "📜",
          "bgColor": "#8D6E63"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceMoonMissions3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Moon Missions - Part 3",
          videoId: "space-moon-missions-3",
          bgGradient: ["#8D6E63","#EFEBE9"] as [string, string],
          accentColor: "#4E342E",
          letters: [
          {
          "letter": "A",
          "word": "Astronaut",
          "emoji": "👨‍🚀",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "C",
          "word": "Cosmonaut",
          "emoji": "👨‍🚀",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "T",
          "word": "Taikonaut",
          "emoji": "👨‍🚀",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Pilot",
          "emoji": "👨‍✈️",
          "bgColor": "#2196F3"
          },
          {
          "letter": "C",
          "word": "Commander",
          "emoji": "🎖️",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Mission Specialist",
          "emoji": "👩‍🔬",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Payload Specialist",
          "emoji": "👩‍💼",
          "bgColor": "#FF9800"
          },
          {
          "letter": "E",
          "word": "EVA",
          "emoji": "👨‍🚀",
          "bgColor": "#0288D1"
          },
          {
          "letter": "S",
          "word": "Suit",
          "emoji": "👔",
          "bgColor": "#546E7A"
          },
          {
          "letter": "H",
          "word": "Helmet",
          "emoji": "🪖",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "G",
          "word": "Gloves",
          "emoji": "🧤",
          "bgColor": "#263238"
          },
          {
          "letter": "B",
          "word": "Boots",
          "emoji": "👢",
          "bgColor": "#263238"
          },
          {
          "letter": "O",
          "word": "Oxygen",
          "emoji": "💨",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "T",
          "word": "Tank",
          "emoji": "🧴",
          "bgColor": "#455A64"
          },
          {
          "letter": "R",
          "word": "Respirator",
          "emoji": "😷",
          "bgColor": "#FF5722"
          },
          {
          "letter": "V",
          "word": "Visor",
          "emoji": "👓",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "C",
          "word": "Communication",
          "emoji": "📡",
          "bgColor": "#0288D1"
          },
          {
          "letter": "H",
          "word": "Headset",
          "emoji": "🎧",
          "bgColor": "#455A64"
          },
          {
          "letter": "M",
          "word": "Microphone",
          "emoji": "🎤",
          "bgColor": "#FF9800"
          },
          {
          "letter": "T",
          "word": "Transmitter",
          "emoji": "📡",
          "bgColor": "#0288D1"
          },
          {
          "letter": "R",
          "word": "Receiver",
          "emoji": "📻",
          "bgColor": "#0288D1"
          },
          {
          "letter": "S",
          "word": "Signal",
          "emoji": "📶",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "T",
          "word": "Training",
          "emoji": "🏋️",
          "bgColor": "#FF5722"
          },
          {
          "letter": "S",
          "word": "Simulation",
          "emoji": "🎮",
          "bgColor": "#2196F3"
          },
          {
          "letter": "P",
          "word": "Preparation",
          "emoji": "📋",
          "bgColor": "#FF9800"
          },
          {
          "letter": "E",
          "word": "Experience",
          "emoji": "🎓",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "S",
          "word": "Skill",
          "emoji": "🎯",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "K",
          "word": "Knowledge",
          "emoji": "📚",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "C",
          "word": "Courage",
          "emoji": "💪",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "D",
          "word": "Dedication",
          "emoji": "🙏",
          "bgColor": "#FF6F00"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceMarsExploration1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mars Exploration - Part 1",
          videoId: "space-mars-exploration-1",
          bgGradient: ["#D32F2F","#FFCDD2"] as [string, string],
          accentColor: "#B71C1C",
          letters: [
          {
          "letter": "M",
          "word": "Mars",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "R",
          "word": "Red Planet",
          "emoji": "🔴",
          "bgColor": "#C62828"
          },
          {
          "letter": "P",
          "word": "Planet",
          "emoji": "🌍",
          "bgColor": "#1565C0"
          },
          {
          "letter": "O",
          "word": "Orbit",
          "emoji": "🛰️",
          "bgColor": "#455A64"
          },
          {
          "letter": "A",
          "word": "Atmosphere",
          "emoji": "💨",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "C",
          "word": "Carbon Dioxide",
          "emoji": "💨",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "S",
          "word": "Surface",
          "emoji": "🪨",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "D",
          "word": "Desert",
          "emoji": "🏜️",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "D",
          "word": "Dune",
          "emoji": "🏜️",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "R",
          "word": "Rock",
          "emoji": "🪨",
          "bgColor": "#795548"
          },
          {
          "letter": "S",
          "word": "Soil",
          "emoji": "🌱",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "D",
          "word": "Dust Storm",
          "emoji": "💨",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "W",
          "word": "Wind",
          "emoji": "💨",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "T",
          "word": "Temperature",
          "emoji": "🌡️",
          "bgColor": "#FF9800"
          },
          {
          "letter": "I",
          "word": "Ice",
          "emoji": "🧊",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "W",
          "word": "Water",
          "emoji": "💧",
          "bgColor": "#0288D1"
          },
          {
          "letter": "M",
          "word": "Methane",
          "emoji": "💨",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "V",
          "word": "Volcano",
          "emoji": "🌋",
          "bgColor": "#FF5722"
          },
          {
          "letter": "O",
          "word": "Olympus Mons",
          "emoji": "🏔️",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "V",
          "word": "Valles Marineris",
          "emoji": "🏜️",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "C",
          "word": "Canyon",
          "emoji": "🏜️",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "G",
          "word": "Gully",
          "emoji": "💧",
          "bgColor": "#0288D1"
          },
          {
          "letter": "P",
          "word": "Polar Cap",
          "emoji": "🧊",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "M",
          "word": "Mangalyaan",
          "emoji": "🛰️",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "O",
          "word": "Orbiter",
          "emoji": "🛰️",
          "bgColor": "#455A64"
          },
          {
          "letter": "I",
          "word": "Instrument",
          "emoji": "🔬",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "S",
          "word": "Sensor",
          "emoji": "📡",
          "bgColor": "#0288D1"
          },
          {
          "letter": "C",
          "word": "Camera",
          "emoji": "📷",
          "bgColor": "#FFC107"
          },
          {
          "letter": "M",
          "word": "Methane Mapper",
          "emoji": "📊",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "I",
          "word": "ISRO",
          "emoji": "🚀",
          "bgColor": "#FF6F00"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceMarsExploration2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mars Exploration - Part 2",
          videoId: "space-mars-exploration-2",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [
          {
          "letter": "E",
          "word": "Exploration",
          "emoji": "🔍",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "R",
          "word": "Rover",
          "emoji": "🚗",
          "bgColor": "#FF9800"
          },
          {
          "letter": "L",
          "word": "Lander",
          "emoji": "🛸",
          "bgColor": "#78909C"
          },
          {
          "letter": "M",
          "word": "Mission",
          "emoji": "🎯",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "O",
          "word": "Objective",
          "emoji": "🎯",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "S",
          "word": "Sample",
          "emoji": "🧪",
          "bgColor": "#0288D1"
          },
          {
          "letter": "C",
          "word": "Collection",
          "emoji": "📦",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "A",
          "word": "Analysis",
          "emoji": "🔬",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "S",
          "word": "Science",
          "emoji": "🔬",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "B",
          "word": "Biology",
          "emoji": "🧬",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "G",
          "word": "Geology",
          "emoji": "🪨",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "C",
          "word": "Chemistry",
          "emoji": "⚗️",
          "bgColor": "#0288D1"
          },
          {
          "letter": "P",
          "word": "Physics",
          "emoji": "⚛️",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "A",
          "word": "Astrobiology",
          "emoji": "🧬",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "L",
          "word": "Life",
          "emoji": "🧬",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "O",
          "word": "Organism",
          "emoji": "🦠",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "M",
          "word": "Microbe",
          "emoji": "🔬",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "B",
          "word": "Bacteria",
          "emoji": "🦠",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "F",
          "word": "Fossil",
          "emoji": "🦴",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "T",
          "word": "Trace",
          "emoji": "👣",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "E",
          "word": "Evidence",
          "emoji": "🔍",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "C",
          "word": "Colony",
          "emoji": "🏢",
          "bgColor": "#FF9800"
          },
          {
          "letter": "H",
          "word": "Habitat",
          "emoji": "🏠",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Base",
          "emoji": "🏢",
          "bgColor": "#FF9800"
          },
          {
          "letter": "S",
          "word": "Settlement",
          "emoji": "🏘️",
          "bgColor": "#FF9800"
          },
          {
          "letter": "C",
          "word": "Colonization",
          "emoji": "🚀",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "F",
          "word": "Future",
          "emoji": "🔮",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "P",
          "word": "Possibility",
          "emoji": "💭",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Potential",
          "emoji": "⭐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "D",
          "word": "Dream",
          "emoji": "✨",
          "bgColor": "#6A1B9A"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceMarsExploration3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Mars Exploration - Part 3",
          videoId: "space-mars-exploration-3",
          bgGradient: ["#E53935","#FFEBEE"] as [string, string],
          accentColor: "#C62828",
          letters: [
          {
          "letter": "T",
          "word": "Technology",
          "emoji": "🔬",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "I",
          "word": "Innovation",
          "emoji": "💡",
          "bgColor": "#FFC107"
          },
          {
          "letter": "R",
          "word": "Research",
          "emoji": "🔭",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "D",
          "word": "Development",
          "emoji": "📈",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "E",
          "word": "Engineering",
          "emoji": "⚙️",
          "bgColor": "#455A64"
          },
          {
          "letter": "D",
          "word": "Design",
          "emoji": "🎨",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "B",
          "word": "Build",
          "emoji": "🔨",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "C",
          "word": "Construction",
          "emoji": "🏗️",
          "bgColor": "#FF9800"
          },
          {
          "letter": "M",
          "word": "Manufacturing",
          "emoji": "🏭",
          "bgColor": "#455A64"
          },
          {
          "letter": "P",
          "word": "Production",
          "emoji": "📦",
          "bgColor": "#FF9800"
          },
          {
          "letter": "A",
          "word": "Assembly",
          "emoji": "🔧",
          "bgColor": "#455A64"
          },
          {
          "letter": "T",
          "word": "Testing",
          "emoji": "🧪",
          "bgColor": "#FF5722"
          },
          {
          "letter": "V",
          "word": "Validation",
          "emoji": "✓",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "V",
          "word": "Verification",
          "emoji": "✓",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "Q",
          "word": "Quality",
          "emoji": "✓",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "S",
          "word": "Safety",
          "emoji": "🛡️",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "R",
          "word": "Reliability",
          "emoji": "✓",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "D",
          "word": "Durability",
          "emoji": "💪",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "L",
          "word": "Longevity",
          "emoji": "⏰",
          "bgColor": "#795548"
          },
          {
          "letter": "P",
          "word": "Performance",
          "emoji": "⚡",
          "bgColor": "#FFB300"
          },
          {
          "letter": "E",
          "word": "Efficiency",
          "emoji": "⚡",
          "bgColor": "#FFB300"
          },
          {
          "letter": "O",
          "word": "Optimization",
          "emoji": "📊",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "I",
          "word": "Improvement",
          "emoji": "📈",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "E",
          "word": "Enhancement",
          "emoji": "✨",
          "bgColor": "#FFC107"
          },
          {
          "letter": "U",
          "word": "Upgrade",
          "emoji": "📈",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "M",
          "word": "Modification",
          "emoji": "🔧",
          "bgColor": "#FF9800"
          },
          {
          "letter": "A",
          "word": "Adaptation",
          "emoji": "🔄",
          "bgColor": "#2196F3"
          },
          {
          "letter": "E",
          "word": "Evolution",
          "emoji": "🔄",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "I",
          "word": "India Leadership",
          "emoji": "🇮🇳",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "V",
          "word": "Vision",
          "emoji": "👁️",
          "bgColor": "#0D47A1"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceAmazingSpace1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Amazing Space Facts - Part 1",
          videoId: "space-amazing-space-1",
          bgGradient: ["#6A1B9A","#E1BEE7"] as [string, string],
          accentColor: "#4A148C",
          letters: [
          {
          "letter": "F",
          "word": "Fact",
          "emoji": "📚",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "K",
          "word": "Knowledge",
          "emoji": "📚",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "I",
          "word": "Information",
          "emoji": "📄",
          "bgColor": "#1565C0"
          },
          {
          "letter": "D",
          "word": "Discovery",
          "emoji": "🔍",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "W",
          "word": "Wonder",
          "emoji": "✨",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "M",
          "word": "Mystery",
          "emoji": "❓",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "S",
          "word": "Secret",
          "emoji": "🤫",
          "bgColor": "#263238"
          },
          {
          "letter": "H",
          "word": "Hidden",
          "emoji": "🙈",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "U",
          "word": "Unknown",
          "emoji": "🌌",
          "bgColor": "#1A237E"
          },
          {
          "letter": "C",
          "word": "Curious",
          "emoji": "🧐",
          "bgColor": "#FF9800"
          },
          {
          "letter": "I",
          "word": "Interesting",
          "emoji": "👀",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "A",
          "word": "Amazing",
          "emoji": "😍",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "S",
          "word": "Surprising",
          "emoji": "😲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "U",
          "word": "Unbelievable",
          "emoji": "🤯",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "I",
          "word": "Incredible",
          "emoji": "🤩",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "A",
          "word": "Astonishing",
          "emoji": "😲",
          "bgColor": "#FFC107"
          },
          {
          "letter": "R",
          "word": "Remarkable",
          "emoji": "⭐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "E",
          "word": "Extraordinary",
          "emoji": "⭐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "F",
          "word": "Fascinating",
          "emoji": "😍",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "M",
          "word": "Marvelous",
          "emoji": "✨",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "S",
          "word": "Spectacular",
          "emoji": "🎆",
          "bgColor": "#FFC107"
          },
          {
          "letter": "M",
          "word": "Magnificent",
          "emoji": "👑",
          "bgColor": "#FFD700"
          },
          {
          "letter": "S",
          "word": "Spectacular",
          "emoji": "🌟",
          "bgColor": "#FFC107"
          },
          {
          "letter": "G",
          "word": "Grand",
          "emoji": "👑",
          "bgColor": "#FFD700"
          },
          {
          "letter": "V",
          "word": "Vast",
          "emoji": "📏",
          "bgColor": "#0288D1"
          },
          {
          "letter": "E",
          "word": "Enormous",
          "emoji": "📏",
          "bgColor": "#FF9800"
          },
          {
          "letter": "H",
          "word": "Huge",
          "emoji": "📏",
          "bgColor": "#FF9800"
          },
          {
          "letter": "I",
          "word": "Infinite",
          "emoji": "∞",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "E",
          "word": "Eternal",
          "emoji": "⏰",
          "bgColor": "#795548"
          },
          {
          "letter": "T",
          "word": "Timeless",
          "emoji": "⏰",
          "bgColor": "#8D6E63"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceAmazingSpace2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Amazing Space Facts - Part 2",
          videoId: "space-amazing-space-2",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [
          {
          "letter": "B",
          "word": "Black Hole",
          "emoji": "🕳️",
          "bgColor": "#263238"
          },
          {
          "letter": "S",
          "word": "Supernova",
          "emoji": "💥",
          "bgColor": "#FF5722"
          },
          {
          "letter": "P",
          "word": "Pulsar",
          "emoji": "✨",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "Q",
          "word": "Quasar",
          "emoji": "🌟",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "N",
          "word": "Neutron Star",
          "emoji": "💫",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "W",
          "word": "White Dwarf",
          "emoji": "⭐",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "R",
          "word": "Red Giant",
          "emoji": "🔴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Binary Star",
          "emoji": "⭐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "T",
          "word": "Triple Star",
          "emoji": "⭐",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Cluster",
          "emoji": "⭐",
          "bgColor": "#FF9800"
          },
          {
          "letter": "N",
          "word": "Nebula",
          "emoji": "🌌",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "D",
          "word": "Dark Matter",
          "emoji": "⬛",
          "bgColor": "#212121"
          },
          {
          "letter": "D",
          "word": "Dark Energy",
          "emoji": "⚫",
          "bgColor": "#1A237E"
          },
          {
          "letter": "A",
          "word": "Antimatter",
          "emoji": "⚛️",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "P",
          "word": "Plasma",
          "emoji": "⚡",
          "bgColor": "#FFB300"
          },
          {
          "letter": "B",
          "word": "Big Bang",
          "emoji": "💥",
          "bgColor": "#FF5722"
          },
          {
          "letter": "E",
          "word": "Expansion",
          "emoji": "📈",
          "bgColor": "#FF9800"
          },
          {
          "letter": "R",
          "word": "Redshift",
          "emoji": "📊",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Blueshift",
          "emoji": "📊",
          "bgColor": "#0288D1"
          },
          {
          "letter": "D",
          "word": "Doppler Effect",
          "emoji": "〰️",
          "bgColor": "#2196F3"
          },
          {
          "letter": "G",
          "word": "Gravitational Lens",
          "emoji": "🔍",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "W",
          "word": "Wormhole",
          "emoji": "🌀",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "P",
          "word": "Parallel Universe",
          "emoji": "🌌",
          "bgColor": "#4A148C"
          },
          {
          "letter": "M",
          "word": "Multiverse",
          "emoji": "🌌",
          "bgColor": "#1A237E"
          },
          {
          "letter": "D",
          "word": "Dimension",
          "emoji": "📦",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "T",
          "word": "Time Dilation",
          "emoji": "⏰",
          "bgColor": "#795548"
          },
          {
          "letter": "S",
          "word": "Spacetime",
          "emoji": "🌌",
          "bgColor": "#37474F"
          },
          {
          "letter": "R",
          "word": "Relativity",
          "emoji": "📐",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "Q",
          "word": "Quantum",
          "emoji": "⚛️",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "P",
          "word": "Probability",
          "emoji": "🎲",
          "bgColor": "#2196F3"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="SpaceAmazingSpace3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Amazing Space Facts - Part 3",
          videoId: "space-amazing-space-3",
          bgGradient: ["#8E24AA","#F3E5F5"] as [string, string],
          accentColor: "#7B1FA2",
          letters: [
          {
          "letter": "E",
          "word": "Exoplanet",
          "emoji": "🌍",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "H",
          "word": "Habitable Zone",
          "emoji": "🌍",
          "bgColor": "#43A047"
          },
          {
          "letter": "B",
          "word": "Biosignature",
          "emoji": "🧬",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "A",
          "word": "Alien Life",
          "emoji": "👽",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "E",
          "word": "Extraterrestrial",
          "emoji": "👽",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "U",
          "word": "Universe",
          "emoji": "🌌",
          "bgColor": "#1A237E"
          },
          {
          "letter": "C",
          "word": "Cosmos",
          "emoji": "🌌",
          "bgColor": "#37474F"
          },
          {
          "letter": "G",
          "word": "Galaxy",
          "emoji": "🌌",
          "bgColor": "#37474F"
          },
          {
          "letter": "S",
          "word": "Star Field",
          "emoji": "⭐",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "Celestial",
          "emoji": "✨",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Cosmic Ray",
          "emoji": "💫",
          "bgColor": "#9C27B0"
          },
          {
          "letter": "S",
          "word": "Solar Flare",
          "emoji": "🔆",
          "bgColor": "#FFC107"
          },
          {
          "letter": "C",
          "word": "Coronal Mass Ejection",
          "emoji": "☀️",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "S",
          "word": "Solar Wind",
          "emoji": "💨",
          "bgColor": "#FF9800"
          },
          {
          "letter": "M",
          "word": "Magnetic Field",
          "emoji": "🧲",
          "bgColor": "#37474F"
          },
          {
          "letter": "A",
          "word": "Aurora",
          "emoji": "🌌",
          "bgColor": "#00E676"
          },
          {
          "letter": "N",
          "word": "Northern Lights",
          "emoji": "🌌",
          "bgColor": "#00E676"
          },
          {
          "letter": "S",
          "word": "Southern Lights",
          "emoji": "🌌",
          "bgColor": "#00E676"
          },
          {
          "letter": "P",
          "word": "Polar",
          "emoji": "🧊",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "E",
          "word": "Eclipse",
          "emoji": "🌑",
          "bgColor": "#263238"
          },
          {
          "letter": "T",
          "word": "Transit",
          "emoji": "🌍",
          "bgColor": "#1565C0"
          },
          {
          "letter": "C",
          "word": "Conjunction",
          "emoji": "🌙",
          "bgColor": "#FFA000"
          },
          {
          "letter": "O",
          "word": "Opposition",
          "emoji": "🌍",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "A",
          "word": "Alignment",
          "emoji": "📍",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "R",
          "word": "Rotation",
          "emoji": "🔄",
          "bgColor": "#2196F3"
          },
          {
          "letter": "R",
          "word": "Revolution",
          "emoji": "🌍",
          "bgColor": "#1565C0"
          },
          {
          "letter": "P",
          "word": "Precession",
          "emoji": "🔄",
          "bgColor": "#2196F3"
          },
          {
          "letter": "N",
          "word": "Nutation",
          "emoji": "〰️",
          "bgColor": "#2196F3"
          },
          {
          "letter": "I",
          "word": "India's Pride",
          "emoji": "🇮🇳",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "S",
          "word": "Space Wonder",
          "emoji": "✨",
          "bgColor": "#6A1B9A"
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
