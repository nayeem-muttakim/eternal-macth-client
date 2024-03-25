import { Card } from "antd";
import { Typography } from "antd";
import create from "/create.png";
import search from "/search.png";
import connect from "/connect.png";
import interact from "/interact.png";
import "./process.css";
const { Title } = Typography;
const Process = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Title level={1}>How our website works</Title>
      <div id="process">
        <Card className="card">
          <img src={create} style={{ marginInline: "auto" }} />
          <Title level={3}>Create Biodata</Title>
          <p>Create a biodata easily without any cost</p>
        </Card>
        <Card className="card">
          <img src={search} style={{ marginInline: "auto" }} />
          <Title level={3}>Search Biodata</Title>
          <p>Search biodata by filtering by age , biodata type and division</p>
        </Card>

        <Card className="card">
          <img src={connect} style={{ marginInline: "auto" }} />
          <Title level={3}>Connect</Title>
          <p>
            If someone likes your biodata or you like someone's biodata, you can
            easily connect with them
          </p>
        </Card>
        <Card className="card">
          <img src={interact} style={{ marginInline: "auto" }} />
          <Title level={3}>Get Married</Title>
          <p>
            If you like biodata and the person,you can move forward after taking
            all information
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Process;
