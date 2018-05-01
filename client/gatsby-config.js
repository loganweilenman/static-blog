module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: ['gatsby-plugin-react-helmet'],
  proxy: {
    prefix: "/",
    url: "http://localhost:5000",
  }
}