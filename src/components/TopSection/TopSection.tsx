// this section contains three parts : 
// total work , total work to do now , and completed work .

import TopWork from "./TopWork"

const TopSection = () => {
  return (
    <div className="flex flex-row justify-between">
        {/* passing the three items */}
        <TopWork workName={"total"} workValue={1}/>
        <TopWork workName={"left"} workValue={2}/>
        <TopWork workName={"completed"} workValue={3}/>
        
    </div>
  )
}

export default TopSection