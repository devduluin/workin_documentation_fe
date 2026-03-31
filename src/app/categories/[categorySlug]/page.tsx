import ArticlePage from "@/components/views/PageCategory";
import { getCategory } from "@/lib/API-hrms";

export const generateMetadata = async (props: any) => {
  const { params } = props;
  const slug = (await params).categorySlug;

  const data = await getCategory(slug).catch(() => null);
  return {
    title: `${data?.title} - Workin by Duluin Help Center`,
  };
};

const PageArticle = () => {
  return <ArticlePage />;
};

export default PageArticle;
