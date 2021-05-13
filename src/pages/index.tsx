import React from 'react';
import SEO from '../Seo';

import Layout from '../layout/Layout';
import StyledHome from '../components/home/Styled_Home';
import Banner from '../components/home/Banner';

const Home: React.FC = () => (
  <Layout>
    <StyledHome>
    <SEO title='home' />
    <Banner />
    </StyledHome>
  </Layout>
);

export default Home;