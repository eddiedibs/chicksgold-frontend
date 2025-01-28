
import React from "react";

interface DropdownProps {
    dropdownId: string;  
    options: string[];    
    setSelectedOptionHandler: React.Dispatch<React.SetStateAction<string>>;    
  }


const Dropdown: React.FC<DropdownProps> = ({ dropdownId, options, setSelectedOptionHandler }) => {
    
    const handleSelect = (option: string) => {
      setSelectedOptionHandler(option); 
    };
  
    return (
        <ul className={`dropdown-menu dropdown ${dropdownId}`}>
                {options.map((option, index) => (
                    <li 
                    key={index} 
                    className="dropdown-item" 
                    onClick={() => handleSelect(option)}
                    >
                    {option}
                    </li>
                ))}
        </ul>
    );

};

export default Dropdown;