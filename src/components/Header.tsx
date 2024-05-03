import Container from "./Container";
import ThemeToggleButton from "./ThemeToggleButton";

const Header = () => {
  return (
    <header className="shadow-md py-4 dark:bg-dark-mode-blue">
      <Container>
        <div className="flex justify-between items-center">
          <h2 className="font-extrabold text-sm md:text-2xl">
            Where in the world?
          </h2>
          <ThemeToggleButton />
        </div>
      </Container>
    </header>
  );
};

export default Header;
