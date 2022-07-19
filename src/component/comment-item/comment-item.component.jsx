import {
  CommentButtom,
  CommentItemContainer,
  CommentMiddle,
  CommentTop,
  Date,
  Icon,
  IconMinus,
  IconPlus,
  LikeIcon,
  LikeNumber,
  Reply,
  ReplyIcon,
  UserIcon,
  UserName,
} from "./comment-item.style";
import ReplySection from "../reply/reply.components";
// import PUser from "../../images/avatars/image-amyrobson.png";

const CommentItem = ({ comment }) => {
  const { content, createdAt, score, user, replies } = comment;
  return (
    <>
      <CommentItemContainer>
        <CommentTop>
          <UserIcon xs={"auto"}>
            <Icon src={require(`${user.image.png}`)} />
          </UserIcon>

          <UserName xs={"auto"} className="my-auto">
            {user.username}
          </UserName>
          <Date xs={"auto"} className="my-auto xs">
            {createdAt}
          </Date>
        </CommentTop>
        <CommentMiddle>{content}</CommentMiddle>
        <CommentButtom>
          <LikeIcon xs={"auto"}>
            <IconPlus />
            <LikeNumber>{score}</LikeNumber>

            <IconMinus />
          </LikeIcon>
          <Reply xs={"auto"} className="ms-auto my-auto">
            Reply
            <ReplyIcon />
          </Reply>
        </CommentButtom>
      </CommentItemContainer>
      {console.log(replies)}
      {replies?.length ? <ReplySection reply={replies} /> : ""}
    </>
  );
};

export default CommentItem;
