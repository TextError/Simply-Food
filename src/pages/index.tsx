import React from 'react';

import Layout from '../layout/Layout';
import Text from '../components/home/Text';
import SEO from '../Seo';

const Home: React.FC = () => (
  <Layout>
    <SEO />
    <Text />
  </Layout>
);

export default Home;