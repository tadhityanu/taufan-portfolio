import { Button, Col, Flex, Grid, Image, Row, Space, Typography } from "antd";
import { BannerImage } from "../assets/Image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useEffect, useState } from "react";

const { Text } = Typography;
const { useBreakpoint } = Grid;

const Banner = () => {
  const { xl, lg, md, sm, xs } = useBreakpoint();

  const [isMobileLayout, setIsMobileLayout] = useState("no");

  const [text] = useTypewriter({
    words: ["Web", "Android"],
    typeSpeed: 120,
    deleteSpeed: 80,
    loop: {},
  });

  const paddingText = () => {
    if (xl || lg) {
      return 120;
    } else {
      return 0;
    }
  };

  const paddingImage = () => {
    if (md) {
      return 120;
    } else if (xs) {
      return 50;
    } else {
      return 0;
    }
  };

  // const isMobile = () => {
  //   if (xs || sm || md) {
  //     setIsMobileLayout("yes");
  //   } else {
  //     setIsMobileLayout("no");
  //   }
  // };

  return (
    <div className="container">
      <Row>
        <Col
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 24 }}
          style={{
            paddingTop: paddingText(),
            paddingBottom: paddingText(),
            paddingLeft: 32,
            paddingRight: 24,
          }}
        >
          <Flex
            vertical
            gap={16}
            style={{ textAlign: window.innerWidth <= 991 && "center" }}
          >
            <Flex vertical>
              <Text type="White-18-600">Hi, There!</Text>
              <Text type="White-40-600">I’m Taufan Adhitya nugroho</Text>
              <Text type="dark-blue-32-600">
                <span>{text}</span>
                <Cursor /> Developer
              </Text>
            </Flex>
            <Space direction="vertical" style={{ gap: 32 }}>
              <Text type="White-18-600">
                Welcome to Taufan’s personal website. if you want to know a
                glimpse about his career journey, you are in the right place.
                you can get to know about his skill, project, and contact
              </Text>
              <a href="#about">
                <Button size="large" type="dark-primary">
                  <Text type="White-16-500">Explore Now</Text>
                </Button>
              </a>
            </Space>
          </Flex>
        </Col>
        <Col
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
          style={{
            paddingBottom: paddingImage(),
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image src={BannerImage} preview={false} />
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
