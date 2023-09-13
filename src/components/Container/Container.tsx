// This is a seperate section that will be used in every part

// we will make a container and each container have its optional title and its children
const Container = ({
  children,
  title,
  
}: {
  children: JSX.Element | JSX.Element[];
  title?: string;
  
}) => {
  return (
    <div className="  hover:bg-slate-100  hover:bg-opacity-50 rounded-lg  drop-shadow-md p-5  overflow-hidden hover:overflow-y-auto  md:max-h-60 max-h-80 ">
        {/* here conditionally render if the title is not the null and undefined make the title h2 */}
      {title && <h2 className="font-semibold">{title}</h2> }
      <div> {children}</div>
    </div>
  );
};
export default Container;
