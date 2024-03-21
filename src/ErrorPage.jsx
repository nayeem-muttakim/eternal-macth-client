import { Link, useRouteError } from "react-router-dom";
import Error from "./assets/matriError.json";
import Lottie from "lottie-react";

import { Button } from "antd";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        paddingInline: 2,
      }}
    >
      <Lottie style={{ height: 600 }} animationData={Error} />
      <Link to={"/"}>
        <Button
          size="large"
          type="primary"
          style={{ backgroundColor: "#ff8fab" }}
          block
        >
          Home
        </Button>
      </Link>
    </div>
  );
}
