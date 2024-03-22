import ggLogo from "/google.png";
import toast from "react-hot-toast";

import { useLocation, useNavigate } from "react-router-dom";
import { Avatar, Button } from "antd";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import "./social.css";
const Social = () => {
  const { googleSignIn } = useAuth();

  const axiosPublic = useAxiosPublic();

  const location = useLocation();

  const navigate = useNavigate();

  const to = location?.state?.from?.pathname || "/";

  const handleGoogle = async () => {
    const toasted = toast.loading("Signing In");

    googleSignIn()
      .then((res) => {
        const userInfo = {
          email: res?.user?.email,
          name: res?.user?.displayName,
          role: "user",
          membership:false
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          toast.success("Signed In", { id: toasted });
          navigate(to);
        });
      })
      .catch((err) => {
        toast.error("Invalid User", { id: toasted });
      });
  };

  return (
    <div>
      {/* google register */}
      <Button
        id="button"
        shape="round"
        style={{
          width: "350px",
          paddingTop: 12,
          paddingBottom: 40,
          border: 0,
        }}
        onClick={handleGoogle}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <Avatar size={27} src={ggLogo} />
          Continue With Google
        </div>
      </Button>
    </div>
  );
};

export default Social;
