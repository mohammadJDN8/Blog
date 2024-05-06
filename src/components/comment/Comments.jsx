import { useQuery } from "@apollo/client";
import React from "react";
import { GET_COMMENTS_INFO } from "../../graphql/queries";

function Comments({ slug }) {
  const { loading, data } = useQuery(GET_COMMENTS_INFO, {
    variables: { slug },
  });
  console.log(data);
  return <div>comments</div>;
}

export default Comments;
