import React ,{useState} from "react";
import { Rating, RatingItemProps } from "../../Models/SearchingDTO/RatingContainer";



const ratingData: Rating[] = [
    { Rating_Val: 1, Rating_Source: "/Ratings/One_Star.png" },
    { Rating_Val: 2, Rating_Source: "/Ratings/Two_Star.png" },
    { Rating_Val: 3, Rating_Source: "/Ratings/Three_Star.png" },
    { Rating_Val: 4, Rating_Source: "/Ratings/Four_Star.png" },
    { Rating_Val: 5, Rating_Source: "/Ratings/Five_Star.png" },
];

const RatingsDisplay: React.FC<{ onRatingSelected: (ratingVal: number) => void }> = ({ onRatingSelected }) => {
    const [selectedRating, setSelectedRating] = useState<number | undefined>(undefined);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, rating: number) => {
        const isChecked = event.target.checked;
        setSelectedRating(isChecked ? rating : undefined); 
    };

    const handleSearch = () => {
        if (selectedRating !== undefined) {
            onRatingSelected(selectedRating); 
        } else {
            console.log("Please select a rating");
        }
    };

    return (
        <div>
            <h3 className="header3">Search based on Ratings</h3>
            <div className="ratingGrid">
            {ratingData.map(rating => (
                <div className="ratingDisplay" key={rating.Rating_Val}>
                    <div  >
                    <img src={rating.Rating_Source} alt={`Rating ${rating.Rating_Val}`} />
                    </div>
                            
                        <input
                            type="checkbox" className="check-style"
                            value={rating.Rating_Val}
                            checked={selectedRating === rating.Rating_Val}
                            onChange={event => handleCheckboxChange(event, rating.Rating_Val)}
                        />
                
                </div>
              
            ))}
            </div>
          
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default RatingsDisplay;