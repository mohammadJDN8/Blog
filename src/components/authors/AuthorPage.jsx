import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";

function AuthorPage() {
  const { slug } = useParams();
  const { data, loading, errors } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  if (loading) return <h4>Loading ...</h4>;
  if (errors) return <h4>Error</h4>;
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item>
          <Avatar src={data.author.avatar.url} />
          <Typography component="h3" variant="h5">
            {data.author.name}
          </Typography>
          <Typography component="p" variant="h5">
            {data.author.field}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
