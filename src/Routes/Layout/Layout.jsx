import { Outlet } from "react-router-dom";
import { Nav } from "../../components/Nav";
import { Root } from "./styled";

export const Layout = () => {
  return (
    <Root>
      <Nav />
      <Outlet />
    </Root>
  );
};
