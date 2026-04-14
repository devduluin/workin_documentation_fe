import HeaderDashboard from "@/components/layouts/HeaderDashboard";
import EditDocument from "@/components/views/Dashboard/Documents/editDataDocument";

const Page = () => {
  return (
    <>
      <HeaderDashboard breadcrumbLabel="Documents" />
      <div className=" p-8 mx-auto">
        <EditDocument />
      </div>
    </>
  );
};

export default Page;
