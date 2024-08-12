import { RiMenuLine, RiHome4Line } from "react-icons/ri";
import { GiMagnifyingGlass } from "react-icons/gi";


export default function IconBar({ setQuizMode, setAddQuestionsView }) {
  return (
    
    <div className="sidebar-icon-bar">
        <RiMenuLine className="sidebar-icon " onClick={()=>{
          
        }}  />
      <RiHome4Line
        className="sidebar-icon"
        onClick={() => {
          setQuizMode(false);
          setAddQuestionsView(false);
          
        }}
      />
    
      <GiMagnifyingGlass className="sidebar-icon" />
      
      
    </div>
  );
}
