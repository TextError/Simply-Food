import React from 'react';
import SEO from '../Seo';

import Layout from '../layout/Layout';
import Info from '../components/about/Info';

import StyledAbout from '../components/about/Styled_About';

const About: React.FC = () => (
  <Layout>
    <StyledAbout>
      <SEO title='about' />
      <Info />
    </StyledAbout>
  </Layout>
);

export default About;