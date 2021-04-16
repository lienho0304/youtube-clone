import React, { useState } from "react";
import styled from "styled-components";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import MenuIcon from "@material-ui/icons/Menu";
import { Input, Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <Container>
      <Container__left>
        <MenuIcon />
        <Link to="/">
          <Logo src="https://tse1.mm.bing.net/th?id=OIP.iIaX-wDz6bkCqyMUw6k9AAHaDi&pid=Api&P=0&w=320&h=154"></Logo>
        </Link>
      </Container__left>
      <Container__center>
        <InputSearch
          value={inputSearch}
          placeholder="Search"
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon />
        </Link>
      </Container__center>
      <Container__right>
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <AvatarUser />
      </Container__right>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  display: flex;
  align-items: center;
  object-fit: contain;
  justify-content: space-between;
  padding: 20px;
  position: sticky;
  z-index: 999;
  top: 0;
  background: white;
`;
const Logo = styled.img`
  height: 25px;
  margin-left: 20px;
`;
const InputSearch = styled(Input)`
  flex: 1;
`;
const AvatarUser = styled(Avatar)``;
const Container__left = styled.div``;
const Container__center = styled.div`
  display: flex;
  align-items: center;
  flex: 0.4;
`;
const Container__right = styled.div`
  justify-content: space-between;
  flex: 0.2;
  display: flex;
  align-items: center;
`;
