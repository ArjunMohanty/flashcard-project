import { RiMenuLine, RiHome4Line, RiBook2Line } from "react-icons/ri";
import { GiMagnifyingGlass, GiStack } from "react-icons/gi";
import { ImLab } from "react-icons/im";
import { HiPhotograph } from "react-icons/hi";

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
