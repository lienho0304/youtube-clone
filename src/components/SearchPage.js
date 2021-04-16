import React from "react";
import styled from "styled-components";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
function SearchPage() {
  return (
    <Container>
      <Filter>
        <TuneIcon />
        <h2>Filter</h2>
      </Filter>
      <hr />
      <ChannelRow
        decription="you can find awsome video"
        verified
        subs="680k"
        noOfVideo={382}
        channel="Sonny Sangha"
        image="https://tse1.mm.bing.net/th?id=OIP.z9DgCgl3z9jhbiJDMuwsOAHaEK&pid=Api&P=0&w=302&h=171"
      />
      <hr />
      <VideoRow title="Become a developer" views="2.3Views" timestamp="3 days ago"channel="Sonny Sangha" image ="https://tse1.mm.bing.net/th?id=OIP.z9DgCgl3z9jhbiJDMuwsOAHaEK&pid=Api&P=0&w=302&h=171" subs="680k" decription="this is my channel hehehehe"/>
    </Container>
  );
}

export default SearchPage;
const Container = styled.div`
  flex: 0.8;
  background-color: #f9f9f9;
  padding: 40px 20px;

  > hr {
    height: 1px;
    border: 0;
    background-color: lightgray;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  color: #606060;
  font-size: xx-small !important;
  > h2 {
    margin-left: 10px;
    text-transform: uppercase;
  }
`;
