import { Button } from "../ui/button";
import { Input } from "../ui/input";

const InputTask = () => {
  return (
    <div className=" flex flex-row justify-between">
      <div className="flex flex-1 drop-shadow-lg px-3">
        <Input type="email" placeholder="write your task" />
      </div>
      <div>
        <div>
        <Button >Add task</Button>
        </div>
      </div>
    </div>
  );
};

export default InputTask;
