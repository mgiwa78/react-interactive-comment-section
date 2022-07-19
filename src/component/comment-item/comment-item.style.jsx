import styled from "styled-components/macro";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

import { ReactComponent as CommentPlus } from "../../images/icon-plus.svg";
import { ReactComponent as CommentMinus } from "../../images/icon-minus.svg";
import { ReactComponent as CommentReply } from "../../images/icon-reply.svg";

export const CommentItemContainer = styled.div`
  height: max-content;
  padding: 25px 32px;
  margin-bottom: 20px;
  border-radius: 8px;
  background-color: #fff;
`;
export const CommentTop = styled(Row)``;
export const CommentMiddle = styled(Row)`
  color: #67727e;
  margin-top: 10px;

  height: max-content;
`;
export const CommentButtom = styled(Row)`
  font-weight: 600;

  margin-top: 10px;

  display: flex;
  justify-content: space-between;
`;
export const UserIcon = styled(Col)``;
export const Icon = styled.img``;
export const UserName = styled(Col)`
  color: #334253;
  font-weight: 500;
`;
export const Date = styled(Col)`
  color: #67727e;
`;
export const Reply = styled(Col)`
  color: #5357b6;
`;
export const ReplyIcon = styled(CommentReply)`
  margin-left: 10px;
`;

export const LikeNumber = styled.span`
  font-size: 16px;

  color: #5357b6;
`;

export const LikeIcon = styled(Col)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f5f6fa;
  width: 100px;
  border-radius: 10px;
  height: 40px;
`;
export const IconPlus = styled(CommentPlus)`
  &:hover {
    color: #5357b6;
  }
  width: 10px;
`;
export const IconMinus = styled(CommentMinus)`
  width: 10px;
`;
