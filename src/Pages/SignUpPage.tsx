import { IconBrandCtemplar } from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
import SignUp from "../SignUpLogin/SignUp";
import Login from "../SignUpLogin/Login";

const SignUpPage = () => {
    const location = useLocation();
    return (

        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden">
            <div className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0 ${location.pathname =='/signup'?'-translate-x-1/2':'translate-x-0'}`}>
                <Login/>
            <div className={`w-1/2 h-full ${location.pathname == "/signup"?"rounded-r-[200px]":"rounded-l-[200px]"} transition-all duration-1000 ease-in-out bg-mine-shaft-900 flex flex-col items-center gap-4 justify-center`}>
                <Link to="/">
                <div className="flex gap-2 items-center text-bright-sun-400">
                <IconBrandCtemplar className="h-16 w-16 stroke={2.5}" />
                <div className="text-6xl font-semibold">Jobber</div>
                </div>
                    </Link>
                    <div className="text-2xl text-mine-shaft-200 font-semibold"> Find the Job made for You..</div>
                </div>
            <SignUp/>
            </div>
        </div>
    )
}
export default SignUpPage;