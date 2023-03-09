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
    <div className=" w-screen md:h-screen flex-col md:flex-row flex ">
      <div className="bg-white md:w-2/4 h-full flex flex-col gap-4 text-slate-700 p-8 justify-center items-center">
        <div className=" flex flex-col gap-2">
          <span className=" text-2xl font-semibold"> Vad är niacin?</span>
          <span>
            Niacin är ett B-vitamin (B3) och finns naturligt i kosten. Människor
            i västvärlden lider sällan av niacinbrist men ny forskning tyder på
            att tillskott av niacin högt över dagligt rekommenderat intag kan ha
            positiva hälsoeffekter.
          </span>
        </div>

        <div className=" flex flex-col gap-2">
          <span className=" text-2xl font-semibold">
            {" "}
            Finns niacin i kosten?
          </span>
          <span>
            Ja, niacin finns i kosten och det är sällan människor i västvärlden
            lider av niacinbrist. Dock kan tillskott av niacin ha hälsofrämjande
            effekter.
          </span>
        </div>

        <div className=" flex flex-col gap-2">
          <span className=" text-2xl font-semibold">
            {" "}
            Kommer jag att leva ett friskare liv om jag dricker BioWTR?
          </span>
          <span>
            Vi kan inte svara på hur BioWTR kommer att påverka dig. Vi kan
            endast hänvisa till de vetenskapliga studier som har gjorts där
            niacinets hälsofrämjande effekter studerats. Vi rekommenderar att du
            alltid rådgör med din läkare angående hälsofrämjande interventioner.
          </span>
        </div>

        <div className=" flex flex-col gap-2">
          <span className=" text-2xl font-semibold">
            Kan BioWTR höja mina idrottsprestationer?
          </span>
          <span>
            Niacintillskott har visats förbättra muskelfunktion i minst en
            klinisk studie gjort på människa. Vi kan dock inte svara på om det
            kommer ha en effekt på dina idrottsprestationer.
          </span>
        </div>
      </div>
      <div className="bg-slate-400 md:w-2/4 h-full flex flex-col gap-4 text-white p-8 justify-center items-center">
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
            Kan det vara farligt att dricka för mycket BioWTR
          </span>
          <span>
            En flaska BioWTR innehåller 16 mg Niacin vilket är 100% av
            rekommenderat dagligt intag. Betydligt högre nivåer av niacin
            används i kliniska studier (ca 100 gånger högre än rekommenderat
            dagligt intag) och ger sällan några biverkningar. Hos vissa
            individer kan niacinintag över 30 mg per dag ge biverkningar och
            detta manifesterar i hudrodnad. Vi rekommenderar därför att alla
            konsumenter rådgör med sin läkare om det dagliga rekommenderade
            intaget av niacin planeras överskridas.
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
