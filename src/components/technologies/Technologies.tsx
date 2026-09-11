import { use } from "react";
import type { TechnologiesType } from "../../types/TechnologieType";

interface TechnologiesPromiseProps {
  TechnologiesPromise: Promise<TechnologiesType[]>;
}

const Technologies = ({ TechnologiesPromise }: TechnologiesPromiseProps) => {
  const Technologies = use(TechnologiesPromise);
  console.log(Technologies);
  return <div></div>;
};

export default Technologies;
