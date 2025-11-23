import { Avatar, Button, Divider, Tabs } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import AboutComp from "./AboutComp";
import JobComp from "./JobComp";
import CompanyEmp from "./CompanyEmp";

const Company = () => {

  return (
    <div className="w-3/4">
      <div className="relative">
        <img
          className="rounded-t-2xl"
          src="/Profile/banner.jpg"
          alt="profile-background"
        />
        <img
          className="rounded-3xl w-36 h-436 -bottom-1/4 absolute left-5 bg-mine-shaft-950 border-8 p-2 border-mine-shaft-950 border-8"
          src="/Icons/Google.png"
          alt="profile-pic"
        />
      </div>
      <div className="px-3 mt-16">
        <div className="text-3xl font-semibold flex justify-between">
          Google
          <Avatar.Group>
            <Avatar src="avatar.png" />
            <Avatar src="avatar1.png" />
            <Avatar src="avatar2.png" />
            <Avatar>+10K</Avatar>
          </Avatar.Group>
        </div>
        <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
          <IconMapPin className="h-5 w-5" stroke={1.5} /> location &rbrace;
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div>
        <Tabs variant="outline" radius="lg" defaultValue="about">
          <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
            <Tabs.Tab value="about">About</Tabs.Tab>
            <Tabs.Tab value="second">Jobs</Tabs.Tab>
            <Tabs.Tab value="employee">Employees</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="about"><AboutComp/></Tabs.Panel>
          <Tabs.Panel value="second"><JobComp/></Tabs.Panel>
          <Tabs.Panel value="employee"><CompanyEmp/></Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};
export default Company;
