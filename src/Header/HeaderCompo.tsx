import {  Indicator } from "@mantine/core";
import { IconBell, IconBrandCtemplar, IconSettings } from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const HeaderCompo = () => {
  const location = useLocation();
  return (
    location.pathname != "/signup" && location.pathname != "/login" ?
    <div className="w-full bg-mine-shaft-950 text-white h-28 flex justify-between px-6 items-center">
      <Link to="/">
        <div className="flex gap-1 items-center text-bright-sun-400">
          <IconBrandCtemplar className="h-10 w-10 stroke={3}" />
          <div className="text-3xl font-semibold">Jobber</div>
        </div>
      </Link>
      {NavLinks()}
      {/* Profile Section */}
      <div className="flex gap-3 items-center cursor-pointer">
          <ProfileMenu/>

        <div className="flex gap-3 bg-mine-shaft-900 p-1.5 rounded-full">
          <IconSettings stroke={1.5} />
        </div>

        <div className="flex gap-3 bg-mine-shaft-900 p-1.5 rounded-full">
          <Indicator
            color="brightSun.4"
            offset={6}
            radius="md"
            size={8}
            processing
          >
            <IconBell stroke={1.5} />
          </Indicator>
        </div>
      </div>
    </div>:<></>
  );
};
export default HeaderCompo;
