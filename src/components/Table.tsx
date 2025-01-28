import React, { useEffect, useState } from "react";
import Card from "./shared/Card"; 
import itemsData from "../data/items/items.json"; 
import Paginator from "./shared/Paginator";
import TuneIcon from '@mui/icons-material/Tune';
import DownArrow from "./shared/icons/DownArrow"
import Dropdown from "./shared/icons/Dropdown"
import { useCart } from "../context/CartContext";

const Table: React.FC = () => {
  const [items, setItems] = useState<typeof itemsData["items"]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCustomFilter, setSelectedCustomFilter] = useState("Featured");
  const itemsPerPage = 5; 
  const { addToCart } = useCart();
  useEffect(() => {
    const loadImages = async () => {
      const updatedItems = await Promise.all(
        itemsData["items"].map(async (item) => {
          try {
            const imageUrl = new URL(`../assets/${item.image}`, import.meta.url).href;
            return { ...item, image: imageUrl }; 
          } catch (error) {
            console.error("Error loading image:", error);
            return item; 
          }
        })
      );
      setItems(updatedItems);
    };

    loadImages();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="table-parent">
      <div className="table-header">
        <span className="table-header-span">
          Showing {itemsPerPage} - from {items.length}
        </span>
        <div className="custom-filter">
            <button className="custom-filter-btn">
              <TuneIcon style={{ zIndex: "3", color: "#39e29d" }} width="20" height="20" />
                <div className="custom-filter-inner-btn">
                  <label className="dropdown-label">Sort by</label>
                  <span className="dropdown-custom-filter">{selectedCustomFilter}</span>
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
            image={item.image} 
            isOnSale={item.isOnSale}
            totalQuantity={item.totalQuantity}
            originalPrice={item.originalPrice}
            discountPrice={item.discountPrice}
            detailsActionText="DETAILS"
            paymentActionText="ADD"
            onDetailsActionClick={() => alert("Details clicked!")}
            onPaymentActionClick={(selectedQuantity) => addToCart(selectedQuantity)}
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
