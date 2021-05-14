import React from 'react';
import SEO from '../Seo';

import Layout from '../layout/Layout';
import StyledHome from '../components/home/Styled_Home';

const Home: React.FC = () => (
  <Layout>
    <StyledHome>
    <SEO title='home' />

    </StyledHome>
  </Layout>
);

export default Home;