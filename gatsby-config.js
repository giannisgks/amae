module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#66907B`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/vivianfull.png`, // or the path to your favicon
      },
    },
  ],
};