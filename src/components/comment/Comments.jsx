import { useQuery } from "@apollo/client";
import React from "react";
import { GET_COMMENTS_INFO } from "../../graphql/queries";
import { Avatar, Box, Grid, Typography } from "@mui/material";

function Comments({ slug }) {
  const { loading, data } = useQuery(GET_COMMENTS_INFO, {
    variables: { slug },
  });
  console.log(data, loading);
  if (loading) return null;
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        style={{
          boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px ",
          borderRadius: 4,
          py: 1,
          mt: 8,
        }}
      >
        <Grid item xs={12} m={2}>
          <Typography
            component="p"
            variant="h6"
            color="primary"
            fontWeight={700}
          >
            کامنت ها
          </Typography>
          {data.comments.map((comment) => (
            <>
              <Grid item sx={12} mt={2} border="solid 1px #ddd1d1" borderRadius={2} p={2}>
                <Box
                  display="flex"
                  alignItems="center"
                  mb={3}
                  
                >
                  <Avatar>{comment.name[0]}</Avatar>
                  <Typography component="span" variant="h6" fontWeight={700} mr={1}>
                    {comment.name}
                  </Typography>
                </Box>
                <Typography component="p" variant="p" p={1}>
                  {comment.text}
                </Typography>
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Comments;
