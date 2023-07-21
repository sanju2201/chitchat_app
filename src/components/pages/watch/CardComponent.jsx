import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import VideoComponent from './VideoComponent';
// import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)({
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '4px',
});
// const useStyles = makeStyles((theme) => ({
//   card: {
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     padding: theme.spacing(2),
//     margin: theme.spacing(2),
//     height: "500px"
//   },
// }));

const CardComponent = ({ videoData }) => {
  const { title, url,id, views,channel_name, channel_url,length } = videoData;

 
  // const classes = useStyles();
  return (
    <Card >
      {/* <CardActionArea href={url} target="_blank">
        <CardMedia component="img" image={url} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{title}</Typography>
        </CardContent>
      </CardActionArea> */}
      <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems:"center"}}>
      <div
        style={{
          position: 'relative',
          width: '350px', // Set your desired width
          height: '350px', // Set your desired height
          overflow: 'hidden',
        }}
      >
        <VideoComponent videoUrl={url} />
      </div>
      <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          {/* <Typography variant="body2">{title}</Typography> */}
        </CardContent>
    </div>
    </Card>
  );
};

export default CardComponent;

