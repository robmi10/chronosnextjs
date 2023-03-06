import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Science = () => {
  return (
    <div className=" w-screen md:h-screen md:flex-row md:flex ">
      <div className="bg-white md:w-2/4 h-screen  flex flex-col gap-4 text-slate-700 p-8 justify-center items-center">
        <Link href="/" className=" absolute top-20 left-0 p-8 animate-pulse">
          <AiOutlineArrowLeft size={30} />
        </Link>
        <div className=" flex flex-col gap-2">
          <span className=" text-2xl font-semibold"> VETENSKAP </span>
        </div>
      </div>
      <div className="bg-slate-400 md:w-2/4 h-full flex flex-col gap-4 text-white p-8 justify-center items-center">
        <div className=" animate-animate  flex flex-col gap-2">
          <span>
            NAD + (nikotinamidadeninnukleotid) är en viktig faktor för flera
            funktioner i människokroppen såsom ämnesomsättningen och reparation
            av arvsmassan och har visats sjunka i kroppen när vi åldras (1) .
            Detta forskningsfält är relativt nytt och vi lär oss mer om NAD +
            roll i åldrande och hälsolängden ju mer studier som görs. Nedan
            följer en sammanfattning av vad vetenskapen hittills säger om NAD +
            samt om hur detta system möjligtvis kan hackas med hjälp av
            kosttillskott.
          </span>
        </div>

        <div className="animate-animate flex flex-col gap-2">
          <span>
            Människokroppen utvinner energi från fett, kolhydrater och protein
            med hjälp av flera olika enzymatiska reaktioner. Denna process
            kallas för metabolism eller ämnesomsättning. Enzym i
            ämnesomsättningen använder sig bland annat av NAD + för att utvinna
            energin från näringsämnen. Den lagrade energin transporteras till
            mitokondrierna som kan utvinna denna energi via
            elektrontransportkedjan. NAD + är inte enbart involverad i att
            reglera enzym i ämnesomsättningen utan även enzym som lagar
            arvsmassan eller styr uttrycket av gener via en process som kallas
            för epigenetik. Den breda rollen NAD + har i människoceller gör att
            den kopplar ihop biologiska funktioner i kroppen såsom
            ämnesomsättningen och genuttrycket (2) .
          </span>
        </div>
        <div className="animate-animate flex flex-col gap-2">
          <span>
            Det kronologiska åldrandet är idag omöjligt att bromsa, men kan vi
            på något sätt höja de sjunkande NAD + nivåerna som åldrandet medför?
            Ett sätt är att äta mindre, något som kallas för kalorirestriktion.
            På så sätt kommer enzymen i ämnesomsättningen inte behöva lika
            mycket NAD + och nivåerna kommer att bibehållas. En alternativ metod
            är genom tillskott av ämnen som omsätts till NAD + i kroppen såsom
            niacin (vitamin B3) och NMN (nikotinamidmononukleotid). NMN
            tillskott har visats förlänga hälsospannet (friskare liv) hos möss
            (3, 4) . Färre studier har gjorts på människa men de som finns har
            visat att NMN tillskott (250 mg/dag=1 BioWTR flaska) ökar
            insulinkänsligheten efter 10 veckor hos kvinnor med övervikt och ett
            förstudie till diabetes (5) samt ökar syreupptagningsförmågan i
            samband med löpträning hos unga friska individer vid ett intag av
            600-1200 mg/dag (6) (3-4 flaskor BioWTR).
          </span>
        </div>

        <div className="animate-animate flex flex-col gap-2">
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

export default Science;
