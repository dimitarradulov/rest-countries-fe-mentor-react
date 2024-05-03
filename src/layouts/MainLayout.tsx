import { Outlet } from "react-router-dom";
import Container from "../components/Container";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="py-4">
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default MainLayout;
