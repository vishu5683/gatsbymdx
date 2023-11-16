

import React from "react";
import { graphql } from 'gatsby';
import  Support  from "../templates/Support";

const Home = ({ data }) => {
  const mdxNode = data.allMdx.nodes[0];
  
  return (
    <>
      {mdxNode && (
        <Support
          title={mdxNode.frontmatter.title}
          date={mdxNode.frontmatter.date}
          body={mdxNode.body}
        />
      )}
    </>
  );
}

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          date
        }
        body
      }
    }
  }
`;

export default Home;
