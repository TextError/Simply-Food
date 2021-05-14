import React from 'react';
import SEO from '../Seo';

import Layout from '../layout/Layout';
import StyledContact from '../components/contact/Styled_Contact';

const Contact: React.FC = () => (
  <Layout>
    <StyledContact>
      <SEO title='contact' />

    </StyledContact>
  </Layout>
);

export default Contact;