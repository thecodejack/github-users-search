import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getCompleteUserInfo } from '../../apis';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import RepoCard from './repocard';

export default function User() {
  const params = useParams();
  const [isLoading, setisLoading] = React.useState(true);
  const [data, setdata] = React.useState([]);

  React.useEffect(async () => {
    setisLoading(true);
    const resData = await getCompleteUserInfo(params.id);
    setisLoading(false);
    setdata(resData);
  }, [params]);

  if (isLoading || !data.length) {
    return <CircularProgress />;
  }

  const [userInfo, reposInfo] = data;
  if (userInfo?.message === 'Not Found')
    return (
      <Typography gutterBottom variant="h5" component="h2">
        User not found
      </Typography>
    );
  return (
    <>
      <Card className="">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="300"
            image={userInfo.avatar_url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" key="asdf">
              {userInfo.login}
            </Typography>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={12} sm={4} key="sadf">
                <Typography component="h3">
                  {userInfo.followers} followers
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} key="asdf">
                <Typography component="h3">{userInfo.email}</Typography>
              </Grid>
              <Grid item xs={12} sm={4} key="bxcb">
                <Typography component="h3">{userInfo.blog}</Typography>
              </Grid>
            </Grid>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              key="asdfsdf"
            >
              {userInfo.bio}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <RepoCard data={reposInfo} />
    </>
  );
}
