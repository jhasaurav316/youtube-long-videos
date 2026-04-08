import "./index.css";
import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";
import React from "react";

export const BirdRemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="BirdsIndianBirds1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Birds - Part 1",
          videoId: "birds-indian-birds-1",
          bgGradient: ["#F44336","#FFCDD2"] as [string, string],
          accentColor: "#B71C1C",
          letters: [
          {
          "letter": "P",
          "word": "Peacock",
          "emoji": "🦚",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "K",
          "word": "Kingfisher",
          "emoji": "🐦",
          "bgColor": "#0288D1"
          },
          {
          "letter": "B",
          "word": "Bulbul",
          "emoji": "🐦",
          "bgColor": "#795548"
          },
          {
          "letter": "M",
          "word": "Myna",
          "emoji": "🐦",
          "bgColor": "#5D4037"
          },
          {
          "letter": "S",
          "word": "Sparrow",
          "emoji": "🐦",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "C",
          "word": "Crow",
          "emoji": "🐦",
          "bgColor": "#212121"
          },
          {
          "letter": "P",
          "word": "Pigeon",
          "emoji": "🕊️",
          "bgColor": "#78909C"
          },
          {
          "letter": "P",
          "word": "Parrot",
          "emoji": "🦜",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "E",
          "word": "Eagle",
          "emoji": "🦅",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "H",
          "word": "Hornbill",
          "emoji": "🐦",
          "bgColor": "#FF9800"
          },
          {
          "letter": "F",
          "word": "Flamingo",
          "emoji": "🦩",
          "bgColor": "#E91E63"
          },
          {
          "letter": "C",
          "word": "Crane",
          "emoji": "🐦",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "S",
          "word": "Stork",
          "emoji": "🐦",
          "bgColor": "#ECEFF1"
          },
          {
          "letter": "K",
          "word": "Koel",
          "emoji": "🐦",
          "bgColor": "#37474F"
          },
          {
          "letter": "R",
          "word": "Robin",
          "emoji": "🐦",
          "bgColor": "#FF5722"
          },
          {
          "letter": "H",
          "word": "Heron",
          "emoji": "🐦",
          "bgColor": "#607D8B"
          },
          {
          "letter": "O",
          "word": "Owl",
          "emoji": "🦉",
          "bgColor": "#4E342E"
          },
          {
          "letter": "W",
          "word": "Woodpecker",
          "emoji": "🐦",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Sunbird",
          "emoji": "🐦",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "D",
          "word": "Drongo",
          "emoji": "🐦",
          "bgColor": "#263238"
          },
          {
          "letter": "T",
          "word": "Tailorbird",
          "emoji": "🐦",
          "bgColor": "#689F38"
          },
          {
          "letter": "B",
          "word": "Barbet",
          "emoji": "🐦",
          "bgColor": "#388E3C"
          },
          {
          "letter": "W",
          "word": "Wagtail",
          "emoji": "🐦",
          "bgColor": "#455A64"
          },
          {
          "letter": "I",
          "word": "Indian Roller",
          "emoji": "🐦",
          "bgColor": "#1565C0"
          },
          {
          "letter": "P",
          "word": "Parakeet",
          "emoji": "🦜",
          "bgColor": "#66BB6A"
          },
          {
          "letter": "V",
          "word": "Vulture",
          "emoji": "🦅",
          "bgColor": "#5D4037"
          },
          {
          "letter": "C",
          "word": "Cuckoo",
          "emoji": "🐦",
          "bgColor": "#757575"
          },
          {
          "letter": "L",
          "word": "Lapwing",
          "emoji": "🐦",
          "bgColor": "#827717"
          },
          {
          "letter": "M",
          "word": "Munia",
          "emoji": "🐦",
          "bgColor": "#A1887F"
          },
          {
          "letter": "N",
          "word": "Nightjar",
          "emoji": "🐦",
          "bgColor": "#3E2723"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BirdsIndianBirds2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Birds - Part 2",
          videoId: "birds-indian-birds-2",
          bgGradient: ["#E53935","#EF9A9A"] as [string, string],
          accentColor: "#C62828",
          letters: [
          {
          "letter": "W",
          "word": "Weaver Bird",
          "emoji": "🐦",
          "bgColor": "#F9A825"
          },
          {
          "letter": "B",
          "word": "Bee-eater",
          "emoji": "🐦",
          "bgColor": "#00BCD4"
          },
          {
          "letter": "S",
          "word": "Shrike",
          "emoji": "🐦",
          "bgColor": "#616161"
          },
          {
          "letter": "I",
          "word": "Ibis",
          "emoji": "🐦",
          "bgColor": "#E64A19"
          },
          {
          "letter": "P",
          "word": "Peafowl",
          "emoji": "🦚",
          "bgColor": "#00695C"
          },
          {
          "letter": "F",
          "word": "Flowerpecker",
          "emoji": "🐦",
          "bgColor": "#C2185B"
          },
          {
          "letter": "C",
          "word": "Cormorant",
          "emoji": "🐦",
          "bgColor": "#37474F"
          },
          {
          "letter": "E",
          "word": "Egret",
          "emoji": "🐦",
          "bgColor": "#ECEFF1"
          },
          {
          "letter": "S",
          "word": "Spotted Dove",
          "emoji": "🕊️",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "T",
          "word": "Treepie",
          "emoji": "🐦",
          "bgColor": "#795548"
          },
          {
          "letter": "R",
          "word": "Rosefinch",
          "emoji": "🐦",
          "bgColor": "#E91E63"
          },
          {
          "letter": "J",
          "word": "Jungle Babbler",
          "emoji": "🐦",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "G",
          "word": "Golden Oriole",
          "emoji": "🐦",
          "bgColor": "#FFD600"
          },
          {
          "letter": "D",
          "word": "Darter",
          "emoji": "🐦",
          "bgColor": "#455A64"
          },
          {
          "letter": "H",
          "word": "Hoopoe",
          "emoji": "🐦",
          "bgColor": "#E65100"
          },
          {
          "letter": "P",
          "word": "Prinia",
          "emoji": "🐦",
          "bgColor": "#827717"
          },
          {
          "letter": "K",
          "word": "Kite",
          "emoji": "🦅",
          "bgColor": "#4E342E"
          },
          {
          "letter": "L",
          "word": "Lark",
          "emoji": "🐦",
          "bgColor": "#A1887F"
          },
          {
          "letter": "M",
          "word": "Magpie",
          "emoji": "🐦",
          "bgColor": "#263238"
          },
          {
          "letter": "N",
          "word": "Nuthatch",
          "emoji": "🐦",
          "bgColor": "#546E7A"
          },
          {
          "letter": "A",
          "word": "Alexandrine Parakeet",
          "emoji": "🦜",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "B",
          "word": "Brahminy Kite",
          "emoji": "🦅",
          "bgColor": "#BF360C"
          },
          {
          "letter": "O",
          "word": "Oriental Magpie-Robin",
          "emoji": "🐦",
          "bgColor": "#212121"
          },
          {
          "letter": "P",
          "word": "Painted Stork",
          "emoji": "🐦",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "R",
          "word": "Rock Pigeon",
          "emoji": "🕊️",
          "bgColor": "#78909C"
          },
          {
          "letter": "S",
          "word": "Sarus Crane",
          "emoji": "🐦",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "T",
          "word": "Tern",
          "emoji": "🐦",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "W",
          "word": "White-eye",
          "emoji": "🐦",
          "bgColor": "#7CB342"
          },
          {
          "letter": "Y",
          "word": "Yellow-footed Green Pigeon",
          "emoji": "🕊️",
          "bgColor": "#689F38"
          },
          {
          "letter": "Z",
          "word": "Zitting Cisticola",
          "emoji": "🐦",
          "bgColor": "#9E9D24"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BirdsIndianBirds3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Birds - Part 3",
          videoId: "birds-indian-birds-3",
          bgGradient: ["#D32F2F","#FFEBEE"] as [string, string],
          accentColor: "#B71C1C",
          letters: [
          {
          "letter": "A",
          "word": "Asian Koel",
          "emoji": "🐦",
          "bgColor": "#212121"
          },
          {
          "letter": "B",
          "word": "Black Drongo",
          "emoji": "🐦",
          "bgColor": "#263238"
          },
          {
          "letter": "C",
          "word": "Common Myna",
          "emoji": "🐦",
          "bgColor": "#5D4037"
          },
          {
          "letter": "D",
          "word": "Dollarbird",
          "emoji": "🐦",
          "bgColor": "#0097A7"
          },
          {
          "letter": "E",
          "word": "Eurasian Coot",
          "emoji": "🐦",
          "bgColor": "#37474F"
          },
          {
          "letter": "F",
          "word": "Fantail",
          "emoji": "🐦",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "G",
          "word": "Grey Francolin",
          "emoji": "🐦",
          "bgColor": "#757575"
          },
          {
          "letter": "H",
          "word": "House Swift",
          "emoji": "🐦",
          "bgColor": "#424242"
          },
          {
          "letter": "I",
          "word": "Indian Pitta",
          "emoji": "🐦",
          "bgColor": "#00897B"
          },
          {
          "letter": "J",
          "word": "Junglefowl",
          "emoji": "🐓",
          "bgColor": "#BF360C"
          },
          {
          "letter": "K",
          "word": "Kestrel",
          "emoji": "🦅",
          "bgColor": "#795548"
          },
          {
          "letter": "L",
          "word": "Laughingthrush",
          "emoji": "🐦",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "M",
          "word": "Minivet",
          "emoji": "🐦",
          "bgColor": "#F44336"
          },
          {
          "letter": "N",
          "word": "Nilgiri Flycatcher",
          "emoji": "🐦",
          "bgColor": "#1565C0"
          },
          {
          "letter": "O",
          "word": "Orange-headed Thrush",
          "emoji": "🐦",
          "bgColor": "#E65100"
          },
          {
          "letter": "P",
          "word": "Purple Sunbird",
          "emoji": "🐦",
          "bgColor": "#4A148C"
          },
          {
          "letter": "Q",
          "word": "Quail",
          "emoji": "🐦",
          "bgColor": "#A1887F"
          },
          {
          "letter": "R",
          "word": "Racket-tailed Drongo",
          "emoji": "🐦",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "S",
          "word": "Shikra",
          "emoji": "🦅",
          "bgColor": "#546E7A"
          },
          {
          "letter": "T",
          "word": "Tickells Blue Flycatcher",
          "emoji": "🐦",
          "bgColor": "#0277BD"
          },
          {
          "letter": "U",
          "word": "Ultramarine Flycatcher",
          "emoji": "🐦",
          "bgColor": "#1A237E"
          },
          {
          "letter": "V",
          "word": "Verditer Flycatcher",
          "emoji": "🐦",
          "bgColor": "#00ACC1"
          },
          {
          "letter": "W",
          "word": "White-breasted Waterhen",
          "emoji": "🐦",
          "bgColor": "#455A64"
          },
          {
          "letter": "C",
          "word": "Coppersmith Barbet",
          "emoji": "🐦",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Brown-headed Barbet",
          "emoji": "🐦",
          "bgColor": "#33691E"
          },
          {
          "letter": "P",
          "word": "Plum-headed Parakeet",
          "emoji": "🦜",
          "bgColor": "#AD1457"
          },
          {
          "letter": "R",
          "word": "Red-whiskered Bulbul",
          "emoji": "🐦",
          "bgColor": "#C62828"
          },
          {
          "letter": "S",
          "word": "Spotted Owlet",
          "emoji": "🦉",
          "bgColor": "#4E342E"
          },
          {
          "letter": "G",
          "word": "Great Indian Hornbill",
          "emoji": "🐦",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "I",
          "word": "Indian Robin",
          "emoji": "🐦",
          "bgColor": "#212121"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BirdsTropicalBirds1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Birds - Part 1",
          videoId: "birds-tropical-birds-1",
          bgGradient: ["#00C853","#B9F6CA"] as [string, string],
          accentColor: "#1B5E20",
          letters: [
          {
          "letter": "T",
          "word": "Toucan",
          "emoji": "🐦",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "M",
          "word": "Macaw",
          "emoji": "🦜",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "C",
          "word": "Cockatoo",
          "emoji": "🦜",
          "bgColor": "#FFD600"
          },
          {
          "letter": "P",
          "word": "Parrotlet",
          "emoji": "🦜",
          "bgColor": "#43A047"
          },
          {
          "letter": "L",
          "word": "Lorikeet",
          "emoji": "🦜",
          "bgColor": "#00BCD4"
          },
          {
          "letter": "H",
          "word": "Hummingbird",
          "emoji": "🐦",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "B",
          "word": "Bird of Paradise",
          "emoji": "🐦",
          "bgColor": "#E65100"
          },
          {
          "letter": "Q",
          "word": "Quetzal",
          "emoji": "🐦",
          "bgColor": "#00695C"
          },
          {
          "letter": "S",
          "word": "Scarlet Macaw",
          "emoji": "🦜",
          "bgColor": "#F44336"
          },
          {
          "letter": "F",
          "word": "Frigatebird",
          "emoji": "🐦",
          "bgColor": "#37474F"
          },
          {
          "letter": "C",
          "word": "Cockatiel",
          "emoji": "🐦",
          "bgColor": "#FFC107"
          },
          {
          "letter": "K",
          "word": "Kookaburra",
          "emoji": "🐦",
          "bgColor": "#795548"
          },
          {
          "letter": "M",
          "word": "Manakin",
          "emoji": "🐦",
          "bgColor": "#E91E63"
          },
          {
          "letter": "S",
          "word": "Spoonbill",
          "emoji": "🐦",
          "bgColor": "#F48FB1"
          },
          {
          "letter": "J",
          "word": "Jacamar",
          "emoji": "🐦",
          "bgColor": "#388E3C"
          },
          {
          "letter": "T",
          "word": "Trogon",
          "emoji": "🐦",
          "bgColor": "#AD1457"
          },
          {
          "letter": "A",
          "word": "Amazon Parrot",
          "emoji": "🦜",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "R",
          "word": "Resplendent Quetzal",
          "emoji": "🐦",
          "bgColor": "#00897B"
          },
          {
          "letter": "P",
          "word": "Pitta",
          "emoji": "🐦",
          "bgColor": "#1565C0"
          },
          {
          "letter": "N",
          "word": "Nightingale",
          "emoji": "🐦",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "I",
          "word": "Indian Peafowl",
          "emoji": "🦚",
          "bgColor": "#0097A7"
          },
          {
          "letter": "O",
          "word": "Oriole",
          "emoji": "🐦",
          "bgColor": "#FF9800"
          },
          {
          "letter": "W",
          "word": "Wren",
          "emoji": "🐦",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "D",
          "word": "Drongo Cuckoo",
          "emoji": "🐦",
          "bgColor": "#263238"
          },
          {
          "letter": "E",
          "word": "Eclectus Parrot",
          "emoji": "🦜",
          "bgColor": "#C62828"
          },
          {
          "letter": "G",
          "word": "Green Jay",
          "emoji": "🐦",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "U",
          "word": "Umbrella Cockatoo",
          "emoji": "🦜",
          "bgColor": "#ECEFF1"
          },
          {
          "letter": "V",
          "word": "Violet Sabrewing",
          "emoji": "🐦",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "Y",
          "word": "Yellow Oriole",
          "emoji": "🐦",
          "bgColor": "#F9A825"
          },
          {
          "letter": "Z",
          "word": "Zebra Dove",
          "emoji": "🕊️",
          "bgColor": "#9E9E9E"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BirdsTropicalBirds2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Birds - Part 2",
          videoId: "birds-tropical-birds-2",
          bgGradient: ["#00E676","#C8E6C9"] as [string, string],
          accentColor: "#2E7D32",
          letters: [
          {
          "letter": "S",
          "word": "Sun Conure",
          "emoji": "🦜",
          "bgColor": "#FFD600"
          },
          {
          "letter": "B",
          "word": "Blue Jay",
          "emoji": "🐦",
          "bgColor": "#1976D2"
          },
          {
          "letter": "R",
          "word": "Rainbow Lorikeet",
          "emoji": "🦜",
          "bgColor": "#00BCD4"
          },
          {
          "letter": "G",
          "word": "Golden Pheasant",
          "emoji": "🐦",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "T",
          "word": "Tanager",
          "emoji": "🐦",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "P",
          "word": "Palm Cockatoo",
          "emoji": "🦜",
          "bgColor": "#424242"
          },
          {
          "letter": "C",
          "word": "Cassowary",
          "emoji": "🐦",
          "bgColor": "#1A237E"
          },
          {
          "letter": "H",
          "word": "Honeyeater",
          "emoji": "🐦",
          "bgColor": "#827717"
          },
          {
          "letter": "L",
          "word": "Lovebird",
          "emoji": "🦜",
          "bgColor": "#43A047"
          },
          {
          "letter": "M",
          "word": "Motmot",
          "emoji": "🐦",
          "bgColor": "#00695C"
          },
          {
          "letter": "A",
          "word": "Aracari",
          "emoji": "🐦",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "F",
          "word": "Fairy Wren",
          "emoji": "🐦",
          "bgColor": "#283593"
          },
          {
          "letter": "D",
          "word": "Drongo",
          "emoji": "🐦",
          "bgColor": "#212121"
          },
          {
          "letter": "K",
          "word": "King Parrot",
          "emoji": "🦜",
          "bgColor": "#C62828"
          },
          {
          "letter": "N",
          "word": "Nectarbird",
          "emoji": "🐦",
          "bgColor": "#4A148C"
          },
          {
          "letter": "W",
          "word": "Weaver Finch",
          "emoji": "🐦",
          "bgColor": "#F57F17"
          },
          {
          "letter": "E",
          "word": "Emerald Dove",
          "emoji": "🕊️",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "I",
          "word": "Iora",
          "emoji": "🐦",
          "bgColor": "#9E9D24"
          },
          {
          "letter": "O",
          "word": "Orange-bellied Parrot",
          "emoji": "🦜",
          "bgColor": "#E65100"
          },
          {
          "letter": "J",
          "word": "Jabiru",
          "emoji": "🐦",
          "bgColor": "#455A64"
          },
          {
          "letter": "V",
          "word": "Vernal Hanging Parrot",
          "emoji": "🦜",
          "bgColor": "#388E3C"
          },
          {
          "letter": "U",
          "word": "Unicolored Jay",
          "emoji": "🐦",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "Y",
          "word": "Yellow-billed Stork",
          "emoji": "🐦",
          "bgColor": "#EF6C00"
          },
          {
          "letter": "Z",
          "word": "Zenaida Dove",
          "emoji": "🕊️",
          "bgColor": "#A1887F"
          },
          {
          "letter": "B",
          "word": "Bali Myna",
          "emoji": "🐦",
          "bgColor": "#ECEFF1"
          },
          {
          "letter": "S",
          "word": "Sulphur-crested Cockatoo",
          "emoji": "🦜",
          "bgColor": "#FDD835"
          },
          {
          "letter": "R",
          "word": "Rufous Treepie",
          "emoji": "🐦",
          "bgColor": "#BF360C"
          },
          {
          "letter": "P",
          "word": "Paradise Flycatcher",
          "emoji": "🐦",
          "bgColor": "#F48FB1"
          },
          {
          "letter": "T",
          "word": "Turaco",
          "emoji": "🐦",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "G",
          "word": "Green Bee-eater",
          "emoji": "🐦",
          "bgColor": "#1B5E20"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BirdsTropicalBirds3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Tropical Birds - Part 3",
          videoId: "birds-tropical-birds-3",
          bgGradient: ["#69F0AE","#E8F5E9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [
          {
          "letter": "H",
          "word": "Hyacinth Macaw",
          "emoji": "🦜",
          "bgColor": "#1565C0"
          },
          {
          "letter": "S",
          "word": "Sunbittern",
          "emoji": "🐦",
          "bgColor": "#795548"
          },
          {
          "letter": "C",
          "word": "Crimson Rosella",
          "emoji": "🦜",
          "bgColor": "#C62828"
          },
          {
          "letter": "P",
          "word": "Painted Bunting",
          "emoji": "🐦",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "B",
          "word": "Budgerigar",
          "emoji": "🦜",
          "bgColor": "#7CB342"
          },
          {
          "letter": "F",
          "word": "Flame Bowerbird",
          "emoji": "🐦",
          "bgColor": "#FF3D00"
          },
          {
          "letter": "M",
          "word": "Mandarin Duck",
          "emoji": "🦆",
          "bgColor": "#E65100"
          },
          {
          "letter": "K",
          "word": "Kakapo",
          "emoji": "🦜",
          "bgColor": "#558B2F"
          },
          {
          "letter": "G",
          "word": "Gouldian Finch",
          "emoji": "🐦",
          "bgColor": "#9C27B0"
          },
          {
          "letter": "R",
          "word": "Roseate Spoonbill",
          "emoji": "🐦",
          "bgColor": "#F06292"
          },
          {
          "letter": "W",
          "word": "Wilson Bird of Paradise",
          "emoji": "🐦",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "T",
          "word": "Thick-billed Parrot",
          "emoji": "🦜",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "A",
          "word": "African Grey Parrot",
          "emoji": "🦜",
          "bgColor": "#757575"
          },
          {
          "letter": "N",
          "word": "Nicobar Pigeon",
          "emoji": "🕊️",
          "bgColor": "#00695C"
          },
          {
          "letter": "L",
          "word": "Lilac-breasted Roller",
          "emoji": "🐦",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "D",
          "word": "Dusky Lory",
          "emoji": "🦜",
          "bgColor": "#BF360C"
          },
          {
          "letter": "J",
          "word": "Java Sparrow",
          "emoji": "🐦",
          "bgColor": "#9E9E9E"
          },
          {
          "letter": "O",
          "word": "Opal-crowned Tanager",
          "emoji": "🐦",
          "bgColor": "#00BCD4"
          },
          {
          "letter": "E",
          "word": "Eurasian Hoopoe",
          "emoji": "🐦",
          "bgColor": "#E65100"
          },
          {
          "letter": "I",
          "word": "Indian Ringneck",
          "emoji": "🦜",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "V",
          "word": "Victoria Crowned Pigeon",
          "emoji": "🕊️",
          "bgColor": "#283593"
          },
          {
          "letter": "U",
          "word": "Ural Owl",
          "emoji": "🦉",
          "bgColor": "#5D4037"
          },
          {
          "letter": "Y",
          "word": "Yellow-naped Amazon",
          "emoji": "🦜",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "Z",
          "word": "Zosterops",
          "emoji": "🐦",
          "bgColor": "#689F38"
          },
          {
          "letter": "S",
          "word": "Scarlet Tanager",
          "emoji": "🐦",
          "bgColor": "#F44336"
          },
          {
          "letter": "B",
          "word": "Blue-crowned Motmot",
          "emoji": "🐦",
          "bgColor": "#0288D1"
          },
          {
          "letter": "C",
          "word": "Channel-billed Toucan",
          "emoji": "🐦",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "P",
          "word": "Plum-headed Finch",
          "emoji": "🐦",
          "bgColor": "#880E4F"
          },
          {
          "letter": "R",
          "word": "Red Lory",
          "emoji": "🦜",
          "bgColor": "#D50000"
          },
          {
          "letter": "T",
          "word": "Toco Toucan",
          "emoji": "🐦",
          "bgColor": "#E65100"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BirdsGardenBirds1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Birds - Part 1",
          videoId: "birds-garden-birds-1",
          bgGradient: ["#8BC34A","#DCEDC8"] as [string, string],
          accentColor: "#33691E",
          letters: [
          {
          "letter": "S",
          "word": "Sparrow",
          "emoji": "🐦",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "R",
          "word": "Robin",
          "emoji": "🐦",
          "bgColor": "#F44336"
          },
          {
          "letter": "B",
          "word": "Bulbul",
          "emoji": "🐦",
          "bgColor": "#795548"
          },
          {
          "letter": "M",
          "word": "Myna",
          "emoji": "🐦",
          "bgColor": "#5D4037"
          },
          {
          "letter": "C",
          "word": "Cardinal",
          "emoji": "🐦",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "F",
          "word": "Finch",
          "emoji": "🐦",
          "bgColor": "#FF9800"
          },
          {
          "letter": "W",
          "word": "Warbler",
          "emoji": "🐦",
          "bgColor": "#689F38"
          },
          {
          "letter": "T",
          "word": "Thrush",
          "emoji": "🐦",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "D",
          "word": "Dove",
          "emoji": "🕊️",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "S",
          "word": "Swallow",
          "emoji": "🐦",
          "bgColor": "#1565C0"
          },
          {
          "letter": "H",
          "word": "House Crow",
          "emoji": "🐦",
          "bgColor": "#212121"
          },
          {
          "letter": "P",
          "word": "Purple Sunbird",
          "emoji": "🐦",
          "bgColor": "#4A148C"
          },
          {
          "letter": "G",
          "word": "Goldfinch",
          "emoji": "🐦",
          "bgColor": "#FFD600"
          },
          {
          "letter": "W",
          "word": "Wren",
          "emoji": "🐦",
          "bgColor": "#A1887F"
          },
          {
          "letter": "B",
          "word": "Blue Tit",
          "emoji": "🐦",
          "bgColor": "#0288D1"
          },
          {
          "letter": "K",
          "word": "Kingbird",
          "emoji": "🐦",
          "bgColor": "#455A64"
          },
          {
          "letter": "N",
          "word": "Nightingale",
          "emoji": "🐦",
          "bgColor": "#5D4037"
          },
          {
          "letter": "C",
          "word": "Chickadee",
          "emoji": "🐦",
          "bgColor": "#37474F"
          },
          {
          "letter": "J",
          "word": "Jay",
          "emoji": "🐦",
          "bgColor": "#1976D2"
          },
          {
          "letter": "L",
          "word": "Lark",
          "emoji": "🐦",
          "bgColor": "#827717"
          },
          {
          "letter": "T",
          "word": "Tailorbird",
          "emoji": "🐦",
          "bgColor": "#388E3C"
          },
          {
          "letter": "O",
          "word": "Oriental White-eye",
          "emoji": "🐦",
          "bgColor": "#7CB342"
          },
          {
          "letter": "P",
          "word": "Pigeon",
          "emoji": "🕊️",
          "bgColor": "#78909C"
          },
          {
          "letter": "A",
          "word": "Ashy Prinia",
          "emoji": "🐦",
          "bgColor": "#9E9E9E"
          },
          {
          "letter": "E",
          "word": "Eurasian Sparrow",
          "emoji": "🐦",
          "bgColor": "#795548"
          },
          {
          "letter": "M",
          "word": "Magpie Robin",
          "emoji": "🐦",
          "bgColor": "#263238"
          },
          {
          "letter": "I",
          "word": "Indian Silverbill",
          "emoji": "🐦",
          "bgColor": "#BCAAA4"
          },
          {
          "letter": "V",
          "word": "Verditer Flycatcher",
          "emoji": "🐦",
          "bgColor": "#00ACC1"
          },
          {
          "letter": "U",
          "word": "Upupa",
          "emoji": "🐦",
          "bgColor": "#E65100"
          },
          {
          "letter": "Y",
          "word": "Yellow Wagtail",
          "emoji": "🐦",
          "bgColor": "#F9A825"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BirdsGardenBirds2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Birds - Part 2",
          videoId: "birds-garden-birds-2",
          bgGradient: ["#9CCC65","#F1F8E9"] as [string, string],
          accentColor: "#558B2F",
          letters: [
          {
          "letter": "R",
          "word": "Red-vented Bulbul",
          "emoji": "🐦",
          "bgColor": "#C62828"
          },
          {
          "letter": "S",
          "word": "Spotted Munia",
          "emoji": "🐦",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "P",
          "word": "Pied Wagtail",
          "emoji": "🐦",
          "bgColor": "#212121"
          },
          {
          "letter": "C",
          "word": "Common Tailor Bird",
          "emoji": "🐦",
          "bgColor": "#33691E"
          },
          {
          "letter": "B",
          "word": "Barn Swallow",
          "emoji": "🐦",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "W",
          "word": "White Wagtail",
          "emoji": "🐦",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "G",
          "word": "Great Tit",
          "emoji": "🐦",
          "bgColor": "#F9A825"
          },
          {
          "letter": "H",
          "word": "House Martin",
          "emoji": "🐦",
          "bgColor": "#37474F"
          },
          {
          "letter": "D",
          "word": "Dunnock",
          "emoji": "🐦",
          "bgColor": "#795548"
          },
          {
          "letter": "F",
          "word": "Fantail Flycatcher",
          "emoji": "🐦",
          "bgColor": "#4E342E"
          },
          {
          "letter": "T",
          "word": "Tree Sparrow",
          "emoji": "🐦",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "L",
          "word": "Long-tailed Shrike",
          "emoji": "🐦",
          "bgColor": "#455A64"
          },
          {
          "letter": "M",
          "word": "Martin",
          "emoji": "🐦",
          "bgColor": "#546E7A"
          },
          {
          "letter": "E",
          "word": "Emerald Starling",
          "emoji": "🐦",
          "bgColor": "#00695C"
          },
          {
          "letter": "K",
          "word": "Koel",
          "emoji": "🐦",
          "bgColor": "#263238"
          },
          {
          "letter": "N",
          "word": "Niltava",
          "emoji": "🐦",
          "bgColor": "#1565C0"
          },
          {
          "letter": "J",
          "word": "Jungle Myna",
          "emoji": "🐦",
          "bgColor": "#4E342E"
          },
          {
          "letter": "A",
          "word": "Asian Paradise Flycatcher",
          "emoji": "🐦",
          "bgColor": "#FF8A65"
          },
          {
          "letter": "O",
          "word": "Olive-backed Sunbird",
          "emoji": "🐦",
          "bgColor": "#827717"
          },
          {
          "letter": "I",
          "word": "Indian Grey Hornbill",
          "emoji": "🐦",
          "bgColor": "#757575"
          },
          {
          "letter": "Z",
          "word": "Zebra Finch",
          "emoji": "🐦",
          "bgColor": "#FF5722"
          },
          {
          "letter": "V",
          "word": "Violet-backed Starling",
          "emoji": "🐦",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "Q",
          "word": "Quaker Parrot",
          "emoji": "🦜",
          "bgColor": "#43A047"
          },
          {
          "letter": "U",
          "word": "Umber Bird",
          "emoji": "🐦",
          "bgColor": "#5D4037"
          },
          {
          "letter": "X",
          "word": "Xenops",
          "emoji": "🐦",
          "bgColor": "#A1887F"
          },
          {
          "letter": "Y",
          "word": "Yellow-throated Sparrow",
          "emoji": "🐦",
          "bgColor": "#F57F17"
          },
          {
          "letter": "R",
          "word": "Rose-ringed Parakeet",
          "emoji": "🦜",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "S",
          "word": "Sunbird",
          "emoji": "🐦",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "B",
          "word": "Black Kite",
          "emoji": "🦅",
          "bgColor": "#3E2723"
          },
          {
          "letter": "P",
          "word": "Plain Prinia",
          "emoji": "🐦",
          "bgColor": "#9E9D24"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BirdsPreyBirds1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 1",
          videoId: "birds-prey-birds-1",
          bgGradient: ["#37474F","#90A4AE"] as [string, string],
          accentColor: "#263238",
          letters: [
          {
          "letter": "E",
          "word": "Eagle",
          "emoji": "🦅",
          "bgColor": "#5D4037"
          },
          {
          "letter": "F",
          "word": "Falcon",
          "emoji": "🦅",
          "bgColor": "#455A64"
          },
          {
          "letter": "H",
          "word": "Hawk",
          "emoji": "🦅",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "V",
          "word": "Vulture",
          "emoji": "🦅",
          "bgColor": "#3E2723"
          },
          {
          "letter": "K",
          "word": "Kite",
          "emoji": "🦅",
          "bgColor": "#795548"
          },
          {
          "letter": "O",
          "word": "Osprey",
          "emoji": "🦅",
          "bgColor": "#37474F"
          },
          {
          "letter": "B",
          "word": "Buzzard",
          "emoji": "🦅",
          "bgColor": "#4E342E"
          },
          {
          "letter": "H",
          "word": "Harrier",
          "emoji": "🦅",
          "bgColor": "#546E7A"
          },
          {
          "letter": "G",
          "word": "Golden Eagle",
          "emoji": "🦅",
          "bgColor": "#BF360C"
          },
          {
          "letter": "P",
          "word": "Peregrine Falcon",
          "emoji": "🦅",
          "bgColor": "#263238"
          },
          {
          "letter": "S",
          "word": "Shikra",
          "emoji": "🦅",
          "bgColor": "#607D8B"
          },
          {
          "letter": "B",
          "word": "Bald Eagle",
          "emoji": "🦅",
          "bgColor": "#4E342E"
          },
          {
          "letter": "C",
          "word": "Changeable Hawk-Eagle",
          "emoji": "🦅",
          "bgColor": "#5D4037"
          },
          {
          "letter": "M",
          "word": "Merlin",
          "emoji": "🦅",
          "bgColor": "#455A64"
          },
          {
          "letter": "S",
          "word": "Secretary Bird",
          "emoji": "🦅",
          "bgColor": "#78909C"
          },
          {
          "letter": "L",
          "word": "Lammergeier",
          "emoji": "🦅",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "R",
          "word": "Red Kite",
          "emoji": "🦅",
          "bgColor": "#BF360C"
          },
          {
          "letter": "W",
          "word": "White-bellied Sea Eagle",
          "emoji": "🦅",
          "bgColor": "#37474F"
          },
          {
          "letter": "A",
          "word": "African Fish Eagle",
          "emoji": "🦅",
          "bgColor": "#3E2723"
          },
          {
          "letter": "T",
          "word": "Tawny Eagle",
          "emoji": "🦅",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "N",
          "word": "Northern Goshawk",
          "emoji": "🦅",
          "bgColor": "#546E7A"
          },
          {
          "letter": "I",
          "word": "Imperial Eagle",
          "emoji": "🦅",
          "bgColor": "#4E342E"
          },
          {
          "letter": "D",
          "word": "Dark Kite",
          "emoji": "🦅",
          "bgColor": "#212121"
          },
          {
          "letter": "J",
          "word": "Jackal Buzzard",
          "emoji": "🦅",
          "bgColor": "#5D4037"
          },
          {
          "letter": "C",
          "word": "Crested Serpent Eagle",
          "emoji": "🦅",
          "bgColor": "#795548"
          },
          {
          "letter": "B",
          "word": "Brahminy Kite",
          "emoji": "🦅",
          "bgColor": "#D84315"
          },
          {
          "letter": "E",
          "word": "Eurasian Sparrowhawk",
          "emoji": "🦅",
          "bgColor": "#455A64"
          },
          {
          "letter": "F",
          "word": "Fishing Eagle",
          "emoji": "🦅",
          "bgColor": "#37474F"
          },
          {
          "letter": "K",
          "word": "Kestrel",
          "emoji": "🦅",
          "bgColor": "#A1887F"
          },
          {
          "letter": "P",
          "word": "Pallas Fish Eagle",
          "emoji": "🦅",
          "bgColor": "#6D4C41"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BirdsPreyBirds2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 2",
          videoId: "birds-prey-birds-2",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#37474F",
          letters: [
          {
          "letter": "O",
          "word": "Owl",
          "emoji": "🦉",
          "bgColor": "#4E342E"
          },
          {
          "letter": "B",
          "word": "Barn Owl",
          "emoji": "🦉",
          "bgColor": "#A1887F"
          },
          {
          "letter": "S",
          "word": "Snowy Owl",
          "emoji": "🦉",
          "bgColor": "#ECEFF1"
          },
          {
          "letter": "G",
          "word": "Great Horned Owl",
          "emoji": "🦉",
          "bgColor": "#5D4037"
          },
          {
          "letter": "E",
          "word": "Eagle Owl",
          "emoji": "🦉",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "S",
          "word": "Spotted Owlet",
          "emoji": "🦉",
          "bgColor": "#795548"
          },
          {
          "letter": "T",
          "word": "Tawny Owl",
          "emoji": "🦉",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "L",
          "word": "Long-eared Owl",
          "emoji": "🦉",
          "bgColor": "#4E342E"
          },
          {
          "letter": "S",
          "word": "Short-eared Owl",
          "emoji": "🦉",
          "bgColor": "#BCAAA4"
          },
          {
          "letter": "H",
          "word": "Hawk Owl",
          "emoji": "🦉",
          "bgColor": "#455A64"
          },
          {
          "letter": "M",
          "word": "Mottled Wood Owl",
          "emoji": "🦉",
          "bgColor": "#3E2723"
          },
          {
          "letter": "B",
          "word": "Brown Fish Owl",
          "emoji": "🦉",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "C",
          "word": "Collared Scops Owl",
          "emoji": "🦉",
          "bgColor": "#5D4037"
          },
          {
          "letter": "I",
          "word": "Indian Scops Owl",
          "emoji": "🦉",
          "bgColor": "#795548"
          },
          {
          "letter": "D",
          "word": "Dusky Eagle Owl",
          "emoji": "🦉",
          "bgColor": "#37474F"
          },
          {
          "letter": "F",
          "word": "Forest Owlet",
          "emoji": "🦉",
          "bgColor": "#33691E"
          },
          {
          "letter": "P",
          "word": "Pygmy Owl",
          "emoji": "🦉",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "R",
          "word": "Rock Eagle Owl",
          "emoji": "🦉",
          "bgColor": "#546E7A"
          },
          {
          "letter": "W",
          "word": "Wood Owl",
          "emoji": "🦉",
          "bgColor": "#4E342E"
          },
          {
          "letter": "J",
          "word": "Jungle Owlet",
          "emoji": "🦉",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "A",
          "word": "Andaman Scops Owl",
          "emoji": "🦉",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "N",
          "word": "Nicobar Scops Owl",
          "emoji": "🦉",
          "bgColor": "#00695C"
          },
          {
          "letter": "K",
          "word": "Kerala Owl",
          "emoji": "🦉",
          "bgColor": "#00796B"
          },
          {
          "letter": "V",
          "word": "Verreaux Eagle Owl",
          "emoji": "🦉",
          "bgColor": "#263238"
          },
          {
          "letter": "U",
          "word": "Ural Owl",
          "emoji": "🦉",
          "bgColor": "#757575"
          },
          {
          "letter": "Y",
          "word": "Yellow-legged Owlet",
          "emoji": "🦉",
          "bgColor": "#F9A825"
          },
          {
          "letter": "O",
          "word": "Oriental Scops Owl",
          "emoji": "🦉",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "G",
          "word": "Grass Owl",
          "emoji": "🦉",
          "bgColor": "#827717"
          },
          {
          "letter": "E",
          "word": "Eurasian Eagle Owl",
          "emoji": "🦉",
          "bgColor": "#4E342E"
          },
          {
          "letter": "B",
          "word": "Boreal Owl",
          "emoji": "🦉",
          "bgColor": "#455A64"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BirdsPreyBirds3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Birds of Prey - Part 3",
          videoId: "birds-prey-birds-3",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#37474F",
          letters: [
          {
          "letter": "C",
          "word": "Condor",
          "emoji": "🦅",
          "bgColor": "#212121"
          },
          {
          "letter": "H",
          "word": "Hobby",
          "emoji": "🦅",
          "bgColor": "#455A64"
          },
          {
          "letter": "G",
          "word": "Gyrfalcon",
          "emoji": "🦅",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "S",
          "word": "Steppe Eagle",
          "emoji": "🦅",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Black Eagle",
          "emoji": "🦅",
          "bgColor": "#212121"
          },
          {
          "letter": "M",
          "word": "Marsh Harrier",
          "emoji": "🦅",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "R",
          "word": "Rough-legged Buzzard",
          "emoji": "🦅",
          "bgColor": "#5D4037"
          },
          {
          "letter": "L",
          "word": "Lanner Falcon",
          "emoji": "🦅",
          "bgColor": "#A1887F"
          },
          {
          "letter": "T",
          "word": "Turtle Eagle",
          "emoji": "🦅",
          "bgColor": "#795548"
          },
          {
          "letter": "W",
          "word": "Wedge-tailed Eagle",
          "emoji": "🦅",
          "bgColor": "#3E2723"
          },
          {
          "letter": "P",
          "word": "Pallid Harrier",
          "emoji": "🦅",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "N",
          "word": "Nicobar Serpent Eagle",
          "emoji": "🦅",
          "bgColor": "#4E342E"
          },
          {
          "letter": "A",
          "word": "Amur Falcon",
          "emoji": "🦅",
          "bgColor": "#546E7A"
          },
          {
          "letter": "D",
          "word": "Dark Kite",
          "emoji": "🦅",
          "bgColor": "#37474F"
          },
          {
          "letter": "F",
          "word": "Ferruginous Hawk",
          "emoji": "🦅",
          "bgColor": "#BF360C"
          },
          {
          "letter": "I",
          "word": "Indian Vulture",
          "emoji": "🦅",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "J",
          "word": "Japanese Sparrowhawk",
          "emoji": "🦅",
          "bgColor": "#455A64"
          },
          {
          "letter": "K",
          "word": "King Vulture",
          "emoji": "🦅",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "O",
          "word": "Oriental Honey Buzzard",
          "emoji": "🦅",
          "bgColor": "#795548"
          },
          {
          "letter": "E",
          "word": "Eastern Imperial Eagle",
          "emoji": "🦅",
          "bgColor": "#5D4037"
          },
          {
          "letter": "V",
          "word": "Variable Goshawk",
          "emoji": "🦅",
          "bgColor": "#78909C"
          },
          {
          "letter": "U",
          "word": "Upland Buzzard",
          "emoji": "🦅",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "Y",
          "word": "Yellow-headed Caracara",
          "emoji": "🦅",
          "bgColor": "#F9A825"
          },
          {
          "letter": "Z",
          "word": "Zone-tailed Hawk",
          "emoji": "🦅",
          "bgColor": "#263238"
          },
          {
          "letter": "C",
          "word": "Crested Goshawk",
          "emoji": "🦅",
          "bgColor": "#4E342E"
          },
          {
          "letter": "B",
          "word": "Bonelli Eagle",
          "emoji": "🦅",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "S",
          "word": "Short-toed Snake Eagle",
          "emoji": "🦅",
          "bgColor": "#BCAAA4"
          },
          {
          "letter": "H",
          "word": "Hen Harrier",
          "emoji": "🦅",
          "bgColor": "#78909C"
          },
          {
          "letter": "R",
          "word": "Rufous-bellied Eagle",
          "emoji": "🦅",
          "bgColor": "#D84315"
          },
          {
          "letter": "G",
          "word": "Grey-headed Fish Eagle",
          "emoji": "🦅",
          "bgColor": "#546E7A"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BirdsWaterBirds1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Water Birds - Part 1",
          videoId: "birds-water-birds-1",
          bgGradient: ["#0288D1","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [
          {
          "letter": "F",
          "word": "Flamingo",
          "emoji": "🦩",
          "bgColor": "#E91E63"
          },
          {
          "letter": "D",
          "word": "Duck",
          "emoji": "🦆",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "S",
          "word": "Swan",
          "emoji": "🦢",
          "bgColor": "#ECEFF1"
          },
          {
          "letter": "P",
          "word": "Pelican",
          "emoji": "🐦",
          "bgColor": "#FFD600"
          },
          {
          "letter": "H",
          "word": "Heron",
          "emoji": "🐦",
          "bgColor": "#607D8B"
          },
          {
          "letter": "K",
          "word": "Kingfisher",
          "emoji": "🐦",
          "bgColor": "#0288D1"
          },
          {
          "letter": "C",
          "word": "Cormorant",
          "emoji": "🐦",
          "bgColor": "#263238"
          },
          {
          "letter": "E",
          "word": "Egret",
          "emoji": "🐦",
          "bgColor": "#FAFAFA"
          },
          {
          "letter": "S",
          "word": "Stork",
          "emoji": "🐦",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "G",
          "word": "Grebe",
          "emoji": "🐦",
          "bgColor": "#5D4037"
          },
          {
          "letter": "M",
          "word": "Moorhen",
          "emoji": "🐦",
          "bgColor": "#37474F"
          },
          {
          "letter": "I",
          "word": "Indian Pond Heron",
          "emoji": "🐦",
          "bgColor": "#795548"
          },
          {
          "letter": "T",
          "word": "Tern",
          "emoji": "🐦",
          "bgColor": "#78909C"
          },
          {
          "letter": "B",
          "word": "Bittern",
          "emoji": "🐦",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "W",
          "word": "Waterhen",
          "emoji": "🐦",
          "bgColor": "#455A64"
          },
          {
          "letter": "A",
          "word": "Avocet",
          "emoji": "🐦",
          "bgColor": "#212121"
          },
          {
          "letter": "R",
          "word": "Rail",
          "emoji": "🐦",
          "bgColor": "#4E342E"
          },
          {
          "letter": "J",
          "word": "Jacana",
          "emoji": "🐦",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "L",
          "word": "Little Grebe",
          "emoji": "🐦",
          "bgColor": "#3E2723"
          },
          {
          "letter": "N",
          "word": "Night Heron",
          "emoji": "🐦",
          "bgColor": "#263238"
          },
          {
          "letter": "O",
          "word": "Open-billed Stork",
          "emoji": "🐦",
          "bgColor": "#546E7A"
          },
          {
          "letter": "P",
          "word": "Plover",
          "emoji": "🐦",
          "bgColor": "#A1887F"
          },
          {
          "letter": "C",
          "word": "Coot",
          "emoji": "🐦",
          "bgColor": "#37474F"
          },
          {
          "letter": "D",
          "word": "Darter",
          "emoji": "🐦",
          "bgColor": "#5D4037"
          },
          {
          "letter": "S",
          "word": "Sandpiper",
          "emoji": "🐦",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "G",
          "word": "Godwit",
          "emoji": "🐦",
          "bgColor": "#795548"
          },
          {
          "letter": "W",
          "word": "Whistling Duck",
          "emoji": "🦆",
          "bgColor": "#EF6C00"
          },
          {
          "letter": "F",
          "word": "Frigatebird",
          "emoji": "🐦",
          "bgColor": "#212121"
          },
          {
          "letter": "K",
          "word": "Knot",
          "emoji": "🐦",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "V",
          "word": "Violet Heron",
          "emoji": "🐦",
          "bgColor": "#4A148C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BirdsWaterBirds2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Water Birds - Part 2",
          videoId: "birds-water-birds-2",
          bgGradient: ["#0277BD","#81D4FA"] as [string, string],
          accentColor: "#01579B",
          letters: [
          {
          "letter": "P",
          "word": "Penguin",
          "emoji": "🐧",
          "bgColor": "#263238"
          },
          {
          "letter": "A",
          "word": "Albatross",
          "emoji": "🐦",
          "bgColor": "#607D8B"
          },
          {
          "letter": "G",
          "word": "Gannet",
          "emoji": "🐦",
          "bgColor": "#FAFAFA"
          },
          {
          "letter": "S",
          "word": "Seagull",
          "emoji": "🐦",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "P",
          "word": "Puffin",
          "emoji": "🐦",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "B",
          "word": "Booby",
          "emoji": "🐦",
          "bgColor": "#0288D1"
          },
          {
          "letter": "C",
          "word": "Crane",
          "emoji": "🐦",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "S",
          "word": "Sarus Crane",
          "emoji": "🐦",
          "bgColor": "#78909C"
          },
          {
          "letter": "R",
          "word": "Redshank",
          "emoji": "🐦",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "W",
          "word": "Wigeon",
          "emoji": "🦆",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "T",
          "word": "Teal",
          "emoji": "🦆",
          "bgColor": "#00695C"
          },
          {
          "letter": "M",
          "word": "Mallard",
          "emoji": "🦆",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "H",
          "word": "Hornbill Stork",
          "emoji": "🐦",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "D",
          "word": "Dipper",
          "emoji": "🐦",
          "bgColor": "#455A64"
          },
          {
          "letter": "L",
          "word": "Loon",
          "emoji": "🐦",
          "bgColor": "#212121"
          },
          {
          "letter": "N",
          "word": "Noddy",
          "emoji": "🐦",
          "bgColor": "#5D4037"
          },
          {
          "letter": "I",
          "word": "Indian Skimmer",
          "emoji": "🐦",
          "bgColor": "#F44336"
          },
          {
          "letter": "O",
          "word": "Oystercatcher",
          "emoji": "🐦",
          "bgColor": "#263238"
          },
          {
          "letter": "F",
          "word": "Fulmar",
          "emoji": "🐦",
          "bgColor": "#78909C"
          },
          {
          "letter": "E",
          "word": "Emperor Penguin",
          "emoji": "🐧",
          "bgColor": "#37474F"
          },
          {
          "letter": "K",
          "word": "King Penguin",
          "emoji": "🐧",
          "bgColor": "#FF9800"
          },
          {
          "letter": "J",
          "word": "Jaeger",
          "emoji": "🐦",
          "bgColor": "#546E7A"
          },
          {
          "letter": "U",
          "word": "Upland Goose",
          "emoji": "🐦",
          "bgColor": "#689F38"
          },
          {
          "letter": "V",
          "word": "Velvet Scoter",
          "emoji": "🦆",
          "bgColor": "#212121"
          },
          {
          "letter": "Y",
          "word": "Yellow-billed Duck",
          "emoji": "🦆",
          "bgColor": "#F9A825"
          },
          {
          "letter": "Z",
          "word": "Zebra Duck",
          "emoji": "🦆",
          "bgColor": "#9E9E9E"
          },
          {
          "letter": "B",
          "word": "Bar-headed Goose",
          "emoji": "🐦",
          "bgColor": "#455A64"
          },
          {
          "letter": "G",
          "word": "Greylag Goose",
          "emoji": "🐦",
          "bgColor": "#757575"
          },
          {
          "letter": "P",
          "word": "Painted Stork",
          "emoji": "🐦",
          "bgColor": "#E65100"
          },
          {
          "letter": "S",
          "word": "Spot-billed Duck",
          "emoji": "🦆",
          "bgColor": "#6D4C41"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BirdsColorfulBirds1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colorful Birds - Part 1",
          videoId: "birds-colorful-birds-1",
          bgGradient: ["#9C27B0","#E1BEE7"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [
          {
          "letter": "P",
          "word": "Peacock",
          "emoji": "🦚",
          "bgColor": "#00695C"
          },
          {
          "letter": "K",
          "word": "Kingfisher",
          "emoji": "🐦",
          "bgColor": "#0288D1"
          },
          {
          "letter": "F",
          "word": "Flamingo",
          "emoji": "🦩",
          "bgColor": "#E91E63"
          },
          {
          "letter": "M",
          "word": "Macaw",
          "emoji": "🦜",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "L",
          "word": "Lorikeet",
          "emoji": "🦜",
          "bgColor": "#00BCD4"
          },
          {
          "letter": "S",
          "word": "Sunbird",
          "emoji": "🐦",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "I",
          "word": "Indian Roller",
          "emoji": "🐦",
          "bgColor": "#1565C0"
          },
          {
          "letter": "B",
          "word": "Bee-eater",
          "emoji": "🐦",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "G",
          "word": "Golden Pheasant",
          "emoji": "🐦",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "T",
          "word": "Toucan",
          "emoji": "🐦",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "R",
          "word": "Rosella",
          "emoji": "🦜",
          "bgColor": "#C62828"
          },
          {
          "letter": "P",
          "word": "Painted Bunting",
          "emoji": "🐦",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "H",
          "word": "Hoopoe",
          "emoji": "🐦",
          "bgColor": "#E65100"
          },
          {
          "letter": "C",
          "word": "Crimson Sunbird",
          "emoji": "🐦",
          "bgColor": "#B71C1C"
          },
          {
          "letter": "O",
          "word": "Oriole",
          "emoji": "🐦",
          "bgColor": "#FFD600"
          },
          {
          "letter": "V",
          "word": "Violet-backed Starling",
          "emoji": "🐦",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "N",
          "word": "Nicobar Pigeon",
          "emoji": "🕊️",
          "bgColor": "#00897B"
          },
          {
          "letter": "W",
          "word": "Wilson Bird of Paradise",
          "emoji": "🐦",
          "bgColor": "#D50000"
          },
          {
          "letter": "D",
          "word": "Dollar Bird",
          "emoji": "🐦",
          "bgColor": "#0097A7"
          },
          {
          "letter": "E",
          "word": "Emerald Dove",
          "emoji": "🕊️",
          "bgColor": "#388E3C"
          },
          {
          "letter": "J",
          "word": "Java Green Magpie",
          "emoji": "🐦",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "A",
          "word": "Amethyst Starling",
          "emoji": "🐦",
          "bgColor": "#9C27B0"
          },
          {
          "letter": "U",
          "word": "Ultramarine Flycatcher",
          "emoji": "🐦",
          "bgColor": "#1A237E"
          },
          {
          "letter": "Y",
          "word": "Yellow Warbler",
          "emoji": "🐦",
          "bgColor": "#F9A825"
          },
          {
          "letter": "Z",
          "word": "Zebra Finch",
          "emoji": "🐦",
          "bgColor": "#FF5722"
          },
          {
          "letter": "Q",
          "word": "Quetzal",
          "emoji": "🐦",
          "bgColor": "#00897B"
          },
          {
          "letter": "X",
          "word": "Xantus Hummingbird",
          "emoji": "🐦",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "L",
          "word": "Lilac Roller",
          "emoji": "🐦",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "B",
          "word": "Blue-throated Barbet",
          "emoji": "🐦",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "R",
          "word": "Rainbow Bee-eater",
          "emoji": "🐦",
          "bgColor": "#00BCD4"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BirdsColorfulBirds2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colorful Birds - Part 2",
          videoId: "birds-colorful-birds-2",
          bgGradient: ["#AB47BC","#F3E5F5"] as [string, string],
          accentColor: "#7B1FA2",
          letters: [
          {
          "letter": "S",
          "word": "Scarlet Macaw",
          "emoji": "🦜",
          "bgColor": "#D50000"
          },
          {
          "letter": "G",
          "word": "Gouldian Finch",
          "emoji": "🐦",
          "bgColor": "#9C27B0"
          },
          {
          "letter": "P",
          "word": "Paradise Tanager",
          "emoji": "🐦",
          "bgColor": "#00BCD4"
          },
          {
          "letter": "R",
          "word": "Red Bishop",
          "emoji": "🐦",
          "bgColor": "#F44336"
          },
          {
          "letter": "B",
          "word": "Blue-crowned Pigeon",
          "emoji": "🕊️",
          "bgColor": "#283593"
          },
          {
          "letter": "M",
          "word": "Mandarin Duck",
          "emoji": "🦆",
          "bgColor": "#E65100"
          },
          {
          "letter": "C",
          "word": "Cock-of-the-rock",
          "emoji": "🐦",
          "bgColor": "#FF6D00"
          },
          {
          "letter": "T",
          "word": "Turaco",
          "emoji": "🐦",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "F",
          "word": "Fiery Minivet",
          "emoji": "🐦",
          "bgColor": "#FF3D00"
          },
          {
          "letter": "H",
          "word": "Hyacinth Macaw",
          "emoji": "🦜",
          "bgColor": "#1565C0"
          },
          {
          "letter": "K",
          "word": "Keel-billed Toucan",
          "emoji": "🐦",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "E",
          "word": "Eclectus",
          "emoji": "🦜",
          "bgColor": "#C62828"
          },
          {
          "letter": "L",
          "word": "Lovebird",
          "emoji": "🦜",
          "bgColor": "#43A047"
          },
          {
          "letter": "W",
          "word": "Waxbill",
          "emoji": "🐦",
          "bgColor": "#E91E63"
          },
          {
          "letter": "D",
          "word": "Diamond Firetail",
          "emoji": "🐦",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "A",
          "word": "Azure Kingfisher",
          "emoji": "🐦",
          "bgColor": "#0097A7"
          },
          {
          "letter": "N",
          "word": "Northern Cardinal",
          "emoji": "🐦",
          "bgColor": "#B71C1C"
          },
          {
          "letter": "O",
          "word": "Orange-breasted Trogon",
          "emoji": "🐦",
          "bgColor": "#E65100"
          },
          {
          "letter": "I",
          "word": "Indian Pitta",
          "emoji": "🐦",
          "bgColor": "#00897B"
          },
          {
          "letter": "V",
          "word": "Violet Sabrewing",
          "emoji": "🐦",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "J",
          "word": "Japanese White-eye",
          "emoji": "🐦",
          "bgColor": "#7CB342"
          },
          {
          "letter": "U",
          "word": "Umber Sunbird",
          "emoji": "🐦",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "Y",
          "word": "Yellow-headed Amazon",
          "emoji": "🦜",
          "bgColor": "#F9A825"
          },
          {
          "letter": "Z",
          "word": "Zanzibar Red Bishop",
          "emoji": "🐦",
          "bgColor": "#F44336"
          },
          {
          "letter": "P",
          "word": "Purple-throated Sunbird",
          "emoji": "🐦",
          "bgColor": "#4A148C"
          },
          {
          "letter": "S",
          "word": "Sun Conure",
          "emoji": "🦜",
          "bgColor": "#FFD600"
          },
          {
          "letter": "G",
          "word": "Green-headed Tanager",
          "emoji": "🐦",
          "bgColor": "#00695C"
          },
          {
          "letter": "R",
          "word": "Roseate Spoonbill",
          "emoji": "🐦",
          "bgColor": "#F06292"
          },
          {
          "letter": "B",
          "word": "Blue Dacnis",
          "emoji": "🐦",
          "bgColor": "#1976D2"
          },
          {
          "letter": "C",
          "word": "Coppersmith Barbet",
          "emoji": "🐦",
          "bgColor": "#D32F2F"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BirdsColorfulBirds3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colorful Birds - Part 3",
          videoId: "birds-colorful-birds-3",
          bgGradient: ["#BA68C8","#CE93D8"] as [string, string],
          accentColor: "#8E24AA",
          letters: [
          {
          "letter": "T",
          "word": "Toco Toucan",
          "emoji": "🐦",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "F",
          "word": "Flame-colored Tanager",
          "emoji": "🐦",
          "bgColor": "#FF3D00"
          },
          {
          "letter": "S",
          "word": "Splendid Fairywren",
          "emoji": "🐦",
          "bgColor": "#1565C0"
          },
          {
          "letter": "R",
          "word": "Resplendent Quetzal",
          "emoji": "🐦",
          "bgColor": "#00897B"
          },
          {
          "letter": "P",
          "word": "Painted Stork",
          "emoji": "🐦",
          "bgColor": "#E65100"
          },
          {
          "letter": "G",
          "word": "Green Magpie",
          "emoji": "🐦",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "M",
          "word": "Malabar Trogon",
          "emoji": "🐦",
          "bgColor": "#AD1457"
          },
          {
          "letter": "B",
          "word": "Blue-winged Pitta",
          "emoji": "🐦",
          "bgColor": "#0277BD"
          },
          {
          "letter": "L",
          "word": "Lady Amherst Pheasant",
          "emoji": "🐦",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "K",
          "word": "King Bird-of-Paradise",
          "emoji": "🐦",
          "bgColor": "#D50000"
          },
          {
          "letter": "C",
          "word": "Curl-crested Aracari",
          "emoji": "🐦",
          "bgColor": "#F9A825"
          },
          {
          "letter": "H",
          "word": "Himalayan Monal",
          "emoji": "🐦",
          "bgColor": "#00BCD4"
          },
          {
          "letter": "E",
          "word": "Emerald Starling",
          "emoji": "🐦",
          "bgColor": "#00695C"
          },
          {
          "letter": "W",
          "word": "White-rumped Shama",
          "emoji": "🐦",
          "bgColor": "#212121"
          },
          {
          "letter": "D",
          "word": "Dracula Parrot",
          "emoji": "🦜",
          "bgColor": "#880E4F"
          },
          {
          "letter": "A",
          "word": "Asian Fairy Bluebird",
          "emoji": "🐦",
          "bgColor": "#1A237E"
          },
          {
          "letter": "N",
          "word": "Narina Trogon",
          "emoji": "🐦",
          "bgColor": "#388E3C"
          },
          {
          "letter": "O",
          "word": "Orange Minivet",
          "emoji": "🐦",
          "bgColor": "#FF6D00"
          },
          {
          "letter": "I",
          "word": "Ivory-billed Woodpecker",
          "emoji": "🐦",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "J",
          "word": "Jacobin Cuckoo",
          "emoji": "🐦",
          "bgColor": "#263238"
          },
          {
          "letter": "U",
          "word": "Umber Bird",
          "emoji": "🐦",
          "bgColor": "#5D4037"
          },
          {
          "letter": "V",
          "word": "Varied Bunting",
          "emoji": "🐦",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "Y",
          "word": "Yellow-breasted Chat",
          "emoji": "🐦",
          "bgColor": "#F9A825"
          },
          {
          "letter": "Z",
          "word": "Zoothera Thrush",
          "emoji": "🐦",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "Q",
          "word": "Quelea",
          "emoji": "🐦",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "X",
          "word": "Xantus Murrelet",
          "emoji": "🐦",
          "bgColor": "#37474F"
          },
          {
          "letter": "T",
          "word": "Temminck Tragopan",
          "emoji": "🐦",
          "bgColor": "#C62828"
          },
          {
          "letter": "S",
          "word": "Scarlet Ibis",
          "emoji": "🐦",
          "bgColor": "#F44336"
          },
          {
          "letter": "P",
          "word": "Purple Gallinule",
          "emoji": "🐦",
          "bgColor": "#4A148C"
          },
          {
          "letter": "B",
          "word": "Blue-and-yellow Macaw",
          "emoji": "🦜",
          "bgColor": "#1976D2"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BirdsSingingBirds1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Singing Birds - Part 1",
          videoId: "birds-singing-birds-1",
          bgGradient: ["#FF7043","#FFCCBC"] as [string, string],
          accentColor: "#BF360C",
          letters: [
          {
          "letter": "N",
          "word": "Nightingale",
          "emoji": "🐦",
          "bgColor": "#5D4037"
          },
          {
          "letter": "K",
          "word": "Koel",
          "emoji": "🐦",
          "bgColor": "#263238"
          },
          {
          "letter": "C",
          "word": "Canary",
          "emoji": "🐤",
          "bgColor": "#FFD600"
          },
          {
          "letter": "B",
          "word": "Bulbul",
          "emoji": "🐦",
          "bgColor": "#795548"
          },
          {
          "letter": "M",
          "word": "Mockingbird",
          "emoji": "🐦",
          "bgColor": "#78909C"
          },
          {
          "letter": "R",
          "word": "Robin",
          "emoji": "🐦",
          "bgColor": "#F44336"
          },
          {
          "letter": "T",
          "word": "Thrush",
          "emoji": "🐦",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "L",
          "word": "Lark",
          "emoji": "🐦",
          "bgColor": "#827717"
          },
          {
          "letter": "W",
          "word": "Warbler",
          "emoji": "🐦",
          "bgColor": "#689F38"
          },
          {
          "letter": "S",
          "word": "Shama",
          "emoji": "🐦",
          "bgColor": "#212121"
          },
          {
          "letter": "O",
          "word": "Oriole",
          "emoji": "🐦",
          "bgColor": "#FF9800"
          },
          {
          "letter": "F",
          "word": "Finch",
          "emoji": "🐦",
          "bgColor": "#E91E63"
          },
          {
          "letter": "G",
          "word": "Goldfinch",
          "emoji": "🐦",
          "bgColor": "#FFD600"
          },
          {
          "letter": "D",
          "word": "Dyal",
          "emoji": "🐦",
          "bgColor": "#37474F"
          },
          {
          "letter": "P",
          "word": "Prinia",
          "emoji": "🐦",
          "bgColor": "#827717"
          },
          {
          "letter": "H",
          "word": "Hwamei",
          "emoji": "🐦",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "A",
          "word": "Asian Koel",
          "emoji": "🐦",
          "bgColor": "#263238"
          },
          {
          "letter": "V",
          "word": "Veery",
          "emoji": "🐦",
          "bgColor": "#A1887F"
          },
          {
          "letter": "J",
          "word": "Japanese Bush Warbler",
          "emoji": "🐦",
          "bgColor": "#33691E"
          },
          {
          "letter": "E",
          "word": "Eurasian Blackbird",
          "emoji": "🐦",
          "bgColor": "#212121"
          },
          {
          "letter": "I",
          "word": "Indian Cuckoo",
          "emoji": "🐦",
          "bgColor": "#455A64"
          },
          {
          "letter": "U",
          "word": "Umber Warbler",
          "emoji": "🐦",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "Y",
          "word": "Yellow-billed Babbler",
          "emoji": "🐦",
          "bgColor": "#F9A825"
          },
          {
          "letter": "Z",
          "word": "Zitting Cisticola",
          "emoji": "🐦",
          "bgColor": "#9E9D24"
          },
          {
          "letter": "Q",
          "word": "Quail Thrush",
          "emoji": "🐦",
          "bgColor": "#A1887F"
          },
          {
          "letter": "X",
          "word": "Xenops",
          "emoji": "🐦",
          "bgColor": "#795548"
          },
          {
          "letter": "W",
          "word": "White-rumped Shama",
          "emoji": "🐦",
          "bgColor": "#263238"
          },
          {
          "letter": "C",
          "word": "Cuckoo",
          "emoji": "🐦",
          "bgColor": "#546E7A"
          },
          {
          "letter": "S",
          "word": "Song Thrush",
          "emoji": "🐦",
          "bgColor": "#795548"
          },
          {
          "letter": "B",
          "word": "Blackcap",
          "emoji": "🐦",
          "bgColor": "#37474F"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BirdsSingingBirds2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Singing Birds - Part 2",
          videoId: "birds-singing-birds-2",
          bgGradient: ["#FF8A65","#FFE0B2"] as [string, string],
          accentColor: "#D84315",
          letters: [
          {
          "letter": "M",
          "word": "Magpie Robin",
          "emoji": "🐦",
          "bgColor": "#212121"
          },
          {
          "letter": "S",
          "word": "Skylark",
          "emoji": "🐦",
          "bgColor": "#90A4AE"
          },
          {
          "letter": "R",
          "word": "Reed Warbler",
          "emoji": "🐦",
          "bgColor": "#33691E"
          },
          {
          "letter": "W",
          "word": "Woodlark",
          "emoji": "🐦",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "T",
          "word": "Tree Pipit",
          "emoji": "🐦",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "G",
          "word": "Garden Warbler",
          "emoji": "🐦",
          "bgColor": "#689F38"
          },
          {
          "letter": "B",
          "word": "Blackbird",
          "emoji": "🐦",
          "bgColor": "#263238"
          },
          {
          "letter": "H",
          "word": "Hermit Thrush",
          "emoji": "🐦",
          "bgColor": "#795548"
          },
          {
          "letter": "L",
          "word": "Laughingthrush",
          "emoji": "🐦",
          "bgColor": "#5D4037"
          },
          {
          "letter": "C",
          "word": "Chiffchaff",
          "emoji": "🐦",
          "bgColor": "#827717"
          },
          {
          "letter": "P",
          "word": "Pipit",
          "emoji": "🐦",
          "bgColor": "#A1887F"
          },
          {
          "letter": "F",
          "word": "Fieldfare",
          "emoji": "🐦",
          "bgColor": "#4E342E"
          },
          {
          "letter": "N",
          "word": "Nightjar",
          "emoji": "🐦",
          "bgColor": "#3E2723"
          },
          {
          "letter": "D",
          "word": "Dipper",
          "emoji": "🐦",
          "bgColor": "#455A64"
          },
          {
          "letter": "K",
          "word": "Kinglet",
          "emoji": "🐦",
          "bgColor": "#9E9D24"
          },
          {
          "letter": "A",
          "word": "Accentor",
          "emoji": "🐦",
          "bgColor": "#546E7A"
          },
          {
          "letter": "O",
          "word": "Olive-backed Pipit",
          "emoji": "🐦",
          "bgColor": "#558B2F"
          },
          {
          "letter": "E",
          "word": "Emerald Cuckoo",
          "emoji": "🐦",
          "bgColor": "#00695C"
          },
          {
          "letter": "I",
          "word": "Indian Paradise Flycatcher",
          "emoji": "🐦",
          "bgColor": "#FF8A65"
          },
          {
          "letter": "V",
          "word": "Varied Tit",
          "emoji": "🐦",
          "bgColor": "#1976D2"
          },
          {
          "letter": "J",
          "word": "Jungle Prinia",
          "emoji": "🐦",
          "bgColor": "#827717"
          },
          {
          "letter": "U",
          "word": "Upland Pipit",
          "emoji": "🐦",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "Y",
          "word": "Yellow-browed Warbler",
          "emoji": "🐦",
          "bgColor": "#F9A825"
          },
          {
          "letter": "Z",
          "word": "Zebra Waxbill",
          "emoji": "🐦",
          "bgColor": "#E91E63"
          },
          {
          "letter": "Q",
          "word": "Quail Finch",
          "emoji": "🐦",
          "bgColor": "#795548"
          },
          {
          "letter": "X",
          "word": "Xantus Wren",
          "emoji": "🐦",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "R",
          "word": "Redstart",
          "emoji": "🐦",
          "bgColor": "#FF5722"
          },
          {
          "letter": "S",
          "word": "Stonechat",
          "emoji": "🐦",
          "bgColor": "#37474F"
          },
          {
          "letter": "W",
          "word": "Whitethroat",
          "emoji": "🐦",
          "bgColor": "#BCAAA4"
          },
          {
          "letter": "B",
          "word": "Bay-backed Shrike",
          "emoji": "🐦",
          "bgColor": "#BF360C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BirdsForestBirds1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Forest Birds - Part 1",
          videoId: "birds-forest-birds-1",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [
          {
          "letter": "H",
          "word": "Hornbill",
          "emoji": "🐦",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "W",
          "word": "Woodpecker",
          "emoji": "🐦",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "O",
          "word": "Owl",
          "emoji": "🦉",
          "bgColor": "#4E342E"
          },
          {
          "letter": "T",
          "word": "Trogon",
          "emoji": "🐦",
          "bgColor": "#AD1457"
          },
          {
          "letter": "B",
          "word": "Barbet",
          "emoji": "🐦",
          "bgColor": "#388E3C"
          },
          {
          "letter": "P",
          "word": "Pitta",
          "emoji": "🐦",
          "bgColor": "#1565C0"
          },
          {
          "letter": "J",
          "word": "Junglefowl",
          "emoji": "🐓",
          "bgColor": "#BF360C"
          },
          {
          "letter": "F",
          "word": "Fairy Bluebird",
          "emoji": "🐦",
          "bgColor": "#1A237E"
          },
          {
          "letter": "C",
          "word": "Cuckoo",
          "emoji": "🐦",
          "bgColor": "#546E7A"
          },
          {
          "letter": "D",
          "word": "Drongo",
          "emoji": "🐦",
          "bgColor": "#212121"
          },
          {
          "letter": "N",
          "word": "Nuthatch",
          "emoji": "🐦",
          "bgColor": "#5D4037"
          },
          {
          "letter": "S",
          "word": "Spiderhunter",
          "emoji": "🐦",
          "bgColor": "#827717"
          },
          {
          "letter": "M",
          "word": "Monal",
          "emoji": "🐦",
          "bgColor": "#00BCD4"
          },
          {
          "letter": "R",
          "word": "Racket-tailed Drongo",
          "emoji": "🐦",
          "bgColor": "#263238"
          },
          {
          "letter": "E",
          "word": "Emerald Dove",
          "emoji": "🕊️",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "L",
          "word": "Leafbird",
          "emoji": "🐦",
          "bgColor": "#33691E"
          },
          {
          "letter": "G",
          "word": "Great Hornbill",
          "emoji": "🐦",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "K",
          "word": "Kingfisher",
          "emoji": "🐦",
          "bgColor": "#0288D1"
          },
          {
          "letter": "I",
          "word": "Indian Pitta",
          "emoji": "🐦",
          "bgColor": "#00897B"
          },
          {
          "letter": "A",
          "word": "Asian Barred Owlet",
          "emoji": "🦉",
          "bgColor": "#795548"
          },
          {
          "letter": "V",
          "word": "Verditer Flycatcher",
          "emoji": "🐦",
          "bgColor": "#00ACC1"
          },
          {
          "letter": "U",
          "word": "Ultramarine Flycatcher",
          "emoji": "🐦",
          "bgColor": "#1A237E"
          },
          {
          "letter": "Y",
          "word": "Yellow-browed Bulbul",
          "emoji": "🐦",
          "bgColor": "#F9A825"
          },
          {
          "letter": "Z",
          "word": "Zoothera Thrush",
          "emoji": "🐦",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "Q",
          "word": "Quail",
          "emoji": "🐦",
          "bgColor": "#A1887F"
          },
          {
          "letter": "X",
          "word": "Xenops",
          "emoji": "🐦",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "T",
          "word": "Treecreeper",
          "emoji": "🐦",
          "bgColor": "#4E342E"
          },
          {
          "letter": "S",
          "word": "Satyr Tragopan",
          "emoji": "🐦",
          "bgColor": "#C62828"
          },
          {
          "letter": "B",
          "word": "Blue-winged Leafbird",
          "emoji": "🐦",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "P",
          "word": "Pied Hornbill",
          "emoji": "🐦",
          "bgColor": "#263238"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="BirdsForestBirds2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Forest Birds - Part 2",
          videoId: "birds-forest-birds-2",
          bgGradient: ["#388E3C","#81C784"] as [string, string],
          accentColor: "#2E7D32",
          letters: [
          {
          "letter": "P",
          "word": "Pheasant",
          "emoji": "🐦",
          "bgColor": "#BF360C"
          },
          {
          "letter": "G",
          "word": "Green Pigeon",
          "emoji": "🕊️",
          "bgColor": "#388E3C"
          },
          {
          "letter": "W",
          "word": "Wreathed Hornbill",
          "emoji": "🐦",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "T",
          "word": "Thrush",
          "emoji": "🐦",
          "bgColor": "#5D4037"
          },
          {
          "letter": "F",
          "word": "Flycatcher",
          "emoji": "🐦",
          "bgColor": "#1565C0"
          },
          {
          "letter": "S",
          "word": "Scimitar Babbler",
          "emoji": "🐦",
          "bgColor": "#795548"
          },
          {
          "letter": "B",
          "word": "Broadbill",
          "emoji": "🐦",
          "bgColor": "#00695C"
          },
          {
          "letter": "M",
          "word": "Malkoha",
          "emoji": "🐦",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "C",
          "word": "Chloropsis",
          "emoji": "🐦",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "D",
          "word": "Dollarbird",
          "emoji": "🐦",
          "bgColor": "#0097A7"
          },
          {
          "letter": "H",
          "word": "Hill Myna",
          "emoji": "🐦",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "R",
          "word": "Rufous Woodpecker",
          "emoji": "🐦",
          "bgColor": "#D84315"
          },
          {
          "letter": "L",
          "word": "Laughingthrush",
          "emoji": "🐦",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "K",
          "word": "Kalij Pheasant",
          "emoji": "🐦",
          "bgColor": "#263238"
          },
          {
          "letter": "O",
          "word": "Orange-bellied Leafbird",
          "emoji": "🐦",
          "bgColor": "#E65100"
          },
          {
          "letter": "E",
          "word": "Eared Nightjar",
          "emoji": "🐦",
          "bgColor": "#3E2723"
          },
          {
          "letter": "N",
          "word": "Nilgiri Laughingthrush",
          "emoji": "🐦",
          "bgColor": "#4E342E"
          },
          {
          "letter": "I",
          "word": "Indian Grey Hornbill",
          "emoji": "🐦",
          "bgColor": "#757575"
          },
          {
          "letter": "A",
          "word": "Asian Emerald Cuckoo",
          "emoji": "🐦",
          "bgColor": "#00897B"
          },
          {
          "letter": "V",
          "word": "Vernal Hanging Parrot",
          "emoji": "🦜",
          "bgColor": "#33691E"
          },
          {
          "letter": "J",
          "word": "Jerdon Nightjar",
          "emoji": "🐦",
          "bgColor": "#5D4037"
          },
          {
          "letter": "U",
          "word": "Ural Owl",
          "emoji": "🦉",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "Y",
          "word": "Yellow-throated Marten Bird",
          "emoji": "🐦",
          "bgColor": "#F57F17"
          },
          {
          "letter": "Z",
          "word": "Zosterops",
          "emoji": "🐦",
          "bgColor": "#689F38"
          },
          {
          "letter": "Q",
          "word": "Quaker Parakeet",
          "emoji": "🦜",
          "bgColor": "#43A047"
          },
          {
          "letter": "X",
          "word": "Xiphorhynchus",
          "emoji": "🐦",
          "bgColor": "#A1887F"
          },
          {
          "letter": "W",
          "word": "White-cheeked Barbet",
          "emoji": "🐦",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "S",
          "word": "Slaty-headed Parakeet",
          "emoji": "🦜",
          "bgColor": "#546E7A"
          },
          {
          "letter": "B",
          "word": "Brown Wood Owl",
          "emoji": "🦉",
          "bgColor": "#4E342E"
          },
          {
          "letter": "P",
          "word": "Pied Cuckoo",
          "emoji": "🐦",
          "bgColor": "#212121"
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
