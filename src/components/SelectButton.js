import './selectbutton.css'
const SelectButton = ({ children, selected, onClick }) => {
 
  
    return (
      <span onClick={onClick} className="selectbutton">
        {children}
      </span>
    );
  };
  
  export default SelectButton;