import { Button, Col, Flex, Grid, Image, Row, Space, Typography } from "antd";
import { AboutImage } from "../assets/Image";
import { dummyDoc } from "../assets/Document";

const { Text } = Typography;
const { useBreakpoint } = Grid;

const About = () => {
  const { xl, lg, md, xs, sm } = useBreakpoint();

  const isMobile = () => {
    if (xs || sm || md) {
      return "yes";
    } else {
      return "no";
    }
  };

  return (
    <div className="container">
      <Row style={{ gap: 32 }}>
        {window.innerWidth >= 991 && "center" && (
          <Col
            xl={{ span: 11 }}
            lg={{ span: 10 }}
            md={{ span: 24 }}
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 32,
              paddingRight: 24,
            }}
          >
            <Image src={AboutImage} preview={false} alt="About Taufan" />
          </Col>
        )}
        <Col
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 24 }}
          style={{
            textAlign: window.innerWidth <= 991 && "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Flex
            vertical
            gap={32}
            align={window.innerWidth <= 991 && "center"}
            style={{
              paddingLeft: isMobile() === "yes" && 32,
              paddingRight: isMobile() === "yes" && 32,
            }}
          >
            <Text type="White-38-600">Taufan Adhitya Nugroho</Text>
            <Text type="White-16-500">
              Taufan Adhitya Nugroho as known as Adhit is a teenager that lives
              in Jakarta, Indonesia. He is a cumlaude bachelor of engineering
              graduated from Institut Teknologi PLN Jakarta in 2023. He has
              experience as developer especially as Mobile Developer and Web
              Developer. with his experiences, he become a passionate and full
              of curiousness about technology, that’s the main reason he really
              like to explore, practice, and made several project. His
              curiousness led him to get several technical skills and soft
              skills
            </Text>
            <Space>
              <a href={dummyDoc} download="Resume Taufan Adhitya.pdf">
                <Button type="light-blue">
                  <Text type="White-16-500">Download CV</Text>
                </Button>
              </a>
            </Space>
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default About;
