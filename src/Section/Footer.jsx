import { Col, Divider, Flex, Grid, Image, Row, Space, Typography } from "antd";
import {
  logoEmail,
  logoGithub,
  logoInstagram,
  logoLinkedin,
  logoPhone,
} from "../assets/Image";

const { Text } = Typography;
const { useBreakpoint } = Grid;
const Footer = () => {
  const { xs } = useBreakpoint();

  return (
    <div className="container">
      <Row gutter={[0, 24]}>
        <Col span={24}>
          <Divider
            style={{
              borderColor: "#ffff",
            }}
          >
            <Flex gap={24}>
              <a
                href="https://www.instagram.com/adhityaa.21/"
                target="_blank"
                rel="noreferrer"
              >
                <Col
                  className="shadow-effect"
                  style={{
                    padding: 8,
                    border: "solid",
                    borderWidth: 2,
                    borderRadius: "100%",
                    borderColor: "#466DCF",
                    // boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
                  }}
                >
                  <Image
                    width={32}
                    height={32}
                    src={logoInstagram}
                    preview={false}
                  />
                </Col>
              </a>
              <a
                href="https://gitlab.com/taufanadhitya21"
                target="_blank"
                rel="noreferrer"
              >
                <Col
                  className="shadow-effect"
                  style={{
                    padding: 8,
                    border: "solid",
                    borderWidth: 2,
                    borderRadius: "100%",
                    borderColor: "#466DCF",
                    // boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
                  }}
                >
                  <Image
                    width={32}
                    height={32}
                    src={logoGithub}
                    preview={false}
                  />
                </Col>
              </a>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/taufan-adhitya/"
                target="_blank"
              >
                <Col
                  className="shadow-effect"
                  style={{
                    padding: 8,
                    border: "solid",
                    borderWidth: 2,
                    borderRadius: "100%",
                    borderColor: "#466DCF",
                    // boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
                  }}
                >
                  <Image
                    width={32}
                    height={32}
                    src={logoLinkedin}
                    preview={false}
                  />
                </Col>
              </a>
            </Flex>
          </Divider>
        </Col>
        <Col span={24}>
          <Flex
            vertical={xs}
            align="center"
            justify="center"
            gap={!xs ? 40 : 32}
          >
            <Space className="box-effect" style={{ gap: 14 }}>
              <Image height={32} width={32} src={logoPhone} preview={false} />
              <Text type="White-18-300">+62 85281000214</Text>
            </Space>
            <Space className="box-effect" style={{ gap: 14 }}>
              <Image height={32} width={32} src={logoEmail} preview={false} />
              <Text type="White-18-300">adhityadhit21@gmail.com</Text>
            </Space>
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
