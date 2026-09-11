import type { Dispatch, SetStateAction } from "react";
import type { TechnologiesType } from "../../types/TechnologieType";
import SelectedTechnologiesCard from "./SelectedTechnologiesCard";
import { toast } from "react-toastify";

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

  const handleRemoveAll = () => {
    toast.warning(` Removed All`, {
      position: "bottom-right",
    });
    setSelectedTechnologies([]);
  };

  return (
    <div className="my-10 border border-[#90929533] px-4 py-5 rounded-[13px] space-y-3">
      <div>
        <h1 className="text-[#0F172A] font-bold text-[20px]">Your Stack</h1>
        <p className="text-[#94A3B8]">{`${selectedTechnologies.length} Technology Selected`}</p>
      </div>
      {selectedTechnologies.map((selectedTechnologie) => (
        <SelectedTechnologiesCard
          selectedTechnologie={selectedTechnologie}
          selectedTechnologies={selectedTechnologies}
          setSelectedTechnologies={setSelectedTechnologies}
        ></SelectedTechnologiesCard>
      ))}

      <button
        onClick={handleRemoveAll}
        className="text-[#D82C20] w-full py-2 border border-[#ED8C85] rounded-2xl my-5 font-bold cursor-pointer"
      >
        Remove All
      </button>
    </div>
  );
};

export default SelectedTechnologies;
