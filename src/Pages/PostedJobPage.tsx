import PostedJob from "../PostedJob/PostedJob";
import PostedJobDesc from "../PostedJob/PostedJobDesc";

const PostedJobPage = () => {
    return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <div className="flex gap-5">
                <PostedJob />
                <PostedJobDesc/>
      </div>
    </div>
  );
}
export default PostedJobPage;