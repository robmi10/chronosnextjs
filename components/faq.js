import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";

import Link from "next/link";
import {
  InfoBackground,
  InfoContainer,
  InfoLeft,
  InfoLink,
  InfoRight,
} from "./info";

const Faq = () => {
  return (
    <div className=" w-screen md:h-screen flex-col md:flex-row flex bg-red-100">
      <div className="bg-white md:w-2/4 h-full flex flex-col gap-4 text-black p-8 justify-center items-center">
        <div className=" flex flex-col gap-2">
          <span className=" text-2xl font-semibold">
            {" "}
            Vad är NMN och niacin?
          </span>
          <span>
            Både NMN och niacin är naturligt förekommande ämnen som kan omsättas
            till NAD + i kroppen. Läs mer om detta här.
          </span>
        </div>

        <div className=" flex flex-col gap-2">
          <span className=" text-2xl font-semibold">
            {" "}
            Kan jag få i mig NMN via kosten?
          </span>
          <span>
            Ja, NMN finns i nästan allt vi äter och nivåerna är höga i grönsaker
            och frukter såsom broccoli, avokado och tomat. Dock är de naturligt
            förekommande nivåerna runt 10mg NMN/kg föda, d.v.s. du behöver äta
            ca 25 Kg broccoli för att få i dig lika mycket NMN som i en BioWTR-
            flaska.
          </span>
        </div>

        <div className=" flex flex-col gap-2">
          <span className=" text-2xl font-semibold">
            {" "}
            Kommer jag leva ett friskare liv om jag dricker 1 flaska BioWTR om
            dagen?
          </span>
          <span>
            Vi kan inte säga hur BioWTR kommer påverka dig. Vi kan endast
            hänvisa till de vetenskapliga studier som gjorts och förmedla vad
            som de har visat. Läs mer om vetenskapen bakom BioWTR här.
          </span>
        </div>

        <div className=" flex flex-col gap-2">
          <span className=" text-2xl font-semibold">
            Kan BioWTR höja mina idrottsprestationer
          </span>
          <span>
            Vi kan inte säga hur BioWTR kommer påverka dig. Vi kan endast
            hänvisa till den vetenskapliga litteraturen där det finns en
            randomiserad kontroll studie där NMN-tillskott visats höja
            syreupptagningsförmågan hos friska individer som löptränar. Läs mer
            om vetenskapen bakom BioWTR här.
          </span>
        </div>
      </div>
      <div className="bg-black md:w-2/4 h-full flex flex-col gap-4 text-white p-8 justify-center items-center">
        <div className=" flex flex-col gap-2">
          <span className=" text-2xl font-semibold">
            Är NMN ett stabilt ämne?
          </span>
          <span>
            NMN är stabilt i rumstemperatur i pulverform. Vi vet dock inte hur
            stabilt NMN är i vatten men vi planerar att göra tester på BioWTR i
            samband med att vi växer som bolag.
          </span>
        </div>

        <div className=" flex flex-col gap-2">
          <span className=" text-2xl font-semibold">
            Kan det vara farligt att dricka för mycket BioWTR?
          </span>
          <span>
            I kliniska studier som gjorts har 250–1600 mg/dag använts vilket
            motsvarar ca 1–6 flaskor BioWTR. Intag inom detta spann har inte
            visats orsaka bieffekter. Vi vet dock inte om högre doser är säkert
            att förtära. Niacin kan däremot orsaka hudrodnad vid intag mellan
            30-1000 mg. mer info om niacin finns här (Niacin
            (livsmedelsverket.se). Vi rekommenderar därför konsumenten att vara
            uppmärksam för bieffekter vid intag av mer än 1 flaska om dagen.
          </span>
        </div>
        <div className=" flex flex-col gap-2">
          <span className=" text-2xl font-semibold">
            Varför innehåller BioWTR både NMN och niacin?
          </span>
          <span>
            Det finns flera ämnen som i kroppen omsätts till NAD + . Genom att
            berika med flera komponenter ökar vi sannolikheten till att höja
            nivåerna av NAD + .
          </span>
        </div>

        <div className=" flex flex-col gap-2">
          <span className=" text-2xl font-semibold">
            Varför sjunker NAD + -nivåerna i kroppen när vi åldras?
          </span>
          <span>
            Det vet vi inte riktigt ännu men i en studie (NAD+ flux is
            maintained in aged mice despite lower tissue concentrations -
            ScienceDirect) presenteras resultat som föreslår att det är kroppens
            användning av NAD + som ökar och inte själva produktionen. Detta kan
            bero på en sekundär effekt som orsakas av andra processer som kräver
            NAD + såsom reparation av ett skadat DNA.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Faq;
