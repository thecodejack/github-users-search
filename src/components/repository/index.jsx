import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { getRepoInfo } from '../../apis';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Repository() {
  const classes = useStyles();
  const params = useParams();

  const [isLoading, setisLoading] = React.useState(true);
  const [data, setdata] = React.useState({});

  React.useEffect(async () => {
    const resData = await getRepoInfo(params.username, params.reponame);
    setisLoading(false);
    setdata(resData);
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {data.full_name}
        </Typography>
        <Typography variant="h5" component="h2">
          {data.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {data.stargazers_count} stars
        </Typography>
        <Typography variant="body2" component="p">
          {data.description}
        </Typography>
        <Typography variant="h6" component="h4">
          {data.language}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={data.html_url}>Git External Url</a>
      </CardActions>
    </Card>
  );
}
