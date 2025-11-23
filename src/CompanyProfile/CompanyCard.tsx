import { ActionIcon } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

const CompanyCard = (props:any) => {
    return (
            <div className="flex justify-between items-center bg-mine-shaft-900 rounded-lg p-2">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="h-10" src={`/Icons/${props.name}.png`} alt="Company logo" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="font-semibold">{props.name}</div>
                        <div className="text-xs text-mine-shaft-300">{props.employees} &#x2022; {props.applicants} Applicants</div>
                    </div>
                </div>
                <ActionIcon color="brightSun.4" variant="subtle" aria-label="Settings">
                    <IconExternalLink style={{width:'70%', height:'70%'}} stroke={1.5}/>
                </ActionIcon>
            </div>
    )
}
export default CompanyCard;