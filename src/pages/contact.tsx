import React from 'react';
import SEO from '../Seo';
import { useMediaQuery, useTheme } from "@material-ui/core";

import Layout from '../layout/Layout';
import Wrapper from '../components/contact/wrapper/Wrapper';

import StyledContact from '../components/contact/Styled_Contact';

const Contact: React.FC = () => {
  const theme = useTheme();
  const isBreakpointSX = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Layout>
      <StyledContact isBreakpointSX={isBreakpointSX}>
        <SEO title='Contact' />
        <Wrapper />
      </StyledContact>
    </Layout>
  );
}

export default Contact;