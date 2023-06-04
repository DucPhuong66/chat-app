import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, Collapse, Typography } from "antd";
import styled from "styled-components";

const {Panel} = Collapse;


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
`

function RoomList() {
    return ( 
            <Collapse ghost defaultActiveKey={['1']}>
                <PanelStyled header="Rooms list" key="1">
                    <LinkStyled>Room 1</LinkStyled>
                    <LinkStyled>Room 2</LinkStyled>
                    <LinkStyled>Room 3</LinkStyled>
                    <Button icon={<PlusSquareOutlined />} type="text" className="add-room">
                        Create Room
                    </Button>
                </PanelStyled>
            </Collapse>
     );
}

export default RoomList;