/**
 * Configuration of the site.
 *
 */

module.exports = {
  siteMetadata: {
    author: "Abel",
    firstName: "Abel",
    lastName: "L. Mbula",   
    title: "software engeneer and CS instructor" ,
    description: "I write quality software and help people getting started in the software industry. For me, code is poetry and I put all my effort to make it look \"good\".",
    siteUrl: "http://abelmbula.com",
    bio: `Software Engeneer and CS Instructor. He spends much of his time contributiong to FLOSS and helping beginners.
    If you think this is great and shoud continue, consider supporting him.`,
    twitter: "",
    linkedin: "",
    github: "",
    
    
  },
  plugins: [
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
        // plugins: [
        //   `gatsby-transformer-json`
        // ]
      }
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
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `@weknow/gatsby-remark-codepen`,
            options: {
              theme: 'dark',
              height: 400,
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/abel-profile.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  
  ],
}
