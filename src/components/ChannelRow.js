
import React from "react";
import styled from "styled-components";
import {Avatar} from "@material-ui/core"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function ChannelRow({ image, channel, noOfVideo, verified, subs, decription }) {
  return <Container>

      <ImageChannel alt={channel} src={image} />
      <Text>
<h4>{channel}{verified &&<VerifiedUserIcon/>}</h4>
<p>{subs} subcribers{noOfVideo} video</p> 
<p>{decription} </p>


      </Text>

  </Container>;
}

export default ChannelRow;
const Container = styled.div`
display:flex;
align-items:center;
width:70%;


`;
const Text = styled.div`
display:flex; 
flex-direction:column;
>h4 {
    display:flex;
    align-items:center;
    justify-content: space-between;
}
`
const ImageChannel = styled(Avatar)`
height:120px !important;
width:120px !important;
margin:10px 60px;
`