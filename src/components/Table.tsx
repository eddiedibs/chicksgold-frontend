import React, { useEffect, useState } from "react";
import Card from "./shared/Card"; // Assuming Card is your component that displays item details
import itemsData from "../data/items/items.json"; // Import JSON data
import Paginator from "./shared/Paginator";
import TuneIcon from '@mui/icons-material/Tune';
import DownArrow from "./shared/DownArrow"
import Dropdown from "./shared/Dropdown"

const Table: React.FC = () => {
  const [items, setItems] = useState<typeof itemsData["items"]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCustomFilter, setSelectedCustomFilter] = useState("Featured");
  const itemsPerPage = 5; // Number of items per page

  useEffect(() => {
    // Resolve the image paths dynamically when the component is mounted
    const loadImages = async () => {
      const updatedItems = await Promise.all(
        itemsData["items"].map(async (item) => {
          try {
            const imageUrl = new URL(`../assets/${item.image}`, import.meta.url).href;
            return { ...item, image: imageUrl }; // Dynamically add the image URL to the item
          } catch (error) {
            console.error("Error loading image:", error);
            return item; // Return item without image on error
          }
        })
      );
      setItems(updatedItems);
    };

    loadImages();
  }, []);

  // Calculate the current items to display based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="table-parent">
      <div className="table-header">
        <span style={{ marginLeft:'40px' }}>
          Showing {itemsPerPage} - from {items.length}
        </span>
        <div className="custom-filter" style={{ marginRight:'40px' }}>
            <button className="custom-filter-btn">
              <TuneIcon style={{ zIndex: "3", color: "#39e29d" }} width="20" height="20" />
                <div className="custom-filter-inner-btn">
                  <label className="dropdown-label">Sort by</label>
                  <span style={{ marginLeft: '10px' }}>{selectedCustomFilter}</span>
                </div>
                <div>
                    <DownArrow className="" width="20" height="20" color="#ffffff"/>
                </div>
            </button>
            <Dropdown dropdownId="customFilterDropdown" options={["Featured", "Option 2", "Option 3"]} setSelectedOptionHandler={setSelectedCustomFilter} />

        </div>
      </div>
      <div className="table-content">
        {currentItems.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            image={item.image} // assuming path is correct
            isOnSale={item.isOnSale}
            totalQuantity={item.totalQuantity}
            originalPrice={item.originalPrice}
            discountPrice={item.discountPrice}
            detailsActionText="DETAILS"
            paymentActionText="ADD"
            onDetailsActionClick={() => alert("Details clicked!")}
            onPaymentActionClick={() => alert("Add clicked!")}
          />
        ))}
      </div>
      <Paginator
        currentPage={currentPage}
        totalPages={Math.ceil(items.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;
