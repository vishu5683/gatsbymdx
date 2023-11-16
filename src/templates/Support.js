

import React from 'react';

import { MDXRenderer } from 'gatsby-plugin-mdx';

const Support = ({ title, date, body }) => (
  <div>
    <h1>{title}</h1>
    <p>Date: {date}</p>
import { MDXRenderer } from 'gatsby-plugin-mdx';
    <MDXRenderer>{body}</MDXRenderer>
  </div>
);

export default Support;
