import AppBar from "components/AppBar/AppBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <Container>
      <AppBar/>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;