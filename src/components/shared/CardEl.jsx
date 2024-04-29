import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function CardEl({ title, coverPhoto, author, slug }) {
  
  return (
    <>
      <Card sx={{ boxShadow: "rgba(0,0,0,0.1)0px 4px 12px", borderRadius: 4 }}>
        <CardHeader
          avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />}
          title={
            <Typography variant="p" component="p" color="text.secondary">
              {author.name}
            </Typography>
          }
        />

        <CardMedia
          component="img"
          height="194"
          src={coverPhoto.url}
          alt={slug}
        />
        <CardContent><Typography component="h3" variant="h6" fontWeight={600} color="text.primary">{title}</Typography></CardContent>
        <Divider variant="middle" />
        <CardActions>
          <Link to={`/blogs/${slug}`} style={{textDecoration:"none",width:"100%"}}>
          <Button variant="outlined" sx={{ width: "100%", borderRadius: 3 }}>مطالعه مقاله</Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
}

export default CardEl;
