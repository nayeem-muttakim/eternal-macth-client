import { Card, Typography } from "antd";
import CountUp from "react-countup";
import "./customer.css";
const { Title } = Typography;

const Customers = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Title>Customer Counter</Title>
      <div
        id="container"
        style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
      >
        <Card className="card">
          <Title level={3}>Total Biodata</Title>
          <CountUp end={1500} duration={5} />
        </Card>
        <Card className="card">
          <Title level={3}>Male Biodata</Title>
          <CountUp end={950} duration={5} />
        </Card>

        <Card className="card">
          <Title level={3}>Female Biodata</Title>
          <CountUp end={550} duration={5} />
        </Card>
        <Card className="card">
          <Title level={3}>Successful Marriages</Title>
          <CountUp end={443} duration={5} />
        </Card>
      </div>
    </div>
  );
};

export default Customers;
