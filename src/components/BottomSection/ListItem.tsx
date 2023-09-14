// this  contains a check box and a delete button .


import { useState } from "react";
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"

const ListItem = ({name}:{name:string}) => {

  const [done, setDone] = useState(false);
  return (
    <div className="flex flex-row justify-between ">
        <div className="flex flex-row gap-x-4">
            <Checkbox checked={done} onChange={() => setDone(!done)} />
            <h1 className =" relative -top-1 ">{name} </h1>
        </div>
        <div className =" relative -top-1 ">
            <Button variant="destructive">Delete</Button>
        </div>
     
    </div>
  )
}

export default ListItem