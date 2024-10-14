import { Button, Typography } from "antd";

const {Text} = Typography

const DownloadCV = () => {
  return (
    <a
      href="../assets/Document/dummyDoc.pdf"
      download="Resume Taufan Adhitya.pdf"
    >
      <Button type="light-blue">
        <Text type="White-16-500">Download CV</Text>
      </Button>
    </a>
  );
};

export default DownloadCV;
