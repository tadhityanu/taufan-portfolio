import {
  Button,
  Col,
  Drawer,
  Flex,
  Row,
  Typography,
} from "antd";
import {
  Navigation,
  Banner,
  About,
  Skill,
  Project,
  Footer,
} from "../Section/index";
import { useEffect, useState } from "react";
import {
  ArrowRightOutlined,
  CloseOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const MainPage = () => {
  const [isTopLayout, setIsTopLayout] = useState(true);
  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsTopLayout(false);
      } else {
        setIsTopLayout(true);
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Row style={{ background: "#466DCF" }}>
      {windowWidth >= 991 ? (
        <Col
          span={24}
          style={{
            position: "fixed",
            background: isTopLayout ? "transparent" : "#466DCF",
            transition: "background-color 0.6s ease",
            width: "100%",
            zIndex: 999,
            paddingTop: 24,
            paddingBottom: 24,
          }}
        >
          <Navigation openDrawer={showDrawer} />
        </Col>
      ) : (
        <Col
          onClick={showDrawer}
          style={{
            padding: 8,
            zIndex: 999,
            marginTop: "5%",
            position: "fixed",
            background: "#ffff",
            borderRadius: "0 12px 12px 0",
            boxShadow: "0 2px 12px rgba(0, 0, 0, 0.5)",
          }}
        >
          <MenuOutlined style={{ color: "#202D6F" }} />
        </Col>
      )}
      <Col span={24} style={{ background: "#466DCF", marginTop: "80px" }}>
        <Banner />
      </Col>
      <Col
        id="about"
        span={24}
        style={{
          background: "linear-gradient(to bottom, #466DCF, #202D6F)",
          paddingBottom: 40,
        }}
      >
        <About />
      </Col>
      <Col
        id="skill"
        span={24}
        style={{ background: "#202D6F", paddingBottom: 40, paddingTop: 40 }}
      >
        <Skill />
      </Col>
      <Col
        id="project"
        span={24}
        style={{ background: "#202D6F", paddingBottom: 40, paddingTop: 40 }}
      >
        <Project />
      </Col>
      <Col
        id="contact"
        span={24}
        style={{ background: "#202D6F", paddingBottom: 32 }}
      >
        <Footer />
      </Col>

      <Col span={24}>
        <Drawer
          style={{ zIndex: 9999 }}
          placement="left"
          height={"100%"}
          closable={false}
          open={open}
          extra={
            <Col onClick={onClose}>
              <CloseOutlined />
            </Col>
          }
        >
          <Row gutter={[24, 24]}>
            <Col
              onClick={onClose}
              style={{
                padding: 6,
                marginLeft: 5,
                background: "#202D6F",
                borderRadius: "100%",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
              }}
            >
              <CloseOutlined style={{ color: "#ffff" }} />
            </Col>
            <Col span={24}>
              <Flex justify="space-between">
                <Text type="black-20-700">About</Text>
                <a href="#about" onClick={onClose}>
                  <Button type="black-outlined-transparent">
                    <ArrowRightOutlined />
                  </Button>
                </a>
              </Flex>
            </Col>
            <Col span={24}>
              <Flex justify="space-between">
                <Text type="black-20-700">Skill</Text>
                <a href="#skill" onClick={onClose}>
                  <Button type="black-outlined-transparent">
                    <ArrowRightOutlined />
                  </Button>
                </a>
              </Flex>
            </Col>
            <Col span={24}>
              <Flex justify="space-between">
                <Text type="black-20-700">Project</Text>
                <a href="#project" onClick={onClose}>
                  <Button type="black-outlined-transparent">
                    <ArrowRightOutlined />
                  </Button>
                </a>
              </Flex>
            </Col>
            <Col span={24}>
              <Flex justify="space-between">
                <Text type="black-20-700">Contact</Text>
                <a href="#contact" onClick={onClose}>
                  <Button type="black-outlined-transparent">
                    <ArrowRightOutlined />
                  </Button>
                </a>
              </Flex>
            </Col>
          </Row>
        </Drawer>
      </Col>
    </Row>
  );
};

export default MainPage;
