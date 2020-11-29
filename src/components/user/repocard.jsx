import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Link, useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '10px',
    flexGrow: 1,
  },
}));

export default function ReposInfo({ data }) {
  const classes = useStyles();
  const orderedData = React.useMemo(() => {
    return data.sort((a, b) => b.stargazers_count - a.stargazers_count);
  }, data);
  const history = useHistory();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {orderedData.map((repo) => (
          <Grid item xs={12} sm={4} key={repo.id}>
            <Card key={repo.id} className={classes.root}>
              <CardContent>
                <Button
                  onClick={() => {
                    debugger;
                    history.push(`/repo/${repo.full_name}`);
                  }}
                  size="medium"
                >
                  {repo.full_name}
                </Button>
                <Typography component="h3">
                  {repo.stargazers_count} stars
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/repo/${repo.full_name}`}>Learn More</Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
