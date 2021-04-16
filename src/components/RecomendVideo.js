import React from 'react'
import styled from "styled-components"
import "./VideoCard"
import VideoCard from "./VideoCard"
function RecomendVideo() {
    return (
        <Container>
            <h2>Recomend Video</h2>
            <RecomendedVideo>
             <VideoCard title="Become a developer" views="2.3Views" timestamp="3 days ago"channel="Sonny Sangha" image ="https://tse1.mm.bing.net/th?id=OIP.z9DgCgl3z9jhbiJDMuwsOAHaEK&pid=Api&P=0&w=302&h=171"/>
             <VideoCard title="Become a developer" views="2.3Views" timestamp="3 days ago"channel="Sonny Sangha" image ="https://tse1.mm.bing.net/th?id=OIP.z9DgCgl3z9jhbiJDMuwsOAHaEK&pid=Api&P=0&w=302&h=171"/>
             <VideoCard title="Become a developer" views="2.3Views" timestamp="3 days ago"channel="Sonny Sangha" image ="https://tse1.mm.bing.net/th?id=OIP.z9DgCgl3z9jhbiJDMuwsOAHaEK&pid=Api&P=0&w=302&h=171"/>
             <VideoCard title="Become a developer" views="2.3Views" timestamp="3 days ago"channel="Sonny Sangha" image ="https://tse1.mm.bing.net/th?id=OIP.z9DgCgl3z9jhbiJDMuwsOAHaEK&pid=Api&P=0&w=302&h=171"/>
             <VideoCard title="Become a developer" views="2.3Views" timestamp="3 days ago"channel="Sonny Sangha" image ="https://tse1.mm.bing.net/th?id=OIP.z9DgCgl3z9jhbiJDMuwsOAHaEK&pid=Api&P=0&w=302&h=171"/>

            </RecomendedVideo>
        </Container>
    )
}

export default RecomendVideo
const Container =styled.div`
flex:0.8;
background-color:#f9f9f9;
padding:40px 20px;
>h2 {
    margin-left:5px;
    margin-bottom:20px
}

`
const RecomendedVideo = styled.div`
display:flex;
flex-wrap:wrap;


`
 