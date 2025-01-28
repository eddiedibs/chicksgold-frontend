
import DownArrow from "./shared/icons/DownArrow"
import SwordIcon from "./shared/icons/SwordIcon"
import MoneyBagIcon from "./shared/icons/MoneyBagIcon"
import FeatherIcon from "./shared/icons/FeatherIcon"
import MagnifyingGlassIcon from "./shared/icons/MagnifyingGlassIcon"
import Dropdown from "./shared/icons/Dropdown"
import { useState } from "react";

const Filters = () => {
  const [selectedGameOption, setSelectedGameOption] = useState("Select a game");
  const [selectedPriceOption, setSelectedPriceOption] = useState("Select a price");
  const [selectedTypeOption, setSelectedTypeOption] = useState("Select a type");

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
            <MagnifyingGlassIcon className="" width="20" height="20" color="#ffffff"/>
            <input type="text" placeholder="Search..." className="search-input" />
        </div>
        <div className="game-feat-dropdown">
            <button className="dropdown-btn">
                <div className="dropdown-inner-btn">
                    <MoneyBagIcon className="" width="30" height="30" color="#3cc898"/>
                    <div>
                        <label className="dropdown-label">Price</label>
                        <p style={{ margin:'0 10px', fontSize: "0.9rem" }}>
                        {selectedPriceOption}
                        </p>
                    </div>
                    
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
                    <div>
                        <label className="dropdown-label">Item type</label>
                        <p style={{ margin:'0 10px', fontSize: "0.9rem" }}>
                        {selectedTypeOption}
                        </p>
                    </div>
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