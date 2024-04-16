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
    const [data, setData] = useState(null);
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
            setData(data);

            // set the books
            if(data.Books){
                if(!bookId){
                    if(data.Books.length > 0 && data.Books[0].Id != null){
                        setBookId(data.Books[0].Id);
                    }
                }
                setBooks(data.Books.map(singleBook => ({
                    bookId : singleBook.Id,
                    bookTitle: singleBook.Title
                })));

                const selectedBook = data.Books.find(book => book.bookId === bookId);
                if(selectedBook){
                    setRecipes(selectedBook.Recipes);
                }

                // setRecipeData(data);
            }
        }
        fetchBooks();
    }, []);

    useEffect(()=>{
        if(books && bookId){
            const selectedBook = data.Books.find(book => book.Id == bookId);
                if(selectedBook){
                    setRecipes(selectedBook.Recipes);
                }
        }
    }, [books, bookId]);

    // map the data
    return(
        <div className="body">
            <h1>Recipes</h1>
            <Dropdown 
                books = {books}
                bookId = {bookId}
                setBookId = {setBookId}
            />
            {recipes && recipes.length > 0 ? recipes.map(createDishCards) : <p>No Recipes found</p>}
            
            
        </div>
    );
}

export default RecipeInBook;