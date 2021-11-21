module.exports = {
  siteMetadata: {
    title: `Sakari Pesonen - Homepage`,
    description: `Sakari Pesonen - Homepage`,
    author: `@SakariPesonen`,
    siteUrl: `https://sagge.github.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sakari Pesonen - Homepage`,
        short_name: `Sakari Pesonen`,
        start_url: `/`,
        placeholder: `dominantColor`,
        backgroundColor: `transparent`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
