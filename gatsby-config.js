/**
 * Configuration of the site.
 *
 */

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

module.exports = {
  siteMetadata: {
    author: "Abel",
    firstName: "Abel",
    lastName: "L. Mbula",
    title: "software engeneer and CS instructor",
    description:
      'I write quality software and help people getting started in the software industry. For me, code is poetry and I put all my effort to make it look "good".',
    siteUrl: "http://abelmbula.com",
    bio: `Software Engeneer and CS Instructor. He spends much of his time contributiong to FLOSS and helping beginners.
    If you think this is great and shoud continue, consider supporting him.`,
    social: {
      twitter: `https://twitter.com/abelmbula`,
      linkedin: `https://www.linkedin.com/in/abel-lifaefi-mbula-8371087b/?locale=en_US`,
      github: `https://github.com/Bam92`,
    },
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 620,
            },
          },
          {
            resolve: `@weknow/gatsby-remark-codepen`,
            options: {
              theme: "dark",
              height: 400,
            },
          },
        ]
      }
    },
    `gatsby-transformer-json`,
    { resolve: `gatsby-remark-images`, },
    { resolve: `gatsby-transformer-sharp`, },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#1ca086`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `abelmbula.com`,
        short_name: `Abel on software`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/abel-profile.png`,
      },
    },
    `gatsby-plugin-offline`,

  ]
}
