module.exports = {
  siteMetadata: {
    title: "My Super Cool Blog2",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};