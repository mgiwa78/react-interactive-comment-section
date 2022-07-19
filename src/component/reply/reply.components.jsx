import CommentItem from "../comment-item/comment-item.component";
import { ReplyElementsContainer } from "./reply.style";

const ReplySection = ({ reply }) => {
  console.log(reply);
  return (
    <ReplyElementsContainer>
      {reply.map((rep) => {
        return <CommentItem key={rep.id} comment={rep} />;
      })}
    </ReplyElementsContainer>
  );
};

export default ReplySection;
