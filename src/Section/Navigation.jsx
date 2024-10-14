import { MenuOutlined } from "@ant-design/icons";
import { Col, Flex, Row, Typography } from "antd";

const { Text } = Typography;

const Navigation = (props) => {
  const { openDrawer } = props;

  return (
    <Row gutter={[0, 24]}>
      {/* {window.innerWidth >= 991 ? ( */}
      <Col span={24}>
        <Flex
          gap={24}
          justify="center"
          style={{
            paddingTop: 12,
            paddingBottom: 12,
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          <a className="zoom-in" href="#about" style={{ padding: "4px 10px" }}>
            <Col>
              <Text type="dark-blue-18-600">About</Text>
            </Col>
          </a>
          <a href="#skill" className="zoom-in" style={{ padding: "4px 10px" }}>
            <Col>
              <Text type="dark-blue-18-600">Skill</Text>
            </Col>
          </a>
          <a
            href="#project"
            className="zoom-in"
            style={{ padding: "4px 10px" }}
          >
            <Col>
              <Text type="dark-blue-18-600">Project</Text>
            </Col>
          </a>
          <a
            href="#contact"
            className="zoom-in"
            style={{ padding: "4px 10px" }}
          >
            <Col>
              <Text type="dark-blue-18-600">Contact</Text>
            </Col>
          </a>
        </Flex>
      </Col>
      {/* ) : (
        <Col
        onClick={() => openDrawer()}
          style={{
            padding: 8,
            background: "#202D6F",
            borderRadius: "0 12px 12px 0",
            boxShadow: "0 2px 12px rgba(0, 0, 0, 0.5)",
          }}
        >
          <MenuOutlined style={{ color: "#466DCF" }} />
        </Col>
      )} */}
    </Row>
  );
};

export default Navigation;
