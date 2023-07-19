import { Outlet } from "react-router-dom";
import CategoriesMenu from "../../Components/categories-menu/categories_menu.component";

const Home = () => {
  return (
    <>
      <CategoriesMenu />;
      <Outlet />
    </>
  );
};

export default Home;
