import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { rhythm } from "../../../utils/typography";

interface PostCardProps {
  title: string;
  slug: string;
  description: string;
  date: string;
  timeToRead: number;
}

const PostCard: React.FunctionComponent<PostCardProps> = ({
  title,
  slug,
  description,
  date,
  timeToRead,
}): React.ReactElement => {
  return (
    <Root>
      <Title>
        <Link to={"/blog" + slug}>{title}</Link>
      </Title>
      <small>
        {date} · {timeToRead} min read
      </small>
      <p
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </Root>
  );
};

const Root = styled.section`
  a {
    box-shadow: none;
  }
`;

const Title = styled.h3`
  margin: ${rhythm(1)} 0 ${rhythm(1 / 4)};
`;

export default PostCard;
