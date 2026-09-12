import type { Dispatch, SetStateAction } from "react";
import type { TechnologiesType } from "../../types/TechnologieType";
import TechnologiesCard from "./TechnologiesCard";

interface TechnologieProps {
  Technologies: TechnologiesType[];
  selectedTechnologies: TechnologiesType[];
  setSelectedTechnologies: Dispatch<SetStateAction<TechnologiesType[]>>;
}

const AvailableTechnologies = ({
  Technologies,
  selectedTechnologies,
  setSelectedTechnologies,
}: TechnologieProps) => {
  return (
    <>
      <div className=" my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Technologies.map((Technologie) => (
            <TechnologiesCard
              Technologie={Technologie}
              key={Technologie.id}
              selectedTechnologies={selectedTechnologies}
              setSelectedTechnologies={setSelectedTechnologies}
            ></TechnologiesCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default AvailableTechnologies;
