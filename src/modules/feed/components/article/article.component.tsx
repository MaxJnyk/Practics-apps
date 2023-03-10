import { FC } from "react";
import { FeedArticle } from "../../api/dto";
import {
  ArticleBody,
  ArticleContainer,
  AuthorInfoContent,
  AuthorInfoWrapper,
  ArticleDescription,
  ArticleTitle,
} from "./styles";
import { FavoriteButton } from "../favorite-button";
import { ArticleAuthor } from "../article-author";
import { Tag } from "../tag";

interface ArticleProps {}

export const Article: FC<ArticleProps> = () => {
  return (
    <ArticleContainer>
      <ArticleBody>
        <AuthorInfoContent>
          <AuthorInfoWrapper>
            <ArticleAuthor publishAt={""} />
          </AuthorInfoWrapper>
          <FavoriteButton />
        </AuthorInfoContent>
        <ArticleTitle>Title</ArticleTitle>
        <ArticleDescription to={""}>
          Quia quo iste et aperiam voluptas consectetur a omnis et.\nDolores et
          earum consequuntur sunt et.\nEa nulla ab voluptatem dicta vel.
          Temporibus aut adipisci magnam aliquam eveniet nihil laudantium
          reprehenderit sit.\nAspernatur cumque labore voluptates mollitia
          deleniti et. Quos pariatur tenetur.\nQuasi omnis eveniet eos maiores
          esse magni possimus blanditiis.\nQui incidunt sit quos consequatur aut
          qui et aperiam delectus.\nPraesentium quas culpa.\nEaque occaecati
          cumque incidunt et. Provident saepe omnis non molestiae natus
          et.\nAccusamus laudantium hic unde voluptate et sunt
          voluptatem.\nMollitia velit id eius mollitia occaecati repudiandae.
          Voluptatum tempora voluptas est odio iure odio dolorem.\nVoluptatum
          est deleniti explicabo explicabo
        </ArticleDescription>
        <Tag />
      </ArticleBody>
    </ArticleContainer>
  );
};
