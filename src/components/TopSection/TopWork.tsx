

const TopWork = ({workName,workValue,}:{workName:string,workValue:number}) => {
  return (
    <div className="flex flex-row gap-x-3 ">
        <h2>{workName}</h2>
        
        <span>{workValue}</span>
    </div>
  )
}

export default TopWork