
import "./App.css";
import List from "./components/BottomSection/List";
import Container from "./components/Container/Container";
import InputTask from "./components/MiddleSection/InputTask";
import TopSection from "./components/TopSection/TopSection";
import { v4 as uuidv4 } from 'uuid';
import { FormEvent, useState } from "react";
// the FormEvent is from the typescript.
export interface intfTodo {
  name: string;
  done: boolean;
  id: string;
}





const App = () => {

  //note here i am defining the states at the top level and passing the states as a property by drilling through the children components.
  //here i have to first drill through the list and then to the list item to make it work .. here the state management library such as the recoil comes into picture .

  const[todos,setTodos]= useState<intfTodo[]>([])


  const handleSubmitTodo = (e: FormEvent<HTMLFormElement>, value: string) => {
    e.preventDefault();
    const newTodo = {
      name: value,
      done: false,
      id: uuidv4(),
    };
    setTodos((todos) => [...todos, newTodo]);
  };

 
    
     

  const handleDeleteTodo = (id: string) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };


  return (
    <div className="flex justify-center h-full w-full   ">
      <img
        className="absolute inset-0  h-full w-screen object-cover object-center opacity-80 overflow-hidden "
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
          <TopSection todos={todos} />
        </Container>
        <Container title="MiddleSection">
          {/* <MiddleSection/> */}
          <InputTask handleSubmit={handleSubmitTodo} />
        </Container>

        <Container title="BottomSection">
          {/* <BottomSection/> */}
          <List todos={todos}  handleDelete={handleDeleteTodo} />
        </Container>
      </div>
    </div>
  );
};

export default App;
