import HeaderDashboard from "@/components/layouts/HeaderDashboard";
import EditVideos from "@/components/views/Dashboard/Videos/editDataVideos";

const Page = () => {
  return (
    <>
      <HeaderDashboard breadcrumbLabel="Videos" />
      <div className=" p-8 mx-auto">
        <EditVideos />
      </div>
    </>
  );
};

export default Page;
