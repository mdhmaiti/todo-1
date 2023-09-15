// this  contains a check box and a delete button .


//import { useState } from "react";
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"


// here the list items is the todos 

const ListItem = ({name,
  id,
  
  handleDelete,}:{ name: string; done: boolean;
    id: string;
    
    handleDelete: (id: string) => void;
  }) => {


  return (
    <div className="flex flex-row justify-between ">
        <div className="flex flex-row gap-x-4">
            <Checkbox  />
           
            
            <h1 className =" relative -top-1 ">{name} </h1>
        </div>
        <div className =" relative -top-1 ">
            <Button variant="destructive"  onClick={() => handleDelete(id)}>Delete</Button>
        </div>
     
    </div>
  )
}

export default ListItem