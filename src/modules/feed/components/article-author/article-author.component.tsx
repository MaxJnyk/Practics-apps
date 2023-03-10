import { FC } from "react";
import { DateTime } from "luxon";
import { Author } from "../../api/dto";
import {
  AuthorContainer,
  AuthorAvatarImg,
  AuthorUsername,
  AuthorInfoWrapper,
  AuthorPublishData,
} from "./styles";

interface ArticleAuthorProps {
  publishAt: string;
}

export const ArticleAuthor: FC<ArticleAuthorProps> = ({ publishAt }) => {
  return (
    <AuthorContainer>
      <AuthorAvatarImg
        alt="avatar"
        src="https://cdn-icons-png.flaticon.com/512/1139/1139784.png?w=826&t=st=1678434619~exp=1678435219~hmac=e3492118ee058cad7125a1f2fb2e9396930be4c8f7af18970ea553e379295867"
      />
      <AuthorInfoWrapper>
        <AuthorUsername to={"/@max"}>Maximus Jnuk</AuthorUsername>
        <AuthorPublishData>
          {DateTime.fromISO(publishAt).toLocaleString(DateTime.DATE_FULL)}
        </AuthorPublishData>
      </AuthorInfoWrapper>
    </AuthorContainer>
  );
};
