/**
 * Configuration of the site.
 *
 */

module.exports = {
  siteMetadata: {
    
    firstName: "Abel",
    lastName: "L. Mbula",   
    title: "software engeneer and CS instructor" ,
    description: "I write quality software and help people getting started in the software industry. For me, code is poetry and I put all my effort to make it look \"good\".",
    twitter: "",
    linkedin: "",
    github: ""
    
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
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
