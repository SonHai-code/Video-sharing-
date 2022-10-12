import React from "react";
import styled from "styled-components";
import ImageLogo from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieIcon from "@mui/icons-material/Movie";
import FeedIcon from "@mui/icons-material/Feed";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpIcon from "@mui/icons-material/Help";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { color } from "@mui/system";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  height: 100vh;
  position: sticky;
  top: 0;
  font-size: 12px;
  overflow: scroll;
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;

const Wrapper = styled.div`
  padding: 18px 25px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const Img = styled.img`
  height: 20px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 6px 0px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const SignIn = styled.div``;
const Button = styled.button`
  font-size: 1px;
  padding: 5px 15px;
  background-color: transparent;
  color: #3ea6ff;
  border: 1px solid #3ea6ff;
  border-radius: 3px;
  font-weight: 500px;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={ImageLogo} />
            SON HAI
          </Logo>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          {" "}
          <Item>
            <HomeIcon fontSize="small" /> Home
          </Item>
        </Link>
        <Link to="trends" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <ExploreIcon fontSize="small" /> Explore
          </Item>
        </Link>
        <Link to="subscription" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <SubscriptionsIcon fontSize="small" /> Subscriptions
          </Item>
        </Link>

        <Hr />

        <Item>
          <VideoLibraryIcon fontSize="small" /> Library
        </Item>
        <Item>
          <HistoryIcon fontSize="small" /> History
        </Item>
        <Hr />
        <SignIn>
          Sign in to like the video, comment and subscribe.
          <Link to="signin" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleIcon fontSize="small" />
              SIGN IN
            </Button>
          </Link>
        </SignIn>
        <Hr />
        <Item>
          <LibraryMusicIcon fontSize="small" /> Music
        </Item>
        <Item>
          <SportsBasketballIcon fontSize="small" /> Sport
        </Item>
        <Item>
          <SportsEsportsIcon fontSize="small" /> Gaming
        </Item>
        <Item>
          <MovieIcon fontSize="small" /> Movie
        </Item>
        <Item>
          <FeedIcon fontSize="small" /> New
        </Item>
        <Item>
          <LiveTvIcon fontSize="small" /> Live
        </Item>
        <Hr />
        <Item>
          <SettingsIcon fontSize="small" /> Setting
        </Item>
        <Item>
          <FlagIcon fontSize="small" /> Report
        </Item>
        <Item>
          <HelpIcon fontSize="small" /> Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessIcon fontSize="small" />{" "}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
