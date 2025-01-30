import CardsGrid from "../components/PartCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/Accordion";

/* Data */

import shafts from "../data/1_shafts.json";
import fastners from "../data/2_fastners.json";
import gears from "../data/3_gears.json";
import springs from "../data/4_springs.json";
import belts from "../data/5_belts.json";
import bearings from "../data/6_bearings.json";
import couplings from "../data/7_couplings.json";
import powerScrews from "../data/8_power_screws.json";
import lockingElements from "../data/9_locking_elements.json";
import wires from "../data/10_wires.json";
import keysAndPins from "../data/11_keys_and_pins.json";
import otherPrimaryComponents from "../data/12_other_primary_components.json";
import seals from "../data/13_seals.json";
import otherSecondaryComponents from "../data/14_other_secondary_components.json";
import nutsAndWashers from "../data/15_nuts_and_washers.json";
import chains from "../data/16_chains.json";

/* Deprecated */

// ["2-5", "Concrete screw", "A screw designed for fastening materials to concrete, brick, or block substrates. It features a hardened steel construction and special threads for secure anchoring in masonry surfaces. Concrete screws are commonly used in construction and renovation projects."],
// ["3-11", "Harmonic Drive", ""],
// ["3-12", "Cycloidal Drive", ""],
// ["3-13", "Sprocket and Chain", ""],
// ["6-", "Pillow Block Bearing"],
// ["6-", "Flange Bearing"],
// ["6-", "Cartridge Bearing"],
// ["6-", "Take-Up Bearing"],
// ["6-", "Hanger Bearing"],
// ["6-", "Rod End Bearing"],
// ["6-", "Sleeve Bearing"],

/* Important Links 

https://www.mcgill.ca/engineeringdesign/step-step-design-process/design-definitions-and-terminology/shelf-components
https://www.roymech.co.uk/Useful_Tables/Keyways#:~:text=Keys%20and%20splines%20are%20mechanical,transmission%20and%20precise%20angular%20positioning.
https://www.ksb.com/en-global/centrifugal-pump-lexicon/article/shaft-seal-1116516

*/

import React, { useState, useEffect } from "react";

type DataType1 = [string, string, string, string[]][];

const useAccordionState = (key: string, defaultValue: string[]) => {
  const [state, setState] = useState<string[]>(() => {
    const savedState = localStorage.getItem(key);
    return savedState ? JSON.parse(savedState) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState] as const;
};

const AccordionContext = React.createContext<{
  state: string[];
  setState: React.Dispatch<React.SetStateAction<string[]>>;
} | null>(null);

export const AccordionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useAccordionState("accordionState", [
    "item-1",
    "item-2",
  ]);

  return (
    <AccordionContext.Provider value={{ state, setState }}>
      {children}
    </AccordionContext.Provider>
  );
};

const useAccordion = () => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within an AccordionProvider");
  }
  return context;
};

export default function CardsView() {
  return (
    <AccordionProvider>
      <div className="space-y-6 sm:space-y-8 md:space-y-10 content__container">
        <AccordionComponent />
      </div>
    </AccordionProvider>
  );
}

const AccordionComponent: React.FC = () => {
  const { state, setState } = useAccordion();

  const items = [
    {
      value: "item-1",
      title: "Primary Components",
      content: (
        <>
          <p>Components that are fundamental to mechanical systems</p>
          <h3>Fastners</h3>
          <CardsGrid cards={fastners as DataType1} />
          <h3>Nuts and Washers</h3>
          <CardsGrid cards={nutsAndWashers as DataType1} />
          <h3>Gears</h3>
          <p>
            Gears are mechanical components with teeth that mesh with other gear
            teeth to transmit torque and motion. They are primarily used to
            alter the speed, direction, and torque of mechanical power in
            systems. By varying the size, shape, and arrangement of gears, they
            can increase speed (at the expense of torque), amplify torque (while
            reducing speed), or change the direction of movement. Gears are
            essential in machinery, automotive systems, and many mechanical
            devices, allowing for efficient power transmission and mechanical
            advantage in various applications.
          </p>
          <CardsGrid cards={gears as DataType1} />
          <h3>Springs</h3>
          <CardsGrid cards={springs as DataType1} />
          <h3>Belts</h3>
          <CardsGrid cards={belts as DataType1} />
          <h3>Chains</h3>
          <CardsGrid cards={chains as DataType1} />
          <h3>Power Screws</h3>
          <CardsGrid cards={powerScrews as DataType1} />
          <h3>Keys and Pins</h3>
          <CardsGrid cards={keysAndPins as DataType1} />
          <h3>Other Primary Components</h3>
          <CardsGrid cards={otherPrimaryComponents as DataType1} />
        </>
      ),
    },
    {
      value: "item-2",
      title: "Secondary Components",
      content: (
        <>
          <p>Components that are not fundamental but complete the mechanism</p>
          <h3>Bearings</h3>
          <CardsGrid cards={bearings as DataType1} />
          <h3>Couplings</h3>
          <CardsGrid cards={couplings as DataType1} />
          <h3>Locking Elements</h3>
          <CardsGrid cards={lockingElements as DataType1} />
          <h3>Wires and Cables</h3>
          <CardsGrid cards={wires as DataType1} />
          <h3>Seals</h3>
          <CardsGrid cards={seals as DataType1} />
          <h3>Other Secondary Components</h3>
          <CardsGrid cards={otherSecondaryComponents as DataType1} />
        </>
      ),
    },
    {
      value: "item-3",
      title: "Active Components",
      content: (
        <>
          <h3>Motors</h3>
          <h3>Actuators</h3>
          <h3>Pumps</h3>
          <h3>Heating Elements</h3>
        </>
      ),
    },
    {
      value: "item-4",
      title: "Custom-Made Components",
      content: (
        <>
          <h3>Shafts</h3>
          <p>
            Mechanical shafts are fundamental components in machine design,
            responsible for transmitting power or motion between different parts
            of a mechanical system
          </p>
          <CardsGrid cards={shafts as DataType1} />
          <h3>Bodies</h3>
          <h3>Structures</h3>
          <h3>Flywheels</h3>
          <h3>Cams</h3>
        </>
      ),
    },
    // {
    //   value: "item-5",
    //   title: "Consumable Elements",
    //   content: (
    //     <>
    //       {/**
    //        * Gland Packing
    //        * Greases
    //        * Oils
    //        * Coolants
    //        * Lubricants
    //        * Adhesives
    //        * Sealants
    //        * Paints
    //        * Sheets
    //        * Strips
    //        */}
    //     </>
    //   ),
    // },
    {
      value: "item-6",
      title: "Common Assemblies",
      content: (
        <>
          <h3>Brakes and Clutches</h3>
          <h3>Gearboxes</h3>
          <h3>Differentials</h3>
          <h3>Joints</h3>
        </>
      ),
    },
  ];

  return (
    <Accordion type="multiple" className="w-full" defaultValue={state}>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger
            onClick={() => {
              if (state.includes(item.value)) {
                setState(state.filter((i) => i !== item.value));
              } else {
                setState([...state, item.value]);
              }
            }}
          >
            <h2>{item.title}</h2>
          </AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
