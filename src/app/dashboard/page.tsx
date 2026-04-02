import HeaderDashboard from "@/components/layouts/HeaderDashboard";
import { Sidebar } from "@/components/ui/sidebar";
import DataSectionView from "@/components/views/DashboardArticle";
import TableDashboard from "@/components/views/DashboardArticle/table";

const Page = () => {
  return (
    <>
      <HeaderDashboard />
      <div className=" p-8 mx-auto">
        <DataSectionView />
      </div>
    </>
  );
};

export default Page;
