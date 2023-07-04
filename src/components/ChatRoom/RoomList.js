import { PlusSquareOutlined } from "@ant-design/icons";
import React from "react";
import { Button, Collapse, Typography } from "antd";
import styled from "styled-components";
import useFirestore from "../../hooks/useFirestore";
import { AuthContext } from "../../Context/AuthProvider";

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }

    .ant-collapse-content-box {
      padding: 0 40px;
    }

    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

function RoomList() {
  const {
    user: { uid },
  } = React.useContext(AuthContext);

  console.log(uid);

  const roomsCondition = React.useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: uid,
    };
  }, [uid]);

  const rooms = useFirestore("rooms", roomsCondition);

  console.log({ rooms });

  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <PanelStyled header="Rooms list" key="1">
        {rooms.map((room) => (
          <LinkStyled key={room.id}>{room.name}</LinkStyled>
        ))}

        <Button icon={<PlusSquareOutlined />} type="text" className="add-room">
          Create Room
        </Button>
      </PanelStyled>
    </Collapse>
  );
}

export default RoomList;
