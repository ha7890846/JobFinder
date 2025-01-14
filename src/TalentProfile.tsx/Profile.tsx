import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";

const Profile = () => {
  return (
    <div className="w-2/3">
      <div className="relative">
        <img
          className="rounded-t-2xl"
          src="/profile/banner.jpg"
          alt="profile-background"
        />
        <img
          className="rounded-full w-48 h-48 -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8"
          src="/avatar.png"
          alt="profile-pic"
        />
      </div>
      <div className="px-3 mt-16">
        <div className="text-3xl font-semibold flex justify-between">
          Jarref Wood{" "}
          <Button color="bright-sun.4" variant="light">
            Message
          </Button>
        </div>
        <div className="text-xl flex gap-1 items-center">
          {" "}
          <IconBriefcase className="h-5 w-5" stroke={1.5} /> Software Engg
          &bull; Google
        </div>
        <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
          <IconMapPin className="h-5 w-5" stroke={1.5} /> London ,New York{" "}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">about</div>
        <div className="text-sm text-mine-shaft-300 text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eius
          quisquam provident explicabo officia aperiam inventore alias, delectus
          minima omnis!
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">Skills:</div>
        <div className="flex flex-wrap gap-2">
          <div className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1">
            React
          </div>
          <div className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1">
            java
          </div>
          <div className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1">
            SpringBoot
          </div>
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">Experience:</div>
      </div>
    </div>
  );
};
export default Profile;
