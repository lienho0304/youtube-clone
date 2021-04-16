import React from "react";
import styled from "styled-components";

function VideoRow({ views, subs, decription, timestamp, title, image ,channel}) {
  return <Container>
   <ImageChannel src={image} />
   <Text>
  <h3>{title}</h3>
<p>
{channel}• {subs} subscriber {views} views • {timestamp}
</p>
<Decription>{decription}</Decription>
   </Text>
  </Container>;
}

export default VideoRow;
const Container = styled.div`
display: flex;
margin-bottom:30px;
max-width:700px
`
const ImageChannel = styled.img`
object-fit:container;
width:246px;
height:138px;
`
const Text = styled.div`
margin-left:14px;
>p {
font-size:12px;
color:#606060
}
`
const Decription = styled.p`
margin-top:20px;
font-size: size 12px;
color:#606060
`