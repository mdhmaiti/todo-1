import { intfTodo } from "@/App"
import ListItem from "./ListItem"


const List = ({todos,toggleDone, 
  handleDelete,}:{todos:intfTodo[]; toggleDone: (id: string, done: boolean) => void;
    handleDelete: (id: string) => void;}) => {


  return (
    <div className="flex flex-col gap-2">
      { todos.length? (todos.map((t)=>(
        <ListItem key = {t.id} name={t.name} done={t.done}
        id={t.id}
        toggleDone={toggleDone}
        handleDelete={handleDelete}/>

      ))): <span className="text-green-100">No tasks yet!</span>
      }
      
      
    </div>
  )
}

export default List