import React ,{useState} from "react";
import { Ingredient} from '../../Models/SearchingDTO/IngredientsSearchTypes';
const ingredientsData : Ingredient[]= [
    { Id: 1, Name: "Garlic" },
    { Id: 2, Name: "Red Chili" },
    { Id: 3, Name: "Green Chili" },
    { Id: 4, Name: "Red Onion" },
    { Id: 5, Name: "Spring Onion" },
    { Id: 6, Name: "Potato" },
    { Id: 7, Name: "Black Pepper" },
    { Id: 8, Name: "Salt" },
    { Id: 9, Name: "Sugar" },
    { Id: 10, Name: "Bell Pepper - Red" },
    { Id: 11, Name: "White Onion" },
    { Id: 12, Name: "Green Peas" },
    { Id: 13, Name: "Chicken Breast" },
    { Id: 14, Name: "Eggplant" },
    { Id: 15, Name: "Zucchini" },
    { Id: 16, Name: "Bell Pepper - Green" },
    { Id: 17, Name: "White Onion" },
    { Id: 18, Name: "Beets" },
    { Id: 19, Name: "Celery" },
    { Id: 20, Name: "Olive Oil" },
    { Id: 21, Name: "White Wine Vinegar" },
    { Id: 22, Name: "Goat Cheese" }
]

const IngredientSelector: React.FC<{ onSelectionChange: (selectedIds: number[]) => void }> = ({ onSelectionChange }) => {
    const [selectedIngredients, setSelectedIngredients] = useState<number[]>([]);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setSelectedIngredients([...selectedIngredients, id]);
        } else {
            setSelectedIngredients(selectedIngredients.filter(selectedId => selectedId !== id));
        }
    };

    return (
        <div>
            <h3>Select Ingredients:</h3>
            {ingredientsData.map(ingredient => (
                <div key={ingredient.Id}>
                    <label>
                        <input
                            type="checkbox"
                            value={ingredient.Id}
                            checked={selectedIngredients.includes(ingredient.Id)}
                            onChange={event => handleCheckboxChange(event, ingredient.Id)}
                        />
                        {ingredient.Name}
                    </label>
                </div>
            ))}
            <button onClick={() => onSelectionChange(selectedIngredients)}>Search</button>
        </div>
    );
};

export default IngredientSelector;