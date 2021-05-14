import React from 'react';
import SEO from '../Seo';

import Layout from '../layout/Layout';
import StyledAbout from '../components/about/Styled_About';

const About: React.FC = () => (
  <Layout>
    <StyledAbout>
      <SEO title='about' />

    </StyledAbout>
  </Layout>
);

export default About;