import type { Dispatch, SetStateAction } from "react";
import type { TechnologiesType } from "../../types/TechnologieType";
import { RxCross2 } from "react-icons/rx";


interface SelectedTechnologieCardProps {
  selectedTechnologie: TechnologiesType;
  selectedTechnologies: TechnologiesType[];
  setSelectedTechnologies: Dispatch<SetStateAction<TechnologiesType[]>>;
}

const SelectedTechnologiesCard = ({
  selectedTechnologie,
  selectedTechnologies,
  setSelectedTechnologies,
}: SelectedTechnologieCardProps) => {
  const handleRemoveTechnologies = (selectedTechnologie: TechnologiesType) => {
    const remainingTechnologie = selectedTechnologies.filter(
      (currentTechnologie) => currentTechnologie.id !== selectedTechnologie.id,
    );

    setSelectedTechnologies(remainingTechnologie);
  };

  return (
    <div>
      <div className="flex justify-between items-center border border-[#90929533] py-3 px-3 rounded-[13px]">
        <div className="flex items-center gap-3">
          <img
            src={selectedTechnologie.icon}
            alt={selectedTechnologie.name}
            className="w-10 h-10"
          />
          <div>
            <h2 className="text-[#0F172A] font-bold">
              {selectedTechnologie.name}
            </h2>
            <p className="text-[#94A3B8] text-[14px] font-semibold">
              {selectedTechnologie.category}
            </p>
          </div>
        </div>

        <span>
          <RxCross2
            className="text-[#94A3B8] text-2xl cursor-pointer"
            onClick={() => handleRemoveTechnologies(selectedTechnologie)}
          />
        </span>
      </div>
    </div>
  );
};

export default SelectedTechnologiesCard;
