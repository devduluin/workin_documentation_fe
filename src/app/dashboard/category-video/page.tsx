import HeaderDashboard from "@/components/layouts/HeaderDashboard";
import DataCategoryView from "@/components/views/Dashboard/Categories";
import DataCategoryVideoView from "@/components/views/Dashboard/CategoryVideo";

const Page = () => {
  return (
    <>
      <HeaderDashboard breadcrumbLabel="Category Video" />
      <div className=" p-8 mx-auto">
        <DataCategoryVideoView />
      </div>
    </>
  );
};

export default Page;
