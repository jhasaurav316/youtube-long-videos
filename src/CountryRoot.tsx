import "./index.css";
import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";
import React from "react";

export const CountryRemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CountriesAsianCountries1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Asian Countries - Part 1",
          videoId: "countries-asian-countries-1",
          bgGradient: ["#FF6F00","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          },
          {
          "letter": "C",
          "word": "China",
          "emoji": "🇨🇳",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "J",
          "word": "Japan",
          "emoji": "🇯🇵",
          "bgColor": "#E91E63"
          },
          {
          "letter": "S",
          "word": "South Korea",
          "emoji": "🇰🇷",
          "bgColor": "#1565C0"
          },
          {
          "letter": "T",
          "word": "Thailand",
          "emoji": "🇹🇭",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "V",
          "word": "Vietnam",
          "emoji": "🇻🇳",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Malaysia",
          "emoji": "🇲🇾",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "I",
          "word": "Indonesia",
          "emoji": "🇮🇩",
          "bgColor": "#C62828"
          },
          {
          "letter": "P",
          "word": "Philippines",
          "emoji": "🇵🇭",
          "bgColor": "#1565C0"
          },
          {
          "letter": "S",
          "word": "Singapore",
          "emoji": "🇸🇬",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Bangladesh",
          "emoji": "🇧🇩",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "P",
          "word": "Pakistan",
          "emoji": "🇵🇰",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Sri Lanka",
          "emoji": "🇱🇰",
          "bgColor": "#827717"
          },
          {
          "letter": "N",
          "word": "Nepal",
          "emoji": "🇳🇵",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "M",
          "word": "Myanmar",
          "emoji": "🇲🇲",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "Cambodia",
          "emoji": "🇰🇭",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "L",
          "word": "Laos",
          "emoji": "🇱🇦",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Bhutan",
          "emoji": "🇧🇹",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "M",
          "word": "Maldives",
          "emoji": "🇲🇻",
          "bgColor": "#1565C0"
          },
          {
          "letter": "A",
          "word": "Afghanistan",
          "emoji": "🇦🇫",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "K",
          "word": "Kazakhstan",
          "emoji": "🇰🇿",
          "bgColor": "#1565C0"
          },
          {
          "letter": "U",
          "word": "Uzbekistan",
          "emoji": "🇺🇿",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "T",
          "word": "Turkmenistan",
          "emoji": "🇹🇲",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "K",
          "word": "Kyrgyzstan",
          "emoji": "🇰🇬",
          "bgColor": "#C62828"
          },
          {
          "letter": "T",
          "word": "Tajikistan",
          "emoji": "🇹🇯",
          "bgColor": "#33691E"
          },
          {
          "letter": "H",
          "word": "Hong Kong",
          "emoji": "🇭🇰",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Macau",
          "emoji": "🇲🇴",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "T",
          "word": "Taiwan",
          "emoji": "🇹🇼",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Mongolia",
          "emoji": "🇲🇳",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "B",
          "word": "Brunei",
          "emoji": "🇧🇳",
          "bgColor": "#FBC02D"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesAsianCountries2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Asian Countries - Part 2",
          videoId: "countries-asian-countries-2",
          bgGradient: ["#6A1B9A","#E1BEE7"] as [string, string],
          accentColor: "#4A148C",
          letters: [
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          },
          {
          "letter": "U",
          "word": "UAE",
          "emoji": "🇦🇪",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "S",
          "word": "Saudi Arabia",
          "emoji": "🇸🇦",
          "bgColor": "#33691E"
          },
          {
          "letter": "Q",
          "word": "Qatar",
          "emoji": "🇶🇦",
          "bgColor": "#827717"
          },
          {
          "letter": "O",
          "word": "Oman",
          "emoji": "🇴🇲",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "K",
          "word": "Kuwait",
          "emoji": "🇰🇼",
          "bgColor": "#33691E"
          },
          {
          "letter": "I",
          "word": "Iran",
          "emoji": "🇮🇷",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "I",
          "word": "Iraq",
          "emoji": "🇮🇶",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "S",
          "word": "Syria",
          "emoji": "🇸🇾",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "L",
          "word": "Lebanon",
          "emoji": "🇱🇧",
          "bgColor": "#33691E"
          },
          {
          "letter": "J",
          "word": "Jordan",
          "emoji": "🇯🇴",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "I",
          "word": "Israel",
          "emoji": "🇮🇱",
          "bgColor": "#1565C0"
          },
          {
          "letter": "P",
          "word": "Palestine",
          "emoji": "🇵🇸",
          "bgColor": "#33691E"
          },
          {
          "letter": "T",
          "word": "Turkey",
          "emoji": "🇹🇷",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "G",
          "word": "Georgia",
          "emoji": "🇬🇪",
          "bgColor": "#1565C0"
          },
          {
          "letter": "A",
          "word": "Armenia",
          "emoji": "🇦🇲",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "A",
          "word": "Azerbaijan",
          "emoji": "🇦🇿",
          "bgColor": "#33691E"
          },
          {
          "letter": "Y",
          "word": "Yemen",
          "emoji": "🇾🇪",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Bahrain",
          "emoji": "🇧🇭",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "P",
          "word": "Palestine",
          "emoji": "🇵🇸",
          "bgColor": "#33691E"
          },
          {
          "letter": "N",
          "word": "North Korea",
          "emoji": "🇰🇵",
          "bgColor": "#1565C0"
          },
          {
          "letter": "M",
          "word": "Malaysia",
          "emoji": "🇲🇾",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "Singapore",
          "emoji": "🇸🇬",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Bangladesh",
          "emoji": "🇧🇩",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "P",
          "word": "Pakistan",
          "emoji": "🇵🇰",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Sri Lanka",
          "emoji": "🇱🇰",
          "bgColor": "#827717"
          },
          {
          "letter": "N",
          "word": "Nepal",
          "emoji": "🇳🇵",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          },
          {
          "letter": "B",
          "word": "Bhutan",
          "emoji": "🇧🇹",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "M",
          "word": "Maldives",
          "emoji": "🇲🇻",
          "bgColor": "#1565C0"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesAsianCountries3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Asian Countries - Part 3",
          videoId: "countries-asian-countries-3",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [
          {
          "letter": "C",
          "word": "Cambodia",
          "emoji": "🇰🇭",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "L",
          "word": "Laos",
          "emoji": "🇱🇦",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "V",
          "word": "Vietnam",
          "emoji": "🇻🇳",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "T",
          "word": "Thailand",
          "emoji": "🇹🇭",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "M",
          "word": "Myanmar",
          "emoji": "🇲🇲",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          },
          {
          "letter": "P",
          "word": "Philippines",
          "emoji": "🇵🇭",
          "bgColor": "#1565C0"
          },
          {
          "letter": "I",
          "word": "Indonesia",
          "emoji": "🇮🇩",
          "bgColor": "#C62828"
          },
          {
          "letter": "J",
          "word": "Japan",
          "emoji": "🇯🇵",
          "bgColor": "#E91E63"
          },
          {
          "letter": "S",
          "word": "South Korea",
          "emoji": "🇰🇷",
          "bgColor": "#1565C0"
          },
          {
          "letter": "C",
          "word": "China",
          "emoji": "🇨🇳",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Mongolia",
          "emoji": "🇲🇳",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "H",
          "word": "Hong Kong",
          "emoji": "🇭🇰",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "T",
          "word": "Taiwan",
          "emoji": "🇹🇼",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Macau",
          "emoji": "🇲🇴",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "K",
          "word": "Kazakhstan",
          "emoji": "🇰🇿",
          "bgColor": "#1565C0"
          },
          {
          "letter": "U",
          "word": "Uzbekistan",
          "emoji": "🇺🇿",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "T",
          "word": "Turkmenistan",
          "emoji": "🇹🇲",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "K",
          "word": "Kyrgyzstan",
          "emoji": "🇰🇬",
          "bgColor": "#C62828"
          },
          {
          "letter": "T",
          "word": "Tajikistan",
          "emoji": "🇹🇯",
          "bgColor": "#33691E"
          },
          {
          "letter": "A",
          "word": "Afghanistan",
          "emoji": "🇦🇫",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "B",
          "word": "Brunei",
          "emoji": "🇧🇳",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "T",
          "word": "Timor-Leste",
          "emoji": "🇹🇱",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Sri Lanka",
          "emoji": "🇱🇰",
          "bgColor": "#827717"
          },
          {
          "letter": "N",
          "word": "Nepal",
          "emoji": "🇳🇵",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "B",
          "word": "Bhutan",
          "emoji": "🇧🇹",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "M",
          "word": "Maldives",
          "emoji": "🇲🇻",
          "bgColor": "#1565C0"
          },
          {
          "letter": "B",
          "word": "Bangladesh",
          "emoji": "🇧🇩",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "P",
          "word": "Pakistan",
          "emoji": "🇵🇰",
          "bgColor": "#33691E"
          },
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesEuropeanCountries1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "European Countries - Part 1",
          videoId: "countries-european-countries-1",
          bgGradient: ["#1565C0","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [
          {
          "letter": "G",
          "word": "Germany",
          "emoji": "🇩🇪",
          "bgColor": "#1565C0"
          },
          {
          "letter": "F",
          "word": "France",
          "emoji": "🇫🇷",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "U",
          "word": "United Kingdom",
          "emoji": "🇬🇧",
          "bgColor": "#1565C0"
          },
          {
          "letter": "I",
          "word": "Italy",
          "emoji": "🇮🇹",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Spain",
          "emoji": "🇪🇸",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "P",
          "word": "Portugal",
          "emoji": "🇵🇹",
          "bgColor": "#33691E"
          },
          {
          "letter": "G",
          "word": "Greece",
          "emoji": "🇬🇷",
          "bgColor": "#1565C0"
          },
          {
          "letter": "P",
          "word": "Poland",
          "emoji": "🇵🇱",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "Czech Republic",
          "emoji": "🇨🇿",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "H",
          "word": "Hungary",
          "emoji": "🇭🇺",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "R",
          "word": "Romania",
          "emoji": "🇷🇴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Bulgaria",
          "emoji": "🇧🇬",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "Serbia",
          "emoji": "🇷🇸",
          "bgColor": "#1565C0"
          },
          {
          "letter": "C",
          "word": "Croatia",
          "emoji": "🇭🇷",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Slovenia",
          "emoji": "🇸🇮",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "A",
          "word": "Austria",
          "emoji": "🇦🇹",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Switzerland",
          "emoji": "🇨🇭",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "N",
          "word": "Netherlands",
          "emoji": "🇳🇱",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Belgium",
          "emoji": "🇧🇪",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "L",
          "word": "Luxembourg",
          "emoji": "🇱🇺",
          "bgColor": "#1565C0"
          },
          {
          "letter": "D",
          "word": "Denmark",
          "emoji": "🇩🇰",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Sweden",
          "emoji": "🇸🇪",
          "bgColor": "#1565C0"
          },
          {
          "letter": "N",
          "word": "Norway",
          "emoji": "🇳🇴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "F",
          "word": "Finland",
          "emoji": "🇫🇮",
          "bgColor": "#1565C0"
          },
          {
          "letter": "I",
          "word": "Ireland",
          "emoji": "🇮🇪",
          "bgColor": "#33691E"
          },
          {
          "letter": "I",
          "word": "Iceland",
          "emoji": "🇮🇸",
          "bgColor": "#1565C0"
          },
          {
          "letter": "R",
          "word": "Russia",
          "emoji": "🇷🇺",
          "bgColor": "#1565C0"
          },
          {
          "letter": "U",
          "word": "Ukraine",
          "emoji": "🇺🇦",
          "bgColor": "#1565C0"
          },
          {
          "letter": "B",
          "word": "Belarus",
          "emoji": "🇧🇾",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesEuropeanCountries2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "European Countries - Part 2",
          videoId: "countries-european-countries-2",
          bgGradient: ["#0277BD","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [
          {
          "letter": "M",
          "word": "Moldova",
          "emoji": "🇲🇩",
          "bgColor": "#1565C0"
          },
          {
          "letter": "L",
          "word": "Latvia",
          "emoji": "🇱🇻",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "L",
          "word": "Lithuania",
          "emoji": "🇱🇹",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "E",
          "word": "Estonia",
          "emoji": "🇪🇪",
          "bgColor": "#1565C0"
          },
          {
          "letter": "S",
          "word": "Slovakia",
          "emoji": "🇸🇰",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "M",
          "word": "Montenegro",
          "emoji": "🇲🇪",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "K",
          "word": "Kosovo",
          "emoji": "🇽🇰",
          "bgColor": "#1565C0"
          },
          {
          "letter": "N",
          "word": "North Macedonia",
          "emoji": "🇲🇰",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "A",
          "word": "Albania",
          "emoji": "🇦🇱",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Bosnia and Herzegovina",
          "emoji": "🇧🇦",
          "bgColor": "#1565C0"
          },
          {
          "letter": "M",
          "word": "Malta",
          "emoji": "🇲🇹",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "Cyprus",
          "emoji": "🇨🇾",
          "bgColor": "#33691E"
          },
          {
          "letter": "A",
          "word": "Andorra",
          "emoji": "🇦🇩",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "L",
          "word": "Liechtenstein",
          "emoji": "🇱🇮",
          "bgColor": "#1565C0"
          },
          {
          "letter": "M",
          "word": "Monaco",
          "emoji": "🇲🇨",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "San Marino",
          "emoji": "🇸🇲",
          "bgColor": "#33691E"
          },
          {
          "letter": "V",
          "word": "Vatican City",
          "emoji": "🇻🇦",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "G",
          "word": "Gibraltar",
          "emoji": "🇬🇮",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          },
          {
          "letter": "T",
          "word": "Turkey",
          "emoji": "🇹🇷",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "G",
          "word": "Georgia",
          "emoji": "🇬🇪",
          "bgColor": "#1565C0"
          },
          {
          "letter": "A",
          "word": "Armenia",
          "emoji": "🇦🇲",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "A",
          "word": "Azerbaijan",
          "emoji": "🇦🇿",
          "bgColor": "#33691E"
          },
          {
          "letter": "C",
          "word": "Cyprus",
          "emoji": "🇨🇾",
          "bgColor": "#33691E"
          },
          {
          "letter": "G",
          "word": "Greece",
          "emoji": "🇬🇷",
          "bgColor": "#1565C0"
          },
          {
          "letter": "I",
          "word": "Italy",
          "emoji": "🇮🇹",
          "bgColor": "#33691E"
          },
          {
          "letter": "M",
          "word": "Malta",
          "emoji": "🇲🇹",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "P",
          "word": "Portugal",
          "emoji": "🇵🇹",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Spain",
          "emoji": "🇪🇸",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "F",
          "word": "France",
          "emoji": "🇫🇷",
          "bgColor": "#D32F2F"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesAfricanCountries1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "African Countries - Part 1",
          videoId: "countries-african-countries-1",
          bgGradient: ["#37474F","#90A4AE"] as [string, string],
          accentColor: "#263238",
          letters: [
          {
          "letter": "E",
          "word": "Egypt",
          "emoji": "🇪🇬",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "South Africa",
          "emoji": "🇿🇦",
          "bgColor": "#33691E"
          },
          {
          "letter": "N",
          "word": "Nigeria",
          "emoji": "🇳🇬",
          "bgColor": "#33691E"
          },
          {
          "letter": "K",
          "word": "Kenya",
          "emoji": "🇰🇪",
          "bgColor": "#33691E"
          },
          {
          "letter": "E",
          "word": "Ethiopia",
          "emoji": "🇪🇹",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Morocco",
          "emoji": "🇲🇦",
          "bgColor": "#33691E"
          },
          {
          "letter": "A",
          "word": "Algeria",
          "emoji": "🇩🇿",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "T",
          "word": "Tunisia",
          "emoji": "🇹🇳",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "L",
          "word": "Libya",
          "emoji": "🇱🇾",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Sudan",
          "emoji": "🇸🇩",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "G",
          "word": "Ghana",
          "emoji": "🇬🇭",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "I",
          "word": "Ivory Coast",
          "emoji": "🇨🇮",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Senegal",
          "emoji": "🇸🇳",
          "bgColor": "#33691E"
          },
          {
          "letter": "U",
          "word": "Uganda",
          "emoji": "🇺🇬",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "T",
          "word": "Tanzania",
          "emoji": "🇹🇿",
          "bgColor": "#33691E"
          },
          {
          "letter": "Z",
          "word": "Zimbabwe",
          "emoji": "🇿🇼",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Z",
          "word": "Zambia",
          "emoji": "🇿🇲",
          "bgColor": "#33691E"
          },
          {
          "letter": "B",
          "word": "Botswana",
          "emoji": "🇧🇼",
          "bgColor": "#1565C0"
          },
          {
          "letter": "N",
          "word": "Namibia",
          "emoji": "🇳🇦",
          "bgColor": "#1565C0"
          },
          {
          "letter": "A",
          "word": "Angola",
          "emoji": "🇦🇴",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "Cameroon",
          "emoji": "🇨🇲",
          "bgColor": "#33691E"
          },
          {
          "letter": "G",
          "word": "Gabon",
          "emoji": "🇬🇦",
          "bgColor": "#33691E"
          },
          {
          "letter": "C",
          "word": "Chad",
          "emoji": "🇹🇩",
          "bgColor": "#33691E"
          },
          {
          "letter": "M",
          "word": "Mali",
          "emoji": "🇲🇱",
          "bgColor": "#33691E"
          },
          {
          "letter": "B",
          "word": "Burkina Faso",
          "emoji": "🇧🇫",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "N",
          "word": "Niger",
          "emoji": "🇳🇪",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Benin",
          "emoji": "🇧🇯",
          "bgColor": "#33691E"
          },
          {
          "letter": "T",
          "word": "Togo",
          "emoji": "🇹🇬",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Liberia",
          "emoji": "🇱🇷",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesAmericanCountries1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "American Countries - Part 1",
          videoId: "countries-american-countries-1",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#37474F",
          letters: [
          {
          "letter": "U",
          "word": "United States",
          "emoji": "🇺🇸",
          "bgColor": "#1565C0"
          },
          {
          "letter": "C",
          "word": "Canada",
          "emoji": "🇨🇦",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Mexico",
          "emoji": "🇲🇽",
          "bgColor": "#33691E"
          },
          {
          "letter": "B",
          "word": "Brazil",
          "emoji": "🇧🇷",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "A",
          "word": "Argentina",
          "emoji": "🇦🇷",
          "bgColor": "#1565C0"
          },
          {
          "letter": "C",
          "word": "Colombia",
          "emoji": "🇨🇴",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "P",
          "word": "Peru",
          "emoji": "🇵🇪",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "V",
          "word": "Venezuela",
          "emoji": "🇻🇪",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "Chile",
          "emoji": "🇨🇱",
          "bgColor": "#1565C0"
          },
          {
          "letter": "E",
          "word": "Ecuador",
          "emoji": "🇪🇨",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "B",
          "word": "Bolivia",
          "emoji": "🇧🇴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "P",
          "word": "Paraguay",
          "emoji": "🇵🇾",
          "bgColor": "#1565C0"
          },
          {
          "letter": "U",
          "word": "Uruguay",
          "emoji": "🇺🇾",
          "bgColor": "#1565C0"
          },
          {
          "letter": "G",
          "word": "Guyana",
          "emoji": "🇬🇾",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Suriname",
          "emoji": "🇸🇷",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "Costa Rica",
          "emoji": "🇨🇷",
          "bgColor": "#1565C0"
          },
          {
          "letter": "N",
          "word": "Nicaragua",
          "emoji": "🇳🇮",
          "bgColor": "#1565C0"
          },
          {
          "letter": "H",
          "word": "Honduras",
          "emoji": "🇭🇳",
          "bgColor": "#1565C0"
          },
          {
          "letter": "E",
          "word": "El Salvador",
          "emoji": "🇸🇻",
          "bgColor": "#1565C0"
          },
          {
          "letter": "G",
          "word": "Guatemala",
          "emoji": "🇬🇹",
          "bgColor": "#1565C0"
          },
          {
          "letter": "B",
          "word": "Belize",
          "emoji": "🇧🇿",
          "bgColor": "#1565C0"
          },
          {
          "letter": "P",
          "word": "Panama",
          "emoji": "🇵🇦",
          "bgColor": "#1565C0"
          },
          {
          "letter": "J",
          "word": "Jamaica",
          "emoji": "🇯🇲",
          "bgColor": "#33691E"
          },
          {
          "letter": "C",
          "word": "Cuba",
          "emoji": "🇨🇺",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "D",
          "word": "Dominican Republic",
          "emoji": "🇩🇴",
          "bgColor": "#1565C0"
          },
          {
          "letter": "H",
          "word": "Haiti",
          "emoji": "🇭🇹",
          "bgColor": "#1565C0"
          },
          {
          "letter": "B",
          "word": "Bahamas",
          "emoji": "🇧🇸",
          "bgColor": "#1565C0"
          },
          {
          "letter": "B",
          "word": "Barbados",
          "emoji": "🇧🇧",
          "bgColor": "#1565C0"
          },
          {
          "letter": "T",
          "word": "Trinidad and Tobago",
          "emoji": "🇹🇹",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesOceaniaCountries"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceania Countries",
          videoId: "countries-oceania-countries",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#455A64",
          letters: [
          {
          "letter": "A",
          "word": "Australia",
          "emoji": "🇦🇺",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "N",
          "word": "New Zealand",
          "emoji": "🇳🇿",
          "bgColor": "#1565C0"
          },
          {
          "letter": "P",
          "word": "Papua New Guinea",
          "emoji": "🇵🇬",
          "bgColor": "#33691E"
          },
          {
          "letter": "F",
          "word": "Fiji",
          "emoji": "🇫🇯",
          "bgColor": "#1565C0"
          },
          {
          "letter": "S",
          "word": "Solomon Islands",
          "emoji": "🇸🇧",
          "bgColor": "#1565C0"
          },
          {
          "letter": "V",
          "word": "Vanuatu",
          "emoji": "🇻🇺",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Samoa",
          "emoji": "🇼🇸",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "K",
          "word": "Kiribati",
          "emoji": "🇰🇮",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Marshall Islands",
          "emoji": "🇲🇭",
          "bgColor": "#1565C0"
          },
          {
          "letter": "M",
          "word": "Micronesia",
          "emoji": "🇫🇲",
          "bgColor": "#1565C0"
          },
          {
          "letter": "N",
          "word": "Nauru",
          "emoji": "🇳🇷",
          "bgColor": "#1565C0"
          },
          {
          "letter": "P",
          "word": "Palau",
          "emoji": "🇵🇼",
          "bgColor": "#1565C0"
          },
          {
          "letter": "T",
          "word": "Tonga",
          "emoji": "🇹🇴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "T",
          "word": "Tuvalu",
          "emoji": "🇹🇻",
          "bgColor": "#1565C0"
          },
          {
          "letter": "N",
          "word": "Niue",
          "emoji": "🇳🇺",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "Cook Islands",
          "emoji": "🇨🇰",
          "bgColor": "#33691E"
          },
          {
          "letter": "P",
          "word": "Palau",
          "emoji": "🇵🇼",
          "bgColor": "#1565C0"
          },
          {
          "letter": "S",
          "word": "Samoa",
          "emoji": "🇼🇸",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "T",
          "word": "Timor-Leste",
          "emoji": "🇹🇱",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          },
          {
          "letter": "A",
          "word": "Australia",
          "emoji": "🇦🇺",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "N",
          "word": "New Zealand",
          "emoji": "🇳🇿",
          "bgColor": "#1565C0"
          },
          {
          "letter": "F",
          "word": "Fiji",
          "emoji": "🇫🇯",
          "bgColor": "#1565C0"
          },
          {
          "letter": "P",
          "word": "Papua New Guinea",
          "emoji": "🇵🇬",
          "bgColor": "#33691E"
          },
          {
          "letter": "V",
          "word": "Vanuatu",
          "emoji": "🇻🇺",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Solomon Islands",
          "emoji": "🇸🇧",
          "bgColor": "#1565C0"
          },
          {
          "letter": "K",
          "word": "Kiribati",
          "emoji": "🇰🇮",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Marshall Islands",
          "emoji": "🇲🇭",
          "bgColor": "#1565C0"
          },
          {
          "letter": "M",
          "word": "Micronesia",
          "emoji": "🇫🇲",
          "bgColor": "#1565C0"
          },
          {
          "letter": "T",
          "word": "Tonga",
          "emoji": "🇹🇴",
          "bgColor": "#D32F2F"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesNeighbors2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "India's Neighbors - Part 2",
          videoId: "countries-neighbors-2",
          bgGradient: ["#E64A19","#FFAB91"] as [string, string],
          accentColor: "#BF360C",
          letters: [
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          },
          {
          "letter": "P",
          "word": "Pakistan",
          "emoji": "🇵🇰",
          "bgColor": "#33691E"
          },
          {
          "letter": "B",
          "word": "Bangladesh",
          "emoji": "🇧🇩",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "N",
          "word": "Nepal",
          "emoji": "🇳🇵",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "B",
          "word": "Bhutan",
          "emoji": "🇧🇹",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "M",
          "word": "Myanmar",
          "emoji": "🇲🇲",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "Sri Lanka",
          "emoji": "🇱🇰",
          "bgColor": "#827717"
          },
          {
          "letter": "M",
          "word": "Maldives",
          "emoji": "🇲🇻",
          "bgColor": "#1565C0"
          },
          {
          "letter": "A",
          "word": "Afghanistan",
          "emoji": "🇦🇫",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "C",
          "word": "China",
          "emoji": "🇨🇳",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          },
          {
          "letter": "T",
          "word": "Thailand",
          "emoji": "🇹🇭",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "L",
          "word": "Laos",
          "emoji": "🇱🇦",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "C",
          "word": "Cambodia",
          "emoji": "🇰🇭",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "V",
          "word": "Vietnam",
          "emoji": "🇻🇳",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Malaysia",
          "emoji": "🇲🇾",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "I",
          "word": "Indonesia",
          "emoji": "🇮🇩",
          "bgColor": "#C62828"
          },
          {
          "letter": "S",
          "word": "Singapore",
          "emoji": "🇸🇬",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Brunei",
          "emoji": "🇧🇳",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "P",
          "word": "Philippines",
          "emoji": "🇵🇭",
          "bgColor": "#1565C0"
          },
          {
          "letter": "J",
          "word": "Japan",
          "emoji": "🇯🇵",
          "bgColor": "#E91E63"
          },
          {
          "letter": "S",
          "word": "South Korea",
          "emoji": "🇰🇷",
          "bgColor": "#1565C0"
          },
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          },
          {
          "letter": "U",
          "word": "UAE",
          "emoji": "🇦🇪",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "S",
          "word": "Saudi Arabia",
          "emoji": "🇸🇦",
          "bgColor": "#33691E"
          },
          {
          "letter": "Q",
          "word": "Qatar",
          "emoji": "🇶🇦",
          "bgColor": "#827717"
          },
          {
          "letter": "O",
          "word": "Oman",
          "emoji": "🇴🇲",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "I",
          "word": "Iran",
          "emoji": "🇮🇷",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "I",
          "word": "Iraq",
          "emoji": "🇮🇶",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesNeighbors3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "India's Neighbors - Part 3",
          videoId: "countries-neighbors-3",
          bgGradient: ["#F4511E","#FF8A65"] as [string, string],
          accentColor: "#D84315",
          letters: [
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          },
          {
          "letter": "P",
          "word": "Pakistan",
          "emoji": "🇵🇰",
          "bgColor": "#33691E"
          },
          {
          "letter": "A",
          "word": "Afghanistan",
          "emoji": "🇦🇫",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "I",
          "word": "Iran",
          "emoji": "🇮🇷",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "T",
          "word": "Turkmenistan",
          "emoji": "🇹🇲",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "U",
          "word": "Uzbekistan",
          "emoji": "🇺🇿",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "T",
          "word": "Tajikistan",
          "emoji": "🇹🇯",
          "bgColor": "#33691E"
          },
          {
          "letter": "K",
          "word": "Kyrgyzstan",
          "emoji": "🇰🇬",
          "bgColor": "#C62828"
          },
          {
          "letter": "C",
          "word": "China",
          "emoji": "🇨🇳",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "N",
          "word": "Nepal",
          "emoji": "🇳🇵",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "B",
          "word": "Bhutan",
          "emoji": "🇧🇹",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "B",
          "word": "Bangladesh",
          "emoji": "🇧🇩",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "M",
          "word": "Myanmar",
          "emoji": "🇲🇲",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          },
          {
          "letter": "T",
          "word": "Thailand",
          "emoji": "🇹🇭",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "L",
          "word": "Laos",
          "emoji": "🇱🇦",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "V",
          "word": "Vietnam",
          "emoji": "🇻🇳",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "C",
          "word": "Cambodia",
          "emoji": "🇰🇭",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "M",
          "word": "Malaysia",
          "emoji": "🇲🇾",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "Singapore",
          "emoji": "🇸🇬",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Brunei",
          "emoji": "🇧🇳",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "I",
          "word": "Indonesia",
          "emoji": "🇮🇩",
          "bgColor": "#C62828"
          },
          {
          "letter": "T",
          "word": "Timor-Leste",
          "emoji": "🇹🇱",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "P",
          "word": "Philippines",
          "emoji": "🇵🇭",
          "bgColor": "#1565C0"
          },
          {
          "letter": "J",
          "word": "Japan",
          "emoji": "🇯🇵",
          "bgColor": "#E91E63"
          },
          {
          "letter": "S",
          "word": "South Korea",
          "emoji": "🇰🇷",
          "bgColor": "#1565C0"
          },
          {
          "letter": "M",
          "word": "Mongolia",
          "emoji": "🇲🇳",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "R",
          "word": "Russia",
          "emoji": "🇷🇺",
          "bgColor": "#1565C0"
          },
          {
          "letter": "S",
          "word": "Sri Lanka",
          "emoji": "🇱🇰",
          "bgColor": "#827717"
          },
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesWorldCapitals1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Capitals - Part 1",
          videoId: "countries-world-capitals-1",
          bgGradient: ["#6A1B9A","#E1BEE7"] as [string, string],
          accentColor: "#4A148C",
          letters: [
          {
          "letter": "N",
          "word": "New Delhi",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          },
          {
          "letter": "W",
          "word": "Washington DC",
          "emoji": "🇺🇸",
          "bgColor": "#1565C0"
          },
          {
          "letter": "L",
          "word": "London",
          "emoji": "🇬🇧",
          "bgColor": "#1565C0"
          },
          {
          "letter": "P",
          "word": "Paris",
          "emoji": "🇫🇷",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Berlin",
          "emoji": "🇩🇪",
          "bgColor": "#1565C0"
          },
          {
          "letter": "T",
          "word": "Tokyo",
          "emoji": "🇯🇵",
          "bgColor": "#E91E63"
          },
          {
          "letter": "B",
          "word": "Beijing",
          "emoji": "🇨🇳",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Moscow",
          "emoji": "🇷🇺",
          "bgColor": "#1565C0"
          },
          {
          "letter": "C",
          "word": "Canberra",
          "emoji": "🇦🇺",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "W",
          "word": "Wellington",
          "emoji": "🇳🇿",
          "bgColor": "#1565C0"
          },
          {
          "letter": "S",
          "word": "Seoul",
          "emoji": "🇰🇷",
          "bgColor": "#1565C0"
          },
          {
          "letter": "B",
          "word": "Bangkok",
          "emoji": "🇹🇭",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "S",
          "word": "Singapore",
          "emoji": "🇸🇬",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "J",
          "word": "Jakarta",
          "emoji": "🇮🇩",
          "bgColor": "#C62828"
          },
          {
          "letter": "M",
          "word": "Manila",
          "emoji": "🇵🇭",
          "bgColor": "#1565C0"
          },
          {
          "letter": "D",
          "word": "Dhaka",
          "emoji": "🇧🇩",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "I",
          "word": "Islamabad",
          "emoji": "🇵🇰",
          "bgColor": "#33691E"
          },
          {
          "letter": "C",
          "word": "Colombo",
          "emoji": "🇱🇰",
          "bgColor": "#827717"
          },
          {
          "letter": "K",
          "word": "Kathmandu",
          "emoji": "🇳🇵",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "N",
          "word": "Naypyidaw",
          "emoji": "🇲🇲",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "H",
          "word": "Hanoi",
          "emoji": "🇻🇳",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "H",
          "word": "Ho Chi Minh City",
          "emoji": "🇻🇳",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "P",
          "word": "Phnom Penh",
          "emoji": "🇰🇭",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "V",
          "word": "Vientiane",
          "emoji": "🇱🇦",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "K",
          "word": "Kuala Lumpur",
          "emoji": "🇲🇾",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "B",
          "word": "Bandar Seri Begawan",
          "emoji": "🇧🇳",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "M",
          "word": "Malé",
          "emoji": "🇲🇻",
          "bgColor": "#1565C0"
          },
          {
          "letter": "T",
          "word": "Thimphu",
          "emoji": "🇧🇹",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "K",
          "word": "Kabul",
          "emoji": "🇦🇫",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesWorldCapitals2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Capitals - Part 2",
          videoId: "countries-world-capitals-2",
          bgGradient: ["#7B1FA2","#CE93D8"] as [string, string],
          accentColor: "#6A1B9A",
          letters: [
          {
          "letter": "C",
          "word": "Cairo",
          "emoji": "🇪🇬",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "J",
          "word": "Johannesburg",
          "emoji": "🇿🇦",
          "bgColor": "#33691E"
          },
          {
          "letter": "A",
          "word": "Abuja",
          "emoji": "🇳🇬",
          "bgColor": "#33691E"
          },
          {
          "letter": "N",
          "word": "Nairobi",
          "emoji": "🇰🇪",
          "bgColor": "#33691E"
          },
          {
          "letter": "A",
          "word": "Addis Ababa",
          "emoji": "🇪🇹",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "R",
          "word": "Rabat",
          "emoji": "🇲🇦",
          "bgColor": "#33691E"
          },
          {
          "letter": "A",
          "word": "Algiers",
          "emoji": "🇩🇿",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "T",
          "word": "Tunis",
          "emoji": "🇹🇳",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "T",
          "word": "Tripoli",
          "emoji": "🇱🇾",
          "bgColor": "#33691E"
          },
          {
          "letter": "K",
          "word": "Khartoum",
          "emoji": "🇸🇩",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "A",
          "word": "Accra",
          "emoji": "🇬🇭",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Y",
          "word": "Yamoussoukro",
          "emoji": "🇨🇮",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "D",
          "word": "Dakar",
          "emoji": "🇸🇳",
          "bgColor": "#33691E"
          },
          {
          "letter": "K",
          "word": "Kampala",
          "emoji": "🇺🇬",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "D",
          "word": "Dar es Salaam",
          "emoji": "🇹🇿",
          "bgColor": "#33691E"
          },
          {
          "letter": "H",
          "word": "Harare",
          "emoji": "🇿🇼",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "L",
          "word": "Lusaka",
          "emoji": "🇿🇲",
          "bgColor": "#33691E"
          },
          {
          "letter": "G",
          "word": "Gaborone",
          "emoji": "🇧🇼",
          "bgColor": "#1565C0"
          },
          {
          "letter": "W",
          "word": "Windhoek",
          "emoji": "🇳🇦",
          "bgColor": "#1565C0"
          },
          {
          "letter": "L",
          "word": "Luanda",
          "emoji": "🇦🇴",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "Y",
          "word": "Yaoundé",
          "emoji": "🇨🇲",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Libreville",
          "emoji": "🇬🇦",
          "bgColor": "#33691E"
          },
          {
          "letter": "N",
          "word": "N'Djamena",
          "emoji": "🇹🇩",
          "bgColor": "#33691E"
          },
          {
          "letter": "B",
          "word": "Bamako",
          "emoji": "🇲🇱",
          "bgColor": "#33691E"
          },
          {
          "letter": "O",
          "word": "Ouagadougou",
          "emoji": "🇧🇫",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "N",
          "word": "Niamey",
          "emoji": "🇳🇪",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "P",
          "word": "Porto-Novo",
          "emoji": "🇧🇯",
          "bgColor": "#33691E"
          },
          {
          "letter": "L",
          "word": "Lomé",
          "emoji": "🇹🇬",
          "bgColor": "#33691E"
          },
          {
          "letter": "M",
          "word": "Monrovia",
          "emoji": "🇱🇷",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesWorldCapitals3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "World Capitals - Part 3",
          videoId: "countries-world-capitals-3",
          bgGradient: ["#8E24AA","#F3E5F5"] as [string, string],
          accentColor: "#7B1FA2",
          letters: [
          {
          "letter": "W",
          "word": "Washington",
          "emoji": "🇺🇸",
          "bgColor": "#1565C0"
          },
          {
          "letter": "O",
          "word": "Ottawa",
          "emoji": "🇨🇦",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Mexico City",
          "emoji": "🇲🇽",
          "bgColor": "#33691E"
          },
          {
          "letter": "B",
          "word": "Brasília",
          "emoji": "🇧🇷",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "B",
          "word": "Buenos Aires",
          "emoji": "🇦🇷",
          "bgColor": "#1565C0"
          },
          {
          "letter": "B",
          "word": "Bogotá",
          "emoji": "🇨🇴",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "L",
          "word": "Lima",
          "emoji": "🇵🇪",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "C",
          "word": "Caracas",
          "emoji": "🇻🇪",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "Santiago",
          "emoji": "🇨🇱",
          "bgColor": "#1565C0"
          },
          {
          "letter": "Q",
          "word": "Quito",
          "emoji": "🇪🇨",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "L",
          "word": "La Paz",
          "emoji": "🇧🇴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "A",
          "word": "Asunción",
          "emoji": "🇵🇾",
          "bgColor": "#1565C0"
          },
          {
          "letter": "M",
          "word": "Montevideo",
          "emoji": "🇺🇾",
          "bgColor": "#1565C0"
          },
          {
          "letter": "G",
          "word": "Georgetown",
          "emoji": "🇬🇾",
          "bgColor": "#33691E"
          },
          {
          "letter": "P",
          "word": "Paramaribo",
          "emoji": "🇸🇷",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "San José",
          "emoji": "🇨🇷",
          "bgColor": "#1565C0"
          },
          {
          "letter": "M",
          "word": "Managua",
          "emoji": "🇳🇮",
          "bgColor": "#1565C0"
          },
          {
          "letter": "T",
          "word": "Tegucigalpa",
          "emoji": "🇭🇳",
          "bgColor": "#1565C0"
          },
          {
          "letter": "S",
          "word": "San Salvador",
          "emoji": "🇸🇻",
          "bgColor": "#1565C0"
          },
          {
          "letter": "G",
          "word": "Guatemala City",
          "emoji": "🇬🇹",
          "bgColor": "#1565C0"
          },
          {
          "letter": "B",
          "word": "Belmopan",
          "emoji": "🇧🇿",
          "bgColor": "#1565C0"
          },
          {
          "letter": "P",
          "word": "Panama City",
          "emoji": "🇵🇦",
          "bgColor": "#1565C0"
          },
          {
          "letter": "K",
          "word": "Kingston",
          "emoji": "🇯🇲",
          "bgColor": "#33691E"
          },
          {
          "letter": "H",
          "word": "Havana",
          "emoji": "🇨🇺",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Santo Domingo",
          "emoji": "🇩🇴",
          "bgColor": "#1565C0"
          },
          {
          "letter": "P",
          "word": "Port-au-Prince",
          "emoji": "🇭🇹",
          "bgColor": "#1565C0"
          },
          {
          "letter": "N",
          "word": "Nassau",
          "emoji": "🇧🇸",
          "bgColor": "#1565C0"
          },
          {
          "letter": "B",
          "word": "Bridgetown",
          "emoji": "🇧🇧",
          "bgColor": "#1565C0"
          },
          {
          "letter": "P",
          "word": "Port of Spain",
          "emoji": "🇹🇹",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesIslandNations1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Island Nations - Part 1",
          videoId: "countries-island-nations-1",
          bgGradient: ["#0277BD","#B3E5FC"] as [string, string],
          accentColor: "#01579B",
          letters: [
          {
          "letter": "J",
          "word": "Japan",
          "emoji": "🇯🇵",
          "bgColor": "#E91E63"
          },
          {
          "letter": "P",
          "word": "Philippines",
          "emoji": "🇵🇭",
          "bgColor": "#1565C0"
          },
          {
          "letter": "I",
          "word": "Indonesia",
          "emoji": "🇮🇩",
          "bgColor": "#C62828"
          },
          {
          "letter": "N",
          "word": "New Zealand",
          "emoji": "🇳🇿",
          "bgColor": "#1565C0"
          },
          {
          "letter": "A",
          "word": "Australia",
          "emoji": "🇦🇺",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "F",
          "word": "Fiji",
          "emoji": "🇫🇯",
          "bgColor": "#1565C0"
          },
          {
          "letter": "S",
          "word": "Solomon Islands",
          "emoji": "🇸🇧",
          "bgColor": "#1565C0"
          },
          {
          "letter": "V",
          "word": "Vanuatu",
          "emoji": "🇻🇺",
          "bgColor": "#33691E"
          },
          {
          "letter": "P",
          "word": "Papua New Guinea",
          "emoji": "🇵🇬",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Samoa",
          "emoji": "🇼🇸",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "T",
          "word": "Tonga",
          "emoji": "🇹🇴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "K",
          "word": "Kiribati",
          "emoji": "🇰🇮",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Marshall Islands",
          "emoji": "🇲🇭",
          "bgColor": "#1565C0"
          },
          {
          "letter": "M",
          "word": "Micronesia",
          "emoji": "🇫🇲",
          "bgColor": "#1565C0"
          },
          {
          "letter": "P",
          "word": "Palau",
          "emoji": "🇵🇼",
          "bgColor": "#1565C0"
          },
          {
          "letter": "N",
          "word": "Nauru",
          "emoji": "🇳🇷",
          "bgColor": "#1565C0"
          },
          {
          "letter": "T",
          "word": "Tuvalu",
          "emoji": "🇹🇻",
          "bgColor": "#1565C0"
          },
          {
          "letter": "N",
          "word": "Niue",
          "emoji": "🇳🇺",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "Cook Islands",
          "emoji": "🇨🇰",
          "bgColor": "#33691E"
          },
          {
          "letter": "T",
          "word": "Timor-Leste",
          "emoji": "🇹🇱",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Brunei",
          "emoji": "🇧🇳",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "Singapore",
          "emoji": "🇸🇬",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Malta",
          "emoji": "🇲🇹",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "Cyprus",
          "emoji": "🇨🇾",
          "bgColor": "#33691E"
          },
          {
          "letter": "I",
          "word": "Iceland",
          "emoji": "🇮🇸",
          "bgColor": "#1565C0"
          },
          {
          "letter": "I",
          "word": "Ireland",
          "emoji": "🇮🇪",
          "bgColor": "#33691E"
          },
          {
          "letter": "U",
          "word": "United Kingdom",
          "emoji": "🇬🇧",
          "bgColor": "#1565C0"
          },
          {
          "letter": "C",
          "word": "Cuba",
          "emoji": "🇨🇺",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "J",
          "word": "Jamaica",
          "emoji": "🇯🇲",
          "bgColor": "#33691E"
          },
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesIslandNations2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Island Nations - Part 2",
          videoId: "countries-island-nations-2",
          bgGradient: ["#0288D1","#81D4FA"] as [string, string],
          accentColor: "#0277BD",
          letters: [
          {
          "letter": "H",
          "word": "Haiti",
          "emoji": "🇭🇹",
          "bgColor": "#1565C0"
          },
          {
          "letter": "D",
          "word": "Dominican Republic",
          "emoji": "🇩🇴",
          "bgColor": "#1565C0"
          },
          {
          "letter": "B",
          "word": "Bahamas",
          "emoji": "🇧🇸",
          "bgColor": "#1565C0"
          },
          {
          "letter": "B",
          "word": "Barbados",
          "emoji": "🇧🇧",
          "bgColor": "#1565C0"
          },
          {
          "letter": "T",
          "word": "Trinidad and Tobago",
          "emoji": "🇹🇹",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Mauritius",
          "emoji": "🇲🇺",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Seychelles",
          "emoji": "🇸🇨",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Madagascar",
          "emoji": "🇲🇬",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "C",
          "word": "Comoros",
          "emoji": "🇰🇲",
          "bgColor": "#1565C0"
          },
          {
          "letter": "M",
          "word": "Maldives",
          "emoji": "🇲🇻",
          "bgColor": "#1565C0"
          },
          {
          "letter": "S",
          "word": "Sri Lanka",
          "emoji": "🇱🇰",
          "bgColor": "#827717"
          },
          {
          "letter": "G",
          "word": "Grenada",
          "emoji": "🇬🇩",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Saint Lucia",
          "emoji": "🇱🇨",
          "bgColor": "#1565C0"
          },
          {
          "letter": "S",
          "word": "Saint Vincent and Grenadines",
          "emoji": "🇻🇨",
          "bgColor": "#1565C0"
          },
          {
          "letter": "A",
          "word": "Antigua and Barbuda",
          "emoji": "🇦🇬",
          "bgColor": "#1565C0"
          },
          {
          "letter": "S",
          "word": "Saint Kitts and Nevis",
          "emoji": "🇰🇳",
          "bgColor": "#33691E"
          },
          {
          "letter": "D",
          "word": "Dominica",
          "emoji": "🇩🇲",
          "bgColor": "#33691E"
          },
          {
          "letter": "M",
          "word": "Mauritius",
          "emoji": "🇲🇺",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "C",
          "word": "Cape Verde",
          "emoji": "🇨🇻",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "M",
          "word": "Mauritania",
          "emoji": "🇲🇷",
          "bgColor": "#33691E"
          },
          {
          "letter": "G",
          "word": "Gambia",
          "emoji": "🇬🇲",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "H",
          "word": "Hong Kong",
          "emoji": "🇭🇰",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Macau",
          "emoji": "🇲🇴",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "T",
          "word": "Taiwan",
          "emoji": "🇹🇼",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Bahrain",
          "emoji": "🇧🇭",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "M",
          "word": "Malta",
          "emoji": "🇲🇹",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "Cyprus",
          "emoji": "🇨🇾",
          "bgColor": "#33691E"
          },
          {
          "letter": "C",
          "word": "Crete",
          "emoji": "🇬🇷",
          "bgColor": "#1565C0"
          },
          {
          "letter": "S",
          "word": "Sicily",
          "emoji": "🇮🇹",
          "bgColor": "#33691E"
          },
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesIslandNations3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Island Nations - Part 3",
          videoId: "countries-island-nations-3",
          bgGradient: ["#039BE5","#4FC3F7"] as [string, string],
          accentColor: "#0288D1",
          letters: [
          {
          "letter": "M",
          "word": "Maldives",
          "emoji": "🇲🇻",
          "bgColor": "#1565C0"
          },
          {
          "letter": "S",
          "word": "Sri Lanka",
          "emoji": "🇱🇰",
          "bgColor": "#827717"
          },
          {
          "letter": "J",
          "word": "Japan",
          "emoji": "🇯🇵",
          "bgColor": "#E91E63"
          },
          {
          "letter": "P",
          "word": "Philippines",
          "emoji": "🇵🇭",
          "bgColor": "#1565C0"
          },
          {
          "letter": "I",
          "word": "Indonesia",
          "emoji": "🇮🇩",
          "bgColor": "#C62828"
          },
          {
          "letter": "B",
          "word": "Brunei",
          "emoji": "🇧🇳",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "T",
          "word": "Timor-Leste",
          "emoji": "🇹🇱",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "A",
          "word": "Australia",
          "emoji": "🇦🇺",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "N",
          "word": "New Zealand",
          "emoji": "🇳🇿",
          "bgColor": "#1565C0"
          },
          {
          "letter": "F",
          "word": "Fiji",
          "emoji": "🇫🇯",
          "bgColor": "#1565C0"
          },
          {
          "letter": "P",
          "word": "Papua New Guinea",
          "emoji": "🇵🇬",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Solomon Islands",
          "emoji": "🇸🇧",
          "bgColor": "#1565C0"
          },
          {
          "letter": "V",
          "word": "Vanuatu",
          "emoji": "🇻🇺",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Samoa",
          "emoji": "🇼🇸",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "T",
          "word": "Tonga",
          "emoji": "🇹🇴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "K",
          "word": "Kiribati",
          "emoji": "🇰🇮",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Marshall Islands",
          "emoji": "🇲🇭",
          "bgColor": "#1565C0"
          },
          {
          "letter": "M",
          "word": "Micronesia",
          "emoji": "🇫🇲",
          "bgColor": "#1565C0"
          },
          {
          "letter": "P",
          "word": "Palau",
          "emoji": "🇵🇼",
          "bgColor": "#1565C0"
          },
          {
          "letter": "N",
          "word": "Nauru",
          "emoji": "🇳🇷",
          "bgColor": "#1565C0"
          },
          {
          "letter": "T",
          "word": "Tuvalu",
          "emoji": "🇹🇻",
          "bgColor": "#1565C0"
          },
          {
          "letter": "N",
          "word": "Niue",
          "emoji": "🇳🇺",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "Cook Islands",
          "emoji": "🇨🇰",
          "bgColor": "#33691E"
          },
          {
          "letter": "I",
          "word": "Iceland",
          "emoji": "🇮🇸",
          "bgColor": "#1565C0"
          },
          {
          "letter": "I",
          "word": "Ireland",
          "emoji": "🇮🇪",
          "bgColor": "#33691E"
          },
          {
          "letter": "U",
          "word": "United Kingdom",
          "emoji": "🇬🇧",
          "bgColor": "#1565C0"
          },
          {
          "letter": "M",
          "word": "Malta",
          "emoji": "🇲🇹",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "Cyprus",
          "emoji": "🇨🇾",
          "bgColor": "#33691E"
          },
          {
          "letter": "G",
          "word": "Grenada",
          "emoji": "🇬🇩",
          "bgColor": "#33691E"
          },
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesBiggestCountries1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Biggest Countries - Part 1",
          videoId: "countries-biggest-countries-1",
          bgGradient: ["#37474F","#90A4AE"] as [string, string],
          accentColor: "#263238",
          letters: [
          {
          "letter": "R",
          "word": "Russia",
          "emoji": "🇷🇺",
          "bgColor": "#1565C0"
          },
          {
          "letter": "C",
          "word": "Canada",
          "emoji": "🇨🇦",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "U",
          "word": "United States",
          "emoji": "🇺🇸",
          "bgColor": "#1565C0"
          },
          {
          "letter": "C",
          "word": "China",
          "emoji": "🇨🇳",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Brazil",
          "emoji": "🇧🇷",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "A",
          "word": "Australia",
          "emoji": "🇦🇺",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          },
          {
          "letter": "A",
          "word": "Argentina",
          "emoji": "🇦🇷",
          "bgColor": "#1565C0"
          },
          {
          "letter": "K",
          "word": "Kazakhstan",
          "emoji": "🇰🇿",
          "bgColor": "#1565C0"
          },
          {
          "letter": "A",
          "word": "Algeria",
          "emoji": "🇩🇿",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "G",
          "word": "Greenland",
          "emoji": "🇬🇱",
          "bgColor": "#1565C0"
          },
          {
          "letter": "D",
          "word": "Democratic Republic of Congo",
          "emoji": "🇨🇩",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Saudi Arabia",
          "emoji": "🇸🇦",
          "bgColor": "#33691E"
          },
          {
          "letter": "M",
          "word": "Mexico",
          "emoji": "🇲🇽",
          "bgColor": "#33691E"
          },
          {
          "letter": "I",
          "word": "Indonesia",
          "emoji": "🇮🇩",
          "bgColor": "#C62828"
          },
          {
          "letter": "L",
          "word": "Libya",
          "emoji": "🇱🇾",
          "bgColor": "#33691E"
          },
          {
          "letter": "I",
          "word": "Iran",
          "emoji": "🇮🇷",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "M",
          "word": "Mongolia",
          "emoji": "🇲🇳",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "P",
          "word": "Peru",
          "emoji": "🇵🇪",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "C",
          "word": "Chad",
          "emoji": "🇹🇩",
          "bgColor": "#33691E"
          },
          {
          "letter": "N",
          "word": "Niger",
          "emoji": "🇳🇪",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "A",
          "word": "Angola",
          "emoji": "🇦🇴",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "M",
          "word": "Mali",
          "emoji": "🇲🇱",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "South Africa",
          "emoji": "🇿🇦",
          "bgColor": "#33691E"
          },
          {
          "letter": "C",
          "word": "Colombia",
          "emoji": "🇨🇴",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "E",
          "word": "Ethiopia",
          "emoji": "🇪🇹",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Bolivia",
          "emoji": "🇧🇴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Mauritania",
          "emoji": "🇲🇷",
          "bgColor": "#33691E"
          },
          {
          "letter": "E",
          "word": "Egypt",
          "emoji": "🇪🇬",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "T",
          "word": "Tanzania",
          "emoji": "🇹🇿",
          "bgColor": "#33691E"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesBiggestCountries2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Biggest Countries - Part 2",
          videoId: "countries-biggest-countries-2",
          bgGradient: ["#455A64","#B0BEC5"] as [string, string],
          accentColor: "#37474F",
          letters: [
          {
          "letter": "N",
          "word": "Nigeria",
          "emoji": "🇳🇬",
          "bgColor": "#33691E"
          },
          {
          "letter": "V",
          "word": "Venezuela",
          "emoji": "🇻🇪",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "N",
          "word": "Namibia",
          "emoji": "🇳🇦",
          "bgColor": "#1565C0"
          },
          {
          "letter": "B",
          "word": "Botswana",
          "emoji": "🇧🇼",
          "bgColor": "#1565C0"
          },
          {
          "letter": "K",
          "word": "Kenya",
          "emoji": "🇰🇪",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Sudan",
          "emoji": "🇸🇩",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "U",
          "word": "Ukraine",
          "emoji": "🇺🇦",
          "bgColor": "#1565C0"
          },
          {
          "letter": "L",
          "word": "Libya",
          "emoji": "🇱🇾",
          "bgColor": "#33691E"
          },
          {
          "letter": "Q",
          "word": "Quebec",
          "emoji": "🇨🇦",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "T",
          "word": "Turkey",
          "emoji": "🇹🇷",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "C",
          "word": "Chile",
          "emoji": "🇨🇱",
          "bgColor": "#1565C0"
          },
          {
          "letter": "Z",
          "word": "Zambia",
          "emoji": "🇿🇲",
          "bgColor": "#33691E"
          },
          {
          "letter": "M",
          "word": "Myanmar",
          "emoji": "🇲🇲",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "A",
          "word": "Afghanistan",
          "emoji": "🇦🇫",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "S",
          "word": "Somalia",
          "emoji": "🇸🇴",
          "bgColor": "#1565C0"
          },
          {
          "letter": "C",
          "word": "Cameroon",
          "emoji": "🇨🇲",
          "bgColor": "#33691E"
          },
          {
          "letter": "P",
          "word": "Pakistan",
          "emoji": "🇵🇰",
          "bgColor": "#33691E"
          },
          {
          "letter": "M",
          "word": "Morocco",
          "emoji": "🇲🇦",
          "bgColor": "#33691E"
          },
          {
          "letter": "U",
          "word": "Uzbekistan",
          "emoji": "🇺🇿",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "S",
          "word": "Sierra Leone",
          "emoji": "🇸🇱",
          "bgColor": "#33691E"
          },
          {
          "letter": "H",
          "word": "Hong Kong",
          "emoji": "🇭🇰",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "G",
          "word": "Gabon",
          "emoji": "🇬🇦",
          "bgColor": "#33691E"
          },
          {
          "letter": "G",
          "word": "Guinea",
          "emoji": "🇬🇳",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "R",
          "word": "Rwanda",
          "emoji": "🇷🇼",
          "bgColor": "#33691E"
          },
          {
          "letter": "B",
          "word": "Benin",
          "emoji": "🇧🇯",
          "bgColor": "#33691E"
          },
          {
          "letter": "B",
          "word": "Burundi",
          "emoji": "🇧🇮",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "Z",
          "word": "Zimbabwe",
          "emoji": "🇿🇼",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "J",
          "word": "Japan",
          "emoji": "🇯🇵",
          "bgColor": "#E91E63"
          },
          {
          "letter": "G",
          "word": "Germany",
          "emoji": "🇩🇪",
          "bgColor": "#1565C0"
          },
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesBiggestCountries3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Biggest Countries - Part 3",
          videoId: "countries-biggest-countries-3",
          bgGradient: ["#546E7A","#CFD8DC"] as [string, string],
          accentColor: "#455A64",
          letters: [
          {
          "letter": "F",
          "word": "France",
          "emoji": "🇫🇷",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "U",
          "word": "United Kingdom",
          "emoji": "🇬🇧",
          "bgColor": "#1565C0"
          },
          {
          "letter": "M",
          "word": "Malaysia",
          "emoji": "🇲🇾",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "T",
          "word": "Tunisia",
          "emoji": "🇹🇳",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Bangladesh",
          "emoji": "🇧🇩",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "U",
          "word": "Uganda",
          "emoji": "🇺🇬",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "G",
          "word": "Greece",
          "emoji": "🇬🇷",
          "bgColor": "#1565C0"
          },
          {
          "letter": "S",
          "word": "Sri Lanka",
          "emoji": "🇱🇰",
          "bgColor": "#827717"
          },
          {
          "letter": "K",
          "word": "Kuwait",
          "emoji": "🇰🇼",
          "bgColor": "#33691E"
          },
          {
          "letter": "B",
          "word": "Burkina Faso",
          "emoji": "🇧🇫",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Senegal",
          "emoji": "🇸🇳",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Serbia",
          "emoji": "🇷🇸",
          "bgColor": "#1565C0"
          },
          {
          "letter": "S",
          "word": "Syria",
          "emoji": "🇸🇾",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "C",
          "word": "Cambodia",
          "emoji": "🇰🇭",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "Z",
          "word": "Zimbabwe",
          "emoji": "🇿🇼",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "Czech Republic",
          "emoji": "🇨🇿",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "G",
          "word": "Guinea-Bissau",
          "emoji": "🇬🇼",
          "bgColor": "#33691E"
          },
          {
          "letter": "A",
          "word": "Austria",
          "emoji": "🇦🇹",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "J",
          "word": "Ivory Coast",
          "emoji": "🇨🇮",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "South Korea",
          "emoji": "🇰🇷",
          "bgColor": "#1565C0"
          },
          {
          "letter": "M",
          "word": "Moldova",
          "emoji": "🇲🇩",
          "bgColor": "#1565C0"
          },
          {
          "letter": "B",
          "word": "Belgium",
          "emoji": "🇧🇪",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "H",
          "word": "Haiti",
          "emoji": "🇭🇹",
          "bgColor": "#1565C0"
          },
          {
          "letter": "B",
          "word": "Botswana",
          "emoji": "🇧🇼",
          "bgColor": "#1565C0"
          },
          {
          "letter": "H",
          "word": "Honduras",
          "emoji": "🇭🇳",
          "bgColor": "#1565C0"
          },
          {
          "letter": "N",
          "word": "Nicaragua",
          "emoji": "🇳🇮",
          "bgColor": "#1565C0"
          },
          {
          "letter": "J",
          "word": "Jordan",
          "emoji": "🇯🇴",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "A",
          "word": "Oman",
          "emoji": "🇴🇲",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "P",
          "word": "Paraguay",
          "emoji": "🇵🇾",
          "bgColor": "#1565C0"
          },
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesFamousCountries1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Countries - Part 1",
          videoId: "countries-famous-countries-1",
          bgGradient: ["#C62828","#FFCDD2"] as [string, string],
          accentColor: "#B71C1C",
          letters: [
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          },
          {
          "letter": "U",
          "word": "United States",
          "emoji": "🇺🇸",
          "bgColor": "#1565C0"
          },
          {
          "letter": "U",
          "word": "United Kingdom",
          "emoji": "🇬🇧",
          "bgColor": "#1565C0"
          },
          {
          "letter": "F",
          "word": "France",
          "emoji": "🇫🇷",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "G",
          "word": "Germany",
          "emoji": "🇩🇪",
          "bgColor": "#1565C0"
          },
          {
          "letter": "J",
          "word": "Japan",
          "emoji": "🇯🇵",
          "bgColor": "#E91E63"
          },
          {
          "letter": "C",
          "word": "China",
          "emoji": "🇨🇳",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "R",
          "word": "Russia",
          "emoji": "🇷🇺",
          "bgColor": "#1565C0"
          },
          {
          "letter": "B",
          "word": "Brazil",
          "emoji": "🇧🇷",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "I",
          "word": "Italy",
          "emoji": "🇮🇹",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Spain",
          "emoji": "🇪🇸",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "Canada",
          "emoji": "🇨🇦",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "A",
          "word": "Australia",
          "emoji": "🇦🇺",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "N",
          "word": "Netherlands",
          "emoji": "🇳🇱",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Switzerland",
          "emoji": "🇨🇭",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Sweden",
          "emoji": "🇸🇪",
          "bgColor": "#1565C0"
          },
          {
          "letter": "N",
          "word": "Norway",
          "emoji": "🇳🇴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "G",
          "word": "Greece",
          "emoji": "🇬🇷",
          "bgColor": "#1565C0"
          },
          {
          "letter": "B",
          "word": "Belgium",
          "emoji": "🇧🇪",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "A",
          "word": "Austria",
          "emoji": "🇦🇹",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "P",
          "word": "Portugal",
          "emoji": "🇵🇹",
          "bgColor": "#33691E"
          },
          {
          "letter": "D",
          "word": "Denmark",
          "emoji": "🇩🇰",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "F",
          "word": "Finland",
          "emoji": "🇫🇮",
          "bgColor": "#1565C0"
          },
          {
          "letter": "I",
          "word": "Ireland",
          "emoji": "🇮🇪",
          "bgColor": "#33691E"
          },
          {
          "letter": "P",
          "word": "Poland",
          "emoji": "🇵🇱",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "M",
          "word": "Mexico",
          "emoji": "🇲🇽",
          "bgColor": "#33691E"
          },
          {
          "letter": "A",
          "word": "Argentina",
          "emoji": "🇦🇷",
          "bgColor": "#1565C0"
          },
          {
          "letter": "T",
          "word": "Thailand",
          "emoji": "🇹🇭",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "V",
          "word": "Vietnam",
          "emoji": "🇻🇳",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "South Korea",
          "emoji": "🇰🇷",
          "bgColor": "#1565C0"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesFamousCountries2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Countries - Part 2",
          videoId: "countries-famous-countries-2",
          bgGradient: ["#D32F2F","#EF9A9A"] as [string, string],
          accentColor: "#C62828",
          letters: [
          {
          "letter": "T",
          "word": "Turkey",
          "emoji": "🇹🇷",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "I",
          "word": "Israel",
          "emoji": "🇮🇱",
          "bgColor": "#1565C0"
          },
          {
          "letter": "S",
          "word": "Singapore",
          "emoji": "🇸🇬",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Malaysia",
          "emoji": "🇲🇾",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "T",
          "word": "Taiwan",
          "emoji": "🇹🇼",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "H",
          "word": "Hong Kong",
          "emoji": "🇭🇰",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "P",
          "word": "Philippines",
          "emoji": "🇵🇭",
          "bgColor": "#1565C0"
          },
          {
          "letter": "I",
          "word": "Indonesia",
          "emoji": "🇮🇩",
          "bgColor": "#C62828"
          },
          {
          "letter": "N",
          "word": "New Zealand",
          "emoji": "🇳🇿",
          "bgColor": "#1565C0"
          },
          {
          "letter": "E",
          "word": "Egypt",
          "emoji": "🇪🇬",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "South Africa",
          "emoji": "🇿🇦",
          "bgColor": "#33691E"
          },
          {
          "letter": "U",
          "word": "UAE",
          "emoji": "🇦🇪",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "S",
          "word": "Saudi Arabia",
          "emoji": "🇸🇦",
          "bgColor": "#33691E"
          },
          {
          "letter": "C",
          "word": "Colombia",
          "emoji": "🇨🇴",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "P",
          "word": "Peru",
          "emoji": "🇵🇪",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "C",
          "word": "Chile",
          "emoji": "🇨🇱",
          "bgColor": "#1565C0"
          },
          {
          "letter": "B",
          "word": "Bangladesh",
          "emoji": "🇧🇩",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "P",
          "word": "Pakistan",
          "emoji": "🇵🇰",
          "bgColor": "#33691E"
          },
          {
          "letter": "N",
          "word": "Nigeria",
          "emoji": "🇳🇬",
          "bgColor": "#33691E"
          },
          {
          "letter": "K",
          "word": "Kenya",
          "emoji": "🇰🇪",
          "bgColor": "#33691E"
          },
          {
          "letter": "C",
          "word": "Cuba",
          "emoji": "🇨🇺",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "J",
          "word": "Jamaica",
          "emoji": "🇯🇲",
          "bgColor": "#33691E"
          },
          {
          "letter": "G",
          "word": "Greece",
          "emoji": "🇬🇷",
          "bgColor": "#1565C0"
          },
          {
          "letter": "C",
          "word": "Czech Republic",
          "emoji": "🇨🇿",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "H",
          "word": "Hungary",
          "emoji": "🇭🇺",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "R",
          "word": "Romania",
          "emoji": "🇷🇴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "U",
          "word": "Ukraine",
          "emoji": "🇺🇦",
          "bgColor": "#1565C0"
          },
          {
          "letter": "C",
          "word": "Croatia",
          "emoji": "🇭🇷",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "L",
          "word": "Luxembourg",
          "emoji": "🇱🇺",
          "bgColor": "#1565C0"
          },
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesFamousCountries3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Famous Countries - Part 3",
          videoId: "countries-famous-countries-3",
          bgGradient: ["#E53935","#FFEBEE"] as [string, string],
          accentColor: "#D32F2F",
          letters: [
          {
          "letter": "L",
          "word": "Latvia",
          "emoji": "🇱🇻",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "L",
          "word": "Lithuania",
          "emoji": "🇱🇹",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "E",
          "word": "Estonia",
          "emoji": "🇪🇪",
          "bgColor": "#1565C0"
          },
          {
          "letter": "S",
          "word": "Slovakia",
          "emoji": "🇸🇰",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "Slovenia",
          "emoji": "🇸🇮",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "B",
          "word": "Bulgaria",
          "emoji": "🇧🇬",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "Serbia",
          "emoji": "🇷🇸",
          "bgColor": "#1565C0"
          },
          {
          "letter": "B",
          "word": "Bosnia and Herzegovina",
          "emoji": "🇧🇦",
          "bgColor": "#1565C0"
          },
          {
          "letter": "M",
          "word": "Montenegro",
          "emoji": "🇲🇪",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "A",
          "word": "Albania",
          "emoji": "🇦🇱",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "N",
          "word": "North Macedonia",
          "emoji": "🇲🇰",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Malta",
          "emoji": "🇲🇹",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "Cyprus",
          "emoji": "🇨🇾",
          "bgColor": "#33691E"
          },
          {
          "letter": "I",
          "word": "Iceland",
          "emoji": "🇮🇸",
          "bgColor": "#1565C0"
          },
          {
          "letter": "L",
          "word": "Luxembourg",
          "emoji": "🇱🇺",
          "bgColor": "#1565C0"
          },
          {
          "letter": "L",
          "word": "Liechtenstein",
          "emoji": "🇱🇮",
          "bgColor": "#1565C0"
          },
          {
          "letter": "A",
          "word": "Andorra",
          "emoji": "🇦🇩",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "M",
          "word": "Monaco",
          "emoji": "🇲🇨",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "San Marino",
          "emoji": "🇸🇲",
          "bgColor": "#33691E"
          },
          {
          "letter": "V",
          "word": "Vatican City",
          "emoji": "🇻🇦",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "G",
          "word": "Georgia",
          "emoji": "🇬🇪",
          "bgColor": "#1565C0"
          },
          {
          "letter": "A",
          "word": "Armenia",
          "emoji": "🇦🇲",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "A",
          "word": "Azerbaijan",
          "emoji": "🇦🇿",
          "bgColor": "#33691E"
          },
          {
          "letter": "M",
          "word": "Mauritius",
          "emoji": "🇲🇺",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Seychelles",
          "emoji": "🇸🇨",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Madagascar",
          "emoji": "🇲🇬",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "F",
          "word": "Fiji",
          "emoji": "🇫🇯",
          "bgColor": "#1565C0"
          },
          {
          "letter": "S",
          "word": "Samoa",
          "emoji": "🇼🇸",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "T",
          "word": "Tonga",
          "emoji": "🇹🇴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesAllAroundWorld"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "All Around the World",
          videoId: "countries-all-around-world",
          bgGradient: ["#FF6F00","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          },
          {
          "letter": "U",
          "word": "United States",
          "emoji": "🇺🇸",
          "bgColor": "#1565C0"
          },
          {
          "letter": "U",
          "word": "United Kingdom",
          "emoji": "🇬🇧",
          "bgColor": "#1565C0"
          },
          {
          "letter": "F",
          "word": "France",
          "emoji": "🇫🇷",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "G",
          "word": "Germany",
          "emoji": "🇩🇪",
          "bgColor": "#1565C0"
          },
          {
          "letter": "J",
          "word": "Japan",
          "emoji": "🇯🇵",
          "bgColor": "#E91E63"
          },
          {
          "letter": "C",
          "word": "China",
          "emoji": "🇨🇳",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "R",
          "word": "Russia",
          "emoji": "🇷🇺",
          "bgColor": "#1565C0"
          },
          {
          "letter": "B",
          "word": "Brazil",
          "emoji": "🇧🇷",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "A",
          "word": "Australia",
          "emoji": "🇦🇺",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "C",
          "word": "Canada",
          "emoji": "🇨🇦",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Mexico",
          "emoji": "🇲🇽",
          "bgColor": "#33691E"
          },
          {
          "letter": "I",
          "word": "Italy",
          "emoji": "🇮🇹",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Spain",
          "emoji": "🇪🇸",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "N",
          "word": "Netherlands",
          "emoji": "🇳🇱",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "A",
          "word": "Argentina",
          "emoji": "🇦🇷",
          "bgColor": "#1565C0"
          },
          {
          "letter": "S",
          "word": "South Africa",
          "emoji": "🇿🇦",
          "bgColor": "#33691E"
          },
          {
          "letter": "E",
          "word": "Egypt",
          "emoji": "🇪🇬",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "South Korea",
          "emoji": "🇰🇷",
          "bgColor": "#1565C0"
          },
          {
          "letter": "T",
          "word": "Thailand",
          "emoji": "🇹🇭",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "I",
          "word": "Indonesia",
          "emoji": "🇮🇩",
          "bgColor": "#C62828"
          },
          {
          "letter": "P",
          "word": "Philippines",
          "emoji": "🇵🇭",
          "bgColor": "#1565C0"
          },
          {
          "letter": "N",
          "word": "New Zealand",
          "emoji": "🇳🇿",
          "bgColor": "#1565C0"
          },
          {
          "letter": "S",
          "word": "Singapore",
          "emoji": "🇸🇬",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "V",
          "word": "Vietnam",
          "emoji": "🇻🇳",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Malaysia",
          "emoji": "🇲🇾",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "B",
          "word": "Bangladesh",
          "emoji": "🇧🇩",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "P",
          "word": "Pakistan",
          "emoji": "🇵🇰",
          "bgColor": "#33691E"
          },
          {
          "letter": "N",
          "word": "Nigeria",
          "emoji": "🇳🇬",
          "bgColor": "#33691E"
          },
          {
          "letter": "K",
          "word": "Kenya",
          "emoji": "🇰🇪",
          "bgColor": "#33691E"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesEuropean3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "European Countries - Part 3",
          videoId: "countries-european-3",
          bgGradient: ["#1E88E5","#64B5F6"] as [string, string],
          accentColor: "#1976D2",
          letters: [
          {
          "letter": "E",
          "word": "England",
          "emoji": "🏴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "F",
          "word": "France",
          "emoji": "🇫🇷",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "G",
          "word": "Germany",
          "emoji": "🇩🇪",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "Spain",
          "emoji": "🇪🇸",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "I",
          "word": "Italy",
          "emoji": "🇮🇹",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "P",
          "word": "Portugal",
          "emoji": "🇵🇹",
          "bgColor": "#33691E"
          },
          {
          "letter": "N",
          "word": "Netherlands",
          "emoji": "🇳🇱",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "B",
          "word": "Belgium",
          "emoji": "🇧🇪",
          "bgColor": "#263238"
          },
          {
          "letter": "S",
          "word": "Switzerland",
          "emoji": "🇨🇭",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "A",
          "word": "Austria",
          "emoji": "🇦🇹",
          "bgColor": "#C62828"
          },
          {
          "letter": "D",
          "word": "Denmark",
          "emoji": "🇩🇰",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Sweden",
          "emoji": "🇸🇪",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "N",
          "word": "Norway",
          "emoji": "🇳🇴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "F",
          "word": "Finland",
          "emoji": "🇫🇮",
          "bgColor": "#1565C0"
          },
          {
          "letter": "G",
          "word": "Greece",
          "emoji": "🇬🇷",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "P",
          "word": "Poland",
          "emoji": "🇵🇱",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "R",
          "word": "Romania",
          "emoji": "🇷🇴",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "Czech Republic",
          "emoji": "🇨🇿",
          "bgColor": "#1565C0"
          },
          {
          "letter": "H",
          "word": "Hungary",
          "emoji": "🇭🇺",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "I",
          "word": "Ireland",
          "emoji": "🇮🇪",
          "bgColor": "#33691E"
          },
          {
          "letter": "U",
          "word": "Ukraine",
          "emoji": "🇺🇦",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "R",
          "word": "Russia",
          "emoji": "🇷🇺",
          "bgColor": "#1565C0"
          },
          {
          "letter": "T",
          "word": "Turkey",
          "emoji": "🇹🇷",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "C",
          "word": "Croatia",
          "emoji": "🇭🇷",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Serbia",
          "emoji": "🇷🇸",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Bulgaria",
          "emoji": "🇧🇬",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "M",
          "word": "Montenegro",
          "emoji": "🇲🇪",
          "bgColor": "#827717"
          },
          {
          "letter": "A",
          "word": "Albania",
          "emoji": "🇦🇱",
          "bgColor": "#C62828"
          },
          {
          "letter": "L",
          "word": "Luxembourg",
          "emoji": "🇱🇺",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "M",
          "word": "Malta",
          "emoji": "🇲🇹",
          "bgColor": "#FF9800"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesAfrican2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "African Countries - Part 2",
          videoId: "countries-african-2",
          bgGradient: ["#388E3C","#C8E6C9"] as [string, string],
          accentColor: "#2E7D32",
          letters: [
          {
          "letter": "M",
          "word": "Mali",
          "emoji": "🇲🇱",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "N",
          "word": "Niger",
          "emoji": "🇳🇪",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "C",
          "word": "Chad",
          "emoji": "🇹🇩",
          "bgColor": "#1565C0"
          },
          {
          "letter": "C",
          "word": "Congo",
          "emoji": "🇨🇬",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "G",
          "word": "Gabon",
          "emoji": "🇬🇦",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "South Sudan",
          "emoji": "🇸🇸",
          "bgColor": "#263238"
          },
          {
          "letter": "E",
          "word": "Eritrea",
          "emoji": "🇪🇷",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "D",
          "word": "Djibouti",
          "emoji": "🇩🇯",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "S",
          "word": "Somalia",
          "emoji": "🇸🇴",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "C",
          "word": "Comoros",
          "emoji": "🇰🇲",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "M",
          "word": "Mauritius",
          "emoji": "🇲🇺",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Seychelles",
          "emoji": "🇸🇨",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "T",
          "word": "Togo",
          "emoji": "🇹🇬",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "B",
          "word": "Benin",
          "emoji": "🇧🇯",
          "bgColor": "#33691E"
          },
          {
          "letter": "G",
          "word": "Guinea",
          "emoji": "🇬🇳",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "L",
          "word": "Lesotho",
          "emoji": "🇱🇸",
          "bgColor": "#1565C0"
          },
          {
          "letter": "E",
          "word": "Eswatini",
          "emoji": "🇸🇿",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "M",
          "word": "Mauritania",
          "emoji": "🇲🇷",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "R",
          "word": "Rwanda",
          "emoji": "🇷🇼",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "B",
          "word": "Burundi",
          "emoji": "🇧🇮",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "Z",
          "word": "Zanzibar",
          "emoji": "🇹🇿",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "K",
          "word": "Kenya",
          "emoji": "🇰🇪",
          "bgColor": "#263238"
          },
          {
          "letter": "U",
          "word": "Uganda",
          "emoji": "🇺🇬",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "A",
          "word": "Angola",
          "emoji": "🇦🇴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "I",
          "word": "Ivory Coast",
          "emoji": "🇨🇮",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "S",
          "word": "Senegal",
          "emoji": "🇸🇳",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "N",
          "word": "Namibia",
          "emoji": "🇳🇦",
          "bgColor": "#1565C0"
          },
          {
          "letter": "Z",
          "word": "Zimbabwe",
          "emoji": "🇿🇼",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "B",
          "word": "Botswana",
          "emoji": "🇧🇼",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "T",
          "word": "Tanzania",
          "emoji": "🇹🇿",
          "bgColor": "#33691E"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesAfrican3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "African Countries - Part 3",
          videoId: "countries-african-3",
          bgGradient: ["#43A047","#E8F5E9"] as [string, string],
          accentColor: "#1B5E20",
          letters: [
          {
          "letter": "S",
          "word": "South Africa",
          "emoji": "🇿🇦",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "E",
          "word": "Egypt",
          "emoji": "🇪🇬",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "K",
          "word": "Kenya",
          "emoji": "🇰🇪",
          "bgColor": "#263238"
          },
          {
          "letter": "N",
          "word": "Nigeria",
          "emoji": "🇳🇬",
          "bgColor": "#33691E"
          },
          {
          "letter": "G",
          "word": "Ghana",
          "emoji": "🇬🇭",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "T",
          "word": "Tanzania",
          "emoji": "🇹🇿",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "M",
          "word": "Morocco",
          "emoji": "🇲🇦",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "E",
          "word": "Ethiopia",
          "emoji": "🇪🇹",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "U",
          "word": "Uganda",
          "emoji": "🇺🇬",
          "bgColor": "#263238"
          },
          {
          "letter": "R",
          "word": "Rwanda",
          "emoji": "🇷🇼",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "A",
          "word": "Algeria",
          "emoji": "🇩🇿",
          "bgColor": "#33691E"
          },
          {
          "letter": "T",
          "word": "Tunisia",
          "emoji": "🇹🇳",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "Z",
          "word": "Zimbabwe",
          "emoji": "🇿🇼",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "B",
          "word": "Botswana",
          "emoji": "🇧🇼",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "N",
          "word": "Namibia",
          "emoji": "🇳🇦",
          "bgColor": "#1565C0"
          },
          {
          "letter": "L",
          "word": "Libya",
          "emoji": "🇱🇾",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "S",
          "word": "Sudan",
          "emoji": "🇸🇩",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Madagascar",
          "emoji": "🇲🇬",
          "bgColor": "#C62828"
          },
          {
          "letter": "D",
          "word": "DR Congo",
          "emoji": "🇨🇩",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "C",
          "word": "Cameroon",
          "emoji": "🇨🇲",
          "bgColor": "#33691E"
          },
          {
          "letter": "I",
          "word": "Ivory Coast",
          "emoji": "🇨🇮",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "S",
          "word": "Senegal",
          "emoji": "🇸🇳",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "Z",
          "word": "Zambia",
          "emoji": "🇿🇲",
          "bgColor": "#33691E"
          },
          {
          "letter": "M",
          "word": "Malawi",
          "emoji": "🇲🇼",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "G",
          "word": "Gambia",
          "emoji": "🇬🇲",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "C",
          "word": "Cape Verde",
          "emoji": "🇨🇻",
          "bgColor": "#1565C0"
          },
          {
          "letter": "M",
          "word": "Mauritius",
          "emoji": "🇲🇺",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Seychelles",
          "emoji": "🇸🇨",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "A",
          "word": "Angola",
          "emoji": "🇦🇴",
          "bgColor": "#C62828"
          },
          {
          "letter": "B",
          "word": "Burkina Faso",
          "emoji": "🇧🇫",
          "bgColor": "#D32F2F"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesAmerican2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "American Countries - Part 2",
          videoId: "countries-american-2",
          bgGradient: ["#C62828","#EF9A9A"] as [string, string],
          accentColor: "#B71C1C",
          letters: [
          {
          "letter": "B",
          "word": "Brazil",
          "emoji": "🇧🇷",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "A",
          "word": "Argentina",
          "emoji": "🇦🇷",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "C",
          "word": "Chile",
          "emoji": "🇨🇱",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "P",
          "word": "Peru",
          "emoji": "🇵🇪",
          "bgColor": "#C62828"
          },
          {
          "letter": "C",
          "word": "Colombia",
          "emoji": "🇨🇴",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "V",
          "word": "Venezuela",
          "emoji": "🇻🇪",
          "bgColor": "#1565C0"
          },
          {
          "letter": "E",
          "word": "Ecuador",
          "emoji": "🇪🇨",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "B",
          "word": "Bolivia",
          "emoji": "🇧🇴",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "P",
          "word": "Paraguay",
          "emoji": "🇵🇾",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "U",
          "word": "Uruguay",
          "emoji": "🇺🇾",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "G",
          "word": "Guyana",
          "emoji": "🇬🇾",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "S",
          "word": "Suriname",
          "emoji": "🇸🇷",
          "bgColor": "#33691E"
          },
          {
          "letter": "C",
          "word": "Cuba",
          "emoji": "🇨🇺",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "J",
          "word": "Jamaica",
          "emoji": "🇯🇲",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "H",
          "word": "Haiti",
          "emoji": "🇭🇹",
          "bgColor": "#1565C0"
          },
          {
          "letter": "D",
          "word": "Dominican Rep",
          "emoji": "🇩🇴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "T",
          "word": "Trinidad",
          "emoji": "🇹🇹",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Barbados",
          "emoji": "🇧🇧",
          "bgColor": "#1565C0"
          },
          {
          "letter": "S",
          "word": "Saint Lucia",
          "emoji": "🇱🇨",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "A",
          "word": "Antigua",
          "emoji": "🇦🇬",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "D",
          "word": "Dominica",
          "emoji": "🇩🇲",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "G",
          "word": "Grenada",
          "emoji": "🇬🇩",
          "bgColor": "#C62828"
          },
          {
          "letter": "P",
          "word": "Panama",
          "emoji": "🇵🇦",
          "bgColor": "#1565C0"
          },
          {
          "letter": "C",
          "word": "Costa Rica",
          "emoji": "🇨🇷",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "N",
          "word": "Nicaragua",
          "emoji": "🇳🇮",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "H",
          "word": "Honduras",
          "emoji": "🇭🇳",
          "bgColor": "#1565C0"
          },
          {
          "letter": "E",
          "word": "El Salvador",
          "emoji": "🇸🇻",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "G",
          "word": "Guatemala",
          "emoji": "🇬🇹",
          "bgColor": "#1565C0"
          },
          {
          "letter": "B",
          "word": "Belize",
          "emoji": "🇧🇿",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "K",
          "word": "Saint Kitts",
          "emoji": "🇰🇳",
          "bgColor": "#2E7D32"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesAmerican3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "American Countries - Part 3",
          videoId: "countries-american-3",
          bgGradient: ["#E53935","#FFEBEE"] as [string, string],
          accentColor: "#C62828",
          letters: [
          {
          "letter": "U",
          "word": "USA",
          "emoji": "🇺🇸",
          "bgColor": "#1565C0"
          },
          {
          "letter": "C",
          "word": "Canada",
          "emoji": "🇨🇦",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Mexico",
          "emoji": "🇲🇽",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "B",
          "word": "Brazil",
          "emoji": "🇧🇷",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "A",
          "word": "Argentina",
          "emoji": "🇦🇷",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "C",
          "word": "Chile",
          "emoji": "🇨🇱",
          "bgColor": "#C62828"
          },
          {
          "letter": "P",
          "word": "Peru",
          "emoji": "🇵🇪",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "C",
          "word": "Colombia",
          "emoji": "🇨🇴",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "V",
          "word": "Venezuela",
          "emoji": "🇻🇪",
          "bgColor": "#1565C0"
          },
          {
          "letter": "E",
          "word": "Ecuador",
          "emoji": "🇪🇨",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "Cuba",
          "emoji": "🇨🇺",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "J",
          "word": "Jamaica",
          "emoji": "🇯🇲",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "P",
          "word": "Panama",
          "emoji": "🇵🇦",
          "bgColor": "#1565C0"
          },
          {
          "letter": "C",
          "word": "Costa Rica",
          "emoji": "🇨🇷",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "G",
          "word": "Guatemala",
          "emoji": "🇬🇹",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "H",
          "word": "Honduras",
          "emoji": "🇭🇳",
          "bgColor": "#1565C0"
          },
          {
          "letter": "N",
          "word": "Nicaragua",
          "emoji": "🇳🇮",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "E",
          "word": "El Salvador",
          "emoji": "🇸🇻",
          "bgColor": "#1565C0"
          },
          {
          "letter": "B",
          "word": "Belize",
          "emoji": "🇧🇿",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "T",
          "word": "Trinidad",
          "emoji": "🇹🇹",
          "bgColor": "#C62828"
          },
          {
          "letter": "B",
          "word": "Bahamas",
          "emoji": "🇧🇸",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "D",
          "word": "Dominican Rep",
          "emoji": "🇩🇴",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "H",
          "word": "Haiti",
          "emoji": "🇭🇹",
          "bgColor": "#1565C0"
          },
          {
          "letter": "P",
          "word": "Puerto Rico",
          "emoji": "🇵🇷",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Bolivia",
          "emoji": "🇧🇴",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "U",
          "word": "Uruguay",
          "emoji": "🇺🇾",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "P",
          "word": "Paraguay",
          "emoji": "🇵🇾",
          "bgColor": "#C62828"
          },
          {
          "letter": "G",
          "word": "Guyana",
          "emoji": "🇬🇾",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Suriname",
          "emoji": "🇸🇷",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "F",
          "word": "Falklands",
          "emoji": "🇫🇰",
          "bgColor": "#1565C0"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesOceania2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Oceania & Islands - Part 2",
          videoId: "countries-oceania-2",
          bgGradient: ["#00796B","#80CBC4"] as [string, string],
          accentColor: "#00695C",
          letters: [
          {
          "letter": "A",
          "word": "Australia",
          "emoji": "🇦🇺",
          "bgColor": "#1565C0"
          },
          {
          "letter": "N",
          "word": "New Zealand",
          "emoji": "🇳🇿",
          "bgColor": "#263238"
          },
          {
          "letter": "F",
          "word": "Fiji",
          "emoji": "🇫🇯",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "S",
          "word": "Samoa",
          "emoji": "🇼🇸",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "T",
          "word": "Tonga",
          "emoji": "🇹🇴",
          "bgColor": "#C62828"
          },
          {
          "letter": "V",
          "word": "Vanuatu",
          "emoji": "🇻🇺",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "P",
          "word": "Papua",
          "emoji": "🇵🇬",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Solomon",
          "emoji": "🇸🇧",
          "bgColor": "#33691E"
          },
          {
          "letter": "M",
          "word": "Marshall",
          "emoji": "🇲🇭",
          "bgColor": "#1565C0"
          },
          {
          "letter": "K",
          "word": "Kiribati",
          "emoji": "🇰🇮",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "P",
          "word": "Palau",
          "emoji": "🇵🇼",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "N",
          "word": "Nauru",
          "emoji": "🇳🇷",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "T",
          "word": "Tuvalu",
          "emoji": "🇹🇻",
          "bgColor": "#1565C0"
          },
          {
          "letter": "M",
          "word": "Micronesia",
          "emoji": "🇫🇲",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "G",
          "word": "Guam",
          "emoji": "🇬🇺",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "C",
          "word": "Cook Islands",
          "emoji": "🇨🇰",
          "bgColor": "#1565C0"
          },
          {
          "letter": "N",
          "word": "Niue",
          "emoji": "🇳🇺",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "F",
          "word": "French Polynesia",
          "emoji": "🇵🇫",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "T",
          "word": "Tahiti",
          "emoji": "🇵🇫",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "B",
          "word": "Bora Bora",
          "emoji": "🇵🇫",
          "bgColor": "#00897B"
          },
          {
          "letter": "H",
          "word": "Hawaii",
          "emoji": "🇺🇸",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "E",
          "word": "Easter Island",
          "emoji": "🇨🇱",
          "bgColor": "#FF5722"
          },
          {
          "letter": "S",
          "word": "Samoa American",
          "emoji": "🇦🇸",
          "bgColor": "#C62828"
          },
          {
          "letter": "W",
          "word": "Wallis",
          "emoji": "🇼🇫",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "R",
          "word": "Rarotonga",
          "emoji": "🇨🇰",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "N",
          "word": "New Caledonia",
          "emoji": "🇳🇨",
          "bgColor": "#1565C0"
          },
          {
          "letter": "C",
          "word": "Christmas Island",
          "emoji": "🇨🇽",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "M",
          "word": "Midway",
          "emoji": "🇺🇸",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "O",
          "word": "Oceania",
          "emoji": "🏳️",
          "bgColor": "#1565C0"
          },
          {
          "letter": "I",
          "word": "Indonesia",
          "emoji": "🇮🇩",
          "bgColor": "#D32F2F"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="CountriesNeighbors1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "India's Neighbors - Part 1",
          videoId: "countries-neighbors-1",
          bgGradient: ["#FF5722","#FFCCBC"] as [string, string],
          accentColor: "#BF360C",
          letters: [
          {
          "letter": "I",
          "word": "India",
          "emoji": "🇮🇳",
          "bgColor": "#FF9800"
          },
          {
          "letter": "P",
          "word": "Pakistan",
          "emoji": "🇵🇰",
          "bgColor": "#33691E"
          },
          {
          "letter": "B",
          "word": "Bangladesh",
          "emoji": "🇧🇩",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "N",
          "word": "Nepal",
          "emoji": "🇳🇵",
          "bgColor": "#0D47A1"
          },
          {
          "letter": "S",
          "word": "Sri Lanka",
          "emoji": "🇱🇰",
          "bgColor": "#827717"
          },
          {
          "letter": "B",
          "word": "Bhutan",
          "emoji": "🇧🇹",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "M",
          "word": "Myanmar",
          "emoji": "🇲🇲",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "China",
          "emoji": "🇨🇳",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "A",
          "word": "Afghanistan",
          "emoji": "🇦🇫",
          "bgColor": "#263238"
          },
          {
          "letter": "M",
          "word": "Maldives",
          "emoji": "🇲🇻",
          "bgColor": "#0288D1"
          },
          {
          "letter": "T",
          "word": "Thailand",
          "emoji": "🇹🇭",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "I",
          "word": "Indonesia",
          "emoji": "🇮🇩",
          "bgColor": "#C62828"
          },
          {
          "letter": "M",
          "word": "Malaysia",
          "emoji": "🇲🇾",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "Singapore",
          "emoji": "🇸🇬",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "V",
          "word": "Vietnam",
          "emoji": "🇻🇳",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "J",
          "word": "Japan",
          "emoji": "🇯🇵",
          "bgColor": "#E91E63"
          },
          {
          "letter": "K",
          "word": "South Korea",
          "emoji": "🇰🇷",
          "bgColor": "#1565C0"
          },
          {
          "letter": "P",
          "word": "Philippines",
          "emoji": "🇵🇭",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "C",
          "word": "Cambodia",
          "emoji": "🇰🇭",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "L",
          "word": "Laos",
          "emoji": "🇱🇦",
          "bgColor": "#1565C0"
          },
          {
          "letter": "T",
          "word": "Taiwan",
          "emoji": "🇹🇼",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Mongolia",
          "emoji": "🇲🇳",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "U",
          "word": "UAE",
          "emoji": "🇦🇪",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "S",
          "word": "Saudi Arabia",
          "emoji": "🇸🇦",
          "bgColor": "#33691E"
          },
          {
          "letter": "Q",
          "word": "Qatar",
          "emoji": "🇶🇦",
          "bgColor": "#827717"
          },
          {
          "letter": "O",
          "word": "Oman",
          "emoji": "🇴🇲",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "K",
          "word": "Kuwait",
          "emoji": "🇰🇼",
          "bgColor": "#33691E"
          },
          {
          "letter": "I",
          "word": "Iran",
          "emoji": "🇮🇷",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "R",
          "word": "Russia",
          "emoji": "🇷🇺",
          "bgColor": "#1565C0"
          },
          {
          "letter": "A",
          "word": "Australia",
          "emoji": "🇦🇺",
          "bgColor": "#42A5F5"
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
