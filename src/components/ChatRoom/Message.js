import React from "react";
import { Avatar, Typography } from "antd";
import styled from "styled-components";

const WrapperStyled = styled.div`
    margin-bottom: 10px;


    .author {
        margin-left: 5px;
        font-weight: bold;
    }
    .date {
        margin-left: 10px;
        font-size: 11px;
        color: #a7a7a7;
    }

    .content {
        margin-left: 30px;
    }
`;


function Message({ Text, displayName, createAt, photoUrl }) {
  return (
    <WrapperStyled>
      <div>
        <Avatar size="small" src={photoUrl}>A</Avatar>
        <Typography.Text className="author">{displayName}</Typography.Text>
        <Typography.Text className="date">{createAt}</Typography.Text>
      </div>
      <div>
        <Typography.Text className="content">{Text}</Typography.Text>
      </div>
    </WrapperStyled>
  );
}

export default Message;
