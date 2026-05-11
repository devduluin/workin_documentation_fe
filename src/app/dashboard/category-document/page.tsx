import HeaderDashboard from "@/components/layouts/HeaderDashboard";
import DataCategoryView from "@/components/views/Dashboard/Categories";

const Page = () => {
  return (
    <>
      <HeaderDashboard breadcrumbLabel="Category Document" />
      <div className=" p-8 mx-auto">
        <DataCategoryView />
      </div>
    </>
  );
};

export default Page;
