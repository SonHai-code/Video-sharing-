import React from "react";
import styled from "styled-components";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ReplyIcon from "@mui/icons-material/Reply";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Comments from "../components/Comments";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  border: 1px solid ${({ theme }) => theme.textSoft};
  margin: 15px 0;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 15px;
`;
const Image = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #ccc;
`;

const ChannelDetail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.div`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
`;
const Description = styled.div`
  font-size: 14px;
`;

const Subscribe = styled.button`
  font-weight: 500;
  color: white;
  background-color: red;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Recommend = styled.div`
  flex: 2;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="503"
            src="https://www.youtube.com/embed/UBgPypHGAqE"
            title="Marvel Studios' Thor: Tình Yêu và Sấm Sét | Official Trailer"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>1.7564 views - Jun 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOffAltIcon /> Like
            </Button>
            <Button>
              <ThumbDownOffAltIcon /> Dislike
            </Button>
            <Button>
              <ReplyIcon /> Share
            </Button>
            <Button>
              <SaveAltIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image />
            <ChannelDetail>
              <ChannelName>HAITUBE</ChannelName>
              <ChannelCounter>112N subscribers</ChannelCounter>
              <Description>
                Video uploading app design using React and Styled Components.
                Youtube clone design with hooks and functional component. React
                video player.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommend>
        <Card type="sm"></Card>
        <Card type="sm"></Card>
        <Card type="sm"></Card>
        <Card type="sm"></Card>
        <Card type="sm"></Card>
        <Card type="sm"></Card>
        <Card type="sm"></Card>
        <Card type="sm"></Card>
        <Card type="sm"></Card>
      </Recommend>
    </Container>
  );
};

export default Video;
