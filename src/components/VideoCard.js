import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
function VideoCard({ image, title, channel, views, timestamp }) {
  return (
    <Container>
      <Video src={image} alt={channel}></Video>
      <VideoInfo>
        <VideoAvater />
        <VideoText>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>{views} {timestamp}</p>
        </VideoText>
      </VideoInfo>
    </Container>
  );
}

export default VideoCard;
const Container = styled.div`
margin-bottom:40px;
width:270px
`
const Video = styled.img`
height:140px;
width:250px;
`;
const VideoInfo = styled.div`
display :flex

`;
const VideoAvater = styled(Avatar)`
 width:30px !important;
height:30px !important; 
`;
const VideoText = styled.div`
margin-left:10px;
>p{
    font-size:10px;
    color:gray;

}
`;
