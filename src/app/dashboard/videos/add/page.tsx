import HeaderDashboard from "@/components/layouts/HeaderDashboard";
import AddSection from "@/components/views/Dashboard/Documents/addDataDocument";
import AddVideos from "@/components/views/Dashboard/Videos/addDataVideos";

const page = () => {
  return (
    <>
      <HeaderDashboard breadcrumbLabel="Videos" />
      <div className=" p-8 mx-auto">
        <AddVideos />
      </div>
    </>
  );
};

export default page;
