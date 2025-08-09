import { IconHeart, IconMapPin } from "@tabler/icons-react";
import { Avatar, Button, Divider, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const TalentCard = (props: any) => {
  return (
    <div className="bg-mine-shaft-900 p-5 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 transition duration-300 ease-in-out ">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-full">
            <Avatar
              size="lg"
              src={`/${props.image}.png`}
              alt="Talent Profile"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold text-lg">{props.name}</div>
            <div className="text-s text-mine-shaft-300">
              {props.role} &bull; {props.company}
            </div>
          </div>
        </div>
        <IconHeart className="text-mine-shaft-300 cursor-pointer" />
      </div>
      <div className="flex gap-2">
        {props.topSkills?.map((skill: any, index: any) => (
          <div
            key={index}
            className="flex gap-2 p-2 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs"
          >
            {skill}
          </div>
        ))}
      </div>
      <Text
        className="!text-xs text-justify !text-mine-shaft-300"
        lineClamp={3}
      >
        {props.about}
      </Text>

      <Divider size="xs" color="mineShaft.7" />
      <div className="flex justify-between">
        <div className="font-semibold text-mine-shaft-200">
          {props.expectedCtc}
        </div>
        <div className="flex gap-1 text-xs items-center text-mine-shaft-400">
          <IconMapPin className="h-5 w-5" stroke={1.5} /> {props.location}
        </div>
      </div>
      <Divider size="xs" color="mineShaft.7" />
      <div className="flex text-bright-sun-500 [&>*]:w-1/2 [&>*]:p-1">
        <div className="hover:shadow-[0_0_3px_1px_yellow] !shadow-bright-sun-300 transition duration-300 ease-in-out ">
          <Link to={"/talent-profile"}>
            <Button color="brightSun.4" variant="outline" fullWidth>
              Profile
            </Button>
          </Link>
        </div>

        <div>
          <Button color="brightSun.4" variant="light" fullWidth>
            Message
          </Button>
        </div>
      </div>
    </div>
  );
};
export default TalentCard;
