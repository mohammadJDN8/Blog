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
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar
            src={data.author.avatar.url}
            sx={{ width: 250, height: 250 }}
          />
          <Typography component="h3" variant="h5" mt={4} fontWeight={700}>
            {data.author.name}
          </Typography>
          <Typography component="p" variant="h5" mt={2} color="text.secondary ">
            {data.author.field}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
