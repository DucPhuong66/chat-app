import { Avatar, Button, Tooltip, Form, Input } from "antd";
import React from "react";
import styled from "styled-components";
import { UserAddOutlined } from "@ant-design/icons";
import Message from "./Message";

const WrapperStyled = styled.div`
  height: 100vh;
`;

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);

  .header {
    &__info {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    &__title {
      margin: 0;
      font-weight: bold;
    }
    &__desc {
      font-size: 12px;
    }
  }
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;

const ContentStyled = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;

`;

const FormStyled = styled(Form)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 2px 2px 0;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 2px;

    .ant-form-item {
        flex: 1;
        margin: 0;
        margin-right:4px
    }
`;

function ChatWindow() {
  return (
    <WrapperStyled>
      <HeaderStyled>
        <div className="header__info">
          <p className="header__title">Room 1</p>
          <span className="header__desc">This is Room 1</span>
        </div>
        <ButtonGroupStyled>
          <Button icon={<UserAddOutlined />}>Invite</Button>
          <Avatar.Group size="small" maxCount={2}>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title="B">
              <Avatar>b</Avatar>
            </Tooltip>
            <Tooltip title="c">
              <Avatar>C</Avatar>
            </Tooltip>
          </Avatar.Group>
        </ButtonGroupStyled>
      </HeaderStyled>
      <ContentStyled>
        <MessageListStyled>
          <Message
            text="Welcome"
            photoUrl={null}
            displayName="Phuong can cook"
            createAt={132214332}
            Text="hello"
          ></Message>
          <Message
            text="Welcome"
            photoUrl={null}
            displayName="Phuong can cook"
            createAt={132214332}
            Text="hello"
          ></Message>
          <Message
            text="Welcome"
            photoUrl={null}
            displayName="Phuong can cook"
            createAt={132214332}
            Text="hello"
          ></Message>
          <Message
            text="Welcome"
            photoUrl={null}
            displayName="Phuong can cook"
            createAt={132214332}
            Text="hello"
          ></Message>
          <Message
            text="Welcome"
            photoUrl={null}
            displayName="Phuong can cook"
            createAt={132214332}
            Text="hello"
          ></Message>
        </MessageListStyled>

        <FormStyled>
          <Form.Item>
            <Input bordered={false} placeholder="Enter chat..." autoComplete="off" />
          </Form.Item>
          <Button type="primary">Send</Button>
        </FormStyled>
      </ContentStyled>
    </WrapperStyled>
  );
}

export default ChatWindow;
