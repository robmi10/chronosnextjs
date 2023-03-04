import React, { useState } from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";

import Link from "next/link";
import {
  InfoBackground,
  InfoContainer,
  InfoLeft,
  InfoLink,
  InfoRight,
} from "./info";

const Infos = () => {
  return (
    <TileWrapper numOfPages={3} id="info">
      <TileBackground>
        <InfoBackground />
      </TileBackground>
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <InfoContainer id="om-oss">
              <div className=" w-full h-36 md:h-full bg-black flex justify-center items-center ">
                <InfoLeft progress={progress}>
                  <span className=" md:text-5xl font-semibold  tracking-tight">
                    Om vår dricka
                  </span>
                </InfoLeft>
              </div>
              <InfoRight progress={progress}>
                <span className="mt-20 text-2xl font-semibold flex flex-col gap-2   text-black">
                  Existerande vitamindrycker innehåller ofta många andra
                  tillsatser såsom sötningsmedel. BioWTR innehåller tillskott
                  med ett tydligt syfte, inget annat. Vår första produkt är
                  berikad med niacin, ett B vitamin med hälsofrämjande
                  egenskaper. <Link href="/about">LÄS MER</Link>
                </span>
              </InfoRight>
            </InfoContainer>
          )}
        ></Tile>
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <InfoContainer>
              <div className=" w-full h-48 md:h-full bg-black flex justify-center items-center ">
                <InfoLeft progress={progress}>
                  <span className=" md:text-5xl font-semibold  tracking-tight">
                    Niacin bidrar bland annat till
                  </span>
                </InfoLeft>
              </div>

              <InfoRight progress={progress}>
                <span className="text-2xl md:text-2xl font-semibold   text-black">
                  <div className=" flex flex-col ">
                    <h1>Nervsystemets normala funktion</h1>
                    <h1>Normal psykologisk funktion</h1>
                    <h1>
                      Normal energiomsättning - Minskad trötthet och utmattning
                    </h1>
                  </div>
                </span>
              </InfoRight>
            </InfoContainer>
          )}
        ></Tile>
        <Tile
          page={2}
          renderContent={({ progress }) => (
            <InfoContainer>
              <div className=" w-full h-48 md:h-full bg-black flex justify-center items-center ">
                <InfoLeft progress={progress}>
                  <span className="text-4xl md:text-5xl font-semibold  tracking-tight">
                    Studier
                  </span>
                </InfoLeft>
              </div>
              <InfoRight progress={progress}>
                <span className=" md:text-2xl font-semibold   text-black">
                  <div className="text-2xl flex flex-col gap-4">
                    <div>
                      Niacin omsätts till NAD + i våra kroppar som är ett
                      viktigt ämne för många viktiga biologiska processer och
                      som sjunker när vi åldras.{" "}
                      <div>
                        <Link
                          className=" underline"
                          target="_blank"
                          href={
                            "https://www.science.org/doi/10.1126/science.aac4854?url_ver=Z39.88-2003&amp;rfr_id=ori:rid:crossref.org&amp;rfr_dat=cr_pub%20%200pubmed"
                          }
                        >
                          (1)
                        </Link>{" "}
                        <Link href="/science">LÄS MER</Link>
                      </div>
                    </div>
                    <div>
                      En klinisk studie har visat att niacin kan höja kroppens
                      NAD + nivåer samt förbättra muskelfunktion, framförallt
                      hos individer med åldersrelaterad muskelsjukdom.
                      <div>
                        <Link
                          target="_blank"
                          href={
                            "https://www.sciencedirect.com/science/article/pii/S155041312030190X?via%3Dihub#undfig1"
                          }
                        >
                          (2 Adult-onset mitochondrial myopathy)
                        </Link>
                      </div>
                    </div>
                  </div>
                </span>
              </InfoRight>
            </InfoContainer>
          )}
        ></Tile>
      </TileContent>
    </TileWrapper>
  );
};

export default Infos;
