import React from "react";
import Helmet from "react-helmet";
import { SEOProps } from './utils/interfaces';
import { useStaticQuery, graphql } from "gatsby";

const SEO: React.FC<SEOProps> = props => {
  const { site } = useStaticQuery(querySEO);

  const { title, description, url, author, meta = [], keywords = [], image } = site.siteMetadata;

  const siteTitle = props.title || title;
  const siteDescription = props.description || description;
  const siteUrl = props.url || url;
  const siteAuthor = props.author || author;
  const siteImage = props.image || image;
  const siteKeywords = [...keywords, props.keywords].join(",");

  const metaData = [
    {
      name: "og:title",
      content: siteTitle,
    },
    {
      name: "description",
      content: siteDescription,
    },
    {
      name: "image",
      content: siteImage,
    },
    {
      name: "og:url",
      content: siteUrl,
    },
    {
      name: "canonical",
      content: siteUrl,
    },
    {
      name: "og:type",
      content: "article",
    },
    {
      name: "og:description",
      content: siteDescription,
    },
    {
      name: "og:image",
      content: siteImage,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:creator",
      content: siteAuthor,
    },
    {
      name: "twitter:title",
      content: siteTitle,
    },
    {
      name: "twitter:description",
      content: siteDescription,
    },
    {
      name: "twitter:image",
      content: siteImage,
    },
    {
      name: "keywords",
      content: siteKeywords,
    },
  ].concat(meta);


  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={siteTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={metaData}
    >
      {/* <!-- Material UI --> */}
     <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      {/* <!-- Font-Awesome --> */}
     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossOrigin="anonymous"></link>
    </Helmet>
  );
};

const querySEO = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

export default SEO;