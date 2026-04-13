import HeaderDashboard from "@/components/layouts/HeaderDashboard";
import DataSectionView from "@/components/views/Dashboard/Documents";

const Page = () => {
  return (
    <>
      <HeaderDashboard breadcrumbLabel="Sections" />
      <div className=" p-8 mx-auto">
        <DataSectionView />
      </div>
    </>
  );
};

export default Page;
