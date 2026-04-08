import "./index.css";
import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";
import React from "react";

export const FoodRemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="FoodIndianFood1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Food - Part 1",
          videoId: "food-indian-food-1",
          bgGradient: ["#FF6F00","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [
          {
          "letter": "S",
          "word": "Samosa",
          "emoji": "🥟",
          "bgColor": "#FF9800"
          },
          {
          "letter": "B",
          "word": "Biryani",
          "emoji": "🍚",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "D",
          "word": "Dosa",
          "emoji": "🫓",
          "bgColor": "#827717"
          },
          {
          "letter": "I",
          "word": "Idli",
          "emoji": "🍚",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "R",
          "word": "Roti",
          "emoji": "🫓",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "C",
          "word": "Chole Bhature",
          "emoji": "🍛",
          "bgColor": "#FF5722"
          },
          {
          "letter": "P",
          "word": "Paneer Tikka",
          "emoji": "🧀",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "T",
          "word": "Tandoori Chicken",
          "emoji": "🍗",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "A",
          "word": "Aloo Paratha",
          "emoji": "🫓",
          "bgColor": "#FFA000"
          },
          {
          "letter": "V",
          "word": "Vada Pav",
          "emoji": "🍔",
          "bgColor": "#FF9800"
          },
          {
          "letter": "K",
          "word": "Kebab",
          "emoji": "🍢",
          "bgColor": "#795548"
          },
          {
          "letter": "M",
          "word": "Masala Dosa",
          "emoji": "🫓",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "N",
          "word": "Naan",
          "emoji": "🫓",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "L",
          "word": "Lassi",
          "emoji": "🥛",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "G",
          "word": "Gulab Jamun",
          "emoji": "🍩",
          "bgColor": "#BF360C"
          },
          {
          "letter": "J",
          "word": "Jalebi",
          "emoji": "🍩",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "H",
          "word": "Halwa",
          "emoji": "🍮",
          "bgColor": "#FF9800"
          },
          {
          "letter": "D",
          "word": "Dal Makhani",
          "emoji": "🍲",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "R",
          "word": "Rajma Chawal",
          "emoji": "🍛",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "P",
          "word": "Pav Bhaji",
          "emoji": "🍛",
          "bgColor": "#FF5722"
          },
          {
          "letter": "U",
          "word": "Upma",
          "emoji": "🍚",
          "bgColor": "#827717"
          },
          {
          "letter": "E",
          "word": "Egg Curry",
          "emoji": "🥚",
          "bgColor": "#FFA000"
          },
          {
          "letter": "C",
          "word": "Chicken Tikka",
          "emoji": "🍗",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Butter Chicken",
          "emoji": "🍗",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "W",
          "word": "Wada",
          "emoji": "🍩",
          "bgColor": "#795548"
          },
          {
          "letter": "F",
          "word": "Fish Curry",
          "emoji": "🐟",
          "bgColor": "#FF9800"
          },
          {
          "letter": "O",
          "word": "Onion Pakoda",
          "emoji": "🧅",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "Sambar",
          "emoji": "🍲",
          "bgColor": "#BF360C"
          },
          {
          "letter": "K",
          "word": "Khichdi",
          "emoji": "🍚",
          "bgColor": "#FFA000"
          },
          {
          "letter": "T",
          "word": "Thali",
          "emoji": "🍽️",
          "bgColor": "#8D6E63"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodIndianFood2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Food - Part 2",
          videoId: "food-indian-food-2",
          bgGradient: ["#FF8F00","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [
          {
          "letter": "P",
          "word": "Puri",
          "emoji": "🫓",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "Chaat",
          "emoji": "🍽️",
          "bgColor": "#FF5722"
          },
          {
          "letter": "K",
          "word": "Kadhi",
          "emoji": "🍲",
          "bgColor": "#FFA000"
          },
          {
          "letter": "M",
          "word": "Malai Kofta",
          "emoji": "🍛",
          "bgColor": "#FF9800"
          },
          {
          "letter": "S",
          "word": "Shahi Paneer",
          "emoji": "🧀",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "A",
          "word": "Alu Gobi",
          "emoji": "🥔",
          "bgColor": "#827717"
          },
          {
          "letter": "B",
          "word": "Bhindi Masala",
          "emoji": "🍛",
          "bgColor": "#33691E"
          },
          {
          "letter": "D",
          "word": "Dhokla",
          "emoji": "🍞",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "G",
          "word": "Gajar Halwa",
          "emoji": "🥕",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "H",
          "word": "Hyderabadi Biryani",
          "emoji": "🍚",
          "bgColor": "#FF9800"
          },
          {
          "letter": "I",
          "word": "Idiyappam",
          "emoji": "🍝",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "J",
          "word": "Jeera Rice",
          "emoji": "🍚",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "L",
          "word": "Litti Chokha",
          "emoji": "🫓",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "N",
          "word": "Nihari",
          "emoji": "🍲",
          "bgColor": "#795548"
          },
          {
          "letter": "O",
          "word": "Onion Bhaji",
          "emoji": "🧅",
          "bgColor": "#FF5722"
          },
          {
          "letter": "R",
          "word": "Rasam",
          "emoji": "🍲",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "T",
          "word": "Tikka Masala",
          "emoji": "🍛",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "U",
          "word": "Uttapam",
          "emoji": "🫓",
          "bgColor": "#827717"
          },
          {
          "letter": "V",
          "word": "Vegetable Korma",
          "emoji": "🍛",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "W",
          "word": "Wheat Roti",
          "emoji": "🫓",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "E",
          "word": "Egg Biryani",
          "emoji": "🥚",
          "bgColor": "#FFA000"
          },
          {
          "letter": "F",
          "word": "Fried Rice",
          "emoji": "🍚",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zarda",
          "emoji": "🍚",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "X",
          "word": "Xacuti Curry",
          "emoji": "🍛",
          "bgColor": "#BF360C"
          },
          {
          "letter": "Y",
          "word": "Yogurt Rice",
          "emoji": "🍚",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "Q",
          "word": "Quinoa Pulao",
          "emoji": "🍚",
          "bgColor": "#827717"
          },
          {
          "letter": "P",
          "word": "Palak Paneer",
          "emoji": "🧀",
          "bgColor": "#33691E"
          },
          {
          "letter": "C",
          "word": "Chicken Biryani",
          "emoji": "🍗",
          "bgColor": "#FF9800"
          },
          {
          "letter": "D",
          "word": "Dal Tadka",
          "emoji": "🍲",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "Seekh Kebab",
          "emoji": "🍢",
          "bgColor": "#D32F2F"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodIndianFood3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Indian Food - Part 3",
          videoId: "food-indian-food-3",
          bgGradient: ["#FFA000","#FFECB3"] as [string, string],
          accentColor: "#FF8F00",
          letters: [
          {
          "letter": "M",
          "word": "Mutton Rogan Josh",
          "emoji": "🍖",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "L",
          "word": "Lucknowi Biryani",
          "emoji": "🍚",
          "bgColor": "#FFA000"
          },
          {
          "letter": "K",
          "word": "Kashmiri Pulao",
          "emoji": "🍚",
          "bgColor": "#E91E63"
          },
          {
          "letter": "A",
          "word": "Appam",
          "emoji": "🫓",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "S",
          "word": "Stew",
          "emoji": "🍲",
          "bgColor": "#FF9800"
          },
          {
          "letter": "P",
          "word": "Puttu",
          "emoji": "🍚",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "C",
          "word": "Chettinad Chicken",
          "emoji": "🍗",
          "bgColor": "#BF360C"
          },
          {
          "letter": "V",
          "word": "Vindaloo",
          "emoji": "🍛",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "T",
          "word": "Thukpa",
          "emoji": "🍜",
          "bgColor": "#795548"
          },
          {
          "letter": "D",
          "word": "Dum Aloo",
          "emoji": "🥔",
          "bgColor": "#FFA000"
          },
          {
          "letter": "B",
          "word": "Bisi Bele Bath",
          "emoji": "🍚",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "R",
          "word": "Rogan Josh",
          "emoji": "🍖",
          "bgColor": "#C62828"
          },
          {
          "letter": "N",
          "word": "Navratan Korma",
          "emoji": "🍛",
          "bgColor": "#FF9800"
          },
          {
          "letter": "G",
          "word": "Ghevar",
          "emoji": "🍩",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "H",
          "word": "Handvo",
          "emoji": "🫓",
          "bgColor": "#827717"
          },
          {
          "letter": "I",
          "word": "Indian Curry",
          "emoji": "🍛",
          "bgColor": "#FF5722"
          },
          {
          "letter": "J",
          "word": "Jhalmuri",
          "emoji": "🍿",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "E",
          "word": "Egg Bhurji",
          "emoji": "🥚",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "F",
          "word": "Fish Fry",
          "emoji": "🐟",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "O",
          "word": "Omelette",
          "emoji": "🥚",
          "bgColor": "#FFA000"
          },
          {
          "letter": "W",
          "word": "Wheat Halwa",
          "emoji": "🍮",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "U",
          "word": "Undhiyu",
          "emoji": "🍛",
          "bgColor": "#33691E"
          },
          {
          "letter": "X",
          "word": "Xmas Cake",
          "emoji": "🎂",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "Y",
          "word": "Yellow Dal",
          "emoji": "🍲",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zafrani Pulao",
          "emoji": "🍚",
          "bgColor": "#FF9800"
          },
          {
          "letter": "Q",
          "word": "Qorma",
          "emoji": "🍛",
          "bgColor": "#795548"
          },
          {
          "letter": "P",
          "word": "Poha",
          "emoji": "🍚",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "M",
          "word": "Misal Pav",
          "emoji": "🍛",
          "bgColor": "#FF5722"
          },
          {
          "letter": "S",
          "word": "Sarson Ka Saag",
          "emoji": "🍛",
          "bgColor": "#33691E"
          },
          {
          "letter": "K",
          "word": "Kachori",
          "emoji": "🥟",
          "bgColor": "#FF6F00"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodStreetFood1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Street Food - Part 1",
          videoId: "food-street-food-1",
          bgGradient: ["#D32F2F","#FFCDD2"] as [string, string],
          accentColor: "#B71C1C",
          letters: [
          {
          "letter": "P",
          "word": "Pani Puri",
          "emoji": "🍽️",
          "bgColor": "#FF9800"
          },
          {
          "letter": "V",
          "word": "Vada Pav",
          "emoji": "🍔",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "S",
          "word": "Samosa",
          "emoji": "🥟",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "Chaat",
          "emoji": "🍽️",
          "bgColor": "#FF5722"
          },
          {
          "letter": "B",
          "word": "Bhel Puri",
          "emoji": "🍿",
          "bgColor": "#827717"
          },
          {
          "letter": "A",
          "word": "Aloo Tikki",
          "emoji": "🥔",
          "bgColor": "#FFA000"
          },
          {
          "letter": "D",
          "word": "Dabeli",
          "emoji": "🍔",
          "bgColor": "#BF360C"
          },
          {
          "letter": "K",
          "word": "Kathi Roll",
          "emoji": "🌯",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Momos",
          "emoji": "🥟",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "G",
          "word": "Golgappa",
          "emoji": "🍽️",
          "bgColor": "#FF9800"
          },
          {
          "letter": "P",
          "word": "Pav Bhaji",
          "emoji": "🍛",
          "bgColor": "#FF5722"
          },
          {
          "letter": "T",
          "word": "Tikki",
          "emoji": "🥔",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "J",
          "word": "Jhal Muri",
          "emoji": "🍿",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "R",
          "word": "Ragda Pattice",
          "emoji": "🥔",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "S",
          "word": "Sev Puri",
          "emoji": "🍽️",
          "bgColor": "#FFA000"
          },
          {
          "letter": "L",
          "word": "Litti Chokha",
          "emoji": "🫓",
          "bgColor": "#795548"
          },
          {
          "letter": "E",
          "word": "Egg Roll",
          "emoji": "🥚",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "F",
          "word": "Frankie",
          "emoji": "🌯",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "H",
          "word": "Hot Dog",
          "emoji": "🌭",
          "bgColor": "#FF5722"
          },
          {
          "letter": "I",
          "word": "Ice Gola",
          "emoji": "🍧",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "N",
          "word": "Noodles",
          "emoji": "🍜",
          "bgColor": "#FF9800"
          },
          {
          "letter": "O",
          "word": "Onion Rings",
          "emoji": "🧅",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "W",
          "word": "Wonton",
          "emoji": "🥟",
          "bgColor": "#795548"
          },
          {
          "letter": "U",
          "word": "Uttapam Street",
          "emoji": "🫓",
          "bgColor": "#827717"
          },
          {
          "letter": "X",
          "word": "Xtreme Spicy",
          "emoji": "🌶️",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "Y",
          "word": "Yogurt Chaat",
          "emoji": "🍽️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "Z",
          "word": "Zinger Burger",
          "emoji": "🍔",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "Q",
          "word": "Quick Bite",
          "emoji": "🍔",
          "bgColor": "#BF360C"
          },
          {
          "letter": "C",
          "word": "Corn Chat",
          "emoji": "🌽",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "B",
          "word": "Bread Pakora",
          "emoji": "🍞",
          "bgColor": "#FF9800"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodStreetFood2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Street Food - Part 2",
          videoId: "food-street-food-2",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [
          {
          "letter": "C",
          "word": "Chole Kulche",
          "emoji": "🍛",
          "bgColor": "#FF5722"
          },
          {
          "letter": "T",
          "word": "Taco",
          "emoji": "🌮",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "P",
          "word": "Pizza Slice",
          "emoji": "🍕",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Burger",
          "emoji": "🍔",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "S",
          "word": "Shawarma",
          "emoji": "🌯",
          "bgColor": "#795548"
          },
          {
          "letter": "F",
          "word": "French Fries",
          "emoji": "🍟",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "N",
          "word": "Nachos",
          "emoji": "🧀",
          "bgColor": "#FF9800"
          },
          {
          "letter": "G",
          "word": "Grilled Sandwich",
          "emoji": "🥪",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "H",
          "word": "Hotdog",
          "emoji": "🌭",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "K",
          "word": "Kebab Roll",
          "emoji": "🌯",
          "bgColor": "#BF360C"
          },
          {
          "letter": "D",
          "word": "Dahi Puri",
          "emoji": "🍽️",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "M",
          "word": "Maggi Noodles",
          "emoji": "🍜",
          "bgColor": "#FFA000"
          },
          {
          "letter": "A",
          "word": "Aloo Chaat",
          "emoji": "🥔",
          "bgColor": "#FF5722"
          },
          {
          "letter": "R",
          "word": "Roasted Corn",
          "emoji": "🌽",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "L",
          "word": "Lasagna",
          "emoji": "🍝",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "J",
          "word": "Junk Food",
          "emoji": "🍔",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "W",
          "word": "Wrap",
          "emoji": "🌯",
          "bgColor": "#33691E"
          },
          {
          "letter": "E",
          "word": "Egg Sandwich",
          "emoji": "🥪",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "I",
          "word": "Ice Cream Cone",
          "emoji": "🍦",
          "bgColor": "#E91E63"
          },
          {
          "letter": "O",
          "word": "Onion Bhaji",
          "emoji": "🧅",
          "bgColor": "#FF9800"
          },
          {
          "letter": "V",
          "word": "Veggie Wrap",
          "emoji": "🌯",
          "bgColor": "#43A047"
          },
          {
          "letter": "U",
          "word": "Ulta Tawa Bread",
          "emoji": "🍞",
          "bgColor": "#827717"
          },
          {
          "letter": "X",
          "word": "Xtreme Burger",
          "emoji": "🍔",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "Y",
          "word": "Yakitori",
          "emoji": "🍢",
          "bgColor": "#795548"
          },
          {
          "letter": "Z",
          "word": "Zinger Wrap",
          "emoji": "🌯",
          "bgColor": "#BF360C"
          },
          {
          "letter": "Q",
          "word": "Quesadilla",
          "emoji": "🌮",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "Spring Roll",
          "emoji": "🥟",
          "bgColor": "#FF5722"
          },
          {
          "letter": "P",
          "word": "Popcorn",
          "emoji": "🍿",
          "bgColor": "#FFA000"
          },
          {
          "letter": "C",
          "word": "Corn Dog",
          "emoji": "🌭",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "B",
          "word": "Bao Bun",
          "emoji": "🥟",
          "bgColor": "#F5F5F5"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodStreetFood3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Street Food - Part 3",
          videoId: "food-street-food-3",
          bgGradient: ["#E53935","#FFEBEE"] as [string, string],
          accentColor: "#C62828",
          letters: [
          {
          "letter": "F",
          "word": "Falafel",
          "emoji": "🧆",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Sushi Roll",
          "emoji": "🍣",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "D",
          "word": "Dim Sum",
          "emoji": "🥟",
          "bgColor": "#FF9800"
          },
          {
          "letter": "R",
          "word": "Ramen",
          "emoji": "🍜",
          "bgColor": "#BF360C"
          },
          {
          "letter": "T",
          "word": "Tempura",
          "emoji": "🍤",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "P",
          "word": "Pad Thai",
          "emoji": "🍜",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "G",
          "word": "Gyoza",
          "emoji": "🥟",
          "bgColor": "#795548"
          },
          {
          "letter": "B",
          "word": "Banh Mi",
          "emoji": "🥖",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "K",
          "word": "Katsu",
          "emoji": "🍗",
          "bgColor": "#FF5722"
          },
          {
          "letter": "N",
          "word": "Nasi Goreng",
          "emoji": "🍚",
          "bgColor": "#FFA000"
          },
          {
          "letter": "M",
          "word": "Momo Soup",
          "emoji": "🥟",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "A",
          "word": "Arepa",
          "emoji": "🫓",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "Churros",
          "emoji": "🍩",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "H",
          "word": "Hummus",
          "emoji": "🍽️",
          "bgColor": "#827717"
          },
          {
          "letter": "L",
          "word": "Loaded Fries",
          "emoji": "🍟",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "J",
          "word": "Jerk Chicken",
          "emoji": "🍗",
          "bgColor": "#BF360C"
          },
          {
          "letter": "W",
          "word": "Waffle Fries",
          "emoji": "🧇",
          "bgColor": "#FFA000"
          },
          {
          "letter": "E",
          "word": "Empanada",
          "emoji": "🥟",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "I",
          "word": "Italian Panini",
          "emoji": "🥪",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "O",
          "word": "Okonomiyaki",
          "emoji": "🍳",
          "bgColor": "#FF9800"
          },
          {
          "letter": "V",
          "word": "Vietnamese Pho",
          "emoji": "🍜",
          "bgColor": "#33691E"
          },
          {
          "letter": "U",
          "word": "Udon Noodles",
          "emoji": "🍜",
          "bgColor": "#795548"
          },
          {
          "letter": "X",
          "word": "Xiao Long Bao",
          "emoji": "🥟",
          "bgColor": "#FF5722"
          },
          {
          "letter": "Y",
          "word": "Yakisoba",
          "emoji": "🍜",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Za'atar Bread",
          "emoji": "🫓",
          "bgColor": "#827717"
          },
          {
          "letter": "Q",
          "word": "Quiche",
          "emoji": "🥧",
          "bgColor": "#FFA000"
          },
          {
          "letter": "S",
          "word": "Satay",
          "emoji": "🍢",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Pretzel",
          "emoji": "🥨",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Bruschetta",
          "emoji": "🍞",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "T",
          "word": "Takoyaki",
          "emoji": "🍢",
          "bgColor": "#BF360C"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodSweetsDesserts1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sweets & Desserts - Part 1",
          videoId: "food-sweets-desserts-1",
          bgGradient: ["#AD1457","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [
          {
          "letter": "G",
          "word": "Gulab Jamun",
          "emoji": "🍩",
          "bgColor": "#BF360C"
          },
          {
          "letter": "J",
          "word": "Jalebi",
          "emoji": "🍩",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "R",
          "word": "Rasgulla",
          "emoji": "🍡",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "L",
          "word": "Ladoo",
          "emoji": "🍡",
          "bgColor": "#FFC107"
          },
          {
          "letter": "B",
          "word": "Barfi",
          "emoji": "🍬",
          "bgColor": "#FF9800"
          },
          {
          "letter": "K",
          "word": "Kheer",
          "emoji": "🍮",
          "bgColor": "#FFA000"
          },
          {
          "letter": "H",
          "word": "Halwa",
          "emoji": "🍮",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Payasam",
          "emoji": "🍮",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "Sandesh",
          "emoji": "🍡",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "M",
          "word": "Mysore Pak",
          "emoji": "🍬",
          "bgColor": "#FFA000"
          },
          {
          "letter": "C",
          "word": "Cham Cham",
          "emoji": "🍡",
          "bgColor": "#E91E63"
          },
          {
          "letter": "D",
          "word": "Doodh Peda",
          "emoji": "🍬",
          "bgColor": "#FFC107"
          },
          {
          "letter": "A",
          "word": "Aam Shrikhand",
          "emoji": "🥭",
          "bgColor": "#FF9800"
          },
          {
          "letter": "R",
          "word": "Rabri",
          "emoji": "🍮",
          "bgColor": "#FFA000"
          },
          {
          "letter": "I",
          "word": "Ice Cream",
          "emoji": "🍦",
          "bgColor": "#E91E63"
          },
          {
          "letter": "T",
          "word": "Thandai",
          "emoji": "🥛",
          "bgColor": "#00897B"
          },
          {
          "letter": "N",
          "word": "Nut Barfi",
          "emoji": "🍬",
          "bgColor": "#795548"
          },
          {
          "letter": "E",
          "word": "Elaichi Barfi",
          "emoji": "🍬",
          "bgColor": "#33691E"
          },
          {
          "letter": "F",
          "word": "Firni",
          "emoji": "🍮",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "W",
          "word": "White Rasgulla",
          "emoji": "🍡",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "V",
          "word": "Vermicelli Kheer",
          "emoji": "🍮",
          "bgColor": "#FF9800"
          },
          {
          "letter": "O",
          "word": "Orange Barfi",
          "emoji": "🍬",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "U",
          "word": "Ukadiche Modak",
          "emoji": "🍡",
          "bgColor": "#FFA000"
          },
          {
          "letter": "X",
          "word": "Xmas Plum Cake",
          "emoji": "🎂",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "Y",
          "word": "Yogurt Parfait",
          "emoji": "🍨",
          "bgColor": "#E91E63"
          },
          {
          "letter": "Z",
          "word": "Zarda Rice",
          "emoji": "🍚",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "Q",
          "word": "Quick Dessert",
          "emoji": "🍮",
          "bgColor": "#FF9800"
          },
          {
          "letter": "P",
          "word": "Petha",
          "emoji": "🍬",
          "bgColor": "#7CB342"
          },
          {
          "letter": "S",
          "word": "Shrikhand",
          "emoji": "🍮",
          "bgColor": "#FFA000"
          },
          {
          "letter": "K",
          "word": "Kalakand",
          "emoji": "🍬",
          "bgColor": "#FFC107"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodSweetsDesserts2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sweets & Desserts - Part 2",
          videoId: "food-sweets-desserts-2",
          bgGradient: ["#C2185B","#F8BBD0"] as [string, string],
          accentColor: "#AD1457",
          letters: [
          {
          "letter": "C",
          "word": "Cake",
          "emoji": "🎂",
          "bgColor": "#E91E63"
          },
          {
          "letter": "P",
          "word": "Pastry",
          "emoji": "🍰",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Brownie",
          "emoji": "🍫",
          "bgColor": "#5D4037"
          },
          {
          "letter": "D",
          "word": "Donut",
          "emoji": "🍩",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "M",
          "word": "Muffin",
          "emoji": "🧁",
          "bgColor": "#FF9800"
          },
          {
          "letter": "C",
          "word": "Cookie",
          "emoji": "🍪",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "I",
          "word": "Ice Cream Sundae",
          "emoji": "🍨",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "W",
          "word": "Waffle",
          "emoji": "🧇",
          "bgColor": "#FFA000"
          },
          {
          "letter": "P",
          "word": "Pancake",
          "emoji": "🥞",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "T",
          "word": "Tiramisu",
          "emoji": "🍰",
          "bgColor": "#795548"
          },
          {
          "letter": "F",
          "word": "Fudge",
          "emoji": "🍫",
          "bgColor": "#4E342E"
          },
          {
          "letter": "S",
          "word": "Souffle",
          "emoji": "🍮",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "C",
          "word": "Cheesecake",
          "emoji": "🍰",
          "bgColor": "#FFA000"
          },
          {
          "letter": "E",
          "word": "Eclair",
          "emoji": "🍩",
          "bgColor": "#5D4037"
          },
          {
          "letter": "A",
          "word": "Apple Pie",
          "emoji": "🥧",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "G",
          "word": "Gelato",
          "emoji": "🍨",
          "bgColor": "#E91E63"
          },
          {
          "letter": "L",
          "word": "Lemon Tart",
          "emoji": "🍋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "R",
          "word": "Red Velvet",
          "emoji": "🎂",
          "bgColor": "#C62828"
          },
          {
          "letter": "K",
          "word": "Kulfi",
          "emoji": "🍦",
          "bgColor": "#00897B"
          },
          {
          "letter": "N",
          "word": "Nankhatai",
          "emoji": "🍪",
          "bgColor": "#FFA000"
          },
          {
          "letter": "H",
          "word": "Honey Cake",
          "emoji": "🍰",
          "bgColor": "#FF9800"
          },
          {
          "letter": "J",
          "word": "Jelly",
          "emoji": "🍮",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "O",
          "word": "Oreo Shake",
          "emoji": "🥛",
          "bgColor": "#263238"
          },
          {
          "letter": "V",
          "word": "Vanilla Cake",
          "emoji": "🎂",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "U",
          "word": "Upside Down Cake",
          "emoji": "🎂",
          "bgColor": "#FF5722"
          },
          {
          "letter": "X",
          "word": "Xmas Pudding",
          "emoji": "🍮",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "Y",
          "word": "Yogurt Cake",
          "emoji": "🎂",
          "bgColor": "#E91E63"
          },
          {
          "letter": "Z",
          "word": "Zabaglione",
          "emoji": "🍮",
          "bgColor": "#FFA000"
          },
          {
          "letter": "Q",
          "word": "Queen Cake",
          "emoji": "🎂",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "S",
          "word": "Strawberry Cake",
          "emoji": "🎂",
          "bgColor": "#E91E63"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodSweetsDesserts3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Sweets & Desserts - Part 3",
          videoId: "food-sweets-desserts-3",
          bgGradient: ["#D81B60","#FCE4EC"] as [string, string],
          accentColor: "#C2185B",
          letters: [
          {
          "letter": "M",
          "word": "Malpua",
          "emoji": "🍩",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "S",
          "word": "Soan Papdi",
          "emoji": "🍬",
          "bgColor": "#FFC107"
          },
          {
          "letter": "P",
          "word": "Peda",
          "emoji": "🍬",
          "bgColor": "#FFA000"
          },
          {
          "letter": "K",
          "word": "Kaju Katli",
          "emoji": "🍬",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "B",
          "word": "Boondi Ladoo",
          "emoji": "🍡",
          "bgColor": "#FF9800"
          },
          {
          "letter": "G",
          "word": "Gajar Halwa",
          "emoji": "🥕",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "D",
          "word": "Double Ka Meetha",
          "emoji": "🍮",
          "bgColor": "#BF360C"
          },
          {
          "letter": "C",
          "word": "Coconut Barfi",
          "emoji": "🥥",
          "bgColor": "#795548"
          },
          {
          "letter": "R",
          "word": "Ras Malai",
          "emoji": "🍡",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "A",
          "word": "Aam Ras",
          "emoji": "🥭",
          "bgColor": "#FF9800"
          },
          {
          "letter": "L",
          "word": "Lassi Sweet",
          "emoji": "🥛",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "T",
          "word": "Thandai Sweet",
          "emoji": "🥛",
          "bgColor": "#00897B"
          },
          {
          "letter": "N",
          "word": "Narkel Naru",
          "emoji": "🥥",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "H",
          "word": "Havmor Ice Cream",
          "emoji": "🍦",
          "bgColor": "#E91E63"
          },
          {
          "letter": "I",
          "word": "Imarti",
          "emoji": "🍩",
          "bgColor": "#FF5722"
          },
          {
          "letter": "J",
          "word": "Jangiri",
          "emoji": "🍩",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "E",
          "word": "Elaneer Payasam",
          "emoji": "🍮",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "F",
          "word": "Falooda",
          "emoji": "🍧",
          "bgColor": "#E91E63"
          },
          {
          "letter": "W",
          "word": "White Chocolate",
          "emoji": "🍫",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "O",
          "word": "Orange Cream",
          "emoji": "🍊",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "V",
          "word": "Vanilla Ice Cream",
          "emoji": "🍦",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "U",
          "word": "Urad Dal Ladoo",
          "emoji": "🍡",
          "bgColor": "#FFA000"
          },
          {
          "letter": "X",
          "word": "Xtra Sweet",
          "emoji": "🍬",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "Y",
          "word": "Yellow Peda",
          "emoji": "🍬",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "Z",
          "word": "Zafrani Kheer",
          "emoji": "🍮",
          "bgColor": "#FF9800"
          },
          {
          "letter": "Q",
          "word": "Quick Sweet",
          "emoji": "🍬",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "S",
          "word": "Sitaphal Basundi",
          "emoji": "🍮",
          "bgColor": "#33691E"
          },
          {
          "letter": "P",
          "word": "Puran Poli",
          "emoji": "🫓",
          "bgColor": "#FFA000"
          },
          {
          "letter": "M",
          "word": "Modak",
          "emoji": "🍡",
          "bgColor": "#FF9800"
          },
          {
          "letter": "B",
          "word": "Basundi",
          "emoji": "🍮",
          "bgColor": "#FBC02D"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodBreakfastFood1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Food - Part 1",
          videoId: "food-breakfast-food-1",
          bgGradient: ["#795548","#D7CCC8"] as [string, string],
          accentColor: "#4E342E",
          letters: [
          {
          "letter": "I",
          "word": "Idli",
          "emoji": "🍚",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "D",
          "word": "Dosa",
          "emoji": "🫓",
          "bgColor": "#827717"
          },
          {
          "letter": "P",
          "word": "Poha",
          "emoji": "🍚",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "U",
          "word": "Upma",
          "emoji": "🍚",
          "bgColor": "#FFA000"
          },
          {
          "letter": "A",
          "word": "Aloo Paratha",
          "emoji": "🫓",
          "bgColor": "#FF9800"
          },
          {
          "letter": "C",
          "word": "Chole Bhature",
          "emoji": "🍛",
          "bgColor": "#FF5722"
          },
          {
          "letter": "T",
          "word": "Toast",
          "emoji": "🍞",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "E",
          "word": "Egg",
          "emoji": "🥚",
          "bgColor": "#FFA000"
          },
          {
          "letter": "O",
          "word": "Omelette",
          "emoji": "🍳",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "B",
          "word": "Bread Butter",
          "emoji": "🍞",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "M",
          "word": "Milk",
          "emoji": "🥛",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "S",
          "word": "Sandwich",
          "emoji": "🥪",
          "bgColor": "#33691E"
          },
          {
          "letter": "P",
          "word": "Pancake",
          "emoji": "🥞",
          "bgColor": "#FFA000"
          },
          {
          "letter": "W",
          "word": "Waffle",
          "emoji": "🧇",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "C",
          "word": "Cereal",
          "emoji": "🥣",
          "bgColor": "#827717"
          },
          {
          "letter": "F",
          "word": "French Toast",
          "emoji": "🍞",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "G",
          "word": "Granola",
          "emoji": "🥣",
          "bgColor": "#795548"
          },
          {
          "letter": "H",
          "word": "Hash Brown",
          "emoji": "🥔",
          "bgColor": "#FF9800"
          },
          {
          "letter": "K",
          "word": "Kulcha",
          "emoji": "🫓",
          "bgColor": "#FFA000"
          },
          {
          "letter": "L",
          "word": "Lassi",
          "emoji": "🥛",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "N",
          "word": "Naan Bread",
          "emoji": "🫓",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "R",
          "word": "Ragi Dosa",
          "emoji": "🫓",
          "bgColor": "#5D4037"
          },
          {
          "letter": "J",
          "word": "Juice",
          "emoji": "🧃",
          "bgColor": "#FF5722"
          },
          {
          "letter": "V",
          "word": "Vada",
          "emoji": "🍩",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "Y",
          "word": "Yogurt",
          "emoji": "🍶",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "X",
          "word": "Xtra Crispy Toast",
          "emoji": "🍞",
          "bgColor": "#BF360C"
          },
          {
          "letter": "Z",
          "word": "Zest Oatmeal",
          "emoji": "🥣",
          "bgColor": "#827717"
          },
          {
          "letter": "Q",
          "word": "Quick Oats",
          "emoji": "🥣",
          "bgColor": "#FFA000"
          },
          {
          "letter": "S",
          "word": "Smoothie",
          "emoji": "🥤",
          "bgColor": "#E91E63"
          },
          {
          "letter": "D",
          "word": "Dhokla",
          "emoji": "🍞",
          "bgColor": "#FBC02D"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodBreakfastFood2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Food - Part 2",
          videoId: "food-breakfast-food-2",
          bgGradient: ["#6D4C41","#BCAAA4"] as [string, string],
          accentColor: "#3E2723",
          letters: [
          {
          "letter": "M",
          "word": "Medu Vada",
          "emoji": "🍩",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Puttu",
          "emoji": "🍚",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "A",
          "word": "Appam",
          "emoji": "🫓",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "S",
          "word": "Set Dosa",
          "emoji": "🫓",
          "bgColor": "#827717"
          },
          {
          "letter": "C",
          "word": "Curd Rice",
          "emoji": "🍚",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "B",
          "word": "Besan Chilla",
          "emoji": "🫓",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "K",
          "word": "Kanda Poha",
          "emoji": "🍚",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "R",
          "word": "Rava Idli",
          "emoji": "🍚",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "T",
          "word": "Thepla",
          "emoji": "🫓",
          "bgColor": "#827717"
          },
          {
          "letter": "G",
          "word": "Gobi Paratha",
          "emoji": "🫓",
          "bgColor": "#FF9800"
          },
          {
          "letter": "N",
          "word": "Neer Dosa",
          "emoji": "🫓",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "H",
          "word": "Hot Chocolate",
          "emoji": "☕",
          "bgColor": "#5D4037"
          },
          {
          "letter": "D",
          "word": "Dahi Vada",
          "emoji": "🍩",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "E",
          "word": "English Muffin",
          "emoji": "🍞",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "F",
          "word": "Fruit Salad",
          "emoji": "🍎",
          "bgColor": "#43A047"
          },
          {
          "letter": "I",
          "word": "Indian Coffee",
          "emoji": "☕",
          "bgColor": "#795548"
          },
          {
          "letter": "J",
          "word": "Jam Toast",
          "emoji": "🍞",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "L",
          "word": "Lemon Tea",
          "emoji": "🍋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "O",
          "word": "Oats Porridge",
          "emoji": "🥣",
          "bgColor": "#827717"
          },
          {
          "letter": "W",
          "word": "Whole Wheat Toast",
          "emoji": "🍞",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "V",
          "word": "Vegetable Upma",
          "emoji": "🍚",
          "bgColor": "#33691E"
          },
          {
          "letter": "U",
          "word": "Uthappam",
          "emoji": "🫓",
          "bgColor": "#FF9800"
          },
          {
          "letter": "X",
          "word": "Xtra Cheese Toast",
          "emoji": "🧀",
          "bgColor": "#FFA000"
          },
          {
          "letter": "Y",
          "word": "Yellow Moong Dal",
          "emoji": "🍲",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zucchini Bread",
          "emoji": "🍞",
          "bgColor": "#689F38"
          },
          {
          "letter": "Q",
          "word": "Quick Poha",
          "emoji": "🍚",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "P",
          "word": "Paneer Paratha",
          "emoji": "🫓",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "M",
          "word": "Masala Dosa",
          "emoji": "🫓",
          "bgColor": "#827717"
          },
          {
          "letter": "S",
          "word": "Sabudana Khichdi",
          "emoji": "🍚",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "B",
          "word": "Banana Shake",
          "emoji": "🍌",
          "bgColor": "#FBC02D"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodBreakfastFood3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Breakfast Food - Part 3",
          videoId: "food-breakfast-food-3",
          bgGradient: ["#8D6E63","#EFEBE9"] as [string, string],
          accentColor: "#4E342E",
          letters: [
          {
          "letter": "C",
          "word": "Chai",
          "emoji": "☕",
          "bgColor": "#795548"
          },
          {
          "letter": "T",
          "word": "Tea",
          "emoji": "☕",
          "bgColor": "#5D4037"
          },
          {
          "letter": "C",
          "word": "Coffee",
          "emoji": "☕",
          "bgColor": "#4E342E"
          },
          {
          "letter": "G",
          "word": "Green Tea",
          "emoji": "🍵",
          "bgColor": "#33691E"
          },
          {
          "letter": "B",
          "word": "Badam Milk",
          "emoji": "🥛",
          "bgColor": "#FF9800"
          },
          {
          "letter": "H",
          "word": "Haldi Doodh",
          "emoji": "🥛",
          "bgColor": "#FFA000"
          },
          {
          "letter": "S",
          "word": "Sattu Drink",
          "emoji": "🥛",
          "bgColor": "#827717"
          },
          {
          "letter": "L",
          "word": "Lassi",
          "emoji": "🥛",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "C",
          "word": "Chaas",
          "emoji": "🥛",
          "bgColor": "#43A047"
          },
          {
          "letter": "M",
          "word": "Mango Shake",
          "emoji": "🥤",
          "bgColor": "#FF9800"
          },
          {
          "letter": "P",
          "word": "Protein Shake",
          "emoji": "🥤",
          "bgColor": "#E91E63"
          },
          {
          "letter": "A",
          "word": "Apple Juice",
          "emoji": "🧃",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "O",
          "word": "Orange Juice",
          "emoji": "🧃",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "W",
          "word": "Watermelon Juice",
          "emoji": "🧃",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "S",
          "word": "Sugarcane Juice",
          "emoji": "🧃",
          "bgColor": "#33691E"
          },
          {
          "letter": "J",
          "word": "Jaljeera",
          "emoji": "🥤",
          "bgColor": "#827717"
          },
          {
          "letter": "N",
          "word": "Nimbu Pani",
          "emoji": "🍋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "R",
          "word": "Rose Milk",
          "emoji": "🥛",
          "bgColor": "#E91E63"
          },
          {
          "letter": "K",
          "word": "Kokum Sharbat",
          "emoji": "🥤",
          "bgColor": "#880E4F"
          },
          {
          "letter": "F",
          "word": "Filter Coffee",
          "emoji": "☕",
          "bgColor": "#4E342E"
          },
          {
          "letter": "D",
          "word": "Darjeeling Tea",
          "emoji": "☕",
          "bgColor": "#FF9800"
          },
          {
          "letter": "I",
          "word": "Iced Tea",
          "emoji": "🧃",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "E",
          "word": "Espresso",
          "emoji": "☕",
          "bgColor": "#263238"
          },
          {
          "letter": "V",
          "word": "Vanilla Latte",
          "emoji": "☕",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "U",
          "word": "Ultra Coffee",
          "emoji": "☕",
          "bgColor": "#5D4037"
          },
          {
          "letter": "X",
          "word": "Xtra Strong Chai",
          "emoji": "☕",
          "bgColor": "#795548"
          },
          {
          "letter": "Y",
          "word": "Yogurt Drink",
          "emoji": "🥛",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "Z",
          "word": "Zen Tea",
          "emoji": "🍵",
          "bgColor": "#00897B"
          },
          {
          "letter": "Q",
          "word": "Quick Chai",
          "emoji": "☕",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "B",
          "word": "Buttermilk",
          "emoji": "🥛",
          "bgColor": "#43A047"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodSnacks1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks & Munchies - Part 1",
          videoId: "food-snacks-1",
          bgGradient: ["#00897B","#B2DFDB"] as [string, string],
          accentColor: "#004D40",
          letters: [
          {
          "letter": "C",
          "word": "Chips",
          "emoji": "🍟",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "N",
          "word": "Namkeen",
          "emoji": "🍿",
          "bgColor": "#FF9800"
          },
          {
          "letter": "B",
          "word": "Biscuit",
          "emoji": "🍪",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "M",
          "word": "Mathri",
          "emoji": "🍪",
          "bgColor": "#FFA000"
          },
          {
          "letter": "S",
          "word": "Sev",
          "emoji": "🍿",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "P",
          "word": "Popcorn",
          "emoji": "🍿",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "C",
          "word": "Chakli",
          "emoji": "🍩",
          "bgColor": "#FF5722"
          },
          {
          "letter": "M",
          "word": "Murukku",
          "emoji": "🍩",
          "bgColor": "#BF360C"
          },
          {
          "letter": "G",
          "word": "Gathiya",
          "emoji": "🍿",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "K",
          "word": "Khakhra",
          "emoji": "🫓",
          "bgColor": "#827717"
          },
          {
          "letter": "A",
          "word": "Aloo Bhujia",
          "emoji": "🍿",
          "bgColor": "#FF9800"
          },
          {
          "letter": "T",
          "word": "Thattai",
          "emoji": "🍪",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "F",
          "word": "Farsan",
          "emoji": "🍿",
          "bgColor": "#FFA000"
          },
          {
          "letter": "D",
          "word": "Dry Fruit Mix",
          "emoji": "🥜",
          "bgColor": "#795548"
          },
          {
          "letter": "R",
          "word": "Ribbon Pakoda",
          "emoji": "🍿",
          "bgColor": "#FF5722"
          },
          {
          "letter": "L",
          "word": "Laddoo",
          "emoji": "🍡",
          "bgColor": "#FFC107"
          },
          {
          "letter": "H",
          "word": "Haldiram",
          "emoji": "🍿",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "J",
          "word": "Jhaal Muri",
          "emoji": "🍿",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "W",
          "word": "Wafer",
          "emoji": "🍟",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "E",
          "word": "Energy Bar",
          "emoji": "🍫",
          "bgColor": "#33691E"
          },
          {
          "letter": "I",
          "word": "Indian Mix",
          "emoji": "🍿",
          "bgColor": "#FF9800"
          },
          {
          "letter": "O",
          "word": "Onion Rings",
          "emoji": "🧅",
          "bgColor": "#FF5722"
          },
          {
          "letter": "V",
          "word": "Veggie Chips",
          "emoji": "🍟",
          "bgColor": "#43A047"
          },
          {
          "letter": "U",
          "word": "Ujjain Namkeen",
          "emoji": "🍿",
          "bgColor": "#FFA000"
          },
          {
          "letter": "X",
          "word": "Xtreme Spicy Mix",
          "emoji": "🌶️",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "Y",
          "word": "Yellow Banana Chips",
          "emoji": "🍌",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zen Crackers",
          "emoji": "🍘",
          "bgColor": "#827717"
          },
          {
          "letter": "Q",
          "word": "Quick Snack",
          "emoji": "🍿",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "N",
          "word": "Nut Brittle",
          "emoji": "🥜",
          "bgColor": "#BF360C"
          },
          {
          "letter": "S",
          "word": "Sweet Popcorn",
          "emoji": "🍿",
          "bgColor": "#E91E63"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodSnacks2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks & Munchies - Part 2",
          videoId: "food-snacks-2",
          bgGradient: ["#00796B","#80CBC4"] as [string, string],
          accentColor: "#00695C",
          letters: [
          {
          "letter": "S",
          "word": "Samosa",
          "emoji": "🥟",
          "bgColor": "#FF9800"
          },
          {
          "letter": "P",
          "word": "Pakora",
          "emoji": "🧅",
          "bgColor": "#FF5722"
          },
          {
          "letter": "K",
          "word": "Kachori",
          "emoji": "🥟",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "B",
          "word": "Bread Roll",
          "emoji": "🍞",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "V",
          "word": "Veg Spring Roll",
          "emoji": "🥟",
          "bgColor": "#33691E"
          },
          {
          "letter": "A",
          "word": "Aloo Bonda",
          "emoji": "🥔",
          "bgColor": "#FFA000"
          },
          {
          "letter": "M",
          "word": "Mirchi Bajji",
          "emoji": "🌶️",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "C",
          "word": "Cutlet",
          "emoji": "🍽️",
          "bgColor": "#BF360C"
          },
          {
          "letter": "D",
          "word": "Dry Samosa",
          "emoji": "🥟",
          "bgColor": "#FF9800"
          },
          {
          "letter": "G",
          "word": "Gobi Manchurian",
          "emoji": "🍽️",
          "bgColor": "#FF5722"
          },
          {
          "letter": "T",
          "word": "Tandoori Momos",
          "emoji": "🥟",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "N",
          "word": "Noodle Snack",
          "emoji": "🍜",
          "bgColor": "#FFA000"
          },
          {
          "letter": "F",
          "word": "Fish Finger",
          "emoji": "🐟",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "H",
          "word": "Hara Bhara Kebab",
          "emoji": "🍽️",
          "bgColor": "#33691E"
          },
          {
          "letter": "R",
          "word": "Rajasthani Pyaaz",
          "emoji": "🧅",
          "bgColor": "#BF360C"
          },
          {
          "letter": "J",
          "word": "Jodhpuri Mirchi",
          "emoji": "🌶️",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "L",
          "word": "Lollipop Chicken",
          "emoji": "🍗",
          "bgColor": "#FF5722"
          },
          {
          "letter": "W",
          "word": "Wontons",
          "emoji": "🥟",
          "bgColor": "#795548"
          },
          {
          "letter": "E",
          "word": "Egg Puff",
          "emoji": "🥚",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "I",
          "word": "Indian Frankie",
          "emoji": "🌯",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "O",
          "word": "Onion Samosa",
          "emoji": "🥟",
          "bgColor": "#FF9800"
          },
          {
          "letter": "U",
          "word": "Ulundhu Vadai",
          "emoji": "🍩",
          "bgColor": "#827717"
          },
          {
          "letter": "X",
          "word": "Xtra Crispy Fries",
          "emoji": "🍟",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Y",
          "word": "Yogurt Kebab",
          "emoji": "🍢",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "Z",
          "word": "Zimikand Chips",
          "emoji": "🍟",
          "bgColor": "#FF9800"
          },
          {
          "letter": "Q",
          "word": "Quick Pakora",
          "emoji": "🧅",
          "bgColor": "#FF5722"
          },
          {
          "letter": "S",
          "word": "Stuffed Paratha",
          "emoji": "🫓",
          "bgColor": "#FFA000"
          },
          {
          "letter": "P",
          "word": "Paneer Pakora",
          "emoji": "🧀",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "C",
          "word": "Cheese Balls",
          "emoji": "🧀",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "B",
          "word": "Banana Chips",
          "emoji": "🍌",
          "bgColor": "#FBC02D"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodSnacks3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Snacks & Munchies - Part 3",
          videoId: "food-snacks-3",
          bgGradient: ["#00695C","#4DB6AC"] as [string, string],
          accentColor: "#004D40",
          letters: [
          {
          "letter": "I",
          "word": "Ice Gola",
          "emoji": "🍧",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "C",
          "word": "Chikki",
          "emoji": "🍬",
          "bgColor": "#FF9800"
          },
          {
          "letter": "P",
          "word": "Peanut Chikki",
          "emoji": "🥜",
          "bgColor": "#BF360C"
          },
          {
          "letter": "T",
          "word": "Til Chikki",
          "emoji": "🍬",
          "bgColor": "#FFA000"
          },
          {
          "letter": "G",
          "word": "Gajak",
          "emoji": "🍬",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "R",
          "word": "Revdi",
          "emoji": "🍬",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "M",
          "word": "Murmura",
          "emoji": "🍿",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "B",
          "word": "Bhujia Sev",
          "emoji": "🍿",
          "bgColor": "#FF5722"
          },
          {
          "letter": "K",
          "word": "Khara Boondi",
          "emoji": "🍿",
          "bgColor": "#FF9800"
          },
          {
          "letter": "D",
          "word": "Dal Moth",
          "emoji": "🍿",
          "bgColor": "#827717"
          },
          {
          "letter": "A",
          "word": "Aam Papad",
          "emoji": "🥭",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "S",
          "word": "Supari",
          "emoji": "🌿",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Lemon Soda",
          "emoji": "🍋",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "N",
          "word": "Nimki",
          "emoji": "🍪",
          "bgColor": "#FFA000"
          },
          {
          "letter": "F",
          "word": "Fryums",
          "emoji": "🍟",
          "bgColor": "#FF5722"
          },
          {
          "letter": "H",
          "word": "Haldi Chips",
          "emoji": "🍟",
          "bgColor": "#FFA000"
          },
          {
          "letter": "J",
          "word": "Jackfruit Chips",
          "emoji": "🍟",
          "bgColor": "#827717"
          },
          {
          "letter": "W",
          "word": "Wheat Puffs",
          "emoji": "🍿",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "E",
          "word": "Elachi Biscuit",
          "emoji": "🍪",
          "bgColor": "#33691E"
          },
          {
          "letter": "O",
          "word": "Oats Biscuit",
          "emoji": "🍪",
          "bgColor": "#827717"
          },
          {
          "letter": "V",
          "word": "Veggie Sticks",
          "emoji": "🥕",
          "bgColor": "#43A047"
          },
          {
          "letter": "U",
          "word": "Urad Dal Fry",
          "emoji": "🍿",
          "bgColor": "#FFA000"
          },
          {
          "letter": "X",
          "word": "Xtreme Snack",
          "emoji": "🍿",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "Y",
          "word": "Yellow Gram",
          "emoji": "🍿",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zen Mix",
          "emoji": "🍿",
          "bgColor": "#00897B"
          },
          {
          "letter": "Q",
          "word": "Quick Mix",
          "emoji": "🍿",
          "bgColor": "#FF9800"
          },
          {
          "letter": "S",
          "word": "Sweet Corn",
          "emoji": "🌽",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "P",
          "word": "Puffed Rice",
          "emoji": "🍿",
          "bgColor": "#F5F5F5"
          },
          {
          "letter": "C",
          "word": "Corn Flakes",
          "emoji": "🥣",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "B",
          "word": "Baked Namkeen",
          "emoji": "🍿",
          "bgColor": "#FF6F00"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodDrinks1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks & Beverages - Part 1",
          videoId: "food-drinks-1",
          bgGradient: ["#1565C0","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [
          {
          "letter": "C",
          "word": "Coffee",
          "emoji": "☕",
          "bgColor": "#795548"
          },
          {
          "letter": "T",
          "word": "Chai",
          "emoji": "🫖",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "L",
          "word": "Lassi",
          "emoji": "🥛",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "M",
          "word": "Masala Chai",
          "emoji": "🫖",
          "bgColor": "#8B4513"
          },
          {
          "letter": "J",
          "word": "Jaggery Tea",
          "emoji": "🫖",
          "bgColor": "#A0522D"
          },
          {
          "letter": "B",
          "word": "Badam Milk",
          "emoji": "🥛",
          "bgColor": "#DEB887"
          },
          {
          "letter": "S",
          "word": "Sugarcane Juice",
          "emoji": "🥤",
          "bgColor": "#90EE90"
          },
          {
          "letter": "G",
          "word": "Ginger Drink",
          "emoji": "🥤",
          "bgColor": "#FFD700"
          },
          {
          "letter": "K",
          "word": "Kokum Drink",
          "emoji": "🥤",
          "bgColor": "#8B0000"
          },
          {
          "letter": "P",
          "word": "Pomegranate Juice",
          "emoji": "🥤",
          "bgColor": "#DC143C"
          },
          {
          "letter": "O",
          "word": "Orange Juice",
          "emoji": "🥤",
          "bgColor": "#FFA500"
          },
          {
          "letter": "L",
          "word": "Lime Water",
          "emoji": "🥤",
          "bgColor": "#32CD32"
          },
          {
          "letter": "H",
          "word": "Hing Water",
          "emoji": "🥤",
          "bgColor": "#DAA520"
          },
          {
          "letter": "R",
          "word": "Rose Syrup",
          "emoji": "🥤",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "T",
          "word": "Turmeric Milk",
          "emoji": "🥛",
          "bgColor": "#FFD700"
          },
          {
          "letter": "M",
          "word": "Mint Cooler",
          "emoji": "🥤",
          "bgColor": "#98FF98"
          },
          {
          "letter": "I",
          "word": "Iced Tea",
          "emoji": "🧊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "F",
          "word": "Fruit Punch",
          "emoji": "🥤",
          "bgColor": "#FF6347"
          },
          {
          "letter": "V",
          "word": "Vegetable Juice",
          "emoji": "🥤",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "B",
          "word": "Buttermilk",
          "emoji": "🥛",
          "bgColor": "#F0E68C"
          },
          {
          "letter": "S",
          "word": "Sharbat",
          "emoji": "🥤",
          "bgColor": "#FF00FF"
          },
          {
          "letter": "W",
          "word": "Whey Drink",
          "emoji": "🥛",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "C",
          "word": "Coconut Water",
          "emoji": "🥥",
          "bgColor": "#FFFACD"
          },
          {
          "letter": "A",
          "word": "Amla Juice",
          "emoji": "🥤",
          "bgColor": "#7FFF00"
          },
          {
          "letter": "B",
          "word": "Beetroot Juice",
          "emoji": "🥤",
          "bgColor": "#8B0000"
          },
          {
          "letter": "D",
          "word": "Dates Shake",
          "emoji": "🥛",
          "bgColor": "#8B4513"
          },
          {
          "letter": "N",
          "word": "Neem Water",
          "emoji": "🥤",
          "bgColor": "#228B22"
          },
          {
          "letter": "T",
          "word": "Tamarind Drink",
          "emoji": "🥤",
          "bgColor": "#8B4513"
          },
          {
          "letter": "M",
          "word": "Mango Lassi",
          "emoji": "🥛",
          "bgColor": "#FFB347"
          },
          {
          "letter": "S",
          "word": "Spiced Water",
          "emoji": "🥤",
          "bgColor": "#D2691E"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodDrinks2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks & Beverages - Part 2",
          videoId: "food-drinks-2",
          bgGradient: ["#1976D2","#90CAF9"] as [string, string],
          accentColor: "#1565C0",
          letters: [
          {
          "letter": "C",
          "word": "Coffee",
          "emoji": "☕",
          "bgColor": "#795548"
          },
          {
          "letter": "T",
          "word": "Chai",
          "emoji": "🫖",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "L",
          "word": "Lassi",
          "emoji": "🥛",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "M",
          "word": "Masala Chai",
          "emoji": "🫖",
          "bgColor": "#8B4513"
          },
          {
          "letter": "J",
          "word": "Jaggery Tea",
          "emoji": "🫖",
          "bgColor": "#A0522D"
          },
          {
          "letter": "B",
          "word": "Badam Milk",
          "emoji": "🥛",
          "bgColor": "#DEB887"
          },
          {
          "letter": "S",
          "word": "Sugarcane Juice",
          "emoji": "🥤",
          "bgColor": "#90EE90"
          },
          {
          "letter": "G",
          "word": "Ginger Drink",
          "emoji": "🥤",
          "bgColor": "#FFD700"
          },
          {
          "letter": "K",
          "word": "Kokum Drink",
          "emoji": "🥤",
          "bgColor": "#8B0000"
          },
          {
          "letter": "P",
          "word": "Pomegranate Juice",
          "emoji": "🥤",
          "bgColor": "#DC143C"
          },
          {
          "letter": "O",
          "word": "Orange Juice",
          "emoji": "🥤",
          "bgColor": "#FFA500"
          },
          {
          "letter": "L",
          "word": "Lime Water",
          "emoji": "🥤",
          "bgColor": "#32CD32"
          },
          {
          "letter": "H",
          "word": "Hing Water",
          "emoji": "🥤",
          "bgColor": "#DAA520"
          },
          {
          "letter": "R",
          "word": "Rose Syrup",
          "emoji": "🥤",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "T",
          "word": "Turmeric Milk",
          "emoji": "🥛",
          "bgColor": "#FFD700"
          },
          {
          "letter": "M",
          "word": "Mint Cooler",
          "emoji": "🥤",
          "bgColor": "#98FF98"
          },
          {
          "letter": "I",
          "word": "Iced Tea",
          "emoji": "🧊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "F",
          "word": "Fruit Punch",
          "emoji": "🥤",
          "bgColor": "#FF6347"
          },
          {
          "letter": "V",
          "word": "Vegetable Juice",
          "emoji": "🥤",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "B",
          "word": "Buttermilk",
          "emoji": "🥛",
          "bgColor": "#F0E68C"
          },
          {
          "letter": "S",
          "word": "Sharbat",
          "emoji": "🥤",
          "bgColor": "#FF00FF"
          },
          {
          "letter": "W",
          "word": "Whey Drink",
          "emoji": "🥛",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "C",
          "word": "Coconut Water",
          "emoji": "🥥",
          "bgColor": "#FFFACD"
          },
          {
          "letter": "A",
          "word": "Amla Juice",
          "emoji": "🥤",
          "bgColor": "#7FFF00"
          },
          {
          "letter": "B",
          "word": "Beetroot Juice",
          "emoji": "🥤",
          "bgColor": "#8B0000"
          },
          {
          "letter": "D",
          "word": "Dates Shake",
          "emoji": "🥛",
          "bgColor": "#8B4513"
          },
          {
          "letter": "N",
          "word": "Neem Water",
          "emoji": "🥤",
          "bgColor": "#228B22"
          },
          {
          "letter": "T",
          "word": "Tamarind Drink",
          "emoji": "🥤",
          "bgColor": "#8B4513"
          },
          {
          "letter": "M",
          "word": "Mango Lassi",
          "emoji": "🥛",
          "bgColor": "#FFB347"
          },
          {
          "letter": "S",
          "word": "Spiced Water",
          "emoji": "🥤",
          "bgColor": "#D2691E"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodDrinks3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Drinks & Beverages - Part 3",
          videoId: "food-drinks-3",
          bgGradient: ["#1E88E5","#64B5F6"] as [string, string],
          accentColor: "#1976D2",
          letters: [
          {
          "letter": "C",
          "word": "Coffee",
          "emoji": "☕",
          "bgColor": "#795548"
          },
          {
          "letter": "T",
          "word": "Chai",
          "emoji": "🫖",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "L",
          "word": "Lassi",
          "emoji": "🥛",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "M",
          "word": "Masala Chai",
          "emoji": "🫖",
          "bgColor": "#8B4513"
          },
          {
          "letter": "J",
          "word": "Jaggery Tea",
          "emoji": "🫖",
          "bgColor": "#A0522D"
          },
          {
          "letter": "B",
          "word": "Badam Milk",
          "emoji": "🥛",
          "bgColor": "#DEB887"
          },
          {
          "letter": "S",
          "word": "Sugarcane Juice",
          "emoji": "🥤",
          "bgColor": "#90EE90"
          },
          {
          "letter": "G",
          "word": "Ginger Drink",
          "emoji": "🥤",
          "bgColor": "#FFD700"
          },
          {
          "letter": "K",
          "word": "Kokum Drink",
          "emoji": "🥤",
          "bgColor": "#8B0000"
          },
          {
          "letter": "P",
          "word": "Pomegranate Juice",
          "emoji": "🥤",
          "bgColor": "#DC143C"
          },
          {
          "letter": "O",
          "word": "Orange Juice",
          "emoji": "🥤",
          "bgColor": "#FFA500"
          },
          {
          "letter": "L",
          "word": "Lime Water",
          "emoji": "🥤",
          "bgColor": "#32CD32"
          },
          {
          "letter": "H",
          "word": "Hing Water",
          "emoji": "🥤",
          "bgColor": "#DAA520"
          },
          {
          "letter": "R",
          "word": "Rose Syrup",
          "emoji": "🥤",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "T",
          "word": "Turmeric Milk",
          "emoji": "🥛",
          "bgColor": "#FFD700"
          },
          {
          "letter": "M",
          "word": "Mint Cooler",
          "emoji": "🥤",
          "bgColor": "#98FF98"
          },
          {
          "letter": "I",
          "word": "Iced Tea",
          "emoji": "🧊",
          "bgColor": "#4169E1"
          },
          {
          "letter": "F",
          "word": "Fruit Punch",
          "emoji": "🥤",
          "bgColor": "#FF6347"
          },
          {
          "letter": "V",
          "word": "Vegetable Juice",
          "emoji": "🥤",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "B",
          "word": "Buttermilk",
          "emoji": "🥛",
          "bgColor": "#F0E68C"
          },
          {
          "letter": "S",
          "word": "Sharbat",
          "emoji": "🥤",
          "bgColor": "#FF00FF"
          },
          {
          "letter": "W",
          "word": "Whey Drink",
          "emoji": "🥛",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "C",
          "word": "Coconut Water",
          "emoji": "🥥",
          "bgColor": "#FFFACD"
          },
          {
          "letter": "A",
          "word": "Amla Juice",
          "emoji": "🥤",
          "bgColor": "#7FFF00"
          },
          {
          "letter": "B",
          "word": "Beetroot Juice",
          "emoji": "🥤",
          "bgColor": "#8B0000"
          },
          {
          "letter": "D",
          "word": "Dates Shake",
          "emoji": "🥛",
          "bgColor": "#8B4513"
          },
          {
          "letter": "N",
          "word": "Neem Water",
          "emoji": "🥤",
          "bgColor": "#228B22"
          },
          {
          "letter": "T",
          "word": "Tamarind Drink",
          "emoji": "🥤",
          "bgColor": "#8B4513"
          },
          {
          "letter": "M",
          "word": "Mango Lassi",
          "emoji": "🥛",
          "bgColor": "#FFB347"
          },
          {
          "letter": "S",
          "word": "Spiced Water",
          "emoji": "🥤",
          "bgColor": "#D2691E"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodWorldFood1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Cuisine - Part 1",
          videoId: "food-world-food-1",
          bgGradient: ["#6A1B9A","#E1BEE7"] as [string, string],
          accentColor: "#4A148C",
          letters: [
          {
          "letter": "P",
          "word": "Pizza",
          "emoji": "🍕",
          "bgColor": "#FF6347"
          },
          {
          "letter": "B",
          "word": "Burger",
          "emoji": "🍔",
          "bgColor": "#8B4513"
          },
          {
          "letter": "T",
          "word": "Tacos",
          "emoji": "🌮",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "S",
          "word": "Sushi",
          "emoji": "🍣",
          "bgColor": "#DCDCDC"
          },
          {
          "letter": "P",
          "word": "Pasta",
          "emoji": "🍝",
          "bgColor": "#FFD700"
          },
          {
          "letter": "S",
          "word": "Steak",
          "emoji": "🥩",
          "bgColor": "#8B4513"
          },
          {
          "letter": "F",
          "word": "Falafel",
          "emoji": "🧆",
          "bgColor": "#DAA520"
          },
          {
          "letter": "S",
          "word": "Sandwich",
          "emoji": "🥪",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "G",
          "word": "Gyro",
          "emoji": "🌯",
          "bgColor": "#CD853F"
          },
          {
          "letter": "R",
          "word": "Ramen",
          "emoji": "🍜",
          "bgColor": "#FFD700"
          },
          {
          "letter": "D",
          "word": "Dumplings",
          "emoji": "🥟",
          "bgColor": "#D3D3D3"
          },
          {
          "letter": "K",
          "word": "Kebab",
          "emoji": "🍢",
          "bgColor": "#A0522D"
          },
          {
          "letter": "W",
          "word": "Wonton",
          "emoji": "🥟",
          "bgColor": "#F0F8FF"
          },
          {
          "letter": "C",
          "word": "Croissant",
          "emoji": "🥐",
          "bgColor": "#DAA520"
          },
          {
          "letter": "B",
          "word": "Bagel",
          "emoji": "🥯",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "M",
          "word": "Meatball",
          "emoji": "🍖",
          "bgColor": "#A0522D"
          },
          {
          "letter": "N",
          "word": "Nachos",
          "emoji": "🧆",
          "bgColor": "#FFD700"
          },
          {
          "letter": "P",
          "word": "Pad Thai",
          "emoji": "🍜",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "B",
          "word": "Burritos",
          "emoji": "🌯",
          "bgColor": "#FF6347"
          },
          {
          "letter": "A",
          "word": "Arepas",
          "emoji": "🌮",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "T",
          "word": "Tempura",
          "emoji": "🍤",
          "bgColor": "#FFA500"
          },
          {
          "letter": "S",
          "word": "Spring Rolls",
          "emoji": "🌯",
          "bgColor": "#F0E68C"
          },
          {
          "letter": "F",
          "word": "Fish Tacos",
          "emoji": "🌮",
          "bgColor": "#FFD700"
          },
          {
          "letter": "V",
          "word": "Viand",
          "emoji": "🍲",
          "bgColor": "#FF6347"
          },
          {
          "letter": "M",
          "word": "Momo",
          "emoji": "🥟",
          "bgColor": "#D3D3D3"
          },
          {
          "letter": "H",
          "word": "Hotdog",
          "emoji": "🌭",
          "bgColor": "#A0522D"
          },
          {
          "letter": "S",
          "word": "Schnitzel",
          "emoji": "🍖",
          "bgColor": "#8B4513"
          },
          {
          "letter": "L",
          "word": "Lentil Soup",
          "emoji": "🍲",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "Q",
          "word": "Quesadilla",
          "emoji": "🌮",
          "bgColor": "#FFD700"
          },
          {
          "letter": "O",
          "word": "Oyster",
          "emoji": "🦪",
          "bgColor": "#F5F5DC"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodWorldFood2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Cuisine - Part 2",
          videoId: "food-world-food-2",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [
          {
          "letter": "C",
          "word": "Crepes",
          "emoji": "🥞",
          "bgColor": "#FFD700"
          },
          {
          "letter": "P",
          "word": "Paella",
          "emoji": "🍲",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "R",
          "word": "Risotto",
          "emoji": "🍚",
          "bgColor": "#DAA520"
          },
          {
          "letter": "L",
          "word": "Lasagna",
          "emoji": "🍝",
          "bgColor": "#FF6347"
          },
          {
          "letter": "B",
          "word": "Bratwurst",
          "emoji": "🌭",
          "bgColor": "#8B4513"
          },
          {
          "letter": "M",
          "word": "Moussaka",
          "emoji": "🍲",
          "bgColor": "#A0522D"
          },
          {
          "letter": "T",
          "word": "Tikka Masala",
          "emoji": "🍛",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "S",
          "word": "Schwarma",
          "emoji": "🌯",
          "bgColor": "#D2691E"
          },
          {
          "letter": "C",
          "word": "Chicken Pho",
          "emoji": "🍜",
          "bgColor": "#FFA500"
          },
          {
          "letter": "B",
          "word": "Bibimbap",
          "emoji": "🍚",
          "bgColor": "#FF6347"
          },
          {
          "letter": "K",
          "word": "Korean BBQ",
          "emoji": "🥩",
          "bgColor": "#8B0000"
          },
          {
          "letter": "T",
          "word": "Tom Yum",
          "emoji": "🍲",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "G",
          "word": "Goulash",
          "emoji": "🍲",
          "bgColor": "#A0522D"
          },
          {
          "letter": "B",
          "word": "Borscht",
          "emoji": "🍲",
          "bgColor": "#8B0000"
          },
          {
          "letter": "B",
          "word": "Baklava",
          "emoji": "🍰",
          "bgColor": "#DAA520"
          },
          {
          "letter": "C",
          "word": "Ceviche",
          "emoji": "🍣",
          "bgColor": "#FFA500"
          },
          {
          "letter": "E",
          "word": "Escargot",
          "emoji": "🐌",
          "bgColor": "#8B4513"
          },
          {
          "letter": "F",
          "word": "Foie Gras",
          "emoji": "🍖",
          "bgColor": "#A0522D"
          },
          {
          "letter": "P",
          "word": "Pierogi",
          "emoji": "🥟",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "B",
          "word": "Bouillon",
          "emoji": "🍲",
          "bgColor": "#FFD700"
          },
          {
          "letter": "M",
          "word": "Milanesa",
          "emoji": "🍖",
          "bgColor": "#8B4513"
          },
          {
          "letter": "T",
          "word": "Tandoori",
          "emoji": "🍗",
          "bgColor": "#FF6347"
          },
          {
          "letter": "S",
          "word": "Satay",
          "emoji": "🍢",
          "bgColor": "#8B4513"
          },
          {
          "letter": "V",
          "word": "Vietnamese Rolls",
          "emoji": "🌯",
          "bgColor": "#F0E68C"
          },
          {
          "letter": "T",
          "word": "Thai Curry",
          "emoji": "🍛",
          "bgColor": "#FF6347"
          },
          {
          "letter": "M",
          "word": "Mezze",
          "emoji": "🍲",
          "bgColor": "#DAA520"
          },
          {
          "letter": "T",
          "word": "Tagine",
          "emoji": "🍲",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "C",
          "word": "Couscous",
          "emoji": "🍚",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "J",
          "word": "Jerk Chicken",
          "emoji": "🍗",
          "bgColor": "#FF6347"
          },
          {
          "letter": "M",
          "word": "Mojo Pork",
          "emoji": "🍖",
          "bgColor": "#8B4513"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodWorldFood3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Cuisine - Part 3",
          videoId: "food-world-food-3",
          bgGradient: ["#8E24AA","#F3E5F5"] as [string, string],
          accentColor: "#7B1FA2",
          letters: [
          {
          "letter": "V",
          "word": "Vindaloo",
          "emoji": "🍛",
          "bgColor": "#FF6347"
          },
          {
          "letter": "S",
          "word": "Saag Paneer",
          "emoji": "🍛",
          "bgColor": "#228B22"
          },
          {
          "letter": "R",
          "word": "Rogan Josh",
          "emoji": "🍛",
          "bgColor": "#8B4513"
          },
          {
          "letter": "A",
          "word": "Adobo",
          "emoji": "🍲",
          "bgColor": "#8B0000"
          },
          {
          "letter": "B",
          "word": "Beef Bulgogi",
          "emoji": "🥩",
          "bgColor": "#8B0000"
          },
          {
          "letter": "P",
          "word": "Pho",
          "emoji": "🍜",
          "bgColor": "#FFA500"
          },
          {
          "letter": "B",
          "word": "Bhelpuri",
          "emoji": "🍚",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "M",
          "word": "Momos",
          "emoji": "🥟",
          "bgColor": "#D3D3D3"
          },
          {
          "letter": "S",
          "word": "Sambussa",
          "emoji": "🥟",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "T",
          "word": "Tempeh",
          "emoji": "🍖",
          "bgColor": "#DAA520"
          },
          {
          "letter": "K",
          "word": "Kimbap",
          "emoji": "🍱",
          "bgColor": "#FFD700"
          },
          {
          "letter": "O",
          "word": "Okonomiyaki",
          "emoji": "🥞",
          "bgColor": "#FFD700"
          },
          {
          "letter": "D",
          "word": "Dolma",
          "emoji": "🫓",
          "bgColor": "#228B22"
          },
          {
          "letter": "H",
          "word": "Hummus",
          "emoji": "🫓",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "B",
          "word": "Baba Ganoush",
          "emoji": "🫓",
          "bgColor": "#8B4513"
          },
          {
          "letter": "T",
          "word": "Tabbouleh",
          "emoji": "🥗",
          "bgColor": "#FFD700"
          },
          {
          "letter": "F",
          "word": "Fattoush",
          "emoji": "🥗",
          "bgColor": "#228B22"
          },
          {
          "letter": "S",
          "word": "Shakshuka",
          "emoji": "🍚",
          "bgColor": "#FF6347"
          },
          {
          "letter": "H",
          "word": "Haggis",
          "emoji": "🍖",
          "bgColor": "#8B4513"
          },
          {
          "letter": "B",
          "word": "Bouillabaisse",
          "emoji": "🍲",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "C",
          "word": "Cassoulet",
          "emoji": "🍲",
          "bgColor": "#8B4513"
          },
          {
          "letter": "C",
          "word": "Churro",
          "emoji": "🫓",
          "bgColor": "#DAA520"
          },
          {
          "letter": "T",
          "word": "Tapenade",
          "emoji": "🫒",
          "bgColor": "#228B22"
          },
          {
          "letter": "P",
          "word": "Prosciutto",
          "emoji": "🍖",
          "bgColor": "#A0522D"
          },
          {
          "letter": "P",
          "word": "Polenta",
          "emoji": "🍚",
          "bgColor": "#FFD700"
          },
          {
          "letter": "B",
          "word": "Bouillie",
          "emoji": "🍚",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "M",
          "word": "Mofongo",
          "emoji": "🍌",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Chimichanga",
          "emoji": "🌯",
          "bgColor": "#FF6347"
          },
          {
          "letter": "E",
          "word": "Empanada",
          "emoji": "🥟",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "S",
          "word": "Souvlaki",
          "emoji": "🍢",
          "bgColor": "#8B4513"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodHealthyFood1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Healthy Food - Part 1",
          videoId: "food-healthy-food-1",
          bgGradient: ["#2E7D32","#A5D6A7"] as [string, string],
          accentColor: "#1B5E20",
          letters: [
          {
          "letter": "Q",
          "word": "Quinoa Bowl",
          "emoji": "🍚",
          "bgColor": "#FFD700"
          },
          {
          "letter": "S",
          "word": "Salad",
          "emoji": "🥗",
          "bgColor": "#228B22"
          },
          {
          "letter": "B",
          "word": "Broccoli",
          "emoji": "🥦",
          "bgColor": "#228B22"
          },
          {
          "letter": "S",
          "word": "Spinach",
          "emoji": "🥬",
          "bgColor": "#32CD32"
          },
          {
          "letter": "C",
          "word": "Carrot",
          "emoji": "🥕",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "T",
          "word": "Tofu",
          "emoji": "🍲",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "L",
          "word": "Lentils",
          "emoji": "🍲",
          "bgColor": "#CD853F"
          },
          {
          "letter": "B",
          "word": "Brown Rice",
          "emoji": "🍚",
          "bgColor": "#8B4513"
          },
          {
          "letter": "O",
          "word": "Oats",
          "emoji": "🥣",
          "bgColor": "#DAA520"
          },
          {
          "letter": "G",
          "word": "Granola",
          "emoji": "🥣",
          "bgColor": "#8B4513"
          },
          {
          "letter": "Y",
          "word": "Yogurt",
          "emoji": "🥛",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "N",
          "word": "Nuts",
          "emoji": "🌰",
          "bgColor": "#8B4513"
          },
          {
          "letter": "S",
          "word": "Seeds",
          "emoji": "🌰",
          "bgColor": "#FFD700"
          },
          {
          "letter": "F",
          "word": "Fruit",
          "emoji": "🍎",
          "bgColor": "#FF6347"
          },
          {
          "letter": "B",
          "word": "Berries",
          "emoji": "🫐",
          "bgColor": "#8B008B"
          },
          {
          "letter": "A",
          "word": "Avocado",
          "emoji": "🥑",
          "bgColor": "#228B22"
          },
          {
          "letter": "F",
          "word": "Fish",
          "emoji": "🐟",
          "bgColor": "#4169E1"
          },
          {
          "letter": "C",
          "word": "Chicken Breast",
          "emoji": "🍗",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "E",
          "word": "Egg",
          "emoji": "🥚",
          "bgColor": "#FFD700"
          },
          {
          "letter": "B",
          "word": "Beans",
          "emoji": "🫘",
          "bgColor": "#8B4513"
          },
          {
          "letter": "C",
          "word": "Cucumber",
          "emoji": "🥒",
          "bgColor": "#228B22"
          },
          {
          "letter": "T",
          "word": "Tomato",
          "emoji": "🍅",
          "bgColor": "#FF6347"
          },
          {
          "letter": "B",
          "word": "Bell Pepper",
          "emoji": "🫑",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "K",
          "word": "Kale",
          "emoji": "🥬",
          "bgColor": "#228B22"
          },
          {
          "letter": "P",
          "word": "Pumpkin",
          "emoji": "🎃",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "S",
          "word": "Sweet Potato",
          "emoji": "🥔",
          "bgColor": "#CD853F"
          },
          {
          "letter": "W",
          "word": "Watermelon",
          "emoji": "🍉",
          "bgColor": "#FF6347"
          },
          {
          "letter": "A",
          "word": "Apple",
          "emoji": "🍎",
          "bgColor": "#228B22"
          },
          {
          "letter": "B",
          "word": "Banana",
          "emoji": "🍌",
          "bgColor": "#FFD700"
          },
          {
          "letter": "O",
          "word": "Olive Oil",
          "emoji": "🫒",
          "bgColor": "#228B22"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodHealthyFood2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Healthy Food - Part 2",
          videoId: "food-healthy-food-2",
          bgGradient: ["#388E3C","#C8E6C9"] as [string, string],
          accentColor: "#2E7D32",
          letters: [
          {
          "letter": "W",
          "word": "Whole Wheat",
          "emoji": "🌾",
          "bgColor": "#8B4513"
          },
          {
          "letter": "M",
          "word": "Millets",
          "emoji": "🌾",
          "bgColor": "#DAA520"
          },
          {
          "letter": "C",
          "word": "Chia Seeds",
          "emoji": "🌰",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "F",
          "word": "Flax Seeds",
          "emoji": "🌰",
          "bgColor": "#8B4513"
          },
          {
          "letter": "H",
          "word": "Hemp Seeds",
          "emoji": "🌰",
          "bgColor": "#FFD700"
          },
          {
          "letter": "A",
          "word": "Almonds",
          "emoji": "🌰",
          "bgColor": "#8B4513"
          },
          {
          "letter": "W",
          "word": "Walnuts",
          "emoji": "🌰",
          "bgColor": "#8B4513"
          },
          {
          "letter": "C",
          "word": "Cashews",
          "emoji": "🌰",
          "bgColor": "#DAA520"
          },
          {
          "letter": "P",
          "word": "Pumpkin Seeds",
          "emoji": "🌰",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "S",
          "word": "Sunflower Seeds",
          "emoji": "🌻",
          "bgColor": "#FFD700"
          },
          {
          "letter": "B",
          "word": "Beet",
          "emoji": "🥒",
          "bgColor": "#8B0000"
          },
          {
          "letter": "C",
          "word": "Cabbage",
          "emoji": "🥬",
          "bgColor": "#228B22"
          },
          {
          "letter": "G",
          "word": "Garlic",
          "emoji": "🧄",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "O",
          "word": "Onion",
          "emoji": "🧅",
          "bgColor": "#FFD700"
          },
          {
          "letter": "G",
          "word": "Ginger",
          "emoji": "🌶️",
          "bgColor": "#8B4513"
          },
          {
          "letter": "T",
          "word": "Turmeric",
          "emoji": "🌿",
          "bgColor": "#FFD700"
          },
          {
          "letter": "L",
          "word": "Lemon",
          "emoji": "🍋",
          "bgColor": "#FFD700"
          },
          {
          "letter": "L",
          "word": "Lime",
          "emoji": "🍋",
          "bgColor": "#32CD32"
          },
          {
          "letter": "H",
          "word": "Honey",
          "emoji": "🍯",
          "bgColor": "#FFD700"
          },
          {
          "letter": "G",
          "word": "Green Tea",
          "emoji": "🫖",
          "bgColor": "#90EE90"
          },
          {
          "letter": "B",
          "word": "Barley",
          "emoji": "🌾",
          "bgColor": "#8B4513"
          },
          {
          "letter": "A",
          "word": "Amaranth",
          "emoji": "🌾",
          "bgColor": "#8B4513"
          },
          {
          "letter": "K",
          "word": "Kombucha",
          "emoji": "🥤",
          "bgColor": "#32CD32"
          },
          {
          "letter": "T",
          "word": "Tempeh",
          "emoji": "🍖",
          "bgColor": "#8B4513"
          },
          {
          "letter": "S",
          "word": "Sprouts",
          "emoji": "🌱",
          "bgColor": "#228B22"
          },
          {
          "letter": "M",
          "word": "Mushroom",
          "emoji": "🍄",
          "bgColor": "#8B4513"
          },
          {
          "letter": "B",
          "word": "Broth",
          "emoji": "🍲",
          "bgColor": "#DAA520"
          },
          {
          "letter": "H",
          "word": "Herbs",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "V",
          "word": "Vegetables",
          "emoji": "🥕",
          "bgColor": "#228B22"
          },
          {
          "letter": "P",
          "word": "Protein Powder",
          "emoji": "🥤",
          "bgColor": "#F5F5DC"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodHealthyFood3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Healthy Food - Part 3",
          videoId: "food-healthy-food-3",
          bgGradient: ["#43A047","#E8F5E9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [
          {
          "letter": "B",
          "word": "Barley Water",
          "emoji": "🥤",
          "bgColor": "#DAA520"
          },
          {
          "letter": "J",
          "word": "Juice",
          "emoji": "🥤",
          "bgColor": "#FF6347"
          },
          {
          "letter": "S",
          "word": "Smoothie",
          "emoji": "🥤",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "S",
          "word": "Soup",
          "emoji": "🍲",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "S",
          "word": "Stew",
          "emoji": "🍲",
          "bgColor": "#8B4513"
          },
          {
          "letter": "R",
          "word": "Roasted Vegetables",
          "emoji": "🥘",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "G",
          "word": "Grilled Chicken",
          "emoji": "🍗",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "B",
          "word": "Baked Fish",
          "emoji": "🐟",
          "bgColor": "#FFD700"
          },
          {
          "letter": "S",
          "word": "Steamed Broccoli",
          "emoji": "🥦",
          "bgColor": "#228B22"
          },
          {
          "letter": "S",
          "word": "Sauteed Spinach",
          "emoji": "🥬",
          "bgColor": "#32CD32"
          },
          {
          "letter": "M",
          "word": "Miso Soup",
          "emoji": "🍲",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "T",
          "word": "Tomato Juice",
          "emoji": "🍅",
          "bgColor": "#FF6347"
          },
          {
          "letter": "B",
          "word": "Beet Juice",
          "emoji": "🥒",
          "bgColor": "#8B0000"
          },
          {
          "letter": "C",
          "word": "Carrot Juice",
          "emoji": "🥕",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "W",
          "word": "Wheat Grass",
          "emoji": "🌱",
          "bgColor": "#228B22"
          },
          {
          "letter": "S",
          "word": "Spirulina",
          "emoji": "🌱",
          "bgColor": "#228B22"
          },
          {
          "letter": "A",
          "word": "Aloe Vera",
          "emoji": "🌱",
          "bgColor": "#32CD32"
          },
          {
          "letter": "M",
          "word": "Moringa",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "N",
          "word": "Neem Leaves",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "T",
          "word": "Tulsi Tea",
          "emoji": "🫖",
          "bgColor": "#228B22"
          },
          {
          "letter": "G",
          "word": "Ginseng Tea",
          "emoji": "🫖",
          "bgColor": "#8B4513"
          },
          {
          "letter": "A",
          "word": "Ashwagandha",
          "emoji": "🌿",
          "bgColor": "#DAA520"
          },
          {
          "letter": "T",
          "word": "Triphala",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "S",
          "word": "Saffron",
          "emoji": "🌿",
          "bgColor": "#FF6347"
          },
          {
          "letter": "C",
          "word": "Cardamom",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "C",
          "word": "Clove",
          "emoji": "🌿",
          "bgColor": "#8B0000"
          },
          {
          "letter": "C",
          "word": "Cinnamon",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "B",
          "word": "Black Pepper",
          "emoji": "🌿",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "C",
          "word": "Cumin",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "C",
          "word": "Coriander",
          "emoji": "🌿",
          "bgColor": "#228B22"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodSpices1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 1",
          videoId: "food-spices-1",
          bgGradient: ["#BF360C","#FFAB91"] as [string, string],
          accentColor: "#D84315",
          letters: [
          {
          "letter": "T",
          "word": "Turmeric",
          "emoji": "🌿",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Cumin",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "C",
          "word": "Coriander",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "C",
          "word": "Cardamom",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "C",
          "word": "Cinnamon",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "C",
          "word": "Clove",
          "emoji": "🌿",
          "bgColor": "#8B0000"
          },
          {
          "letter": "P",
          "word": "Pepper",
          "emoji": "🌿",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "C",
          "word": "Chili Powder",
          "emoji": "🌶️",
          "bgColor": "#FF6347"
          },
          {
          "letter": "M",
          "word": "Mustard Seeds",
          "emoji": "🌿",
          "bgColor": "#FFD700"
          },
          {
          "letter": "F",
          "word": "Fenugreek",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "A",
          "word": "Asafetida",
          "emoji": "🌿",
          "bgColor": "#DAA520"
          },
          {
          "letter": "B",
          "word": "Bay Leaves",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "S",
          "word": "Star Anise",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "N",
          "word": "Nutmeg",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "M",
          "word": "Mace",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "S",
          "word": "Saffron",
          "emoji": "🌿",
          "bgColor": "#FF6347"
          },
          {
          "letter": "G",
          "word": "Garlic",
          "emoji": "🧄",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "G",
          "word": "Ginger",
          "emoji": "🧄",
          "bgColor": "#8B4513"
          },
          {
          "letter": "O",
          "word": "Onion Seeds",
          "emoji": "🌿",
          "bgColor": "#FFD700"
          },
          {
          "letter": "P",
          "word": "Poppy Seeds",
          "emoji": "🌰",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "S",
          "word": "Sesame Seeds",
          "emoji": "🌰",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "S",
          "word": "Sunflower Seeds",
          "emoji": "🌻",
          "bgColor": "#FFD700"
          },
          {
          "letter": "P",
          "word": "Peppermint",
          "emoji": "🌿",
          "bgColor": "#90EE90"
          },
          {
          "letter": "B",
          "word": "Basil",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "O",
          "word": "Oregano",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "T",
          "word": "Thyme",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "R",
          "word": "Rosemary",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "S",
          "word": "Sage",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "D",
          "word": "Dill",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "C",
          "word": "Cilantro",
          "emoji": "🌿",
          "bgColor": "#228B22"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodSpices2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 2",
          videoId: "food-spices-2",
          bgGradient: ["#D84315","#FF8A65"] as [string, string],
          accentColor: "#BF360C",
          letters: [
          {
          "letter": "A",
          "word": "Ajwain",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "B",
          "word": "Black Cumin",
          "emoji": "🌰",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "C",
          "word": "Carom Seeds",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "D",
          "word": "Dry Ginger",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "E",
          "word": "Elderflower",
          "emoji": "🌿",
          "bgColor": "#FFD700"
          },
          {
          "letter": "F",
          "word": "Fennel",
          "emoji": "🌿",
          "bgColor": "#FFD700"
          },
          {
          "letter": "G",
          "word": "Green Cardamom",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "H",
          "word": "Hibiscus",
          "emoji": "🌺",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "J",
          "word": "Jasmine",
          "emoji": "🌿",
          "bgColor": "#FFD700"
          },
          {
          "letter": "K",
          "word": "Kasuri Methi",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "L",
          "word": "Lavender",
          "emoji": "🌿",
          "bgColor": "#9370DB"
          },
          {
          "letter": "L",
          "word": "Long Pepper",
          "emoji": "🌿",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "M",
          "word": "Mahlab",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "N",
          "word": "Nigella Seeds",
          "emoji": "🌰",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "P",
          "word": "Pomegranate Seeds",
          "emoji": "🌿",
          "bgColor": "#FF6347"
          },
          {
          "letter": "R",
          "word": "Red Chili",
          "emoji": "🌶️",
          "bgColor": "#FF6347"
          },
          {
          "letter": "S",
          "word": "Sichuan Pepper",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "S",
          "word": "Sumac",
          "emoji": "🌿",
          "bgColor": "#FF6347"
          },
          {
          "letter": "T",
          "word": "Tamarind",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "V",
          "word": "Vanilla",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "W",
          "word": "White Pepper",
          "emoji": "🌿",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "Z",
          "word": "Zataar",
          "emoji": "🌿",
          "bgColor": "#FFD700"
          },
          {
          "letter": "A",
          "word": "Allspice",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "A",
          "word": "Amchur",
          "emoji": "🌿",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "A",
          "word": "Ancho Chili",
          "emoji": "🌶️",
          "bgColor": "#8B0000"
          },
          {
          "letter": "B",
          "word": "Blue Poppy",
          "emoji": "🌰",
          "bgColor": "#4169E1"
          },
          {
          "letter": "C",
          "word": "Chaat Masala",
          "emoji": "🌿",
          "bgColor": "#FFD700"
          },
          {
          "letter": "D",
          "word": "Dried Mint",
          "emoji": "🌿",
          "bgColor": "#90EE90"
          },
          {
          "letter": "F",
          "word": "Five Spice",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "G",
          "word": "Garam Masala",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodSpices3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Spices & Herbs - Part 3",
          videoId: "food-spices-3",
          bgGradient: ["#E64A19","#FFCCBC"] as [string, string],
          accentColor: "#D84315",
          letters: [
          {
          "letter": "H",
          "word": "Hing (Asafetida)",
          "emoji": "🌿",
          "bgColor": "#DAA520"
          },
          {
          "letter": "H",
          "word": "Hungarian Paprika",
          "emoji": "🌿",
          "bgColor": "#FF6347"
          },
          {
          "letter": "I",
          "word": "Indian Bay Leaf",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "J",
          "word": "Juniper Berries",
          "emoji": "🌿",
          "bgColor": "#8B008B"
          },
          {
          "letter": "K",
          "word": "Kaffir Lime",
          "emoji": "🌿",
          "bgColor": "#32CD32"
          },
          {
          "letter": "L",
          "word": "Lemongrass",
          "emoji": "🌿",
          "bgColor": "#FFD700"
          },
          {
          "letter": "L",
          "word": "Liquorice Root",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "M",
          "word": "Marjoram",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "M",
          "word": "Mint Leaves",
          "emoji": "🌿",
          "bgColor": "#90EE90"
          },
          {
          "letter": "M",
          "word": "Musk Melon Seeds",
          "emoji": "🌰",
          "bgColor": "#FFD700"
          },
          {
          "letter": "N",
          "word": "Nepalese Pepper",
          "emoji": "🌿",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "O",
          "word": "Oakmoss",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "P",
          "word": "Panch Phoron",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "P",
          "word": "Persian Sumac",
          "emoji": "🌿",
          "bgColor": "#FF6347"
          },
          {
          "letter": "P",
          "word": "Pink Pepper",
          "emoji": "🌿",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "P",
          "word": "Pomegranate",
          "emoji": "🌿",
          "bgColor": "#FF6347"
          },
          {
          "letter": "P",
          "word": "Propolis",
          "emoji": "🌿",
          "bgColor": "#FFD700"
          },
          {
          "letter": "R",
          "word": "Roasted Cumin",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "S",
          "word": "Smoked Paprika",
          "emoji": "🌿",
          "bgColor": "#FF6347"
          },
          {
          "letter": "S",
          "word": "Star Anise",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "T",
          "word": "Tonka Bean",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "T",
          "word": "Turmeric Root",
          "emoji": "🌿",
          "bgColor": "#FFD700"
          },
          {
          "letter": "U",
          "word": "Urfa Biber",
          "emoji": "🌶️",
          "bgColor": "#8B0000"
          },
          {
          "letter": "V",
          "word": "Voatsiperifery",
          "emoji": "🌿",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "W",
          "word": "Wasabi",
          "emoji": "🌿",
          "bgColor": "#228B22"
          },
          {
          "letter": "X",
          "word": "Xanthan Gum",
          "emoji": "🌿",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "Y",
          "word": "Yellow Mustard",
          "emoji": "🌿",
          "bgColor": "#FFD700"
          },
          {
          "letter": "Z",
          "word": "Zedoary",
          "emoji": "🌿",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Cassia Bark",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          },
          {
          "letter": "C",
          "word": "Cumin Powder",
          "emoji": "🌿",
          "bgColor": "#8B4513"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodFestivalFood1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Festival Food - Part 1",
          videoId: "food-festival-food-1",
          bgGradient: ["#FF6F00","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [
          {
          "letter": "G",
          "word": "Gulab Jamun",
          "emoji": "🍩",
          "bgColor": "#8B0000"
          },
          {
          "letter": "J",
          "word": "Jalebi",
          "emoji": "🍯",
          "bgColor": "#FFD700"
          },
          {
          "letter": "K",
          "word": "Kheer",
          "emoji": "🍚",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "L",
          "word": "Laddoo",
          "emoji": "🍩",
          "bgColor": "#DAA520"
          },
          {
          "letter": "B",
          "word": "Barfi",
          "emoji": "🍫",
          "bgColor": "#8B4513"
          },
          {
          "letter": "R",
          "word": "Rasgulla",
          "emoji": "🍩",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "P",
          "word": "Payasam",
          "emoji": "🍚",
          "bgColor": "#FFD700"
          },
          {
          "letter": "P",
          "word": "Peda",
          "emoji": "🍯",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "M",
          "word": "Modak",
          "emoji": "🥟",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "C",
          "word": "Chakli",
          "emoji": "🥨",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "B",
          "word": "Balushahi",
          "emoji": "🍪",
          "bgColor": "#DAA520"
          },
          {
          "letter": "A",
          "word": "Aloo Halwa",
          "emoji": "🥔",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "G",
          "word": "Gajar Halwa",
          "emoji": "🥕",
          "bgColor": "#FF6347"
          },
          {
          "letter": "M",
          "word": "Malpua",
          "emoji": "🥞",
          "bgColor": "#FFD700"
          },
          {
          "letter": "D",
          "word": "Dhokla",
          "emoji": "🍰",
          "bgColor": "#FFD700"
          },
          {
          "letter": "I",
          "word": "Imarti",
          "emoji": "🍯",
          "bgColor": "#FFD700"
          },
          {
          "letter": "M",
          "word": "Mysore Pak",
          "emoji": "🍫",
          "bgColor": "#FFD700"
          },
          {
          "letter": "A",
          "word": "Amirtham",
          "emoji": "🍯",
          "bgColor": "#FFD700"
          },
          {
          "letter": "P",
          "word": "Puree",
          "emoji": "🍚",
          "bgColor": "#FFD700"
          },
          {
          "letter": "H",
          "word": "Halwa",
          "emoji": "🍯",
          "bgColor": "#8B4513"
          },
          {
          "letter": "P",
          "word": "Puri",
          "emoji": "🍚",
          "bgColor": "#FFD700"
          },
          {
          "letter": "B",
          "word": "Bhelpuri",
          "emoji": "🍚",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "P",
          "word": "Papad",
          "emoji": "🫓",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "P",
          "word": "Pickle",
          "emoji": "🥒",
          "bgColor": "#FFD700"
          },
          {
          "letter": "M",
          "word": "Milk Dessert",
          "emoji": "🍯",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "R",
          "word": "Rice Pudding",
          "emoji": "🍚",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "S",
          "word": "Shrikhand",
          "emoji": "🍯",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "P",
          "word": "Pongal",
          "emoji": "🍚",
          "bgColor": "#FFD700"
          },
          {
          "letter": "B",
          "word": "Biryani",
          "emoji": "🍚",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "Sweet Rice",
          "emoji": "🍚",
          "bgColor": "#FFD700"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodFestivalFood2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Festival Food - Part 2",
          videoId: "food-festival-food-2",
          bgGradient: ["#FF8F00","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [
          {
          "letter": "K",
          "word": "Khichdi",
          "emoji": "🍚",
          "bgColor": "#FFD700"
          },
          {
          "letter": "S",
          "word": "Samosa",
          "emoji": "🥟",
          "bgColor": "#FF9800"
          },
          {
          "letter": "M",
          "word": "Matri",
          "emoji": "🍪",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "N",
          "word": "Namak Pare",
          "emoji": "🍪",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "B",
          "word": "Boondi Laddu",
          "emoji": "🍩",
          "bgColor": "#FFD700"
          },
          {
          "letter": "M",
          "word": "Mohan Bhog",
          "emoji": "🍯",
          "bgColor": "#FFD700"
          },
          {
          "letter": "R",
          "word": "Roat",
          "emoji": "🍚",
          "bgColor": "#FFD700"
          },
          {
          "letter": "P",
          "word": "Prashad",
          "emoji": "🍯",
          "bgColor": "#FFD700"
          },
          {
          "letter": "S",
          "word": "Sabudana",
          "emoji": "🍚",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "S",
          "word": "Semolina Halwa",
          "emoji": "🍯",
          "bgColor": "#FFD700"
          },
          {
          "letter": "M",
          "word": "Mithhai",
          "emoji": "🍫",
          "bgColor": "#8B4513"
          },
          {
          "letter": "D",
          "word": "Diwali Sweets",
          "emoji": "🍰",
          "bgColor": "#FFD700"
          },
          {
          "letter": "H",
          "word": "Holi Colors",
          "emoji": "🎨",
          "bgColor": "#FF69B4"
          },
          {
          "letter": "P",
          "word": "Puri Sabzi",
          "emoji": "🍚",
          "bgColor": "#228B22"
          },
          {
          "letter": "R",
          "word": "Rajasthani Bati",
          "emoji": "🍞",
          "bgColor": "#8B4513"
          },
          {
          "letter": "G",
          "word": "Gujarat Fafda",
          "emoji": "🍯",
          "bgColor": "#FFD700"
          },
          {
          "letter": "U",
          "word": "Undhiyu",
          "emoji": "🥘",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "D",
          "word": "Dal",
          "emoji": "🍲",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "V",
          "word": "Vegetable Curry",
          "emoji": "🍛",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "R",
          "word": "Raita",
          "emoji": "🥛",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "A",
          "word": "Achaar",
          "emoji": "🥒",
          "bgColor": "#228B22"
          },
          {
          "letter": "C",
          "word": "Chutney",
          "emoji": "🫓",
          "bgColor": "#228B22"
          },
          {
          "letter": "P",
          "word": "Pachadi",
          "emoji": "🥒",
          "bgColor": "#FF6347"
          },
          {
          "letter": "S",
          "word": "Sattu",
          "emoji": "🌾",
          "bgColor": "#8B4513"
          },
          {
          "letter": "B",
          "word": "Baked Items",
          "emoji": "🍞",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "F",
          "word": "Festival Feast",
          "emoji": "🍱",
          "bgColor": "#FFD700"
          },
          {
          "letter": "L",
          "word": "Lemon Rice",
          "emoji": "🍚",
          "bgColor": "#FFD700"
          },
          {
          "letter": "T",
          "word": "Tamarind Rice",
          "emoji": "🍚",
          "bgColor": "#8B4513"
          },
          {
          "letter": "C",
          "word": "Coconut Rice",
          "emoji": "🍚",
          "bgColor": "#FFFACD"
          },
          {
          "letter": "B",
          "word": "Bisi Bele Bath",
          "emoji": "🍚",
          "bgColor": "#FF8C00"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="FoodFestivalFood3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Festival Food - Part 3",
          videoId: "food-festival-food-3",
          bgGradient: ["#FFA000","#FFECB3"] as [string, string],
          accentColor: "#FF8F00",
          letters: [
          {
          "letter": "M",
          "word": "Mango Rice",
          "emoji": "🍚",
          "bgColor": "#FFD700"
          },
          {
          "letter": "B",
          "word": "Beetroot Rice",
          "emoji": "🍚",
          "bgColor": "#8B0000"
          },
          {
          "letter": "C",
          "word": "Carrot Rice",
          "emoji": "🍚",
          "bgColor": "#FF8C00"
          },
          {
          "letter": "P",
          "word": "Peas Rice",
          "emoji": "🍚",
          "bgColor": "#228B22"
          },
          {
          "letter": "J",
          "word": "Jeera Rice",
          "emoji": "🍚",
          "bgColor": "#FFD700"
          },
          {
          "letter": "S",
          "word": "Saffron Rice",
          "emoji": "🍚",
          "bgColor": "#FFD700"
          },
          {
          "letter": "C",
          "word": "Cumin Rice",
          "emoji": "🍚",
          "bgColor": "#8B4513"
          },
          {
          "letter": "F",
          "word": "Fried Rice",
          "emoji": "🍚",
          "bgColor": "#FFD700"
          },
          {
          "letter": "M",
          "word": "Mint Rice",
          "emoji": "🍚",
          "bgColor": "#90EE90"
          },
          {
          "letter": "P",
          "word": "Plain Rice",
          "emoji": "🍚",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "B",
          "word": "Butter Rice",
          "emoji": "🍚",
          "bgColor": "#FFD700"
          },
          {
          "letter": "G",
          "word": "Ghee Rice",
          "emoji": "🍚",
          "bgColor": "#FFD700"
          },
          {
          "letter": "O",
          "word": "Oily Rice",
          "emoji": "🍚",
          "bgColor": "#FFD700"
          },
          {
          "letter": "S",
          "word": "Steamed Rice",
          "emoji": "🍚",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "R",
          "word": "Roasted Rice",
          "emoji": "🍚",
          "bgColor": "#8B4513"
          },
          {
          "letter": "P",
          "word": "Parboiled Rice",
          "emoji": "🍚",
          "bgColor": "#CD853F"
          },
          {
          "letter": "W",
          "word": "White Rice",
          "emoji": "🍚",
          "bgColor": "#F5F5DC"
          },
          {
          "letter": "B",
          "word": "Brown Rice",
          "emoji": "🍚",
          "bgColor": "#8B4513"
          },
          {
          "letter": "R",
          "word": "Red Rice",
          "emoji": "🍚",
          "bgColor": "#FF6347"
          },
          {
          "letter": "B",
          "word": "Black Rice",
          "emoji": "🍚",
          "bgColor": "#2F4F4F"
          },
          {
          "letter": "W",
          "word": "Wild Rice",
          "emoji": "🍚",
          "bgColor": "#8B4513"
          },
          {
          "letter": "A",
          "word": "Arborio Rice",
          "emoji": "🍚",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "B",
          "word": "Basmati Rice",
          "emoji": "🍚",
          "bgColor": "#F5DEB3"
          },
          {
          "letter": "J",
          "word": "Jasmine Rice",
          "emoji": "🍚",
          "bgColor": "#FFFACD"
          },
          {
          "letter": "A",
          "word": "Arborio Risotto",
          "emoji": "🍚",
          "bgColor": "#DAA520"
          },
          {
          "letter": "C",
          "word": "Couscous",
          "emoji": "🍚",
          "bgColor": "#D2B48C"
          },
          {
          "letter": "M",
          "word": "Millet",
          "emoji": "🍚",
          "bgColor": "#DAA520"
          },
          {
          "letter": "Q",
          "word": "Quinoa",
          "emoji": "🍚",
          "bgColor": "#FFD700"
          },
          {
          "letter": "F",
          "word": "Farro",
          "emoji": "🍚",
          "bgColor": "#8B4513"
          },
          {
          "letter": "O",
          "word": "Oats Rice",
          "emoji": "🍚",
          "bgColor": "#DAA520"
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
