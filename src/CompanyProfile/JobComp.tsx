import { jobList } from "../Data/JobsData"
import JobCard from "../FindJobs/JobCard"

const JobComp = () => {
    return (
        <div className="flex mt-10 flex-wrap gap-8">
            {
                jobList.map((job,index)=><JobCard key={index} {...job}/>)
            }
        </div>
    )
}
export default JobComp;