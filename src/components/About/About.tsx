import React from "react";
import styled from "styled-components";
import Image, { FixedObject } from "gatsby-image";

import { SiteSiteMetadataAuthor } from "graphql-types";
import { rhythm } from "../../utils/typography";
import { yearsSince } from "../../utils/timeSince";
import { device } from "../../styles/constants";
import { useAvatar } from "../../hooks";

interface AboutProps {
  author: SiteSiteMetadataAuthor;
}

const About: React.FunctionComponent<AboutProps> = ({ author }) => {
  const avatar = useAvatar({ width: 200, height: 200 });

  return (
    <Root>
      <Avatar fixed={avatar.childImageSharp.fixed} />

      <Description>
        <h4>Hey there friend,</h4>
        <p>
          My name is {author.name} and I am a {yearsSince(author.birthDate)}
          -year-old location-independent software engineer specializing in web
          development. Here's a bit about what I do and what makes me tick.
        </p>

        <p>
          With over 6 years in the web development industry, my passion lies in
          crafting products that make a tangible difference for the end user. My
          skill set extends beyond programming languages; it's a blend of
          technical prowess and essential soft skills like communication,
          empathy, and flexibility.
        </p>

        <p>
          Apart from work, I'm often out exploring the beauty of nature.
          Mountains are more than just a weekend getaway for me; they're where I
          feel truly alive. It's important for me to focus on my physical,
          mental, and spiritual health—doing so helps me be my best self, both
          personally and professionally.
        </p>

        <p>
          I’m an avid reader, and a people person. I draw immense energy and
          fulfillment from surrounding myself with like-minded, kind and
          compassionate people. With the right people around, life isn't just
          lived, it's enriched.
        </p>

        <p>
          Interested to know more? Feel free to email me at{" "}
          <strong>{author.social.email}</strong> or connect with me on social
          media. I'm always up for a chat!
        </p>
      </Description>
    </Root>
  );
};

const Root = styled.div`
  display: grid;
  grid-gap: ${rhythm(2)};
  margin-top: ${rhythm(0.5)};

  @media ${device.tablet} {
    grid-template-columns: minmax(20%, 200px) 70%;
  }
`;

const Avatar = styled(Image)<{ fixed: FixedObject }>`
  align-self: center;

  border-radius: 50%;
  width: 150px;
  height: 150px;
  justify-self: center;
  align-self: flex-start;

  @media ${device.tablet} {
    width: auto;
    height: auto;
    justify-self: start;
  }
`;

const Description = styled.section`
  h4 {
    margin-top: ${rhythm(0.5)};
  }
`;

export default About;
