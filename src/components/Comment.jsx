import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ccc;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.span`
  font-size: 13px;
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
const Discription = styled.span`
  font-style: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar />
      <Details>
        <Name>
          Son Hai <Date>3 days ago</Date>
        </Name>
        <Discription>
          Thanks for the work always great to learn from you . Please MERN and
          for storage videos and pictures Firebase : ) . i am trying to add some
          functionalities on your Social Media app like Comments but it is not
          easy so if i can see how you handle this part ( comments) with MongoDB
          that will be great.{" "}
        </Discription>
      </Details>
    </Container>
  );
};

export default Comment;
