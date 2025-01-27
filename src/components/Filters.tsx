
import DownArrow from "./shared/DownArrow"
import SwordIcon from "./shared/SwordIcon"
import MoneyBagIcon from "./shared/MoneyBagIcon"
import FeatherIcon from "./shared/FeatherIcon"
import React, { useState } from "react";

const Filters = () => {
  const [selectedGameOption, setSelectedGameOption] = useState("Select a game");
  const [selectedPriceOption, setSelectedPriceOption] = useState("Select a price");
  const [selectedTypeOption, setSelectedTypeOption] = useState("Select a type");

    interface DropdownProps {
    dropdownId: string;  
    options: string[];    
    setSelectedOptionHandler: typeof setSelectedGameOption;    
  }

  const Dropdown: React.FC<DropdownProps> = ({ dropdownId, options, setSelectedOptionHandler }) =>  {
  
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

  return (
    <div className='filter-container'>
        <div className="game-dropdown">
            <button className="dropdown-btn">
                <div className="dropdown-inner-btn">
                <SwordIcon width="20" height="20" color="#ffffff" />
                <p style={{ marginLeft: '10px' }}>{selectedGameOption}</p>
                </div>
                <div>
                <DownArrow width="20" height="20" color="#ffffff" />
                </div>
            </button>
            <Dropdown dropdownId="gameDropdown" options={["Option 1", "Option 2", "Option 3"]} setSelectedOptionHandler={setSelectedGameOption} />
        </div>
        <div className="search-filter-bar">
            <input type="text" placeholder="Search..." className="search-input" />
        </div>
        <div className="game-feat-dropdown">
            <button className="dropdown-btn">
                <div className="dropdown-inner-btn">
                    <MoneyBagIcon className="" width="30" height="30" color="#3cc898"/>
                    <p style={{ marginLeft:'10px' }}>
                    {selectedPriceOption}
                    </p>
                </div>
                <div>
                    <DownArrow className="" width="20" height="20" color="#ffffff"/>
                </div>
            </button>
            <Dropdown dropdownId="priceDropdown" options={["Option 1", "Option 2", "Option 3"]} setSelectedOptionHandler={setSelectedPriceOption} />

        </div>
        <div className="game-feat-dropdown">
            <button className="dropdown-btn">
                <div className="dropdown-inner-btn">
                    <FeatherIcon className="" width="20" height="20" color="#3cc898"/>
                    <p style={{ marginLeft:'10px' }}>
                    {selectedTypeOption}
                    </p>
                </div>
                <div>
                    <DownArrow className="" width="20" height="20" color="#ffffff"/>
                </div>
            </button>
            <Dropdown dropdownId="typeDropdown" options={["Option 1", "Option 2", "Option 3"]} setSelectedOptionHandler={setSelectedTypeOption} />

        </div>
    </div>
  );
};

export default Filters;