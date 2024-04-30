import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      author {
        ... on Author {
          id
          name
          avatar {
            url
          }
        }
      }
      coverPhoto {
        url
      }
      slug
      title
      id
    }
    authors {
      avatar {
        url
      }
    }
  }
`;
const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;
const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      slug
      description {
        html
      }
      name
    }
    posts {
      coverPhoto {
        url
      }
      slug
      title
      id
    }
  }
`;
export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO };
