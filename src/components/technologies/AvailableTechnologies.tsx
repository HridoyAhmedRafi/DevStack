import type { TechnologiesType } from "../../types/TechnologieType";
import TechnologiesCard from "./TechnologiesCard";

interface TechnologieProps {
  Technologies: TechnologiesType[];
}

const AvailableTechnologies = ({ Technologies }: TechnologieProps) => {
  return (
    <>
      <div className=" my-10">
        <div className="grid grid-cols-3 gap-5">
          {Technologies.map((Technologie) => (
            <TechnologiesCard
              Technologie={Technologie}
              key={Technologie.id}
            ></TechnologiesCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default AvailableTechnologies;
