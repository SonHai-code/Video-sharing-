import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
// {type} <=> props.type
const Home = ({ type }) => {
  const [videos, setvideos] = useState([]);

  // Cannot use an async function with useEffect so I have to declare a method then invoke it
  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${type}`);
      setvideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {/*Code javaScript must be putted between curly brackets*/}
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
      <Card />
    </Container>
  );
};

export default Home;
