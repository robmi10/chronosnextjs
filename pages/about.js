import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const About = () => {
  return (
    <div className=" w-screen h-screen flex-row flex bg-red-100">
      <div className="bg-white w-2/4 h-auto  flex flex-col gap-4 text-black p-8 justify-center items-center">
        <Link href="/" className=" absolute top-0 left-0 p-8">
          <AiOutlineArrowLeft size={30} />
        </Link>
        <div className=" flex flex-col gap-2">
          <span className=" text-2xl font-semibold"> OM OSS </span>
        </div>
      </div>
      <div className="bg-black w-2/4 h-full flex flex-col gap-4 text-white p-8 justify-center items-center">
        <div className=" flex flex-col gap-2">
          <span>
            Ett kolsyrat vatten innehållandes tillskott med ett tydligt syfte,
            det är vår vision. Existerande vitmanidrycker innehåller ofta inte
            bara vitaminer utan även många andra ämnen såsom sötningsmedel.
            Dessutom tyckte vi inte att det var tydligt vad syftet med
            kombinationen av tillskott i existerande drycker på marknaden var.
            Därför valde vi att skapa ett vanligt kolsyrat vatten innehållandes
            tillskott med en tydlig anledning. Slutresultatet blev BioWTR, ett
            kolsyrat vatten med niacin (vitamin B3) och NMN
            (nikotinamidmononukleotid). Den gemensamma nämnaren för niacin och
            NMN är att båda kan omsättas till NAD +
            (nikotinamidadeninnukleotid). Läs mer om NAD + och vetenskapen bakom
            BioWTR här.
          </span>

          <span>
            BioWTR med niacin och NMN är vår första produkt, men vår vision är
            att hela tiden hålla oss i framkant med nya produkter med tydliga
            syften baserade på den exponentiellt snabbt växande vetenskapen inom
            nutrition.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
