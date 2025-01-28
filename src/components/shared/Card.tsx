import React, {useState} from "react";
import LineSpan from "./LineSpan";
import CardCartIcon from "./icons/CardCartIcon";
import QuantityInput from "./icons/QuantityInput";

interface CardProps {
    title: string;
    description: string;
    image: string;
    isOnSale: boolean;
    discountPrice: number | null;
    originalPrice: number;
    totalQuantity: number;
    detailsActionText: string;
    paymentActionText: string;
    onDetailsActionClick: () => void;
    onPaymentActionClick: (quantity: number) => void;
  }

  const Card: React.FC<CardProps> = ({ 
        title, 
        description,
        image,
        isOnSale = true,
        discountPrice = null,
        originalPrice,
        totalQuantity,
        detailsActionText,
        paymentActionText,
        onDetailsActionClick,
        onPaymentActionClick }) => {
    const [quantity, setQuantity] = useState(0); // Initial quantity state

    const handleQuantityChange = (value: number) => {
        setQuantity(value); // Update the quantity
      };

    return (
        <div className="card">
            <div className="card-item-feat-container">
                <div style={{ marginRight: "30%" }}>
                    {isOnSale ? (
                        <>
                            <li className="green-bullet">On Sale</li>
                        </>
                    ) : (
                        <div></div>
                    )}
                    <LineSpan text="In Stock" />
                </div>
                <QuantityInput 
                    value={quantity} 
                    onChange={handleQuantityChange} 
                    min={0} 
                    max={totalQuantity} 
                />
            </div>
            <div className="card-image">
                <img style={{ width: "50px", height: "50px" }} src={image} alt={title} />
            </div>
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <div className="card-price-container">
                    {discountPrice ? (
                        <>
                        <span className="discount-price">${discountPrice}</span>
                        <span className="original-price" style={{textDecoration: 'line-through', textDecorationColor:'#fd4a4a'}}>
                            ${originalPrice}
                        </span>
                        </>
                    ) : (
                        <span className="original-price" style={{ fontWeight: "500" }}>${originalPrice}</span>
                    )}
                    </div>
                <p className="card-description">{description}</p>
            </div>
            <div className="card-action">
                <button className="details-btn" onClick={onDetailsActionClick}>
                    {detailsActionText}
                </button>
                <button className="buy-btn" 
                onClick={() => {
                    if (quantity === 0) {
                      alert("Please select a quantity greater than 0 before proceeding.");
                    } else {
                      onPaymentActionClick(quantity);
                    }
                  }}
                
                >
                    <span>
                        {paymentActionText}
                    </span>
                    <div className="buy-btn-icon-container">
                        <CardCartIcon width="15" height="15" color="#ffffff" />
                    </div>
                </button>
            </div>
        </div>
  );
};

export default Card;
