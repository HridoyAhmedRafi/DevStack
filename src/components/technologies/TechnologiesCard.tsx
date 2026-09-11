import { type Dispatch, type SetStateAction } from "react";
import type { TechnologiesType } from "../../types/TechnologieType";
import { toast } from "react-toastify";

interface TechnologiesCardProps {
  Technologie: TechnologiesType;
  selectedTechnologies: TechnologiesType[];
  setSelectedTechnologies: Dispatch<SetStateAction<TechnologiesType[]>>;
}

const TechnologiesCard = ({
  Technologie,
  selectedTechnologies,
  setSelectedTechnologies,
}: TechnologiesCardProps) => {
  // const [isClicked, setIsClicked] = useState(false);
  const isClicked = selectedTechnologies.some(
    (technologie) => technologie.id === Technologie.id,
  );
  const handleSelectedTechnologiesCard = () => {
    toast.success(`${Technologie.name} Added successfully`, {
      position: "bottom-right",
    });

    const selectedTechnologiesCard = [...selectedTechnologies, Technologie];
    setSelectedTechnologies(selectedTechnologiesCard);
    // setIsClicked(true);
  };

  return (
    <div>
      <div className="border border-[#90929533] rounded-[13px] cursor-pointer  transition-all duration-300 hover:-translate-y-2">
        <div className="py-4 px-4 space-y-4">
          <div className="flex justify-between ">
            <img
              src={Technologie.icon}
              alt={Technologie.name}
              className="w-10 h-10"
            />
            <p className="border border-[#90929533] px-2 py-1 rounded-2xl">
              {Technologie.badge}
            </p>
          </div>
          <div>
            <p className="text-[18px] text-[#0F172A] font-bold">
              {Technologie.name}
            </p>
            <p className="text-[#64748B] text-[15px]">
              {Technologie.description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="bg-[#F1F5F9] text-[#475569] px-3 py-1 rounded">
              {Technologie.category}
            </p>
            <p className="text-[#64748B]">{Technologie.difficulty}</p>
            <span>⭐{Technologie.rating}</span>
          </div>
          <button
            onClick={handleSelectedTechnologiesCard}
            className="bg-[#0A0F1D] text-white w-full py-3 px-2 rounded-[13px] cursor-pointer disabled:bg-gray-500 disabled:opacity-70 disabled:cursor-not-allowed "
            disabled={isClicked}
          >
            {isClicked === true ? "✓ Added to Stack" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesCard;
