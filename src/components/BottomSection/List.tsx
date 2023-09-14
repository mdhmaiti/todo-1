import { intfTodo } from "@/App"
import ListItem from "./ListItem"


const List = ({todos}:{todos:intfTodo[]}) => {


  return (
    <div className="flex flex-col gap-2">
      {todos.map((t)=>(
        <ListItem key = {t.id} name={t.name}/>

      ))}
      
      
    </div>
  )
}

export default List