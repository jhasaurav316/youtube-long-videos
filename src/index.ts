import { registerRoot } from "remotion";
import { AnimalRemotionRoot } from "./AnimalRoot";
import { BirdRemotionRoot } from "./BirdRoot";
import { FruitRemotionRoot } from "./FruitRoot";
import { VegetableRemotionRoot } from "./VegetableRoot";
import { FlowerRemotionRoot } from "./FlowerRoot";
import { SeaCreatureRemotionRoot } from "./SeaCreatureRoot";
import { InsectRemotionRoot } from "./InsectRoot";
import { DinosaurRemotionRoot } from "./DinosaurRoot";
import { InstrumentRemotionRoot } from "./InstrumentRoot";
import { VehicleRemotionRoot } from "./VehicleRoot";
import { CountryRemotionRoot } from "./CountryRoot";
import { SportRemotionRoot } from "./SportRoot";
import { FoodRemotionRoot } from "./FoodRoot";
import { ColorshapeRemotionRoot } from "./ColorshapeRoot";
import { SpaceRemotionRoot } from "./SpaceRoot";
import { LongVideoRemotionRoot } from "./LongVideoRoot";
import React from "react";

// ═══════════════════════════════════════════════════════════════════
// COMBINED ROOT - 1440+ Videos Total
// ═══════════════════════════════════════════════════════════════════
// SHORTS (440 videos) - 15 Categories × ~30 Videos Each (1080x1920)
// LONG VIDEOS (1000 videos) - Landscape Compilations (1920x1080)
// ═══════════════════════════════════════════════════════════════════
const CombinedRoot: React.FC = () => {
  return React.createElement(React.Fragment, null,
    // Shorts (440 videos, vertical 1080x1920)
    React.createElement(AnimalRemotionRoot),
    React.createElement(BirdRemotionRoot),
    React.createElement(FruitRemotionRoot),
    React.createElement(VegetableRemotionRoot),
    React.createElement(FlowerRemotionRoot),
    React.createElement(SeaCreatureRemotionRoot),
    React.createElement(InsectRemotionRoot),
    React.createElement(DinosaurRemotionRoot),
    React.createElement(InstrumentRemotionRoot),
    React.createElement(VehicleRemotionRoot),
    React.createElement(CountryRemotionRoot),
    React.createElement(SportRemotionRoot),
    React.createElement(FoodRemotionRoot),
    React.createElement(ColorshapeRemotionRoot),
    React.createElement(SpaceRemotionRoot),
    // Long Videos (1000 videos, landscape 1920x1080)
    React.createElement(LongVideoRemotionRoot)
  );
};

registerRoot(CombinedRoot);
