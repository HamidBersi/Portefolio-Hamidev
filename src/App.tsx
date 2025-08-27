import Header from "./Components/Header";
import Main from "./Components/Main";
import About from "./Components/About";

const App = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Header />
        <Main />
      </div>
      <About />
    </>
  );
};

export default App;
