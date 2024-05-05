import { useQuery } from "@apollo/client";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_BLOG_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function BlogPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { loading, data, errors } = useQuery(GET_BLOG_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (errors) return <h4>Error</h4>;
  console.log(data);
  return (
    <>
      <Container maxWidth="lg">
        <Grid container display="inline-block">
          <Grid
            item
            sx={12}
            mt={9}
            display="flex"
            justifyContent="space-between"
          >
            <Typography
              component="h2"
              variant="h4"
              color="primary"
              fontWeight={700}
            >
              {data.post.title}
            </Typography>
            <KeyboardBackspaceIcon
              onClick={() => navigate(-1)}
              style={{ cursor: "pointer" }}
            />
          </Grid>
          <Grid item sx={12} mt={7}>
            <img
              src={data.post.coverPhoto.url}
              style={{ borderRadius: 15 }}
              alt={data.post.slug}
              width="100%"
            />
          </Grid>
          <Grid
            item
            sx={12}
           mt={7}
            display="flex"
            alignItems="center"
          >
            <Avatar
              src={data.post.author.avatar.url}
              sx={{ width: 80, height: 80, marginLeft: 2 }}
            />
            <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700}>
              {data.post.author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {data.post.author.field}
            </Typography>
            </Box>
            
          </Grid>
          <Grid item sx={12}>
            <div
              dangerouslySetInnerHTML={{ __html: data.post.content.html }}
            ></div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default BlogPage;
