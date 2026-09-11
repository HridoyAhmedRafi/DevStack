import { use, useState } from "react";
import type { TechnologiesType } from "../../types/TechnologieType";
import AvailableTechnologies from "./AvailableTechnologies";
import SelectedTechnologies from "./SelectedTechnologies";

interface TechnologiesPromiseProps {
  TechnologiesPromise: Promise<TechnologiesType[]>;
}

const Technologies = ({ TechnologiesPromise }: TechnologiesPromiseProps) => {
  const Technologies = use(TechnologiesPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<
    TechnologiesType[]
  >([]);

  return (
    <div className="container mx-auto px-4 mb-20">
      <div>
        <h1 className="text-[36px] font-bold">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="text-[16px] text-[#94A3B8]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-9">
          <div>
            <AvailableTechnologies
              Technologies={Technologies}
              selectedTechnologies={selectedTechnologies}
              setSelectedTechnologies={setSelectedTechnologies}
            ></AvailableTechnologies>
          </div>
        </div>

        <div className="col-span-3">
          <div>
            <SelectedTechnologies
              selectedTechnologies={selectedTechnologies}
              setSelectedTechnologies={setSelectedTechnologies}
            ></SelectedTechnologies>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
