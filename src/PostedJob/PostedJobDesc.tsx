import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";
import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const PostedJobDesc = () => {
    return (
        <div className="mt-5 w-3/4 px-5">
            <div className="text-2xl font-semibold flex items-center">Software Engg<Badge variant="light" ml="sm" size="sm" color="brightSun.4">Badge</Badge></div>
            <div className="font-medium text-mine-shaft-300 mb-5">New York,USA</div>
            <div>
                <Tabs variant="outline" radius="lg" defaultValue="overview">
                    <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
                    <Tabs.Tab value="overview">Overview</Tabs.Tab>
                    <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                    <Tabs.Tab value="invited">Invited</Tabs.Tab>
                    </Tabs.List>
                
                    <Tabs.Panel className="[&>div]:w-full" value="overview">
                        <JobDesc edit/>
                    </Tabs.Panel>
                    <Tabs.Panel value="applicants">
                        <div className="flex mt-10 flex-wrap gap-5 justify-around">
                            {talents.map((talent,index)=>index<6 && <TalentCard posted key={index}{...talent} />)}
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="invited">
                        <div className="flex mt-10 flex-wrap gap-5 justify-around">
                            {talents.map((talent,index)=>index<6 && <TalentCard invited key={index}{...talent}/>)}
                        </div>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    )
}
export default PostedJobDesc;