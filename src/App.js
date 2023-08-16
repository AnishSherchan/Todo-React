import "./App.css";
import NavBar from "./components/NavBar";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <div className="md:flex flex-col justify-center md:h-screen items-center">
      <div className="bg-[#FFFFFF] md:w-[38rem] w-full rounded-3xl h-screen md:h-min p-6 px-8 flex flex-col gap-5">
        <NavBar />
        <TodoContainer />
      </div>
    </div>
  );
}

export default App;
