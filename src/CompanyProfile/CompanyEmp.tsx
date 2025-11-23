import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const CompanyEmp = () => {
    return (
        <div className="flex mt-10 flex-wrap gap-16">
            {
                talents.map((talent,index)=>(index<6)&&(<TalentCard key={index}{...talent}/>))
            }
        </div>
    )
}
export default CompanyEmp;