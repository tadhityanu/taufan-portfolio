import { Col, Flex, Grid, Image, Row, Space, Typography } from "antd";
import {
  logoAndroid,
  logoAndroidStudio,
  logoCSS,
  logoFirebase,
  logoHTML,
  logoJS,
  logoKotlin,
  logoPostman,
  logoReact,
} from "../assets/Image";

const { Text } = Typography;
const { useBreakpoint } = Grid;

const Skill = () => {
  const { xl, lg, md, sm, xs } = useBreakpoint();

  const imageSize = () => {
    if (xl) {
      return 80;
    } else if (lg) {
      return 50;
    } else {
      return 50;
    }
  };

  return (
    <div className="container">
      <Row gutter={[0, 32]}>
        <Col
          xl={{ span: 10 }}
          lg={{ span: 10 }}
          md={{ span: 10 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
          style={{ textAlign: "center", alignContent: "center" }}
        >
          <Text type="White-50-600">Skills</Text>
        </Col>
        <Col
          xl={{ span: 14 }}
          lg={{ span: 14 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Col>
            {window.innerWidth <= 450 ? (
              <Flex vertical gap={32}>
                <Flex justify="center" gap={16}>
                  <Col
                    style={{
                      padding: 12,
                      border: "solid",
                      borderWidth: 2,
                      borderRadius: 16,
                      borderColor: "#466DCF",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
                    }}
                  >
                    <Image
                      style={{ width: imageSize(), height: imageSize() }}
                      src={logoHTML}
                      preview={false}
                    />
                  </Col>
                  <Col
                    style={{
                      padding: 12,
                      border: "solid",
                      borderWidth: 2,
                      borderRadius: 16,
                      borderColor: "#466DCF",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
                    }}
                  >
                    <Image
                      style={{ width: imageSize(), height: imageSize() }}
                      src={logoCSS}
                      preview={false}
                    />
                  </Col>
                  <Col
                    style={{
                      padding: 12,
                      border: "solid",
                      borderWidth: 2,
                      borderRadius: 16,
                      borderColor: "#466DCF",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
                    }}
                  >
                    <Image
                      style={{ width: imageSize(), height: imageSize() }}
                      src={logoReact}
                      preview={false}
                    />
                  </Col>
                </Flex>
                <Flex justify="center" gap={16}>
                  <Col
                    style={{
                      padding: 12,
                      border: "solid",
                      borderWidth: 2,
                      borderRadius: 16,
                      borderColor: "#466DCF",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
                    }}
                  >
                    <Image
                      style={{ width: imageSize(), height: imageSize() }}
                      src={logoKotlin}
                      preview={false}
                    />
                  </Col>
                  <Col
                    style={{
                      padding: 12,
                      border: "solid",
                      borderWidth: 2,
                      borderRadius: 16,
                      borderColor: "#466DCF",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
                    }}
                  >
                    <Image
                      style={{ width: imageSize(), height: imageSize() }}
                      src={logoJS}
                      preview={false}
                    />
                  </Col>
                  <Col
                    style={{
                      padding: 12,
                      border: "solid",
                      borderWidth: 2,
                      borderRadius: 16,
                      borderColor: "#466DCF",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
                    }}
                  >
                    <Image
                      style={{ width: imageSize(), height: imageSize() }}
                      src={logoPostman}
                      preview={false}
                    />
                  </Col>
                </Flex>
                <Flex justify="center" gap={16}>
                  <Col
                    style={{
                      padding: 12,
                      border: "solid",
                      borderWidth: 2,
                      borderRadius: 16,
                      borderColor: "#466DCF",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
                    }}
                  >
                    <Image
                      style={{ width: imageSize(), height: imageSize() }}
                      src={logoAndroid}
                      preview={false}
                    />
                  </Col>
                  <Col
                    style={{
                      padding: 12,
                      border: "solid",
                      borderWidth: 2,
                      borderRadius: 16,
                      borderColor: "#466DCF",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
                    }}
                  >
                    <Image
                      style={{ width: imageSize(), height: imageSize() }}
                      src={logoAndroidStudio}
                      preview={false}
                    />
                  </Col>
                  <Col
                    style={{
                      padding: 12,
                      border: "solid",
                      borderWidth: 2,
                      borderRadius: 16,
                      borderColor: "#466DCF",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
                    }}
                  >
                    <Image
                      style={{ width: imageSize(), height: imageSize() }}
                      src={logoFirebase}
                      preview={false}
                    />
                  </Col>
                </Flex>
              </Flex>
            ) : (
              <Flex vertical gap={32}>
                <Flex justify="center" gap={12}>
                  <Col
                    style={{
                      padding: 12,
                      border: "solid",
                      borderWidth: 2,
                      borderRadius: 16,
                      borderColor: "#466DCF",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
                    }}
                  >
                    <Image
                      style={{ width: imageSize(), height: imageSize() }}
                      src={logoHTML}
                      preview={false}
                    />
                  </Col>
                  <Col
                    style={{
                      padding: 12,
                      border: "solid",
                      borderWidth: 2,
                      borderRadius: 16,
                      borderColor: "#466DCF",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
                    }}
                  >
                    <Image
                      style={{ width: imageSize(), height: imageSize() }}
                      src={logoCSS}
                      preview={false}
                    />
                  </Col>
                  <Col
                    style={{
                      padding: 12,
                      border: "solid",
                      borderWidth: 2,
                      borderRadius: 16,
                      borderColor: "#466DCF",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
                    }}
                  >
                    <Image
                      style={{ width: imageSize(), height: imageSize() }}
                      src={logoReact}
                      preview={false}
                    />
                  </Col>
                  <Col
                    style={{
                      padding: 12,
                      border: "solid",
                      borderWidth: 2,
                      borderRadius: 16,
                      borderColor: "#466DCF",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
                    }}
                  >
                    <Image
                      style={{ width: imageSize(), height: imageSize() }}
                      src={logoKotlin}
                      preview={false}
                    />
                  </Col>
                  <Col
                    style={{
                      padding: 12,
                      border: "solid",
                      borderWidth: 2,
                      borderRadius: 16,
                      borderColor: "#466DCF",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
                    }}
                  >
                    <Image
                      style={{ width: imageSize(), height: imageSize() }}
                      src={logoJS}
                      preview={false}
                    />
                  </Col>
                </Flex>
                <Flex justify="center" gap={12}>
                  <Col
                    style={{
                      padding: 12,
                      border: "solid",
                      borderWidth: 2,
                      borderRadius: 16,
                      borderColor: "#466DCF",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
                    }}
                  >
                    <Image
                      style={{ width: imageSize(), height: imageSize() }}
                      src={logoPostman}
                      preview={false}
                    />
                  </Col>
                  <Col
                    style={{
                      padding: 12,
                      border: "solid",
                      borderWidth: 2,
                      borderRadius: 16,
                      borderColor: "#466DCF",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
                    }}
                  >
                    <Image
                      style={{ width: imageSize(), height: imageSize() }}
                      src={logoAndroid}
                      preview={false}
                    />
                  </Col>
                  <Col
                    style={{
                      padding: 12,
                      border: "solid",
                      borderWidth: 2,
                      borderRadius: 16,
                      borderColor: "#466DCF",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
                    }}
                  >
                    <Image
                      style={{ width: imageSize(), height: imageSize() }}
                      src={logoAndroidStudio}
                      preview={false}
                    />
                  </Col>
                  <Col
                    style={{
                      padding: 12,
                      border: "solid",
                      borderWidth: 2,
                      borderRadius: 16,
                      borderColor: "#466DCF",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
                    }}
                  >
                    <Image
                      style={{ width: imageSize(), height: imageSize() }}
                      src={logoFirebase}
                      preview={false}
                    />
                  </Col>
                </Flex>
              </Flex>
            )}
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Skill;
