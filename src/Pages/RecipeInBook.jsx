import React from "react";
import Dropdown from "../Components/Dropdown/Dropdown";
import DishCard from "../Components/DishCard/DishCard";
import recipes from "../Data/Recipe";
import urls from "../Data/URL";
import { useState, useEffect } from "react";

function createDishCards(dishItem){
    return <DishCard 
        key = {dishItem.Id}
        image = {dishItem.ImageData}
        id = {dishItem.Id}
        title = {dishItem.RecipeName}
        description = {dishItem.RecipeDescription}
    />
}

function RecipeInBook(){
    const [bookId, setBookId] = useState(null);
    const [books, setBooks] = useState(null);
    // fetch data from server
    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        const fetchBooks = async () =>{
            // fetch the data first
            const url = urls.recipe.GetBookView;
            const response = await fetch(url);
            console.log(url);
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);

            // set the books
            data.Books && setBooks(data.Books.map(singleBook => ({
                bookId : singleBook.Id,
                bookTitle: singleBook.Title
            })))
            
            if(data.books){
                // const recipefromdata;

            }
        }

        const fetchRecipe = async () =>{
            try{
                const groupId = 2;
                const url = `${urls.recipe.GetByGroupID}${groupId}`;
                const response = await fetch(url);

                // console.log(response);
                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setRecipes(data);
                // console.log(data);
            }catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchBooks();
        fetchRecipe();
    }, []);

    useEffect(()=>{
        console.log(books);
    }, [books]);

    // map the data
    return(
        <div className="body">
            <h1>Recipes</h1>
            <Dropdown 
                books = {books}
                setBookId = {setBookId}
            />
            {recipes && recipes.length > 0 ? recipes.map(createDishCards) : <p>No Recipes found</p>}
            
            
        </div>
    );
}

export default RecipeInBook;