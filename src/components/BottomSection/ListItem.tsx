// this  contains a check box and a delete button .


import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"

const ListItem = () => {
  return (
    <div className="flex flex-row justify-between ">
        <div className="flex flex-row gap-x-4">
            <Checkbox />
            <h1 className =" relative -top-1 ">task </h1>
        </div>
        <div className =" relative -top-1 ">
            <Button variant="destructive">Delete</Button>
        </div>
     
    </div>
  )
}

export default ListItem