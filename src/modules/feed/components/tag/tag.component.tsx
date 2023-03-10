import { FC } from "react";
import { Tags, TagItem, TagsContainer } from "./styles";

interface TagProps {}

export const Tag: FC<TagProps> = () => {
  return (
    <TagsContainer>
      <Tags>
        <TagItem>qwert</TagItem>
        <TagItem>rewq</TagItem>
        <TagItem>qw</TagItem>
      </Tags>
    </TagsContainer>
  );
};
