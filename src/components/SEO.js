import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
const SEO = ({ title, description }) => {
  return (
    <Helmet htmlAttributes={{ lang: 'en' }} title={title}>
      {/** alternative to set up by passing props **/}
      <meta name={'description'} content={description} />
    </Helmet>
  );
};

export default SEO;
