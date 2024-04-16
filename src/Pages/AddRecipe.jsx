import React from "react";
import Dropdown from "../Components/Dropdown/Dropdown";
import RecipeDetail from "../Components/RecipeDetail/RecipeDetail";
import { useState, useEffect } from "react";
import urls from "../Data/URL";

function AddRecipe(){
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

    return(
        <div className="body">
            <h1>Add Recipes</h1>
            <Dropdown
                books = {books}
                setBookId = {setBookId}
            />
            <RecipeDetail recipe={null} bookId = {bookId}/>
        </div>
    );
}

export default AddRecipe;