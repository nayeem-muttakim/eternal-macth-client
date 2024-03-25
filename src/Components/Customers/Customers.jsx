import { Card, Typography } from "antd";
import CountUp from "react-countup";
import male from "/user(1).png";
import female from "/lady.png";
import total from "/male-female.png";
import married from "/wedding-invitation.png";
import "./customer.css";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const { Title } = Typography;

const Customers = () => {
  const axiosSecure = useAxiosSecure();

  return (
    <div style={{ textAlign: "center" }}>
      <Title>Customer Counter</Title>
      <div id="counter">
        <Card className="card">
          <img width={60} src={total} alt="" style={{ marginInline: "auto" }} />
          <Title level={3}>Total Biodata</Title>
          <Title>
            <CountUp end={1500} duration={5} />
          </Title>
        </Card>
        <Card className="card">
          <img width={60} src={male} alt="" style={{ marginInline: "auto" }} />
          <Title level={3}>Male Biodata</Title>
          <Title>
            <CountUp end={950} duration={5} />
          </Title>
        </Card>

        <Card className="card">
          <img
            width={60}
            src={female}
            alt=""
            style={{ marginInline: "auto" }}
          />
          <Title level={3}>Female Biodata</Title>
          <Title>
            <CountUp end={550} duration={5} />
          </Title>
        </Card>
        <Card className="card">
          <img
            width={60}
            src={married}
            alt=""
            style={{ marginInline: "auto" }}
          />
          <Title level={3}>Successful Marriages</Title>
          <Title>
            <CountUp end={443} duration={5} />
          </Title>
        </Card>
      </div>
    </div>
  );
};

export default Customers;
