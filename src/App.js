import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import RecipeInBook from './Pages/RecipeInBook';
import AddRecipe from './Pages/AddRecipe';
import RecipeDetailPage from './Pages/RecipeDetailPage';
import SearchRecipe  from './Pages/SearchByIngredient';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<RecipeInBook />} />
      <Route path="/AddRecipe" element={<AddRecipe />} />
      <Route path="/RecipeDetail" element={<RecipeDetailPage />} />
      <Route path="/Searching" element={<SearchRecipe/>}/>
    </Routes>
    </div>

    
    
  );
}

export default App;
