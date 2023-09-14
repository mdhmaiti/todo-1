// this section contains three parts : 
// total work , total work to do now , and completed work .

import { intfTodo } from "@/App"
import TopWork from "./TopWork"

const TopSection = ({todos}:{todos:intfTodo[]}) => {

  const total =todos.length;
  const left = todos.filter((todo)=>todo.done==false).length;
  const completed = todos.filter((todo)=>todo.done==true).length;

  return (
    <div className="flex flex-row justify-between">
        {/* passing the three items */}
        <TopWork workName={"total"} workValue={total}/>
        <TopWork workName={"left"} workValue={left}/>
        <TopWork workName={"completed"} workValue={completed}/>
        
    </div>
  )
}

export default TopSection