import { Outlet } from "react-router-dom";
import Directories from "../../Components/directories/directories.component";

const Home = () => {
  return (
    <>
      <Directories />;
      <Outlet />
    </>
  );
};

export default Home;
