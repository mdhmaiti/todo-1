import "./App.css";
import List from "./components/BottomSection/List";
import Container from "./components/Container/Container";
import InputTask from "./components/MiddleSection/InputTask";
import TopSection from "./components/TopSection/TopSection";

const App = () => {
  return (
    <div className="flex justify-center h-full w-full   ">
      <img
        className="absolute inset-0 w-screen  md:max-h-full h-screen object-cover object-center opacity-80 overflow-hidden "
        src="mountain.jpg"
        alt="mountain image"
      />

      <div className=" border-solid border-2 drop-shadow-md rounded-3xl relative flex flex-col justify-center h-full w-auto md:w-6/12 space-y-3 p-4  pb-3.5  ">
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-80 z-0 rounded-3xl blur-sm  "
          src="mountain.jpg"
          alt="mountain image"
        />

        {/* structure */}
        <Container title="TopSection">
          <TopSection />
        </Container>
        <Container title="MiddleSection">
          {/* <MiddleSection/> */}
          <InputTask />
        </Container>

        <Container title="BottomSection">
          {/* <BottomSection/> */}
          <List />
        </Container>
      </div>
    </div>
  );
};

export default App;
