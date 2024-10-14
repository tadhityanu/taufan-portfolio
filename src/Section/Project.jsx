import {
  Button,
  Col,
  Flex,
  Grid,
  Image,
  Modal,
  Row,
  Space,
  Typography,
} from "antd";
import {
  ConstructionImage,
  projectDermaCare,
  projectIntrahub,
  projectOrpin,
  projectSispos,
  projectStory,
  projectStoryApp,
} from "../assets/Image";
import { useState } from "react";

const { Text } = Typography;
const { useBreakpoint } = Grid;

const Project = () => {
  const { xl, lg, md, sm, xs } = useBreakpoint();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectMobile = () => {
    if (xl) {
      return "460px";
    } else if (lg || md) {
      return "400px";
    } else if (sm) {
      return "360px";
    } else if (xs) {
      return "290px";
    }
  };

  const modalSize = () => {
    if (xl) {
      return "50%";
    } else if (lg || md) {
      return "50%";
    } else if (sm || xs) {
      return "70%";
    }
  }

  return (
    <div className="container">
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <Flex justify="center">
            <Text type="White-50-600">Project</Text>
          </Flex>
        </Col>
        <Col span={24}>
          <Row
            gutter={[0, 32]}
            style={{ justifyContent: "center", alignItems: "center", gap: 32 }}
          >
            <Col
              className="zoom-in"
              xl={{ span: 16 }}
              lg={{ span: 16 }}
              md={{ span: 18 }}
              sm={{ span: 18 }}
              xs={{ span: 18 }}
              style={{
                boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
                borderRadius: 16,
              }}
              onClick={() => setIsModalOpen(true)}
            >
              <Image
                src={projectOrpin}
                preview={false}
                style={{ borderRadius: 16 }}
              />
            </Col>
            <Col
              className="zoom-in"
              style={{
                height: projectMobile(),
                borderRadius: 16,
              }}
              onClick={() => setIsModalOpen(true)}
            >
              <Image
                src={projectSispos}
                height={"100%"}
                width={"100%"}
                preview={false}
                style={{
                  borderRadius: 16,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
                }}
              />
            </Col>
            <Col
              className="zoom-in"
              style={{
                height: projectMobile(),
                borderRadius: 16,
              }}
              onClick={() => setIsModalOpen(true)}
            >
              <Image
                src={projectDermaCare}
                height={"100%"}
                width={"100%"}
                preview={false}
                style={{
                  borderRadius: 16,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
                }}
              />
            </Col>
            <Col
              className="zoom-in"
              xl={{ span: 15 }}
              lg={{ span: 14 }}
              md={{ span: 18 }}
              sm={{ span: 18 }}
              xs={{ span: 18 }}
              style={{
                boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
                borderRadius: 16,
              }}
              onClick={() => setIsModalOpen(true)}
            >
              <Image
                src={projectIntrahub}
                preview={false}
                style={{ borderRadius: 16 }}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Modal
            centered
            closable={false}
            open={isModalOpen}
            footer={null}
            width={modalSize()}
            style={{ textAlign: "center" }}
          >
            <Row gutter={[0, 12]}>
              <Col span={24}>
                <Image src={ConstructionImage} preview={false} />
              </Col>
              <Col span={24}>
                <Text>
                  Sorry, this page is still under development. Please come again
                  later! 😊
                </Text>
              </Col>
              <Col span={24}>
                <Space>
                  <Button
                    type="light-blue"
                    onClick={() => setIsModalOpen(false)}
                  >
                    OK
                  </Button>
                </Space>
              </Col>
            </Row>
          </Modal>
        </Col>
      </Row>
    </div>
  );
};

export default Project;
