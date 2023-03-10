import { FC } from "react";
import { ArticlePage } from "../../modules/feed/page/ArticlePage";
import { Page } from "../../utils/styles";

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
  return (
    <Page display="flex" justifyContent="center" alignItems="center">
      <ArticlePage />
    </Page>
  );
};
