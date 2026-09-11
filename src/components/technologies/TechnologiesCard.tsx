import type { TechnologiesType } from "../../types/TechnologieType";

interface TechnologiesCardProps {
  Technologie: TechnologiesType;
}

const TechnologiesCard = ({ Technologie }: TechnologiesCardProps) => {
  return (
    <div>
      <div className="border border-[#90929533] rounded-[13px] ">
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
          <button className="bg-[#0A0F1D] text-white w-full py-3 px-2 rounded-[13px] cursor-pointer ">
            Add to Stack
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesCard;
