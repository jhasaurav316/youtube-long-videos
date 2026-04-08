import "./index.css";
import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";
import React from "react";

export const VegetableRemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="VegetablesGreenVeggies1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Green Vegetables - Part 1",
          videoId: "vegetables-green-veggies-1",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [
          {
          "letter": "O",
          "word": "Okra",
          "emoji": "🥒",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "B",
          "word": "Bottle Gourd",
          "emoji": "🥒",
          "bgColor": "#66BB6A"
          },
          {
          "letter": "B",
          "word": "Bitter Gourd",
          "emoji": "🥒",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "C",
          "word": "Cucumber",
          "emoji": "🥒",
          "bgColor": "#388E3C"
          },
          {
          "letter": "Z",
          "word": "Zucchini",
          "emoji": "🥒",
          "bgColor": "#43A047"
          },
          {
          "letter": "G",
          "word": "Green Beans",
          "emoji": "🫛",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "S",
          "word": "Snake Gourd",
          "emoji": "🥒",
          "bgColor": "#33691E"
          },
          {
          "letter": "R",
          "word": "Ridge Gourd",
          "emoji": "🥒",
          "bgColor": "#558B2F"
          },
          {
          "letter": "P",
          "word": "Pointed Gourd",
          "emoji": "🥒",
          "bgColor": "#689F38"
          },
          {
          "letter": "B",
          "word": "Broccoli",
          "emoji": "🥦",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "C",
          "word": "Capsicum",
          "emoji": "🫑",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "P",
          "word": "Peas",
          "emoji": "🫛",
          "bgColor": "#388E3C"
          },
          {
          "letter": "A",
          "word": "Ash Gourd",
          "emoji": "🥒",
          "bgColor": "#66BB6A"
          },
          {
          "letter": "C",
          "word": "Cluster Beans",
          "emoji": "🫛",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "D",
          "word": "Drumstick",
          "emoji": "🥬",
          "bgColor": "#33691E"
          },
          {
          "letter": "I",
          "word": "Ivy Gourd",
          "emoji": "🥒",
          "bgColor": "#558B2F"
          },
          {
          "letter": "S",
          "word": "Sponge Gourd",
          "emoji": "🥒",
          "bgColor": "#43A047"
          },
          {
          "letter": "C",
          "word": "Chayote",
          "emoji": "🥒",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "G",
          "word": "Green Chili",
          "emoji": "🌶️",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "L",
          "word": "Long Beans",
          "emoji": "🫛",
          "bgColor": "#388E3C"
          },
          {
          "letter": "F",
          "word": "French Beans",
          "emoji": "🫛",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "A",
          "word": "Amaranth Leaves",
          "emoji": "🥬",
          "bgColor": "#689F38"
          },
          {
          "letter": "T",
          "word": "Tinda",
          "emoji": "🥒",
          "bgColor": "#66BB6A"
          },
          {
          "letter": "S",
          "word": "Spinach",
          "emoji": "🥬",
          "bgColor": "#33691E"
          },
          {
          "letter": "C",
          "word": "Cabbage",
          "emoji": "🥬",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "L",
          "word": "Lettuce",
          "emoji": "🥬",
          "bgColor": "#558B2F"
          },
          {
          "letter": "C",
          "word": "Celery",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "K",
          "word": "Kale",
          "emoji": "🥬",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "B",
          "word": "Brussels Sprouts",
          "emoji": "🥬",
          "bgColor": "#388E3C"
          },
          {
          "letter": "A",
          "word": "Asparagus",
          "emoji": "🥬",
          "bgColor": "#1B5E20"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="VegetablesGreenVeggies2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Green Vegetables - Part 2",
          videoId: "vegetables-green-veggies-2",
          bgGradient: ["#388E3C","#C8E6C9"] as [string, string],
          accentColor: "#2E7D32",
          letters: [
          {
          "letter": "E",
          "word": "Edamame",
          "emoji": "🫛",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "W",
          "word": "Watercress",
          "emoji": "🥬",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "M",
          "word": "Mint",
          "emoji": "🥬",
          "bgColor": "#388E3C"
          },
          {
          "letter": "C",
          "word": "Coriander",
          "emoji": "🥬",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "S",
          "word": "Spring Onion",
          "emoji": "🧅",
          "bgColor": "#43A047"
          },
          {
          "letter": "L",
          "word": "Leek",
          "emoji": "🥬",
          "bgColor": "#558B2F"
          },
          {
          "letter": "D",
          "word": "Dill",
          "emoji": "🥬",
          "bgColor": "#33691E"
          },
          {
          "letter": "P",
          "word": "Parsley",
          "emoji": "🥬",
          "bgColor": "#689F38"
          },
          {
          "letter": "B",
          "word": "Basil",
          "emoji": "🥬",
          "bgColor": "#66BB6A"
          },
          {
          "letter": "A",
          "word": "Artichoke",
          "emoji": "🥬",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "G",
          "word": "Green Pepper",
          "emoji": "🫑",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "S",
          "word": "Sugar Snap Peas",
          "emoji": "🫛",
          "bgColor": "#388E3C"
          },
          {
          "letter": "C",
          "word": "Curry Leaves",
          "emoji": "🥬",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "F",
          "word": "Fenugreek Leaves",
          "emoji": "🥬",
          "bgColor": "#33691E"
          },
          {
          "letter": "B",
          "word": "Banana Pepper",
          "emoji": "🌶️",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Okra Pods",
          "emoji": "🥒",
          "bgColor": "#43A047"
          },
          {
          "letter": "N",
          "word": "Neem Leaves",
          "emoji": "🥬",
          "bgColor": "#689F38"
          },
          {
          "letter": "R",
          "word": "Rosemary",
          "emoji": "🥬",
          "bgColor": "#66BB6A"
          },
          {
          "letter": "T",
          "word": "Thyme",
          "emoji": "🥬",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "S",
          "word": "Sage",
          "emoji": "🥬",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "K",
          "word": "Kohlrabi",
          "emoji": "🥬",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "C",
          "word": "Chard",
          "emoji": "🥬",
          "bgColor": "#388E3C"
          },
          {
          "letter": "E",
          "word": "Endive",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "A",
          "word": "Arugula",
          "emoji": "🥬",
          "bgColor": "#558B2F"
          },
          {
          "letter": "W",
          "word": "Wasabi",
          "emoji": "🥬",
          "bgColor": "#33691E"
          },
          {
          "letter": "B",
          "word": "Bok Choy",
          "emoji": "🥬",
          "bgColor": "#689F38"
          },
          {
          "letter": "R",
          "word": "Radicchio",
          "emoji": "🥬",
          "bgColor": "#66BB6A"
          },
          {
          "letter": "M",
          "word": "Moringa Leaves",
          "emoji": "🥬",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "P",
          "word": "Pointed Gourd",
          "emoji": "🥒",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "H",
          "word": "Hyacinth Beans",
          "emoji": "🫛",
          "bgColor": "#1B5E20"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="VegetablesGreenVeggies3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Green Vegetables - Part 3",
          videoId: "vegetables-green-veggies-3",
          bgGradient: ["#43A047","#E8F5E9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [
          {
          "letter": "C",
          "word": "Colocasia Leaves",
          "emoji": "🥬",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "G",
          "word": "Green Papaya",
          "emoji": "🥒",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "S",
          "word": "Sorrel Leaves",
          "emoji": "🥬",
          "bgColor": "#388E3C"
          },
          {
          "letter": "B",
          "word": "Betel Leaves",
          "emoji": "🥬",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "P",
          "word": "Plantain",
          "emoji": "🥒",
          "bgColor": "#43A047"
          },
          {
          "letter": "C",
          "word": "Chenopodium",
          "emoji": "🥬",
          "bgColor": "#558B2F"
          },
          {
          "letter": "T",
          "word": "Taro Leaves",
          "emoji": "🥬",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Suran",
          "emoji": "🥔",
          "bgColor": "#689F38"
          },
          {
          "letter": "W",
          "word": "Water Spinach",
          "emoji": "🥬",
          "bgColor": "#66BB6A"
          },
          {
          "letter": "L",
          "word": "Lotus Stem",
          "emoji": "🥬",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "A",
          "word": "Apple Gourd",
          "emoji": "🥒",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "G",
          "word": "Green Banana",
          "emoji": "🥒",
          "bgColor": "#388E3C"
          },
          {
          "letter": "K",
          "word": "Kantola",
          "emoji": "🥒",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "C",
          "word": "Chow Chow",
          "emoji": "🥒",
          "bgColor": "#43A047"
          },
          {
          "letter": "D",
          "word": "Double Beans",
          "emoji": "🫛",
          "bgColor": "#558B2F"
          },
          {
          "letter": "P",
          "word": "Pumpkin Leaves",
          "emoji": "🥬",
          "bgColor": "#33691E"
          },
          {
          "letter": "M",
          "word": "Mustard Greens",
          "emoji": "🥬",
          "bgColor": "#689F38"
          },
          {
          "letter": "R",
          "word": "Raw Banana",
          "emoji": "🥒",
          "bgColor": "#66BB6A"
          },
          {
          "letter": "T",
          "word": "Turmeric Leaves",
          "emoji": "🥬",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "F",
          "word": "Field Beans",
          "emoji": "🫛",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "I",
          "word": "Indian Squash",
          "emoji": "🥒",
          "bgColor": "#388E3C"
          },
          {
          "letter": "J",
          "word": "Jackfruit Raw",
          "emoji": "🥒",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "N",
          "word": "Nightshade",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "U",
          "word": "Ulluco",
          "emoji": "🥔",
          "bgColor": "#558B2F"
          },
          {
          "letter": "B",
          "word": "Banana Stem",
          "emoji": "🥬",
          "bgColor": "#33691E"
          },
          {
          "letter": "O",
          "word": "Oregano",
          "emoji": "🥬",
          "bgColor": "#689F38"
          },
          {
          "letter": "V",
          "word": "Velvet Beans",
          "emoji": "🫛",
          "bgColor": "#66BB6A"
          },
          {
          "letter": "H",
          "word": "Horse Gram Sprouts",
          "emoji": "🫛",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "E",
          "word": "Elephant Yam",
          "emoji": "🥔",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "Y",
          "word": "Yam Leaves",
          "emoji": "🥬",
          "bgColor": "#1B5E20"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="VegetablesRootVeggies1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Root Vegetables - Part 1",
          videoId: "vegetables-root-veggies-1",
          bgGradient: ["#795548","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [
          {
          "letter": "P",
          "word": "Potato",
          "emoji": "🥔",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "C",
          "word": "Carrot",
          "emoji": "🥕",
          "bgColor": "#FF5722"
          },
          {
          "letter": "O",
          "word": "Onion",
          "emoji": "🧅",
          "bgColor": "#795548"
          },
          {
          "letter": "G",
          "word": "Garlic",
          "emoji": "🧄",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "G",
          "word": "Ginger",
          "emoji": "🥔",
          "bgColor": "#F4511E"
          },
          {
          "letter": "R",
          "word": "Radish",
          "emoji": "🥕",
          "bgColor": "#E91E63"
          },
          {
          "letter": "T",
          "word": "Turnip",
          "emoji": "🥔",
          "bgColor": "#9C27B0"
          },
          {
          "letter": "B",
          "word": "Beetroot",
          "emoji": "🥕",
          "bgColor": "#C62828"
          },
          {
          "letter": "S",
          "word": "Sweet Potato",
          "emoji": "🥔",
          "bgColor": "#E65100"
          },
          {
          "letter": "C",
          "word": "Colocasia",
          "emoji": "🥔",
          "bgColor": "#4E342E"
          },
          {
          "letter": "Y",
          "word": "Yam",
          "emoji": "🥔",
          "bgColor": "#5D4037"
          },
          {
          "letter": "T",
          "word": "Turmeric",
          "emoji": "🥔",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "W",
          "word": "Water Chestnut",
          "emoji": "🌰",
          "bgColor": "#3E2723"
          },
          {
          "letter": "L",
          "word": "Lotus Root",
          "emoji": "🥔",
          "bgColor": "#795548"
          },
          {
          "letter": "P",
          "word": "Parsnip",
          "emoji": "🥕",
          "bgColor": "#A1887F"
          },
          {
          "letter": "S",
          "word": "Shallot",
          "emoji": "🧅",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "H",
          "word": "Horseradish",
          "emoji": "🥔",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "J",
          "word": "Jerusalem Artichoke",
          "emoji": "🥔",
          "bgColor": "#5D4037"
          },
          {
          "letter": "C",
          "word": "Celeriac",
          "emoji": "🥔",
          "bgColor": "#4E342E"
          },
          {
          "letter": "R",
          "word": "Rutabaga",
          "emoji": "🥔",
          "bgColor": "#3E2723"
          },
          {
          "letter": "T",
          "word": "Tapioca",
          "emoji": "🥔",
          "bgColor": "#795548"
          },
          {
          "letter": "E",
          "word": "Elephant Foot Yam",
          "emoji": "🥔",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "A",
          "word": "Arrowroot",
          "emoji": "🥔",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "K",
          "word": "Kohlrabi Root",
          "emoji": "🥔",
          "bgColor": "#5D4037"
          },
          {
          "letter": "D",
          "word": "Daikon Radish",
          "emoji": "🥕",
          "bgColor": "#4E342E"
          },
          {
          "letter": "F",
          "word": "Fennel Bulb",
          "emoji": "🥬",
          "bgColor": "#3E2723"
          },
          {
          "letter": "G",
          "word": "Galangal",
          "emoji": "🥔",
          "bgColor": "#795548"
          },
          {
          "letter": "M",
          "word": "Maca Root",
          "emoji": "🥔",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "N",
          "word": "Nutgrass",
          "emoji": "🥔",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "I",
          "word": "Indian Turnip",
          "emoji": "🥔",
          "bgColor": "#5D4037"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="VegetablesRootVeggies2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Root Vegetables - Part 2",
          videoId: "vegetables-root-veggies-2",
          bgGradient: ["#6D4C41","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [
          {
          "letter": "R",
          "word": "Red Onion",
          "emoji": "🧅",
          "bgColor": "#C62828"
          },
          {
          "letter": "P",
          "word": "Purple Yam",
          "emoji": "🥔",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "W",
          "word": "White Radish",
          "emoji": "🥕",
          "bgColor": "#BDBDBD"
          },
          {
          "letter": "G",
          "word": "Greater Yam",
          "emoji": "🥔",
          "bgColor": "#5D4037"
          },
          {
          "letter": "C",
          "word": "Chinese Potato",
          "emoji": "🥔",
          "bgColor": "#795548"
          },
          {
          "letter": "S",
          "word": "Single Garlic",
          "emoji": "🧄",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Baby Potato",
          "emoji": "🥔",
          "bgColor": "#A1887F"
          },
          {
          "letter": "T",
          "word": "Tiger Nut",
          "emoji": "🌰",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "K",
          "word": "Knol Khol",
          "emoji": "🥔",
          "bgColor": "#4E342E"
          },
          {
          "letter": "L",
          "word": "Lesser Yam",
          "emoji": "🥔",
          "bgColor": "#3E2723"
          },
          {
          "letter": "H",
          "word": "Haldi Root",
          "emoji": "🥔",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "A",
          "word": "Adrak",
          "emoji": "🥔",
          "bgColor": "#F4511E"
          },
          {
          "letter": "S",
          "word": "Suran Root",
          "emoji": "🥔",
          "bgColor": "#795548"
          },
          {
          "letter": "J",
          "word": "Jicama",
          "emoji": "🥔",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "O",
          "word": "Oca",
          "emoji": "🥔",
          "bgColor": "#E65100"
          },
          {
          "letter": "M",
          "word": "Mooli",
          "emoji": "🥕",
          "bgColor": "#43A047"
          },
          {
          "letter": "C",
          "word": "Cassava",
          "emoji": "🥔",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "F",
          "word": "Finger Root",
          "emoji": "🥔",
          "bgColor": "#5D4037"
          },
          {
          "letter": "D",
          "word": "Dioscorea",
          "emoji": "🥔",
          "bgColor": "#4E342E"
          },
          {
          "letter": "N",
          "word": "Naga Garlic",
          "emoji": "🧄",
          "bgColor": "#3E2723"
          },
          {
          "letter": "V",
          "word": "Vidalia Onion",
          "emoji": "🧅",
          "bgColor": "#795548"
          },
          {
          "letter": "E",
          "word": "Eddo",
          "emoji": "🥔",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "U",
          "word": "Ube",
          "emoji": "🥔",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "Y",
          "word": "Yellow Carrot",
          "emoji": "🥕",
          "bgColor": "#FFA000"
          },
          {
          "letter": "Z",
          "word": "Zimbu Root",
          "emoji": "🥔",
          "bgColor": "#4E342E"
          },
          {
          "letter": "I",
          "word": "Indian Potato",
          "emoji": "🥔",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "Q",
          "word": "Quinoa Root",
          "emoji": "🥔",
          "bgColor": "#5D4037"
          },
          {
          "letter": "X",
          "word": "Xerophyte Tuber",
          "emoji": "🥔",
          "bgColor": "#3E2723"
          },
          {
          "letter": "B",
          "word": "Black Carrot",
          "emoji": "🥕",
          "bgColor": "#212121"
          },
          {
          "letter": "R",
          "word": "Red Carrot",
          "emoji": "🥕",
          "bgColor": "#D32F2F"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="VegetablesRootVeggies3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Root Vegetables - Part 3",
          videoId: "vegetables-root-veggies-3",
          bgGradient: ["#8D6E63","#EFEBE9"] as [string, string],
          accentColor: "#4E342E",
          letters: [
          {
          "letter": "G",
          "word": "Ginger Root",
          "emoji": "🥔",
          "bgColor": "#F4511E"
          },
          {
          "letter": "T",
          "word": "Taro Root",
          "emoji": "🥔",
          "bgColor": "#795548"
          },
          {
          "letter": "P",
          "word": "Pearl Onion",
          "emoji": "🧅",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "S",
          "word": "Spring Garlic",
          "emoji": "🧄",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "B",
          "word": "Beet Greens Root",
          "emoji": "🥕",
          "bgColor": "#C62828"
          },
          {
          "letter": "L",
          "word": "Long Radish",
          "emoji": "🥕",
          "bgColor": "#5D4037"
          },
          {
          "letter": "C",
          "word": "Carrot Red",
          "emoji": "🥕",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "W",
          "word": "Wild Yam",
          "emoji": "🥔",
          "bgColor": "#4E342E"
          },
          {
          "letter": "A",
          "word": "Air Potato",
          "emoji": "🥔",
          "bgColor": "#3E2723"
          },
          {
          "letter": "R",
          "word": "Red Potato",
          "emoji": "🥔",
          "bgColor": "#B71C1C"
          },
          {
          "letter": "M",
          "word": "Mashua",
          "emoji": "🥔",
          "bgColor": "#795548"
          },
          {
          "letter": "D",
          "word": "Dasheen",
          "emoji": "🥔",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "K",
          "word": "Kachalu",
          "emoji": "🥔",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "O",
          "word": "Opo Squash Root",
          "emoji": "🥔",
          "bgColor": "#5D4037"
          },
          {
          "letter": "H",
          "word": "Horse Radish",
          "emoji": "🥔",
          "bgColor": "#4E342E"
          },
          {
          "letter": "N",
          "word": "New Potato",
          "emoji": "🥔",
          "bgColor": "#A1887F"
          },
          {
          "letter": "F",
          "word": "Fingerling Potato",
          "emoji": "🥔",
          "bgColor": "#3E2723"
          },
          {
          "letter": "E",
          "word": "Earth Chestnut",
          "emoji": "🌰",
          "bgColor": "#795548"
          },
          {
          "letter": "J",
          "word": "Japanese Yam",
          "emoji": "🥔",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "V",
          "word": "Violet Potato",
          "emoji": "🥔",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "U",
          "word": "Undhiyu Root",
          "emoji": "🥔",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "I",
          "word": "Icicle Radish",
          "emoji": "🥕",
          "bgColor": "#5D4037"
          },
          {
          "letter": "Z",
          "word": "Zedoary Root",
          "emoji": "🥔",
          "bgColor": "#4E342E"
          },
          {
          "letter": "Y",
          "word": "Yuca",
          "emoji": "🥔",
          "bgColor": "#3E2723"
          },
          {
          "letter": "Q",
          "word": "Queensland Arrowroot",
          "emoji": "🥔",
          "bgColor": "#795548"
          },
          {
          "letter": "X",
          "word": "Xanthosoma",
          "emoji": "🥔",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "S",
          "word": "Salsify",
          "emoji": "🥔",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "T",
          "word": "Topinambur",
          "emoji": "🥔",
          "bgColor": "#5D4037"
          },
          {
          "letter": "G",
          "word": "Groundnut",
          "emoji": "🥜",
          "bgColor": "#4E342E"
          },
          {
          "letter": "B",
          "word": "Baby Carrot",
          "emoji": "🥕",
          "bgColor": "#FF5722"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="VegetablesLeafyGreens1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Leafy Greens - Part 1",
          videoId: "vegetables-leafy-greens-1",
          bgGradient: ["#558B2F","#DCEDC8"] as [string, string],
          accentColor: "#33691E",
          letters: [
          {
          "letter": "S",
          "word": "Spinach",
          "emoji": "🥬",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "F",
          "word": "Fenugreek",
          "emoji": "🥬",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "M",
          "word": "Mustard Greens",
          "emoji": "🥬",
          "bgColor": "#388E3C"
          },
          {
          "letter": "C",
          "word": "Coriander",
          "emoji": "🥬",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "M",
          "word": "Mint",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "C",
          "word": "Curry Leaves",
          "emoji": "🥬",
          "bgColor": "#558B2F"
          },
          {
          "letter": "A",
          "word": "Amaranth",
          "emoji": "🥬",
          "bgColor": "#33691E"
          },
          {
          "letter": "D",
          "word": "Dill Leaves",
          "emoji": "🥬",
          "bgColor": "#689F38"
          },
          {
          "letter": "B",
          "word": "Bathua",
          "emoji": "🥬",
          "bgColor": "#66BB6A"
          },
          {
          "letter": "S",
          "word": "Sorrel",
          "emoji": "🥬",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "K",
          "word": "Kale",
          "emoji": "🥬",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "L",
          "word": "Lettuce",
          "emoji": "🥬",
          "bgColor": "#388E3C"
          },
          {
          "letter": "W",
          "word": "Watercress",
          "emoji": "🥬",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "C",
          "word": "Cabbage",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "B",
          "word": "Bok Choy",
          "emoji": "🥬",
          "bgColor": "#558B2F"
          },
          {
          "letter": "P",
          "word": "Purslane",
          "emoji": "🥬",
          "bgColor": "#33691E"
          },
          {
          "letter": "C",
          "word": "Collard Greens",
          "emoji": "🥬",
          "bgColor": "#689F38"
          },
          {
          "letter": "R",
          "word": "Rocket Leaves",
          "emoji": "🥬",
          "bgColor": "#66BB6A"
          },
          {
          "letter": "M",
          "word": "Moringa",
          "emoji": "🥬",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "T",
          "word": "Turnip Greens",
          "emoji": "🥬",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "C",
          "word": "Chard",
          "emoji": "🥬",
          "bgColor": "#388E3C"
          },
          {
          "letter": "E",
          "word": "Endive",
          "emoji": "🥬",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "P",
          "word": "Parsley",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "B",
          "word": "Basil",
          "emoji": "🥬",
          "bgColor": "#558B2F"
          },
          {
          "letter": "A",
          "word": "Arugula",
          "emoji": "🥬",
          "bgColor": "#33691E"
          },
          {
          "letter": "N",
          "word": "Nettle Leaves",
          "emoji": "🥬",
          "bgColor": "#689F38"
          },
          {
          "letter": "I",
          "word": "Indian Spinach",
          "emoji": "🥬",
          "bgColor": "#66BB6A"
          },
          {
          "letter": "G",
          "word": "Green Onion Tops",
          "emoji": "🥬",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "O",
          "word": "Oregano Leaves",
          "emoji": "🥬",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "H",
          "word": "Holy Basil",
          "emoji": "🥬",
          "bgColor": "#1B5E20"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="VegetablesLeafyGreens2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Leafy Greens - Part 2",
          videoId: "vegetables-leafy-greens-2",
          bgGradient: ["#689F38","#F1F8E9"] as [string, string],
          accentColor: "#558B2F",
          letters: [
          {
          "letter": "C",
          "word": "Colocasia Leaves",
          "emoji": "🥬",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "B",
          "word": "Betel Leaves",
          "emoji": "🥬",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "T",
          "word": "Taro Leaves",
          "emoji": "🥬",
          "bgColor": "#388E3C"
          },
          {
          "letter": "W",
          "word": "Water Spinach",
          "emoji": "🥬",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "S",
          "word": "Saag",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "P",
          "word": "Poi Saag",
          "emoji": "🥬",
          "bgColor": "#558B2F"
          },
          {
          "letter": "L",
          "word": "Lemon Balm",
          "emoji": "🥬",
          "bgColor": "#33691E"
          },
          {
          "letter": "R",
          "word": "Radish Greens",
          "emoji": "🥬",
          "bgColor": "#689F38"
          },
          {
          "letter": "D",
          "word": "Dandelion Greens",
          "emoji": "🥬",
          "bgColor": "#66BB6A"
          },
          {
          "letter": "C",
          "word": "Chive Leaves",
          "emoji": "🥬",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "M",
          "word": "Malabar Spinach",
          "emoji": "🥬",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "G",
          "word": "Gongura",
          "emoji": "🥬",
          "bgColor": "#388E3C"
          },
          {
          "letter": "A",
          "word": "Agathi Leaves",
          "emoji": "🥬",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "K",
          "word": "Kulfa",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "H",
          "word": "Haldi Leaves",
          "emoji": "🥬",
          "bgColor": "#558B2F"
          },
          {
          "letter": "N",
          "word": "Neem Leaves",
          "emoji": "🥬",
          "bgColor": "#33691E"
          },
          {
          "letter": "F",
          "word": "Fennel Fronds",
          "emoji": "🥬",
          "bgColor": "#689F38"
          },
          {
          "letter": "O",
          "word": "Onion Greens",
          "emoji": "🥬",
          "bgColor": "#66BB6A"
          },
          {
          "letter": "E",
          "word": "Escarole",
          "emoji": "🥬",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "J",
          "word": "Jute Leaves",
          "emoji": "🥬",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "V",
          "word": "Violet Greens",
          "emoji": "🥬",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "I",
          "word": "Ice Plant Leaves",
          "emoji": "🥬",
          "bgColor": "#388E3C"
          },
          {
          "letter": "U",
          "word": "Upland Cress",
          "emoji": "🥬",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "Y",
          "word": "Yarrow Leaves",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "Z",
          "word": "Zucchini Leaves",
          "emoji": "🥬",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Q",
          "word": "Quinoa Leaves",
          "emoji": "🥬",
          "bgColor": "#33691E"
          },
          {
          "letter": "X",
          "word": "Xerophyte Leaves",
          "emoji": "🥬",
          "bgColor": "#689F38"
          },
          {
          "letter": "B",
          "word": "Beet Greens",
          "emoji": "🥬",
          "bgColor": "#C62828"
          },
          {
          "letter": "S",
          "word": "Swiss Chard",
          "emoji": "🥬",
          "bgColor": "#66BB6A"
          },
          {
          "letter": "P",
          "word": "Pumpkin Leaves",
          "emoji": "🥬",
          "bgColor": "#4CAF50"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="VegetablesLeafyGreens3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Leafy Greens - Part 3",
          videoId: "vegetables-leafy-greens-3",
          bgGradient: ["#7CB342","#F1F8E9"] as [string, string],
          accentColor: "#558B2F",
          letters: [
          {
          "letter": "S",
          "word": "Spring Greens",
          "emoji": "🥬",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "C",
          "word": "Chaulai",
          "emoji": "🥬",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "P",
          "word": "Palak",
          "emoji": "🥬",
          "bgColor": "#388E3C"
          },
          {
          "letter": "M",
          "word": "Methi Leaves",
          "emoji": "🥬",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "B",
          "word": "Brahmi Leaves",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "L",
          "word": "Lal Saag",
          "emoji": "🥬",
          "bgColor": "#C62828"
          },
          {
          "letter": "G",
          "word": "Guduchi Leaves",
          "emoji": "🥬",
          "bgColor": "#558B2F"
          },
          {
          "letter": "T",
          "word": "Tamarind Leaves",
          "emoji": "🥬",
          "bgColor": "#33691E"
          },
          {
          "letter": "D",
          "word": "Drumstick Leaves",
          "emoji": "🥬",
          "bgColor": "#689F38"
          },
          {
          "letter": "A",
          "word": "Ashwagandha Leaves",
          "emoji": "🥬",
          "bgColor": "#66BB6A"
          },
          {
          "letter": "K",
          "word": "Kadi Patta",
          "emoji": "🥬",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "R",
          "word": "Red Amaranth",
          "emoji": "🥬",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "W",
          "word": "Wild Lettuce",
          "emoji": "🥬",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "H",
          "word": "Hibiscus Leaves",
          "emoji": "🥬",
          "bgColor": "#E91E63"
          },
          {
          "letter": "N",
          "word": "Noni Leaves",
          "emoji": "🥬",
          "bgColor": "#388E3C"
          },
          {
          "letter": "F",
          "word": "Fig Leaves",
          "emoji": "🥬",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "O",
          "word": "Okra Leaves",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "E",
          "word": "Edible Fern",
          "emoji": "🥬",
          "bgColor": "#558B2F"
          },
          {
          "letter": "J",
          "word": "Jackfruit Leaves",
          "emoji": "🥬",
          "bgColor": "#33691E"
          },
          {
          "letter": "V",
          "word": "Vine Spinach",
          "emoji": "🥬",
          "bgColor": "#689F38"
          },
          {
          "letter": "I",
          "word": "Indian Lettuce",
          "emoji": "🥬",
          "bgColor": "#66BB6A"
          },
          {
          "letter": "U",
          "word": "Upland Spinach",
          "emoji": "🥬",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "Y",
          "word": "Young Bamboo Leaves",
          "emoji": "🥬",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "Z",
          "word": "Zanthoxylum Leaves",
          "emoji": "🥬",
          "bgColor": "#388E3C"
          },
          {
          "letter": "Q",
          "word": "Quelites",
          "emoji": "🥬",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "X",
          "word": "Xanthium Leaves",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "C",
          "word": "Celery Leaves",
          "emoji": "🥬",
          "bgColor": "#558B2F"
          },
          {
          "letter": "B",
          "word": "Bay Leaves",
          "emoji": "🥬",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Sorrel Leaves",
          "emoji": "🥬",
          "bgColor": "#689F38"
          },
          {
          "letter": "T",
          "word": "Tulsi",
          "emoji": "🥬",
          "bgColor": "#4CAF50"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="VegetablesColorfulVeggies1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colorful Veggies - Part 1",
          videoId: "vegetables-colorful-veggies-1",
          bgGradient: ["#E65100","#FFCC80"] as [string, string],
          accentColor: "#BF360C",
          letters: [
          {
          "letter": "E",
          "word": "Eggplant",
          "emoji": "🍆",
          "bgColor": "#7B1FA2"
          },
          {
          "letter": "T",
          "word": "Tomato",
          "emoji": "🍅",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "R",
          "word": "Red Capsicum",
          "emoji": "🫑",
          "bgColor": "#C62828"
          },
          {
          "letter": "Y",
          "word": "Yellow Capsicum",
          "emoji": "🫑",
          "bgColor": "#FFA000"
          },
          {
          "letter": "C",
          "word": "Corn",
          "emoji": "🌽",
          "bgColor": "#F9A825"
          },
          {
          "letter": "P",
          "word": "Pumpkin",
          "emoji": "🥕",
          "bgColor": "#E65100"
          },
          {
          "letter": "R",
          "word": "Red Chili",
          "emoji": "🌶️",
          "bgColor": "#B71C1C"
          },
          {
          "letter": "B",
          "word": "Bell Pepper",
          "emoji": "🫑",
          "bgColor": "#FF5722"
          },
          {
          "letter": "C",
          "word": "Cauliflower",
          "emoji": "🥦",
          "bgColor": "#FFF9C4"
          },
          {
          "letter": "S",
          "word": "Sweet Corn",
          "emoji": "🌽",
          "bgColor": "#FFD600"
          },
          {
          "letter": "B",
          "word": "Butternut Squash",
          "emoji": "🥕",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "R",
          "word": "Red Cabbage",
          "emoji": "🥬",
          "bgColor": "#880E4F"
          },
          {
          "letter": "O",
          "word": "Orange Carrot",
          "emoji": "🥕",
          "bgColor": "#E65100"
          },
          {
          "letter": "P",
          "word": "Purple Brinjal",
          "emoji": "🍆",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "G",
          "word": "Golden Zucchini",
          "emoji": "🥒",
          "bgColor": "#F57F17"
          },
          {
          "letter": "W",
          "word": "White Pumpkin",
          "emoji": "🥕",
          "bgColor": "#BDBDBD"
          },
          {
          "letter": "R",
          "word": "Red Radish",
          "emoji": "🥕",
          "bgColor": "#E91E63"
          },
          {
          "letter": "Y",
          "word": "Yellow Tomato",
          "emoji": "🍅",
          "bgColor": "#FFD600"
          },
          {
          "letter": "P",
          "word": "Purple Carrot",
          "emoji": "🥕",
          "bgColor": "#9C27B0"
          },
          {
          "letter": "A",
          "word": "Acorn Squash",
          "emoji": "🥕",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Spaghetti Squash",
          "emoji": "🥕",
          "bgColor": "#F9A825"
          },
          {
          "letter": "H",
          "word": "Hubbard Squash",
          "emoji": "🥕",
          "bgColor": "#558B2F"
          },
          {
          "letter": "K",
          "word": "Kabocha",
          "emoji": "🥕",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "C",
          "word": "Cherry Tomato",
          "emoji": "🍅",
          "bgColor": "#FF1744"
          },
          {
          "letter": "D",
          "word": "Delicata Squash",
          "emoji": "🥕",
          "bgColor": "#FFB300"
          },
          {
          "letter": "L",
          "word": "Lal Mirch",
          "emoji": "🌶️",
          "bgColor": "#D50000"
          },
          {
          "letter": "M",
          "word": "Mushroom",
          "emoji": "🍄",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "N",
          "word": "Naga Chili",
          "emoji": "🌶️",
          "bgColor": "#BF360C"
          },
          {
          "letter": "F",
          "word": "French Pumpkin",
          "emoji": "🥕",
          "bgColor": "#E65100"
          },
          {
          "letter": "I",
          "word": "Indian Eggplant",
          "emoji": "🍆",
          "bgColor": "#4A148C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="VegetablesColorfulVeggies2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colorful Veggies - Part 2",
          videoId: "vegetables-colorful-veggies-2",
          bgGradient: ["#EF6C00","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [
          {
          "letter": "R",
          "word": "Red Capsicum",
          "emoji": "🫑",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "P",
          "word": "Purple Cabbage",
          "emoji": "🥬",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "Y",
          "word": "Yellow Pepper",
          "emoji": "🫑",
          "bgColor": "#F9A825"
          },
          {
          "letter": "O",
          "word": "Orange Carrot",
          "emoji": "🥕",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "G",
          "word": "Green Chilli",
          "emoji": "🌶️",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "W",
          "word": "White Radish",
          "emoji": "🥕",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "B",
          "word": "Beetroot",
          "emoji": "🥕",
          "bgColor": "#880E4F"
          },
          {
          "letter": "S",
          "word": "Sweet Potato",
          "emoji": "🥔",
          "bgColor": "#E65100"
          },
          {
          "letter": "C",
          "word": "Corn",
          "emoji": "🌽",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "T",
          "word": "Tomato",
          "emoji": "🍅",
          "bgColor": "#C62828"
          },
          {
          "letter": "L",
          "word": "Lal Mirch",
          "emoji": "🌶️",
          "bgColor": "#B71C1C"
          },
          {
          "letter": "K",
          "word": "Kachri",
          "emoji": "🥒",
          "bgColor": "#827717"
          },
          {
          "letter": "A",
          "word": "Arbi",
          "emoji": "🥔",
          "bgColor": "#795548"
          },
          {
          "letter": "M",
          "word": "Mushroom",
          "emoji": "🍄",
          "bgColor": "#5D4037"
          },
          {
          "letter": "D",
          "word": "Drumstick",
          "emoji": "🌿",
          "bgColor": "#33691E"
          },
          {
          "letter": "P",
          "word": "Pumpkin",
          "emoji": "🎃",
          "bgColor": "#EF6C00"
          },
          {
          "letter": "J",
          "word": "Jimikand",
          "emoji": "🥔",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "H",
          "word": "Haldi",
          "emoji": "🌿",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "F",
          "word": "French Beans",
          "emoji": "🫘",
          "bgColor": "#388E3C"
          },
          {
          "letter": "I",
          "word": "Ivy Gourd",
          "emoji": "🥒",
          "bgColor": "#558B2F"
          },
          {
          "letter": "N",
          "word": "Neem Leaves",
          "emoji": "🌿",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "E",
          "word": "Elephant Yam",
          "emoji": "🥔",
          "bgColor": "#4E342E"
          },
          {
          "letter": "V",
          "word": "Valor Beans",
          "emoji": "🫘",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "U",
          "word": "Urad Dal",
          "emoji": "🫘",
          "bgColor": "#827717"
          },
          {
          "letter": "X",
          "word": "Xacuti Spice",
          "emoji": "🌿",
          "bgColor": "#BF360C"
          },
          {
          "letter": "Z",
          "word": "Zucchini",
          "emoji": "🥒",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Q",
          "word": "Quinoa Greens",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "W",
          "word": "Winged Bean",
          "emoji": "🫘",
          "bgColor": "#33691E"
          },
          {
          "letter": "R",
          "word": "Ridge Gourd",
          "emoji": "🥒",
          "bgColor": "#689F38"
          },
          {
          "letter": "S",
          "word": "Suran",
          "emoji": "🥔",
          "bgColor": "#795548"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="VegetablesColorfulVeggies3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Colorful Veggies - Part 3",
          videoId: "vegetables-colorful-veggies-3",
          bgGradient: ["#F57C00","#FFF3E0"] as [string, string],
          accentColor: "#EF6C00",
          letters: [
          {
          "letter": "C",
          "word": "Cherry Tomato",
          "emoji": "🍅",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Baby Corn",
          "emoji": "🌽",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "P",
          "word": "Parsnip",
          "emoji": "🥕",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "S",
          "word": "Shallot",
          "emoji": "🧅",
          "bgColor": "#795548"
          },
          {
          "letter": "K",
          "word": "Kohlrabi",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "A",
          "word": "Asparagus",
          "emoji": "🌿",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "T",
          "word": "Turnip",
          "emoji": "🥕",
          "bgColor": "#E91E63"
          },
          {
          "letter": "R",
          "word": "Red Onion",
          "emoji": "🧅",
          "bgColor": "#880E4F"
          },
          {
          "letter": "G",
          "word": "Green Onion",
          "emoji": "🧅",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Lotus Stem",
          "emoji": "🌸",
          "bgColor": "#AD1457"
          },
          {
          "letter": "M",
          "word": "Moringa",
          "emoji": "🌿",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "D",
          "word": "Dill",
          "emoji": "🌿",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Okra",
          "emoji": "🌿",
          "bgColor": "#689F38"
          },
          {
          "letter": "W",
          "word": "Water Spinach",
          "emoji": "🥬",
          "bgColor": "#388E3C"
          },
          {
          "letter": "F",
          "word": "Fenugreek",
          "emoji": "🌿",
          "bgColor": "#827717"
          },
          {
          "letter": "H",
          "word": "Horse Radish",
          "emoji": "🥕",
          "bgColor": "#BF360C"
          },
          {
          "letter": "J",
          "word": "Jack Bean",
          "emoji": "🫘",
          "bgColor": "#33691E"
          },
          {
          "letter": "N",
          "word": "Nutmeg Flower",
          "emoji": "🌸",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "E",
          "word": "Endive",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "I",
          "word": "Indian Spinach",
          "emoji": "🥬",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "V",
          "word": "Velvet Okra",
          "emoji": "🌿",
          "bgColor": "#558B2F"
          },
          {
          "letter": "U",
          "word": "Ube",
          "emoji": "🥔",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "X",
          "word": "Xanthosoma",
          "emoji": "🥔",
          "bgColor": "#795548"
          },
          {
          "letter": "Y",
          "word": "Yam Bean",
          "emoji": "🥔",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "Z",
          "word": "Zha Cai",
          "emoji": "🥬",
          "bgColor": "#33691E"
          },
          {
          "letter": "Q",
          "word": "Quelites",
          "emoji": "🥬",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "P",
          "word": "Pointed Gourd",
          "emoji": "🥒",
          "bgColor": "#689F38"
          },
          {
          "letter": "B",
          "word": "Bitter Melon",
          "emoji": "🥒",
          "bgColor": "#558B2F"
          },
          {
          "letter": "C",
          "word": "Cluster Beans",
          "emoji": "🫘",
          "bgColor": "#388E3C"
          },
          {
          "letter": "T",
          "word": "Teasel Gourd",
          "emoji": "🥒",
          "bgColor": "#827717"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="VegetablesGardenVeggies1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Vegetables - Part 1",
          videoId: "vegetables-garden-veggies-1",
          bgGradient: ["#00897B","#B2DFDB"] as [string, string],
          accentColor: "#004D40",
          letters: [
          {
          "letter": "T",
          "word": "Tomato",
          "emoji": "🍅",
          "bgColor": "#C62828"
          },
          {
          "letter": "C",
          "word": "Cucumber",
          "emoji": "🥒",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Onion",
          "emoji": "🧅",
          "bgColor": "#795548"
          },
          {
          "letter": "G",
          "word": "Garlic",
          "emoji": "🧄",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "P",
          "word": "Potato",
          "emoji": "🥔",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Brinjal",
          "emoji": "🍆",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "S",
          "word": "Spinach",
          "emoji": "🥬",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "C",
          "word": "Cauliflower",
          "emoji": "🥦",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "R",
          "word": "Radish",
          "emoji": "🥕",
          "bgColor": "#E91E63"
          },
          {
          "letter": "M",
          "word": "Mint",
          "emoji": "🌿",
          "bgColor": "#00897B"
          },
          {
          "letter": "L",
          "word": "Lemon Grass",
          "emoji": "🌿",
          "bgColor": "#827717"
          },
          {
          "letter": "K",
          "word": "Kale",
          "emoji": "🥬",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "A",
          "word": "Amaranth",
          "emoji": "🥬",
          "bgColor": "#AD1457"
          },
          {
          "letter": "D",
          "word": "Doodhi",
          "emoji": "🥒",
          "bgColor": "#689F38"
          },
          {
          "letter": "F",
          "word": "Fennel",
          "emoji": "🌿",
          "bgColor": "#33691E"
          },
          {
          "letter": "H",
          "word": "Hari Mirch",
          "emoji": "🌶️",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "W",
          "word": "Watercress",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "J",
          "word": "Jackfruit Seed",
          "emoji": "🌰",
          "bgColor": "#795548"
          },
          {
          "letter": "N",
          "word": "New Potato",
          "emoji": "🥔",
          "bgColor": "#FFA000"
          },
          {
          "letter": "E",
          "word": "Edamame",
          "emoji": "🫘",
          "bgColor": "#558B2F"
          },
          {
          "letter": "I",
          "word": "Iceberg Lettuce",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "V",
          "word": "Vidalia Onion",
          "emoji": "🧅",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "U",
          "word": "Ulluco",
          "emoji": "🥔",
          "bgColor": "#E91E63"
          },
          {
          "letter": "X",
          "word": "Xerophyte Cactus",
          "emoji": "🌵",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "Y",
          "word": "Yellow Squash",
          "emoji": "🥒",
          "bgColor": "#F9A825"
          },
          {
          "letter": "Z",
          "word": "Zucchini",
          "emoji": "🥒",
          "bgColor": "#689F38"
          },
          {
          "letter": "Q",
          "word": "Quinoa",
          "emoji": "🌾",
          "bgColor": "#827717"
          },
          {
          "letter": "P",
          "word": "Parwal",
          "emoji": "🥒",
          "bgColor": "#558B2F"
          },
          {
          "letter": "B",
          "word": "Bottle Gourd",
          "emoji": "🥒",
          "bgColor": "#388E3C"
          },
          {
          "letter": "T",
          "word": "Tinda",
          "emoji": "🥒",
          "bgColor": "#43A047"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="VegetablesGardenVeggies2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Vegetables - Part 2",
          videoId: "vegetables-garden-veggies-2",
          bgGradient: ["#00796B","#80CBC4"] as [string, string],
          accentColor: "#00695C",
          letters: [
          {
          "letter": "C",
          "word": "Cabbage",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "P",
          "word": "Peas",
          "emoji": "🫛",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "B",
          "word": "Beans",
          "emoji": "🫘",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Lauki",
          "emoji": "🥒",
          "bgColor": "#689F38"
          },
          {
          "letter": "K",
          "word": "Karela",
          "emoji": "🥒",
          "bgColor": "#558B2F"
          },
          {
          "letter": "T",
          "word": "Tori",
          "emoji": "🥒",
          "bgColor": "#827717"
          },
          {
          "letter": "S",
          "word": "Snake Gourd",
          "emoji": "🥒",
          "bgColor": "#388E3C"
          },
          {
          "letter": "A",
          "word": "Ash Gourd",
          "emoji": "🥒",
          "bgColor": "#7CB342"
          },
          {
          "letter": "G",
          "word": "Ginger",
          "emoji": "🌿",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "M",
          "word": "Methi Leaves",
          "emoji": "🌿",
          "bgColor": "#33691E"
          },
          {
          "letter": "R",
          "word": "Raw Banana",
          "emoji": "🍌",
          "bgColor": "#F9A825"
          },
          {
          "letter": "O",
          "word": "Opo Squash",
          "emoji": "🥒",
          "bgColor": "#558B2F"
          },
          {
          "letter": "D",
          "word": "Dry Chilli",
          "emoji": "🌶️",
          "bgColor": "#B71C1C"
          },
          {
          "letter": "H",
          "word": "Hyacinth Bean",
          "emoji": "🫘",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "F",
          "word": "Flat Bean",
          "emoji": "🫘",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "W",
          "word": "White Gourd",
          "emoji": "🥒",
          "bgColor": "#B0BEC5"
          },
          {
          "letter": "J",
          "word": "Jackfruit Raw",
          "emoji": "🍈",
          "bgColor": "#827717"
          },
          {
          "letter": "N",
          "word": "Nutri Garden",
          "emoji": "🥬",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "E",
          "word": "Eggplant",
          "emoji": "🍆",
          "bgColor": "#4A148C"
          },
          {
          "letter": "I",
          "word": "Indian Squash",
          "emoji": "🥒",
          "bgColor": "#689F38"
          },
          {
          "letter": "V",
          "word": "Vine Spinach",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "U",
          "word": "Upland Cress",
          "emoji": "🥬",
          "bgColor": "#388E3C"
          },
          {
          "letter": "X",
          "word": "Ximenia Leaf",
          "emoji": "🌿",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Y",
          "word": "Yardlong Bean",
          "emoji": "🫘",
          "bgColor": "#33691E"
          },
          {
          "letter": "Z",
          "word": "Zingiber",
          "emoji": "🌿",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "Q",
          "word": "Quick Greens",
          "emoji": "🥬",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "C",
          "word": "Coriander",
          "emoji": "🌿",
          "bgColor": "#00897B"
          },
          {
          "letter": "P",
          "word": "Papdi",
          "emoji": "🫘",
          "bgColor": "#689F38"
          },
          {
          "letter": "B",
          "word": "Bhindi",
          "emoji": "🌿",
          "bgColor": "#558B2F"
          },
          {
          "letter": "S",
          "word": "Sem",
          "emoji": "🫘",
          "bgColor": "#388E3C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="VegetablesGardenVeggies3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Garden Vegetables - Part 3",
          videoId: "vegetables-garden-veggies-3",
          bgGradient: ["#00695C","#4DB6AC"] as [string, string],
          accentColor: "#004D40",
          letters: [
          {
          "letter": "S",
          "word": "Sponge Gourd",
          "emoji": "🥒",
          "bgColor": "#689F38"
          },
          {
          "letter": "R",
          "word": "Raw Papaya",
          "emoji": "🍈",
          "bgColor": "#827717"
          },
          {
          "letter": "A",
          "word": "Apple Gourd",
          "emoji": "🥒",
          "bgColor": "#558B2F"
          },
          {
          "letter": "P",
          "word": "Patta Gobhi",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "K",
          "word": "Kundru",
          "emoji": "🥒",
          "bgColor": "#33691E"
          },
          {
          "letter": "T",
          "word": "Turmeric",
          "emoji": "🌿",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "B",
          "word": "Banana Flower",
          "emoji": "🌸",
          "bgColor": "#E91E63"
          },
          {
          "letter": "C",
          "word": "Curry Leaf",
          "emoji": "🌿",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "G",
          "word": "Guar Bean",
          "emoji": "🫘",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "M",
          "word": "Malabar Spinach",
          "emoji": "🥬",
          "bgColor": "#388E3C"
          },
          {
          "letter": "L",
          "word": "Long Pepper",
          "emoji": "🌶️",
          "bgColor": "#BF360C"
          },
          {
          "letter": "D",
          "word": "Double Bean",
          "emoji": "🫘",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Oyster Mushroom",
          "emoji": "🍄",
          "bgColor": "#795548"
          },
          {
          "letter": "W",
          "word": "Winter Squash",
          "emoji": "🎃",
          "bgColor": "#EF6C00"
          },
          {
          "letter": "F",
          "word": "Field Bean",
          "emoji": "🫘",
          "bgColor": "#33691E"
          },
          {
          "letter": "H",
          "word": "Heart of Palm",
          "emoji": "🌴",
          "bgColor": "#5D4037"
          },
          {
          "letter": "J",
          "word": "Jerusalem Artichoke",
          "emoji": "🥔",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "N",
          "word": "Napa Cabbage",
          "emoji": "🥬",
          "bgColor": "#7CB342"
          },
          {
          "letter": "E",
          "word": "Escarole",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "I",
          "word": "Indian Pumpkin",
          "emoji": "🎃",
          "bgColor": "#E65100"
          },
          {
          "letter": "V",
          "word": "Vegetable Marrow",
          "emoji": "🥒",
          "bgColor": "#689F38"
          },
          {
          "letter": "U",
          "word": "Unripe Mango",
          "emoji": "🥭",
          "bgColor": "#F9A825"
          },
          {
          "letter": "X",
          "word": "Xigua Rind",
          "emoji": "🍉",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "Y",
          "word": "Yellow Lentil",
          "emoji": "🫘",
          "bgColor": "#FFA000"
          },
          {
          "letter": "Z",
          "word": "Zha Cai Pickle",
          "emoji": "🥒",
          "bgColor": "#827717"
          },
          {
          "letter": "Q",
          "word": "Quail Egg Plant",
          "emoji": "🍆",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "P",
          "word": "Padval",
          "emoji": "🥒",
          "bgColor": "#558B2F"
          },
          {
          "letter": "S",
          "word": "Saag",
          "emoji": "🥬",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "T",
          "word": "Tendli",
          "emoji": "🥒",
          "bgColor": "#388E3C"
          },
          {
          "letter": "C",
          "word": "Chow Chow",
          "emoji": "🥒",
          "bgColor": "#43A047"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="VegetablesAsianVeggies1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Asian Vegetables - Part 1",
          videoId: "vegetables-asian-veggies-1",
          bgGradient: ["#C62828","#FFCDD2"] as [string, string],
          accentColor: "#B71C1C",
          letters: [
          {
          "letter": "B",
          "word": "Bok Choy",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "W",
          "word": "Wasabi",
          "emoji": "🌿",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "T",
          "word": "Tofu",
          "emoji": "🥚",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "E",
          "word": "Edamame",
          "emoji": "🫘",
          "bgColor": "#558B2F"
          },
          {
          "letter": "S",
          "word": "Shiitake",
          "emoji": "🍄",
          "bgColor": "#5D4037"
          },
          {
          "letter": "M",
          "word": "Miso Paste",
          "emoji": "🥣",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "D",
          "word": "Daikon",
          "emoji": "🥕",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "G",
          "word": "Galangal",
          "emoji": "🌿",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "L",
          "word": "Lotus Root",
          "emoji": "🌸",
          "bgColor": "#AD1457"
          },
          {
          "letter": "K",
          "word": "Kabocha",
          "emoji": "🎃",
          "bgColor": "#EF6C00"
          },
          {
          "letter": "N",
          "word": "Nori",
          "emoji": "🌿",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "C",
          "word": "Chinese Cabbage",
          "emoji": "🥬",
          "bgColor": "#388E3C"
          },
          {
          "letter": "A",
          "word": "Arame",
          "emoji": "🌿",
          "bgColor": "#33691E"
          },
          {
          "letter": "R",
          "word": "Rice Paddy Herb",
          "emoji": "🌾",
          "bgColor": "#827717"
          },
          {
          "letter": "P",
          "word": "Pak Choi",
          "emoji": "🥬",
          "bgColor": "#7CB342"
          },
          {
          "letter": "H",
          "word": "Holy Basil",
          "emoji": "🌿",
          "bgColor": "#00897B"
          },
          {
          "letter": "O",
          "word": "Oyster Plant",
          "emoji": "🌿",
          "bgColor": "#689F38"
          },
          {
          "letter": "F",
          "word": "Fuzzy Melon",
          "emoji": "🥒",
          "bgColor": "#558B2F"
          },
          {
          "letter": "J",
          "word": "Japanese Eggplant",
          "emoji": "🍆",
          "bgColor": "#4A148C"
          },
          {
          "letter": "I",
          "word": "Indian Mustard",
          "emoji": "🥬",
          "bgColor": "#827717"
          },
          {
          "letter": "V",
          "word": "Vietnamese Mint",
          "emoji": "🌿",
          "bgColor": "#00695C"
          },
          {
          "letter": "U",
          "word": "Udon Noodle Veg",
          "emoji": "🍜",
          "bgColor": "#795548"
          },
          {
          "letter": "X",
          "word": "Xiao Bai Cai",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "Y",
          "word": "Yu Choy",
          "emoji": "🥬",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "Z",
          "word": "Zha Cai",
          "emoji": "🥒",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Q",
          "word": "Qing Cai",
          "emoji": "🥬",
          "bgColor": "#388E3C"
          },
          {
          "letter": "B",
          "word": "Bamboo Shoot",
          "emoji": "🎋",
          "bgColor": "#827717"
          },
          {
          "letter": "T",
          "word": "Taro",
          "emoji": "🥔",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "W",
          "word": "Water Chestnut",
          "emoji": "🌰",
          "bgColor": "#5D4037"
          },
          {
          "letter": "C",
          "word": "Chayote",
          "emoji": "🥒",
          "bgColor": "#689F38"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="VegetablesAsianVeggies2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Asian Vegetables - Part 2",
          videoId: "vegetables-asian-veggies-2",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#C62828",
          letters: [
          {
          "letter": "S",
          "word": "Soy Bean",
          "emoji": "🫘",
          "bgColor": "#827717"
          },
          {
          "letter": "G",
          "word": "Green Papaya",
          "emoji": "🍈",
          "bgColor": "#558B2F"
          },
          {
          "letter": "L",
          "word": "Lemongrass",
          "emoji": "🌿",
          "bgColor": "#827717"
          },
          {
          "letter": "T",
          "word": "Thai Basil",
          "emoji": "🌿",
          "bgColor": "#00897B"
          },
          {
          "letter": "M",
          "word": "Mizuna",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "K",
          "word": "Komatsuna",
          "emoji": "🥬",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "P",
          "word": "Perilla",
          "emoji": "🌿",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "R",
          "word": "Red Shiso",
          "emoji": "🌿",
          "bgColor": "#AD1457"
          },
          {
          "letter": "A",
          "word": "Amaranth Leaves",
          "emoji": "🥬",
          "bgColor": "#E91E63"
          },
          {
          "letter": "D",
          "word": "Drumstick Leaves",
          "emoji": "🌿",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "B",
          "word": "Bitter Gourd",
          "emoji": "🥒",
          "bgColor": "#689F38"
          },
          {
          "letter": "C",
          "word": "Chinese Broccoli",
          "emoji": "🥦",
          "bgColor": "#33691E"
          },
          {
          "letter": "O",
          "word": "Okra Indian",
          "emoji": "🌿",
          "bgColor": "#558B2F"
          },
          {
          "letter": "W",
          "word": "Wing Bean",
          "emoji": "🫘",
          "bgColor": "#388E3C"
          },
          {
          "letter": "F",
          "word": "Fiddlehead Fern",
          "emoji": "🌿",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "H",
          "word": "Horseradish Root",
          "emoji": "🥕",
          "bgColor": "#BF360C"
          },
          {
          "letter": "N",
          "word": "Napa Greens",
          "emoji": "🥬",
          "bgColor": "#7CB342"
          },
          {
          "letter": "J",
          "word": "Jicama",
          "emoji": "🥔",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "E",
          "word": "Enoki Mushroom",
          "emoji": "🍄",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "I",
          "word": "Indian Sorrel",
          "emoji": "🌿",
          "bgColor": "#827717"
          },
          {
          "letter": "V",
          "word": "Velvet Leaf",
          "emoji": "🌿",
          "bgColor": "#43A047"
          },
          {
          "letter": "U",
          "word": "Umami Seaweed",
          "emoji": "🌊",
          "bgColor": "#01579B"
          },
          {
          "letter": "X",
          "word": "Xian Cai",
          "emoji": "🥬",
          "bgColor": "#33691E"
          },
          {
          "letter": "Y",
          "word": "Yam Leaf",
          "emoji": "🌿",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Z",
          "word": "Zen Garden Herb",
          "emoji": "🌿",
          "bgColor": "#00695C"
          },
          {
          "letter": "Q",
          "word": "Quail Grass",
          "emoji": "🌾",
          "bgColor": "#689F38"
          },
          {
          "letter": "P",
          "word": "Purple Yam",
          "emoji": "🥔",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "S",
          "word": "Shimeji",
          "emoji": "🍄",
          "bgColor": "#795548"
          },
          {
          "letter": "T",
          "word": "Thai Eggplant",
          "emoji": "🍆",
          "bgColor": "#4A148C"
          },
          {
          "letter": "G",
          "word": "Gai Lan",
          "emoji": "🥬",
          "bgColor": "#2E7D32"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="VegetablesAsianVeggies3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Asian Vegetables - Part 3",
          videoId: "vegetables-asian-veggies-3",
          bgGradient: ["#E53935","#FFEBEE"] as [string, string],
          accentColor: "#D32F2F",
          letters: [
          {
          "letter": "C",
          "word": "Cassava",
          "emoji": "🥔",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "T",
          "word": "Tatsoi",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "B",
          "word": "Bean Sprouts",
          "emoji": "🌱",
          "bgColor": "#7CB342"
          },
          {
          "letter": "M",
          "word": "Mung Bean",
          "emoji": "🫘",
          "bgColor": "#827717"
          },
          {
          "letter": "S",
          "word": "Spring Onion",
          "emoji": "🧅",
          "bgColor": "#33691E"
          },
          {
          "letter": "A",
          "word": "Arrowroot",
          "emoji": "🥔",
          "bgColor": "#795548"
          },
          {
          "letter": "K",
          "word": "Kangkong",
          "emoji": "🥬",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "G",
          "word": "Garlic Chives",
          "emoji": "🧄",
          "bgColor": "#558B2F"
          },
          {
          "letter": "P",
          "word": "Pandan Leaf",
          "emoji": "🌿",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "L",
          "word": "Long Bean",
          "emoji": "🫘",
          "bgColor": "#388E3C"
          },
          {
          "letter": "R",
          "word": "Rakkyo",
          "emoji": "🧅",
          "bgColor": "#E91E63"
          },
          {
          "letter": "D",
          "word": "Dried Tofu",
          "emoji": "🥚",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "O",
          "word": "Okinawan Potato",
          "emoji": "🥔",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "W",
          "word": "Wax Gourd",
          "emoji": "🥒",
          "bgColor": "#689F38"
          },
          {
          "letter": "F",
          "word": "Fresh Turmeric",
          "emoji": "🌿",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "H",
          "word": "Hairy Gourd",
          "emoji": "🥒",
          "bgColor": "#558B2F"
          },
          {
          "letter": "N",
          "word": "Natto",
          "emoji": "🫘",
          "bgColor": "#5D4037"
          },
          {
          "letter": "J",
          "word": "Jute Leaf",
          "emoji": "🌿",
          "bgColor": "#33691E"
          },
          {
          "letter": "E",
          "word": "Emperor Herb",
          "emoji": "🌿",
          "bgColor": "#00897B"
          },
          {
          "letter": "I",
          "word": "Indian Lettuce",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "V",
          "word": "Veggie Tofu",
          "emoji": "🥚",
          "bgColor": "#FFA000"
          },
          {
          "letter": "U",
          "word": "Udo Plant",
          "emoji": "🌿",
          "bgColor": "#827717"
          },
          {
          "letter": "X",
          "word": "Xing Ren",
          "emoji": "🌰",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "Y",
          "word": "Yam Root",
          "emoji": "🥔",
          "bgColor": "#4E342E"
          },
          {
          "letter": "Z",
          "word": "Zha Cai Root",
          "emoji": "🥕",
          "bgColor": "#BF360C"
          },
          {
          "letter": "Q",
          "word": "Queen Garlic",
          "emoji": "🧄",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "S",
          "word": "Sato Imo",
          "emoji": "🥔",
          "bgColor": "#795548"
          },
          {
          "letter": "B",
          "word": "Bottle Gourd",
          "emoji": "🥒",
          "bgColor": "#689F38"
          },
          {
          "letter": "T",
          "word": "Tepary Bean",
          "emoji": "🫘",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "C",
          "word": "Chinese Yam",
          "emoji": "🥔",
          "bgColor": "#5D4037"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="VegetablesSuperVeggies1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Super Vegetables - Part 1",
          videoId: "vegetables-super-veggies-1",
          bgGradient: ["#1565C0","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [
          {
          "letter": "S",
          "word": "Spinach",
          "emoji": "🥬",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "K",
          "word": "Kale",
          "emoji": "🥬",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "B",
          "word": "Broccoli",
          "emoji": "🥦",
          "bgColor": "#388E3C"
          },
          {
          "letter": "C",
          "word": "Carrot",
          "emoji": "🥕",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "G",
          "word": "Garlic",
          "emoji": "🧄",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "O",
          "word": "Onion",
          "emoji": "🧅",
          "bgColor": "#795548"
          },
          {
          "letter": "T",
          "word": "Tomato",
          "emoji": "🍅",
          "bgColor": "#C62828"
          },
          {
          "letter": "P",
          "word": "Pumpkin",
          "emoji": "🎃",
          "bgColor": "#EF6C00"
          },
          {
          "letter": "A",
          "word": "Avocado",
          "emoji": "🥑",
          "bgColor": "#558B2F"
          },
          {
          "letter": "R",
          "word": "Red Bell Pepper",
          "emoji": "🫑",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Moringa",
          "emoji": "🌿",
          "bgColor": "#33691E"
          },
          {
          "letter": "D",
          "word": "Drumstick",
          "emoji": "🌿",
          "bgColor": "#689F38"
          },
          {
          "letter": "L",
          "word": "Lettuce",
          "emoji": "🥬",
          "bgColor": "#43A047"
          },
          {
          "letter": "W",
          "word": "Watercress",
          "emoji": "🥬",
          "bgColor": "#7CB342"
          },
          {
          "letter": "F",
          "word": "Fenugreek",
          "emoji": "🌿",
          "bgColor": "#827717"
          },
          {
          "letter": "H",
          "word": "Horseradish",
          "emoji": "🥕",
          "bgColor": "#BF360C"
          },
          {
          "letter": "N",
          "word": "Nettle",
          "emoji": "🌿",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "E",
          "word": "Edamame",
          "emoji": "🫘",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "J",
          "word": "Jackfruit",
          "emoji": "🍈",
          "bgColor": "#FFC107"
          },
          {
          "letter": "I",
          "word": "Indian Gourd",
          "emoji": "🥒",
          "bgColor": "#558B2F"
          },
          {
          "letter": "V",
          "word": "Vine Leaf",
          "emoji": "🌿",
          "bgColor": "#43A047"
          },
          {
          "letter": "U",
          "word": "Ube Yam",
          "emoji": "🥔",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "X",
          "word": "Xigua Peel",
          "emoji": "🍉",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "Y",
          "word": "Yellow Pepper",
          "emoji": "🫑",
          "bgColor": "#F9A825"
          },
          {
          "letter": "Z",
          "word": "Zucchini",
          "emoji": "🥒",
          "bgColor": "#689F38"
          },
          {
          "letter": "Q",
          "word": "Quinoa Leaf",
          "emoji": "🌿",
          "bgColor": "#827717"
          },
          {
          "letter": "B",
          "word": "Beetroot",
          "emoji": "🥕",
          "bgColor": "#880E4F"
          },
          {
          "letter": "S",
          "word": "Sweet Corn",
          "emoji": "🌽",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "Capsicum",
          "emoji": "🫑",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "P",
          "word": "Peas",
          "emoji": "🫛",
          "bgColor": "#33691E"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="VegetablesSuperVeggies2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Super Vegetables - Part 2",
          videoId: "vegetables-super-veggies-2",
          bgGradient: ["#1976D2","#90CAF9"] as [string, string],
          accentColor: "#1565C0",
          letters: [
          {
          "letter": "A",
          "word": "Amla Leaf",
          "emoji": "🌿",
          "bgColor": "#33691E"
          },
          {
          "letter": "T",
          "word": "Tulsi",
          "emoji": "🌿",
          "bgColor": "#00897B"
          },
          {
          "letter": "G",
          "word": "Giloy",
          "emoji": "🌿",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "N",
          "word": "Neem",
          "emoji": "🌿",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "H",
          "word": "Haldi Root",
          "emoji": "🌿",
          "bgColor": "#FF8F00"
          },
          {
          "letter": "M",
          "word": "Mint Leaves",
          "emoji": "🌿",
          "bgColor": "#43A047"
          },
          {
          "letter": "S",
          "word": "Shatavari",
          "emoji": "🌿",
          "bgColor": "#558B2F"
          },
          {
          "letter": "C",
          "word": "Chamomile",
          "emoji": "🌼",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "P",
          "word": "Peppermint",
          "emoji": "🌿",
          "bgColor": "#00695C"
          },
          {
          "letter": "B",
          "word": "Basil",
          "emoji": "🌿",
          "bgColor": "#388E3C"
          },
          {
          "letter": "L",
          "word": "Lemon Balm",
          "emoji": "🌿",
          "bgColor": "#827717"
          },
          {
          "letter": "R",
          "word": "Rosemary",
          "emoji": "🌿",
          "bgColor": "#689F38"
          },
          {
          "letter": "D",
          "word": "Dill Leaves",
          "emoji": "🌿",
          "bgColor": "#558B2F"
          },
          {
          "letter": "O",
          "word": "Oregano",
          "emoji": "🌿",
          "bgColor": "#33691E"
          },
          {
          "letter": "K",
          "word": "Kadipatta",
          "emoji": "🌿",
          "bgColor": "#1B5E20"
          },
          {
          "letter": "F",
          "word": "Fresh Ginger",
          "emoji": "🌿",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "W",
          "word": "Wheatgrass",
          "emoji": "🌱",
          "bgColor": "#7CB342"
          },
          {
          "letter": "J",
          "word": "Jackfruit Leaf",
          "emoji": "🌿",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "E",
          "word": "Eucalyptus",
          "emoji": "🌿",
          "bgColor": "#00897B"
          },
          {
          "letter": "I",
          "word": "Indian Basil",
          "emoji": "🌿",
          "bgColor": "#388E3C"
          },
          {
          "letter": "V",
          "word": "Vetiver",
          "emoji": "🌿",
          "bgColor": "#827717"
          },
          {
          "letter": "U",
          "word": "Urad Leaf",
          "emoji": "🌿",
          "bgColor": "#43A047"
          },
          {
          "letter": "X",
          "word": "Xerophyte Herb",
          "emoji": "🌿",
          "bgColor": "#558B2F"
          },
          {
          "letter": "Y",
          "word": "Yarrow",
          "emoji": "🌼",
          "bgColor": "#F9A825"
          },
          {
          "letter": "Z",
          "word": "Zinnia Leaf",
          "emoji": "🌿",
          "bgColor": "#689F38"
          },
          {
          "letter": "Q",
          "word": "Queen Herb",
          "emoji": "🌿",
          "bgColor": "#00695C"
          },
          {
          "letter": "S",
          "word": "Sage",
          "emoji": "🌿",
          "bgColor": "#33691E"
          },
          {
          "letter": "T",
          "word": "Thyme",
          "emoji": "🌿",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "B",
          "word": "Bay Leaf",
          "emoji": "🌿",
          "bgColor": "#5D4037"
          },
          {
          "letter": "C",
          "word": "Cilantro",
          "emoji": "🌿",
          "bgColor": "#43A047"
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
