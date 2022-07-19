import React from "react";
import CommentItem from "../comment-item/comment-item.component";
import { HomeContainer } from "./home.style";
import data from "../../data.json";

const Home = () => {
  return (
    <HomeContainer>
      {data.comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </HomeContainer>
  );
};

export default Home;
