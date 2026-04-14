import ArticlePage from "@/components/views/PageArticles";
import { ApiHrms } from "@/lib/API-hrms";

export const generateMetadata = async (props: any) => {
  const { params } = props;
  const slug = (await params).id;

  const data = await ApiHrms.getDocumentById(slug).catch(() => null);

  return {
    title: `${data?.title_content} - Workin by Duluin Help Center`,
  };
};

const PageArticle = () => {
  return <ArticlePage />;
};

export default PageArticle;
