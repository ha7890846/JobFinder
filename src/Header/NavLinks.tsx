import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Find Jobs", url: "find-jobs" },
    { name: "Find Talent", url: "find-talent" },
    { name: "Post Jobs", url: "post-job" },
    { name: "Posted Job", url: "posted-job"},
    { name: "Job History", url: "job-history"},
    { name: "sign up", url: "signup"},
  ];
  const location = useLocation();
  return (
    <div className="flex gap-5 text-mine-shaft-300 items-center h-full ">
      {links.map((link, index) => (
        <div key={index}
          className={`${
            location.pathname == "/" + link.url
              ? "border-bright-sun-400 text-bright-sun-400"
              : "border-transparent "
          }
             hover:text-bright-sun-500 hover:border-bright-sun-500  border-t-[3px] h-full flex items-center `}
        >
          <Link key={index} to={link.url}>
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
export default NavLinks;
