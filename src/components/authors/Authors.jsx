import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Avatar, Card, Divider, Grid, Typography } from "@mui/material";
import { style } from "@mui/system";

function Authors() {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);
  if (loading) return <h4>Loading ...</h4>;
  if (errors) return <h4>Error</h4>;
  const { authors } = data;
  return (
    <Card
      container
      sx={{ boxShadow: "rgba(0,0,0,0.1)0px 4px 12px", borderRadius: 4 }}
    >
      {authors.map((author, index) => (
        <>
          <div key={author.id}>

          <Grid item xs={12} padding={2}>
            <a href={`/authors/${author.slug}`} style={{display:"flex" , alignItems:"center",textDecoration:"none"}} >
              <Avatar src={author.avatar.url} sx={{marginLeft:2}} />
              <Typography component="p" variant="p" color="text.secondary">
                {author.name}
              </Typography>
            </a>
          </Grid>
          {index !== authors.length - 1 && (
            <Grid xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
          </div>
        </>
      ))}
    </Card>
  );
}

export default Authors;