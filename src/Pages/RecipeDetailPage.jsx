import React, { useEffect, useState } from "react";
import Dropdown from "../Components/Dropdown/Dropdown";
import RecipeDetail from "../Components/RecipeDetail/RecipeDetail";
import Sandwich from "../Data/Sandwich";
import urls from "../Data/URL";
import { useParams } from "react-router-dom";

function RecipeDetailPage(){
    const [bookId, setBookId] = useState();
    const [recipe, setRecipe] = useState(null);
    const [data, setData] = useState(null);
    const [books, setBooks] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        const fetchRecipe = async () =>{
            try{
                const recipeId = id? id: 1;
                const url = `${urls.recipe.GetByID}id?id=${recipeId}`;
                const response = await fetch(url);

                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setBookId(data.GroupId);
                setRecipe(data);
                // console.log(data);
            }catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

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
        
        fetchRecipe();
        fetchBooks();
    }, []);
    return(
        <div className="body">
            <h1>Recipe Detail</h1>
            <Dropdown 
                bookId = {bookId} 
                setBookId = {setBookId}
                books = {books}
            />
            <RecipeDetail recipe={recipe}/>
        </div>
    );
}

export default RecipeDetailPage;