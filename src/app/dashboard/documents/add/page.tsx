import HeaderDashboard from "@/components/layouts/HeaderDashboard";
import AddSection from "@/components/views/Dashboard/Documents/addDataDocument";

const page = () => {
  return (
    <>
      <HeaderDashboard breadcrumbLabel="Documents" />
      <div className=" p-8 mx-auto">
        <AddSection />
      </div>
    </>
  );
};

export default page;
