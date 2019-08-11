import React from "react";
import styled from "styled-components";

import { rhythm, scale } from "../../utils/typography";
import { MarkdownRemark } from "../../types/graphql-types";

interface PostProps {
  post: MarkdownRemark;
}

const Post: React.FunctionComponent<PostProps> = ({
  post,
}): React.ReactElement => {
  return (
    <Root>
      <Title>{post.frontmatter.title}</Title>
      <Info>
        {post.frontmatter.date} · {post.timeToRead} min read
      </Info>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Root>
  );
};

const Root = styled.section`
  margin: auto;
  max-width: ${rhythm(24)};
`;

const Title = styled.h1`
  margin-top: ${rhythm(1)};
  margin-bottom: 0;
`;

const Info = styled.p`
  ${scale(-1 / 5)}
  display: block;
  margin-bottom: ${rhythm(1)};
`;

export default Post;
