require("dotenv").config({ path: ".env" });

const siteConfig = require("./config.ts");

module.exports = {
  siteMetadata: siteConfig.siteMetadata,
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/posts/`,
        name: "posts",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-bitly-links",
            options: {
              accessToken: process.env.BITLY_ACCESS_TOKEN,
              namedBitlys: ["mzl.la"],
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 820,
              showCaptions: true,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              inlineCodeMarker: "÷",
            },
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-145413804-1",
      },
    },
    "gatsby-plugin-feed",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Robert's website",
        short_name: "robertistok",
        start_url: "/",
        background_color: "#fafafa",
        theme_color: "#ff483b",
        display: "minimal-ui",
        icon: "content/assets/robertistok_avatar_rounded.png",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",

    // Typescript
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-generate-typings",
      options: {
        dest: "./src/types/graphql-types.d.ts",
      },
    },
  ],
};
