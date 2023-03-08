import React from "react";
import { Grid,Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
function About(props) {
  const posts = [
    {
     title: "Cosmetics",
     excerpt: "Primer Foundation  Lipsticks  Lotion...etc..",
     src:require('./image/Cosmetics.jpeg'),
    },
    {
     title: "kurtis",
     excerpt: "Denim Kurti  Tunic Kurti  Anarkali...etc..",
     src:require('./image/kurtis.jpeg'),
    },
    {
     title: "Watches",
     excerpt: "Mechanical  Quartz  LED  Diver..etc..",
     src:require('./image/Watches.jpeg'),
    },
    {
     title: "Western wear",
     excerpt:"Maxi  Cocktail  Wrap Dress..etc..",
     src:require('./image/Western wear.jpeg'),
    }
   ]
  return (
    <div style={{ marginTop: 20, padding: 30 }} className="Zoom">
      <Grid container spacing={40} justifyContent="center">
        {posts.map(post => (
          <Grid item key={post.title}>
            <Card>
              <CardActionArea style={{rowGap:100}}>
                <CardMedia
                  component="img"
                  alt="Movie"
                  height="450"
                  image={post.src}
                  title="Movie"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography component="p">{post.excerpt}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default About;