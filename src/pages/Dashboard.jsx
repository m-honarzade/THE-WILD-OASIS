import { useEffect } from "react";
import getCabins from "../services/apiCabins";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">Dashboard</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Dashboard;
