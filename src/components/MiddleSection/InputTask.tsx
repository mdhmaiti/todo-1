//input


import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";

// how do you understand that the handle submit should have the ,event and the value?
// Form Event: Understand that a form submission is associated with a form event (FormEvent), 
// which provides information about the submission event itself. This event object allows you to prevent the default form submission behavior, among other things.

// in short make it such that when the add task is clicked , the event is triggered , and the value(current state ) is passed along wit the event .
// then initilaize the next state to an empty variable .
const InputTask = ({
  handleSubmit,
}: {
  handleSubmit: (e: FormEvent<HTMLFormElement>, value: string) => void;
}) => {


  // this task and set new task works as a tarcking of the input and it stores the every change in put to a new state
  const [newTask, setNewTask] = useState("");
  return (
    // this state is triggered whent he user clickig the submit button and it moves to a new state 
    // the action is null cause it doen not need to trigger the back end for the level 1 todo . it just need to be in the presend url .. 
    <form
      action=""
      className=""
      onSubmit={(e) => {
        handleSubmit(e, newTask);
        setNewTask("");
        console.log("submit");
        console.log(newTask);
      }}
    >
    <div className=" flex flex-row justify-between">
      <div className="flex flex-1 drop-shadow-lg px-3">
        {/* this state is triggerend when the user is giving input on the keyboard  eg h,then he,hel,hell,hello*/}
        <Input type="text" placeholder="write your task"  
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}/>
      </div>
      <div>
        <div>
        <Button type="submit">Add task</Button>
        </div>
      </div>
    </div>
    </form>
  );
};

export default InputTask;
