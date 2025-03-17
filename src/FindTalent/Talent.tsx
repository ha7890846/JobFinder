import { talents } from "../Data/TalentData";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";

const Talents = () => {
  return (
    <div className="px-5 py-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Talents: </div>
        <Sort />
      </div>
      <div className="m-10 flex flex-wrap gap-10 justify-between">
        {
          talents.map((talent,index)=> <TalentCard key={index} {...talent}/>
          )
        }
      </div>
    </div>
  );
};
export default Talents;