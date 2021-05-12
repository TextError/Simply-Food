import React from 'react';
import { navigate } from 'gatsby';
import { Button, Typography } from "@material-ui/core";

import isMobile from '../utils/isMobile';

import Layout from '../layout/Layout';
import Styled404 from '../components/404/Styled_404';

const FourOfour: React.FC = () => (
  <Layout>
    <Styled404 isMobile={isMobile()}>
      <Typography variant='h1'>404</Typography>
      <Typography>WELCOME</Typography>
      <Typography>TO THE</Typography>
      <Typography>DARK</Typography>
      <Typography>SIDE</Typography>
      <Button variant="outlined" onClick={() => navigate(-1)}>Go Back</Button>
    </Styled404>
  </Layout>
);

export default FourOfour;