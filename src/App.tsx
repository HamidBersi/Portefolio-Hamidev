import Header from "./Components/Header";
import Main from "./Components/Main";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Header />
        <Main />
      </div>
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
