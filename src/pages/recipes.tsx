import React from 'react';
import SEO from '../Seo';

import Layout from '../layout/Layout';
import StyledRecipes from '../components/recipes/Styled_Recipes';

const Recipes: React.FC = () => (
  <Layout>
    <StyledRecipes>
      <SEO title='recipes' />

    </StyledRecipes>
  </Layout>
);

export default Recipes;