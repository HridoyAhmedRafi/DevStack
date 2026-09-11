import type { Dispatch, SetStateAction } from "react";
import type { TechnologiesType } from "../../types/TechnologieType";

interface selectedTechnologiesProps {
  selectedTechnologies: TechnologiesType[];
  setSelectedTechnologies: Dispatch<SetStateAction<TechnologiesType[]>>;
}

const SelectedTechnologies = ({
  selectedTechnologies,
  setSelectedTechnologies,
}: selectedTechnologiesProps) => {
  if (selectedTechnologies.length === 0) {
    return (
      <div className="my-10 border border-[#90929533] px-4 py-5 rounded-[13px] space-y-3">
        <div>
          <h1 className="text-[#0F172A] font-bold text-[20px]">Your Stack</h1>
          <p className="text-[#94A3B8]">No technologies selected yet.</p>
        </div>

        <div className=" border-3  border-dotted border-[#90929533] px-10 py-5 rounded-[13px] flex items-center justify-center">
          <p className="text-[#94A3B8]">Your stack is empty.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="my-10 border border-[#90929533] px-4 py-5 rounded-[13px] space-y-3">
      <div>
        <h1 className="text-[#0F172A] font-bold text-[20px]">Your Stack</h1>
        <p className="text-[#94A3B8]">{`${selectedTechnologies.length} Technology Selected`}</p>
      </div>
      {selectedTechnologies.map((selectedTechnologie) => (
        <p>{selectedTechnologie.name}</p>
      ))}
    </div>
  );
};

export default SelectedTechnologies;
