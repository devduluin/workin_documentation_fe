import HeaderDashboard from "@/components/layouts/HeaderDashboard";
import DataArticleView from "@/components/views/Dashboard/Articles";

const Page = () => {
  return (
    <>
      <HeaderDashboard breadcrumbLabel="Article" />
      <div className=" p-8 mx-auto">
        <DataArticleView />
      </div>
    </>
  );
};

export default Page;
