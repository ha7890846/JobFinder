import Companies from "./Companies";
import DreamJob from "./DreamaJob";
import JobCategory from "./JobCategory";
import Subscribe from "./Subscribe";
import Testimonials from "./Testimonials";
import Working from "./Working";

const HomePage=()=>{
    return(
        <div className="min-h -[100vh] bg-mine-shaft-950 font-['poppins']">
            <DreamJob/>
            <Companies/>
            <JobCategory/>
            <Working/>
            <Testimonials/>
            <Subscribe/>
        </div>
    )
}
export default HomePage;