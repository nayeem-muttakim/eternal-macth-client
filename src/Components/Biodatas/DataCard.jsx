import { Button, Card } from "antd";
import { Link } from "react-router-dom";
import "./biodatas.css";
const DataCard = ({ biodata }) => {
  return (
    <Card
      className="bio-card"
      title={`Biodata id : ${biodata?.id}`}
      extra={
        <Link to={`/bio-data/${biodata?._id}`}>
          <Button type="dashed">View Profile</Button>
        </Link>
      }
    >
      <p>Biodata Type : {biodata?.type}</p>
      <p>Perment Address : {biodata?.permanent_division}</p>
      <p>Age : {biodata?.age}</p>
      <p>Occupation : {biodata?.occupation}</p>
    </Card>
  );
};

export default DataCard;
