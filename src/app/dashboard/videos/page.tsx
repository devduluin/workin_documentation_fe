import HeaderDashboard from "@/components/layouts/HeaderDashboard";
import DataSectionView from "@/components/views/DashboardArticle";

const Page = () => {
  return (
    <>
      <HeaderDashboard breadcrumbLabel="Videos" />
      <div className=" p-8 mx-auto">
        <DataSectionView />
      </div>
    </>
  );
};

export default Page;
