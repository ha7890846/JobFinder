import {
  Button,
  Divider,
  FileInput,
  LoadingOverlay,
  NumberInput,
  rem,
  Textarea,
  TextInput,
} from "@mantine/core";
import { Notification } from '@mantine/core';
import { IconCheck, IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplyJobComp = () => {
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [sec, setSec] = useState(5);
  const navigate = useNavigate();
  const handlePreview = () => {
    setPreview(!preview);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleSubmit = () => {
    setSubmit(true);
    let x = 5;
    setInterval(()=>{
      x--;
      setSec(x);
      if(x==0)navigate('/find-jobs')
    },1000)
  };
  return (
    <>
      <div className="w-2/3 mx-auto">
      <LoadingOverlay className="!fixed "
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'pink', type: 'bars' }}
        />
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="p-3 bg-mine-shaft-800 rounded-xl">
              <img
                className="h-20"
                src={`/Icons/Google.png`}
                alt="Company logo"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-2xl">Software Engineer</div>
              <div className="text-lg text-mine-shaft-300">
                Google &bull; 3 days Ago &bull; Applicants
              </div>
            </div>
          </div>
        </div>
        <Divider my="xl" />
        <div className="text-xl font-semibold mb-5">
          Submit your application
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput
              withAsterisk
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : ""
              }`}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              label="Full Name"
              placeholder="Enter Full Name"
            />
            <TextInput
              withAsterisk
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : ""
              }`}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              label="Email"
              placeholder="Enter Your mail"
            />
          </div>
          <div className="flex gap-10 [&>*]:w-1/2">
            <NumberInput
              withAsterisk
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : ""
              }`}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              label="Contact Mob"
              placeholder="Enter Your Number"
              hideControls
              min={0}
              max={9999999999}
              clampBehavior="strict"
            />
            <TextInput
              withAsterisk
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : ""
              }`}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              label="Portfolio"
              placeholder="Enter Link"
            />
          </div>
          <FileInput
            withAsterisk
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            leftSection={<IconPaperclip stroke={1.5} />}
            label="Attach your CV"
            placeholder="Your CV"
            leftSectionPointerEvents="none"
          />
          <Textarea
            withAsterisk
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            placeholder="About YourSelf & Achievments..."
            label="Cover Letter"
            autosize
            minRows={4}
          />
          {!preview && (
            <Button color="brightSun.4" variant="light" onClick={handlePreview}>
              Preview
            </Button>
          )}
          {preview && (
            <div className="flex gap-10 [&>*]:w-1/2">
              <Button
                fullWidth
                color="brightSun.4"
                variant="outline"
                onClick={handlePreview}
              >
                Edit
              </Button>
              <Button
                fullWidth
                color="brightSun.4"
                variant="light"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          )}
        </div>
      </div>
      <Notification className={`!border-bright-sun-400 !fixed top-0 left-[35%] transition duration-300 ease-in-out z-[1001] ${submit?"translate-y-0":"-translate-y-20"}`} icon={<IconCheck style={{width:rem(20),height:rem(20)}} />} color="teal" title="Application Submitted!" withBorder mt="md" withCloseButton={false}>
        Redirecting to Find jobs in {sec}sec....
      </Notification>
    </>
  );
};
export default ApplyJobComp;
