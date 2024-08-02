import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { blogPosts } from './data';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
  },
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 140,
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const BlogPosts = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container spacing={4}>
        {blogPosts.map((post, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={post.picture}
                title="Blog post image"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {post.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<OpenInNewIcon />}
                  href={post.link}
                  target="_blank"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogPosts;
