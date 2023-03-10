import { FC } from "react";
import { Article } from "../components/article/article.component";

interface ArticlePageProps {}

export const ArticlePage: FC<ArticlePageProps> = () => {
  return (
    <div>
      <Article />
      <Article />
      <Article />
    </div>
  );
};
