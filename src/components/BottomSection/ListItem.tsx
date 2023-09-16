// this  contains a check box and a delete button .


//import { useState } from "react";

import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"


// here the list items is the todos 

const ListItem = ({name,done,
  id,
  toggleDone,
  handleDelete,} : { name: string; done: boolean;
    id: string;
    toggleDone: (id: string, done: boolean) => void|boolean;
    handleDelete: (id: string) => void;
  }) => {

    // const [done, setDone] = useState(false);
  return (
    <div className="flex flex-row justify-between ">
        <div className="flex flex-row gap-x-4">

          {/* on change does not work on check box properly use the on checked change function */}
            <Checkbox  checked={done}  onCheckedChange={() => toggleDone(id, !done)}/>
            
            
            <h1 className =" relative -top-1 ">{name} </h1>
        </div>
        <div className =" relative -top-1 ">
            <Button variant="destructive"  onClick={() => handleDelete(id)}>Delete</Button>
        </div>
     
    </div>
  )
}

export default ListItem