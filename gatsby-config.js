const title = `Title`;
const description = `description`;
const author = `Savin Raul Calin`;
const url = "https://simply-food.netlify.app/";
const image = `${url}/src/assets/website/website-icon.png`;
const keywords = ["simple", "food", "recipes"];

module.exports = {
  siteMetadata: { title, description, author, url, image, keywords },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    }
  ],
}
