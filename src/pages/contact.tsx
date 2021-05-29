import React from 'react';
import SEO from '../Seo';

import Layout from '../layout/Layout';
import Wrapper from '../components/contact/wrapper/Wrapper';

import StyledContact from '../components/contact/Styled_Contact';

const Contact: React.FC = () => (
  <Layout>
    <StyledContact>
      <SEO title='contact' />
      <Wrapper />
    </StyledContact>
  </Layout>
);

export default Contact;